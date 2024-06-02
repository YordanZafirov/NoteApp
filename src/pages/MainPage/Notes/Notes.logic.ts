import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { INotes } from "./Notes.static";

const useNotes = () => {
  const [inputText, setInputText] = useState("");
  const [title, setTitle] = useState("");
  const [editToggle, setEditToggle] = useState<string | null>(null);
  const [notes, setNotes] = useState<INotes[]>(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });
  const [error, setError] = useState("");

  const character = 150;
  const characterLimit = character - inputText.length;

  const editHandler = (id: string, text: string, title: string) => {
    setEditToggle(id);
    setTitle(title);
    setInputText(text);
  };

  const saveHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title.trim() && !inputText.trim()) {
      setError("Please provide a title or text for the note");
      return;
    }

    const newNotes = editToggle
      ? notes.map((note) =>
          note.id === editToggle
            ? { ...note, title: title, text: inputText }
            : note
        )
      : [
          ...notes,
          {
            id: uuid(),
            title: title,
            text: inputText,
          },
        ];

    setError("");
    setNotes(newNotes);
    setTitle("");
    setInputText("");
    setEditToggle(null);
    localStorage.setItem("notes", JSON.stringify(newNotes));
  };

  const deleteHandler = (id: string) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  useEffect(() => {
    const notesData = JSON.parse(localStorage.getItem("notes") || "[]");
    setNotes(notesData);
  }, []);

  return {
    inputText,
    title,
    characterLimit,
    notes,
    editToggle,
    error,
    setInputText,
    setTitle,
    saveHandler,
    editHandler,
    deleteHandler,
  };
};

export default useNotes;
