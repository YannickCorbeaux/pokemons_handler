// middlewares/errorHandler.js
export function errorHandler(err, req, res, _next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
}
