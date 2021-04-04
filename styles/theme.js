export const theme = {
  colors: {
    // TODO: change colors
    primary: '#E76F51',
    secondary: '#2A9D8F',
    dark: '#264653',
    lightDark: '#556d77',
    light: '#F1F2EB'
  },
  constants: {
    smBorderRadius: '8px',
    containerWidth: '700px',
  },
  styles: {
    boxShadow: (focused) => `-1px 1px ${focused ? '50px' : '30px'} -10px rgb(0 0 0 / 30%), 0 18px 36px -18px rgb(0 0 0 / 33%)`
  }
}
