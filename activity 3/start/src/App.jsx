import React, { useState } from "react";

const RONAN = "Ronan";
const VINH = "Vinh";

function App() {
  console.log("Hello , we are executing the component App !");

  //let user = "Ronan";

  const [user, setUser] = useState("Ronan")
  function updateUser(newUser) {
    // Update model
    //user = newUser;
    setUser(newUser);
    // Log action
    console.log("The new user is :" + user);
  }

  return (
    <div id="app">
      <h1>My name is {user}</h1>
      <button onClick={()=>updateUser(RONAN)}>Switch to Ronan</button>
      <button onClick={()=>updateUser(VINH)}>Switch to Vinh</button>
    </div>
  );
}

export default App;
