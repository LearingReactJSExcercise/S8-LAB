import React from "react";

function index() {
    // 1 - Create a function to handle event
    function handleHelloClick(event) {
        console.log("Hello");
      }
            
      // 2 - Get DOM element
      let helloButon = document.getElementById("helloButon");

      // 3 - Bind element event to the handler function
      helloButon.addEventListener("click", handleHelloClick);
  return (
    <>
      <h1>What do you wanna do?</h1>
      <p id="actions">
        <button onclick={handleHelloClick} id="helloButon">
          Say Hello
        </button>
        <button id="pnButon">Say PN</button>
        <button id="vietnamButon">Say Vietnam</button>
      </p>
    </>
  );
}

export default index;
