export interface ICreateNote {
    inputText: string;
    title: string;
    characterLimit: number;
    editToggle: string | null;
    setInputText: (value: string) => void;
    setTitle: (value: string) => void;
    saveNote: (e: React.FormEvent<HTMLFormElement>) => void;
}