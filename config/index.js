const { env } = process
const config = {
  // host: '127.0.0.1',
  // port: 3000
  host: env.HOST,
  port: env.PORT
}
module.exports = config