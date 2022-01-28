function withOpacityValue(variable) {
   return ({ opacityValue }) => {
     if (opacityValue === undefined) {
       return `rgb(var(${variable}))`
     }
     return `rgb(var(${variable}) / ${opacityValue})`
   }
 }

module.exports = {
  content: [
     "./src/components/**/*",
     "./src/pages/**/*"
   ],
  theme: {
     extend: {
      colors: {
       primary: withOpacityValue('--color-primary'),
       secondary: withOpacityValue('--color-secondary'),
       tertiary: withOpacityValue('--color-tertiary'),
       peripheral: withOpacityValue('--color-peripheral')
    },
  },
},
  plugins: [],
}
