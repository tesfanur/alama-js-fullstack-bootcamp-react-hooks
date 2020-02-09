import React, { useEffect, useState } from "react";
import {useFetch} from "./hooks"
// //custom hook
// const useFetch = (url, initialValue) => {
//   const [result, setResult] = useState(initialValue);
//   useEffect(() => {
//     fetch(url)
//       .then(response => response.json())
//       .then(JSONResult => setResult(JSONResult));
//   }, []);
//   return result;
// };

function Joke() {
  // const [joke, setJoke] = useState({});
  // useEffect(() => {
  //   fetch("https://official-joke-api.appspot.com/jokes/random")
  //     .then(response => response.json())
  //     .then(jokeJsonResult => {
  //       setJoke(jokeJsonResult);
  //       console.log(`jokeJsonResult =>`, jokeJsonResult);
  //     });
  // }, []);

  //using custom hook
  const url = "https://official-joke-api.appspot.com/jokes/random";
  const { punchline, setup }  = useFetch(url,{});

  return (
    <div>
      <h3>Joke</h3>
      <p>{setup}</p>
      <p>
        <em>{punchline}</em>
      </p>
    </div>
  );
}

export default Joke;
