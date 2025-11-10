import { describe, it, expect } from 'vitest'
import { readFileSync, existsSync } from 'fs'
import { JSDOM } from 'jsdom'
import path from 'path'

describe('Check Tailwind Styling in index.html for description and related elements', () => {
  it('ensure that all <p> and <h2> tags inside #description-1 have the "block" class', () => {
    const indexpath = path.resolve(process.cwd(), 'index.html')
    expect(existsSync(indexpath)).toBe(true)
    
    const html = readFileSync(indexpath, 'utf-8')
    const dom = new JSDOM(html)
    
    const descriptionDiv = dom.window.document.querySelector('#description-1')
    expect(descriptionDiv).not.toBeNull()
    
    const blockElements = descriptionDiv.querySelectorAll('p, h2')
    blockElements.forEach(el => {
      expect(el.classList.contains('block')).toBe(true)
    })
  })

  it('ensure that the <div> with id "add-remove" has grid layout classes "grid" and "grid-cols-2"', () => {
    const indexpath = path.resolve(process.cwd(), 'index.html')
    const html = readFileSync(indexpath, 'utf-8')
    const dom = new JSDOM(html)

    const addRemoveDiv = dom.window.document.querySelector('#add-remove')
    expect(addRemoveDiv).not.toBeNull()
    expect(addRemoveDiv.classList.contains('grid')).toBe(true)
    expect(addRemoveDiv.classList.contains('grid-cols-2')).toBe(true)
  })

  it('ensure that all <button> and <span> tags inside #btn-plus-minus have the "inline-block" class', () => {
    const indexpath = path.resolve(process.cwd(), 'index.html')
    const html = readFileSync(indexpath, 'utf-8')
    const dom = new JSDOM(html)

    const btnPlusMinusDiv = dom.window.document.querySelector('#btn-plus-minus')
    expect(btnPlusMinusDiv).not.toBeNull()
    
    const inlineElements = btnPlusMinusDiv.querySelectorAll('button, span')
    inlineElements.forEach(el => {
      expect(el.classList.contains('inline-block')).toBe(true)
    })
  })
})
