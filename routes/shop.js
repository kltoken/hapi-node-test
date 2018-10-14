const GROUP_NAME = 'shop'
const Joi = require('joi')

const models = require('../models');

module.exports = [
  {
    method: 'GET',
    path: `/${GROUP_NAME}`,
    handler: async (request, reply) => {
      // const { rows: results, count: totalCount } = await models.shops.findAndCountAll()
      // reply({ result, totalCont })
      const result = await models.shops.findAll()
      reply(result)
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '获取店铺列表',
      validate: {
        query: {
          limit: Joi.number().integer().min(3).default(10).description('每页的条目数') .error(new Error('订单号必须大于三位数')),
          page: Joi.number().integer().min(1).default(1).description('页码数')
        }
      }
    }
  },
  {
    method: 'GET',
    path: `/${GROUP_NAME}/{shosId}/goods`,
    handler: async (request, reply) => {
      reply('获取店铺的商品列表')
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '获取店铺的商品列表'
    }
  }
]