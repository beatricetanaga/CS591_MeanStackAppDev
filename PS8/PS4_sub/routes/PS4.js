var rp = require('request-promise');


this.getFlickr = function(mainReq, mainRes) {
  rp('https://api.flickr.com/services/rest/?api_key=918b154854622e2f09a23016c8740830&method=flickr.photos.search&format=json&nojsoncallback=1&tags='+mainReq.params.tag)
    .then(function (responseText) {
      let responseObject = JSON.parse( responseText );

      //Render the pug template and pass the object
      // res.render('partC', { data: responseObject});

      mainRes.jsonp(responseObject);
    })
    .catch(function (err) {
      console.log( 'Error: ', err );
    });
};
