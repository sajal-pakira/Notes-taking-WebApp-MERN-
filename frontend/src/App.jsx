import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage.jsx";
import CreateNote from "./pages/CreatNote.jsx";
import NoteDetailPage from "./pages/NoteDetailPage.jsx";
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <div data-theme="night">
      <Toaster />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreateNote />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  );
};

export default App;
