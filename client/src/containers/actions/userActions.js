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

// export const productList = data => (dispatch) => {

//   dispatch({
//     type: PRODUCT_LIST,
//     payload: data
//   })
// };
// export const addtoCart = data => (dispatch) => {

//   dispatch({
//     type: USER_CART,
//     payload: data
//   })
// };

export const updateMovieData = data => async (dispatch) => {
 await axios.post(`${main_url}/trending/all`)
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

export const getDetails = data => async (dispatch) => {
  console.log(data)
  
  dispatch({
    type: BUFFER_ENABLE,
    payload: true
  });

  await axios.post(`${main_url}/getDetails`, data)
    .then(res => {

      dispatch({
        type: DETAILS_DATA,
        payload: res.data
      });
    })
    .catch(function (error) {
      console.log(error);
    })

  dispatch({
    type: BUFFER_ENABLE,
    payload: false
  });

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
