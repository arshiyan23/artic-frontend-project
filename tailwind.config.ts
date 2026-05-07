import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

export default {
  content: [],
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        '.bg-primary\\/40': {
          backgroundColor: 'rgb(var(--color-primary-500) / 0.4)'
        },
        '.outline-primary': {
          outlineColor: 'rgb(var(--color-primary-500) / 1)'
        }
      })
    })
  ]
} satisfies Config