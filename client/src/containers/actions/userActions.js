/*
  * Author: Sameer Sitre
  * https://www.linkedin.com/in/sameersitre/
  * https://github.com/sameersitre
  * File Description:  
 */

import {
  PRODUCT_LIST, USER_CART, MOVIE_DATA, TVSHOW_DATA, DETAILS_DATA, BUFFER_ENABLE,
} from './types';
import axios from 'axios'
import { RAPID_API_KEY, TMDB_API_KEY, main_url } from '../../utils/Config';

export const productList = data => (dispatch) => {

  dispatch({
    type: PRODUCT_LIST,
    payload: data
  })
};
export const addtoCart = data => (dispatch) => {

  dispatch({
    type: USER_CART,
    payload: data
  })
};

export const updateMovieData = data =>  (dispatch) => {
  // axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${TMDB_API_KEY}`)
   axios.post(`${main_url}/trending/all`)
    .then(res =>
      dispatch({
        type: MOVIE_DATA,
        payload: res.data.results
      })
    )
    .catch(function (error) {
      console.log(error);
    })

};

export const updateTvShowData = data => async (dispatch) => {
  await axios.get(`https://api.themoviedb.org/3/trending/tv/day?api_key=${TMDB_API_KEY}`)
    .then(res => {
      dispatch({
        type: TVSHOW_DATA,
        payload: res.data.results
      });
    })
    .catch(function (error) {
      console.log(error);
    })
};

export const searchResultData = data => async (dispatch) => {
  await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${TMDB_API_KEY}&language=en-US&query=${data}&page=1&include_adult=false`)
    .then(res => {
      dispatch({
        type: MOVIE_DATA,
        payload: res.data.results
      });
    })
    .catch(function (error) {
      console.log(error);
    })
};



export const filterMovieData = data => async (dispatch) => {
  let genreArray = [];

  for (let i = 0; i < data.length; i++) {
    genreArray.push(data[i].id)
  }

  console.log(genreArray)
  let genreString = genreArray.join("%2C");
  console.log(genreString)

  await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreString}`)
    .then(res => {
      dispatch({
        type: MOVIE_DATA,
        payload: res.data.results
      });
    })
    .catch(function (error) {
      console.log(error);
    })
};

export const getDetails = data => async (dispatch) => {
  let movieDetails = null;
  let videos = null;
  let streamAvailablity = null;
  let combinedData = null;
  let mediaTypeSelected = null

  // json field 'media_type' is unavailable in filtered response json
  if (data.media_type) {
    mediaTypeSelected = data.media_type
  }
  else if (data.title) {
    mediaTypeSelected = 'movie'
  }
  else if (data.name) {
    mediaTypeSelected = 'tv'
  }

  dispatch({
    type: BUFFER_ENABLE,
    payload: true
  });


  //GET MOVIE DETAILS
  await axios.get(`https://api.themoviedb.org/3/${mediaTypeSelected}/${data.id}?api_key=${TMDB_API_KEY}&language=en-US`)
    .then(res => {
      movieDetails = res.data

    })
    .catch(function (error) {
      console.log(error);
    })

  // GET LIST OF VIDEOS
  await axios.get(`https://api.themoviedb.org/3/${mediaTypeSelected}/${data.id}/videos?api_key=${TMDB_API_KEY}&language=en-US`)
    .then(res => {
      videos = res.data

    })
    .catch(function (error) {
      console.log(error);
    })

  // GET AVAILABLE STREAMING SERVICES
  await axios({
    "method": "GET",
    "url": "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/idlookup",
    "headers": {
      "content-type": "application/octet-stream",
      "x-rapidapi-host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
      "x-rapidapi-key": RAPID_API_KEY
    }, "params": {
      "source_id": data.id,
      "source": "tmdb"
    }
  })
    .then(res => {
      streamAvailablity = res.data.collection.locations
    })
    .catch((error) => {
      console.log(error)
    })

  combinedData = [movieDetails, videos, streamAvailablity]

  dispatch({
    type: DETAILS_DATA,
    payload: combinedData
  });
  dispatch({
    type: BUFFER_ENABLE,
    payload: false
  });
};



