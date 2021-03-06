/*
  * Author: Sameer Sitre
  * https://www.linkedin.com/in/sameersitre/
  * https://github.com/sameersitre
  * File Description:
 */

const axios = require("axios")

exports.axios = async function (URL) {
    let result = null
    await axios
        .get(URL)
        .then((res) => {
            console.log(`API Called: ${URL}`)
            result = res.data
        })
        .catch(function (error) {
            result = error
        })

    return result
}
