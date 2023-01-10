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
  var THROW_CCE = kotlin_kotlin.$_$.db;
  var getStringHashCode = kotlin_kotlin.$_$.b8;
  var Annotation = kotlin_kotlin.$_$.qa;
  var Unit_getInstance = kotlin_kotlin.$_$.n3;
  var Long = kotlin_kotlin.$_$.ab;
  var Enum = kotlin_kotlin.$_$.wa;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.c3;
  var toLong = kotlin_kotlin.$_$.z8;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w2;
  var SerializationException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var captureStack = kotlin_kotlin.$_$.n7;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.w;
  var get_lastIndex = kotlin_kotlin.$_$.w5;
  var ensureNotNull = kotlin_kotlin.$_$.pb;
  var primitiveArrayConcat = kotlin_kotlin.$_$.e;
  var MapLikeSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j2;
  var MapEntrySerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w;
  var Map = kotlin_kotlin.$_$.h4;
  var isInterface = kotlin_kotlin.$_$.m8;
  var LinkedHashSetSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i2;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.v4;
  var mapCapacity = kotlin_kotlin.$_$.d6;
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
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.vb;
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
  var toRawBits = kotlin_kotlin.$_$.yb;
  var toRawBits_0 = kotlin_kotlin.$_$.zb;
  var encodeToByteArray = kotlin_kotlin.$_$.m9;
  var takeHighestOneBit = kotlin_kotlin.$_$.xb;
  var arrayCopy = kotlin_kotlin.$_$.r4;
  var countLeadingZeroBits = kotlin_kotlin.$_$.mb;
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
    this.q1g_1 = encodeDefaults;
    this.r1g_1 = serializersModule;
  }
  ProtoBuf.prototype.vp = function () {
    return this.r1g_1;
  };
  ProtoBuf.prototype.tp = function (serializer, value) {
    var output = new ByteArrayOutput();
    var encoder = new ProtobufEncoder(this, new ProtobufWriter(output), serializer.bp());
    encoder.lt(serializer, value);
    return output.a1h();
  };
  ProtoBuf.prototype.up = function (deserializer, bytes) {
    var input = ByteArrayInput_init_$Create$(bytes, 0, 2, null);
    var decoder = new ProtobufDecoder(this, new ProtobufReader(input), deserializer.bp());
    return decoder.wr(deserializer);
  };
  ProtoBuf.$metadata$ = classMeta('ProtoBuf', [BinaryFormat]);
  function ProtoNumber(number) {
    this.k1h_1 = number;
  }
  ProtoNumber.prototype.equals = function (other) {
    if (!(other instanceof ProtoNumber))
      return false;
    var tmp0_other_with_cast = other instanceof ProtoNumber ? other : THROW_CCE();
    if (!(this.k1h_1 === tmp0_other_with_cast.k1h_1))
      return false;
    return true;
  };
  ProtoNumber.prototype.hashCode = function () {
    return imul(getStringHashCode('number'), 127) ^ this.k1h_1;
  };
  ProtoNumber.prototype.toString = function () {
    return '@kotlinx.serialization.protobuf.ProtoNumber(number=' + this.k1h_1 + ')';
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
    this.n1h_1 = signature;
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
    return _this__u8e3s4.za(toLong(IntCompanionObject_getInstance().y_1)).bb();
  }
  function get_integerType(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4.za(new Long(0, 2147483647));
    return tmp0_subject.equals(ProtoIntegerType_DEFAULT_getInstance().n1h_1) ? ProtoIntegerType_DEFAULT_getInstance() : tmp0_subject.equals(ProtoIntegerType_SIGNED_getInstance().n1h_1) ? ProtoIntegerType_SIGNED_getInstance() : ProtoIntegerType_FIXED_getInstance();
  }
  function extractProtoId(descriptor, index, zeroBasedDefault) {
    var annotations = descriptor.fq(index);
    var inductionVariable = 0;
    var last = annotations.o() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var annotation = annotations.p(i);
        if (annotation instanceof ProtoNumber) {
          return annotation.k1h_1;
        }
      }
       while (inductionVariable <= last);
    return zeroBasedDefault ? index : index + 1 | 0;
  }
  function extractParameters(_this__u8e3s4, index) {
    var annotations = _this__u8e3s4.fq(index);
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
          protoId = annotation.k1h_1;
        } else {
          if (annotation instanceof ProtoType) {
            format = annotation.o1h_1;
          }
        }
      }
       while (inductionVariable <= last);
    var tmp$ret$0;
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtoDesc' call
    var tmp0_ProtoDesc = protoId;
    var tmp1_ProtoDesc = format;
    tmp$ret$0 = tmp1_ProtoDesc.n1h_1.ej(toLong(tmp0_ProtoDesc));
    return tmp$ret$0;
  }
  function ProtoDesc(protoId, type) {
    return type.n1h_1.ej(toLong(protoId));
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
    $this.h1h_1 = map;
  }
  function getIndexByTag($this, protoTag) {
    var array = $this.g1h_1;
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
    var tmp0_getOrElse = ensureNotNull($this.h1h_1);
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
    var tag = $this.r1h();
    var tmp;
    if (tag.equals(get_MISSING_TAG())) {
      tmp = $this.e1h_1.x1h();
    } else {
      tmp = $this.e1h_1.w1h();
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
    var mapEntrySerial = MapEntrySerializer(serializer.pw_1, serializer.qw_1);
    var tmp0_safe_receiver = (!(previousValue == null) ? isInterface(previousValue, Map) : false) ? previousValue : null;
    var oldSet = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.v();
    var setOfEntries = (new LinkedHashSetSerializer(mapEntrySerial)).ev($this, oldSet);
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
    if (!descriptor.jq(index)) {
      var elementDescriptor = descriptor.gq(index);
      var kind = elementDescriptor.nq();
      if (equals(kind, MAP_getInstance()) ? true : equals(kind, LIST_getInstance())) {
        $this.i1h_1 = false;
        return true;
      } else if (elementDescriptor.aq()) {
        $this.i1h_1 = true;
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
    this.d1h_1 = proto;
    this.e1h_1 = reader;
    this.f1h_1 = descriptor;
    this.g1h_1 = null;
    this.h1h_1 = null;
    this.i1h_1 = false;
    var tmp = this;
    tmp.j1h_1 = new ElementMarker(this.f1h_1, ProtobufDecoder$readIfAbsent$ref(this));
    this.y1h(this.f1h_1);
  }
  ProtobufDecoder.prototype.z1h = function () {
    return this.e1h_1;
  };
  ProtobufDecoder.prototype.vp = function () {
    return this.d1h_1.vp();
  };
  ProtobufDecoder.prototype.y1h = function (descriptor) {
    var elements = descriptor.lq();
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
      this.g1h_1 = cache;
    } else {
      populateCacheMap(this, descriptor, elements);
    }
  };
  ProtobufDecoder.prototype.xr = function (descriptor) {
    var tmp0_subject = descriptor.nq();
    var tmp;
    if (equals(tmp0_subject, LIST_getInstance())) {
      var tag = this.r1h();
      var tmp_0;
      if ((equals(this.f1h_1.nq(), LIST_getInstance()) ? !tag.equals(get_MISSING_TAG()) : false) ? !equals(this.f1h_1, descriptor) : false) {
        var reader = makeDelimited(this.e1h_1, tag);
        reader.a1i();
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.protobuf.internal.ProtoDesc' call
        var tmp0_ProtoDesc = ProtoIntegerType_DEFAULT_getInstance();
        tmp$ret$0 = tmp0_ProtoDesc.n1h_1.ej(new Long(1, 0));
        tmp_0 = new RepeatedDecoder(this.d1h_1, reader, tmp$ret$0, descriptor);
      } else {
        tmp_0 = new RepeatedDecoder(this.d1h_1, this.e1h_1, tag, descriptor);
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
        var tag_0 = this.r1h();
        if (tag_0.equals(get_MISSING_TAG()) ? equals(this.f1h_1, descriptor) : false)
          return this;
        return new ProtobufDecoder(this.d1h_1, makeDelimited(this.e1h_1, tag_0), descriptor);
      } else {
        if (equals(tmp0_subject, MAP_getInstance())) {
          tmp = new MapEntryReader(this.d1h_1, makeDelimitedForced(this.e1h_1, this.r1h()), this.r1h(), descriptor);
        } else {
          throw SerializationException_init_$Create$('Primitives are not supported at top-level');
        }
      }
    }
    return tmp;
  };
  ProtobufDecoder.prototype.yr = function (descriptor) {
  };
  ProtobufDecoder.prototype.b1i = function (tag) {
    var value = this.c1i(tag);
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
  ProtobufDecoder.prototype.d1i = function (tag) {
    return toByte(this.c1i(tag));
  };
  ProtobufDecoder.prototype.e1i = function (tag) {
    return toShort(this.c1i(tag));
  };
  ProtobufDecoder.prototype.c1i = function (tag) {
    var tmp;
    if (tag.equals(get_MISSING_TAG())) {
      tmp = this.e1h_1.g1i();
    } else {
      tmp = this.e1h_1.f1i(get_integerType(tag));
    }
    return tmp;
  };
  ProtobufDecoder.prototype.h1i = function (tag) {
    var tmp;
    if (tag.equals(get_MISSING_TAG())) {
      tmp = this.e1h_1.j1i();
    } else {
      tmp = this.e1h_1.i1i(get_integerType(tag));
    }
    return tmp;
  };
  ProtobufDecoder.prototype.k1i = function (tag) {
    var tmp;
    if (tag.equals(get_MISSING_TAG())) {
      tmp = this.e1h_1.m1i();
    } else {
      tmp = this.e1h_1.l1i();
    }
    return tmp;
  };
  ProtobufDecoder.prototype.n1i = function (tag) {
    var tmp;
    if (tag.equals(get_MISSING_TAG())) {
      tmp = this.e1h_1.p1i();
    } else {
      tmp = this.e1h_1.o1i();
    }
    return tmp;
  };
  ProtobufDecoder.prototype.q1i = function (tag) {
    return numberToChar(this.c1i(tag));
  };
  ProtobufDecoder.prototype.r1i = function (tag) {
    var tmp;
    if (tag.equals(get_MISSING_TAG())) {
      tmp = this.e1h_1.t1i();
    } else {
      tmp = this.e1h_1.s1i();
    }
    return tmp;
  };
  ProtobufDecoder.prototype.wr = function (deserializer) {
    return this.vr(deserializer, null);
  };
  ProtobufDecoder.prototype.vr = function (deserializer, previousValue) {
    var tmp;
    if (deserializer instanceof MapLikeSerializer) {
      tmp = deserializeMap(this, isInterface(deserializer, DeserializationStrategy) ? deserializer : THROW_CCE(), previousValue);
    } else {
      if (equals(deserializer.bp(), ByteArraySerializer().bp())) {
        var tmp_0 = deserializeByteArray(this, (previousValue == null ? true : isByteArray(previousValue)) ? previousValue : THROW_CCE());
        tmp = isObject(tmp_0) ? tmp_0 : THROW_CCE();
      } else {
        if (deserializer instanceof AbstractCollectionSerializer) {
          tmp = (deserializer instanceof AbstractCollectionSerializer ? deserializer : THROW_CCE()).ev(this, previousValue);
        } else {
          tmp = deserializer.dp(this);
        }
      }
    }
    return tmp;
  };
  ProtobufDecoder.prototype.i13 = function (_this__u8e3s4, index) {
    return extractParameters(_this__u8e3s4, index);
  };
  ProtobufDecoder.prototype.ms = function (descriptor) {
    while (true) {
      var protoId = this.e1h_1.a1i();
      if (protoId === -1) {
        return this.j1h_1.px();
      }
      var index = getIndexByTag(this, protoId);
      if (index === -1) {
        this.e1h_1.u1i();
      } else {
        this.j1h_1.ox(index);
        return index;
      }
    }
  };
  ProtobufDecoder.prototype.jr = function () {
    return !this.i1h_1;
  };
  ProtobufDecoder.$metadata$ = classMeta('ProtobufDecoder', undefined, undefined, undefined, undefined, ProtobufTaggedDecoder.prototype);
  function decodeListIndexNoTag($this) {
    var size = $this.l1j_1.n8();
    var tmp0_this = $this;
    tmp0_this.k1j_1 = tmp0_this.k1j_1 + 1 | 0;
    var idx = tmp0_this.k1j_1;
    if (toLong(idx).equals(size)) {
      Companion_getInstance();
      return -1;
    }
    return idx;
  }
  function decodeTaggedListIndex($this) {
    var tmp;
    if ($this.k1j_1 === -1) {
      tmp = $this.e1h_1.t1h_1;
    } else {
      tmp = $this.e1h_1.a1i();
    }
    var protoId = tmp;
    var tmp_0;
    var tmp$ret$0;
    // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
    var tmp0__get_protoId__2ceqo8 = $this.l1j_1;
    tmp$ret$0 = tmp0__get_protoId__2ceqo8.za(toLong(IntCompanionObject_getInstance().y_1)).bb();
    if (protoId === tmp$ret$0) {
      var tmp0_this = $this;
      tmp0_this.k1j_1 = tmp0_this.k1j_1 + 1 | 0;
      tmp_0 = tmp0_this.k1j_1;
    } else {
      $this.e1h_1.m1j();
      Companion_getInstance();
      tmp_0 = -1;
    }
    return tmp_0;
  }
  function RepeatedDecoder(proto, decoder, currentTag, descriptor) {
    ProtobufDecoder.call(this, proto, decoder, descriptor);
    this.k1j_1 = -1;
    var tmp = this;
    var tmp_0;
    if (currentTag.equals(get_MISSING_TAG())) {
      var length = this.e1h_1.g1i();
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
      tmp_0 = toLong(length).n8();
    } else {
      tmp_0 = currentTag;
    }
    tmp.l1j_1 = tmp_0;
  }
  RepeatedDecoder.prototype.ms = function (descriptor) {
    if (this.l1j_1.p8(new Long(0, 0)) > 0) {
      return decodeTaggedListIndex(this);
    }
    return decodeListIndexNoTag(this);
  };
  RepeatedDecoder.prototype.i13 = function (_this__u8e3s4, index) {
    if (this.l1j_1.p8(new Long(0, 0)) > 0)
      return this.l1j_1;
    return get_MISSING_TAG();
  };
  RepeatedDecoder.$metadata$ = classMeta('RepeatedDecoder', undefined, undefined, undefined, undefined, ProtobufDecoder.prototype);
  function makeDelimited(decoder, parentTag) {
    var tagless = parentTag.equals(get_MISSING_TAG());
    var input = tagless ? decoder.o1j() : decoder.n1j();
    return new ProtobufReader(input);
  }
  function MapEntryReader(proto, decoder, parentTag, descriptor) {
    ProtobufDecoder.call(this, proto, decoder, descriptor);
    this.y1j_1 = parentTag;
  }
  MapEntryReader.prototype.i13 = function (_this__u8e3s4, index) {
    var tmp;
    if ((index % 2 | 0) === 0) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.protobuf.internal.ProtoDesc' call
      var tmp0_ProtoDesc = get_integerType(this.y1j_1);
      tmp$ret$0 = tmp0_ProtoDesc.n1h_1.ej(new Long(1, 0));
      tmp = tmp$ret$0;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.protobuf.internal.ProtoDesc' call
      var tmp1_ProtoDesc = get_integerType(this.y1j_1);
      tmp$ret$1 = tmp1_ProtoDesc.n1h_1.ej(new Long(2, 0));
      tmp = tmp$ret$1;
    }
    return tmp;
  };
  MapEntryReader.$metadata$ = classMeta('MapEntryReader', undefined, undefined, undefined, undefined, ProtobufDecoder.prototype);
  function makeDelimitedForced(decoder, parentTag) {
    var tagless = parentTag.equals(get_MISSING_TAG());
    var input = tagless ? decoder.o1j() : decoder.n1j();
    return new ProtobufReader(input);
  }
  function serializeByteArray($this, value) {
    var tag = $this.y1i();
    if (tag.equals(get_MISSING_TAG())) {
      $this.w1g_1.b1k(value);
    } else {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
      tmp$ret$0 = tag.za(toLong(IntCompanionObject_getInstance().y_1)).bb();
      $this.w1g_1.a1k(value, tmp$ret$0);
    }
  }
  function serializeMap($this, serializer, value) {
    var casted = serializer instanceof MapLikeSerializer ? serializer : THROW_CCE();
    var mapEntrySerial = MapEntrySerializer(casted.pw_1, casted.qw_1);
    var tmp = SetSerializer(mapEntrySerial);
    tmp.cp($this, ((!(value == null) ? isInterface(value, Map) : false) ? value : THROW_CCE()).v());
  }
  function ProtobufEncoder(proto, writer, descriptor) {
    ProtobufTaggedEncoder.call(this);
    this.v1g_1 = proto;
    this.w1g_1 = writer;
    this.x1g_1 = descriptor;
  }
  ProtobufEncoder.prototype.vp = function () {
    return this.v1g_1.vp();
  };
  ProtobufEncoder.prototype.qt = function (descriptor, index) {
    return this.v1g_1.q1g_1;
  };
  ProtobufEncoder.prototype.pt = function (descriptor, collectionSize) {
    var tmp0_subject = descriptor.nq();
    var tmp;
    if (equals(tmp0_subject, LIST_getInstance())) {
      var tag = this.r1h();
      if (tag.equals(get_MISSING_TAG())) {
        this.w1g_1.d1k(collectionSize);
      }
      var tmp_0;
      if ((equals(this.x1g_1.nq(), LIST_getInstance()) ? !tag.equals(get_MISSING_TAG()) : false) ? !equals(this.x1g_1, descriptor) : false) {
        tmp_0 = NestedRepeatedEncoder_init_$Create$(this.v1g_1, this.w1g_1, tag, descriptor, null, 16, null);
      } else {
        tmp_0 = new RepeatedEncoder(this.v1g_1, this.w1g_1, tag, descriptor);
      }
      tmp = tmp_0;
    } else if (equals(tmp0_subject, MAP_getInstance())) {
      tmp = new MapRepeatedEncoder(this.v1g_1, this.c1k(), this.w1g_1, descriptor);
    } else {
      throw SerializationException_init_$Create$('This serial kind is not supported as collection: ' + descriptor);
    }
    return tmp;
  };
  ProtobufEncoder.prototype.xr = function (descriptor) {
    var tmp0_subject = descriptor.nq();
    var tmp;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp = new RepeatedEncoder(this.v1g_1, this.w1g_1, this.r1h(), descriptor);
    } else {
      var tmp_0;
      if (equals(tmp0_subject, CLASS_getInstance()) ? true : equals(tmp0_subject, OBJECT_getInstance())) {
        tmp_0 = true;
      } else {
        tmp_0 = tmp0_subject instanceof PolymorphicKind;
      }
      if (tmp_0) {
        var tag = this.r1h();
        var tmp_1;
        if (tag.equals(get_MISSING_TAG()) ? equals(descriptor, this.x1g_1) : false) {
          tmp_1 = this;
        } else {
          var tmp_2 = this.r1h();
          tmp_1 = ObjectEncoder_init_$Create$(this.v1g_1, tmp_2, this.w1g_1, null, descriptor, 8, null);
        }
        tmp = tmp_1;
      } else {
        if (equals(tmp0_subject, MAP_getInstance())) {
          tmp = new MapRepeatedEncoder(this.v1g_1, this.r1h(), this.w1g_1, descriptor);
        } else {
          throw SerializationException_init_$Create$('This serial kind is not supported as structure: ' + descriptor);
        }
      }
    }
    return tmp;
  };
  ProtobufEncoder.prototype.e1k = function (tag, value) {
    if (tag.equals(get_MISSING_TAG())) {
      this.w1g_1.d1k(value);
    } else {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
      tmp$ret$0 = tag.za(toLong(IntCompanionObject_getInstance().y_1)).bb();
      this.w1g_1.f1k(value, tmp$ret$0, get_integerType(tag));
    }
  };
  ProtobufEncoder.prototype.g1k = function (tag, value) {
    return this.e1k(tag, value);
  };
  ProtobufEncoder.prototype.h1k = function (tag, value) {
    return this.e1k(tag, value);
  };
  ProtobufEncoder.prototype.i1k = function (tag, value) {
    return this.e1k(tag, value ? 1 : 0);
  };
  ProtobufEncoder.prototype.j1k = function (tag, value) {
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    tmp$ret$0 = Char__toInt_impl_vasixd(value);
    return this.e1k(tag, tmp$ret$0);
  };
  ProtobufEncoder.prototype.k1k = function (tag, value) {
    if (tag.equals(get_MISSING_TAG())) {
      this.w1g_1.m1k(value);
    } else {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
      tmp$ret$0 = tag.za(toLong(IntCompanionObject_getInstance().y_1)).bb();
      this.w1g_1.l1k(value, tmp$ret$0, get_integerType(tag));
    }
  };
  ProtobufEncoder.prototype.n1k = function (tag, value) {
    if (tag.equals(get_MISSING_TAG())) {
      this.w1g_1.p1k(value);
    } else {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
      tmp$ret$0 = tag.za(toLong(IntCompanionObject_getInstance().y_1)).bb();
      this.w1g_1.o1k(value, tmp$ret$0);
    }
  };
  ProtobufEncoder.prototype.q1k = function (tag, value) {
    if (tag.equals(get_MISSING_TAG())) {
      this.w1g_1.s1k(value);
    } else {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
      tmp$ret$0 = tag.za(toLong(IntCompanionObject_getInstance().y_1)).bb();
      this.w1g_1.r1k(value, tmp$ret$0);
    }
  };
  ProtobufEncoder.prototype.t1k = function (tag, value) {
    if (tag.equals(get_MISSING_TAG())) {
      this.w1g_1.v1k(value);
    } else {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
      tmp$ret$0 = tag.za(toLong(IntCompanionObject_getInstance().y_1)).bb();
      this.w1g_1.u1k(value, tmp$ret$0);
    }
  };
  ProtobufEncoder.prototype.i13 = function (_this__u8e3s4, index) {
    return extractParameters(_this__u8e3s4, index);
  };
  ProtobufEncoder.prototype.lt = function (serializer, value) {
    var tmp;
    if (serializer instanceof MapLikeSerializer) {
      serializeMap(this, isInterface(serializer, SerializationStrategy) ? serializer : THROW_CCE(), value);
      tmp = Unit_getInstance();
    } else {
      if (equals(serializer.bp(), ByteArraySerializer().bp())) {
        serializeByteArray(this, (!(value == null) ? isByteArray(value) : false) ? value : THROW_CCE());
        tmp = Unit_getInstance();
      } else {
        serializer.cp(this, value);
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
    this.h1l_1 = writer;
    this.i1l_1 = curTag;
    this.j1l_1 = stream;
  }
  NestedRepeatedEncoder.prototype.i13 = function (_this__u8e3s4, index) {
    var tmp$ret$0;
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtoDesc' call
    var tmp0_ProtoDesc = ProtoIntegerType_DEFAULT_getInstance();
    tmp$ret$0 = tmp0_ProtoDesc.n1h_1.ej(new Long(1, 0));
    return tmp$ret$0;
  };
  NestedRepeatedEncoder.prototype.a1l = function (descriptor) {
    var tmp$ret$0;
    // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
    var tmp0__get_protoId__2ceqo8 = this.i1l_1;
    tmp$ret$0 = tmp0__get_protoId__2ceqo8.za(toLong(IntCompanionObject_getInstance().y_1)).bb();
    this.h1l_1.k1l(this.j1l_1, tmp$ret$0);
  };
  NestedRepeatedEncoder.$metadata$ = classMeta('NestedRepeatedEncoder', undefined, undefined, undefined, undefined, ProtobufEncoder.prototype);
  function RepeatedEncoder(proto, writer, curTag, descriptor) {
    ProtobufEncoder.call(this, proto, writer, descriptor);
    this.r1l_1 = curTag;
  }
  RepeatedEncoder.prototype.i13 = function (_this__u8e3s4, index) {
    return this.r1l_1;
  };
  RepeatedEncoder.$metadata$ = classMeta('RepeatedEncoder', undefined, undefined, undefined, undefined, ProtobufEncoder.prototype);
  function MapRepeatedEncoder(proto, parentTag, parentWriter, descriptor) {
    ObjectEncoder_init_$Init$(proto, parentTag, parentWriter, null, descriptor, 8, null, this);
  }
  MapRepeatedEncoder.prototype.i13 = function (_this__u8e3s4, index) {
    var tmp;
    if ((index % 2 | 0) === 0) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.protobuf.internal.ProtoDesc' call
      var tmp0_ProtoDesc = get_integerType(this.h1m_1);
      tmp$ret$0 = tmp0_ProtoDesc.n1h_1.ej(new Long(1, 0));
      tmp = tmp$ret$0;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.protobuf.internal.ProtoDesc' call
      var tmp1_ProtoDesc = get_integerType(this.h1m_1);
      tmp$ret$1 = tmp1_ProtoDesc.n1h_1.ej(new Long(2, 0));
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
    this.h1m_1 = parentTag;
    this.i1m_1 = parentWriter;
    this.j1m_1 = stream;
  }
  ObjectEncoder.prototype.a1l = function (descriptor) {
    if (!this.h1m_1.equals(get_MISSING_TAG())) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.protobuf.internal.protoId' call
      var tmp0__get_protoId__2ceqo8 = this.h1m_1;
      tmp$ret$0 = tmp0__get_protoId__2ceqo8.za(toLong(IntCompanionObject_getInstance().y_1)).bb();
      this.i1m_1.k1l(this.j1m_1, tmp$ret$0);
    } else {
      this.i1m_1.k1m(this.j1m_1);
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
        var byte = $this.s1h_1.n1a() & 255;
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
        var byte = toLong($this.s1h_1.n1a() & 255);
        result = result.ej(byte.qb(imul(i, 8)));
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
        tmp = $this.s1h_1.o1m(false).bb();
        break;
      case 1:
        tmp = decodeSignedVarintInt($this, $this.s1h_1);
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
        tmp = $this.s1h_1.o1m(false);
        break;
      case 1:
        tmp = decodeSignedVarintLong($this, $this.s1h_1);
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
    var raw = input.p1m();
    var temp = (raw << 31 >> 31 ^ raw) >> 1;
    return temp ^ raw & -2147483648;
  }
  function decodeSignedVarintLong($this, input) {
    var raw = input.o1m(false);
    var temp = raw.qb(63).dj(63).pb(raw).dj(1);
    return temp.pb(raw.za(new Long(0, -2147483648)));
  }
  function ProtobufReader(input) {
    this.s1h_1 = input;
    this.t1h_1 = -1;
    this.u1h_1 = -1;
    this.v1h_1 = false;
  }
  ProtobufReader.prototype.a1i = function () {
    if (this.v1h_1) {
      this.v1h_1 = false;
      return this.t1h_1;
    }
    var header = this.s1h_1.o1m(true).bb();
    var tmp;
    if (header === -1) {
      this.t1h_1 = -1;
      this.u1h_1 = -1;
      tmp = -1;
    } else {
      this.t1h_1 = header >>> 3 | 0;
      this.u1h_1 = header & 7;
      tmp = this.t1h_1;
    }
    return tmp;
  };
  ProtobufReader.prototype.m1j = function () {
    this.v1h_1 = true;
  };
  ProtobufReader.prototype.u1i = function () {
    var tmp0_subject = this.u1h_1;
    if (tmp0_subject === get_VARINT()) {
      this.f1i(ProtoIntegerType_DEFAULT_getInstance());
    } else if (tmp0_subject === get_i64()) {
      this.i1i(ProtoIntegerType_FIXED_getInstance());
    } else if (tmp0_subject === get_SIZE_DELIMITED()) {
      this.w1h();
    } else if (tmp0_subject === get_i32()) {
      this.f1i(ProtoIntegerType_FIXED_getInstance());
    } else
      throw new ProtobufDecodingException('Unsupported start group or end group wire type: ' + this.u1h_1);
  };
  ProtobufReader.prototype.w1h = function () {
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufReader.assertWireType' call
    var tmp0_assertWireType = get_SIZE_DELIMITED();
    if (!(this.u1h_1 === tmp0_assertWireType))
      throw new ProtobufDecodingException('Expected wire type ' + tmp0_assertWireType + ', but found ' + this.u1h_1);
    return this.x1h();
  };
  ProtobufReader.prototype.x1h = function () {
    var length = decode32$default(this, null, 2, null);
    checkLength(this, length);
    return this.s1h_1.q1m(length);
  };
  ProtobufReader.prototype.n1j = function () {
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufReader.assertWireType' call
    var tmp0_assertWireType = get_SIZE_DELIMITED();
    if (!(this.u1h_1 === tmp0_assertWireType))
      throw new ProtobufDecodingException('Expected wire type ' + tmp0_assertWireType + ', but found ' + this.u1h_1);
    return this.o1j();
  };
  ProtobufReader.prototype.o1j = function () {
    var length = decode32$default(this, null, 2, null);
    checkLength(this, length);
    return this.s1h_1.r1m(length);
  };
  ProtobufReader.prototype.f1i = function (format) {
    var wireType = format.equals(ProtoIntegerType_FIXED_getInstance()) ? get_i32() : get_VARINT();
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufReader.assertWireType' call
    if (!(this.u1h_1 === wireType))
      throw new ProtobufDecodingException('Expected wire type ' + wireType + ', but found ' + this.u1h_1);
    return decode32(this, format);
  };
  ProtobufReader.prototype.g1i = function () {
    return decode32$default(this, null, 2, null);
  };
  ProtobufReader.prototype.i1i = function (format) {
    var wireType = format.equals(ProtoIntegerType_FIXED_getInstance()) ? get_i64() : get_VARINT();
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufReader.assertWireType' call
    if (!(this.u1h_1 === wireType))
      throw new ProtobufDecodingException('Expected wire type ' + wireType + ', but found ' + this.u1h_1);
    return decode64(this, format);
  };
  ProtobufReader.prototype.j1i = function () {
    return decode64(this, ProtoIntegerType_DEFAULT_getInstance());
  };
  ProtobufReader.prototype.l1i = function () {
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufReader.assertWireType' call
    var tmp0_assertWireType = get_i32();
    if (!(this.u1h_1 === tmp0_assertWireType))
      throw new ProtobufDecodingException('Expected wire type ' + tmp0_assertWireType + ', but found ' + this.u1h_1);
    var tmp$ret$0;
    // Inline function 'kotlin.fromBits' call
    var tmp1_fromBits = FloatCompanionObject_getInstance();
    var tmp2_fromBits = readIntLittleEndian(this);
    tmp$ret$0 = floatFromBits(tmp2_fromBits);
    return tmp$ret$0;
  };
  ProtobufReader.prototype.m1i = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.fromBits' call
    var tmp0_fromBits = FloatCompanionObject_getInstance();
    var tmp1_fromBits = readIntLittleEndian(this);
    tmp$ret$0 = floatFromBits(tmp1_fromBits);
    return tmp$ret$0;
  };
  ProtobufReader.prototype.o1i = function () {
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufReader.assertWireType' call
    var tmp0_assertWireType = get_i64();
    if (!(this.u1h_1 === tmp0_assertWireType))
      throw new ProtobufDecodingException('Expected wire type ' + tmp0_assertWireType + ', but found ' + this.u1h_1);
    var tmp$ret$0;
    // Inline function 'kotlin.fromBits' call
    var tmp1_fromBits = DoubleCompanionObject_getInstance();
    var tmp2_fromBits = readLongLittleEndian(this);
    tmp$ret$0 = doubleFromBits(tmp2_fromBits);
    return tmp$ret$0;
  };
  ProtobufReader.prototype.p1i = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.fromBits' call
    var tmp0_fromBits = DoubleCompanionObject_getInstance();
    var tmp1_fromBits = readLongLittleEndian(this);
    tmp$ret$0 = doubleFromBits(tmp1_fromBits);
    return tmp$ret$0;
  };
  ProtobufReader.prototype.s1i = function () {
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufReader.assertWireType' call
    var tmp0_assertWireType = get_SIZE_DELIMITED();
    if (!(this.u1h_1 === tmp0_assertWireType))
      throw new ProtobufDecodingException('Expected wire type ' + tmp0_assertWireType + ', but found ' + this.u1h_1);
    var length = decode32$default(this, null, 2, null);
    checkLength(this, length);
    return this.s1h_1.s1m(length);
  };
  ProtobufReader.prototype.t1i = function () {
    var length = decode32$default(this, null, 2, null);
    checkLength(this, length);
    return this.s1h_1.s1m(length);
  };
  ProtobufReader.$metadata$ = classMeta('ProtobufReader');
  function get_MISSING_TAG() {
    return MISSING_TAG;
  }
  var MISSING_TAG;
  function expand($this) {
    $this.p1h_1 = copyOf($this.p1h_1, imul($this.p1h_1.length, 2));
  }
  function ProtobufTaggedBase() {
    this.p1h_1 = longArray(8);
    this.q1h_1 = -1;
  }
  ProtobufTaggedBase.prototype.c1k = function () {
    return this.p1h_1[this.q1h_1];
  };
  ProtobufTaggedBase.prototype.r1h = function () {
    return this.q1h_1 === -1 ? new Long(19500, 0) : this.p1h_1[this.q1h_1];
  };
  ProtobufTaggedBase.prototype.y1i = function () {
    var tmp;
    if (this.q1h_1 === -1) {
      tmp = new Long(19500, 0);
    } else {
      var tmp_0 = this.p1h_1;
      var tmp0_this = this;
      var tmp1 = tmp0_this.q1h_1;
      tmp0_this.q1h_1 = tmp1 - 1 | 0;
      tmp = tmp_0[tmp1];
    }
    return tmp;
  };
  ProtobufTaggedBase.prototype.z1i = function (tag) {
    if (tag.equals(new Long(19500, 0)))
      return Unit_getInstance();
    var tmp0_this = this;
    tmp0_this.q1h_1 = tmp0_this.q1h_1 + 1 | 0;
    var idx = tmp0_this.q1h_1;
    if (this.q1h_1 >= this.p1h_1.length) {
      expand(this);
    }
    this.p1h_1[idx] = tag;
  };
  ProtobufTaggedBase.prototype.c14 = function () {
    if (this.q1h_1 >= 0) {
      var tmp = this.p1h_1;
      var tmp0_this = this;
      var tmp1 = tmp0_this.q1h_1;
      tmp0_this.q1h_1 = tmp1 - 1 | 0;
      return tmp[tmp1];
    }
    throw SerializationException_init_$Create$('No tag in stack for requested element');
  };
  ProtobufTaggedBase.prototype.a1j = function (tag, block) {
    this.z1i(tag);
    return block();
  };
  ProtobufTaggedBase.$metadata$ = classMeta('ProtobufTaggedBase');
  function ProtobufTaggedDecoder() {
    ProtobufTaggedBase.call(this);
  }
  ProtobufTaggedDecoder.prototype.x1i = function (tag, inlineDescriptor) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufTaggedDecoder.decodeTaggedInline.<anonymous>' call
    this.z1i(tag);
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  ProtobufTaggedDecoder.prototype.jr = function () {
    return true;
  };
  ProtobufTaggedDecoder.prototype.kr = function () {
    return null;
  };
  ProtobufTaggedDecoder.prototype.lr = function () {
    return this.b1i(this.y1i());
  };
  ProtobufTaggedDecoder.prototype.mr = function () {
    return this.d1i(this.y1i());
  };
  ProtobufTaggedDecoder.prototype.nr = function () {
    return this.e1i(this.y1i());
  };
  ProtobufTaggedDecoder.prototype.or = function () {
    return this.c1i(this.y1i());
  };
  ProtobufTaggedDecoder.prototype.pr = function () {
    return this.h1i(this.y1i());
  };
  ProtobufTaggedDecoder.prototype.qr = function () {
    return this.k1i(this.y1i());
  };
  ProtobufTaggedDecoder.prototype.rr = function () {
    return this.n1i(this.y1i());
  };
  ProtobufTaggedDecoder.prototype.sr = function () {
    return this.q1i(this.y1i());
  };
  ProtobufTaggedDecoder.prototype.tr = function () {
    return this.r1i(this.y1i());
  };
  ProtobufTaggedDecoder.prototype.xr = function (descriptor) {
    return this;
  };
  ProtobufTaggedDecoder.prototype.yr = function (descriptor) {
  };
  ProtobufTaggedDecoder.prototype.zr = function (descriptor, index) {
    return this.b1i(this.i13(descriptor, index));
  };
  ProtobufTaggedDecoder.prototype.as = function (descriptor, index) {
    return this.d1i(this.i13(descriptor, index));
  };
  ProtobufTaggedDecoder.prototype.bs = function (descriptor, index) {
    return this.e1i(this.i13(descriptor, index));
  };
  ProtobufTaggedDecoder.prototype.cs = function (descriptor, index) {
    return this.c1i(this.i13(descriptor, index));
  };
  ProtobufTaggedDecoder.prototype.ds = function (descriptor, index) {
    return this.h1i(this.i13(descriptor, index));
  };
  ProtobufTaggedDecoder.prototype.es = function (descriptor, index) {
    return this.k1i(this.i13(descriptor, index));
  };
  ProtobufTaggedDecoder.prototype.fs = function (descriptor, index) {
    return this.n1i(this.i13(descriptor, index));
  };
  ProtobufTaggedDecoder.prototype.gs = function (descriptor, index) {
    return this.q1i(this.i13(descriptor, index));
  };
  ProtobufTaggedDecoder.prototype.hs = function (descriptor, index) {
    return this.r1i(this.i13(descriptor, index));
  };
  ProtobufTaggedDecoder.prototype.is = function (descriptor, index, deserializer, previousValue) {
    var tmp$ret$1;
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufTaggedBase.tagBlock' call
    var tmp0_tagBlock = this.i13(descriptor, index);
    this.z1i(tmp0_tagBlock);
    var tmp$ret$0;
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufTaggedDecoder.decodeSerializableElement.<anonymous>' call
    tmp$ret$0 = this.vr(deserializer, previousValue);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  ProtobufTaggedDecoder.prototype.ks = function (descriptor, index, deserializer, previousValue) {
    var tmp$ret$1;
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufTaggedBase.tagBlock' call
    var tmp0_tagBlock = this.i13(descriptor, index);
    this.z1i(tmp0_tagBlock);
    var tmp$ret$0;
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufTaggedDecoder.decodeNullableSerializableElement.<anonymous>' call
    var tmp;
    if (this.jr()) {
      tmp = this.vr(deserializer, previousValue);
    } else {
      tmp = this.kr();
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  ProtobufTaggedDecoder.prototype.ur = function (inlineDescriptor) {
    return this.x1i(this.c14(), inlineDescriptor);
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
    this.y1k_1 = NullableMode_NOT_NULL_getInstance();
  }
  ProtobufTaggedEncoder.prototype.z1k = function (tag, inlineDescriptor) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.protobuf.internal.ProtobufTaggedEncoder.encodeTaggedInline.<anonymous>' call
    this.z1i(tag);
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  ProtobufTaggedEncoder.prototype.qs = function () {
    if (!this.y1k_1.equals(NullableMode_ACCEPTABLE_getInstance())) {
      var tmp0_subject = this.y1k_1;
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
  ProtobufTaggedEncoder.prototype.rs = function (value) {
    this.i1k(this.y1i(), value);
  };
  ProtobufTaggedEncoder.prototype.ss = function (value) {
    this.g1k(this.y1i(), value);
  };
  ProtobufTaggedEncoder.prototype.ts = function (value) {
    this.h1k(this.y1i(), value);
  };
  ProtobufTaggedEncoder.prototype.us = function (value) {
    this.e1k(this.y1i(), value);
  };
  ProtobufTaggedEncoder.prototype.vs = function (value) {
    this.k1k(this.y1i(), value);
  };
  ProtobufTaggedEncoder.prototype.ws = function (value) {
    this.n1k(this.y1i(), value);
  };
  ProtobufTaggedEncoder.prototype.xs = function (value) {
    this.q1k(this.y1i(), value);
  };
  ProtobufTaggedEncoder.prototype.ys = function (value) {
    this.j1k(this.y1i(), value);
  };
  ProtobufTaggedEncoder.prototype.zs = function (value) {
    this.t1k(this.y1i(), value);
  };
  ProtobufTaggedEncoder.prototype.yr = function (descriptor) {
    if (this.q1h_1 >= 0) {
      this.c14();
    }
    this.a1l(descriptor);
  };
  ProtobufTaggedEncoder.prototype.a1l = function (descriptor) {
  };
  ProtobufTaggedEncoder.prototype.bt = function (descriptor, index, value) {
    return this.i1k(this.i13(descriptor, index), value);
  };
  ProtobufTaggedEncoder.prototype.ct = function (descriptor, index, value) {
    return this.g1k(this.i13(descriptor, index), value);
  };
  ProtobufTaggedEncoder.prototype.dt = function (descriptor, index, value) {
    return this.h1k(this.i13(descriptor, index), value);
  };
  ProtobufTaggedEncoder.prototype.et = function (descriptor, index, value) {
    return this.e1k(this.i13(descriptor, index), value);
  };
  ProtobufTaggedEncoder.prototype.ft = function (descriptor, index, value) {
    return this.k1k(this.i13(descriptor, index), value);
  };
  ProtobufTaggedEncoder.prototype.gt = function (descriptor, index, value) {
    return this.n1k(this.i13(descriptor, index), value);
  };
  ProtobufTaggedEncoder.prototype.ht = function (descriptor, index, value) {
    return this.q1k(this.i13(descriptor, index), value);
  };
  ProtobufTaggedEncoder.prototype.it = function (descriptor, index, value) {
    return this.j1k(this.i13(descriptor, index), value);
  };
  ProtobufTaggedEncoder.prototype.jt = function (descriptor, index, value) {
    return this.t1k(this.i13(descriptor, index), value);
  };
  ProtobufTaggedEncoder.prototype.kt = function (descriptor, index, serializer, value) {
    this.y1k_1 = NullableMode_NOT_NULL_getInstance();
    this.z1i(this.i13(descriptor, index));
    this.lt(serializer, value);
  };
  ProtobufTaggedEncoder.prototype.mt = function (descriptor, index, serializer, value) {
    var elementKind = descriptor.gq(index).nq();
    var tmp = this;
    var tmp_0;
    if (descriptor.jq(index)) {
      tmp_0 = NullableMode_OPTIONAL_getInstance();
    } else if (equals(elementKind, MAP_getInstance()) ? true : equals(elementKind, LIST_getInstance())) {
      tmp_0 = NullableMode_COLLECTION_getInstance();
    } else {
      tmp_0 = NullableMode_ACCEPTABLE_getInstance();
    }
    tmp.y1k_1 = tmp_0;
    this.z1i(this.i13(descriptor, index));
    this.nt(serializer, value);
  };
  ProtobufTaggedEncoder.prototype.at = function (inlineDescriptor) {
    return this.z1k(this.c14(), inlineDescriptor);
  };
  ProtobufTaggedEncoder.$metadata$ = classMeta('ProtobufTaggedEncoder', [Encoder, CompositeEncoder], undefined, undefined, undefined, ProtobufTaggedBase.prototype);
  function encode32(_this__u8e3s4, $this, number, format) {
    var tmp0_subject = format;
    var tmp0 = tmp0_subject.q1_1;
    switch (tmp0) {
      case 2:
        $this.z1j_1.d1k(reverseBytes_1(number));
        ;
        break;
      case 0:
        _this__u8e3s4.t1m(toLong(number));
        ;
        break;
      case 1:
        _this__u8e3s4.u1m(number << 1 ^ number >> 31);
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
        $this.z1j_1.m1k(reverseBytes_2(number));
        ;
        break;
      case 0:
        _this__u8e3s4.t1m(number);
        ;
        break;
      case 1:
        _this__u8e3s4.t1m(number.qb(1).pb(number.dj(63)));
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
    this.z1j_1 = out;
  }
  ProtobufWriter.prototype.a1k = function (bytes, tag) {
    var tmp = tag << 3 | get_SIZE_DELIMITED();
    encode32$default(this.z1j_1, this, tmp, null, 4, null);
    this.b1k(bytes);
  };
  ProtobufWriter.prototype.b1k = function (bytes) {
    var tmp = bytes.length;
    encode32$default(this.z1j_1, this, tmp, null, 4, null);
    this.z1j_1.v1m(bytes);
  };
  ProtobufWriter.prototype.k1l = function (output, tag) {
    var tmp = tag << 3 | get_SIZE_DELIMITED();
    encode32$default(this.z1j_1, this, tmp, null, 4, null);
    this.k1m(output);
  };
  ProtobufWriter.prototype.k1m = function (output) {
    var tmp = output.w1m();
    encode32$default(this.z1j_1, this, tmp, null, 4, null);
    this.z1j_1.x1m(output);
  };
  ProtobufWriter.prototype.f1k = function (value, tag, format) {
    var wireType = format.equals(ProtoIntegerType_FIXED_getInstance()) ? get_i32() : get_VARINT();
    var tmp = tag << 3 | wireType;
    encode32$default(this.z1j_1, this, tmp, null, 4, null);
    encode32(this.z1j_1, this, value, format);
  };
  ProtobufWriter.prototype.d1k = function (value) {
    encode32$default(this.z1j_1, this, value, null, 4, null);
  };
  ProtobufWriter.prototype.l1k = function (value, tag, format) {
    var wireType = format.equals(ProtoIntegerType_FIXED_getInstance()) ? get_i64() : get_VARINT();
    var tmp = tag << 3 | wireType;
    encode32$default(this.z1j_1, this, tmp, null, 4, null);
    encode64(this.z1j_1, this, value, format);
  };
  ProtobufWriter.prototype.m1k = function (value) {
    encode64$default(this.z1j_1, this, value, null, 4, null);
  };
  ProtobufWriter.prototype.u1k = function (value, tag) {
    var bytes = encodeToByteArray(value);
    this.a1k(bytes, tag);
  };
  ProtobufWriter.prototype.v1k = function (value) {
    var bytes = encodeToByteArray(value);
    this.b1k(bytes);
  };
  ProtobufWriter.prototype.r1k = function (value, tag) {
    var tmp = tag << 3 | get_i64();
    encode32$default(this.z1j_1, this, tmp, null, 4, null);
    this.z1j_1.m1k(reverseBytes_0(value, this));
  };
  ProtobufWriter.prototype.s1k = function (value) {
    this.z1j_1.m1k(reverseBytes_0(value, this));
  };
  ProtobufWriter.prototype.o1k = function (value, tag) {
    var tmp = tag << 3 | get_i32();
    encode32$default(this.z1j_1, this, tmp, null, 4, null);
    this.z1j_1.d1k(reverseBytes(value, this));
  };
  ProtobufWriter.prototype.p1k = function (value) {
    this.z1j_1.d1k(reverseBytes(value, this));
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
    tmp.y1m_1 = tmp_2;
  }
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function ensureCapacity($this, elementsToAppend) {
    if (($this.z1g_1 + elementsToAppend | 0) <= $this.y1g_1.length) {
      return Unit_getInstance();
    }
    var newArray = new Int8Array(takeHighestOneBit($this.z1g_1 + elementsToAppend | 0) << 1);
    var tmp$ret$4;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = $this.y1g_1;
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
    $this.y1g_1 = newArray;
  }
  function encodeVarint($this, value, length) {
    var current = value;
    var inductionVariable = 0;
    if (inductionVariable < length)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        $this.y1g_1[$this.z1g_1 + i | 0] = current.za(new Long(127, 0)).ej(new Long(128, 0)).oa();
        current = current.hb(7);
      }
       while (inductionVariable < length);
    $this.y1g_1[$this.z1g_1 + length | 0] = current.oa();
    var tmp1_this = $this;
    tmp1_this.z1g_1 = tmp1_this.z1g_1 + (length + 1 | 0) | 0;
  }
  function varIntLength($this, value) {
    return Companion_getInstance_0().y1m_1[countLeadingZeroBits(value)];
  }
  function ByteArrayOutput() {
    Companion_getInstance_0();
    this.y1g_1 = new Int8Array(32);
    this.z1g_1 = 0;
  }
  ByteArrayOutput.prototype.w1m = function () {
    return this.z1g_1;
  };
  ByteArrayOutput.prototype.a1h = function () {
    var newArray = new Int8Array(this.z1g_1);
    var tmp$ret$4;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = this.y1g_1;
    var tmp1_copyInto = this.z1g_1;
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
  ByteArrayOutput.prototype.v1m = function (buffer) {
    var count = buffer.length;
    if (count === 0) {
      return Unit_getInstance();
    }
    ensureCapacity(this, count);
    var tmp$ret$4;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = this.y1g_1;
    var tmp1_copyInto = this.z1g_1;
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
    tmp0_this.z1g_1 = tmp0_this.z1g_1 + count | 0;
  };
  ByteArrayOutput.prototype.x1m = function (output) {
    var count = output.w1m();
    ensureCapacity(this, count);
    var tmp$ret$4;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = output.y1g_1;
    var tmp1_copyInto = this.y1g_1;
    var tmp2_copyInto = this.z1g_1;
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
    tmp0_this.z1g_1 = tmp0_this.z1g_1 + count | 0;
  };
  ByteArrayOutput.prototype.d1k = function (intValue) {
    ensureCapacity(this, 4);
    var inductionVariable = 3;
    if (0 <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var tmp = this.y1g_1;
        var tmp1_this = this;
        var tmp2 = tmp1_this.z1g_1;
        tmp1_this.z1g_1 = tmp2 + 1 | 0;
        tmp[tmp2] = toByte(intValue >> imul(i, 8));
      }
       while (0 <= inductionVariable);
  };
  ByteArrayOutput.prototype.m1k = function (longValue) {
    ensureCapacity(this, 8);
    var inductionVariable = 7;
    if (0 <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var tmp = this.y1g_1;
        var tmp1_this = this;
        var tmp2 = tmp1_this.z1g_1;
        tmp1_this.z1g_1 = tmp2 + 1 | 0;
        tmp[tmp2] = longValue.dj(imul(i, 8)).oa();
      }
       while (0 <= inductionVariable);
  };
  ByteArrayOutput.prototype.u1m = function (value) {
    ensureCapacity(this, 5);
    if ((value & -128) === 0) {
      var tmp = this.y1g_1;
      var tmp0_this = this;
      var tmp1 = tmp0_this.z1g_1;
      tmp0_this.z1g_1 = tmp1 + 1 | 0;
      tmp[tmp1] = toByte(value);
      return Unit_getInstance();
    }
    var length = varIntLength(this, toLong(value));
    encodeVarint(this, toLong(value), length);
  };
  ByteArrayOutput.prototype.t1m = function (value) {
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
    return $this.m1m_1 - $this.n1m_1 | 0;
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
      var byte = $this.n1a();
      result = result.ej(toLong(byte & 127).qb(shift));
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
      var byte = $this.n1a();
      result = result | (byte & 127) << shift;
      if ((byte & 128) === 0) {
        return result;
      }
      shift = shift + 7 | 0;
    }
    throw SerializationException_init_$Create$('Input stream is malformed: Varint too long (exceeded 32 bits)');
  }
  function ByteArrayInput(array, endIndex) {
    this.l1m_1 = array;
    this.m1m_1 = endIndex;
    this.n1m_1 = 0;
  }
  ByteArrayInput.prototype.r1m = function (size) {
    ensureEnoughBytes(this, size);
    var result = new ByteArrayInput(this.l1m_1, this.n1m_1 + size | 0);
    result.n1m_1 = this.n1m_1;
    var tmp0_this = this;
    tmp0_this.n1m_1 = tmp0_this.n1m_1 + size | 0;
    return result;
  };
  ByteArrayInput.prototype.n1a = function () {
    var tmp;
    if (this.n1m_1 < this.m1m_1) {
      var tmp_0 = this.l1m_1;
      var tmp0_this = this;
      var tmp1 = tmp0_this.n1m_1;
      tmp0_this.n1m_1 = tmp1 + 1 | 0;
      tmp = tmp_0[tmp1] & 255;
    } else {
      tmp = -1;
    }
    return tmp;
  };
  ByteArrayInput.prototype.q1m = function (bytesCount) {
    ensureEnoughBytes(this, bytesCount);
    var b = new Int8Array(bytesCount);
    var length = b.length;
    var copied = (this.m1m_1 - this.n1m_1 | 0) < length ? this.m1m_1 - this.n1m_1 | 0 : length;
    var tmp$ret$4;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = this.l1m_1;
    var tmp1_copyInto = this.n1m_1;
    var tmp2_copyInto = this.n1m_1 + copied | 0;
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
    tmp0_this.n1m_1 = tmp0_this.n1m_1 + copied | 0;
    return b;
  };
  ByteArrayInput.prototype.s1m = function (length) {
    var tmp = this.l1m_1;
    var tmp_0 = this.n1m_1;
    var tmp_1 = this.n1m_1 + length | 0;
    var result = decodeToString$default(tmp, tmp_0, tmp_1, false, 4, null);
    var tmp0_this = this;
    tmp0_this.n1m_1 = tmp0_this.n1m_1 + length | 0;
    return result;
  };
  ByteArrayInput.prototype.p1m = function () {
    if (this.n1m_1 === this.m1m_1) {
      eof(this);
    }
    var currentPosition = this.n1m_1;
    var tmp = this.l1m_1;
    var tmp0 = currentPosition;
    currentPosition = tmp0 + 1 | 0;
    var result = tmp[tmp0];
    if (result >= 0) {
      this.n1m_1 = currentPosition;
      return result;
    } else if ((this.m1m_1 - this.n1m_1 | 0) > 1) {
      var tmp_0 = result;
      var tmp_1 = this.l1m_1;
      var tmp1 = currentPosition;
      currentPosition = tmp1 + 1 | 0;
      result = tmp_0 ^ tmp_1[tmp1] << 7;
      if (result < 0) {
        this.n1m_1 = currentPosition;
        return result ^ -128;
      }
    }
    return readVarint32SlowPath(this);
  };
  ByteArrayInput.prototype.o1m = function (eofAllowed) {
    if (this.n1m_1 === this.m1m_1) {
      if (eofAllowed)
        return new Long(-1, -1);
      else {
        eof(this);
      }
    }
    var currentPosition = this.n1m_1;
    var tmp = this.l1m_1;
    var tmp0 = currentPosition;
    currentPosition = tmp0 + 1 | 0;
    var result = toLong(tmp[tmp0]);
    if (result.p8(new Long(0, 0)) >= 0) {
      this.n1m_1 = currentPosition;
      return result;
    } else if ((this.m1m_1 - this.n1m_1 | 0) > 1) {
      var tmp_0 = result;
      var tmp_1 = this.l1m_1;
      var tmp1 = currentPosition;
      currentPosition = tmp1 + 1 | 0;
      result = tmp_0.pb(toLong(tmp_1[tmp1]).qb(7));
      if (result.p8(new Long(0, 0)) < 0) {
        this.n1m_1 = currentPosition;
        return result.pb(new Long(-128, -1));
      }
    }
    return readVarint64SlowPath(this);
  };
  ByteArrayInput.$metadata$ = classMeta('ByteArrayInput');
  function reverseBytes_1(_this__u8e3s4) {
    return reverseBytes_3(toShort(_this__u8e3s4 & 65535)) << 16 | reverseBytes_3(toShort(_this__u8e3s4 >>> 16 | 0)) & 65535;
  }
  function reverseBytes_2(_this__u8e3s4) {
    return toLong(reverseBytes_1(_this__u8e3s4.za(new Long(-1, 0)).bb())).qb(32).ej(toLong(reverseBytes_1(_this__u8e3s4.hb(32).bb())).za(new Long(-1, 0)));
  }
  function reverseBytes_3(_this__u8e3s4) {
    return toShort((_this__u8e3s4 & 255) << 8 | ((_this__u8e3s4 & 65535) >>> 8 | 0));
  }
  //region block: post-declaration
  ProtobufTaggedDecoder.prototype.js = decodeSerializableElement$default;
  ProtobufTaggedDecoder.prototype.wr = decodeSerializableValue;
  ProtobufTaggedDecoder.prototype.ls = decodeSequentially;
  ProtobufTaggedDecoder.prototype.ns = decodeCollectionSize;
  ProtobufDecoder.prototype.js = decodeSerializableElement$default;
  ProtobufDecoder.prototype.ls = decodeSequentially;
  ProtobufDecoder.prototype.ns = decodeCollectionSize;
  RepeatedDecoder.prototype.js = decodeSerializableElement$default;
  RepeatedDecoder.prototype.ls = decodeSequentially;
  RepeatedDecoder.prototype.ns = decodeCollectionSize;
  MapEntryReader.prototype.js = decodeSerializableElement$default;
  MapEntryReader.prototype.ls = decodeSequentially;
  MapEntryReader.prototype.ns = decodeCollectionSize;
  ProtobufTaggedEncoder.prototype.ot = encodeNotNullMark;
  ProtobufTaggedEncoder.prototype.pt = beginCollection;
  ProtobufTaggedEncoder.prototype.lt = encodeSerializableValue;
  ProtobufTaggedEncoder.prototype.nt = encodeNullableSerializableValue;
  ProtobufTaggedEncoder.prototype.qt = shouldEncodeElementDefault;
  ProtobufEncoder.prototype.ot = encodeNotNullMark;
  ProtobufEncoder.prototype.nt = encodeNullableSerializableValue;
  NestedRepeatedEncoder.prototype.ot = encodeNotNullMark;
  NestedRepeatedEncoder.prototype.nt = encodeNullableSerializableValue;
  RepeatedEncoder.prototype.ot = encodeNotNullMark;
  RepeatedEncoder.prototype.nt = encodeNullableSerializableValue;
  ObjectEncoder.prototype.ot = encodeNotNullMark;
  ObjectEncoder.prototype.nt = encodeNullableSerializableValue;
  MapRepeatedEncoder.prototype.ot = encodeNotNullMark;
  MapRepeatedEncoder.prototype.nt = encodeNullableSerializableValue;
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
