import { describe, it, expect } from 'vitest'
import { readFileSync, existsSync } from 'fs'
import { JSDOM } from 'jsdom'
import path from 'path'

describe('Check Tailwind Padding in index.html for the description-1 div', () => {
  it('ensure that the index.html file exists and that the <div> with id "description-1" includes the classes "pt-1.5", "pl-6", "pr-5", and "pb-4"', () => {
    const indexpath = path.resolve(process.cwd(), 'index.html')
    expect(existsSync(indexpath)).toBe(true)

    const html = readFileSync(indexpath, 'utf-8')
    const dom = new JSDOM(html)
    
    const descriptionDiv = dom.window.document.querySelector('#description-1')
    expect(descriptionDiv).not.toBeNull()

    expect(descriptionDiv.classList.contains('pt-1.5')).toBe(true)
    expect(descriptionDiv.classList.contains('pl-6')).toBe(true)
    expect(descriptionDiv.classList.contains('pr-5')).toBe(true)
    expect(descriptionDiv.classList.contains('pb-4')).toBe(true)
  })
})
