module.exports = (sequelize, DataTypes) => {

    const Edition = sequelize.define("edition", {
        title: {
            type: DataTypes.TEXT
        },
        description: {
            type: DataTypes.TEXT
        }
    })

    return Edition

}