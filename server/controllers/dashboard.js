
var apiKeys = require('../config');
var axios = require('axios')
function getUserDashboardData() {

    /* *********    TRENDING ALL DAY    ********** */
    this.popularList = function (req, response) {
        console.log(apiKeys.TMDB_API_KEY)
        axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${apiKeys.TMDB_API_KEY}`)
            .then(res => {
                response.send({ status: res.data.results })
            })
            .catch(function (error) {
                console.log(error);
            })
    }
}

module.exports = new getUserDashboardData()
