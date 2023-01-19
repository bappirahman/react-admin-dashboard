import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useState } from "react";

function App() {
  const [dark, setDark] = useState(false);
  return (
    <div className={dark ? "dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home dark={dark} setDark={setDark} />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/users"
            element={<List dark={dark} setDark={setDark} />}
          />
          <Route path="/users/:userId" element={<Single />} />
          <Route
            path="/users/new"
            element={<New inputs={userInputs} title={"Add New User"} />}
          />
          <Route
            path="/products"
            element={<List dark={dark} setDark={setDark} />}
          />
          <Route path="/products/:productId" element={<Single />} />
          <Route
            path="/products/new"
            element={<New inputs={productInputs} title={"Add New Product"} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
