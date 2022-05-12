import { ThemeModeProvider, useThemeMode } from "./ThemeContext"; 
import {  useNotes,  NotesProvider} from './NotesContext';
import { useArchives, ArchivesProvider} from './ArchivesContext';
import { useTrash, TrashProvider } from './TrashContext';
import { useReducerContext, ReducerProvider } from './ReducerContext';
import {useLayout , LayoutProvider } from './LayoutContext';
 

export{
    //provider
    ThemeModeProvider,
    NotesProvider,
    ArchivesProvider,
    TrashProvider,
    ReducerProvider,
    LayoutProvider,
    
    //custom hooks
    useThemeMode,
    useNotes,
    useArchives,
    useTrash,
    useReducerContext,
    useLayout
}