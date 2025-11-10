import { describe, it, expect } from 'vitest'
import { readFileSync, existsSync } from 'fs'
import { JSDOM } from 'jsdom'
import path from 'path'

describe('Check Tailwind Responsive Background Styling in index.html for the main element', () => {
  it('ensure that the <main> element includes "p-5", "bg-purple-100", "md:bg-blue-200", and "lg:bg-teal-50" classes', () => {
    
    const indexpath = path.resolve(process.cwd(), 'index.html')
    expect(existsSync(indexpath)).toBe(true)

    const html = readFileSync(indexpath, 'utf-8')
    const dom = new JSDOM(html)
    
    const mainElement = dom.window.document.querySelector('main')
    expect(mainElement).not.toBeNull()

    expect(mainElement.classList.contains('p-5')).toBe(true)
    expect(mainElement.classList.contains('bg-purple-100')).toBe(true)
    expect(mainElement.classList.contains('md:bg-blue-200')).toBe(true)
    expect(mainElement.classList.contains('lg:bg-teal-50')).toBe(true)

    expect(mainElement.classList.contains('bg-gray-50')).toBe(false)
  })
})
