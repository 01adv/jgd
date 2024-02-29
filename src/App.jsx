import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./Landing";
import Nextpg from "../src/nxtPage/NextPg";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/next" element={<Nextpg />} />
      </Routes>
    </Router>
  );
}

export default App;

// is link se carousel laga lena story wale section p https://flowbite.com/docs/components/carousel/

//is link se dropdown upgrade karna pure screen p show ho jyga
// https://flowbite.com/docs/components/mega-menu/

