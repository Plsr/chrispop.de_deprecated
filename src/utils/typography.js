import Typography from "typography"
import CodePlugin from 'typography-plugin-code'
import { primaryColor, grey } from './colors'

const typography = new Typography({
  title: 'chrispop',
  baseFontSize: '16px',
  baseLineHeight: '1.8',
  scaleRatio: 2,
  googleFonts: [
    {
      name: 'Montserrat',
      styles: ['400', '700']
    }
  ],
  headerFontFamily: ['Montserrat', 'sans-serif'],
  bodyFontFamily: ['Montserrat', 'sans-serif'],
  headerGreyHue: 'warm',
  bodyGreyHue: 'warm',
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    a: {
      color: '#333333',
      borderBottom: `2px solid ${primaryColor}`,
      textDecoration: 'none'
    },
    'a:hover': {
      borderBottom: `4px solid ${primaryColor}`,
    },
    blockquote: {
      marginLeft: 0,
      paddingLeft: '1.8rem',
      borderLeft: `6px solid ${primaryColor}`,
      fontStyle: 'italic',
      color: grey
    }
  }),
  plugins: [
    new CodePlugin(),
  ]
})

export default typography;
