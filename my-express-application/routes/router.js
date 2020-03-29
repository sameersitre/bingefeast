/*
  * Author: Sameer Sitre
  * https://www.linkedin.com/in/sameersitre/
  * https://github.com/sameersitre
  * File Description:  
 */

var DashboardData = require("../controllers/dashboard")
var cookieParser = require("cookie-parser")

module.exports = {
    configure: function (app) {
        app.use(cookieParser())

        app.post('/trending/all', function (req, res) {
            DashboardData.popularList(req, res)
        });

        app.post('/getDetails', function (req, res) {
          //  console.log(req.body)
            DashboardData.getDetails(req, res)
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
