function App() {
  const user = {
    email: "",
    password: "",
    loggedIn: false,
  };

  // Model functions
  const setUser = (email, password, isloggedIn) => {
    user.email = email;
    user.password = password;
    user.loggedIn = isloggedIn;
  };

  // Event handler function
  const handleVinh = (e) => setUser("vinh@pmc.org", "1234", true);
  const handleMy = (e) => setUser("my@pmc.org", "56789", true);

  return (
    <div id="app">
      <h1>User Login</h1>

      <p id="actions">
        {/* When clicking on this button, change the current user as follows:*/}
        {/* email = vinh@pmc.org   password= "1234"   loggedIn= true  */}
        <button onClick={handleVinh}>Login as Vinh</button>

        {/* When clicking on this button, change the current user as follows: */}
        {/* email = my@pmc.org   password= "56789"   loggedIn= true  */}
        <button onClick={handleMy}>Login as My</button>
      </p>
    </div>
  );
}

export default App;
