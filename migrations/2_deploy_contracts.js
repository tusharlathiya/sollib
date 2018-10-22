var DateTimeLib = artifacts.require("./DateTime.sol");

module.exports = function(deployer) {
  deployer.deploy(DateTimeLib);
};
