/*
  * Author: Sameer Sitre
  * https://www.linkedin.com/in/sameersitre/
  * https://github.com/sameersitre
  * File Description:
 */

exports.trendingURL = (params) =>
    `${process.env.TMDB_URL}/trending/${params.media_type}/day?api_key=${process.env.TMDB_API_KEY}&page=${params.page}`

exports.searchURL = (params) =>
    `${process.env.TMDB_URL}/search/multi?api_key=${process.env.TMDB_API_KEY}&language=en-US&query=${params.searchText}&page=${params.page}&include_adult=false`

exports.filterURL = (params) =>
    `${process.env.TMDB_URL}/discover/${params.media_type}?api_key=${process.env.TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${params.page}&with_genres=${params.genres}`

exports.upcomingURL = (params) =>
    `https://api.themoviedb.org/3/discover/${params.media_type}?api_key=${process.env.TMDB_API_KEY}&language=en-US&region=${params.region}&sort_by=popularity.desc&include_adult=${params.adult}&include_video=false&page=${params.page}&primary_release_date.gte=${new Date().toISOString()}`

exports.detailsURL = (params) =>
    `${process.env.TMDB_URL}/${params.media_type}/${params.id}?api_key=${process.env.TMDB_API_KEY}&language=en-US`

exports.ottStreamURL = (params) =>
    `${process.env.RAPIDAPI_UTELLY_URL}?source_id=${params.id}&source=tmdb`

exports.castDetailsURL = (params) =>
    `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/${params.imdb_id}`

exports.actorDetailsURL = (params) =>
    `${process.env.TMDB_URL}/find/${params.actor_id}?api_key=${process.env.TMDB_API_KEY}&language=en-US&external_source=imdb_id`

exports.seasonsURL = (params) =>
    `${process.env.TMDB_URL}/tv/${params.id}/season/${params.seasonNumber}?api_key=${process.env.TMDB_API_KEY}&language=en-US`


exports.externalIDURL = (params) =>
    `${process.env.TMDB_URL}/${params.media_type}/${params.id}/external_ids?api_key=${process.env.TMDB_API_KEY}`

exports.videosURL = (params) =>
    `${process.env.TMDB_URL}/${params.media_type}/${params.id}/videos?api_key=${process.env.TMDB_API_KEY}&language=en-US`

exports.recommendationsURL = (params) =>
    `${process.env.TMDB_URL}/${params.media_type}/${params.id}/recommendations?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=${params.page}`
