import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavbarComp from "./components/NavbarComp";
import HomePage from "./pages/HomePage";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import BgComp from "./components/BgComp";
import FooterComp from "./components/FooterComp";
import LoadingScreen from "./components/LoadingScreen";
import { Toaster } from "sonner";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);

    Aos.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <BgComp />
        {loading ? (
          <LoadingScreen />
        ) : (
          <div className="App">
            <NavbarComp />
            <Toaster richColors />
            <Routes>
              <Route
                path="/"
                element={
                  <main className="marginMain">
                    <HomePage />
                  </main>
                }
              />
              <Route
                path="*"
                element={
                  <main className="marginMain">
                    <ErrorPage />
                  </main>
                }
              />
            </Routes>
            <FooterComp />
          </div>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
