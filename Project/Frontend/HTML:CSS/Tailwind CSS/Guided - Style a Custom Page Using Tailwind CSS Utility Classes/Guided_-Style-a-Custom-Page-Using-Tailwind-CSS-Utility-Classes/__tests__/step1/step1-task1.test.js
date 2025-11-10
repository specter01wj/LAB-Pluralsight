import { describe, it, expect } from 'vitest'
import { readFileSync, existsSync } from 'fs'
import { JSDOM } from 'jsdom'
import path from 'path'

describe('Check Tailwind Padding in index.html for the main element', () => {
  it('ensure that you have added "p-5" class to the main tag in the index.html file. should have a main tag that includes the class "p-5"', () => {
   
    const indexpath = path.resolve(process.cwd(), 'index.html')
    expect(existsSync(indexpath)).toBe(true)

    const html = readFileSync(indexpath, 'utf-8')
    const dom = new JSDOM(html)
    
    const mainElement = dom.window.document.querySelector('main')
    expect(mainElement).not.toBeNull()

    expect(mainElement.classList.contains('p-5')).toBe(true)

  })
});
