import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage.jsx";
import CreateNote from "./pages/CreatNote.jsx";
import NoteDetailPage from "./pages/NoteDetailPage.jsx";
import toast, { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <div>
      <Toaster />
      <button onClick={() => toast.success("Congrats")}>click me</button>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreateNote />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  );
};

export default App;
