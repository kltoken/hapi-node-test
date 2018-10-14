module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
      reply('hapi hello is Ok')
    },
    config: { 
      /* 新增字段 tags: ['api']，用来暴露为Swagger文档
         第二个参数用来分组（选填）
      */
      tags: ['api', 'test'],
      description: '测试hello-hapi'
    }
  },
]