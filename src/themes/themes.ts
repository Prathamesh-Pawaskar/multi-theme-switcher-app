
export type ThemeClass = 'theme1' | 'theme2' | 'theme3';


export interface Theme {
  name: string;
  className: ThemeClass; 
  layout: 'default' | 'grid';
  font: string;
}


export const theme1: Theme = {
  name: 'Theme 1',
  className: 'theme1',
  layout: 'default',
  font: 'system-ui, sans-serif',
};


export const theme2: Theme = {
  name: 'Theme 2',
  className: 'theme2',
  layout: 'default',
  font: 'Georgia, serif',
};


export const theme3: Theme = {
  name: 'Theme 3',
  className: 'theme3',
  layout: 'grid',
  font: '"Pacifico", cursive',
};

export const themes = [theme1, theme2, theme3];

export type ThemeName = 'Theme 1' | 'Theme 2' | 'Theme 3';
