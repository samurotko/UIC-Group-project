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
        // Mitenköhän nää ois järekvää nimetä? :D // yleensä noi buttonit on just primary, secondary ... mut tbh en tiiä onko tähän hyvää vastausta 
        primary: '#7685D6',
        secondary: '#ffffff'
    },
    link: {
        primary: '#162FBA'
    },
    conclusion: {
        case1: {
            bg: '#FFE9E9',
        },
        case2: {
            bg: '#FFEED6',
        },
        case3: {
            bg:'#D6E8DB',
        },

    },
}

const typography =  {
    fontFamily: 'Inter',
    fontWeightRegular: 400,
    h1: {
        fontFamily: 'Inter',
        fontSize: '70px',
    },
    h2: {
        fontFamily: 'Inter',
        fontSize: '60px',
    },
    h3: {
        fontFamily: 'Inter',
        fontSize: '1.6em',
    },
    h4: {
        fontFamily: 'Inter',
        fontSize: '1.3em',
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