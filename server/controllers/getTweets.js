// import Twit from 'twit';
import {TwitterApi} from 'twitter-api-v2';
import 'dotenv/config';

// OAuth 1.0a (User context)
const client = new TwitterApi({
  appKey: process.env.apiKey,
  appSecret: process.env.apiSecretKey,
  accessToken: process.env.accessToken,
  accessSecret: process.env.accessTokenSecret,
  // The last 2 tokens are not required if you are
  // at part 1 of user-auth process (ask for a request token)
  // or if you want a app-only client (see below)
});

  export const getTweets = async (req, res) => {

    const result = await client.v2.get('tweets/search/recent', { query: '@FreePressProj', max_results: 10 });
    //console.log(result.data); // TweetV2[]
    console.log('backend')
    res.send(result.data);
    }