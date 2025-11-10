import { describe, it, expect } from 'vitest'
import { readFileSync, existsSync } from 'fs'
import { JSDOM } from 'jsdom'
import path from 'path'

describe('Check Tailwind Styling in index.html for Remove button and Price paragraph', () => {
  it('ensure that the Remove button has a text size of 14px, medium font weight, red text (shade 500) and red text (shade 800) on hover', () => {
    
    const indexpath = path.resolve(process.cwd(), 'index.html')
    expect(existsSync(indexpath)).toBe(true)
    
    const html = readFileSync(indexpath, 'utf-8')
    const dom = new JSDOM(html)
    
    const removeBtn = dom.window.document.querySelector('#remove-btn')
    expect(removeBtn).not.toBeNull()
    
    expect(removeBtn.classList.contains('text-sm')).toBe(true)
    expect(removeBtn.classList.contains('font-medium')).toBe(true)
    expect(removeBtn.classList.contains('text-red-500')).toBe(true)
    expect(removeBtn.classList.contains('hover:text-red-800')).toBe(true)
  })

  it('ensure that the price paragraph has a text size of 18px, gray text (shade 900) and extra bold font weight', () => {
    
    const indexpath = path.resolve(process.cwd(), 'index.html')
    expect(existsSync(indexpath)).toBe(true)
    
    const html = readFileSync(indexpath, 'utf-8')
    const dom = new JSDOM(html)
    
    const priceParagraph = dom.window.document.querySelector('#price-1')
    expect(priceParagraph).not.toBeNull()
    
    expect(priceParagraph.classList.contains('text-lg')).toBe(true)
    expect(priceParagraph.classList.contains('text-gray-900')).toBe(true)
    expect(priceParagraph.classList.contains('font-extrabold')).toBe(true)
  })
})
