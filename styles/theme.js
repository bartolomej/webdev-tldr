export const theme = {
  colors: {
    // TODO: change colors
    primary: '#E76F51',
    secondary: '#2A9D8F',
    dark: '#264653',
    lightDark: '#556d77',
    light: '#F1F2EB',
    white: '#FFFFFF',
    html: "#e96228",
    css: "#2862e9",
    js: "#f7e017"
  },
  constants: {
    smBorderRadius: '8px',
    containerWidth: '700px',
  },
  gutter: {
    sm: '5px',
    med: '10px',
  },
  styles: {
    boxShadow: (focused) => `-1px 1px ${focused ? '50px' : '30px'} -10px rgb(0 0 0 / 30%), 0 18px 36px -18px rgb(0 0 0 / 33%)`
  }
}
