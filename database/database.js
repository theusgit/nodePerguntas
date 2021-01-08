const Sequelize = require('sequelize');

const connection = new Sequelize('nodePerguntas','root','M4theus$$',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports=connection;