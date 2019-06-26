var rp = require('request-promise');
var mongo = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
var self = this;

self.getFlickr = async function(mainReq, mainRes) {
  mongo.connect(url, function(err, client) {
    if (err) return console.error(err);

    const db = client.db('PS8'),
      collection = db.collection('flickr');

    collection.findOne({search: mainReq.params.tag}, function(err, result) {
      console.log('We have a result');
      console.log(result);

      if (result !== null) {
        mainRes.jsonp(result.data);
      }
      else {
        rp('https://api.flickr.com/services/rest/?api_key=918b154854622e2f09a23016c8740830&method=flickr.photos.search&format=json&nojsoncallback=1&tags='+mainReq.params.tag)
          .then(function (responseText) {
            let responseObject = JSON.parse( responseText );

            self.submitFlickr(mainReq.params.tag, responseObject);

            //Render the pug template and pass the object
            // res.render('partC', { data: responseObject});

            mainRes.jsonp(responseObject);
          })
          .catch(function (err) {
            console.log( 'Error: ', err );
          });
      }
    })
  });
};

self.submitFlickr = function(keyword, data) {
  mongo.connect(url, function(err, client) {
    if (err) return console.error(err);

    const db = client.db('PS8'),
          collection = db.collection('flickr');

    collection.insertOne({search: keyword, data: data}, function(err, result) {
      console.log(result);
    });
  })
}
