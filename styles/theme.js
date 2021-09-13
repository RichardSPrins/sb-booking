import { StepsStyleConfig as Steps } from 'chakra-ui-steps';
import { extendTheme } from "@chakra-ui/react"

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
}

const theme = extendTheme({ 
  config,
  components: {
    Steps
  }
  })
  
export default theme