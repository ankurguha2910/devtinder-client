import { BrowserRouter, Route, Routes } from "react-router"
import NavBar from "./NavBar"
import Body from "./Body"
import Login from "./Login"
import Profile from "./Profile"

function App() {

  return (
    <>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Body/>}>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    {/* <NavBar />
    <h1 className="text-xl font-bold flex justify-center my-2">Hello!</h1> */}
    </>
  )
}

export default App
