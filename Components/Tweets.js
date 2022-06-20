import React from 'react';
import {Text } from 'react-native';
import axios from 'axios';
import {useEffect} from 'react'

export default function Tweets() {
    const [post, setPost] = React.useState(0);

    useEffect(() => {
        axios.get('http://localhost:3000/tweets')
        .then((response) => {
          console.log('frontend')
          setPost(response.data);
        })
        .catch(error => console.log(error));
        }, []);
    console.log('component');

  return (
    <>
         <Text>{post[0]?.id + post[0]?.text + '\n\n\n'} </Text>
<Text>{post[0]?.id + post[1]?.text + '\n\n\n'} </Text>
<Text>{post[0]?.id + post[2]?.text + '\n\n\n'} </Text>
<Text>{post[0]?.id + post[3]?.text + '\n\n\n'} </Text>
   </>
  );
}