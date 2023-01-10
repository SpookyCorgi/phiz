(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'uuid-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'uuid-js-ir'.");
    }
    root['uuid-js-ir'] = factory(typeof this['uuid-js-ir'] === 'undefined' ? {} : this['uuid-js-ir'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var until = kotlin_kotlin.$_$.h9;
  var listOf = kotlin_kotlin.$_$.b6;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.c2;
  var Char__rangeTo_impl_tkncvp = kotlin_kotlin.$_$.f2;
  var plus = kotlin_kotlin.$_$.i6;
  var Default_getInstance = kotlin_kotlin.$_$.f3;
  var objectMeta = kotlin_kotlin.$_$.x8;
  var Unit_getInstance = kotlin_kotlin.$_$.n3;
  var toString = kotlin_kotlin.$_$.b9;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.t1;
  var charArray = kotlin_kotlin.$_$.p7;
  var concatToString = kotlin_kotlin.$_$.k9;
  var contentEquals = kotlin_kotlin.$_$.x4;
  var contentHashCode = kotlin_kotlin.$_$.y4;
  var compareTo = kotlin_kotlin.$_$.u7;
  var THROW_CCE = kotlin_kotlin.$_$.cb;
  var Comparable = kotlin_kotlin.$_$.ra;
  var classMeta = kotlin_kotlin.$_$.t7;
  var toByte = kotlin_kotlin.$_$.y8;
  //endregion
  //region block: pre-declaration
  //endregion
  var UUID_CHAR_RANGES;
  var UUID_HYPHEN_INDICES;
  function get_UUID_CHARS() {
    init_properties_uuid_kt_4sj141();
    return UUID_CHARS;
  }
  var UUID_CHARS;
  function get_UUID_BYTES() {
    return UUID_BYTES;
  }
  var UUID_BYTES;
  function get_UUID_STRING_LENGTH() {
    return UUID_STRING_LENGTH;
  }
  var UUID_STRING_LENGTH;
  var properties_initialized_uuid_kt_pyvynx;
  function init_properties_uuid_kt_4sj141() {
    if (properties_initialized_uuid_kt_pyvynx) {
    } else {
      properties_initialized_uuid_kt_pyvynx = true;
      UUID_CHAR_RANGES = listOf([until(0, 8), until(9, 13), until(14, 18), until(19, 23), until(24, 36)]);
      UUID_HYPHEN_INDICES = listOf([8, 13, 18, 23]);
      UUID_CHARS = plus(Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(48), _Char___init__impl__6a9atx(57)), Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(97), _Char___init__impl__6a9atx(102)));
    }
  }
  function freeze(_this__u8e3s4) {
    return _this__u8e3s4;
  }
  function getRandomUuidBytes() {
    return Default_getInstance().k7(get_UUID_BYTES());
  }
  function get_bytes(_this__u8e3s4) {
    return _this__u8e3s4.w1m_1;
  }
  function Companion() {
    Companion_instance = this;
    this.x1m_1 = listOf([until(0, 4), until(4, 6), until(6, 8), until(8, 10), until(10, 16)]);
  }
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function Uuid(uuidBytes) {
    Companion_getInstance();
    this.w1m_1 = uuidBytes;
    // Inline function 'kotlin.require' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.count' call
    var tmp0_count = this.w1m_1;
    tmp$ret$0 = tmp0_count.length;
    var tmp1_require = tmp$ret$0 === get_UUID_BYTES();
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$2;
      // Inline function 'com.benasher44.uuid.Uuid.<anonymous>' call
      var tmp = get_UUID_BYTES();
      var tmp$ret$1;
      // Inline function 'kotlin.collections.count' call
      var tmp0_count_0 = this.w1m_1;
      tmp$ret$1 = tmp0_count_0.length;
      tmp$ret$2 = 'Invalid UUID bytes. Expected ' + tmp + ' bytes; found ' + tmp$ret$1;
      var message = tmp$ret$2;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    freeze(this);
  }
  Uuid.prototype.y1m = function () {
    return this.w1m_1;
  };
  Uuid.prototype.toString = function () {
    var characters = charArray(get_UUID_STRING_LENGTH());
    var charIndex = 0;
    var tmp0_iterator = Companion_getInstance().x1m_1.l();
    while (tmp0_iterator.m()) {
      var range = tmp0_iterator.n();
      var inductionVariable = range.c1_1;
      var last = range.d1_1;
      if (inductionVariable <= last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var octetPair = this.w1m_1[i];
          var left = octetPair >> 4 & 15;
          var right = octetPair & 15;
          var tmp2 = charIndex;
          charIndex = tmp2 + 1 | 0;
          characters[tmp2] = get_UUID_CHARS().p(left).g1_1;
          var tmp3 = charIndex;
          charIndex = tmp3 + 1 | 0;
          characters[tmp3] = get_UUID_CHARS().p(right).g1_1;
        }
         while (!(i === last));
      if (charIndex < get_UUID_STRING_LENGTH()) {
        var tmp4 = charIndex;
        charIndex = tmp4 + 1 | 0;
        characters[tmp4] = _Char___init__impl__6a9atx(45);
      }
    }
    return concatToString(characters);
  };
  Uuid.prototype.equals = function (other) {
    var tmp;
    if (other instanceof Uuid) {
      tmp = contentEquals(this.w1m_1, other.w1m_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  Uuid.prototype.hashCode = function () {
    return contentHashCode(this.w1m_1);
  };
  Uuid.prototype.z1m = function (other) {
    var inductionVariable = 0;
    var last = get_UUID_BYTES();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var compareResult = compareTo(this.w1m_1[i], other.w1m_1[i]);
        if (!(compareResult === 0))
          return compareResult;
      }
       while (inductionVariable < last);
    return 0;
  };
  Uuid.prototype.ma = function (other) {
    return this.z1m(other instanceof Uuid ? other : THROW_CCE());
  };
  Uuid.$metadata$ = classMeta('Uuid', [Comparable]);
  function uuid4() {
    var tmp$ret$1;
    // Inline function 'com.benasher44.uuid.setVersion' call
    var tmp0_setVersion = getRandomUuidBytes();
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.benasher44.uuid.setVersion.<anonymous>' call
    tmp0_setVersion[6] = toByte(tmp0_setVersion[6] & 15 | 64);
    tmp0_setVersion[8] = toByte(tmp0_setVersion[8] & 63 | 128);
    tmp$ret$0 = tmp0_setVersion;
    tmp$ret$1 = tmp$ret$0;
    return new Uuid(tmp$ret$1);
  }
  function setVersion(_this__u8e3s4, version) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.benasher44.uuid.setVersion.<anonymous>' call
    _this__u8e3s4[6] = toByte(_this__u8e3s4[6] & 15 | version << 4);
    _this__u8e3s4[8] = toByte(_this__u8e3s4[8] & 63 | 128);
    tmp$ret$0 = _this__u8e3s4;
    return tmp$ret$0;
  }
  //region block: init
  UUID_BYTES = 16;
  UUID_STRING_LENGTH = 36;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = get_bytes;
  _.$_$.b = uuid4;
  //endregion
  return _;
}));

//# sourceMappingURL=uuid-js-ir.js.map
