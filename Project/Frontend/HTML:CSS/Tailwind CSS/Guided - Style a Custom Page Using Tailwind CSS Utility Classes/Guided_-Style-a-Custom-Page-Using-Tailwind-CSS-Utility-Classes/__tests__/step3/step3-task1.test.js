import { describe, it, expect } from 'vitest'
import { readFileSync, existsSync } from 'fs'
import { JSDOM } from 'jsdom'
import path from 'path'

describe('Check Tailwind Styling in index.html for the section element', () => {
  it('ensure that the index.html file exists and that the <section> tag includes the classes "max-w-lg", "mx-auto", "mt-5", and "mb-3"', () => {
    const indexpath = path.resolve(process.cwd(), 'index.html')
    expect(existsSync(indexpath)).toBe(true)

    const html = readFileSync(indexpath, 'utf-8')
    const dom = new JSDOM(html)

    const sectionElement = dom.window.document.querySelector('section')
    expect(sectionElement).not.toBeNull()

    expect(sectionElement.classList.contains('max-w-lg')).toBe(true)
    expect(sectionElement.classList.contains('mx-auto')).toBe(true)
    expect(sectionElement.classList.contains('mt-5')).toBe(true)
    expect(sectionElement.classList.contains('mb-5')).toBe(true)
  })
})
