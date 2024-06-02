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

  const character = 150;
  const characterLimit = character - inputText.length;

  const editHandler = (id: string, text: string, title: string) => {
    setEditToggle(id);
    setTitle(title);
    setInputText(text);
  };

  const saveHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (editToggle) {
      setNotes(
        notes.map((note) =>
          note.id === editToggle
            ? { ...note, title: title, text: inputText }
            : note
        )
      );
    } else {
      setNotes((prevNotes) => [
        ...prevNotes,
        {
          id: uuid(),
          title: title,
          text: inputText,
        },
      ]);
    }

    setTitle("");
    setInputText("");
    setEditToggle(null);
  };

  const deleteHandler = (id: string) => {
    setNotes((prevNotes) => {
      const updatedNotes = prevNotes.filter((note) => note.id !== id);
      localStorage.setItem("notes", JSON.stringify(updatedNotes));
      return updatedNotes;
    });
  };

  const sortedNotes = [...notes].reverse();

  useEffect(() => {
    const notesData = JSON.parse(localStorage.getItem("notes") || "");
    if (notesData) {
      setNotes(notesData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return {
    inputText,
    title,
    characterLimit,
    sortedNotes,
    editToggle,
    setInputText,
    setTitle,
    saveHandler,
    editHandler,
    deleteHandler,
  };
};

export default useNotes;
