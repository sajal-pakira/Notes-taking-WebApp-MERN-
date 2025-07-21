import { Link } from "react-router";

const NoteCard = ({ note }) => {
  return (
    <Link
      to={`/note/${note._id}`}
      className="card bg-base-100 hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-[#00ccff]"
    >
      <div className="card-body">
        <h3 className="card-title text-base-content">{note.title}</h3>
        <p className="text-base-content/70 line-clamp-3">{note.content}</p>
        <div className="card-actions flex justify-between items-center mt-4">
          <span className="text-sm text-base-content/60">{note.createdAt}</span>
          <div>
            <PenSquareIcon/>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NoteCard;
