import { useEffect, useState } from "react";

export default function useTweet(user) {
  const [tweet, setTweet] = useState();

  useEffect(() => {
    const tweetInfo = {
      text: `He sacado un ${user.puntuacion} en el Trivial Luimelier 🥐 ¡Haz el tuyo!`,
      url: `${window.location.hostname}`,
    };

    const urlTweet = getUrlShareTwitter(tweetInfo);
    setTweet(urlTweet);
  }, [user]);

  return tweet;
}

function getUrlShareTwitter({ text, url }) {
  const BASE_URL = "https://twitter.com/intent/tweet";
  const content = `?text=${encodeURI(text)}`;
  const link = `&url=${url}`;
  const hashtags = `&hashtags=lumelia`;
  return BASE_URL + content + link + hashtags;
}


// /${user.userName}