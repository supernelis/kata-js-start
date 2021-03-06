const assert = require("chai").assert;
let ExampleCode = require('../src/ExampleCode');


describe('Example', function () {
    it('should fail', function () {
        assert.isTrue(false);
    });
    it('should pass', function () {
        assert.isTrue(true);
    });

    var testValues = [
        {input: 1, expected: "1"},
        {input: 2, expected: "2"},
    ];

    testValues.forEach(function (test) {
            it(`gives ${test.expected} for ${test.input}`, function () {
                assert.equal(test.expected, `${test.input}`);
            });
        }
    );

    it('should return correct text', function () {
        let exampleCode = new ExampleCode();
        assert.equal(exampleCode.coveredFunction(), "covered text")
    });
});