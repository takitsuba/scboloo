import thenChrome from 'then-chrome'

export default async () => {
  return await thenChrome.tabs.executeScript({
    code: `(() => {
      const ogImage = document.querySelector('meta[property="og:image"]')
      const imageTags = document.querySelectorAll('img')
      return [ogImage, ...imageTags].map((tag) => tag && (tag.content || tag.src))
    })()`
  })
}
