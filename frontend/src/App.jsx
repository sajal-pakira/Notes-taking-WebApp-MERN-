import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage.jsx";
import CreateNote from "./pages/CreatNote.jsx";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreateNote />} />
      </Routes>
    </div>
  );
};

export default App;
