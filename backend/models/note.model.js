import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
  },
  { timeseries: true }
);

const Note = mongoose.model("Note", noteSchema);

export default Note;
