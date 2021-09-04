const Migrations = artifacts.require("Migrations");
const UniswapV3Factory = artifacts.require("UniswapV3Factory");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(UniswapV3Factory);
};
