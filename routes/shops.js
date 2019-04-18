// router/shops.js
const Joi = require('joi')
const { paginationDefine } = require('../utils/router-helper')
const models = require('../models')
module.exports = [
  {
    method: 'GET',
    path: `/shops`,
    handler: async (request, reply) => {
      // const { rows: results, count: totalCount } = await models.shops.findAndCountAll()
      // reply({ result, totalCont })
      // console.log(models.shops.findAndCountAll())
      const { rows: results, count: totalCount } = await models.shops.findAndCountAll({
        attributes: [ 'id', 'name' ],
        limit: request.query.limit,
        offset: (request.query.page - 1) * request.query.limit
      })
      reply({ results, totalCount })
    },
    config: {
      tags: ['api', 'shop'],
      description: '获取店铺列表',
      validate: {
        query: {
         ...paginationDefine
          // limit: Joi.number().integer().min(3).default(10).description('每页的条目数') .error(new Error('订单号必须大于三位数')),
          // page: Joi.number().integer().min(1).default(1).description('页码数')
        }
      }
    }
  }
  // {
  //   method: 'GET',
  //   path: '/shops',
  //   handler: async (request, reply) => {
  //     const results = await models.shops.findAll();
  //     reply(results)
  //   },
  //   config: {
  //     tags: ['api', 'shop'],
  //     description: '获取店铺列表s',
  //     validate: {
  //       query: {
  //         ...paginationDefine
  //         // limit: Joi.number().integer().min(1).default(10).description('每页的条目数') .error(new Error('订单号必须大于三位数')),
  //         // page: Joi.number().integer().min(1).default(1).description('页码数')
  //       }
  //     }
  //   }
  // }
]