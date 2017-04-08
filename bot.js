console.log("The bot is starting");

var Twit = require('twit');

var config = require('./config');
var T = new Twit(config);

var stream = T.stream('statuses/filter', { follow: 268536594});

// var text = {
//   status: "\"" + tweet.text + "\" #TrumpVerbatim"
// };

// function response {
//
// }
stream.on('tweet', function (tweet) {
  T.post('statuses/update', {status: "\"" + tweet.text + "\" #TrumpVerbatim"},
   function(err, data, response) {
    console.log(data)
  });
});
// observation: tweets that start with an @ will post, but only show up as a reply


// trumpid = 25073877
// myid = 268536594

// var params = {
//   screen_name: "realDonaldTrump",
//   count: 5
//   // q: 'from:realDonaldTrump',
//   // count: 2
// };
//
// //T.get('users/show', params, gotData)
// T.get('statuses/user_timeline', params, gotData);
// //T.get('search/tweets', params, gotData)
//
// function gotData(err, data, response) {
//   // var tweets = data.statuses;
//   // for (var i = 0; i < tweets.length; i++) {
//   // console.log(tweets[i].text);
//   // }
//   // for (var i = 0; i < data.length; i++) {
//   //   T.post('statuses/update', { status: data[i].text }, function(err, data, response) {
//   // console.log(data)})
//   //   //console.log(data[i].text)
//   // }
//   console.log(data);
// }
//
// tweet.entities.media.media_url
// var params = { status: tweet.text, media_ids: [mediaIdStr] }
//
//       T.post('statuses/update', params, function (err, data, response) {
//         console.log(data)
