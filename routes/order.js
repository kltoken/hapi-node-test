const GROUP_NAME = 'orders'
const Joi = require('joi')

module.exports = [
  {
    method: 'POST',
    path: `/${GROUP_NAME}`,
    handler: async (request, reply) => {
      reply('创建订单')
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '创建订单',
      validate: {
        payload: {
          goodsList: Joi.array().items(
            Joi.object().keys({
              good_id: Joi.number().integer(),
              count: Joi.number().integer()
            })
          )
        },
        headers: Joi.object({
          authorization: Joi.string().required()
        }).unknown()
      }
    }
  },
  {
    method: 'POST',
    path: `/${GROUP_NAME}/{orderId}/goods`,
    handler: async (request, reply) => {
      reply('选择某条订单')
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '选择某条订单'
    }
  },
  {
    method: 'POST',
    path: `/${GROUP_NAME}/{orderId}/pay`,
    handler: async (request, reply) => {
      reply('支付某条订单')
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '支付某条订单',
      validate: {
        params: {
          orderId: Joi.string().required()
        }
      }
    }
  }
]