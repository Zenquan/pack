export const $ = id => document.querySelector(id)
export const createElem = (elem) => {
  return document.createElement(elem)
}

export function debounce(func, wait) {
  let timer = 0;
  return function () {
      if (timer !== null) {
          window.clearTimeout(timer)
      }
      timer = window.setTimeout(func, wait);
  }
}

export function throttle(func, delay) {
  let prev = 0
  let timer = 0

  function runFunc(...args) {
      func(...args)
      prev = Date.now()
  }

  return function (...args) {
      window.clearTimeout(timer)
      const delta = Date.now() - prev

      if (delta >= delay) {
          runFunc(...args)
      } else {
          timer = window.setTimeout(() => runFunc(...args), delay - delta)
      }
  }
}
