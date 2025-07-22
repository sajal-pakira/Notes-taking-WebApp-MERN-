import { useState } from "react";

const NoteDetailPage = () => {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [notes, setNotes] = useState(null);

  return <div>NoteDetailPage</div>;
};

export default NoteDetailPage;
