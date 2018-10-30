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

    describe('FloorSqrt', function() {
       it('should return floor of sqrt : positive', async function(){
           const floorSqrt = await contract.methods.floorSqrt(10).call();
           assert.equal(3, floorSqrt, 'should return floor number of sqrt.');
       });

        it('should return floor of sqrt : zero', async function(){
            const floorSqrt = await contract.methods.floorSqrt(0).call();
            assert.equal(0, floorSqrt, 'should return floor number of sqrt.');
        });

        it('should return floor of sqrt : negative', async function(){
            try {
                await contract.methods.floorSqrt(-10).call();
            }
            catch(error){
                assert.equal(error.results[error.hashes[0]].reason,'Number must be zero or positive.', 'test validation');
            }
        });
    });

    describe('Min', function(){
        it('should return min number: positives', async function(){
            const min = await contract.methods.min(5,3).call();
            assert.equal(3, min, 'return min number');
        });

        it('should return min number: negatives', async function(){
            const min = await contract.methods.min(-5,-3).call();
            assert.equal(-5, min, 'return min number');
        });

        it('should return min number: positives & negative', async function(){
            const min = await contract.methods.min(5,-3).call();
            assert.equal(-3, min, 'return min number');
        });

        it('should return min number: equal', async function(){
            try {
                await contract.methods.min(5, 5).call();
            } catch(error) {
                assert.equal(error.results[error.hashes[0]].reason,'Both number must not be equal.', 'test validation');
            }
        });
    });

    describe('Max', function(){
        it('should return max number: positives', async function(){
            const max = await contract.methods.max(5,3).call();
            assert.equal(5, max, 'return max number');
        });

        it('should return max number: negatives', async function(){
            const max = await contract.methods.max(-5,-3).call();
            assert.equal(-3, max, 'return max number');
        });

        it('should return max number: positives & negative', async function(){
            const max = await contract.methods.max(5,-3).call();
            assert.equal(5, max, 'return max number');
        });

        it('should return max number: equal', async function(){
            try {
                await contract.methods.max(5, 5).call();
            } catch(error) {
                assert.equal(error.results[error.hashes[0]].reason,'Both number must not be equal.', 'test validation');
            }
        });
    });

    describe('FloorCbrt', function() {
        it('should return floor of cbrt : positive', async function(){
            const floorCbrt = await contract.methods.floorCbrt(27).call();
            assert.equal(3, floorCbrt, 'should return floor number of cbrt.');
        });

        it('should return floor of cbrt : zero', async function(){
            const floorCbrt = await contract.methods.floorCbrt(0).call();
            assert.equal(0, floorCbrt, 'should return floor number of cbrt.');
        });

        it('should return floor of cbrt : negative', async function(){
            try {
                await contract.methods.floorCbrt(-10).call();
            }
            catch(error){
                assert.equal(error.results[error.hashes[0]].reason,'Number must be zero or positive.', 'test validation');
            }
        });
    });

    describe('Scalb', function(){
        it('return scalb number : positive, scalefactor : positive', async function(){
            const scalb = await contract.methods.scalb(2,5).call();
            assert.equal(64, scalb, 'should return scalb.');
        });

        it('return scalb number : zero, scalefactor : positive', async function(){
            const scalb = await contract.methods.scalb(0,5).call();
            assert.equal(0, scalb, 'should return scalb.');
        });

        it('return scalb number : negative, scalefactor : positive', async function(){
            const scalb = await contract.methods.scalb(-3,5).call();
            assert.equal(-96, scalb, 'should return scalb.');
        });

        it('return scalb number : positive, scalefactor : zero', async function(){
            const scalb = await contract.methods.scalb(3,0).call();
            assert.equal(3, scalb, 'should return scalb.');
        });

        it('return scalb number : positive, scalefactor : negative', async function(){
            try {
                await contract.methods.scalb(3, -5).call();
            }catch(error){
                assert.equal(error.results[error.hashes[0]].reason,'Power must be positive.', 'test validation');
            }
        });
    });
});
