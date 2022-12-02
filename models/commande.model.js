module.exports = (sequelize, DataTypes) => {

    const Livre = sequelize.define("livre", {
        quantite: {
            type: DataTypes.INTEGER,
        },
        livre_id: {
            type: DataTypes.INTEGER
        },
    })

    return Livre

}