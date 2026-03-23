import { Route, Routes, BrowserRouter} from "react-router-dom"
import Navigation from "./components/Navigation"
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Contacts from "./pages/Contacts"
import Controlled from "./pages/Controlled"
import Uncontrolled from "./pages/Uncontrolled"
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>

        <Navigation />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/services" element={<Services />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contacts" element={<Contacts />}/>
          <Route path="/book-request" element={<Controlled />}/>
          <Route path="/event-feedback" element={<Uncontrolled />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
