import pkg from 'sequelize'
const { Sequelize, DataTypes } = pkg;

const username = "postgres"
const password = "password"
const route = "localhost:5432"
const database = "dan_buscem_ratings"

const sequelize = new Sequelize(`postgres://${username}:${password}@${route}/${database}`, {
    logging: false
}) 

const Review = sequelize.define("review", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rating: {
        type: DataTypes.DECIMAL,
        defaultValue: 0
    }, 
    message: {
        type: DataTypes.STRING,
        allowNull: true
    },
    date : {
        type: DataTypes.DATEONLY
    }
})

await Review.sync({force: true});

export { Review }   