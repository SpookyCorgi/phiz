(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlinx-serialization-kotlinx-serialization-core-js-ir.js', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlinx-serialization-kotlinx-serialization-core-js-ir.js'), require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-protobuf-js-ir'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core-js-ir' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core-js-ir' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-protobuf-js-ir'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-protobuf-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-protobuf-js-ir'.");
    }
    root['kotlinx-serialization-kotlinx-serialization-protobuf-js-ir'] = factory(typeof this['kotlinx-serialization-kotlinx-serialization-protobuf-js-ir'] === 'undefined' ? {} : this['kotlinx-serialization-kotlinx-serialization-protobuf-js-ir'], this['kotlinx-serialization-kotlinx-serialization-core-js-ir'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var get_EmptySerializersModule = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p2;
  var objectMeta = kotlin_kotlin.$_$.x8;
  var BinaryFormat = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s2;
  var classMeta = kotlin_kotlin.$_$.t7;
  var THROW_CCE = kotlin_kotlin.$_$.cb;
  var getStringHashCode = kotlin_kotlin.$_$.b8;
  var Annotation = kotlin_kotlin.$_$.pa;
  var Unit_getInstance = kotlin_kotlin.$_$.n3;
  var Long = kotlin_kotlin.$_$.za;
  var Enum = kotlin_kotlin.$_$.va;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.c3;
  var toLong = kotlin_kotlin.$_$.z8;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w2;
  var SerializationException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var captureStack = kotlin_kotlin.$_$.n7;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.w;
  var get_lastIndex = kotlin_kotlin.$_$.v5;
  var ensureNotNull = kotlin_kotlin.$_$.ob;
  var primitiveArrayConcat = kotlin_kotlin.$_$.e;
  var MapLikeSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j2;
  var MapEntrySerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w;
  var Map = kotlin_kotlin.$_$.h4;
  var isInterface = kotlin_kotlin.$_$.m8;
  var LinkedHashSetSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i2;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.v4;
  var mapCapacity = kotlin_kotlin.$_$.c6;
  var coerceAtLeast = kotlin_kotlin.$_$.e9;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.c1;
  var isObject = kotlin_kotlin.$_$.p8;
  var LIST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k;
  var equals = kotlin_kotlin.$_$.w7;
  var MAP_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
  var ElementMarker = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f2;
  var PolymorphicKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f1;
  var OBJECT_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m;
  var CLASS_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j;
  var SerializationException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var toByte = kotlin_kotlin.$_$.y8;
  var toShort = kotlin_kotlin.$_$.a9;
  var numberToChar = kotlin_kotlin.$_$.u8;
  var AbstractCollectionSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c2;
  var isByteArray = kotlin_kotlin.$_$.g8;
  var ByteArraySerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u;
  var DeserializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t2;
  var decodeSerializableElement$default = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var decodeSequentially = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r1;
  var decodeCollectionSize = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q1;
  var Companion_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var toString = kotlin_kotlin.$_$.b9;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.t1;
  var SetSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.g2;
  var SerializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x2;
  var encodeNotNullMark = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y1;
  var encodeNullableSerializableValue = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z1;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.ub;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.b3;
  var floatFromBits = kotlin_kotlin.$_$.y7;
  var DoubleCompanionObject_getInstance = kotlin_kotlin.$_$.a3;
  var doubleFromBits = kotlin_kotlin.$_$.v7;
  var copyOf = kotlin_kotlin.$_$.b5;
  var longArray = kotlin_kotlin.$_$.s8;
  var decodeSerializableValue = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v1;
  var Decoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w1;
  var CompositeDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s1;
  var beginCollection = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x1;
  var encodeSerializableValue = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a2;
  var shouldEncodeElementDefault = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t1;
  var Encoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b2;
  var CompositeEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u1;
  var toRawBits = kotlin_kotlin.$_$.xb;
  var toRawBits_0 = kotlin_kotlin.$_$.yb;
  var encodeToByteArray = kotlin_kotlin.$_$.l9;
  var takeHighestOneBit = kotlin_kotlin.$_$.wb;
  var arrayCopy = kotlin_kotlin.$_$.r4;
  var countLeadingZeroBits = kotlin_kotlin.$_$.lb;
  var decodeToString$default = kotlin_kotlin.$_$.i;
  //endregion
  //region block: pre-declaration
  Default.prototype = Object.create(ProtoBuf.prototype);
  Default.prototype.constructor = Default;
  ProtoIntegerType.prototype = Object.create(Enum.prototype);
  ProtoIntegerType.prototype.constructor = ProtoIntegerType;
  ProtobufDecodingException.prototype = Object.create(SerializationException.prototype);
  ProtobufDecodingException.prototype.constructor = ProtobufDecodingException;
  ProtobufTaggedDecoder.prototype = Object.create(ProtobufTaggedBase.prototype);
  ProtobufTaggedDecoder.prototype.constructor = ProtobufTaggedDecoder;
  ProtobufDecoder.prototype = Object.create(ProtobufTaggedDecoder.prototype);
  ProtobufDecoder.prototype.constructor = ProtobufDecoder;
  RepeatedDecoder.prototype = Object.create(ProtobufDecoder.prototype);
  RepeatedDecoder.prototype.constructor = RepeatedDecoder;
  MapEntryReader.prototype = Object.create(ProtobufDecoder.prototype);
  MapEntryReader.prototype.constructor = MapEntryReader;
  ProtobufTaggedEncoder.prototype = Object.create(ProtobufTaggedBase.prototype);
  ProtobufTaggedEncoder.prototype.constructor = ProtobufTaggedEncoder;
  ProtobufEncoder.prototype = Object.create(ProtobufTaggedEncoder.prototype);
  ProtobufEncoder.prototype.constructor = ProtobufEncoder;
  NestedRepeatedEncoder.prototype = Object.create(ProtobufEncoder.prototype);
  NestedRepeatedEncoder.prototype.constructor = NestedRepeatedEncoder;
  RepeatedEncoder.prototype = Object.create(ProtobufEncoder.prototype);
  RepeatedEncoder.prototype.constructor = RepeatedEncoder;
  ObjectEncoder.prototype = Object.create(ProtobufEncoder.prototype);
  ObjectEncoder.prototype.constructor = ObjectEncoder;
  MapRepeatedEncoder.prototype = Object.create(ObjectEncoder.prototype);
  MapRepeatedEncoder.prototype.constructor = MapRepeatedEncoder;
  NullableMode.prototype = Object.create(Enum.prototype);
  NullableMode.prototype.constructor = NullableMode;
  //endregion
  function Default() {
    Default_instance = this;
    ProtoBuf.call(this, false, get_EmptySerializersModule());
  }
  Default.$metadata$ = objectMeta('Default', undefined, undefined, undefined, undefined, ProtoBuf.prototype);
  var Default_instance;
  function Default_getInstance() {
    if (Default_instance == null)
      new Default();
    return Default_instance;
  }
  function ProtoBuf(encodeDefaults, serializersModule) {
    Default_getInstance();
    this.n1g_1 = encodeDefaults;
    this.o1g_1 = serializersModule;
  }
  ProtoBuf.prototype.tp = function () {
    return this.o1g_1;
  };
  ProtoBuf.prototype.rp = function (serializer, value) {
    var output = new ByteArrayOutput();
    var encoder = new ProtobufEncoder(this, new ProtobufWriter(output), serializer.zo());
    encoder.jt(serializer, value);
    return output.x1g();
  };
  ProtoBuf.prototype.sp = function (deserializer, bytes) {
    var input = ByteArrayInput_init_$Create$(bytes, 0, 2, null);
    var decoder = new ProtobufDecoder(this, new ProtobufReader(input), deserializer.zo());
    return decoder.ur(deserializer);
  };
  ProtoBuf.$metadata$ = classMeta('ProtoBuf', [BinaryFormat]);
  function ProtoNumber(number) {
    this.h1h_1 = number;
  }
  ProtoNumber.prototype.equals = function (other) {
    if (!(other instanceof ProtoNumber))
      return false;
    var tmp0_other_with_cast = other instanceof ProtoNumber ? other : THROW_CCE();
    if (!(this.h1h_1 === tmp0_other_with_cast.h1h_1))
      return false;
    return true;
  };
  ProtoNumber.prototype.hashCode = function () {
    return imul(getStringHashCode('number'), 127) ^ this.h1h_1;
  };
  ProtoNumber.prototype.toString = function () {
    return '@kotlinx.serialization.protobuf.ProtoNumber(number=' + this.h1h_1 + ')';
  };
  ProtoNumber.$metadata$ = classMeta('ProtoNumber', [Annotation]);
  var ProtoIntegerType_DEFAULT_instance;
  var ProtoIntegerType_SIGNED_instance;
  var ProtoIntegerType_FIXED_instance;
  var ProtoIntegerType_entriesInitialized;
  function ProtoIntegerType_initEntries() {
    if (ProtoIntegerType_entriesInitialized)
      return Unit_getInstance();
    ProtoIntegerType_entriesInitialized = true;
    ProtoIntegerType_DEFAULT_instance = new ProtoIntegerType('DEFAULT', 0, new Long(0, 0));
    ProtoIntegerType_SIGNED_instance = new ProtoIntegerType('SIGNED', 1, new Long(0, 1));
    ProtoIntegerType_FIXED_instance = new ProtoIntegerType('FIXED', 2, new Long(0, 2));
  }
  function ProtoIntegerType(name, ordinal, signature) {
    Enum.call(this, name, ordinal);
    this.k1h_1 = signature;
  }
  ProtoIntegerType.$metadata$ = classMeta('ProtoIntegerType', undefined, undefined, undefined, undefined, Enum.prototype);
  function ProtoType() {
  }
  ProtoType.$metadata$ = classMeta('ProtoType', [Annotation]);
  function ProtoIntegerType_DEFAULT_getInstance() {
    ProtoIntegerType_initEntries();
    return ProtoIntegerType_DEFAULT_instance;
  }
  function ProtoIntegerType_SIGNED_getInstance() {
    ProtoIntegerType_initEntries();
    return ProtoIntegerType_SIGNED_instance;
  }
  function ProtoIntegerType_FIXED_getInstance() {
    ProtoIntegerType_initEntries();
    return ProtoIntegerType_FIXED_instance;
  }
  function get_protoId(_this__u8e3s4) {
    return _this__u8e3s4.ya(toLong(IntCompanionObject_getInstance().y_1)).ab();
  }
  function get_integerType(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4.ya(new Long(0, 2147483647));
    return tmp0_subject.equals(ProtoIntegerType_DEFAULT_getInstance().k1h_1) ? ProtoIntegerType_DEFAULT_getInstance() : tmp0_subject.equals(ProtoIntegerType_SIGNED_getInstance().k1h_1) ? ProtoIntegerType_SIGNED_getInstance() : ProtoIntegerType_FIXED_getInstance();
  }
  function extractProtoId(descriptor, index, zeroBasedDefault) {
    var annotations = descriptor.dq(index);
    var inductionVariable = 0;
    var last = annotations.o() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var annotation = annotations.p(i);
        if (annotation instanceof ProtoNumber) {
          return annotation.h1h_1;
        }
      }
       while (inductionVariable <= last);
    return zeroBasedDefault ? index : index + 1 | 0;
  }
  function extractParameters(_this__u8e3s4, index) {
    var annotations = _this__u8e3s4.dq(index);
    var protoId = index + 1 | 0;
    var format = ProtoIntegerType_DEFAULT_getInstance();
    var inductionVariable = 0;
    var last = annotations.o() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var annotation = annotations.p(i);
        if (annotation instanceof ProtoNumber) {
          protoId = annotation.h1h_1;
        } else {
          if (annotation instanceof ProtoType) {
            format = annotation.l1h_1;
          }
        }
      }
       while (inductionVariable <= last);
    var tmp$ret$0;
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtoDesc' call
    var tmp0_ProtoDesc = protoId;
    var tmp1_ProtoDesc = format;
    tmp$ret$0 = tmp1_ProtoDesc.k1h_1.dj(toLong(tmp0_ProtoDesc));
    return tmp$ret$0;
  }
  function ProtoDesc(protoId, type) {
    return type.k1h_1.dj(toLong(protoId));
  }
  function get_SIZE_DELIMITED() {
    return SIZE_DELIMITED;
  }
  var SIZE_DELIMITED;
  function get_i32() {
    return i32;
  }
  var i32;
  function get_VARINT() {
    return VARINT;
  }
  var VARINT;
  function get_i64() {
    return i64;
  }
  var i64;
  function ProtobufDecodingException(message) {
    SerializationException_init_$Init$(message, this);
    captureStack(this, ProtobufDecodingException);
  }
  ProtobufDecodingException.$metadata$ = classMeta('ProtobufDecodingException', undefined, undefined, undefined, undefined, SerializationException.prototype);
  function populateCacheMap($this, descriptor, elements) {
    var map = HashMap_init_$Create$(elements);
    var inductionVariable = 0;
    if (inductionVariable < elements)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.set' call
        var tmp0_set = extractProtoId(descriptor, i, false);
        map.s(tmp0_set, i);
      }
       while (inductionVariable < elements);
    $this.e1h_1 = map;
  }
  function getIndexByTag($this, protoTag) {
    var array = $this.d1h_1;
    if (!(array == null)) {
      var tmp$ret$1;
      // Inline function 'kotlin.collections.getOrElse' call
      var tmp;
      if (protoTag >= 0 ? protoTag <= get_lastIndex(array) : false) {
        tmp = array[protoTag];
      } else {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufDecoder.getIndexByTag.<anonymous>' call
        tmp$ret$0 = -1;
        tmp = tmp$ret$0;
      }
      tmp$ret$1 = tmp;
      return tmp$ret$1;
    }
    return getIndexByTagSlowPath($this, protoTag);
  }
  function getIndexByTagSlowPath($this, protoTag) {
    var tmp$ret$1;
    // Inline function 'kotlin.collections.getOrElse' call
    var tmp0_getOrElse = ensureNotNull($this.e1h_1);
    var tmp0_elvis_lhs = tmp0_getOrElse.x2(protoTag);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufDecoder.getIndexByTagSlowPath.<anonymous>' call
      tmp$ret$0 = -1;
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    tmp$ret$1 = tmp;
    return tmp$ret$1;
  }
  function deserializeByteArray($this, previousValue) {
    var tag = $this.o1h();
    var tmp;
    if (tag.equals(get_MISSING_TAG())) {
      tmp = $this.b1h_1.u1h();
    } else {
      tmp = $this.b1h_1.t1h();
    }
    var array = tmp;
    var tmp_0;
    if (previousValue == null) {
      tmp_0 = array;
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.plus' call
      tmp$ret$0 = primitiveArrayConcat([previousValue, array]);
      tmp_0 = tmp$ret$0;
    }
    return tmp_0;
  }
  function deserializeMap($this, deserializer, previousValue) {
    var serializer = deserializer instanceof MapLikeSerializer ? deserializer : THROW_CCE();
    var mapEntrySerial = MapEntrySerializer(serializer.nw_1, serializer.ow_1);
    var tmp0_safe_receiver = (!(previousValue == null) ? isInterface(previousValue, Map) : false) ? previousValue : null;
    var oldSet = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.v();
    var setOfEntries = (new LinkedHashSetSerializer(mapEntrySerial)).cv($this, oldSet);
    var tmp$ret$3;
    // Inline function 'kotlin.collections.associateBy' call
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(setOfEntries, 10)), 16);
    var tmp$ret$2;
    // Inline function 'kotlin.collections.associateByTo' call
    var tmp0_associateByTo = LinkedHashMap_init_$Create$(capacity);
    var tmp0_iterator = setOfEntries.l();
    while (tmp0_iterator.m()) {
      var element = tmp0_iterator.n();
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufDecoder.deserializeMap.<anonymous>' call
      tmp$ret$0 = element.h2();
      var tmp = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufDecoder.deserializeMap.<anonymous>' call
      tmp$ret$1 = element.j2();
      tmp0_associateByTo.s(tmp, tmp$ret$1);
    }
    tmp$ret$2 = tmp0_associateByTo;
    tmp$ret$3 = tmp$ret$2;
    var tmp_0 = tmp$ret$3;
    return isObject(tmp_0) ? tmp_0 : THROW_CCE();
  }
  function readIfAbsent($this, descriptor, index) {
    if (!descriptor.hq(index)) {
      var elementDescriptor = descriptor.eq(index);
      var kind = elementDescriptor.lq();
      if (equals(kind, MAP_getInstance()) ? true : equals(kind, LIST_getInstance())) {
        $this.f1h_1 = false;
        return true;
      } else if (elementDescriptor.yp()) {
        $this.f1h_1 = true;
        return true;
      }
    }
    return false;
  }
  function ProtobufDecoder$readIfAbsent$ref($boundThis) {
    var l = function (p0, p1) {
      return readIfAbsent($boundThis, p0, p1);
    };
    l.callableName = 'readIfAbsent';
    return l;
  }
  function ProtobufDecoder(proto, reader, descriptor) {
    ProtobufTaggedDecoder.call(this);
    this.a1h_1 = proto;
    this.b1h_1 = reader;
    this.c1h_1 = descriptor;
    this.d1h_1 = null;
    this.e1h_1 = null;
    this.f1h_1 = false;
    var tmp = this;
    tmp.g1h_1 = new ElementMarker(this.c1h_1, ProtobufDecoder$readIfAbsent$ref(this));
    this.v1h(this.c1h_1);
  }
  ProtobufDecoder.prototype.w1h = function () {
    return this.b1h_1;
  };
  ProtobufDecoder.prototype.tp = function () {
    return this.a1h_1.tp();
  };
  ProtobufDecoder.prototype.v1h = function (descriptor) {
    var elements = descriptor.jq();
    if (elements < 32) {
      var cache = new Int32Array(elements + 1 | 0);
      var inductionVariable = 0;
      if (inductionVariable < elements)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var protoId = extractProtoId(descriptor, i, false);
          if (protoId <= elements) {
            cache[protoId] = i;
          } else {
            return populateCacheMap(this, descriptor, elements);
          }
        }
         while (inductionVariable < elements);
      this.d1h_1 = cache;
    } else {
      populateCacheMap(this, descriptor, elements);
    }
  };
  ProtobufDecoder.prototype.vr = function (descriptor) {
    var tmp0_subject = descriptor.lq();
    var tmp;
    if (equals(tmp0_subject, LIST_getInstance())) {
      var tag = this.o1h();
      var tmp_0;
      if ((equals(this.c1h_1.lq(), LIST_getInstance()) ? !tag.equals(get_MISSING_TAG()) : false) ? !equals(this.c1h_1, descriptor) : false) {
        var reader = makeDelimited(this.b1h_1, tag);
        reader.x1h();
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.protobuf.internal.ProtoDesc' call
        var tmp0_ProtoDesc = ProtoIntegerType_DEFAULT_getInstance();
        tmp$ret$0 = tmp0_ProtoDesc.k1h_1.dj(new Long(1, 0));
        tmp_0 = new RepeatedDecoder(this.a1h_1, reader, tmp$ret$0, descriptor);
      } else {
        tmp_0 = new RepeatedDecoder(this.a1h_1, this.b1h_1, tag, descriptor);
      }
      return tmp_0;
    } else {
      var tmp_1;
      if (equals(tmp0_subject, CLASS_getInstance()) ? true : equals(tmp0_subject, OBJECT_getInstance())) {
        tmp_1 = true;
      } else {
        tmp_1 = tmp0_subject instanceof PolymorphicKind;
      }
      if (tmp_1) {
        var tag_0 = this.o1h();
        if (tag_0.equals(get_MISSING_TAG()) ? equals(this.c1h_1, descriptor) : false)
          return this;
        return new ProtobufDecoder(this.a1h_1, makeDelimited(this.b1h_1, tag_0), descriptor);
      } else {
        if (equals(tmp0_subject, MAP_getInstance())) {
          tmp = new MapEntryReader(this.a1h_1, makeDelimitedForced(this.b1h_1, this.o1h()), this.o1h(), descriptor);
        } else {
          throw SerializationException_init_$Create$('Primitives are not supported at top-level');
        }
      }
    }
    return tmp;
  };
  ProtobufDecoder.prototype.wr = function (descriptor) {
  };
  ProtobufDecoder.prototype.y1h = function (tag) {
    var value = this.z1h(tag);
    var tmp;
    switch (value) {
      case 0:
        tmp = false;
        break;
      case 1:
        tmp = true;
        break;
      default:
        throw SerializationException_init_$Create$('Unexpected boolean value: ' + value);
    }
    return tmp;
  };
  ProtobufDecoder.prototype.a1i = function (tag) {
    return toByte(this.z1h(tag));
  };
  ProtobufDecoder.prototype.b1i = function (tag) {
    return toShort(this.z1h(tag));
  };
  ProtobufDecoder.prototype.z1h = function (tag) {
    var tmp;
    if (tag.equals(get_MISSING_TAG())) {
      tmp = this.b1h_1.d1i();
    } else {
      tmp = this.b1h_1.c1i(get_integerType(tag));
    }
    return tmp;
  };
  ProtobufDecoder.prototype.e1i = function (tag) {
    var tmp;
    if (tag.equals(get_MISSING_TAG())) {
      tmp = this.b1h_1.g1i();
    } else {
      tmp = this.b1h_1.f1i(get_integerType(tag));
    }
    return tmp;
  };
  ProtobufDecoder.prototype.h1i = function (tag) {
    var tmp;
    if (tag.equals(get_MISSING_TAG())) {
      tmp = this.b1h_1.j1i();
    } else {
      tmp = this.b1h_1.i1i();
    }
    return tmp;
  };
  ProtobufDecoder.prototype.k1i = function (tag) {
    var tmp;
    if (tag.equals(get_MISSING_TAG())) {
      tmp = this.b1h_1.m1i();
    } else {
      tmp = this.b1h_1.l1i();
    }
    return tmp;
  };
  ProtobufDecoder.prototype.n1i = function (tag) {
    return numberToChar(this.z1h(tag));
  };
  ProtobufDecoder.prototype.o1i = function (tag) {
    var tmp;
    if (tag.equals(get_MISSING_TAG())) {
      tmp = this.b1h_1.q1i();
    } else {
      tmp = this.b1h_1.p1i();
    }
    return tmp;
  };
  ProtobufDecoder.prototype.ur = function (deserializer) {
    return this.tr(deserializer, null);
  };
  ProtobufDecoder.prototype.tr = function (deserializer, previousValue) {
    var tmp;
    if (deserializer instanceof MapLikeSerializer) {
      tmp = deserializeMap(this, isInterface(deserializer, DeserializationStrategy) ? deserializer : THROW_CCE(), previousValue);
    } else {
      if (equals(deserializer.zo(), ByteArraySerializer().zo())) {
        var tmp_0 = deserializeByteArray(this, (previousValue == null ? true : isByteArray(previousValue)) ? previousValue : THROW_CCE());
        tmp = isObject(tmp_0) ? tmp_0 : THROW_CCE();
      } else {
        if (deserializer instanceof AbstractCollectionSerializer) {
          tmp = (deserializer instanceof AbstractCollectionSerializer ? deserializer : THROW_CCE()).cv(this, previousValue);
        } else {
          tmp = deserializer.bp(this);
        }
      }
    }
    return tmp;
  };
  ProtobufDecoder.prototype.g13 = function (_this__u8e3s4, index) {
    return extractParameters(_this__u8e3s4, index);
  };
  ProtobufDecoder.prototype.ks = function (descriptor) {
    while (true) {
      var protoId = this.b1h_1.x1h();
      if (protoId === -1) {
        return this.g1h_1.nx();
      }
      var index = getIndexByTag(this, protoId);
      if (index === -1) {
        this.b1h_1.r1i();
      } else {
        this.g1h_1.mx(index);
        return index;
      }
    }
  };
  ProtobufDecoder.prototype.hr = function () {
    return !this.f1h_1;
  };
  ProtobufDecoder.$metadata$ = classMeta('ProtobufDecoder', undefined, undefined, undefined, undefined, ProtobufTaggedDecoder.prototype);
  function decodeListIndexNoTag($this) {
    var size = $this.i1j_1.m8();
    var tmp0_this = $this;
    tmp0_this.h1j_1 = tmp0_this.h1j_1 + 1 | 0;
    var idx = tmp0_this.h1j_1;
    if (toLong(idx).equals(size)) {
      Companion_getInstance();
      return -1;
    }
    return idx;
  }
  function decodeTaggedListIndex($this) {
    var tmp;
    if ($this.h1j_1 === -1) {
      tmp = $this.b1h_1.q1h_1;
    } else {
      tmp = $this.b1h_1.x1h();
    }
    var protoId = tmp;
    var tmp_0;
    var tmp$ret$0;
    // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
    var tmp0__get_protoId__2ceqo8 = $this.i1j_1;
    tmp$ret$0 = tmp0__get_protoId__2ceqo8.ya(toLong(IntCompanionObject_getInstance().y_1)).ab();
    if (protoId === tmp$ret$0) {
      var tmp0_this = $this;
      tmp0_this.h1j_1 = tmp0_this.h1j_1 + 1 | 0;
      tmp_0 = tmp0_this.h1j_1;
    } else {
      $this.b1h_1.j1j();
      Companion_getInstance();
      tmp_0 = -1;
    }
    return tmp_0;
  }
  function RepeatedDecoder(proto, decoder, currentTag, descriptor) {
    ProtobufDecoder.call(this, proto, decoder, descriptor);
    this.h1j_1 = -1;
    var tmp = this;
    var tmp_0;
    if (currentTag.equals(get_MISSING_TAG())) {
      var length = this.b1h_1.d1i();
      // Inline function 'kotlin.require' call
      var tmp0_require = length >= 0;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_require) {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.protobuf.internal.RepeatedDecoder.<anonymous>' call
        tmp$ret$0 = 'Expected positive length for ' + descriptor + ', but got ' + length;
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      tmp_0 = toLong(length).m8();
    } else {
      tmp_0 = currentTag;
    }
    tmp.i1j_1 = tmp_0;
  }
  RepeatedDecoder.prototype.ks = function (descriptor) {
    if (this.i1j_1.o8(new Long(0, 0)) > 0) {
      return decodeTaggedListIndex(this);
    }
    return decodeListIndexNoTag(this);
  };
  RepeatedDecoder.prototype.g13 = function (_this__u8e3s4, index) {
    if (this.i1j_1.o8(new Long(0, 0)) > 0)
      return this.i1j_1;
    return get_MISSING_TAG();
  };
  RepeatedDecoder.$metadata$ = classMeta('RepeatedDecoder', undefined, undefined, undefined, undefined, ProtobufDecoder.prototype);
  function makeDelimited(decoder, parentTag) {
    var tagless = parentTag.equals(get_MISSING_TAG());
    var input = tagless ? decoder.l1j() : decoder.k1j();
    return new ProtobufReader(input);
  }
  function MapEntryReader(proto, decoder, parentTag, descriptor) {
    ProtobufDecoder.call(this, proto, decoder, descriptor);
    this.v1j_1 = parentTag;
  }
  MapEntryReader.prototype.g13 = function (_this__u8e3s4, index) {
    var tmp;
    if ((index % 2 | 0) === 0) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.protobuf.internal.ProtoDesc' call
      var tmp0_ProtoDesc = get_integerType(this.v1j_1);
      tmp$ret$0 = tmp0_ProtoDesc.k1h_1.dj(new Long(1, 0));
      tmp = tmp$ret$0;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.protobuf.internal.ProtoDesc' call
      var tmp1_ProtoDesc = get_integerType(this.v1j_1);
      tmp$ret$1 = tmp1_ProtoDesc.k1h_1.dj(new Long(2, 0));
      tmp = tmp$ret$1;
    }
    return tmp;
  };
  MapEntryReader.$metadata$ = classMeta('MapEntryReader', undefined, undefined, undefined, undefined, ProtobufDecoder.prototype);
  function makeDelimitedForced(decoder, parentTag) {
    var tagless = parentTag.equals(get_MISSING_TAG());
    var input = tagless ? decoder.l1j() : decoder.k1j();
    return new ProtobufReader(input);
  }
  function serializeByteArray($this, value) {
    var tag = $this.v1i();
    if (tag.equals(get_MISSING_TAG())) {
      $this.t1g_1.y1j(value);
    } else {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
      tmp$ret$0 = tag.ya(toLong(IntCompanionObject_getInstance().y_1)).ab();
      $this.t1g_1.x1j(value, tmp$ret$0);
    }
  }
  function serializeMap($this, serializer, value) {
    var casted = serializer instanceof MapLikeSerializer ? serializer : THROW_CCE();
    var mapEntrySerial = MapEntrySerializer(casted.nw_1, casted.ow_1);
    var tmp = SetSerializer(mapEntrySerial);
    tmp.ap($this, ((!(value == null) ? isInterface(value, Map) : false) ? value : THROW_CCE()).v());
  }
  function ProtobufEncoder(proto, writer, descriptor) {
    ProtobufTaggedEncoder.call(this);
    this.s1g_1 = proto;
    this.t1g_1 = writer;
    this.u1g_1 = descriptor;
  }
  ProtobufEncoder.prototype.tp = function () {
    return this.s1g_1.tp();
  };
  ProtobufEncoder.prototype.ot = function (descriptor, index) {
    return this.s1g_1.n1g_1;
  };
  ProtobufEncoder.prototype.nt = function (descriptor, collectionSize) {
    var tmp0_subject = descriptor.lq();
    var tmp;
    if (equals(tmp0_subject, LIST_getInstance())) {
      var tag = this.o1h();
      if (tag.equals(get_MISSING_TAG())) {
        this.t1g_1.a1k(collectionSize);
      }
      var tmp_0;
      if ((equals(this.u1g_1.lq(), LIST_getInstance()) ? !tag.equals(get_MISSING_TAG()) : false) ? !equals(this.u1g_1, descriptor) : false) {
        tmp_0 = NestedRepeatedEncoder_init_$Create$(this.s1g_1, this.t1g_1, tag, descriptor, null, 16, null);
      } else {
        tmp_0 = new RepeatedEncoder(this.s1g_1, this.t1g_1, tag, descriptor);
      }
      tmp = tmp_0;
    } else if (equals(tmp0_subject, MAP_getInstance())) {
      tmp = new MapRepeatedEncoder(this.s1g_1, this.z1j(), this.t1g_1, descriptor);
    } else {
      throw SerializationException_init_$Create$('This serial kind is not supported as collection: ' + descriptor);
    }
    return tmp;
  };
  ProtobufEncoder.prototype.vr = function (descriptor) {
    var tmp0_subject = descriptor.lq();
    var tmp;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp = new RepeatedEncoder(this.s1g_1, this.t1g_1, this.o1h(), descriptor);
    } else {
      var tmp_0;
      if (equals(tmp0_subject, CLASS_getInstance()) ? true : equals(tmp0_subject, OBJECT_getInstance())) {
        tmp_0 = true;
      } else {
        tmp_0 = tmp0_subject instanceof PolymorphicKind;
      }
      if (tmp_0) {
        var tag = this.o1h();
        var tmp_1;
        if (tag.equals(get_MISSING_TAG()) ? equals(descriptor, this.u1g_1) : false) {
          tmp_1 = this;
        } else {
          var tmp_2 = this.o1h();
          tmp_1 = ObjectEncoder_init_$Create$(this.s1g_1, tmp_2, this.t1g_1, null, descriptor, 8, null);
        }
        tmp = tmp_1;
      } else {
        if (equals(tmp0_subject, MAP_getInstance())) {
          tmp = new MapRepeatedEncoder(this.s1g_1, this.o1h(), this.t1g_1, descriptor);
        } else {
          throw SerializationException_init_$Create$('This serial kind is not supported as structure: ' + descriptor);
        }
      }
    }
    return tmp;
  };
  ProtobufEncoder.prototype.b1k = function (tag, value) {
    if (tag.equals(get_MISSING_TAG())) {
      this.t1g_1.a1k(value);
    } else {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
      tmp$ret$0 = tag.ya(toLong(IntCompanionObject_getInstance().y_1)).ab();
      this.t1g_1.c1k(value, tmp$ret$0, get_integerType(tag));
    }
  };
  ProtobufEncoder.prototype.d1k = function (tag, value) {
    return this.b1k(tag, value);
  };
  ProtobufEncoder.prototype.e1k = function (tag, value) {
    return this.b1k(tag, value);
  };
  ProtobufEncoder.prototype.f1k = function (tag, value) {
    return this.b1k(tag, value ? 1 : 0);
  };
  ProtobufEncoder.prototype.g1k = function (tag, value) {
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    tmp$ret$0 = Char__toInt_impl_vasixd(value);
    return this.b1k(tag, tmp$ret$0);
  };
  ProtobufEncoder.prototype.h1k = function (tag, value) {
    if (tag.equals(get_MISSING_TAG())) {
      this.t1g_1.j1k(value);
    } else {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
      tmp$ret$0 = tag.ya(toLong(IntCompanionObject_getInstance().y_1)).ab();
      this.t1g_1.i1k(value, tmp$ret$0, get_integerType(tag));
    }
  };
  ProtobufEncoder.prototype.k1k = function (tag, value) {
    if (tag.equals(get_MISSING_TAG())) {
      this.t1g_1.m1k(value);
    } else {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
      tmp$ret$0 = tag.ya(toLong(IntCompanionObject_getInstance().y_1)).ab();
      this.t1g_1.l1k(value, tmp$ret$0);
    }
  };
  ProtobufEncoder.prototype.n1k = function (tag, value) {
    if (tag.equals(get_MISSING_TAG())) {
      this.t1g_1.p1k(value);
    } else {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
      tmp$ret$0 = tag.ya(toLong(IntCompanionObject_getInstance().y_1)).ab();
      this.t1g_1.o1k(value, tmp$ret$0);
    }
  };
  ProtobufEncoder.prototype.q1k = function (tag, value) {
    if (tag.equals(get_MISSING_TAG())) {
      this.t1g_1.s1k(value);
    } else {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
      tmp$ret$0 = tag.ya(toLong(IntCompanionObject_getInstance().y_1)).ab();
      this.t1g_1.r1k(value, tmp$ret$0);
    }
  };
  ProtobufEncoder.prototype.g13 = function (_this__u8e3s4, index) {
    return extractParameters(_this__u8e3s4, index);
  };
  ProtobufEncoder.prototype.jt = function (serializer, value) {
    var tmp;
    if (serializer instanceof MapLikeSerializer) {
      serializeMap(this, isInterface(serializer, SerializationStrategy) ? serializer : THROW_CCE(), value);
      tmp = Unit_getInstance();
    } else {
      if (equals(serializer.zo(), ByteArraySerializer().zo())) {
        serializeByteArray(this, (!(value == null) ? isByteArray(value) : false) ? value : THROW_CCE());
        tmp = Unit_getInstance();
      } else {
        serializer.ap(this, value);
        tmp = Unit_getInstance();
      }
    }
    return tmp;
  };
  ProtobufEncoder.$metadata$ = classMeta('ProtobufEncoder', undefined, undefined, undefined, undefined, ProtobufTaggedEncoder.prototype);
  function NestedRepeatedEncoder_init_$Init$(proto, writer, curTag, descriptor, stream, $mask0, $marker, $this) {
    if (!(($mask0 & 16) === 0))
      stream = new ByteArrayOutput();
    NestedRepeatedEncoder.call($this, proto, writer, curTag, descriptor, stream);
    return $this;
  }
  function NestedRepeatedEncoder_init_$Create$(proto, writer, curTag, descriptor, stream, $mask0, $marker) {
    return NestedRepeatedEncoder_init_$Init$(proto, writer, curTag, descriptor, stream, $mask0, $marker, Object.create(NestedRepeatedEncoder.prototype));
  }
  function NestedRepeatedEncoder(proto, writer, curTag, descriptor, stream) {
    ProtobufEncoder.call(this, proto, new ProtobufWriter(stream), descriptor);
    this.e1l_1 = writer;
    this.f1l_1 = curTag;
    this.g1l_1 = stream;
  }
  NestedRepeatedEncoder.prototype.g13 = function (_this__u8e3s4, index) {
    var tmp$ret$0;
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtoDesc' call
    var tmp0_ProtoDesc = ProtoIntegerType_DEFAULT_getInstance();
    tmp$ret$0 = tmp0_ProtoDesc.k1h_1.dj(new Long(1, 0));
    return tmp$ret$0;
  };
  NestedRepeatedEncoder.prototype.x1k = function (descriptor) {
    var tmp$ret$0;
    // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
    var tmp0__get_protoId__2ceqo8 = this.f1l_1;
    tmp$ret$0 = tmp0__get_protoId__2ceqo8.ya(toLong(IntCompanionObject_getInstance().y_1)).ab();
    this.e1l_1.h1l(this.g1l_1, tmp$ret$0);
  };
  NestedRepeatedEncoder.$metadata$ = classMeta('NestedRepeatedEncoder', undefined, undefined, undefined, undefined, ProtobufEncoder.prototype);
  function RepeatedEncoder(proto, writer, curTag, descriptor) {
    ProtobufEncoder.call(this, proto, writer, descriptor);
    this.o1l_1 = curTag;
  }
  RepeatedEncoder.prototype.g13 = function (_this__u8e3s4, index) {
    return this.o1l_1;
  };
  RepeatedEncoder.$metadata$ = classMeta('RepeatedEncoder', undefined, undefined, undefined, undefined, ProtobufEncoder.prototype);
  function MapRepeatedEncoder(proto, parentTag, parentWriter, descriptor) {
    ObjectEncoder_init_$Init$(proto, parentTag, parentWriter, null, descriptor, 8, null, this);
  }
  MapRepeatedEncoder.prototype.g13 = function (_this__u8e3s4, index) {
    var tmp;
    if ((index % 2 | 0) === 0) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.protobuf.internal.ProtoDesc' call
      var tmp0_ProtoDesc = get_integerType(this.e1m_1);
      tmp$ret$0 = tmp0_ProtoDesc.k1h_1.dj(new Long(1, 0));
      tmp = tmp$ret$0;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.protobuf.internal.ProtoDesc' call
      var tmp1_ProtoDesc = get_integerType(this.e1m_1);
      tmp$ret$1 = tmp1_ProtoDesc.k1h_1.dj(new Long(2, 0));
      tmp = tmp$ret$1;
    }
    return tmp;
  };
  MapRepeatedEncoder.$metadata$ = classMeta('MapRepeatedEncoder', undefined, undefined, undefined, undefined, ObjectEncoder.prototype);
  function ObjectEncoder_init_$Init$(proto, parentTag, parentWriter, stream, descriptor, $mask0, $marker, $this) {
    if (!(($mask0 & 8) === 0))
      stream = new ByteArrayOutput();
    ObjectEncoder.call($this, proto, parentTag, parentWriter, stream, descriptor);
    return $this;
  }
  function ObjectEncoder_init_$Create$(proto, parentTag, parentWriter, stream, descriptor, $mask0, $marker) {
    return ObjectEncoder_init_$Init$(proto, parentTag, parentWriter, stream, descriptor, $mask0, $marker, Object.create(ObjectEncoder.prototype));
  }
  function ObjectEncoder(proto, parentTag, parentWriter, stream, descriptor) {
    ProtobufEncoder.call(this, proto, new ProtobufWriter(stream), descriptor);
    this.e1m_1 = parentTag;
    this.f1m_1 = parentWriter;
    this.g1m_1 = stream;
  }
  ObjectEncoder.prototype.x1k = function (descriptor) {
    if (!this.e1m_1.equals(get_MISSING_TAG())) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
      var tmp0__get_protoId__2ceqo8 = this.e1m_1;
      tmp$ret$0 = tmp0__get_protoId__2ceqo8.ya(toLong(IntCompanionObject_getInstance().y_1)).ab();
      this.f1m_1.h1l(this.g1m_1, tmp$ret$0);
    } else {
      this.f1m_1.h1m(this.g1m_1);
    }
  };
  ObjectEncoder.$metadata$ = classMeta('ObjectEncoder', undefined, undefined, undefined, undefined, ProtobufEncoder.prototype);
  function readIntLittleEndian($this) {
    var result = 0;
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var byte = $this.p1h_1.k1a() & 255;
        result = result | byte << imul(i, 8);
      }
       while (inductionVariable <= 3);
    return result;
  }
  function readLongLittleEndian($this) {
    var result = new Long(0, 0);
    var inductionVariable = 0;
    if (inductionVariable <= 7)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var byte = toLong($this.p1h_1.k1a() & 255);
        result = result.dj(byte.pb(imul(i, 8)));
      }
       while (inductionVariable <= 7);
    return result;
  }
  function checkLength($this, length) {
    if (length < 0) {
      throw new ProtobufDecodingException('Unexpected negative length: ' + length);
    }
  }
  function decode32($this, format) {
    var tmp0_subject = format;
    var tmp0 = tmp0_subject.q1_1;
    var tmp;
    switch (tmp0) {
      case 0:
        tmp = $this.p1h_1.l1m(false).ab();
        break;
      case 1:
        tmp = decodeSignedVarintInt($this, $this.p1h_1);
        break;
      case 2:
        tmp = readIntLittleEndian($this);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function decode32$default($this, format, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      format = ProtoIntegerType_DEFAULT_getInstance();
    return decode32($this, format);
  }
  function decode64($this, format) {
    var tmp0_subject = format;
    var tmp0 = tmp0_subject.q1_1;
    var tmp;
    switch (tmp0) {
      case 0:
        tmp = $this.p1h_1.l1m(false);
        break;
      case 1:
        tmp = decodeSignedVarintLong($this, $this.p1h_1);
        break;
      case 2:
        tmp = readLongLittleEndian($this);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function decodeSignedVarintInt($this, input) {
    var raw = input.m1m();
    var temp = (raw << 31 >> 31 ^ raw) >> 1;
    return temp ^ raw & -2147483648;
  }
  function decodeSignedVarintLong($this, input) {
    var raw = input.l1m(false);
    var temp = raw.pb(63).cj(63).ob(raw).cj(1);
    return temp.ob(raw.ya(new Long(0, -2147483648)));
  }
  function ProtobufReader(input) {
    this.p1h_1 = input;
    this.q1h_1 = -1;
    this.r1h_1 = -1;
    this.s1h_1 = false;
  }
  ProtobufReader.prototype.x1h = function () {
    if (this.s1h_1) {
      this.s1h_1 = false;
      return this.q1h_1;
    }
    var header = this.p1h_1.l1m(true).ab();
    var tmp;
    if (header === -1) {
      this.q1h_1 = -1;
      this.r1h_1 = -1;
      tmp = -1;
    } else {
      this.q1h_1 = header >>> 3 | 0;
      this.r1h_1 = header & 7;
      tmp = this.q1h_1;
    }
    return tmp;
  };
  ProtobufReader.prototype.j1j = function () {
    this.s1h_1 = true;
  };
  ProtobufReader.prototype.r1i = function () {
    var tmp0_subject = this.r1h_1;
    if (tmp0_subject === get_VARINT()) {
      this.c1i(ProtoIntegerType_DEFAULT_getInstance());
    } else if (tmp0_subject === get_i64()) {
      this.f1i(ProtoIntegerType_FIXED_getInstance());
    } else if (tmp0_subject === get_SIZE_DELIMITED()) {
      this.t1h();
    } else if (tmp0_subject === get_i32()) {
      this.c1i(ProtoIntegerType_FIXED_getInstance());
    } else
      throw new ProtobufDecodingException('Unsupported start group or end group wire type: ' + this.r1h_1);
  };
  ProtobufReader.prototype.t1h = function () {
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufReader.assertWireType' call
    var tmp0_assertWireType = get_SIZE_DELIMITED();
    if (!(this.r1h_1 === tmp0_assertWireType))
      throw new ProtobufDecodingException('Expected wire type ' + tmp0_assertWireType + ', but found ' + this.r1h_1);
    return this.u1h();
  };
  ProtobufReader.prototype.u1h = function () {
    var length = decode32$default(this, null, 2, null);
    checkLength(this, length);
    return this.p1h_1.n1m(length);
  };
  ProtobufReader.prototype.k1j = function () {
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufReader.assertWireType' call
    var tmp0_assertWireType = get_SIZE_DELIMITED();
    if (!(this.r1h_1 === tmp0_assertWireType))
      throw new ProtobufDecodingException('Expected wire type ' + tmp0_assertWireType + ', but found ' + this.r1h_1);
    return this.l1j();
  };
  ProtobufReader.prototype.l1j = function () {
    var length = decode32$default(this, null, 2, null);
    checkLength(this, length);
    return this.p1h_1.o1m(length);
  };
  ProtobufReader.prototype.c1i = function (format) {
    var wireType = format.equals(ProtoIntegerType_FIXED_getInstance()) ? get_i32() : get_VARINT();
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufReader.assertWireType' call
    if (!(this.r1h_1 === wireType))
      throw new ProtobufDecodingException('Expected wire type ' + wireType + ', but found ' + this.r1h_1);
    return decode32(this, format);
  };
  ProtobufReader.prototype.d1i = function () {
    return decode32$default(this, null, 2, null);
  };
  ProtobufReader.prototype.f1i = function (format) {
    var wireType = format.equals(ProtoIntegerType_FIXED_getInstance()) ? get_i64() : get_VARINT();
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufReader.assertWireType' call
    if (!(this.r1h_1 === wireType))
      throw new ProtobufDecodingException('Expected wire type ' + wireType + ', but found ' + this.r1h_1);
    return decode64(this, format);
  };
  ProtobufReader.prototype.g1i = function () {
    return decode64(this, ProtoIntegerType_DEFAULT_getInstance());
  };
  ProtobufReader.prototype.i1i = function () {
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufReader.assertWireType' call
    var tmp0_assertWireType = get_i32();
    if (!(this.r1h_1 === tmp0_assertWireType))
      throw new ProtobufDecodingException('Expected wire type ' + tmp0_assertWireType + ', but found ' + this.r1h_1);
    var tmp$ret$0;
    // Inline function 'kotlin.fromBits' call
    var tmp1_fromBits = FloatCompanionObject_getInstance();
    var tmp2_fromBits = readIntLittleEndian(this);
    tmp$ret$0 = floatFromBits(tmp2_fromBits);
    return tmp$ret$0;
  };
  ProtobufReader.prototype.j1i = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.fromBits' call
    var tmp0_fromBits = FloatCompanionObject_getInstance();
    var tmp1_fromBits = readIntLittleEndian(this);
    tmp$ret$0 = floatFromBits(tmp1_fromBits);
    return tmp$ret$0;
  };
  ProtobufReader.prototype.l1i = function () {
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufReader.assertWireType' call
    var tmp0_assertWireType = get_i64();
    if (!(this.r1h_1 === tmp0_assertWireType))
      throw new ProtobufDecodingException('Expected wire type ' + tmp0_assertWireType + ', but found ' + this.r1h_1);
    var tmp$ret$0;
    // Inline function 'kotlin.fromBits' call
    var tmp1_fromBits = DoubleCompanionObject_getInstance();
    var tmp2_fromBits = readLongLittleEndian(this);
    tmp$ret$0 = doubleFromBits(tmp2_fromBits);
    return tmp$ret$0;
  };
  ProtobufReader.prototype.m1i = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.fromBits' call
    var tmp0_fromBits = DoubleCompanionObject_getInstance();
    var tmp1_fromBits = readLongLittleEndian(this);
    tmp$ret$0 = doubleFromBits(tmp1_fromBits);
    return tmp$ret$0;
  };
  ProtobufReader.prototype.p1i = function () {
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufReader.assertWireType' call
    var tmp0_assertWireType = get_SIZE_DELIMITED();
    if (!(this.r1h_1 === tmp0_assertWireType))
      throw new ProtobufDecodingException('Expected wire type ' + tmp0_assertWireType + ', but found ' + this.r1h_1);
    var length = decode32$default(this, null, 2, null);
    checkLength(this, length);
    return this.p1h_1.p1m(length);
  };
  ProtobufReader.prototype.q1i = function () {
    var length = decode32$default(this, null, 2, null);
    checkLength(this, length);
    return this.p1h_1.p1m(length);
  };
  ProtobufReader.$metadata$ = classMeta('ProtobufReader');
  function get_MISSING_TAG() {
    return MISSING_TAG;
  }
  var MISSING_TAG;
  function expand($this) {
    $this.m1h_1 = copyOf($this.m1h_1, imul($this.m1h_1.length, 2));
  }
  function ProtobufTaggedBase() {
    this.m1h_1 = longArray(8);
    this.n1h_1 = -1;
  }
  ProtobufTaggedBase.prototype.z1j = function () {
    return this.m1h_1[this.n1h_1];
  };
  ProtobufTaggedBase.prototype.o1h = function () {
    return this.n1h_1 === -1 ? new Long(19500, 0) : this.m1h_1[this.n1h_1];
  };
  ProtobufTaggedBase.prototype.v1i = function () {
    var tmp;
    if (this.n1h_1 === -1) {
      tmp = new Long(19500, 0);
    } else {
      var tmp_0 = this.m1h_1;
      var tmp0_this = this;
      var tmp1 = tmp0_this.n1h_1;
      tmp0_this.n1h_1 = tmp1 - 1 | 0;
      tmp = tmp_0[tmp1];
    }
    return tmp;
  };
  ProtobufTaggedBase.prototype.w1i = function (tag) {
    if (tag.equals(new Long(19500, 0)))
      return Unit_getInstance();
    var tmp0_this = this;
    tmp0_this.n1h_1 = tmp0_this.n1h_1 + 1 | 0;
    var idx = tmp0_this.n1h_1;
    if (this.n1h_1 >= this.m1h_1.length) {
      expand(this);
    }
    this.m1h_1[idx] = tag;
  };
  ProtobufTaggedBase.prototype.a14 = function () {
    if (this.n1h_1 >= 0) {
      var tmp = this.m1h_1;
      var tmp0_this = this;
      var tmp1 = tmp0_this.n1h_1;
      tmp0_this.n1h_1 = tmp1 - 1 | 0;
      return tmp[tmp1];
    }
    throw SerializationException_init_$Create$('No tag in stack for requested element');
  };
  ProtobufTaggedBase.prototype.x1i = function (tag, block) {
    this.w1i(tag);
    return block();
  };
  ProtobufTaggedBase.$metadata$ = classMeta('ProtobufTaggedBase');
  function ProtobufTaggedDecoder() {
    ProtobufTaggedBase.call(this);
  }
  ProtobufTaggedDecoder.prototype.u1i = function (tag, inlineDescriptor) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufTaggedDecoder.decodeTaggedInline.<anonymous>' call
    this.w1i(tag);
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  ProtobufTaggedDecoder.prototype.hr = function () {
    return true;
  };
  ProtobufTaggedDecoder.prototype.ir = function () {
    return null;
  };
  ProtobufTaggedDecoder.prototype.jr = function () {
    return this.y1h(this.v1i());
  };
  ProtobufTaggedDecoder.prototype.kr = function () {
    return this.a1i(this.v1i());
  };
  ProtobufTaggedDecoder.prototype.lr = function () {
    return this.b1i(this.v1i());
  };
  ProtobufTaggedDecoder.prototype.mr = function () {
    return this.z1h(this.v1i());
  };
  ProtobufTaggedDecoder.prototype.nr = function () {
    return this.e1i(this.v1i());
  };
  ProtobufTaggedDecoder.prototype.or = function () {
    return this.h1i(this.v1i());
  };
  ProtobufTaggedDecoder.prototype.pr = function () {
    return this.k1i(this.v1i());
  };
  ProtobufTaggedDecoder.prototype.qr = function () {
    return this.n1i(this.v1i());
  };
  ProtobufTaggedDecoder.prototype.rr = function () {
    return this.o1i(this.v1i());
  };
  ProtobufTaggedDecoder.prototype.vr = function (descriptor) {
    return this;
  };
  ProtobufTaggedDecoder.prototype.wr = function (descriptor) {
  };
  ProtobufTaggedDecoder.prototype.xr = function (descriptor, index) {
    return this.y1h(this.g13(descriptor, index));
  };
  ProtobufTaggedDecoder.prototype.yr = function (descriptor, index) {
    return this.a1i(this.g13(descriptor, index));
  };
  ProtobufTaggedDecoder.prototype.zr = function (descriptor, index) {
    return this.b1i(this.g13(descriptor, index));
  };
  ProtobufTaggedDecoder.prototype.as = function (descriptor, index) {
    return this.z1h(this.g13(descriptor, index));
  };
  ProtobufTaggedDecoder.prototype.bs = function (descriptor, index) {
    return this.e1i(this.g13(descriptor, index));
  };
  ProtobufTaggedDecoder.prototype.cs = function (descriptor, index) {
    return this.h1i(this.g13(descriptor, index));
  };
  ProtobufTaggedDecoder.prototype.ds = function (descriptor, index) {
    return this.k1i(this.g13(descriptor, index));
  };
  ProtobufTaggedDecoder.prototype.es = function (descriptor, index) {
    return this.n1i(this.g13(descriptor, index));
  };
  ProtobufTaggedDecoder.prototype.fs = function (descriptor, index) {
    return this.o1i(this.g13(descriptor, index));
  };
  ProtobufTaggedDecoder.prototype.gs = function (descriptor, index, deserializer, previousValue) {
    var tmp$ret$1;
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufTaggedBase.tagBlock' call
    var tmp0_tagBlock = this.g13(descriptor, index);
    this.w1i(tmp0_tagBlock);
    var tmp$ret$0;
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufTaggedDecoder.decodeSerializableElement.<anonymous>' call
    tmp$ret$0 = this.tr(deserializer, previousValue);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  ProtobufTaggedDecoder.prototype.is = function (descriptor, index, deserializer, previousValue) {
    var tmp$ret$1;
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufTaggedBase.tagBlock' call
    var tmp0_tagBlock = this.g13(descriptor, index);
    this.w1i(tmp0_tagBlock);
    var tmp$ret$0;
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufTaggedDecoder.decodeNullableSerializableElement.<anonymous>' call
    var tmp;
    if (this.hr()) {
      tmp = this.tr(deserializer, previousValue);
    } else {
      tmp = this.ir();
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  ProtobufTaggedDecoder.prototype.sr = function (inlineDescriptor) {
    return this.u1i(this.a14(), inlineDescriptor);
  };
  ProtobufTaggedDecoder.$metadata$ = classMeta('ProtobufTaggedDecoder', [Decoder, CompositeDecoder], undefined, undefined, undefined, ProtobufTaggedBase.prototype);
  var NullableMode_ACCEPTABLE_instance;
  var NullableMode_OPTIONAL_instance;
  var NullableMode_COLLECTION_instance;
  var NullableMode_NOT_NULL_instance;
  var NullableMode_entriesInitialized;
  function NullableMode_initEntries() {
    if (NullableMode_entriesInitialized)
      return Unit_getInstance();
    NullableMode_entriesInitialized = true;
    NullableMode_ACCEPTABLE_instance = new NullableMode('ACCEPTABLE', 0);
    NullableMode_OPTIONAL_instance = new NullableMode('OPTIONAL', 1);
    NullableMode_COLLECTION_instance = new NullableMode('COLLECTION', 2);
    NullableMode_NOT_NULL_instance = new NullableMode('NOT_NULL', 3);
  }
  function NullableMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  NullableMode.$metadata$ = classMeta('NullableMode', undefined, undefined, undefined, undefined, Enum.prototype);
  function NullableMode_ACCEPTABLE_getInstance() {
    NullableMode_initEntries();
    return NullableMode_ACCEPTABLE_instance;
  }
  function NullableMode_OPTIONAL_getInstance() {
    NullableMode_initEntries();
    return NullableMode_OPTIONAL_instance;
  }
  function NullableMode_COLLECTION_getInstance() {
    NullableMode_initEntries();
    return NullableMode_COLLECTION_instance;
  }
  function NullableMode_NOT_NULL_getInstance() {
    NullableMode_initEntries();
    return NullableMode_NOT_NULL_instance;
  }
  function ProtobufTaggedEncoder() {
    ProtobufTaggedBase.call(this);
    this.v1k_1 = NullableMode_NOT_NULL_getInstance();
  }
  ProtobufTaggedEncoder.prototype.w1k = function (tag, inlineDescriptor) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufTaggedEncoder.encodeTaggedInline.<anonymous>' call
    this.w1i(tag);
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  ProtobufTaggedEncoder.prototype.os = function () {
    if (!this.v1k_1.equals(NullableMode_ACCEPTABLE_getInstance())) {
      var tmp0_subject = this.v1k_1;
      var tmp0 = tmp0_subject.q1_1;
      {
        var message;
        switch (tmp0) {
          case 1:
            message = "'null' is not supported for optional properties in ProtoBuf";
            break;
          case 2:
            message = "'null' is not supported for collection types in ProtoBuf";
            break;
          case 3:
            message = "'null' is not allowed for not-null properties";
            break;
          default:
            message = "'null' is not supported in ProtoBuf";
            break;
        }
      }
      throw SerializationException_init_$Create$(message);
    }
  };
  ProtobufTaggedEncoder.prototype.ps = function (value) {
    this.f1k(this.v1i(), value);
  };
  ProtobufTaggedEncoder.prototype.qs = function (value) {
    this.d1k(this.v1i(), value);
  };
  ProtobufTaggedEncoder.prototype.rs = function (value) {
    this.e1k(this.v1i(), value);
  };
  ProtobufTaggedEncoder.prototype.ss = function (value) {
    this.b1k(this.v1i(), value);
  };
  ProtobufTaggedEncoder.prototype.ts = function (value) {
    this.h1k(this.v1i(), value);
  };
  ProtobufTaggedEncoder.prototype.us = function (value) {
    this.k1k(this.v1i(), value);
  };
  ProtobufTaggedEncoder.prototype.vs = function (value) {
    this.n1k(this.v1i(), value);
  };
  ProtobufTaggedEncoder.prototype.ws = function (value) {
    this.g1k(this.v1i(), value);
  };
  ProtobufTaggedEncoder.prototype.xs = function (value) {
    this.q1k(this.v1i(), value);
  };
  ProtobufTaggedEncoder.prototype.wr = function (descriptor) {
    if (this.n1h_1 >= 0) {
      this.a14();
    }
    this.x1k(descriptor);
  };
  ProtobufTaggedEncoder.prototype.x1k = function (descriptor) {
  };
  ProtobufTaggedEncoder.prototype.zs = function (descriptor, index, value) {
    return this.f1k(this.g13(descriptor, index), value);
  };
  ProtobufTaggedEncoder.prototype.at = function (descriptor, index, value) {
    return this.d1k(this.g13(descriptor, index), value);
  };
  ProtobufTaggedEncoder.prototype.bt = function (descriptor, index, value) {
    return this.e1k(this.g13(descriptor, index), value);
  };
  ProtobufTaggedEncoder.prototype.ct = function (descriptor, index, value) {
    return this.b1k(this.g13(descriptor, index), value);
  };
  ProtobufTaggedEncoder.prototype.dt = function (descriptor, index, value) {
    return this.h1k(this.g13(descriptor, index), value);
  };
  ProtobufTaggedEncoder.prototype.et = function (descriptor, index, value) {
    return this.k1k(this.g13(descriptor, index), value);
  };
  ProtobufTaggedEncoder.prototype.ft = function (descriptor, index, value) {
    return this.n1k(this.g13(descriptor, index), value);
  };
  ProtobufTaggedEncoder.prototype.gt = function (descriptor, index, value) {
    return this.g1k(this.g13(descriptor, index), value);
  };
  ProtobufTaggedEncoder.prototype.ht = function (descriptor, index, value) {
    return this.q1k(this.g13(descriptor, index), value);
  };
  ProtobufTaggedEncoder.prototype.it = function (descriptor, index, serializer, value) {
    this.v1k_1 = NullableMode_NOT_NULL_getInstance();
    this.w1i(this.g13(descriptor, index));
    this.jt(serializer, value);
  };
  ProtobufTaggedEncoder.prototype.kt = function (descriptor, index, serializer, value) {
    var elementKind = descriptor.eq(index).lq();
    var tmp = this;
    var tmp_0;
    if (descriptor.hq(index)) {
      tmp_0 = NullableMode_OPTIONAL_getInstance();
    } else if (equals(elementKind, MAP_getInstance()) ? true : equals(elementKind, LIST_getInstance())) {
      tmp_0 = NullableMode_COLLECTION_getInstance();
    } else {
      tmp_0 = NullableMode_ACCEPTABLE_getInstance();
    }
    tmp.v1k_1 = tmp_0;
    this.w1i(this.g13(descriptor, index));
    this.lt(serializer, value);
  };
  ProtobufTaggedEncoder.prototype.ys = function (inlineDescriptor) {
    return this.w1k(this.a14(), inlineDescriptor);
  };
  ProtobufTaggedEncoder.$metadata$ = classMeta('ProtobufTaggedEncoder', [Encoder, CompositeEncoder], undefined, undefined, undefined, ProtobufTaggedBase.prototype);
  function encode32(_this__u8e3s4, $this, number, format) {
    var tmp0_subject = format;
    var tmp0 = tmp0_subject.q1_1;
    switch (tmp0) {
      case 2:
        $this.w1j_1.a1k(reverseBytes_1(number));
        ;
        break;
      case 0:
        _this__u8e3s4.q1m(toLong(number));
        ;
        break;
      case 1:
        _this__u8e3s4.r1m(number << 1 ^ number >> 31);
        ;
        break;
    }
  }
  function encode32$default(_this__u8e3s4, $this, number, format, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      format = ProtoIntegerType_DEFAULT_getInstance();
    return encode32(_this__u8e3s4, $this, number, format);
  }
  function encode64(_this__u8e3s4, $this, number, format) {
    var tmp0_subject = format;
    var tmp0 = tmp0_subject.q1_1;
    switch (tmp0) {
      case 2:
        $this.w1j_1.j1k(reverseBytes_2(number));
        ;
        break;
      case 0:
        _this__u8e3s4.q1m(number);
        ;
        break;
      case 1:
        _this__u8e3s4.q1m(number.pb(1).ob(number.cj(63)));
        ;
        break;
    }
  }
  function encode64$default(_this__u8e3s4, $this, number, format, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      format = ProtoIntegerType_DEFAULT_getInstance();
    return encode64(_this__u8e3s4, $this, number, format);
  }
  function reverseBytes(_this__u8e3s4, $this) {
    return reverseBytes_1(toRawBits(_this__u8e3s4));
  }
  function reverseBytes_0(_this__u8e3s4, $this) {
    return reverseBytes_2(toRawBits_0(_this__u8e3s4));
  }
  function ProtobufWriter(out) {
    this.w1j_1 = out;
  }
  ProtobufWriter.prototype.x1j = function (bytes, tag) {
    var tmp = tag << 3 | get_SIZE_DELIMITED();
    encode32$default(this.w1j_1, this, tmp, null, 4, null);
    this.y1j(bytes);
  };
  ProtobufWriter.prototype.y1j = function (bytes) {
    var tmp = bytes.length;
    encode32$default(this.w1j_1, this, tmp, null, 4, null);
    this.w1j_1.s1m(bytes);
  };
  ProtobufWriter.prototype.h1l = function (output, tag) {
    var tmp = tag << 3 | get_SIZE_DELIMITED();
    encode32$default(this.w1j_1, this, tmp, null, 4, null);
    this.h1m(output);
  };
  ProtobufWriter.prototype.h1m = function (output) {
    var tmp = output.t1m();
    encode32$default(this.w1j_1, this, tmp, null, 4, null);
    this.w1j_1.u1m(output);
  };
  ProtobufWriter.prototype.c1k = function (value, tag, format) {
    var wireType = format.equals(ProtoIntegerType_FIXED_getInstance()) ? get_i32() : get_VARINT();
    var tmp = tag << 3 | wireType;
    encode32$default(this.w1j_1, this, tmp, null, 4, null);
    encode32(this.w1j_1, this, value, format);
  };
  ProtobufWriter.prototype.a1k = function (value) {
    encode32$default(this.w1j_1, this, value, null, 4, null);
  };
  ProtobufWriter.prototype.i1k = function (value, tag, format) {
    var wireType = format.equals(ProtoIntegerType_FIXED_getInstance()) ? get_i64() : get_VARINT();
    var tmp = tag << 3 | wireType;
    encode32$default(this.w1j_1, this, tmp, null, 4, null);
    encode64(this.w1j_1, this, value, format);
  };
  ProtobufWriter.prototype.j1k = function (value) {
    encode64$default(this.w1j_1, this, value, null, 4, null);
  };
  ProtobufWriter.prototype.r1k = function (value, tag) {
    var bytes = encodeToByteArray(value);
    this.x1j(bytes, tag);
  };
  ProtobufWriter.prototype.s1k = function (value) {
    var bytes = encodeToByteArray(value);
    this.y1j(bytes);
  };
  ProtobufWriter.prototype.o1k = function (value, tag) {
    var tmp = tag << 3 | get_i64();
    encode32$default(this.w1j_1, this, tmp, null, 4, null);
    this.w1j_1.j1k(reverseBytes_0(value, this));
  };
  ProtobufWriter.prototype.p1k = function (value) {
    this.w1j_1.j1k(reverseBytes_0(value, this));
  };
  ProtobufWriter.prototype.l1k = function (value, tag) {
    var tmp = tag << 3 | get_i32();
    encode32$default(this.w1j_1, this, tmp, null, 4, null);
    this.w1j_1.a1k(reverseBytes(value, this));
  };
  ProtobufWriter.prototype.m1k = function (value) {
    this.w1j_1.a1k(reverseBytes(value, this));
  };
  ProtobufWriter.$metadata$ = classMeta('ProtobufWriter');
  function Companion() {
    Companion_instance = this;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = 65;
    var tmp_2 = new Int32Array(tmp_1);
    while (tmp_0 < tmp_1) {
      var tmp_3 = tmp_0;
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.protobuf.internal.Companion.VAR_INT_LENGTHS.<anonymous>' call
      tmp$ret$0 = (63 - tmp_3 | 0) / 7 | 0;
      tmp_2[tmp_3] = tmp$ret$0;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.v1m_1 = tmp_2;
  }
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function ensureCapacity($this, elementsToAppend) {
    if (($this.w1g_1 + elementsToAppend | 0) <= $this.v1g_1.length) {
      return Unit_getInstance();
    }
    var newArray = new Int8Array(takeHighestOneBit($this.w1g_1 + elementsToAppend | 0) << 1);
    var tmp$ret$4;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = $this.v1g_1;
    var tmp1_copyInto = tmp0_copyInto.length;
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_copyInto;
    tmp$ret$1 = tmp$ret$0;
    var tmp = tmp$ret$1;
    var tmp$ret$3;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$2;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$2 = newArray;
    tmp$ret$3 = tmp$ret$2;
    arrayCopy(tmp, tmp$ret$3, 0, 0, tmp1_copyInto);
    tmp$ret$4 = newArray;
    $this.v1g_1 = newArray;
  }
  function encodeVarint($this, value, length) {
    var current = value;
    var inductionVariable = 0;
    if (inductionVariable < length)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        $this.v1g_1[$this.w1g_1 + i | 0] = current.ya(new Long(127, 0)).dj(new Long(128, 0)).na();
        current = current.gb(7);
      }
       while (inductionVariable < length);
    $this.v1g_1[$this.w1g_1 + length | 0] = current.na();
    var tmp1_this = $this;
    tmp1_this.w1g_1 = tmp1_this.w1g_1 + (length + 1 | 0) | 0;
  }
  function varIntLength($this, value) {
    return Companion_getInstance_0().v1m_1[countLeadingZeroBits(value)];
  }
  function ByteArrayOutput() {
    Companion_getInstance_0();
    this.v1g_1 = new Int8Array(32);
    this.w1g_1 = 0;
  }
  ByteArrayOutput.prototype.t1m = function () {
    return this.w1g_1;
  };
  ByteArrayOutput.prototype.x1g = function () {
    var newArray = new Int8Array(this.w1g_1);
    var tmp$ret$4;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = this.v1g_1;
    var tmp1_copyInto = this.w1g_1;
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_copyInto;
    tmp$ret$1 = tmp$ret$0;
    var tmp = tmp$ret$1;
    var tmp$ret$3;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$2;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$2 = newArray;
    tmp$ret$3 = tmp$ret$2;
    arrayCopy(tmp, tmp$ret$3, 0, 0, tmp1_copyInto);
    tmp$ret$4 = newArray;
    return newArray;
  };
  ByteArrayOutput.prototype.s1m = function (buffer) {
    var count = buffer.length;
    if (count === 0) {
      return Unit_getInstance();
    }
    ensureCapacity(this, count);
    var tmp$ret$4;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = this.v1g_1;
    var tmp1_copyInto = this.w1g_1;
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = buffer;
    tmp$ret$1 = tmp$ret$0;
    var tmp = tmp$ret$1;
    var tmp$ret$3;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$2;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$2 = tmp0_copyInto;
    tmp$ret$3 = tmp$ret$2;
    arrayCopy(tmp, tmp$ret$3, tmp1_copyInto, 0, count);
    tmp$ret$4 = tmp0_copyInto;
    var tmp0_this = this;
    tmp0_this.w1g_1 = tmp0_this.w1g_1 + count | 0;
  };
  ByteArrayOutput.prototype.u1m = function (output) {
    var count = output.t1m();
    ensureCapacity(this, count);
    var tmp$ret$4;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = output.v1g_1;
    var tmp1_copyInto = this.v1g_1;
    var tmp2_copyInto = this.w1g_1;
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_copyInto;
    tmp$ret$1 = tmp$ret$0;
    var tmp = tmp$ret$1;
    var tmp$ret$3;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$2;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$2 = tmp1_copyInto;
    tmp$ret$3 = tmp$ret$2;
    arrayCopy(tmp, tmp$ret$3, tmp2_copyInto, 0, count);
    tmp$ret$4 = tmp1_copyInto;
    var tmp0_this = this;
    tmp0_this.w1g_1 = tmp0_this.w1g_1 + count | 0;
  };
  ByteArrayOutput.prototype.a1k = function (intValue) {
    ensureCapacity(this, 4);
    var inductionVariable = 3;
    if (0 <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var tmp = this.v1g_1;
        var tmp1_this = this;
        var tmp2 = tmp1_this.w1g_1;
        tmp1_this.w1g_1 = tmp2 + 1 | 0;
        tmp[tmp2] = toByte(intValue >> imul(i, 8));
      }
       while (0 <= inductionVariable);
  };
  ByteArrayOutput.prototype.j1k = function (longValue) {
    ensureCapacity(this, 8);
    var inductionVariable = 7;
    if (0 <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var tmp = this.v1g_1;
        var tmp1_this = this;
        var tmp2 = tmp1_this.w1g_1;
        tmp1_this.w1g_1 = tmp2 + 1 | 0;
        tmp[tmp2] = longValue.cj(imul(i, 8)).na();
      }
       while (0 <= inductionVariable);
  };
  ByteArrayOutput.prototype.r1m = function (value) {
    ensureCapacity(this, 5);
    if ((value & -128) === 0) {
      var tmp = this.v1g_1;
      var tmp0_this = this;
      var tmp1 = tmp0_this.w1g_1;
      tmp0_this.w1g_1 = tmp1 + 1 | 0;
      tmp[tmp1] = toByte(value);
      return Unit_getInstance();
    }
    var length = varIntLength(this, toLong(value));
    encodeVarint(this, toLong(value), length);
  };
  ByteArrayOutput.prototype.q1m = function (value) {
    var length = varIntLength(this, value);
    ensureCapacity(this, length + 1 | 0);
    encodeVarint(this, value, length);
  };
  ByteArrayOutput.$metadata$ = classMeta('ByteArrayOutput');
  function ByteArrayInput_init_$Init$(array, endIndex, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      endIndex = array.length;
    ByteArrayInput.call($this, array, endIndex);
    return $this;
  }
  function ByteArrayInput_init_$Create$(array, endIndex, $mask0, $marker) {
    return ByteArrayInput_init_$Init$(array, endIndex, $mask0, $marker, Object.create(ByteArrayInput.prototype));
  }
  function _get_availableBytes__fzqzfb($this) {
    return $this.j1m_1 - $this.k1m_1 | 0;
  }
  function ensureEnoughBytes($this, bytesCount) {
    if (bytesCount > _get_availableBytes__fzqzfb($this)) {
      throw SerializationException_init_$Create$('Unexpected EOF, available ' + _get_availableBytes__fzqzfb($this) + ' bytes, requested: ' + bytesCount);
    }
  }
  function eof($this) {
    throw SerializationException_init_$Create$('Unexpected EOF');
  }
  function readVarint64SlowPath($this) {
    var result = new Long(0, 0);
    var shift = 0;
    while (shift < 64) {
      var byte = $this.k1a();
      result = result.dj(toLong(byte & 127).pb(shift));
      if ((byte & 128) === 0) {
        return result;
      }
      shift = shift + 7 | 0;
    }
    throw SerializationException_init_$Create$('Input stream is malformed: Varint too long (exceeded 64 bits)');
  }
  function readVarint32SlowPath($this) {
    var result = 0;
    var shift = 0;
    while (shift < 32) {
      var byte = $this.k1a();
      result = result | (byte & 127) << shift;
      if ((byte & 128) === 0) {
        return result;
      }
      shift = shift + 7 | 0;
    }
    throw SerializationException_init_$Create$('Input stream is malformed: Varint too long (exceeded 32 bits)');
  }
  function ByteArrayInput(array, endIndex) {
    this.i1m_1 = array;
    this.j1m_1 = endIndex;
    this.k1m_1 = 0;
  }
  ByteArrayInput.prototype.o1m = function (size) {
    ensureEnoughBytes(this, size);
    var result = new ByteArrayInput(this.i1m_1, this.k1m_1 + size | 0);
    result.k1m_1 = this.k1m_1;
    var tmp0_this = this;
    tmp0_this.k1m_1 = tmp0_this.k1m_1 + size | 0;
    return result;
  };
  ByteArrayInput.prototype.k1a = function () {
    var tmp;
    if (this.k1m_1 < this.j1m_1) {
      var tmp_0 = this.i1m_1;
      var tmp0_this = this;
      var tmp1 = tmp0_this.k1m_1;
      tmp0_this.k1m_1 = tmp1 + 1 | 0;
      tmp = tmp_0[tmp1] & 255;
    } else {
      tmp = -1;
    }
    return tmp;
  };
  ByteArrayInput.prototype.n1m = function (bytesCount) {
    ensureEnoughBytes(this, bytesCount);
    var b = new Int8Array(bytesCount);
    var length = b.length;
    var copied = (this.j1m_1 - this.k1m_1 | 0) < length ? this.j1m_1 - this.k1m_1 | 0 : length;
    var tmp$ret$4;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = this.i1m_1;
    var tmp1_copyInto = this.k1m_1;
    var tmp2_copyInto = this.k1m_1 + copied | 0;
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_copyInto;
    tmp$ret$1 = tmp$ret$0;
    var tmp = tmp$ret$1;
    var tmp$ret$3;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$2;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$2 = b;
    tmp$ret$3 = tmp$ret$2;
    arrayCopy(tmp, tmp$ret$3, 0, tmp1_copyInto, tmp2_copyInto);
    tmp$ret$4 = b;
    var tmp0_this = this;
    tmp0_this.k1m_1 = tmp0_this.k1m_1 + copied | 0;
    return b;
  };
  ByteArrayInput.prototype.p1m = function (length) {
    var tmp = this.i1m_1;
    var tmp_0 = this.k1m_1;
    var tmp_1 = this.k1m_1 + length | 0;
    var result = decodeToString$default(tmp, tmp_0, tmp_1, false, 4, null);
    var tmp0_this = this;
    tmp0_this.k1m_1 = tmp0_this.k1m_1 + length | 0;
    return result;
  };
  ByteArrayInput.prototype.m1m = function () {
    if (this.k1m_1 === this.j1m_1) {
      eof(this);
    }
    var currentPosition = this.k1m_1;
    var tmp = this.i1m_1;
    var tmp0 = currentPosition;
    currentPosition = tmp0 + 1 | 0;
    var result = tmp[tmp0];
    if (result >= 0) {
      this.k1m_1 = currentPosition;
      return result;
    } else if ((this.j1m_1 - this.k1m_1 | 0) > 1) {
      var tmp_0 = result;
      var tmp_1 = this.i1m_1;
      var tmp1 = currentPosition;
      currentPosition = tmp1 + 1 | 0;
      result = tmp_0 ^ tmp_1[tmp1] << 7;
      if (result < 0) {
        this.k1m_1 = currentPosition;
        return result ^ -128;
      }
    }
    return readVarint32SlowPath(this);
  };
  ByteArrayInput.prototype.l1m = function (eofAllowed) {
    if (this.k1m_1 === this.j1m_1) {
      if (eofAllowed)
        return new Long(-1, -1);
      else {
        eof(this);
      }
    }
    var currentPosition = this.k1m_1;
    var tmp = this.i1m_1;
    var tmp0 = currentPosition;
    currentPosition = tmp0 + 1 | 0;
    var result = toLong(tmp[tmp0]);
    if (result.o8(new Long(0, 0)) >= 0) {
      this.k1m_1 = currentPosition;
      return result;
    } else if ((this.j1m_1 - this.k1m_1 | 0) > 1) {
      var tmp_0 = result;
      var tmp_1 = this.i1m_1;
      var tmp1 = currentPosition;
      currentPosition = tmp1 + 1 | 0;
      result = tmp_0.ob(toLong(tmp_1[tmp1]).pb(7));
      if (result.o8(new Long(0, 0)) < 0) {
        this.k1m_1 = currentPosition;
        return result.ob(new Long(-128, -1));
      }
    }
    return readVarint64SlowPath(this);
  };
  ByteArrayInput.$metadata$ = classMeta('ByteArrayInput');
  function reverseBytes_1(_this__u8e3s4) {
    return reverseBytes_3(toShort(_this__u8e3s4 & 65535)) << 16 | reverseBytes_3(toShort(_this__u8e3s4 >>> 16 | 0)) & 65535;
  }
  function reverseBytes_2(_this__u8e3s4) {
    return toLong(reverseBytes_1(_this__u8e3s4.ya(new Long(-1, 0)).ab())).pb(32).dj(toLong(reverseBytes_1(_this__u8e3s4.gb(32).ab())).ya(new Long(-1, 0)));
  }
  function reverseBytes_3(_this__u8e3s4) {
    return toShort((_this__u8e3s4 & 255) << 8 | ((_this__u8e3s4 & 65535) >>> 8 | 0));
  }
  //region block: post-declaration
  ProtobufTaggedDecoder.prototype.hs = decodeSerializableElement$default;
  ProtobufTaggedDecoder.prototype.ur = decodeSerializableValue;
  ProtobufTaggedDecoder.prototype.js = decodeSequentially;
  ProtobufTaggedDecoder.prototype.ls = decodeCollectionSize;
  ProtobufDecoder.prototype.hs = decodeSerializableElement$default;
  ProtobufDecoder.prototype.js = decodeSequentially;
  ProtobufDecoder.prototype.ls = decodeCollectionSize;
  RepeatedDecoder.prototype.hs = decodeSerializableElement$default;
  RepeatedDecoder.prototype.js = decodeSequentially;
  RepeatedDecoder.prototype.ls = decodeCollectionSize;
  MapEntryReader.prototype.hs = decodeSerializableElement$default;
  MapEntryReader.prototype.js = decodeSequentially;
  MapEntryReader.prototype.ls = decodeCollectionSize;
  ProtobufTaggedEncoder.prototype.mt = encodeNotNullMark;
  ProtobufTaggedEncoder.prototype.nt = beginCollection;
  ProtobufTaggedEncoder.prototype.jt = encodeSerializableValue;
  ProtobufTaggedEncoder.prototype.lt = encodeNullableSerializableValue;
  ProtobufTaggedEncoder.prototype.ot = shouldEncodeElementDefault;
  ProtobufEncoder.prototype.mt = encodeNotNullMark;
  ProtobufEncoder.prototype.lt = encodeNullableSerializableValue;
  NestedRepeatedEncoder.prototype.mt = encodeNotNullMark;
  NestedRepeatedEncoder.prototype.lt = encodeNullableSerializableValue;
  RepeatedEncoder.prototype.mt = encodeNotNullMark;
  RepeatedEncoder.prototype.lt = encodeNullableSerializableValue;
  ObjectEncoder.prototype.mt = encodeNotNullMark;
  ObjectEncoder.prototype.lt = encodeNullableSerializableValue;
  MapRepeatedEncoder.prototype.mt = encodeNotNullMark;
  MapRepeatedEncoder.prototype.lt = encodeNullableSerializableValue;
  //endregion
  //region block: init
  SIZE_DELIMITED = 2;
  i32 = 5;
  VARINT = 0;
  i64 = 1;
  MISSING_TAG = new Long(19500, 0);
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Default_getInstance;
  _.$_$.b = ProtoNumber;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-protobuf-js-ir.js.map
