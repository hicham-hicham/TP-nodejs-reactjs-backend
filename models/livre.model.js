module.exports = (sequelize, DataTypes) => {

    const Livre = sequelize.define("livre", {
        image: {
            type: DataTypes.STRING
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER
        },
        description: {
            type: DataTypes.TEXT
        },
        genre: {
            type: DataTypes.TEXT
        },
        quantite: {
            type: DataTypes.INTEGER
        },
    })

    return Livre

}