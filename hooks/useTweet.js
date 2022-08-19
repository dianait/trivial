import { useEffect, useState } from "react";

export default function useTweet(user) {
  const [tweet, setTweet] = useState();

  useEffect(() => {
    const tweetInfo = {
      text: `He sacado un ${user.puntuacion} en el Trivial Luimelier 🥐 ¡Haz el tuyo!`,
      url: `${window.location.hostname}/${user.userName}`,
    };

    const urlTweet = getUrlShareTwitter(tweetInfo);
    setTweet(urlTweet);
  });

  return tweet;
} 

function getUrlShareTwitter({ text, url }) {
  const BASE_URL = "https://twitter.com/intent/tweet";
  const content = `?text=${encodeURI(text)}`;
  const authors =  ". Hecho con 🤙 y ♥️ por @laDids y @lerhus"
  const link = `&url=${url}`;
  const hashtags = `&hashtags=Luimelia`;
  console.log();
  return BASE_URL + content + link  + authors + hashtags;
}
