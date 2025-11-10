import { describe, it, expect } from 'vitest'
import { readFileSync, existsSync } from 'fs'
import { JSDOM } from 'jsdom'
import path from 'path'

describe('Check Tailwind Padding in index.html for the price-1 paragraph', () => {
  it('ensure that the index.html file exists and that the <p> tag with id of "price-1" includes the custom class "pl-[9px]"', () => {
    const indexpath = path.resolve(process.cwd(), 'index.html')
    expect(existsSync(indexpath)).toBe(true)

    const html = readFileSync(indexpath, 'utf-8')
    const dom = new JSDOM(html)
    
    const priceElement = dom.window.document.querySelector('#price-1')
    expect(priceElement).not.toBeNull()

    expect(priceElement.classList.contains('pl-[9px]')).toBe(true)
  })

  it('ensure that the index.html file exists and that the <div> tag with id of "btn-plus-minus" includes both "py-1" for vertical padding and "px-2" for horizontal padding', () => {
    const indexpath = path.resolve(process.cwd(), 'index.html')
    expect(existsSync(indexpath)).toBe(true)

    const html = readFileSync(indexpath, 'utf-8')
    const dom = new JSDOM(html)
    
    const priceElement = dom.window.document.querySelector('#btn-plus-minus')
    expect(priceElement).not.toBeNull()

    expect(priceElement.classList.contains('py-1')).toBe(true)
    expect(priceElement.classList.contains('px-2')).toBe(true)
  })
});