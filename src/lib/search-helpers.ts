import type { DOMElement, SearchInput, ResultsList, ListItem } from './search-types'

export const getContainer = () =>
  document.querySelector('.search-modal-container') as DOMElement

export const getSearchInput = () =>
  document.querySelector('.search-prompt input') as SearchInput

export const getResultsList = () =>
  document.querySelector('.search-result ul') as ResultsList

export const addSelected = (element: HTMLElement) =>
  element.classList.add('selected')

export const removeSelected = (element: HTMLElement) =>
  element.classList.remove('selected')

export const handleKeydown = (
  event: KeyboardEvent,
  {select, closeModal, selectUp, selectDown, searchAndRender}: {
    select: () => void
    closeModal: () => void
    selectUp: (e: KeyboardEvent) => void
    selectDown: (e: KeyboardEvent) => void
    searchAndRender: () => void
  }
) => {
  switch (event.keyCode) {
    case 13: select(); break
    case 27: closeModal(); break
    case 38: selectUp(event); break
    case 40: selectDown(event); break
    default: searchAndRender()
  }
}

export const handleMouseover = (event: MouseEvent) => {
  const list = getResultsList()
  if (!list) return

  const target = event.target as DOMElement
  const listItem = target.closest('li')
  if (!listItem) return

  Array.from(list.children).forEach(item => {
    removeSelected(item)
  })
  addSelected(listItem)
}