export interface CreateNoteInterface {
    inputText: string;
    characterLimit: number;
    setInputText: (value: string) => void;
    saveNote: () => void;
}