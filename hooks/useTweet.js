import { useState, useEffect } from "react";

export default function useTweet({ score, userName }) {
  const [tweet, setTweet] = useState();

  useEffect(() => {
    const tweetInfo = {
      text: `He sacado un ${score} en el Trivial Luimelier 🥐 ¡Haz el tuyo!`,
      url: `https://localhost:3000/${userName}`,
    };

    const urlTweet = getUrlShareTwitter(tweetInfo);
    setTweet(urlTweet);
  }, [userName, score]);

  return tweet;
}

function getUrlShareTwitter({ text, url }) {
  const BASE_URL = "https://twitter.com/intent/tweet";
  const content = `?text=${encodeURI(text)}`;
  const link = `&url=${url}`;
  const hashtags = `&hashtags=lumelia`;
  return BASE_URL + content + link + hashtags;
}
