import React, {
  createContext,
  useContext,
  ReactNode,
} from 'react';
import { en } from '../locales/en';

type Translations = typeof en;

interface LanguageContextType {
  language: 'en';
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const t = en;

  return (
    <LanguageContext.Provider
      value={{ language: 'en', t }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};