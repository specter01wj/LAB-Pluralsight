import { describe, it, expect } from 'vitest'
import { readFileSync, existsSync } from 'fs'
import { JSDOM } from 'jsdom'
import path from 'path'

describe('Check Tailwind Styling in index.html for the image element', () => {
  it('ensure that the index.html file exists and that the <img> tag includes both "w-[119px]" for a custom width and "h-auto" for automatic height adjustment', () => {
    const indexpath = path.resolve(process.cwd(), 'index.html')
    expect(existsSync(indexpath)).toBe(true)

    const html = readFileSync(indexpath, 'utf-8')
    const dom = new JSDOM(html)

    const imgElement = dom.window.document.querySelector('img')
    expect(imgElement).not.toBeNull()

    expect(imgElement.classList.contains('w-[119px]')).toBe(true)
    expect(imgElement.classList.contains('h-auto')).toBe(true)
  })
})
