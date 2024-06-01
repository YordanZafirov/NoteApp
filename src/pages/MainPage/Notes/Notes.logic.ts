import { useState } from "react";

const useNotes = () => {
    const [inputText, setInputText] = useState('');
    const [notes, setNotes] = useState([]);

    const character = 150;
    const characterLimit = character - inputText.length;

    const saveHandler = () => {

    }

    return {
        inputText,
        characterLimit,
        setInputText,
        saveHandler,
    }
}
 
export default useNotes;