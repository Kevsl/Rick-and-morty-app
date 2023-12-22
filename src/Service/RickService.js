import axios from 'axios'

export async function getCharacters(url) {
  return axios.get(url).then((res) => {
    return res.data
  })
}
