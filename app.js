// app.js

const Hapi = require('hapi');
const Env2 = require('env2')
Env2('./.env')
const config = require('./config')

const routesHelloHapi = require('./routes/hello-world.js')
const routesShop = require('./routes/shop.js')
const routesShops = require('./routes/shops.js')
const routesOrders = require('./routes/order.js')

// 引入自定义的 hapi-swagger 插件配置
const pluginHapiSwagger = require('./plugins/hapi-swagger')
const pluginHapiPagination = require('./plugins/hapi-pagination')

const server = new Hapi.Server();

server.connection({
  port: config.port,
  host: config.host
});

const init = async () => {
  await server.register([
    // 为系统使用 hapi-swagger
    ...pluginHapiSwagger,
    pluginHapiPagination
  ])
  server.route([
    ...routesHelloHapi,
    ...routesShop,
    ...routesShops,
    ...routesOrders
  ]);
  await server.start()
  console.log(`Server running at: ${server.info.uri}`)
}

init()
