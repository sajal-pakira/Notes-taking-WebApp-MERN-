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
    const {title,content} = req.body;
    // res.status(201).json({
    //   message: "Notes created successfully",
    //   success: true,
    // });
  } catch (error) {}
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
