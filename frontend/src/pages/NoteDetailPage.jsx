import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import api from "../lib/axios";
import toast, { LoaderIcon } from "react-hot-toast";

const NoteDetailPage = () => {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [notes, setNotes] = useState(null);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await api.get(`/notes/${id}`);
        console.log("Response :- ", res.data);
        setNotes(res.data.note);
      } catch (error) {
        console.log("Error in fetching notes :- ", error);

        toast.error("Failed to fetch notes");
      } finally {
        setLoading(false);
      }
    };
    fetchNotes();
  }, [id]);

  console.log(notes);

  if (loading) {
    return (
      <div className="min-h-screen bg-base-200 flex items-center justify-center">
        <LoaderIcon size={60} className="animate-spin " />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center">
      <div className="container mx-auto px-4 py-8"></div>
    </div>
  );
};

export default NoteDetailPage;
