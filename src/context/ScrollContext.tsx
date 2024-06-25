import React, { createContext, useRef, ReactNode } from 'react';

interface ScrollContextType {
  homeRef: React.RefObject<HTMLDivElement>;
  linksRef: React.RefObject<HTMLDivElement>;
  calendarRef: React.RefObject<HTMLDivElement>;
  faqRef: React.RefObject<HTMLDivElement>;
}

const ScrollContext = createContext<ScrollContextType | null>(null);
const { scrollYProgress } = useViewportScroll()
const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

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
    <motion.div
    style={{ scale }}
  >
    <motion.div
    style={{
      scaleY: scrollYProgress
    }} />
    <ScrollContext.Provider value={contextValue}>
      {children}
    </ScrollContext.Provider>
    </motion.div>
  );
};

export { ScrollContext, ScrollContextProvider };