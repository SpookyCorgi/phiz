(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['Stately-stately-isolate-js-ir'] = factory(typeof this['Stately-stately-isolate-js-ir'] === 'undefined' ? {} : this['Stately-stately-isolate-js-ir']);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=Stately-stately-isolate-js-ir.js.map
