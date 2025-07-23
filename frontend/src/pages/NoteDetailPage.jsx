import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import api from "../lib/axios";
import toast, { LoaderIcon } from "react-hot-toast";
import { ArrowLeft, Trash2Icon } from "lucide-react";

const NoteDetailPage = () => {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [notes, setNotes] = useState(null);

  const navigate = useNavigate();
  const { id } = useParams();

  const handleDelete = async () => {};
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
    <div className="min-h-screen bg-base-200 ">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <Link to={"/"} className="btn btn-ghost">
              <ArrowLeft className="h-5 w-5" />
              Back to Notes
            </Link>
            <button
              onClick={handleDelete}
              className="btn btn-error btn-outline"
            >
              <Trash2Icon className="h-5 w-5" />
              Delete Note
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteDetailPage;
