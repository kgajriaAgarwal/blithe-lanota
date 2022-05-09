import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {
  BrowserRouter,
} from "react-router-dom";
import { ThemeModeProvider, NotesProvider, ArchivesProvider } from "./Helpers/Context";

// Call make Server
makeServer();

ReactDOM.render(
  <ThemeModeProvider>
    <BrowserRouter>
      <NotesProvider>
        <ArchivesProvider>
          <App />
        </ArchivesProvider>
      </NotesProvider>
     </BrowserRouter>
   </ThemeModeProvider> 
  ,
  document.getElementById("root")
);
