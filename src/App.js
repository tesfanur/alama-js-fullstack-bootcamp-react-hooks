import React, { useState } from "react";
import Joke from "./Joke";
import Tasks from "./Tasks";
import Stories from "./Stories";
//source: https://github.com/15Dkatz/react-hooks-course
function App() {
  const [userQuery, setUserQuery] = useState("");

  const updateUserQuery = event => {
    console.log(userQuery);
    setUserQuery(event.target.value);
  };
  const searchQuery = () => {
    window.open(`https://www.google.com/search?q=${userQuery}`, "_blank");
  };
  const handleOnKeyPress = ({ key }) => {
    if (key === "Enter") {
      searchQuery();
    }
  };
  return (
    <div className="App">
      <h1>Hello Tesfanur</h1>
      <div className="form">
        <input
          value={userQuery}
          onChange={updateUserQuery}
          onKeyPress={handleOnKeyPress}
        />
        <button onClick={searchQuery}>Search</button>
      </div>
      <hr />
      <Joke />
      <hr/>
      <Tasks/>
      <hr/>
      <Stories />
    </div>
  );
}

export default App;
