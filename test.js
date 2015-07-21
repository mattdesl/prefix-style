var prefix = require('./')
var test = require('tape').test

test('prefixes', function(t) {
    var valid = [false,  //if browser doesn't support it
        'transformStyle', 
        'MozTransformStyle', 
        'KhtmlTransformStyle', 
        'WebkitTransformStyle', 
        'OTransformStyle',
        'msTransformStyle']

    // var result = prefix('transformStyle')
    // t.ok(valid.indexOf(result) !== -1, 'valid: returns '+result)

    // t.equal(prefix('width'), 'width', 'does not prefix unless necessary')
    t.equal(prefix('clipPath'), 'clipPath', 'handles clip path')
    // t.equal(prefix('foobarkashadasha'), false, 'returns false if prop is not supported')
    t.end()
})