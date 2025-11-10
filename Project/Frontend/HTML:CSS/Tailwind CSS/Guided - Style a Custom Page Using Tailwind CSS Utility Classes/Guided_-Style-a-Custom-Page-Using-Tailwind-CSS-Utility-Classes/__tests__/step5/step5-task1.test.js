import { describe, it, expect } from 'vitest'
import { readFileSync, existsSync } from 'fs'
import { JSDOM } from 'jsdom'
import path from 'path'

describe('Check Tailwind Typography Styling in index.html for elements inside #description-1', () => {
  it('ensure that the first <p> tag inside #description-1 has a text size of 14px and a gray color with shade 600 (using "text-sm" and "text-gray-600")', () => {
    const indexpath = path.resolve(process.cwd(), 'index.html')
    expect(existsSync(indexpath)).toBe(true)
    
    const html = readFileSync(indexpath, 'utf-8')
    const dom = new JSDOM(html)
    
    const descriptionDiv = dom.window.document.querySelector('#description-1')
    expect(descriptionDiv).not.toBeNull()
    
    const firstP = descriptionDiv.querySelector('p')
    expect(firstP).not.toBeNull()
    
    expect(firstP.classList.contains('text-sm')).toBe(true)
    expect(firstP.classList.contains('text-gray-600')).toBe(true)
  })

  it('ensure that the <h2> tag inside #description-1 has a text size of 20px, teal color with shade 800, bold weight, and a serif font (using "text-xl", "text-teal-800", "font-bold", and "font-serif")', () => {
    const indexpath = path.resolve(process.cwd(), 'index.html')
    const html = readFileSync(indexpath, 'utf-8')
    const dom = new JSDOM(html)
    
    const descriptionDiv = dom.window.document.querySelector('#description-1')
    expect(descriptionDiv).not.toBeNull()
    
    const h2Element = descriptionDiv.querySelector('h2')
    expect(h2Element).not.toBeNull()
    
    expect(h2Element.classList.contains('text-xl')).toBe(true)
    expect(h2Element.classList.contains('text-teal-800')).toBe(true)
    expect(h2Element.classList.contains('font-bold')).toBe(true)
    expect(h2Element.classList.contains('font-serif')).toBe(true)
  })

  it('ensure that the <p> tag with id "author-name" has a text size of 14px and a gray color with shade 700 (using "text-sm" and "text-gray-700")', () => {
    const indexpath = path.resolve(process.cwd(), 'index.html')
    const html = readFileSync(indexpath, 'utf-8')
    const dom = new JSDOM(html)
    
    const authorP = dom.window.document.querySelector('#author-name')
    expect(authorP).not.toBeNull()
    
    expect(authorP.classList.contains('text-sm')).toBe(true)
    expect(authorP.classList.contains('text-gray-700')).toBe(true)
  })
})
