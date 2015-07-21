var div = null
var prefixes = [ 'Webkit', 'Moz', 'O', 'ms' ]

// In Chrome, some properties exist with and without a
// prefix, but only work when using a prefix.
var preferVendorStyles = [ 'clipPath', 'writingMode', 'filter' ]

module.exports = function prefixStyle (prop) {
  // borderRadius -> BorderRadius
  var titleCase = prop.charAt(0).toUpperCase() + prop.slice(1)
  
  if (!div) { // re-use dummy element
    div = document.createElement('div')
  }
  
  var style = div.style
  var preferVendor = preferVendorStyles.indexOf(prop) >= 0
  var hasUnprefixed = prop in style
  
  // prop exists without prefix
  if (!preferVendor && hasUnprefixed) {
    return prop
  }

  // find the vendor-prefixed prop
  for (var i = prefixes.length; i >= 0; i--) {
    var name = prefixes[i] + titleCase
    // e.g. WebkitBorderRadius or webkitBorderRadius
    if (name in style) {
      return name
    }    
  }
  
  // fall back to native
  if (preferVendor && hasUnprefixed) {
    return prop
  }
  return false
}
