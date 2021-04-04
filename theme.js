export const theme = {
  colors: {
    // TODO: change colors
    primary: '#444CF7',
    secondary: '#EB5E55',
    dark: '#3A3335',
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
