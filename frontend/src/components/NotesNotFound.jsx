import { Notebook } from "lucide-react";

const NotesNotFound = () => {
  return (
    <div className="min-h-[60vh] flex flex-col justify-center items-center text-center bg-black text-white">
      <div className="bg-green-900/20 p-4 rounded-full mb-6">
        <Notebook className="w-10 h-10 text-green-500" />
      </div>
      <h2 className="text-2xl font-semibold mb-2">No notes yet</h2>
      <p className="text-gray-400 mb-6 max-w-md">
        Ready to organize your thoughts? Create your first note to get started on your journey.
      </p>
      <button className="px-6 py-2 bg-green-500 hover:bg-green-600 text-black font-semibold rounded-full transition duration-200">
        Create Your First Note
      </button>
    </div>
  );
};

export default NotesNotFound;
