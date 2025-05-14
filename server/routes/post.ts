{
  const
    express = require('express'),
    router = express.Router()

  /* GET home page. */
  router.post(
    /(.*)/,
    function (req, res, next) {
      res.json({ test: "post" })
    }
  )

  module.exports = router
}
