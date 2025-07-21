import { useState } from "react";

const CreateNote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8"></div>
    </div>
  );
};

export default CreateNote;
