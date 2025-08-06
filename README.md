- Create a Vite + React Application
- Remove unnecessary code and create a basic app.
- Install tailwind.css
- Install daisyUI tailwind CSS plugin
- Import NavBar component in App.jsx
- Install react-router
- Create BrowserRouter -> Routes -> Route = / Body -> RouteChildren
- Create an Outlet in your Body Component
- Create a Footer Component
- Create a Login Page
- Install axios
- Install cors - install cors in backend => add middleware to with configurations: origin, credentials: true
- Whenever we are doing an API call from client we need to pass axios => { withCredentials: true}
- Install react-redux + @reduxjs/toolkit
- configureStore => <Provider store={storename}></Provider> enclosing the whole app in App.js => createSlice => add reducer to store
- Dispatch the response to the created slice using useDispatch() hook
- Fetch the slice from store using useSelector((store) => store.user) hook inside the functional component
- Login and see if our data is coming properly in the store
- NavBar should update as soon as user logs in
- Refactor the code to create a constants file + create components folder


Body
    Navbar
    Route / => Feed
    Route = /login => Login Page
    Route = /connections => Connection
    Route = /profile => Profile
