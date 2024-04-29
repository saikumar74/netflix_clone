import { useState, useEffect } from "react";
import axios from "axios";
import api from "../Apis/api";

const Base_url = "https://api.themoviedb.org/3";
const Base_ImgUrl = "https://image.tmdb.org/t/p/original/";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    //fetching the movie data
    const Fetchdata = async () => {
      try {
        const response = await axios.get(
          `${Base_url}${api.fetchTopratedmovies}`
        );
        console.log(response);
        setMovie(
          response.data.results[
            Math.floor(Math.random() * response.data.results.length - 1)
          ]
        );
      } catch (error) {
        console.error(error);
      }
    };
    Fetchdata();
    return () => {};
  }, []);

  let trimString = function (string, len) {
    return string?.length > len ? 
           string.substring(0, len-1) + '...' :
           string;
  };

  return (
    // <div>
    //       {movie.length > 0 && (
    //       <img
    //         src={`${Base_ImgUrl}${movie.backdrop_path}`}
    //         alt="img"
    //         style={{ width: '100%'}}
    //       />
    //     )}
    // </div>
    <section className="container-fluid" id="info-container">
      <img
        src={`${Base_ImgUrl}${movie?.backdrop_path}`}
        alt="img"
        style={{ width: "100%",height:'100vh',marginLeft:'0'}}
      />
      <div className="info m-4">
        <h3 className="fw-bold bg-transparent text-white">{movie?.title || movie?.original_title}</h3>
        <p className="text-white bg-transparent">{trimString(movie?.overview,100)}</p>
        <div className="d-grid gap-2 d-md-block bg-transparent" >
          <button className="btn btn-light mx-1" type="button">
          <i className="bi bi-play-fill bg-transparent"></i> Play
          </button>
          <button className="btn btn-light mx-1 bg-transparent text-white" type="button">
          <i className="bi bi-info-circle bg-transparent"></i> More info
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
