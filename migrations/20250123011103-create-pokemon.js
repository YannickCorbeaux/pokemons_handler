'use strict';
/** @type {import('sequelize-cli').Migration} */
import { Sequelize } from 'sequelize';

export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('Pokemons', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    hp: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    cp: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    picture: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    types: {
      type: Sequelize.ARRAY(Sequelize.STRING),
      allowNull: false,
    },
    created: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
  });
}

export async function down(queryInterface, _Sequelize) {
  await queryInterface.dropTable('Pokemons');
}
