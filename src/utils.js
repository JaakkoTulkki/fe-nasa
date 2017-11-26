import fetch from 'isomorphic-fetch'

export const getRequest = async url => fetch(url)
  .then((res) => {
    if (res.ok) {
      return res.json()
    }
    throw new Error(`Failed to fetch ${url}`)
  }).catch((response) => {
    console.log(response); // eslint-disable-line
  })

export function getAssetUrlByType(imageType, arrayOfUrls) {
  for (const urlObj of arrayOfUrls) {
    const url = urlObj.href
    if (url.indexOf(imageType) > -1) {
      return url
    }
  }
  return undefined
}
