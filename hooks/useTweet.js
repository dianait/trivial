import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function useTweet(user) {
  const [tweet, setTweet] = useState();
  const router = useRouter();

  useEffect(() => {
    const tweetInfo = {
      text: `He sacado un ${user.puntuacion} en el Trivial Luimelier 🥐 ¡Haz el tuyo!`,
      url: `${router.pathname}${user.userName}`,
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
