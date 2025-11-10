import { describe, it, expect } from 'vitest'
import { readFileSync, existsSync } from 'fs'
import { JSDOM } from 'jsdom'
import path from 'path'

describe('Check Tailwind Padding in index.html for the section element', () => {
  it('ensure that the index.html file exists and that the <section> element includes both "py-5" for vertical padding and "px-6" for horizontal padding', () => {
    const indexpath = path.resolve(process.cwd(), 'index.html')
    expect(existsSync(indexpath)).toBe(true)

    const html = readFileSync(indexpath, 'utf-8')
    const dom = new JSDOM(html)
    
    const sectionElement = dom.window.document.querySelector('section')
    expect(sectionElement).not.toBeNull()

    expect(sectionElement.classList.contains('py-5')).toBe(true)
    expect(sectionElement.classList.contains('px-6')).toBe(true)
  })
});
