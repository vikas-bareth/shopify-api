const { DataTypes } = require('sequelize');
const sequelize = require('../sequelizeConfig');

const ProductMaster = sequelize.define('ProductMaster', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    sku: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    mpid: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    regionid: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    clientid: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    productid: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    vendor: DataTypes.STRING,
    producttype: DataTypes.STRING,
    createdat: DataTypes.DATE,
    updatedat: DataTypes.DATE,
    publishedat: DataTypes.DATE,
    publishedscope: DataTypes.STRING,
    tags: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    admingraphqlapiid: DataTypes.STRING,
    variantid: DataTypes.INTEGER,
    varianttitle: DataTypes.STRING,
    variantprice: DataTypes.FLOAT,
    variantcompareatprice: DataTypes.FLOAT,
    variantproductid: DataTypes.INTEGER,
    variantfulfillmentservice: DataTypes.STRING,
    variantinventorymanagement: DataTypes.STRING,
    variantoption1: DataTypes.STRING,
    variantoption2: DataTypes.STRING,
    variantoption3: DataTypes.STRING,
    varianttaxable: DataTypes.BOOLEAN,
    variantbarcode: DataTypes.STRING,
    variantweight: DataTypes.FLOAT,
    variantweightunit: DataTypes.STRING,
    variantinvnentoryitemid: DataTypes.INTEGER,
    variantinventoryquantity: DataTypes.INTEGER,
    variantrequiresshiping: DataTypes.BOOLEAN,
    imageid1: DataTypes.INTEGER,
    imagealt1: DataTypes.STRING,
    imagewidth1: DataTypes.INTEGER,
    imageheight1: DataTypes.INTEGER,
    imageurl1: DataTypes.STRING,
    imageid2: DataTypes.INTEGER,
    imagealt2: DataTypes.STRING,
    imagewidth2: DataTypes.INTEGER,
    imageheight2: DataTypes.INTEGER,
    imageurl2: DataTypes.STRING,
    imageid3: DataTypes.INTEGER,
    imagealt3: DataTypes.STRING,
    imagewidth3: DataTypes.INTEGER,
    imageheight3: DataTypes.INTEGER,
    imageurl3: DataTypes.STRING,
    imageid4: DataTypes.INTEGER,
    imagealt4: DataTypes.STRING,
    imagewidth4: DataTypes.INTEGER,
    imageheight4: DataTypes.INTEGER,
    imageurl4: DataTypes.STRING,
    itemismarketplace: DataTypes.CHAR,
    fulfillmentchennal: DataTypes.STRING,
    userid: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'ProductMaster', // specifies the table name explicitly
    timestamps: false // tells Sequelize not to include these fields in the model and not to automatically update them when records are created or updated.
});

module.exports = ProductMaster;
