import React from 'react'
import Navbar from '../components/navbar'
import Banner from '../components/banner'
import Row from '../components/row'
// import Home from './home'
// import Tvshows from './tvshows'
// import Movies from './movies'
// import Popular from './popular'
// import Mylist from './mylist'
// import '../style.css'
import api from '../Apis/api'

import { BrowserRouter,Routes,Route } from 'react-router-dom'

const Netflixmain = () => {
  return (
    <div>
      {/* rendering all components for building structure */}

      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' />
        <Route path='/Tvshows' />
        <Route path='/Movies' />
        <Route path='/Mylist' / >
        <Route path='/Popular' />
      </Routes>
      </BrowserRouter>
      {/* <img src="/src/assets/banner.jpg" alt="netflix" width='100%'/> */}
      <Banner/>
      <Row title='Top Trending Movies' fetchUrl={api.fetchTrending}/>
      <Row title='TopRated Movies' fetchUrl={api.fetchTopratedmovies}/>
      <Row title='NetflixOriginals' fetchUrl={api.fetchNetflixoriginals}/>
      <Row title='ComedyMovies' fetchUrl={api.fetchComedymovies}/>
      <Row title='RomanticMovies' fetchUrl={api.fetchRomanticmovies}/>
      <Row title='ActionMovies' fetchUrl={api.fetchActionmovies}/>
      <Row title='HorrorMovies' fetchUrl={api.fetchHorrormovies}/>
      <Row title='Documenteries' fetchUrl={api.fetchDocumentaries}/>
    </div>
  )
}

export default Netflixmain
