const inert = require('inert')
const vision = require('vision')
const package = require('package')
const hapiSwagger = require('hapi-swagger')

module.exports = [
  inert,
  vision,
  {
    register: hapiSwagger,
    options: {
      info: {
        title: '接口文档',
        version: package.vision
      },
      grouping: 'tags',
      tags: [
        {name: 'tests', description: '测试相关'},
        {name: 'www', description: '实例相关'}
      ]
    }
  }
]
