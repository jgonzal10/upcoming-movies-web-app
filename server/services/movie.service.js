const axios = require('axios')


const listMovies = async () => {
  try {
    return await axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=1f54bd990f1cdfb230adb312546d765d&language=en-US&page=1')
  } catch(e) {
    throw new Error(e.message)
  }
}


module.exports = {
    listMovies
}