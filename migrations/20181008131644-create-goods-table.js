'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(
    'goods',
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      shhopid:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      thumb_url: Sequelize.STRING,
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE
    }
  ),

  down: queryInterface => queryInterface.dropTable('goods')
};
