import Note from "../models/note.model.js";
export const getAllNotes = async (req, res) => {
  try {
    const note = await Note.find();
    res.status(200).json({
      success: true,
      note,
    });
  } catch (err) {
    console.log("error in getAllNotes controller :- ", err);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const createNote = async (req, res) => {
  try {
    console.log("Received body:", req.body);
    const { title, content } = req.body;
    const note = new Note({ title, content });
    const savedNote = await note.save();
    res.status(201).json({
      message: "Notes created successfully",
      success: true,
      note: savedNote,
    });
  } catch (err) {
    console.log("error in createNote controller :- ", err);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
export const updateNote = (req, res) => {
  res.status(201).json({
    message: "Notes updated successfully",
    success: true,
  });
};

export const deleteNote = (req, res) => {
  res.status(201).json({
    message: "Notes deleted successfully",
    success: true,
  });
};
