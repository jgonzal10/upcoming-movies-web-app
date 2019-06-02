const {listMovies}= require('../services/movie.service')

const getListOfMovies = async (req, res, next) => {
 
    try {
      let data = await listMovies()
      let movies = data.data.results;
      res.json(movies)
      next()
    } catch(e) {
      console.log(e.message)
      res.sendStatus(500) && next(error)
    }
  }
module.exports ={getListOfMovies}