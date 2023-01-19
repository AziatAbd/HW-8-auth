import React, { useState } from "react";
import { useEffect } from "react";
import Login from "./components/login/Login.jsx";
import MainContent from "./components/MainContent/MainContent.jsx";
import Header from "./components/header/Header";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState("users");

  const handleNavigationClick = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const storageUserLoggedInfo = localStorage.getItem("isLogin");
    if (storageUserLoggedInfo === "1") {
      setIsLoggedIn("true");
    }
  }, []);

  const loginHandler = (email, password) => {
    localStorage.setItem("isLogin", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLogin");
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <Header
        onChangePage={handleNavigationClick}
        isAuthenticated={isLoggedIn}
        onLogout={logoutHandler}
      />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <MainContent currentPage={currentPage} />}
      </main>
    </React.Fragment>
  );
}

export default App;
