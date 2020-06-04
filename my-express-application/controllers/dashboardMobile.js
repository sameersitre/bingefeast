/*
 * Author: Sameer Sitre
 * https://www.linkedin.com/in/sameersitre/
 * https://github.com/sameersitre
 * File Description:
 */

var apiKeys = require("../config");
var axios = require("axios");
function getUserDashboardData() {
  this.popularList = function (req, response) {
    console.log(apiKeys.TMDB_API_KEY);
    axios
      .get(
        `${apiKeys.MAIN_URL}/trending/all/day?api_key=${apiKeys.TMDB_API_KEY}`
      )
      .then((res) => {
        response.send(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  /* *********    TRENDING ALL/TV/MOVIE DAY    ********** */
  this.trendingList = async function (req, response) {
    console.log(req.body);
    let data = req.body;
    await axios
      .get(
        `${apiKeys.MAIN_URL}/trending/${data.type}/day?api_key=${apiKeys.TMDB_API_KEY}&page=${req.body.page}`
      )
      .then((res) => {
        response.send(JSON.stringify(res.data));
      })
      .catch(function (error) {
        console.log(error);
        response.send(error);
      });
  };

  /* *********    SEARCH RESULT    ********** */
  this.searchResult = async function (req, response) {
    console.log(apiKeys.TMDB_API_KEY);
    let data = req.body;
    await axios
      .get(
        `${apiKeys.MAIN_URL}/search/multi?api_key=${apiKeys.TMDB_API_KEY}&language=en-US&query=${data.searchText}&page=1&include_adult=false`
      )
      .then((res) => {
        response.send(JSON.stringify(res.data));
      })
      .catch(function (error) {
        console.log(error);
        response.send(error);
      });
  };

  /* *********    FILTER RESULT    ********** */
  this.filterResult = async function (req, response) {
    console.log(req.body);
    await axios
      .get(
        `${apiKeys.MAIN_URL}/discover/movie?api_key=${apiKeys.TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${req.body.genres}`
      )
      .then((res) => {
        response.send(JSON.stringify(res.data));
      })
      .catch(function (error) {
        console.log(error);
        response.send(error);
      });
  };

  /* *********    FILTER RESULT    ********** */
  /* https://api.themoviedb.org/3/discover/movie?api_key=a2d451cdbcf87912820b3b17b82514c3&language=en-US&sort_by=release_date.asc&include_adult=false&include_video=true&page=6&primary_release_date.gte=2020-04-01 */
  this.upcomingList = async function (req, response) {
    console.log(req.body);
    await axios
      .get(
        `${apiKeys.MAIN_URL}/discover/movie?api_key=${apiKeys.TMDB_API_KEY}&language=en-US&sort_by=release_date.asc&include_adult=false&include_video=true&page=${req.body.page}&primary_release_date.gte=2020-04-01`
        //  `${apiKeys.MAIN_URL}/discover/movie?api_key=${apiKeys.TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${req.body.genres}`
      )
      .then((res) => {
        response.send(JSON.stringify(res.data));
      })
      .catch(function (error) {
        console.log(error);
        response.send(error);
      });
  };

  /* *********    DETAILS OF SELECTED MOVIE/SERIES    ********** */
  this.getDetails = async function (req, response) {
    console.log("REQUEST BODY: ????????????????????????????????\n", req.body);
    let params = req.body;
    let details = null;
    let videos = null;
    let recommendations = null;
    let streamAvailablity = [];
    let combinedData = null;

    // DETAILS
    await axios
      .get(
        `${apiKeys.MAIN_URL}/${params.media_type}/${params.id}?api_key=${apiKeys.TMDB_API_KEY}&language=en-US`
      )
      .then((res) => {
        let x = res.data;
        x = { ...x, media_type: params.media_type };
        details = x;
      })
      .catch(function (error) {
        console.log(error);
      });

    // VIDEOS
    await axios
      .get(
        `${apiKeys.MAIN_URL}/${params.media_type}/${params.id}/videos?api_key=${apiKeys.TMDB_API_KEY}&language=en-US`
      )
      .then((res) => {
        videos = res.data.results;
      })
      .catch(function (error) {
        console.log(error);
      });

    // RECOMMENDATIONS
    await axios
      .get(
        `${apiKeys.MAIN_URL}/${params.media_type}/${params.id}/recommendations?api_key=${apiKeys.TMDB_API_KEY}&language=en-US&page=1`
      )
      .then((res) => {
        recommendations = res.data.results;
      })
      .catch(function (error) {
        console.log(error);
      });

    combinedData = {
      detailsData: details,
      videoData: videos,
      recommends: recommendations,
    };
    response.send(combinedData);
  };

  //https://api.themoviedb.org/3/movie/512200/credits?api_key=a2d451cdbcf87912820b3b17b82514c3
  this.getCreditDetails = async function (req, response) {
    console.log(req.body);
    await axios
      .get(
        `${apiKeys.MAIN_URL}/${req.body.type}/${req.body.id}/credits?api_key=${apiKeys.TMDB_API_KEY}`
      )
      .then((res) => {
        response.send(JSON.stringify(res.data));
      })
      .catch(function (error) {
        console.log(error);
        response.send(error);
      });
  };

  this.getCastDetailsMobile = async function (req, response) {
    /* 
    1.  get /tv/44217/external_ids
    2.  get imdb-unofficial.rapidapi.com/film credit details
    3.  get /search/person and add profile_path
    */
    let params = req.body;
    let external_ids = null;
    let credit_details = null;
    /* EXTERNAL ID:
     https://api.themoviedb.org/3/tv/44217/external_ids?api_key=a2d451cdbcf87912820b3b17b82514c3&language=en-US */
    await axios
      .get(
        `${apiKeys.MAIN_URL}/${params.media_type}/${params.id}/external_ids?api_key=${apiKeys.TMDB_API_KEY}`
      )
      .then((res) => {
        external_ids = res.data;
      })
      .catch(function (error) {
        console.log(error);
        response.send(error);
      });

    /* CREDIT DETAILS: 
    https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/tt5753856

    https://imdb-api.com/en/API/FullCast/k_PyBnSmN8/${this.props.user.credit_details_data.id}
     */
    await axios
      .get(
        `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/${external_ids.imdb_id}`,
        {
          headers: {
            "x-rapidapi-key":
              "0bec52a219msh0dbe24887102091p1872c7jsnf4a2acdec991",
          },
        }
      )
      .then((res) => {
        credit_details = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
    // await axios.get(`https://imdb-api.com/en/API/FullCast/k_PyBnSmN8/${external_ids.imdb_id}`)
    //   .then(res => {
    //     credit_details = res.data
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })

    response.send(JSON.stringify(credit_details));
  };
}

module.exports = new getUserDashboardData();
