export const normalize = url => {
  // url is like https://congz.me/gakki.webm
  const matches = /^https:\/\/www\.youtube\.com\/watch\?v=(.{9,20})$/.exec(url)
  if (matches) {
    return {
      src: matches[1],
      type: 'youtube'
    }
  }
  const arr = url.split('/')
  const file = arr[arr.length - 1]
  const extArr = file.split('.')
  const ext = extArr[extArr.length - 1]
  return {
    src: url,
    type: `video/${ext}`
  }
}
