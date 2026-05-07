import { readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'

const filePath = resolve('node_modules/@nuxt/ui/dist/runtime/ui.css')
const originalCss = '.dark{color-scheme:dark}a:focus-visible{@apply outline-primary}::-moz-selection{@apply bg-primary/40}::selection{@apply bg-primary/40}'
const patchedCss = '.dark{color-scheme:dark}a:focus-visible{outline-color:rgb(var(--color-primary-500) / 1)}::-moz-selection{background-color:rgb(var(--color-primary-500) / 0.4)}::selection{background-color:rgb(var(--color-primary-500) / 0.4)}'

try {
  const currentCss = await readFile(filePath, 'utf8')

  if (currentCss === patchedCss) {
    process.exit(0)
  }

  if (currentCss !== originalCss) {
    throw new Error(`Unexpected contents in ${filePath}`)
  }

  await writeFile(filePath, patchedCss)
} catch (error) {
  console.error(error instanceof Error ? error.message : error)
  process.exit(1)
}