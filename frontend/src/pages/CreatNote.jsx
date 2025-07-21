import { useState } from "react";

const CreateNote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  return <div>CreateNote</div>;
};

export default CreateNote;
