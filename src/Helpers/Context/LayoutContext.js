import { useState, createContext, useContext } from "react";

const LayoutContext = createContext();

const LayoutProvider = ({children}) => {

    const [showLeftBar , setShowLeftbar] = useState(false);
    const [showRightBar , setShowRightbar] = useState(false);

    return(
        <LayoutContext.Provider value={{
            showLeftBar ,
            setShowLeftbar,
            showRightBar ,
            setShowRightbar
             }}>
            {children}        
        </LayoutContext.Provider>    
    )
}

const useLayout = () =>useContext(LayoutContext);

export { useLayout , LayoutProvider };