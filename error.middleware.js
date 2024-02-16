function customeErrorHandler(err, request, response, next) {

    // Error handling middleware functionality here
  
  }
  
  const errorResponder = (err, request, response, next) => {
    response.header("Content-Type", 'application/json')
    response.status(err.statusCode).send(err.message)
 }
 module.exports = { errorResponder };