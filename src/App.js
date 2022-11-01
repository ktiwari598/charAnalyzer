import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("success", "Dark Mode enabled!");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("success", "Light Mode enabled!");
    }
  };

  const showAlert = (type, message) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  return (
    <>
      <Router>
        <Navbar
          title="IIITBuyNSell"
          about="About Us"
          mode={mode}
          toggleMode={toggleMode}
          showAlert={showAlert}
        />
        <Alert alert={alert} />
        <div className="container my-5">
          <Routes>
            <Route
              exact path="/"
              element={
                <TextForm
                  heading1="Enter the text to analyze"
                  heading2="Your Text Summary"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />
            <Route exact path="/" element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
