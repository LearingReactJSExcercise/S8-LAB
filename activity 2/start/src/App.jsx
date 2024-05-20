function App() {
  const user = {
    email: "",
    password: "",
    loggedIn: false,
  };

  const setUser = (email, password, loggedIn) => {
    user.email=email;
    user.password=password;
    user.loggedIn=loggedIn;
    console.log("Current user:", user);
  }

  // Event handler function
  //const handleVinh = (e) => setUser("vinh@pmc.org", "1234", true)
 // const handleMy = (e) => setUser("my@pmc.org", "56789", true);

  // trình duyệt sẽ tự động gửi một đối tượng sự kiện (event object) đến hàm xử lý sự kiện 
  // (event handler function) được gắn với onClick. Trong trường hợp này, đối tượng sự kiện được truyền vào các hàm handleVinh và handleMy.
  //đối tượng sự kiện e để truy cập các thông tin liên quan đến sự kiện
  //e.preventDefault(); // Ngăn chặn hành vi mặc định của nút như reload trang 

  const handleVinh = (e) => {
    e.preventDefault();
    console.log("Clicked button:", e.target.textContent);
    setUser("vinh@pmc.org", "1234", true);
  };
  const handleMy = (e) => {
    e.preventDefault();
    console.log("Clicked button:", e.target.textContent);
    setUser("my@pmc.org", "56789", true);
  };

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
