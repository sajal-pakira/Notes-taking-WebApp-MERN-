import Note from "../models/note.model.js";
export const getAllNotes = async (req, res) => {
  try {
    const note = await Note.find().sort({ createdAt: -1 }); //newest first
    res.status(200).json({
      success: true,
      note,
    });
  } catch (err) {
    console.log("Error in getAllNotes controller :- ", err);
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
export const updateNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    if (!title && !content) {
      res.send("Title or content must be given to update");
    }
    const note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).json({
        success: false,
        message: "Note is not found with this id",
      });
    }
    const updatedNote = await Note.findByIdAndUpdate(req.params.id, {
      title,
      content,
    });

    if (!updatedNote) {
      return res.status(500).json({
        message: "Can not update note, Please try again",
        success: false,
      });
    }

    res.status(201).json({
      message: "Notes updated successfully",
      success: true,
      updatedNote,
    });
  } catch (err) {
    console.log("Error in updateNote controller :- ", err);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const deleteNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) {
      req.send("Note not found");
    }
    const deletedNote = await note.deleteOne();
    res.status(200).json({
      message: "Notes deleted successfully",
      success: true,
    });
  } catch (error) {
    console.log("error in deleteNote controller :- ", err);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const getNoteById = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note)
      return res.status(400).json({
        success: false,
        message: "Note not found",
      });
    res.status(200).json({
      success: true,
      note,
    });
  } catch (err) {
    onsole.log("Error in getNoteById controller :- ", err);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
