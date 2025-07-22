import { useState } from "react";
import { useNavigate } from "react-router";

const NoteDetailPage = () => {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [notes, setNotes] = useState(null);

  const navigate = useNavigate();

  return <div>NoteDetailPage</div>;
};

export default NoteDetailPage;
