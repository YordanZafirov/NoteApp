# Note Application

## Overview
This is a note-taking application where users can create, read, update, and delete their notes. The application utilizes localStorage to persist notes, ensuring that user data remains intact even after reloading the page. It also features pagination, allowing users to navigate through their notes more efficiently. Individual notes can be viewed, edited, or deleted using React Router. There is a 404 Not Found page that is displayed if a user tries to navigate to a link that is not supported in the application.

## Technologies used
- React
- TypeScript
- styled-components

## Installation
To run the project locally, follow these steps:

1. Clone the repository: 
```bash
git clone <repository-url>
```

2. Navigate to the project directory:
```bash
cd NoteApp
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

# Usage
- To create a new note, click inside the green note-looking box. You can then type the title in the input field at the top or the content in the textarea below. Once you've entered your note, click the "Save" button to save it.

- To view a specific note, click on the "View" button to view the information about the note you want to see.

- To edit a note, click on the "Edit" button next to the note you want to modify.

- To delete a note, click on the "Delete" button next to the note you want to remove.

- Pagination allows you to navigate between pages to view all your notes.

# Hosted Application
The application is hosted at [note-app-yordan-zafirov.netlify.app](https://note-app-yordan-zafirov.netlify.app/)