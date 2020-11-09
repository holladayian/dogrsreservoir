export function getNewDog() {
  // return fetch('https://api.namefake.com/random/random')
  return fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => {
    if(response.ok) {
      return response.json()
    } else {
      throw response
    }
  })
  .then(data => data)
}