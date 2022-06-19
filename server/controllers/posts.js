// import Twit from 'twit';
import {TwitterApi} from 'twitter-api-v2';
import 'dotenv/config';

const apiKey = process.env.apiKey;
const apiSecretKey = process.env.apiSecretKey;
const accessToken = process.env.accessToken;
const accessTokenSecret = process.env.accessTokenSecret;


// OAuth 1.0a (User context)
const client = new TwitterApi({
  appKey: apiKey,
  appSecret: apiSecretKey,
  // Following access tokens are not required if you are
  // at part 1 of user-auth process (ask for a request token)
  // or if you want a app-only client (see below)
  accessToken: accessToken,
  accessSecret: accessTokenSecret,
});


// var T = new Twit({
//     consumer_key:         apikey,
//     consumer_secret:      apiSecretKey,
//     access_token:         accessToken,
//     access_token_secret:  accessTokenSecret,
//   });

        // //1. GET RECENT TWEETS
        // T.get('search/tweets', { q: '#thebindingofisaac since:2020-04-15', count: 10 }, function(err, data, response) {
        //   const tweets = data.statuses
        //   // .map(tweet => `LANG: ${franc(tweet.text)} : ${tweet.text}`) //CHECK LANGUAGE
        //   .map(tweet => tweet.text)
        //   console.log(tweets);
        //    res.send(tweets);
        // })

 
  export const getPosts = async (req, res) => {

    const result = await client.v2.get('tweets/search/recent', { query: 'banana', max_results: 10 });
    //console.log(result.data); // TweetV2[]
    console.log('backend')
    res.send(result.data);
    }