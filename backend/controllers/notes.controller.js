export const getAllNotes = (req, res) => {
  res.status(200).send("You just fetched the notes");
};

export const createNote = (req, res) => {
  res.status(201).json({
    message: "Notes created successfully",
    success: true,
  });
};
