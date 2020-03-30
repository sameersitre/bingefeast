/*
  * Author: Sameer Sitre
  * https://www.linkedin.com/in/sameersitre/
  * https://github.com/sameersitre
  * File Description:  
 */

import {
  MOVIE_DATA, DETAILS_DATA, BUFFER_ENABLE, SEARCH_TEXT_AVAILABLE
} from './types';
import axios from 'axios'
import { main_url } from '../../utils/Config';

export const refreshDashboard = data => (dispatch) => {
  dispatch({
    type: SEARCH_TEXT_AVAILABLE,
    payload: data
  })
};

export const trendingList = data => async (dispatch) => {
  console.log(data)
  await axios.post(`${main_url}/trending`, data)
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

export const searchResultData = data => async (dispatch) => {
  await axios.post(`${main_url}/search`, data)
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
  let genreString = genreArray.join("%2C");
  let params = { genres: genreString }
  await axios.post(`${main_url}/filter`, params)
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