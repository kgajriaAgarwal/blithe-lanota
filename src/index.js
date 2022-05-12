import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {
  BrowserRouter,
} from "react-router-dom";
import { ThemeModeProvider, NotesProvider, ArchivesProvider, TrashProvider, ReducerProvider, LayoutProvider } from "./Helpers/Context";

// Call make Server
makeServer();

ReactDOM.render(
  <LayoutProvider>
    <ThemeModeProvider>
      <BrowserRouter>
        <ReducerProvider>
          <NotesProvider>
            <ArchivesProvider>
              <TrashProvider>
                <App />
              </TrashProvider>
            </ArchivesProvider>
          </NotesProvider>
        </ReducerProvider>
      </BrowserRouter>
    </ThemeModeProvider> 
   </LayoutProvider>
  ,
  document.getElementById("root")
);
