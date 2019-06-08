var rp = require('request-promise');
var express = require('express');
var router = express.Router();


router.get('/ps4', function(req, res, next) {
    rp('https://api.flickr.com/services/rest/?api_key=918b154854622e2f09a23016c8740830&method=flickr.photos.search&format=json&nojsoncallback=1&tags=dog')
        .then(function (responseText) {
            let responseObject = JSON.parse( responseText );

            //Render the pug template and pass the object
            res.render('partC', { data: responseObject});
        })
        .catch(function (err) {
            console.log( 'Error: ', err );
        });
});

module.exports = router;
