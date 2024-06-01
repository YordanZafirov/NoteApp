export interface INote {
  id: string;
  title: string;
  text: string;
  editHandler: (id: string, title: string, text: string) => void;
  deleteHandler: (id: string) => void;
}
