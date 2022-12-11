import { extendTheme } from '@chakra-ui/react'
import { GlobalStyles as styles } from './styles'
import { ColorStyles as colors } from './foundations/colors'
import { FontStyles as fonts } from './foundations/fonts'

const theme = {
    styles,
    colors,
    fonts,
}

export default extendTheme(theme)