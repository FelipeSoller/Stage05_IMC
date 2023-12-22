export const AlertError = {
  element: document.querySelector('.alert-error'),
  open() {
    AlertError.element.classList.add('opened')
  },
  close() {
    AlertError.element.classList.remove('opened')
  }
}