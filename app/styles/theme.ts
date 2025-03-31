'use client';

import { createTheme } from "@mui/material";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const theme = createTheme({
    palette: {
        primary: {
            main: '#3498db',
            dark: 'rgb(93 0 191)',
            light: '#FFFFFF',            
        },
        secondary: {
            main: '#2ecc71', 
            light: 'rgb(220 245 242)',
            dark: 'rgb(46 204 113)',
        },
        text: {
            primary: '#333333',
        },
        background: {
            default: '#f0f0f0',
        },
    },
    typography: {
        fontFamily: 'var(--font-roboto)', 
    },    
});

export default theme;
