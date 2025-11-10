import { describe, it, expect } from 'vitest'
import { readFileSync, existsSync } from 'fs'
import { JSDOM } from 'jsdom'
import path from 'path'

describe('Check Tailwind Border Styling in index.html for section and btn-plus-minus elements', () => {
  it('ensure that the <section> tag includes "border-2", "border-emerald-700", and "rounded-lg" classes', () => {
    
    const indexpath = path.resolve(process.cwd(), 'index.html')
    expect(existsSync(indexpath)).toBe(true)
    
    const html = readFileSync(indexpath, 'utf-8')
    const dom = new JSDOM(html)
    
    const sectionElement = dom.window.document.querySelector('section')
    expect(sectionElement).not.toBeNull()
    
    expect(sectionElement.classList.contains('border-2')).toBe(true)
    expect(sectionElement.classList.contains('border-emerald-700')).toBe(true)
    expect(sectionElement.classList.contains('rounded-lg')).toBe(true)
  })

  it('ensure that the <div> with id "btn-plus-minus" includes "border-4", "border-emerald-500", and "rounded-md" classes', () => {
    
    const indexpath = path.resolve(process.cwd(), 'index.html')
    const html = readFileSync(indexpath, 'utf-8')
    const dom = new JSDOM(html)
    
    const btnDiv = dom.window.document.querySelector('#btn-plus-minus')
    expect(btnDiv).not.toBeNull()
    
    expect(btnDiv.classList.contains('border-4')).toBe(true)
    expect(btnDiv.classList.contains('border-emerald-500')).toBe(true)
    expect(btnDiv.classList.contains('rounded-md')).toBe(true)
  })
})
