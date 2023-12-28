import Navbar from "./components/navbar/Navbar";
import Contact from "./components/contact/Contact";
import Tech from "./components/balls/Tech";
import LoginComponent from "./components/Login/Login";
import SignupComponent from "./components/Login/Signup";
import {useCookies} from "react-cookie";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import LoggedInNavbar from "./components/navbar/LoggedInNavbar";


function App() {
  const [cookie, setCookie] = useCookies(["token"]);

  return (
    <div>
        <BrowserRouter>
            {cookie.token ? (
                    // logged in routes
                    <Routes>
                        <Route path="/" element={<LoggedInNavbar />}/>
                        <Route path="*" element={<LoggedInNavbar />} />
                    </Routes>
                        ) : (
                    // logged out routes
                    <Routes>
                        <Route path="/signup" element={<SignupComponent />} />
                        <Route path="/login" element={<LoginComponent />} />
                        <Route path="*" element={<Navbar />} />
                    </Routes>
            )}
        </BrowserRouter>
    </div>
);
}

export default App;


