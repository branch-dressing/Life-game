const test = QUnit.test;

test('Should create ', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    let results = new Date().getTime();
    let expected;
    //Act 
    // Call the function you're testing and set the result to a const

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(results, expected);
});
