const palette = {
    primary: {
        main: '#7685D6',
        dark: 'black',
        light: '#7685D6',
        contrastText: '#ffffff',
    },
    secondary: {
        main: '#C0DBEA',
        dark: '#C0DBEA',
        light: '#C0DBEA',
        contrastText: '#ffffff',
    },
    grey: {
        main: '#81929B'
    },
    button: {
        // Mitenköhän nää ois järekvää nimetä? :D
        primary: '#7685D6',
        secondary: '#ffffff'
    },
}

const typography =  {
    fontFamily: 'Inter',
    fontWeightRegular: 400,
    h1: {
        fontFamily: 'Inter',
        fontWeight: '100px',
    },
    subtitle: {
        fontFamily: 'Inter',
        fontWeight: '50px',
    },
    body: {
        fontFamily: 'Inter',
        fontSize: '20px',
        fontWeight: 400,
    },
}

module.exports = {palette, typography}