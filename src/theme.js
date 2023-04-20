import { extendTheme } from "@chakra-ui/react";

const theme = {

config:{
    initialColorMode: 'light',
     useSystemColorMode: false
    },

styles:{
        global:{
            root: {
                'display': 'flex',
                'flexDirection': 'column'
            }
        }
    }
} 

export default extendTheme(theme)