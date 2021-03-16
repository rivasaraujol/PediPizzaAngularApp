const Mustache = require('mustache')

module.exports = {
  compile: function (template) {
    return function (context) {
      return Mustache.render(template, context)
    }
  }
}
