import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import api from "../lib/axios";

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
      } finally {
        setLoading(false);
      }
    };
    fetchNotes();
  }, [id]);

  return <div>NoteDetailPage</div>;
};

export default NoteDetailPage;
