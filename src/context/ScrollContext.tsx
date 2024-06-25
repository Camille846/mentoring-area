import React, { createContext, useRef, ReactNode } from 'react';

interface ScrollContextType {
  homeRef: React.RefObject<HTMLDivElement>;
  linksRef: React.RefObject<HTMLDivElement>;
  calendarRef: React.RefObject<HTMLDivElement>;
  faqRef: React.RefObject<HTMLDivElement>;
}

const ScrollContext = createContext<ScrollContextType | null>(null);

const ScrollContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const homeRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  const contextValue = {
    homeRef,
    linksRef,
    calendarRef,
    faqRef,
  };

  return (
    <ScrollContext.Provider value={contextValue}>
      {children}
    </ScrollContext.Provider>
  );
};

export { ScrollContext, ScrollContextProvider };