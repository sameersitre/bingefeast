
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
  await axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=a2d451cdbcf87912820b3b17b82514c3')
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

  await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=a2d451cdbcf87912820b3b17b82514c3&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreString}`)
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