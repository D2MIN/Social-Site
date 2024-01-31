import "./App.css";
import React from "react";
import Header from "./components/Header";
import Content from "./components/content/Content";
import Photo from "./components/content/Photo";
import Head from "./components/content/Head";

function App() {
  return (
    <div className="Head">
      <header className="header">
        <Header />
      </header>
      <body className="body">
        <Head/>
        <Photo/>
        <Content/>
      </body>
    </div>
  );
}

export default App;
