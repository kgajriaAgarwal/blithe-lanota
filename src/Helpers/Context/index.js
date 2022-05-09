import { ThemeModeProvider, useThemeMode } from "./ThemeContext"; 
import {  useNotes,  NotesProvider} from './NotesContext';
import { useArchives, ArchivesProvider} from './ArchivesContext';


export{
    //provider
    ThemeModeProvider,
    NotesProvider,
    ArchivesProvider,
    
    //custom hooks
    useThemeMode,
    useNotes,
    useArchives
}