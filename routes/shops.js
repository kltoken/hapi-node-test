// router/shops.js
const Joi = require('joi')

const models = require('../models')
module.exports = [
  {
    method: 'GET',
    path: '/shops',
    handler: async (request, reply) => {
      const result = await models.shops.findAll({
        attributes: ['id', 'name'],
        limit: request.query.limit
      });
      reply(result)
    },
    config: {
      tags: ['api', 'shop'],
      description: '查询数据库展示列表',
      validate: {
        query: {
          limit: Joi.number().integer().min(1).default(10).description('每页的条目数') .error(new Error('订单号必须大于三位数')),
          page: Joi.number().integer().min(1).default(1).description('页码数')
        }
      }
    }
  }
]