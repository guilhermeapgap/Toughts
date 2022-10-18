const {Sequelize} = require ('sequelize')

const sequelize = new Sequelize('Toughts', 'root', '',{
    host: 'localhost',
    dialect:'mysql',
    port: 3307,

})

try{
    sequelize.authenticate()
    console.log('conectamos com sucesso')
}catch(err){
    console.log(`Não foi possível conectar: ${err}`)
}


module.exports = sequelize