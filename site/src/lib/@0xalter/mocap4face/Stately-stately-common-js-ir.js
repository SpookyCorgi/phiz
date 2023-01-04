(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['Stately-stately-common-js-ir'] = factory(typeof this['Stately-stately-common-js-ir'] === 'undefined' ? {} : this['Stately-stately-common-js-ir']);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=Stately-stately-common-js-ir.js.map
