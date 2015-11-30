var prefix = require('./')
var test = require('tape').test

test('prefixes', function (t) {
  var valid = [
    false, // if browser doesn't support it
    'fontSmoothing',
    'MozFontSmoothing',
    'WebkitFontSmoothing',
    'OFontSmoothing',
    'msFontSmoothing'
  ]

  var result = prefix('fontSmoothing')
  t.ok(valid.indexOf(result) !== -1, 'valid: returns ' + result)

  valid = [
    false, // if browser doesn't support it
    'transform',
    'MozTransform',
    'WebkitTransform',
    'OTransform',
    'msTransform'
  ]
  result = prefix('transform')
  t.ok(valid.indexOf(result) !== -1, 'valid: returns ' + result)

  t.equal(prefix('width'), 'width', 'does not prefix unless necessary')
  t.equal(prefix('foobarkashadasha'), false, 'returns false if prop is not supported')
  t.end()
})
