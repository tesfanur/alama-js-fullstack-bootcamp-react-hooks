import { useEffect, useState } from "react";
//custom hook
export const useFetch = (url, initialValue) => {
  const [result, setResult] = useState(initialValue);
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(JSONResult => setResult(JSONResult));
  }, []);
  return result;
};

  // const [stories, setStories] =useState([])
  // useEffect(() => {
  //  fetch('https://news-proxy-server.appspot.com/topstories')
  //  .then(response=>response.json())
  //  .then(storiesJSONResult=>{
  //     console.log('storiesJSONResult',storiesJSONResult)
  //    setStories(storiesJSONResult)
  //  })
  // }, [])

   // const [joke, setJoke] = useState({});
  // useEffect(() => {
  //   fetch("https://official-joke-api.appspot.com/jokes/random")
  //     .then(response => response.json())
  //     .then(jokeJsonResult => {
  //       setJoke(jokeJsonResult);
  //       console.log(`jokeJsonResult =>`, jokeJsonResult);
  //     });
  // }, []);