import { ChakraProvider, Theme } from "@chakra-ui/react"
import theme from "../styles/theme"
import 'react-quill/dist/quill.snow.css'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
