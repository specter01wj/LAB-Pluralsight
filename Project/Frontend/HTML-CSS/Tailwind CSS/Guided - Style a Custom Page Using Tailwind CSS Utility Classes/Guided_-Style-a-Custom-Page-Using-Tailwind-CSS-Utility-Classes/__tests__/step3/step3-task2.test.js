import { describe, it, expect } from 'vitest'
import { readFileSync, existsSync } from 'fs'
import { JSDOM } from 'jsdom'
import path from 'path'

describe('Check Tailwind Styling in index.html for elements inside #description-1', () => {
  it('ensure that the first <p> tag inside #description-1 has a bottom margin of 16px using "mb-4"', () => {
    const indexpath = path.resolve(process.cwd(), 'index.html')
    expect(existsSync(indexpath)).toBe(true)
    
    const html = readFileSync(indexpath, 'utf-8')
    const dom = new JSDOM(html)
    
    const descriptionDiv = dom.window.document.querySelector('#description-1')
    expect(descriptionDiv).not.toBeNull()
    
    const firstP = descriptionDiv.querySelector('p')
    expect(firstP).not.toBeNull()
    expect(firstP.classList.contains('mb-4')).toBe(true)
  })

  it('ensure that the <h2> tag inside #description-1 has a negative top margin of 4px using "-mt-1"', () => {
    const indexpath = path.resolve(process.cwd(), 'index.html')
    const html = readFileSync(indexpath, 'utf-8')
    const dom = new JSDOM(html)
    
    const descriptionDiv = dom.window.document.querySelector('#description-1')
    expect(descriptionDiv).not.toBeNull()
    
    const h2Element = descriptionDiv.querySelector('h2')
    expect(h2Element).not.toBeNull()
    expect(h2Element.classList.contains('-mt-1')).toBe(true)
  })

  it('ensure that the <p> tag with id "author-name" has a bottom margin of 21px using "mb-[21px]"', () => {
    const indexpath = path.resolve(process.cwd(), 'index.html')
    const html = readFileSync(indexpath, 'utf-8')
    const dom = new JSDOM(html)
    
    const authorNameElement = dom.window.document.querySelector('#author-name')
    expect(authorNameElement).not.toBeNull()
    expect(authorNameElement.classList.contains('mb-[21px]')).toBe(true)
  })
})
