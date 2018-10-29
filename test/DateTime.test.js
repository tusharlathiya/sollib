const assert = require('assert');
const deploy = require('./config/deploy');
let contract;

beforeEach(async function() {
    contract = await deploy.DateTimeContract;
});

describe('DateTime',function(){
    it('return convertDateToEpoch from Date', async function() {
        const epochTime = await contract.methods.convertDateToEpoch(2011,11,21).call();
        assert.equal(1321833600, epochTime, 'should return correct epoch time.');
    });

    it('return convertDateToEpoch from Date and time', async function() {
        const epochTime = await contract.methods.convertDateTimeToEpoch(2011,11,21,14,23,33).call();
        assert.equal(1321885413, epochTime, 'should return correct epoch time.');
    });

    it('return true if epochTime between from epoch and end epoch', async function() {
        assert.equal(await contract.methods.isEpochTimeBetween(1321885413,1290349413,1385043813).call(), true, 'should return true.');
    });

    it('return false if epochTime is not between from epoch and end epoch', async function() {
        assert.equal(await contract.methods.isEpochTimeBetween(1321885413,1385043813,1290349413).call(), false, 'should return true.');
    });
});
