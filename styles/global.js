import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyles = createGlobalStyle`
 ${reset}
 * {
     padding:0;
     margin: 0;
     box-sizing: border-box;
 }
 
 html, body {
     width: 100%;
     height: 100%;
 } 
`

export default GlobalStyles
