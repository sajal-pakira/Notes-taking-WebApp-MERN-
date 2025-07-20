import { Link } from "react-router";
import { Plus } from "lucide-react";

const HomePage = () => {
  return (
    <header className="bg-base-300 border-b border-base-content/10">
      <div className="mx-auto max-w-6xl p-4 ">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-primary font-mono tracking-tight">
            ThinkBoard
          </h1>
          <div className="flex items-center gap-4">
            <Link to={"/create"} className="btn btn-primary">
              <Plus className="size-5" />
              <span>Create new note</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HomePage;
