function App() {
  function handleHelloClick() {
    console.log("Hello");
  }
 
  return (
    <div id="app">
      <h1>What do you wanna do?</h1>

      <p id="actions">
        <button onClick={handleHelloClick} >Say Hello</button>
        <button>Say PN</button>
        <button onClick={e=>console.log("hi")}>Say Vietnam</button>
      </p>
    </div>
  );
}

export default App;
