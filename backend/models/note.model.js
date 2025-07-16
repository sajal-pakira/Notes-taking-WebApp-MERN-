import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({}, { timeseries: true });

const Note = mongoose.model("Note", noteSchema);

export default Note;
