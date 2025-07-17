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
export const updateNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    if (!title && !content) {
      res.send("Title or content must be given to update");
    }
    const note = await Note.findById(req.params.id);
    const updatedNote = await note.updateOne({
      title,
      content,
    });

    if (!updatedNote) {
      res.status(404).json({
        message: "title or content not found or userid is not given",
        success: false,
      });
    }

    res.status(201).json({
      message: "Notes updated successfully",
      success: true,
      updatedNote,
    });
  } catch (err) {
    console.log("error in updateNote controller :- ", err);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const deleteNote = async (req, res) => {
  const note = await Note.findById(req.params.id);
  if (!note) {
    req.send("Note not found");
  }
  const deletedNote = await note.deleteOne();
  res.status(201).json({
    message: "Notes deleted successfully",
    success: true,
  });
};
