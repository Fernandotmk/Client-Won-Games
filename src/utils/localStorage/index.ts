const APP_KEY = 'WONGAMES'

export function getStorageItem(key: string) {
  // faz esse tramento inicial pois no Next não existe window
  // será criado posteriormente
  if (typeof window === 'undefined') return

  // concatenando 'WONGAMES' + o valor que for passado
  // ao utilizar a função
  const data = window.localStorage.getItem(`${APP_KEY}_${key}`)
  // utilizando JSON parse para mudar de string
  // que vem do localStorage para o formato de objeto
  return JSON.parse(data!)
}

export function setStorageItem(key: string, value: string[]) {
  // faz esse tramento inicial pois no Next não existe window
  // será criado posteriormente
  if (typeof window === 'undefined') return

  const data = JSON.stringify(value)
  return window.localStorage.setItem(`${APP_KEY}_${key}`, data)
}
