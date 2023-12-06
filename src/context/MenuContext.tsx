import React, { createContext, useContext, ReactNode, useState } from 'react';


type MenuContextData = {
  isMenuOpen: boolean;
  toggleMenu: () => void;
};


const MenuContext = createContext<MenuContextData | undefined>(undefined);


export const MenuProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const contextValue: MenuContextData = {
    isMenuOpen,
    toggleMenu,
  };

  return <MenuContext.Provider value={contextValue}>{children}</MenuContext.Provider>;
};


export const useMenu = () => {
  const context = useContext(MenuContext);

  if (!context) {
    throw new Error('useMenu must be used within a MenuProvider');
  }

  return context;
};