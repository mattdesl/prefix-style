var div = null
var prefixes = [ 'Webkit', 'Moz', 'O', 'ms' ]

module.exports = function prefixStyle (prop) {
  // borderRadius -> BorderRadius
  var titleCase = prop.charAt(0).toUpperCase() + prop.slice(1)
  
  if (!div) { // re-use dummy element
    div = document.createElement('div')
  }
  
  var style = div.style
  
  // prop exists without prefix
  if (prop in style)
    return prop

  for (var i = prefixes.length; i >= 0; i--) {
    var name = prefixes[i] + titleCase
    // e.g. WebkitBorderRadius or webkitBorderRadius
    if (name in style) {
      return name
    }    
  }
  return false
}
