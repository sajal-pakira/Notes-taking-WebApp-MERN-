import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import toast from "react-hot-toast";
import api from "../lib/axios";

const CreateNote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      toast.error("All fields are required");
      return;
    }
    setLoading(true);
    try {
      await api.post("/notes", {
        title,
        content,
      });
      toast.success("Note created successfully");
      navigate("/");
    } catch (error) {
      console.log("Error creating Note :- ", error);
      if (error.response.status === 429) {
        toast.error("Slow down! You're creating notes too fast", {
          duration: 4000,
          icon: "🤦‍♂️",
        });
      } else {
        toast.error("Failed to create Note!");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <Link to={"/"} className="btn btn-ghost mb-6">
            <ArrowLeft className="size-5" />
            Back to Notes
          </Link>
          <div className="card bg-base-100">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-4">Create New Note</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Title</span>
                  </label>
                  <input
                    className="input input-bordered"
                    type="text"
                    placeholder="Enter Note Title"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                  />
                </div>

                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Content</span>
                  </label>
                  <textarea
                    className="input input-bordered"
                    type="text"
                    placeholder="Write your Note content here..."
                    value={content}
                    onChange={(event) => setContent(event.target.value)}
                  />
                </div>
                <div className="card-actions justify-center">
                  <button
                    className="btn btn-outline btn-accent w-full text-lg"
                    disabled={loading}
                  >
                    {loading ? "Creating" : "Create"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNote;
