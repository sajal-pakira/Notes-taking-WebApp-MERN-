import { useState } from "react";
import { useNavigate, useParams } from "react-router";

const NoteDetailPage = () => {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [notes, setNotes] = useState(null);

  const navigate = useNavigate();
  const { id } = useParams();

  return <div>NoteDetailPage</div>;
};

export default NoteDetailPage;
