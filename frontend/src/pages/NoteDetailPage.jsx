import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import api from "../lib/axios";
import toast from "react-hot-toast";

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

  return <div>NoteDetailPage</div>;
};

export default NoteDetailPage;
