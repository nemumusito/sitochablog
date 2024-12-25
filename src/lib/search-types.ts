export type FeedItem = {
  title: string
  link: string
  description?: string
  pubDate: string
}

export type DOMElement = HTMLElement & {
  classList: DOMTokenList
  style: CSSStyleDeclaration
}

export type SearchInput = HTMLInputElement & {
  value: string
}

export type ListItem = HTMLElement & {
  previousElementSibling: ListItem | null
  nextElementSibling: ListItem | null
  classList: DOMTokenList
}

export type ResultsList = HTMLUListElement & {
  firstElementChild: ListItem | null
  lastElementChild: ListItem | null
  querySelector(selector: string): ListItem | null
  children: HTMLCollectionOf<ListItem>
}

export type ClickableElement = HTMLElement & {
  click(): void
}