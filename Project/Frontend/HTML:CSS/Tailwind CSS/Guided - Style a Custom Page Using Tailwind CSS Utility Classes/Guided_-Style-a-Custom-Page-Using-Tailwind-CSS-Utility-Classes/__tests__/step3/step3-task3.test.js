import { describe, it, expect, beforeAll } from 'vitest'
import { readFileSync, existsSync } from 'fs'
import { JSDOM } from 'jsdom'
import path from 'path'

describe('Check Tailwind Styling in index.html for btn-plus-minus and remove button', () => {
  const indexPath = path.resolve(process.cwd(), 'index.html')
  
  it('ensure that the index.html file exists', () => {
    expect(existsSync(indexPath)).toBe(true)
  })
  
  let dom;
  beforeAll(() => {
    const html = readFileSync(indexPath, 'utf-8')
    dom = new JSDOM(html)
  })

  it('ensure that the minus button inside #btn-plus-minus has a right margin class "mr-2"', () => {
    const btnPlusMinusDiv = dom.window.document.querySelector('#btn-plus-minus')
    expect(btnPlusMinusDiv).not.toBeNull()
    const minusButton = Array.from(btnPlusMinusDiv.querySelectorAll('button'))
      .find(btn => btn.textContent.trim() === '-')
    expect(minusButton).not.toBeNull()
    expect(minusButton.classList.contains('mr-2')).toBe(true)
  })

  it('ensure that the plus button inside #btn-plus-minus has a left margin class "ml-2"', () => {
    const btnPlusMinusDiv = dom.window.document.querySelector('#btn-plus-minus')
    expect(btnPlusMinusDiv).not.toBeNull()
    const plusButton = Array.from(btnPlusMinusDiv.querySelectorAll('button'))
      .find(btn => btn.textContent.trim() === '+')
    expect(plusButton).not.toBeNull()
    expect(plusButton.classList.contains('ml-2')).toBe(true)
  })

  it('ensure that the <span> inside #btn-plus-minus has horizontal margins applied with the "mx-2" class', () => {
    const btnPlusMinusDiv = dom.window.document.querySelector('#btn-plus-minus')
    expect(btnPlusMinusDiv).not.toBeNull()
    const spanElement = btnPlusMinusDiv.querySelector('span')
    expect(spanElement).not.toBeNull()
    expect(spanElement.classList.contains('mx-2')).toBe(true)
  })

  it('ensure that the button with id "remove-btn" has a left margin class "ml-4"', () => {
    const removeBtn = dom.window.document.querySelector('#remove-btn')
    expect(removeBtn).not.toBeNull()
    expect(removeBtn.classList.contains('ml-4')).toBe(true)
  })
})
