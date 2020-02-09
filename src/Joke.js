import React from "react";
import {useFetch} from "./hooks"
function Joke() {
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
