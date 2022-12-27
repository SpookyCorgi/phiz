(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['Stately-stately-concurrency-js-ir'] = factory(typeof this['Stately-stately-concurrency-js-ir'] === 'undefined' ? {} : this['Stately-stately-concurrency-js-ir']);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=Stately-stately-concurrency-js-ir.js.map
