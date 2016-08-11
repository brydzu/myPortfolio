var express = require('express');
var router = express.Router();


// router.get('/', function(request, response) {
//     response.render('pages/index');
// });
router.get('*', function (request, response){
  // response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
  response.render('pages/index');
})


module.exports = router;
