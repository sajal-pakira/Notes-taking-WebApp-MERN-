import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

const CreateNote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {};

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Link to={"/"} className="btn btn-ghost mb-6">
            <ArrowLeft />
            back to notes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreateNote;
