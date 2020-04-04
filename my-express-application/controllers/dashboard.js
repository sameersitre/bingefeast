/*
  * Author: Sameer Sitre
  * https://www.linkedin.com/in/sameersitre/
  * https://github.com/sameersitre
  * File Description:  
 */

var apiKeys = require('../config');
var axios = require('axios')
var fetch = require('node-fetch')

function getUserDashboardData() {

  this.popularList = function (req, response) {
    console.log(apiKeys.TMDB_API_KEY)
    axios.get(`${apiKeys.MAIN_URL}/trending/all/day?api_key=${apiKeys.TMDB_API_KEY}`)
      .then(res => {
        response.send(res.data)
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  /* *********    TRENDING ALL/TV/MOVIE DAY    ********** */
  this.trendingList = async function (req, response) {
    console.log(apiKeys.TMDB_API_KEY)
    let data = req.body
    await axios.get(
      `${apiKeys.MAIN_URL}/trending/${data.type}/day?api_key=${apiKeys.TMDB_API_KEY}`
    )
      .then(res => {
        response.send(JSON.stringify(res.data))
      })
      .catch(function (error) {
        console.log(error);
        response.send(error)
      })
  }

  /* *********    SEARCH RESULT    ********** */
  this.searchResult = async function (req, response) {
    console.log(apiKeys.TMDB_API_KEY)
    let data = req.body
    await axios.get(
      `${apiKeys.MAIN_URL}/search/multi?api_key=${apiKeys.TMDB_API_KEY}&language=en-US&query=${data.searchText}&page=1&include_adult=false`
    )
      .then(res => {
        response.send(JSON.stringify(res.data))
      })
      .catch(function (error) {
        console.log(error);
        response.send(error)
      })
  }

  /* *********    FILTER RESULT    ********** */
  this.filterResult = async function (req, response) {
   console.log(req.body)
    await axios.get(
      `${apiKeys.MAIN_URL}/discover/movie?api_key=${apiKeys.TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${req.body.genres}`
    )
      .then(res => {
        response.send(JSON.stringify(res.data))
      })
      .catch(function (error) {
        console.log(error);
        response.send(error)
      })
  }

  /* *********    FILTER RESULT    ********** */
  /* https://api.themoviedb.org/3/discover/movie?api_key=a2d451cdbcf87912820b3b17b82514c3&language=en-US&sort_by=release_date.asc&include_adult=false&include_video=true&page=6&primary_release_date.gte=2020-04-01 */
  this.upcomingList = async function (req, response) {
    console.log(req.body)
     await axios.get(
      `${apiKeys.MAIN_URL}/discover/movie?api_key=${apiKeys.TMDB_API_KEY}&language=en-US&sort_by=release_date.asc&include_adult=false&include_video=true&page=${req.body.page}&primary_release_date.gte=2020-04-01`
      //  `${apiKeys.MAIN_URL}/discover/movie?api_key=${apiKeys.TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${req.body.genres}`
     )
       .then(res => {
         response.send(JSON.stringify(res.data))
       })
       .catch(function (error) {
         console.log(error);
         response.send(error)
       })
   }

  /* *********    DETAILS OF SELECTED MOVIE/SERIES    ********** */
  this.getDetails = async function (req, response) {
    console.log('REQUEST BODY: ????????????????????????????????\n', req.body)
    let params = req.body
    let movieDetails = null;
    let videos = null;
    let streamAvailablity = null;
    let combinedData = null;
    let mediaTypeSelected = null

    // json field 'media_type' is unavailable in filtered response json
    if (params.media_type) {
      mediaTypeSelected = params.media_type
    }
    else if (params.title) {
      mediaTypeSelected = 'movie'
    }
    else if (params.name) {
      mediaTypeSelected = 'tv'
    }

    //GET MOVIE DETAILS
    await axios.get(`${apiKeys.MAIN_URL}/${mediaTypeSelected}/${params.id}?api_key=${apiKeys.TMDB_API_KEY}&language=en-US`)
      .then(res => {
        movieDetails = res.data
      })
      .catch(function (error) {
        console.log(error);
      })

    // GET LIST OF VIDEOS
    await axios.get(`${apiKeys.MAIN_URL}/${mediaTypeSelected}/${params.id}/videos?api_key=${apiKeys.TMDB_API_KEY}&language=en-US`)
      .then(res => {
        videos = res.data

      })
      .catch(function (error) {
        console.log(error);
      })

    // GET AVAILABLE STREAMING SERVICES
    /* https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/idlookup?source_id=338762&source=tmdb */
    await axios({
      "method": "GET",
      "url": "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/idlookup",
      "headers": {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
        "x-rapidapi-key": apiKeys.RAPID_API_KEY
      }, "params": {
        "source_id": params.id,
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
    response.send(combinedData)
  }
}

module.exports = new getUserDashboardData()
