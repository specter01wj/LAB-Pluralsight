import { describe, it, expect } from 'vitest'
import { readFileSync, existsSync } from 'fs'
import { JSDOM } from 'jsdom'
import path from 'path'

describe('Check Tailwind Background Colors in index.html for main, section, and btn-plus-minus elements', () => {
  it('ensure that the <main> element includes the classes "p-5" and "bg-gray-50"', () => {
    
    const indexpath = path.resolve(process.cwd(), 'index.html')
    expect(existsSync(indexpath)).toBe(true)

    const html = readFileSync(indexpath, 'utf-8')
    const dom = new JSDOM(html)
    
    const mainElement = dom.window.document.querySelector('main')
    expect(mainElement).not.toBeNull()

    expect(mainElement.classList.contains('p-5')).toBe(true)
    expect(mainElement.classList.contains('bg-gray-50')).toBe(true)
  })

  it('ensure that the <section> element includes the class "bg-white"', () => {
    
    const indexpath = path.resolve(process.cwd(), 'index.html')
    const html = readFileSync(indexpath, 'utf-8')
    const dom = new JSDOM(html)
    
    const sectionElement = dom.window.document.querySelector('section')
    expect(sectionElement).not.toBeNull()

    expect(sectionElement.classList.contains('bg-white')).toBe(true)
  })

  it('ensure that the <div> with id "btn-plus-minus" includes the class "bg-emerald-400"', () => {
    // Read the index.html file from the project root
    const indexpath = path.resolve(process.cwd(), 'index.html')
    const html = readFileSync(indexpath, 'utf-8')
    const dom = new JSDOM(html)
    
    const btnDiv = dom.window.document.querySelector('#btn-plus-minus')
    expect(btnDiv).not.toBeNull()

    expect(btnDiv.classList.contains('bg-emerald-400')).toBe(true)
  })
})
