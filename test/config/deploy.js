const linker = require('solc/linker');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
const DateTime = require('../../build/contracts/DateTime.json');
const Math = require('../../build/contracts/Math.json');
let account;

async function dateTimeDeploy() {
    account = (await web3.eth.getAccounts())[0];
    return await new web3.eth.Contract(DateTime['abi'])
        .deploy({data: DateTime['bytecode']})
        .send({from: account, gas: '1000000'});
}

async function mathDeploy() {
    account = (await web3.eth.getAccounts())[0];
    return await new web3.eth.Contract(Math['abi'])
        .deploy({data: Math['bytecode']})
        .send({from: account, gas: '1000000'});
}

module.exports = {
    DateTimeContract : dateTimeDeploy(),
    MathContract : mathDeploy()
};
