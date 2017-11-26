import fetch from 'isomorphic-fetch'

export const getRequest = async url => {
  return await fetch(url)
      .then(res => {
        if(res.ok) {
          return res.json()
        }
        throw new Error(`Failed to fetch ${url}`);
      }).catch(response =>{
        console.log(response)
      })
}

export function getImageUrlByType(imageType, arrayOfUrls) {
  for(let urlObj of arrayOfUrls) {
    const url = urlObj.href
    if (url.indexOf(imageType) > -1) {
      return url
    }
  }
}