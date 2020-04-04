/*
  * Author: Sameer Sitre
  * https://www.linkedin.com/in/sameersitre/
  * https://github.com/sameersitre
  * File Description:  
 */

var DashboardData = require("../controllers/dashboard")
var Emailer = require("../controllers/emailer")

var cookieParser = require("cookie-parser")

module.exports = {
    configure: function (app) {
        app.use(cookieParser())

        app.post('/trending', function (req, res) {
            DashboardData.trendingList(req, res)
        });

        app.post('/search', function (req, res) {
            DashboardData.searchResult(req, res)
        });

        app.post('/filter', function (req, res) {
            DashboardData.filterResult(req, res)
        });

        app.post('/upcoming', function (req, res) {
            DashboardData.upcomingList(req, res)
        });

        app.post('/getDetails', function (req, res) {
            DashboardData.getDetails(req, res)
        });

        app.post('/sendmail', function (req, res) {
            Emailer.getEmail(req, res)
        });
        // app.get("/logout", function (req, res) {
        //     console.log("session destroyed")
        //     req.session.destroy()
        //     res.clearCookie("email")
        //     req.session = null
        //     console.log(req.session)
        //     res.json({ status: true, message: "successfully logged out!" })
        // })
        
    }
}
