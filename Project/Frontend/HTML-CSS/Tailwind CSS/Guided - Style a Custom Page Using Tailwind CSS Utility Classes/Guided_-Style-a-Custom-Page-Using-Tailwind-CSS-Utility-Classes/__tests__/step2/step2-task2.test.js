import { describe, it, expect } from 'vitest'
import { readFileSync, existsSync } from 'fs'
import { JSDOM } from 'jsdom'
import path from 'path'

describe('Check Tailwind Styling in index.html for section and price elements', () => {
  it('ensure that the <section> tag includes "py-5", "px-6", "flex", "flex-row" classes and the <p> tag with id "price-1" includes "flex-grow"', () => {
    const indexpath = path.resolve(process.cwd(), 'index.html')
    expect(existsSync(indexpath)).toBe(true)

    const html = readFileSync(indexpath, 'utf-8')
    const dom = new JSDOM(html)
    
    const sectionElement = dom.window.document.querySelector('section')
    expect(sectionElement).not.toBeNull()
    expect(sectionElement.classList.contains('py-5')).toBe(true)
    expect(sectionElement.classList.contains('px-6')).toBe(true)
    expect(sectionElement.classList.contains('flex')).toBe(true)
    expect(sectionElement.classList.contains('flex-row')).toBe(true)
    
    const priceElement = dom.window.document.querySelector('#price-1')
    expect(priceElement).not.toBeNull()
    expect(priceElement.classList.contains('flex-grow')).toBe(true)
  })
})
