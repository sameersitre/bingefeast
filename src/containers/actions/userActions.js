
import {
  PRODUCT_LIST, USER_CART,
  MOVIE_DATA
} from './types';
import axios from 'axios'
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

export const updateMovieData = data => async (dispatch) => {
  let responseData = null;
  let posterAddedData = [];

  // const promise0 =  new Promise((resolve, reject) => {
  await axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=a2d451cdbcf87912820b3b17b82514c3')
    .then(res => {
      // responseData = response.data.results
      dispatch({
        type: MOVIE_DATA,
        payload: res.data.results
      });
      // resolve(response)
    })
    .catch(function (error) {
      // reject(error)
      console.log(error);
    })

  /*
  
    })
    const getImage = function () {
  
      for (let i = 0; i < 5; i++) {
        axios.get('https://image.tmdb.org/t/p/w500' + responseData[i].poster_path)
          .then(function (response) {
            let temp = { ...responseData[i], bufferPoster: response }
            posterAddedData.push(temp)
            // console.log(responseData);
          })
          .catch(function (error) {
            console.log(error);
          })
          .then(function () {
          });
      }
      return Promise.resolve(posterAddedData)
    }
  
    const callAPI = function () {
      promise0
        .then( getImage)
        .then(fulfilled => console.log('fulfilled')) // fat arrow
        .then()
        .catch(error => console.log(error.message)); // fat arrow
    };
    callAPI()
    dispatch({
      type: MOVIE_DATA,
      payload: posterAddedData
    });
  
  */
};

