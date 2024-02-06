import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import Content from "./components/content/Content";
import Photo from "./components/content/Body/Head/Photo";
import Head from "./components/content/Body/Head/Head";
import CSS from "./components/Header/header.module.css";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="Head">
      <header className={CSS.header}>
        <Header />
      </header>
      <body className="body">
        <Routes>
          <Route path="/profil" Component={Head} />
        </Routes>
        <Routes>
          <Route path="/profil" Component={Photo} />
        </Routes>
        <Content />
      </body>
    </div>
  );
}

export default App;
