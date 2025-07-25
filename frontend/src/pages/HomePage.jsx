import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import RateLimitedUI from "../components/RateLimitedUI";
import toast from "react-hot-toast";
import { BarLoader } from "react-spinners";
import NoteCard from "../components/NoteCard";
import api from "../lib/axios";
import NotesNotFound from "../components/NotesNotFound";

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await api.get("/notes");
        console.log("data :- ", res.data.note);
        setNotes(res.data.note);
        setIsRateLimited(false);
      } catch (error) {
        console.log("Error fetching notes :- ", error);
        if (error.response?.status === 429) {
          setIsRateLimited(true);
        } else {
          toast.error("Failed to load notes");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchNotes();
  }, []);

  return (
    <div className="min-h-screen">
      <NavBar />
      {isRateLimited && <RateLimitedUI />}
      <div className="max-w-7xl mx-auto p-4 mt-6">
        {loading && (
          <div className="text-center py-5 text-primary flex flex-col gap-3">
            <BarLoader
              color="#3b82f6"
              height={5}
              width="100%"
              speedMultiplier={1}
            />
            Notes Loading...
          </div>
        )}
        {notes.length === 0 && !isRateLimited && <NotesNotFound />}

        {notes.length > 0 && !isRateLimited && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map((note) => (
              <NoteCard key={note._id} note={note} setNotes={setNotes} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
