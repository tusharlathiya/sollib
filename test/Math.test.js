const assert = require('assert');
const deploy = require('./config/deploy');
let contract;

beforeEach(async function() {
    contract = await deploy.MathContract;
});

describe('Math',function(){
    describe('abs number', function(){
        it('return absolute value : positive', async function() {
            const abs = await contract.methods.abs(21).call();
            assert.equal(21, abs, 'should return correct absolute number.');
        });

        it('return absolute value : zero', async function() {
            const abs = await contract.methods.abs(0).call();
            assert.equal(0, abs, 'should return correct absolute number.');
        });

        it('return absolute value : negetive', async function() {
            const abs = await contract.methods.abs(-3).call();
            assert.equal(3, abs, 'should return correct absolute number.');
        });
    });

    describe('mutliply', function() {
        it('return multiply value : positive and positive', async function () {
            const multiply = await contract.methods.multiply(3, 2).call();
            assert.equal(6, multiply, 'should return correct multiply.');
        });

        it('return absolute value : positive and zero', async function () {
            const multiply = await contract.methods.multiply(3, 0).call();
            assert.equal(0, multiply, 'should return correct multiply.');
        });

        it('return absolute value : positive and negative', async function () {
            const multiply = await contract.methods.multiply(3,-3).call();
            assert.equal(-9, multiply, 'should return correct multiply.');
        });

        it('return absolute value : negative and negative', async function () {
            const multiply = await contract.methods.multiply(-3,-3).call();
            assert.equal(9, multiply, 'should return correct multiply.');
        });
    });

    describe('Power', function() {
        it('return correct value in case of power : positive & value : positive',async function() {
            const power = await contract.methods.pow(3,3).call();
            assert.equal(27, power, 'should return correct power.');
        });

        it('return correct value in case of power : positive & value : zero',async function() {
            const power = await contract.methods.pow(0,3).call();
            assert.equal(0, power, 'should return correct power.');
        });

        it('return correct value in case of power : positive & value : negative',async function() {
            const power = await contract.methods.pow(-3,0).call();
            assert.equal(-1, power, 'should return correct power.');
        });

        it('return correct value in case of power : zero & value : positive',async function() {
            const power = await contract.methods.pow(3,0).call();
            assert.equal(1, power, 'should return correct power.');
        });

        it('return correct value in case of power : negative & value : positive',async function() {
            try {
                const power = await contract.methods.pow(3, -2).call();
                assert.equal(-1, power, 'should return correct power.');
            } catch(error){
                assert.equal(error.results[error.hashes[0]].reason,'Power must be positive.', 'test validation');
            }
        });

        it('return correct value in case of power : zero & value : zero',async function() {
            const power = await contract.methods.pow(0,0).call();
            assert.equal(1, power, 'should return correct power.');
        });
    });

    describe('Factorial', function() {
        it('factorial : positive',async function(){
            const factorial = await contract.methods.factorial(3).call();
            assert.equal(6, factorial, 'should return factorial number.');
        });

        it('factorial : zero',async function(){
            const factorial = await contract.methods.factorial(0).call();
            assert.equal(1, factorial, 'should return factorial number.');
        });

        it('factorial : negative',async function(){
            const factorial = await contract.methods.factorial(-4).call();
            assert.equal(-24, factorial, 'should return factorial number.');
        });
    });
});
