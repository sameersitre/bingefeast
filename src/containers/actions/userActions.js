
import {
  PRODUCT_LIST, USER_CART,
  MOVIE_DATA, TVSHOW_DATA, DETAILS_DATA, BUFFER_ENABLE
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
  await axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=a2d451cdbcf87912820b3b17b82514c3')
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

export const updateTvShowData = data => async (dispatch) => {
  await axios.get('https://api.themoviedb.org/3/trending/tv/day?api_key=a2d451cdbcf87912820b3b17b82514c3')
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


export const getDetails = data => async (dispatch) => {
  let trailers = [];
  let combinedData = null;
  // dispatch({
  //   type: DETAILS_DATA,
  //   payload: []
  // });
  dispatch({
    type: BUFFER_ENABLE,
    payload: true
  });
  await axios.get(`https://api.themoviedb.org/3/${data.media_type}/${data.id}/videos?api_key=a2d451cdbcf87912820b3b17b82514c3&language=en-US`)
    .then(res => {
      trailers = res.data
     
    })
    .catch(function (error) {
      console.log(error);
    })

  await axios.get(`https://api.themoviedb.org/3/${data.media_type}/${data.id}?api_key=a2d451cdbcf87912820b3b17b82514c3&language=en-US`)
    .then(res => {
      combinedData = [trailers, res.data]
      dispatch({
        type: DETAILS_DATA,
        payload: combinedData
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