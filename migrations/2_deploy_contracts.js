var DateTimeLib = artifacts.require("./DateTime.sol");
var MathLib = artifacts.require("./Math.sol");

module.exports = function(deployer) {
    deployer.deploy(DateTimeLib);
    deployer.deploy(MathLib);
};
