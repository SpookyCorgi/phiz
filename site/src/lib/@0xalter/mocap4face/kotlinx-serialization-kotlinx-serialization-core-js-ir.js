(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-core-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-core-js-ir'.");
    }
    root['kotlinx-serialization-kotlinx-serialization-core-js-ir'] = factory(typeof this['kotlinx-serialization-kotlinx-serialization-core-js-ir'] === 'undefined' ? {} : this['kotlinx-serialization-kotlinx-serialization-core-js-ir'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var interfaceMeta = kotlin_kotlin.$_$.d8;
  var StringCompanionObject_getInstance = kotlin_kotlin.$_$.e3;
  var Unit_getInstance = kotlin_kotlin.$_$.n3;
  var emptyList = kotlin_kotlin.$_$.l5;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.f;
  var lazy = kotlin_kotlin.$_$.tb;
  var classMeta = kotlin_kotlin.$_$.t7;
  var getKClassFromExpression = kotlin_kotlin.$_$.c;
  var KProperty1 = kotlin_kotlin.$_$.k9;
  var getPropertyCallableRef = kotlin_kotlin.$_$.a8;
  var captureStack = kotlin_kotlin.$_$.n7;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.s1;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.u1;
  var IllegalArgumentException = kotlin_kotlin.$_$.ya;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.v4;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.t;
  var toString = kotlin_kotlin.$_$.b9;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.t1;
  var THROW_CCE = kotlin_kotlin.$_$.db;
  var isInterface = kotlin_kotlin.$_$.m8;
  var KClass = kotlin_kotlin.$_$.i9;
  var copyToArray = kotlin_kotlin.$_$.j5;
  var Triple = kotlin_kotlin.$_$.eb;
  var getKClass = kotlin_kotlin.$_$.d;
  var Pair = kotlin_kotlin.$_$.cb;
  var Entry = kotlin_kotlin.$_$.g4;
  var LinkedHashMap = kotlin_kotlin.$_$.c4;
  var MutableMap = kotlin_kotlin.$_$.n4;
  var Map = kotlin_kotlin.$_$.h4;
  var HashMap = kotlin_kotlin.$_$.y3;
  var LinkedHashSet = kotlin_kotlin.$_$.d4;
  var MutableSet = kotlin_kotlin.$_$.o4;
  var Set = kotlin_kotlin.$_$.p4;
  var HashSet = kotlin_kotlin.$_$.z3;
  var ArrayList = kotlin_kotlin.$_$.w3;
  var MutableList = kotlin_kotlin.$_$.l4;
  var List = kotlin_kotlin.$_$.f4;
  var Collection = kotlin_kotlin.$_$.x3;
  var equals = kotlin_kotlin.$_$.w7;
  var getStringHashCode = kotlin_kotlin.$_$.b8;
  var Iterator = kotlin_kotlin.$_$.b4;
  var Iterable = kotlin_kotlin.$_$.a4;
  var isBlank = kotlin_kotlin.$_$.o9;
  var toList = kotlin_kotlin.$_$.z6;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.u;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.a1;
  var toHashSet = kotlin_kotlin.$_$.w6;
  var toBooleanArray = kotlin_kotlin.$_$.t6;
  var withIndex = kotlin_kotlin.$_$.f7;
  var to = kotlin_kotlin.$_$.bc;
  var toMap = kotlin_kotlin.$_$.b7;
  var lazy_0 = kotlin_kotlin.$_$.ub;
  var contentEquals = kotlin_kotlin.$_$.w4;
  var until = kotlin_kotlin.$_$.h9;
  var joinToString$default = kotlin_kotlin.$_$.h;
  var objectMeta = kotlin_kotlin.$_$.x8;
  var ensureNotNull = kotlin_kotlin.$_$.pb;
  var Long = kotlin_kotlin.$_$.ab;
  var Char = kotlin_kotlin.$_$.ra;
  var isObject = kotlin_kotlin.$_$.p8;
  var toIntOrNull = kotlin_kotlin.$_$.ca;
  var hashCode = kotlin_kotlin.$_$.c8;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.w1;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.v;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.b1;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.f1;
  var LinkedHashSet_init_$Create$_0 = kotlin_kotlin.$_$.g1;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.x;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.y;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.d1;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.e1;
  var isArray = kotlin_kotlin.$_$.e8;
  var arrayIterator = kotlin_kotlin.$_$.l7;
  var asList = kotlin_kotlin.$_$.s4;
  var step = kotlin_kotlin.$_$.g9;
  var getValue = kotlin_kotlin.$_$.r5;
  var longArray = kotlin_kotlin.$_$.s8;
  var Companion_getInstance = kotlin_kotlin.$_$.i3;
  var get_lastIndex = kotlin_kotlin.$_$.x5;
  var countTrailingZeroBits = kotlin_kotlin.$_$.ob;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.c3;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.q2;
  var UInt = kotlin_kotlin.$_$.hb;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.p2;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.t2;
  var ULong = kotlin_kotlin.$_$.ib;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.s2;
  var ByteCompanionObject_getInstance = kotlin_kotlin.$_$.z2;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.j2;
  var UByte = kotlin_kotlin.$_$.gb;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.i2;
  var ShortCompanionObject_getInstance = kotlin_kotlin.$_$.d3;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.w2;
  var UShort = kotlin_kotlin.$_$.jb;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.v2;
  var HashSet_init_$Create$_1 = kotlin_kotlin.$_$.z;
  var contentHashCode = kotlin_kotlin.$_$.z4;
  var fillArrayVal = kotlin_kotlin.$_$.x7;
  var booleanArray = kotlin_kotlin.$_$.m7;
  var emptyMap = kotlin_kotlin.$_$.m5;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.h3;
  var isCharArray = kotlin_kotlin.$_$.h8;
  var charArray = kotlin_kotlin.$_$.p7;
  var DoubleCompanionObject_getInstance = kotlin_kotlin.$_$.a3;
  var isDoubleArray = kotlin_kotlin.$_$.j8;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.b3;
  var isFloatArray = kotlin_kotlin.$_$.k8;
  var isLongArray = kotlin_kotlin.$_$.n8;
  var isIntArray = kotlin_kotlin.$_$.l8;
  var isShortArray = kotlin_kotlin.$_$.q8;
  var isByteArray = kotlin_kotlin.$_$.g8;
  var BooleanCompanionObject_getInstance = kotlin_kotlin.$_$.y2;
  var isBooleanArray = kotlin_kotlin.$_$.f8;
  var coerceAtLeast = kotlin_kotlin.$_$.e9;
  var copyOf = kotlin_kotlin.$_$.d5;
  var copyOf_0 = kotlin_kotlin.$_$.f5;
  var copyOf_1 = kotlin_kotlin.$_$.g5;
  var copyOf_2 = kotlin_kotlin.$_$.b5;
  var copyOf_3 = kotlin_kotlin.$_$.i5;
  var copyOf_4 = kotlin_kotlin.$_$.a5;
  var copyOf_5 = kotlin_kotlin.$_$.e5;
  var copyOf_6 = kotlin_kotlin.$_$.c5;
  var Unit = kotlin_kotlin.$_$.kb;
  var trimIndent = kotlin_kotlin.$_$.oa;
  var equals_0 = kotlin_kotlin.$_$.n9;
  var charSequenceLength = kotlin_kotlin.$_$.r7;
  var charSequenceGet = kotlin_kotlin.$_$.q7;
  var toString_0 = kotlin_kotlin.$_$.h2;
  var titlecase = kotlin_kotlin.$_$.v9;
  var isLowerCase = kotlin_kotlin.$_$.q9;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.g3;
  var mapOf = kotlin_kotlin.$_$.f6;
  var lastOrNull = kotlin_kotlin.$_$.z5;
  var get_lastIndex_0 = kotlin_kotlin.$_$.y5;
  var Annotation = kotlin_kotlin.$_$.qa;
  var get_indices = kotlin_kotlin.$_$.u5;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.x1;
  var get_indices_0 = kotlin_kotlin.$_$.t5;
  var get_js = kotlin_kotlin.$_$.r8;
  var findAssociatedObject = kotlin_kotlin.$_$.b;
  //endregion
  //region block: pre-declaration
  PolymorphicSerializer.prototype = Object.create(AbstractPolymorphicSerializer.prototype);
  PolymorphicSerializer.prototype.constructor = PolymorphicSerializer;
  SealedClassSerializer.prototype = Object.create(AbstractPolymorphicSerializer.prototype);
  SealedClassSerializer.prototype.constructor = SealedClassSerializer;
  SerializationException.prototype = Object.create(IllegalArgumentException.prototype);
  SerializationException.prototype.constructor = SerializationException;
  UnknownFieldException.prototype = Object.create(SerializationException.prototype);
  UnknownFieldException.prototype.constructor = UnknownFieldException;
  MissingFieldException.prototype = Object.create(SerializationException.prototype);
  MissingFieldException.prototype.constructor = MissingFieldException;
  function get_isNullable() {
    return false;
  }
  function get_isInline() {
    return false;
  }
  function get_annotations() {
    return emptyList();
  }
  ENUM.prototype = Object.create(SerialKind.prototype);
  ENUM.prototype.constructor = ENUM;
  CONTEXTUAL.prototype = Object.create(SerialKind.prototype);
  CONTEXTUAL.prototype.constructor = CONTEXTUAL;
  PrimitiveKind.prototype = Object.create(SerialKind.prototype);
  PrimitiveKind.prototype.constructor = PrimitiveKind;
  BOOLEAN.prototype = Object.create(PrimitiveKind.prototype);
  BOOLEAN.prototype.constructor = BOOLEAN;
  BYTE.prototype = Object.create(PrimitiveKind.prototype);
  BYTE.prototype.constructor = BYTE;
  CHAR.prototype = Object.create(PrimitiveKind.prototype);
  CHAR.prototype.constructor = CHAR;
  SHORT.prototype = Object.create(PrimitiveKind.prototype);
  SHORT.prototype.constructor = SHORT;
  INT.prototype = Object.create(PrimitiveKind.prototype);
  INT.prototype.constructor = INT;
  LONG.prototype = Object.create(PrimitiveKind.prototype);
  LONG.prototype.constructor = LONG;
  FLOAT.prototype = Object.create(PrimitiveKind.prototype);
  FLOAT.prototype.constructor = FLOAT;
  DOUBLE.prototype = Object.create(PrimitiveKind.prototype);
  DOUBLE.prototype.constructor = DOUBLE;
  STRING.prototype = Object.create(PrimitiveKind.prototype);
  STRING.prototype.constructor = STRING;
  StructureKind.prototype = Object.create(SerialKind.prototype);
  StructureKind.prototype.constructor = StructureKind;
  CLASS.prototype = Object.create(StructureKind.prototype);
  CLASS.prototype.constructor = CLASS;
  LIST.prototype = Object.create(StructureKind.prototype);
  LIST.prototype.constructor = LIST;
  MAP.prototype = Object.create(StructureKind.prototype);
  MAP.prototype.constructor = MAP;
  OBJECT.prototype = Object.create(StructureKind.prototype);
  OBJECT.prototype.constructor = OBJECT;
  PolymorphicKind.prototype = Object.create(SerialKind.prototype);
  PolymorphicKind.prototype.constructor = PolymorphicKind;
  SEALED.prototype = Object.create(PolymorphicKind.prototype);
  SEALED.prototype.constructor = SEALED;
  OPEN.prototype = Object.create(PolymorphicKind.prototype);
  OPEN.prototype.constructor = OPEN;
  function decodeSerializableValue(deserializer) {
    return deserializer.dp(this);
  }
  function decodeSequentially() {
    return false;
  }
  function decodeCollectionSize(descriptor) {
    return -1;
  }
  function decodeSerializableElement$default(descriptor, index, deserializer, previousValue, $mask0, $handler) {
    if (!(($mask0 & 8) === 0))
      previousValue = null;
    return $handler == null ? this.is(descriptor, index, deserializer, previousValue) : $handler(descriptor, index, deserializer, previousValue);
  }
  function encodeNotNullMark() {
  }
  function beginCollection(descriptor, collectionSize) {
    return this.xr(descriptor);
  }
  function encodeSerializableValue(serializer, value) {
    serializer.cp(this, value);
  }
  function encodeNullableSerializableValue(serializer, value) {
    var isNullabilitySupported = serializer.bp().aq();
    if (isNullabilitySupported) {
      return this.lt(isInterface(serializer, SerializationStrategy) ? serializer : THROW_CCE(), value);
    }
    if (value == null) {
      this.qs();
    } else {
      this.ot();
      this.lt(serializer, value);
    }
  }
  function shouldEncodeElementDefault(descriptor, index) {
    return true;
  }
  PrimitiveArrayDescriptor.prototype = Object.create(ListLikeDescriptor.prototype);
  PrimitiveArrayDescriptor.prototype.constructor = PrimitiveArrayDescriptor;
  ArrayListClassDesc.prototype = Object.create(ListLikeDescriptor.prototype);
  ArrayListClassDesc.prototype.constructor = ArrayListClassDesc;
  HashSetClassDesc.prototype = Object.create(ListLikeDescriptor.prototype);
  HashSetClassDesc.prototype.constructor = HashSetClassDesc;
  LinkedHashSetClassDesc.prototype = Object.create(ListLikeDescriptor.prototype);
  LinkedHashSetClassDesc.prototype.constructor = LinkedHashSetClassDesc;
  HashMapClassDesc.prototype = Object.create(MapLikeDescriptor.prototype);
  HashMapClassDesc.prototype.constructor = HashMapClassDesc;
  LinkedHashMapClassDesc.prototype = Object.create(MapLikeDescriptor.prototype);
  LinkedHashMapClassDesc.prototype.constructor = LinkedHashMapClassDesc;
  ArrayClassDesc.prototype = Object.create(ListLikeDescriptor.prototype);
  ArrayClassDesc.prototype.constructor = ArrayClassDesc;
  ListLikeSerializer.prototype = Object.create(AbstractCollectionSerializer.prototype);
  ListLikeSerializer.prototype.constructor = ListLikeSerializer;
  PrimitiveArraySerializer.prototype = Object.create(ListLikeSerializer.prototype);
  PrimitiveArraySerializer.prototype.constructor = PrimitiveArraySerializer;
  ArrayListSerializer.prototype = Object.create(ListLikeSerializer.prototype);
  ArrayListSerializer.prototype.constructor = ArrayListSerializer;
  HashSetSerializer.prototype = Object.create(ListLikeSerializer.prototype);
  HashSetSerializer.prototype.constructor = HashSetSerializer;
  LinkedHashSetSerializer.prototype = Object.create(ListLikeSerializer.prototype);
  LinkedHashSetSerializer.prototype.constructor = LinkedHashSetSerializer;
  MapLikeSerializer.prototype = Object.create(AbstractCollectionSerializer.prototype);
  MapLikeSerializer.prototype.constructor = MapLikeSerializer;
  HashMapSerializer.prototype = Object.create(MapLikeSerializer.prototype);
  HashMapSerializer.prototype.constructor = HashMapSerializer;
  LinkedHashMapSerializer.prototype = Object.create(MapLikeSerializer.prototype);
  LinkedHashMapSerializer.prototype.constructor = LinkedHashMapSerializer;
  ReferenceArraySerializer.prototype = Object.create(ListLikeSerializer.prototype);
  ReferenceArraySerializer.prototype.constructor = ReferenceArraySerializer;
  InlineClassDescriptor.prototype = Object.create(PluginGeneratedSerialDescriptor.prototype);
  InlineClassDescriptor.prototype.constructor = InlineClassDescriptor;
  function typeParametersSerializers() {
    return get_EMPTY_SERIALIZER_ARRAY();
  }
  CharArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  CharArraySerializer_0.prototype.constructor = CharArraySerializer_0;
  DoubleArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  DoubleArraySerializer_0.prototype.constructor = DoubleArraySerializer_0;
  FloatArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  FloatArraySerializer_0.prototype.constructor = FloatArraySerializer_0;
  LongArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  LongArraySerializer_0.prototype.constructor = LongArraySerializer_0;
  IntArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  IntArraySerializer_0.prototype.constructor = IntArraySerializer_0;
  ShortArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  ShortArraySerializer_0.prototype.constructor = ShortArraySerializer_0;
  ByteArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  ByteArraySerializer_0.prototype.constructor = ByteArraySerializer_0;
  BooleanArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  BooleanArraySerializer_0.prototype.constructor = BooleanArraySerializer_0;
  CharArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  CharArrayBuilder.prototype.constructor = CharArrayBuilder;
  DoubleArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  DoubleArrayBuilder.prototype.constructor = DoubleArrayBuilder;
  FloatArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  FloatArrayBuilder.prototype.constructor = FloatArrayBuilder;
  LongArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  LongArrayBuilder.prototype.constructor = LongArrayBuilder;
  IntArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  IntArrayBuilder.prototype.constructor = IntArrayBuilder;
  ShortArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  ShortArrayBuilder.prototype.constructor = ShortArrayBuilder;
  ByteArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  ByteArrayBuilder.prototype.constructor = ByteArrayBuilder;
  BooleanArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  BooleanArrayBuilder.prototype.constructor = BooleanArrayBuilder;
  NamedValueDecoder.prototype = Object.create(TaggedDecoder.prototype);
  NamedValueDecoder.prototype.constructor = NamedValueDecoder;
  MapEntrySerializer_0.prototype = Object.create(KeyValueSerializer.prototype);
  MapEntrySerializer_0.prototype.constructor = MapEntrySerializer_0;
  PairSerializer_0.prototype = Object.create(KeyValueSerializer.prototype);
  PairSerializer_0.prototype.constructor = PairSerializer_0;
  SerialModuleImpl.prototype = Object.create(SerializersModule.prototype);
  SerialModuleImpl.prototype.constructor = SerialModuleImpl;
  Argless.prototype = Object.create(ContextualProvider.prototype);
  Argless.prototype.constructor = Argless;
  WithTypeArguments.prototype = Object.create(ContextualProvider.prototype);
  WithTypeArguments.prototype.constructor = WithTypeArguments;
  function contextual(kClass, serializer) {
    return this.h15(kClass, SerializersModuleCollector$contextual$lambda(serializer));
  }
  //endregion
  function KSerializer() {
  }
  KSerializer.$metadata$ = interfaceMeta('KSerializer', [SerializationStrategy, DeserializationStrategy]);
  function DeserializationStrategy() {
  }
  DeserializationStrategy.$metadata$ = interfaceMeta('DeserializationStrategy');
  function SerializationStrategy() {
  }
  SerializationStrategy.$metadata$ = interfaceMeta('SerializationStrategy');
  function PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      var tmp = serializer_0(StringCompanionObject_getInstance()).bp();
      $this$buildSerialDescriptor.mp('type', tmp, null, false, 12, null);
      var tmp_0 = 'kotlinx.serialization.Polymorphic<' + this$0.np_1.kf() + '>';
      var tmp_1 = CONTEXTUAL_getInstance();
      var tmp_2 = buildSerialDescriptor$default(tmp_0, tmp_1, [], null, 12, null);
      $this$buildSerialDescriptor.mp('value', tmp_2, null, false, 12, null);
      $this$buildSerialDescriptor.gp_1 = this$0.op_1;
      return Unit_getInstance();
    };
  }
  function PolymorphicSerializer$descriptor$delegate$lambda(this$0) {
    return function () {
      var tmp = OPEN_getInstance();
      return withContext(buildSerialDescriptor$default('kotlinx.serialization.Polymorphic', tmp, [], PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0), 4, null), this$0.np_1);
    };
  }
  function PolymorphicSerializer(baseClass) {
    AbstractPolymorphicSerializer.call(this);
    this.np_1 = baseClass;
    this.op_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.pp_1 = lazy(tmp_0, PolymorphicSerializer$descriptor$delegate$lambda(this));
  }
  PolymorphicSerializer.prototype.qp = function () {
    return this.np_1;
  };
  PolymorphicSerializer.prototype.bp = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = descriptor$factory();
    tmp$ret$0 = this.pp_1.j2();
    return tmp$ret$0;
  };
  PolymorphicSerializer.prototype.toString = function () {
    return 'kotlinx.serialization.PolymorphicSerializer(baseClass: ' + this.np_1 + ')';
  };
  PolymorphicSerializer.$metadata$ = classMeta('PolymorphicSerializer', undefined, undefined, undefined, undefined, AbstractPolymorphicSerializer.prototype);
  function findPolymorphicSerializer(_this__u8e3s4, encoder, value) {
    var tmp0_elvis_lhs = _this__u8e3s4.sp(encoder, value);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered(getKClassFromExpression(value), _this__u8e3s4.qp());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function findPolymorphicSerializer_0(_this__u8e3s4, decoder, klassName) {
    var tmp0_elvis_lhs = _this__u8e3s4.rp(decoder, klassName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered_0(klassName, _this__u8e3s4.qp());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function descriptor$factory() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.bp();
    }, null);
  }
  function SealedClassSerializer() {
  }
  SealedClassSerializer.$metadata$ = classMeta('SealedClassSerializer', undefined, undefined, undefined, undefined, AbstractPolymorphicSerializer.prototype);
  function BinaryFormat() {
  }
  BinaryFormat.$metadata$ = interfaceMeta('BinaryFormat', [SerialFormat]);
  function StringFormat() {
  }
  StringFormat.$metadata$ = interfaceMeta('StringFormat', [SerialFormat]);
  function SerialFormat() {
  }
  SerialFormat.$metadata$ = interfaceMeta('SerialFormat');
  function UnknownFieldException_init_$Init$(index, $this) {
    UnknownFieldException.call($this, 'An unknown field for index ' + index);
    return $this;
  }
  function UnknownFieldException_init_$Create$(index) {
    var tmp = UnknownFieldException_init_$Init$(index, Object.create(UnknownFieldException.prototype));
    captureStack(tmp, UnknownFieldException_init_$Create$);
    return tmp;
  }
  function UnknownFieldException(message) {
    SerializationException_init_$Init$(message, this);
    captureStack(this, UnknownFieldException);
  }
  UnknownFieldException.$metadata$ = classMeta('UnknownFieldException', undefined, undefined, undefined, undefined, SerializationException.prototype);
  function SerializationException_init_$Init$(message, $this) {
    IllegalArgumentException_init_$Init$(message, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$(message) {
    var tmp = SerializationException_init_$Init$(message, Object.create(SerializationException.prototype));
    captureStack(tmp, SerializationException_init_$Create$);
    return tmp;
  }
  function SerializationException_init_$Init$_0(message, cause, $this) {
    IllegalArgumentException_init_$Init$_0(message, cause, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException() {
    captureStack(this, SerializationException);
  }
  SerializationException.$metadata$ = classMeta('SerializationException', undefined, undefined, undefined, undefined, IllegalArgumentException.prototype);
  function MissingFieldException_init_$Init$(fieldNames, serialName, $this) {
    MissingFieldException.call($this, fieldNames.o() === 1 ? "Field '" + fieldNames.p(0) + "' is required for type with serial name '" + serialName + "', but it was missing" : 'Fields ' + fieldNames + " are required for type with serial name '" + serialName + "', but they were missing", null);
    return $this;
  }
  function MissingFieldException_init_$Create$(fieldNames, serialName) {
    var tmp = MissingFieldException_init_$Init$(fieldNames, serialName, Object.create(MissingFieldException.prototype));
    captureStack(tmp, MissingFieldException_init_$Create$);
    return tmp;
  }
  function MissingFieldException(message, cause) {
    SerializationException_init_$Init$_0(message, cause, this);
    captureStack(this, MissingFieldException);
  }
  MissingFieldException.$metadata$ = classMeta('MissingFieldException', undefined, undefined, undefined, undefined, SerializationException.prototype);
  function serializer(_this__u8e3s4, type) {
    var tmp0_elvis_lhs = serializerByKTypeImpl(_this__u8e3s4, type, true);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      platformSpecificSerializerNotRegistered(kclass(type));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function serializerByKTypeImpl(_this__u8e3s4, type, failOnMissingTypeArgSerializer) {
    var rootClass = kclass(type);
    var isNullable = type.vf();
    var tmp$ret$4;
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = type.uf();
    var tmp$ret$3;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
    var tmp0_iterator = tmp0_map.l();
    while (tmp0_iterator.m()) {
      var item = tmp0_iterator.n();
      var tmp$ret$2;
      // Inline function 'kotlinx.serialization.serializerByKTypeImpl.<anonymous>' call
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlin.requireNotNull' call
        var tmp0_requireNotNull = item.xp_1;
        // Inline function 'kotlin.contracts.contract' call
        if (tmp0_requireNotNull == null) {
          var tmp$ret$0;
          // Inline function 'kotlinx.serialization.serializerByKTypeImpl.<anonymous>.<anonymous>' call
          tmp$ret$0 = 'Star projections in type arguments are not allowed, but had ' + type;
          var message = tmp$ret$0;
          throw IllegalArgumentException_init_$Create$(toString(message));
        } else {
          tmp$ret$1 = tmp0_requireNotNull;
          break $l$block;
        }
      }
      tmp$ret$2 = tmp$ret$1;
      tmp0_mapTo.g(tmp$ret$2);
    }
    tmp$ret$3 = tmp0_mapTo;
    tmp$ret$4 = tmp$ret$3;
    var typeArguments = tmp$ret$4;
    var tmp;
    if (typeArguments.d()) {
      var tmp0_elvis_lhs = serializerOrNull(rootClass);
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        tmp_0 = _this__u8e3s4.yp(rootClass, null, 2, null);
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      tmp = builtinSerializer(_this__u8e3s4, typeArguments, rootClass, failOnMissingTypeArgSerializer);
    }
    var tmp1_safe_receiver = tmp;
    var tmp_1;
    if (tmp1_safe_receiver == null) {
      tmp_1 = null;
    } else {
      var tmp$ret$5;
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp$ret$5 = (!(tmp1_safe_receiver == null) ? isInterface(tmp1_safe_receiver, KSerializer) : false) ? tmp1_safe_receiver : THROW_CCE();
      tmp_1 = tmp$ret$5;
    }
    var result = tmp_1;
    var tmp2_safe_receiver = result;
    return tmp2_safe_receiver == null ? null : nullable(tmp2_safe_receiver, isNullable);
  }
  function serializerOrNull(_this__u8e3s4) {
    var tmp0_elvis_lhs = compiledSerializerImpl(_this__u8e3s4);
    return tmp0_elvis_lhs == null ? builtinSerializerOrNull(_this__u8e3s4) : tmp0_elvis_lhs;
  }
  function builtinSerializer(_this__u8e3s4, typeArguments, rootClass, failOnMissingTypeArgSerializer) {
    var tmp;
    if (failOnMissingTypeArgSerializer) {
      var tmp$ret$1;
      // Inline function 'kotlin.collections.map' call
      var tmp$ret$0;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(typeArguments, 10));
      var tmp0_iterator = typeArguments.l();
      while (tmp0_iterator.m()) {
        var item = tmp0_iterator.n();
        tmp0_mapTo.g(serializer(_this__u8e3s4, item));
      }
      tmp$ret$0 = tmp0_mapTo;
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    } else {
      var tmp$ret$4;
      // Inline function 'kotlin.collections.map' call
      var tmp$ret$3;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo_0 = ArrayList_init_$Create$(collectionSizeOrDefault(typeArguments, 10));
      var tmp0_iterator_0 = typeArguments.l();
      while (tmp0_iterator_0.m()) {
        var item_0 = tmp0_iterator_0.n();
        var tmp$ret$2;
        // Inline function 'kotlinx.serialization.builtinSerializer.<anonymous>' call
        var tmp0_elvis_lhs = serializerOrNull_0(_this__u8e3s4, item_0);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return null;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$2 = tmp_0;
        tmp0_mapTo_0.g(tmp$ret$2);
      }
      tmp$ret$3 = tmp0_mapTo_0;
      tmp$ret$4 = tmp$ret$3;
      tmp = tmp$ret$4;
    }
    var serializers = tmp;
    var tmp0_subject = rootClass;
    var tmp_1;
    if (((tmp0_subject.equals(getKClass(Collection)) ? true : tmp0_subject.equals(getKClass(List))) ? true : tmp0_subject.equals(getKClass(MutableList))) ? true : tmp0_subject.equals(getKClass(ArrayList))) {
      tmp_1 = new ArrayListSerializer(serializers.p(0));
    } else if (tmp0_subject.equals(getKClass(HashSet))) {
      tmp_1 = new HashSetSerializer(serializers.p(0));
    } else if ((tmp0_subject.equals(getKClass(Set)) ? true : tmp0_subject.equals(getKClass(MutableSet))) ? true : tmp0_subject.equals(getKClass(LinkedHashSet))) {
      tmp_1 = new LinkedHashSetSerializer(serializers.p(0));
    } else if (tmp0_subject.equals(getKClass(HashMap))) {
      tmp_1 = new HashMapSerializer(serializers.p(0), serializers.p(1));
    } else if ((tmp0_subject.equals(getKClass(Map)) ? true : tmp0_subject.equals(getKClass(MutableMap))) ? true : tmp0_subject.equals(getKClass(LinkedHashMap))) {
      tmp_1 = new LinkedHashMapSerializer(serializers.p(0), serializers.p(1));
    } else if (tmp0_subject.equals(getKClass(Entry))) {
      tmp_1 = MapEntrySerializer(serializers.p(0), serializers.p(1));
    } else if (tmp0_subject.equals(getKClass(Pair))) {
      tmp_1 = PairSerializer(serializers.p(0), serializers.p(1));
    } else if (tmp0_subject.equals(getKClass(Triple))) {
      tmp_1 = TripleSerializer(serializers.p(0), serializers.p(1), serializers.p(2));
    } else {
      if (isReferenceArray(rootClass)) {
        var tmp$ret$5;
        // Inline function 'kotlinx.serialization.internal.cast' call
        var tmp_2 = typeArguments.p(0).tf();
        var tmp0_cast = ArraySerializer((!(tmp_2 == null) ? isInterface(tmp_2, KClass) : false) ? tmp_2 : THROW_CCE(), serializers.p(0));
        tmp$ret$5 = isInterface(tmp0_cast, KSerializer) ? tmp0_cast : THROW_CCE();
        return tmp$ret$5;
      }
      var tmp$ret$6;
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp$ret$6 = copyToArray(serializers);
      var args = tmp$ret$6;
      var tmp1_elvis_lhs = constructSerializerForGivenTypeArgs(rootClass, args.slice());
      tmp_1 = tmp1_elvis_lhs == null ? reflectiveOrContextual(_this__u8e3s4, rootClass, serializers) : tmp1_elvis_lhs;
    }
    return tmp_1;
  }
  function nullable(_this__u8e3s4, shouldBeNullable) {
    if (shouldBeNullable)
      return get_nullable(_this__u8e3s4);
    return isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
  }
  function serializerOrNull_0(_this__u8e3s4, type) {
    return serializerByKTypeImpl(_this__u8e3s4, type, false);
  }
  function reflectiveOrContextual(_this__u8e3s4, kClass, typeArgumentsSerializers) {
    var tmp0_elvis_lhs = serializerOrNull(kClass);
    return tmp0_elvis_lhs == null ? _this__u8e3s4.zp(kClass, typeArgumentsSerializers) : tmp0_elvis_lhs;
  }
  function serializer_0(_this__u8e3s4) {
    return StringSerializer_getInstance();
  }
  function serializer_1(_this__u8e3s4) {
    return CharSerializer_getInstance();
  }
  function CharArraySerializer() {
    return CharArraySerializer_getInstance();
  }
  function serializer_2(_this__u8e3s4) {
    return DoubleSerializer_getInstance();
  }
  function DoubleArraySerializer() {
    return DoubleArraySerializer_getInstance();
  }
  function serializer_3(_this__u8e3s4) {
    return FloatSerializer_getInstance();
  }
  function FloatArraySerializer() {
    return FloatArraySerializer_getInstance();
  }
  function serializer_4(_this__u8e3s4) {
    return LongSerializer_getInstance();
  }
  function LongArraySerializer() {
    return LongArraySerializer_getInstance();
  }
  function serializer_5(_this__u8e3s4) {
    return IntSerializer_getInstance();
  }
  function IntArraySerializer() {
    return IntArraySerializer_getInstance();
  }
  function serializer_6(_this__u8e3s4) {
    return ShortSerializer_getInstance();
  }
  function ShortArraySerializer() {
    return ShortArraySerializer_getInstance();
  }
  function serializer_7(_this__u8e3s4) {
    return ByteSerializer_getInstance();
  }
  function ByteArraySerializer() {
    return ByteArraySerializer_getInstance();
  }
  function serializer_8(_this__u8e3s4) {
    return BooleanSerializer_getInstance();
  }
  function BooleanArraySerializer() {
    return BooleanArraySerializer_getInstance();
  }
  function serializer_9(_this__u8e3s4) {
    return UnitSerializer_getInstance();
  }
  function serializer_10(_this__u8e3s4) {
    return UIntSerializer_getInstance();
  }
  function serializer_11(_this__u8e3s4) {
    return ULongSerializer_getInstance();
  }
  function serializer_12(_this__u8e3s4) {
    return UByteSerializer_getInstance();
  }
  function serializer_13(_this__u8e3s4) {
    return UShortSerializer_getInstance();
  }
  function get_nullable(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4.bp().aq()) {
      tmp = isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
    } else {
      tmp = new NullableSerializer(_this__u8e3s4);
    }
    return tmp;
  }
  function MapEntrySerializer(keySerializer, valueSerializer) {
    return new MapEntrySerializer_0(keySerializer, valueSerializer);
  }
  function PairSerializer(keySerializer, valueSerializer) {
    return new PairSerializer_0(keySerializer, valueSerializer);
  }
  function TripleSerializer(aSerializer, bSerializer, cSerializer) {
    return new TripleSerializer_0(aSerializer, bSerializer, cSerializer);
  }
  function ArraySerializer(kClass, elementSerializer) {
    return new ReferenceArraySerializer(kClass, elementSerializer);
  }
  function MapSerializer(keySerializer, valueSerializer) {
    return new LinkedHashMapSerializer(keySerializer, valueSerializer);
  }
  function ListSerializer(elementSerializer) {
    return new ArrayListSerializer(elementSerializer);
  }
  function SetSerializer(elementSerializer) {
    return new LinkedHashSetSerializer(elementSerializer);
  }
  function withContext(_this__u8e3s4, context) {
    return new ContextDescriptor(_this__u8e3s4, context);
  }
  function ContextDescriptor(original, kClass) {
    this.bq_1 = original;
    this.cq_1 = kClass;
    this.dq_1 = this.bq_1.eq() + '<' + this.cq_1.kf() + '>';
  }
  ContextDescriptor.prototype.fq = function (index) {
    return this.bq_1.fq(index);
  };
  ContextDescriptor.prototype.gq = function (index) {
    return this.bq_1.gq(index);
  };
  ContextDescriptor.prototype.hq = function (name) {
    return this.bq_1.hq(name);
  };
  ContextDescriptor.prototype.iq = function (index) {
    return this.bq_1.iq(index);
  };
  ContextDescriptor.prototype.jq = function (index) {
    return this.bq_1.jq(index);
  };
  ContextDescriptor.prototype.kq = function () {
    return this.bq_1.kq();
  };
  ContextDescriptor.prototype.lq = function () {
    return this.bq_1.lq();
  };
  ContextDescriptor.prototype.mq = function () {
    return this.bq_1.mq();
  };
  ContextDescriptor.prototype.aq = function () {
    return this.bq_1.aq();
  };
  ContextDescriptor.prototype.nq = function () {
    return this.bq_1.nq();
  };
  ContextDescriptor.prototype.eq = function () {
    return this.dq_1;
  };
  ContextDescriptor.prototype.equals = function (other) {
    var tmp0_elvis_lhs = other instanceof ContextDescriptor ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var another = tmp;
    return equals(this.bq_1, another.bq_1) ? another.cq_1.equals(this.cq_1) : false;
  };
  ContextDescriptor.prototype.hashCode = function () {
    var result = this.cq_1.hashCode();
    result = imul(31, result) + getStringHashCode(this.dq_1) | 0;
    return result;
  };
  ContextDescriptor.prototype.toString = function () {
    return 'ContextDescriptor(kClass: ' + this.cq_1 + ', original: ' + this.bq_1 + ')';
  };
  ContextDescriptor.$metadata$ = classMeta('ContextDescriptor', [SerialDescriptor]);
  function getContextualDescriptor(_this__u8e3s4, descriptor) {
    var tmp0_safe_receiver = get_capturedKClass(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.descriptors.getContextualDescriptor.<anonymous>' call
      var tmp0_safe_receiver_0 = _this__u8e3s4.yp(tmp0_safe_receiver, null, 2, null);
      tmp$ret$0 = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.bp();
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    return tmp;
  }
  function get_capturedKClass(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4;
    var tmp;
    if (tmp0_subject instanceof ContextDescriptor) {
      tmp = _this__u8e3s4.cq_1;
    } else {
      if (tmp0_subject instanceof SerialDescriptorForNullable) {
        tmp = get_capturedKClass(_this__u8e3s4.oq_1);
      } else {
        tmp = null;
      }
    }
    return tmp;
  }
  function SerialDescriptor() {
  }
  SerialDescriptor.$metadata$ = interfaceMeta('SerialDescriptor');
  function get_elementDescriptors(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.Iterable' call
    tmp$ret$0 = new _no_name_provided__qut3iv(_this__u8e3s4);
    return tmp$ret$0;
  }
  function elementDescriptors$1$1($this_elementDescriptors) {
    this.sq_1 = $this_elementDescriptors;
    this.rq_1 = $this_elementDescriptors.lq();
  }
  elementDescriptors$1$1.prototype.m = function () {
    return this.rq_1 > 0;
  };
  elementDescriptors$1$1.prototype.n = function () {
    var tmp = this.sq_1.lq();
    var tmp0_this = this;
    var tmp1 = tmp0_this.rq_1;
    tmp0_this.rq_1 = tmp1 - 1 | 0;
    return this.sq_1.gq(tmp - tmp1 | 0);
  };
  elementDescriptors$1$1.$metadata$ = classMeta(undefined, [Iterator]);
  function _no_name_provided__qut3iv($this_elementDescriptors) {
    this.tq_1 = $this_elementDescriptors;
  }
  _no_name_provided__qut3iv.prototype.l = function () {
    var tmp$ret$0;
    // Inline function 'kotlinx.serialization.descriptors.<get-elementDescriptors>.<anonymous>' call
    tmp$ret$0 = new elementDescriptors$1$1(this.tq_1);
    return tmp$ret$0;
  };
  _no_name_provided__qut3iv.$metadata$ = classMeta(undefined, [Iterable]);
  function buildSerialDescriptor(serialName, kind, typeParameters, builder) {
    // Inline function 'kotlin.require' call
    var tmp$ret$0;
    // Inline function 'kotlin.text.isNotBlank' call
    tmp$ret$0 = !isBlank(serialName);
    var tmp0_require = tmp$ret$0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.descriptors.buildSerialDescriptor.<anonymous>' call
      tmp$ret$1 = 'Blank serial names are prohibited';
      var message = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp1_require = !equals(kind, CLASS_getInstance());
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$2;
      // Inline function 'kotlinx.serialization.descriptors.buildSerialDescriptor.<anonymous>' call
      tmp$ret$2 = "For StructureKind.CLASS please use 'buildClassSerialDescriptor' instead";
      var message_0 = tmp$ret$2;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builder(sdBuilder);
    return new SerialDescriptorImpl(serialName, kind, sdBuilder.hp_1.o(), toList(typeParameters), sdBuilder);
  }
  function buildSerialDescriptor$default(serialName, kind, typeParameters, builder, $mask0, $handler) {
    if (!(($mask0 & 8) === 0)) {
      builder = buildSerialDescriptor$lambda;
    }
    return buildSerialDescriptor(serialName, kind, typeParameters, builder);
  }
  function ClassSerialDescriptorBuilder(serialName) {
    this.ep_1 = serialName;
    this.fp_1 = false;
    this.gp_1 = emptyList();
    this.hp_1 = ArrayList_init_$Create$_0();
    this.ip_1 = HashSet_init_$Create$();
    this.jp_1 = ArrayList_init_$Create$_0();
    this.kp_1 = ArrayList_init_$Create$_0();
    this.lp_1 = ArrayList_init_$Create$_0();
  }
  ClassSerialDescriptorBuilder.prototype.uq = function (elementName, descriptor, annotations, isOptional) {
    // Inline function 'kotlin.require' call
    var tmp0_require = this.ip_1.g(elementName);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.descriptors.ClassSerialDescriptorBuilder.element.<anonymous>' call
      tmp$ret$0 = "Element with name '" + elementName + "' is already registered";
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp0_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp1_plusAssign = tmp0_this.hp_1;
    tmp1_plusAssign.g(elementName);
    var tmp1_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp2_plusAssign = tmp1_this.jp_1;
    tmp2_plusAssign.g(descriptor);
    var tmp2_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp3_plusAssign = tmp2_this.kp_1;
    tmp3_plusAssign.g(annotations);
    var tmp3_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp4_plusAssign = tmp3_this.lp_1;
    tmp4_plusAssign.g(isOptional);
  };
  ClassSerialDescriptorBuilder.prototype.mp = function (elementName, descriptor, annotations, isOptional, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      annotations = emptyList();
    if (!(($mask0 & 8) === 0))
      isOptional = false;
    return this.uq(elementName, descriptor, annotations, isOptional);
  };
  ClassSerialDescriptorBuilder.$metadata$ = classMeta('ClassSerialDescriptorBuilder');
  function _get__hashCode__tgwhef($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = _hashCode$factory();
    tmp$ret$0 = $this.gr_1.j2();
    return tmp$ret$0;
  }
  function SerialDescriptorImpl$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.fr_1);
    };
  }
  function SerialDescriptorImpl$toString$lambda(this$0) {
    return function (it) {
      return this$0.iq(it) + ': ' + this$0.gq(it).eq();
    };
  }
  function SerialDescriptorImpl(serialName, kind, elementsCount, typeParameters, builder) {
    this.vq_1 = serialName;
    this.wq_1 = kind;
    this.xq_1 = elementsCount;
    this.yq_1 = builder.gp_1;
    this.zq_1 = toHashSet(builder.hp_1);
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp0_toTypedArray = builder.hp_1;
    tmp$ret$0 = copyToArray(tmp0_toTypedArray);
    tmp.ar_1 = tmp$ret$0;
    this.br_1 = compactArray(builder.jp_1);
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp0_toTypedArray_0 = builder.kp_1;
    tmp$ret$1 = copyToArray(tmp0_toTypedArray_0);
    tmp_0.cr_1 = tmp$ret$1;
    this.dr_1 = toBooleanArray(builder.lp_1);
    var tmp_1 = this;
    var tmp$ret$4;
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = withIndex(this.ar_1);
    var tmp$ret$3;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
    var tmp0_iterator = tmp0_map.l();
    while (tmp0_iterator.m()) {
      var item = tmp0_iterator.n();
      var tmp$ret$2;
      // Inline function 'kotlinx.serialization.descriptors.SerialDescriptorImpl.name2Index.<anonymous>' call
      tmp$ret$2 = to(item.j3_1, item.i3_1);
      tmp0_mapTo.g(tmp$ret$2);
    }
    tmp$ret$3 = tmp0_mapTo;
    tmp$ret$4 = tmp$ret$3;
    tmp_1.er_1 = toMap(tmp$ret$4);
    this.fr_1 = compactArray(typeParameters);
    var tmp_2 = this;
    tmp_2.gr_1 = lazy_0(SerialDescriptorImpl$_hashCode$delegate$lambda(this));
  }
  SerialDescriptorImpl.prototype.eq = function () {
    return this.vq_1;
  };
  SerialDescriptorImpl.prototype.nq = function () {
    return this.wq_1;
  };
  SerialDescriptorImpl.prototype.lq = function () {
    return this.xq_1;
  };
  SerialDescriptorImpl.prototype.kq = function () {
    return this.yq_1;
  };
  SerialDescriptorImpl.prototype.hr = function () {
    return this.zq_1;
  };
  SerialDescriptorImpl.prototype.iq = function (index) {
    return getChecked(this.ar_1, index);
  };
  SerialDescriptorImpl.prototype.hq = function (name) {
    var tmp0_elvis_lhs = this.er_1.x2(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      Companion_getInstance_1();
      tmp = -3;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  SerialDescriptorImpl.prototype.fq = function (index) {
    return getChecked(this.cr_1, index);
  };
  SerialDescriptorImpl.prototype.gq = function (index) {
    return getChecked(this.br_1, index);
  };
  SerialDescriptorImpl.prototype.jq = function (index) {
    return getChecked_0(this.dr_1, index);
  };
  SerialDescriptorImpl.prototype.equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof SerialDescriptorImpl)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.eq() === other.eq())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.descriptors.SerialDescriptorImpl.equals.<anonymous>' call
      var tmp0__anonymous__q1qw7t = other;
      tmp$ret$1 = contentEquals(this.fr_1, tmp0__anonymous__q1qw7t.fr_1);
      if (!tmp$ret$1) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.lq() === other.lq())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.lq();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.gq(index).eq() === other.gq(index).eq())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.gq(index).nq(), other.gq(index).nq())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  SerialDescriptorImpl.prototype.hashCode = function () {
    return _get__hashCode__tgwhef(this);
  };
  SerialDescriptorImpl.prototype.toString = function () {
    var tmp = until(0, this.xq_1);
    var tmp_0 = this.vq_1 + '(';
    return joinToString$default(tmp, ', ', tmp_0, ')', 0, null, SerialDescriptorImpl$toString$lambda(this), 24, null);
  };
  SerialDescriptorImpl.$metadata$ = classMeta('SerialDescriptorImpl', [SerialDescriptor, CachedNames]);
  function buildClassSerialDescriptor(serialName, typeParameters, builderAction) {
    // Inline function 'kotlin.require' call
    var tmp$ret$0;
    // Inline function 'kotlin.text.isNotBlank' call
    tmp$ret$0 = !isBlank(serialName);
    var tmp0_require = tmp$ret$0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.descriptors.buildClassSerialDescriptor.<anonymous>' call
      tmp$ret$1 = 'Blank serial names are prohibited';
      var message = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builderAction(sdBuilder);
    return new SerialDescriptorImpl(serialName, CLASS_getInstance(), sdBuilder.hp_1.o(), toList(typeParameters), sdBuilder);
  }
  function buildClassSerialDescriptor$default(serialName, typeParameters, builderAction, $mask0, $handler) {
    if (!(($mask0 & 4) === 0)) {
      builderAction = buildClassSerialDescriptor$lambda;
    }
    return buildClassSerialDescriptor(serialName, typeParameters, builderAction);
  }
  function PrimitiveSerialDescriptor(serialName, kind) {
    // Inline function 'kotlin.require' call
    var tmp$ret$0;
    // Inline function 'kotlin.text.isNotBlank' call
    tmp$ret$0 = !isBlank(serialName);
    var tmp0_require = tmp$ret$0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.descriptors.PrimitiveSerialDescriptor.<anonymous>' call
      tmp$ret$1 = 'Blank serial names are prohibited';
      var message = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return PrimitiveDescriptorSafe(serialName, kind);
  }
  function buildSerialDescriptor$lambda($this$null) {
    return Unit_getInstance();
  }
  function buildClassSerialDescriptor$lambda($this$null) {
    return Unit_getInstance();
  }
  function _hashCode$factory() {
    return getPropertyCallableRef('_hashCode', 1, KProperty1, function (receiver) {
      return _get__hashCode__tgwhef(receiver);
    }, null);
  }
  function ENUM() {
    ENUM_instance = this;
    SerialKind.call(this);
  }
  ENUM.$metadata$ = objectMeta('ENUM', undefined, undefined, undefined, undefined, SerialKind.prototype);
  var ENUM_instance;
  function ENUM_getInstance() {
    if (ENUM_instance == null)
      new ENUM();
    return ENUM_instance;
  }
  function CONTEXTUAL() {
    CONTEXTUAL_instance = this;
    SerialKind.call(this);
  }
  CONTEXTUAL.$metadata$ = objectMeta('CONTEXTUAL', undefined, undefined, undefined, undefined, SerialKind.prototype);
  var CONTEXTUAL_instance;
  function CONTEXTUAL_getInstance() {
    if (CONTEXTUAL_instance == null)
      new CONTEXTUAL();
    return CONTEXTUAL_instance;
  }
  function SerialKind() {
  }
  SerialKind.prototype.toString = function () {
    return ensureNotNull(getKClassFromExpression(this).kf());
  };
  SerialKind.prototype.hashCode = function () {
    return getStringHashCode(this.toString());
  };
  SerialKind.$metadata$ = classMeta('SerialKind');
  function BOOLEAN() {
    BOOLEAN_instance = this;
    PrimitiveKind.call(this);
  }
  BOOLEAN.$metadata$ = objectMeta('BOOLEAN', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
  var BOOLEAN_instance;
  function BOOLEAN_getInstance() {
    if (BOOLEAN_instance == null)
      new BOOLEAN();
    return BOOLEAN_instance;
  }
  function BYTE() {
    BYTE_instance = this;
    PrimitiveKind.call(this);
  }
  BYTE.$metadata$ = objectMeta('BYTE', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
  var BYTE_instance;
  function BYTE_getInstance() {
    if (BYTE_instance == null)
      new BYTE();
    return BYTE_instance;
  }
  function CHAR() {
    CHAR_instance = this;
    PrimitiveKind.call(this);
  }
  CHAR.$metadata$ = objectMeta('CHAR', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
  var CHAR_instance;
  function CHAR_getInstance() {
    if (CHAR_instance == null)
      new CHAR();
    return CHAR_instance;
  }
  function SHORT() {
    SHORT_instance = this;
    PrimitiveKind.call(this);
  }
  SHORT.$metadata$ = objectMeta('SHORT', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
  var SHORT_instance;
  function SHORT_getInstance() {
    if (SHORT_instance == null)
      new SHORT();
    return SHORT_instance;
  }
  function INT() {
    INT_instance = this;
    PrimitiveKind.call(this);
  }
  INT.$metadata$ = objectMeta('INT', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
  var INT_instance;
  function INT_getInstance() {
    if (INT_instance == null)
      new INT();
    return INT_instance;
  }
  function LONG() {
    LONG_instance = this;
    PrimitiveKind.call(this);
  }
  LONG.$metadata$ = objectMeta('LONG', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
  var LONG_instance;
  function LONG_getInstance() {
    if (LONG_instance == null)
      new LONG();
    return LONG_instance;
  }
  function FLOAT() {
    FLOAT_instance = this;
    PrimitiveKind.call(this);
  }
  FLOAT.$metadata$ = objectMeta('FLOAT', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
  var FLOAT_instance;
  function FLOAT_getInstance() {
    if (FLOAT_instance == null)
      new FLOAT();
    return FLOAT_instance;
  }
  function DOUBLE() {
    DOUBLE_instance = this;
    PrimitiveKind.call(this);
  }
  DOUBLE.$metadata$ = objectMeta('DOUBLE', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
  var DOUBLE_instance;
  function DOUBLE_getInstance() {
    if (DOUBLE_instance == null)
      new DOUBLE();
    return DOUBLE_instance;
  }
  function STRING() {
    STRING_instance = this;
    PrimitiveKind.call(this);
  }
  STRING.$metadata$ = objectMeta('STRING', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
  var STRING_instance;
  function STRING_getInstance() {
    if (STRING_instance == null)
      new STRING();
    return STRING_instance;
  }
  function PrimitiveKind() {
    SerialKind.call(this);
  }
  PrimitiveKind.$metadata$ = classMeta('PrimitiveKind', undefined, undefined, undefined, undefined, SerialKind.prototype);
  function CLASS() {
    CLASS_instance = this;
    StructureKind.call(this);
  }
  CLASS.$metadata$ = objectMeta('CLASS', undefined, undefined, undefined, undefined, StructureKind.prototype);
  var CLASS_instance;
  function CLASS_getInstance() {
    if (CLASS_instance == null)
      new CLASS();
    return CLASS_instance;
  }
  function LIST() {
    LIST_instance = this;
    StructureKind.call(this);
  }
  LIST.$metadata$ = objectMeta('LIST', undefined, undefined, undefined, undefined, StructureKind.prototype);
  var LIST_instance;
  function LIST_getInstance() {
    if (LIST_instance == null)
      new LIST();
    return LIST_instance;
  }
  function MAP() {
    MAP_instance = this;
    StructureKind.call(this);
  }
  MAP.$metadata$ = objectMeta('MAP', undefined, undefined, undefined, undefined, StructureKind.prototype);
  var MAP_instance;
  function MAP_getInstance() {
    if (MAP_instance == null)
      new MAP();
    return MAP_instance;
  }
  function OBJECT() {
    OBJECT_instance = this;
    StructureKind.call(this);
  }
  OBJECT.$metadata$ = objectMeta('OBJECT', undefined, undefined, undefined, undefined, StructureKind.prototype);
  var OBJECT_instance;
  function OBJECT_getInstance() {
    if (OBJECT_instance == null)
      new OBJECT();
    return OBJECT_instance;
  }
  function StructureKind() {
    SerialKind.call(this);
  }
  StructureKind.$metadata$ = classMeta('StructureKind', undefined, undefined, undefined, undefined, SerialKind.prototype);
  function SEALED() {
    SEALED_instance = this;
    PolymorphicKind.call(this);
  }
  SEALED.$metadata$ = objectMeta('SEALED', undefined, undefined, undefined, undefined, PolymorphicKind.prototype);
  var SEALED_instance;
  function SEALED_getInstance() {
    if (SEALED_instance == null)
      new SEALED();
    return SEALED_instance;
  }
  function OPEN() {
    OPEN_instance = this;
    PolymorphicKind.call(this);
  }
  OPEN.$metadata$ = objectMeta('OPEN', undefined, undefined, undefined, undefined, PolymorphicKind.prototype);
  var OPEN_instance;
  function OPEN_getInstance() {
    if (OPEN_instance == null)
      new OPEN();
    return OPEN_instance;
  }
  function PolymorphicKind() {
    SerialKind.call(this);
  }
  PolymorphicKind.$metadata$ = classMeta('PolymorphicKind', undefined, undefined, undefined, undefined, SerialKind.prototype);
  function AbstractDecoder() {
  }
  AbstractDecoder.prototype.ir = function () {
    throw SerializationException_init_$Create$('' + getKClassFromExpression(this) + " can't retrieve untyped values");
  };
  AbstractDecoder.prototype.jr = function () {
    return true;
  };
  AbstractDecoder.prototype.kr = function () {
    return null;
  };
  AbstractDecoder.prototype.lr = function () {
    var tmp = this.ir();
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.mr = function () {
    var tmp = this.ir();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.nr = function () {
    var tmp = this.ir();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.or = function () {
    var tmp = this.ir();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.pr = function () {
    var tmp = this.ir();
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.qr = function () {
    var tmp = this.ir();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.rr = function () {
    var tmp = this.ir();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.sr = function () {
    var tmp = this.ir();
    return tmp instanceof Char ? tmp.g1_1 : THROW_CCE();
  };
  AbstractDecoder.prototype.tr = function () {
    var tmp = this.ir();
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.ur = function (inlineDescriptor) {
    return this;
  };
  AbstractDecoder.prototype.vr = function (deserializer, previousValue) {
    return this.wr(deserializer);
  };
  AbstractDecoder.prototype.xr = function (descriptor) {
    return this;
  };
  AbstractDecoder.prototype.yr = function (descriptor) {
  };
  AbstractDecoder.prototype.zr = function (descriptor, index) {
    return this.lr();
  };
  AbstractDecoder.prototype.as = function (descriptor, index) {
    return this.mr();
  };
  AbstractDecoder.prototype.bs = function (descriptor, index) {
    return this.nr();
  };
  AbstractDecoder.prototype.cs = function (descriptor, index) {
    return this.or();
  };
  AbstractDecoder.prototype.ds = function (descriptor, index) {
    return this.pr();
  };
  AbstractDecoder.prototype.es = function (descriptor, index) {
    return this.qr();
  };
  AbstractDecoder.prototype.fs = function (descriptor, index) {
    return this.rr();
  };
  AbstractDecoder.prototype.gs = function (descriptor, index) {
    return this.sr();
  };
  AbstractDecoder.prototype.hs = function (descriptor, index) {
    return this.tr();
  };
  AbstractDecoder.prototype.is = function (descriptor, index, deserializer, previousValue) {
    return this.vr(deserializer, previousValue);
  };
  AbstractDecoder.prototype.ks = function (descriptor, index, deserializer, previousValue) {
    var isNullabilitySupported = deserializer.bp().aq();
    return (isNullabilitySupported ? true : this.jr()) ? this.vr(deserializer, previousValue) : this.kr();
  };
  AbstractDecoder.$metadata$ = classMeta('AbstractDecoder', [Decoder, CompositeDecoder]);
  function AbstractEncoder() {
  }
  AbstractEncoder.prototype.xr = function (descriptor) {
    return this;
  };
  AbstractEncoder.prototype.yr = function (descriptor) {
  };
  AbstractEncoder.prototype.os = function (descriptor, index) {
    return true;
  };
  AbstractEncoder.prototype.ps = function (value) {
    throw SerializationException_init_$Create$('Non-serializable ' + getKClassFromExpression(value) + ' is not supported by ' + getKClassFromExpression(this) + ' encoder');
  };
  AbstractEncoder.prototype.qs = function () {
    throw SerializationException_init_$Create$("'null' is not supported by default");
  };
  AbstractEncoder.prototype.rs = function (value) {
    return this.ps(value);
  };
  AbstractEncoder.prototype.ss = function (value) {
    return this.ps(value);
  };
  AbstractEncoder.prototype.ts = function (value) {
    return this.ps(value);
  };
  AbstractEncoder.prototype.us = function (value) {
    return this.ps(value);
  };
  AbstractEncoder.prototype.vs = function (value) {
    return this.ps(value);
  };
  AbstractEncoder.prototype.ws = function (value) {
    return this.ps(value);
  };
  AbstractEncoder.prototype.xs = function (value) {
    return this.ps(value);
  };
  AbstractEncoder.prototype.ys = function (value) {
    return this.ps(new Char(value));
  };
  AbstractEncoder.prototype.zs = function (value) {
    return this.ps(value);
  };
  AbstractEncoder.prototype.at = function (inlineDescriptor) {
    return this;
  };
  AbstractEncoder.prototype.bt = function (descriptor, index, value) {
    if (this.os(descriptor, index)) {
      this.rs(value);
    }
  };
  AbstractEncoder.prototype.ct = function (descriptor, index, value) {
    if (this.os(descriptor, index)) {
      this.ss(value);
    }
  };
  AbstractEncoder.prototype.dt = function (descriptor, index, value) {
    if (this.os(descriptor, index)) {
      this.ts(value);
    }
  };
  AbstractEncoder.prototype.et = function (descriptor, index, value) {
    if (this.os(descriptor, index)) {
      this.us(value);
    }
  };
  AbstractEncoder.prototype.ft = function (descriptor, index, value) {
    if (this.os(descriptor, index)) {
      this.vs(value);
    }
  };
  AbstractEncoder.prototype.gt = function (descriptor, index, value) {
    if (this.os(descriptor, index)) {
      this.ws(value);
    }
  };
  AbstractEncoder.prototype.ht = function (descriptor, index, value) {
    if (this.os(descriptor, index)) {
      this.xs(value);
    }
  };
  AbstractEncoder.prototype.it = function (descriptor, index, value) {
    if (this.os(descriptor, index)) {
      this.ys(value);
    }
  };
  AbstractEncoder.prototype.jt = function (descriptor, index, value) {
    if (this.os(descriptor, index)) {
      this.zs(value);
    }
  };
  AbstractEncoder.prototype.kt = function (descriptor, index, serializer, value) {
    if (this.os(descriptor, index)) {
      this.lt(serializer, value);
    }
  };
  AbstractEncoder.prototype.mt = function (descriptor, index, serializer, value) {
    if (this.os(descriptor, index)) {
      this.nt(serializer, value);
    }
  };
  AbstractEncoder.$metadata$ = classMeta('AbstractEncoder', [Encoder, CompositeEncoder]);
  function Decoder() {
  }
  Decoder.$metadata$ = interfaceMeta('Decoder');
  function Companion() {
    Companion_instance = this;
    this.rt_1 = -1;
    this.st_1 = -3;
  }
  Companion.prototype.tt = function () {
    return this.rt_1;
  };
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance_1() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function CompositeDecoder() {
  }
  CompositeDecoder.$metadata$ = interfaceMeta('CompositeDecoder');
  function decodeStructure(_this__u8e3s4, descriptor, block) {
    var composite = _this__u8e3s4.xr(descriptor);
    var ex = null;
    try {
      return block(composite);
    } catch ($p) {
      if ($p instanceof Error) {
        ex = $p;
        throw $p;
      } else {
        throw $p;
      }
    }
    finally {
      if (ex == null) {
        composite.yr(descriptor);
      }
    }
  }
  function Encoder() {
  }
  Encoder.$metadata$ = interfaceMeta('Encoder');
  function CompositeEncoder() {
  }
  CompositeEncoder.$metadata$ = interfaceMeta('CompositeEncoder');
  function encodeStructure(_this__u8e3s4, descriptor, block) {
    var composite = _this__u8e3s4.xr(descriptor);
    var ex = null;
    try {
      block(composite);
    } catch ($p) {
      if ($p instanceof Error) {
        ex = $p;
        throw $p;
      } else {
        throw $p;
      }
    }
    finally {
      if (ex == null) {
        composite.yr(descriptor);
      }
    }
  }
  function decodeSequentially_0($this, compositeDecoder) {
    var klassName = compositeDecoder.hs($this.bp(), 0);
    var serializer = findPolymorphicSerializer_0($this, compositeDecoder, klassName);
    var tmp = $this.bp();
    return compositeDecoder.js(tmp, 1, serializer, null, 8, null);
  }
  function AbstractPolymorphicSerializer() {
  }
  AbstractPolymorphicSerializer.prototype.cp = function (encoder, value) {
    var actualSerializer = findPolymorphicSerializer(this, encoder, value);
    // Inline function 'kotlinx.serialization.encoding.encodeStructure' call
    var tmp0_encodeStructure = this.bp();
    var composite = encoder.xr(tmp0_encodeStructure);
    var ex = null;
    try {
      // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.serialize.<anonymous>' call
      composite.jt(this.bp(), 0, actualSerializer.bp().eq());
      var tmp = this.bp();
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp$ret$0 = isInterface(actualSerializer, SerializationStrategy) ? actualSerializer : THROW_CCE();
      composite.kt(tmp, 1, tmp$ret$0, value);
    } catch ($p) {
      if ($p instanceof Error) {
        ex = $p;
        throw $p;
      } else {
        throw $p;
      }
    }
    finally {
      if (ex == null) {
        composite.yr(tmp0_encodeStructure);
      }
    }
  };
  AbstractPolymorphicSerializer.prototype.dp = function (decoder) {
    var tmp$ret$5;
    $l$block_1: {
      // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
      var tmp0_decodeStructure = this.bp();
      var composite = decoder.xr(tmp0_decodeStructure);
      var ex = null;
      try {
        var tmp$ret$4;
        // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.deserialize.<anonymous>' call
        var klassName = null;
        var value = null;
        if (composite.ls()) {
          return decodeSequentially_0(this, composite);
        }
        mainLoop: while (true) {
          var index = composite.ms(this.bp());
          Companion_getInstance_1();
          if (index === -1) {
            break mainLoop;
          } else {
            if (index === 0) {
              klassName = composite.hs(this.bp(), index);
            } else {
              if (index === 1) {
                var tmp$ret$1;
                $l$block: {
                  // Inline function 'kotlin.requireNotNull' call
                  var tmp0_requireNotNull = klassName;
                  // Inline function 'kotlin.contracts.contract' call
                  if (tmp0_requireNotNull == null) {
                    var tmp$ret$0;
                    // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.deserialize.<anonymous>.<anonymous>' call
                    tmp$ret$0 = 'Cannot read polymorphic value before its type token';
                    var message = tmp$ret$0;
                    throw IllegalArgumentException_init_$Create$(toString(message));
                  } else {
                    tmp$ret$1 = tmp0_requireNotNull;
                    break $l$block;
                  }
                }
                klassName = tmp$ret$1;
                var serializer = findPolymorphicSerializer_0(this, composite, klassName);
                var tmp = this.bp();
                value = composite.js(tmp, index, serializer, null, 8, null);
              } else {
                var tmp0_elvis_lhs = klassName;
                throw SerializationException_init_$Create$('Invalid index in polymorphic deserialization of ' + (tmp0_elvis_lhs == null ? 'unknown class' : tmp0_elvis_lhs) + ('\n Expected 0, 1 or DECODE_DONE(-1), but found ' + index));
              }
            }
          }
        }
        var tmp$ret$3;
        $l$block_0: {
          // Inline function 'kotlin.requireNotNull' call
          var tmp1_requireNotNull = value;
          // Inline function 'kotlin.contracts.contract' call
          if (tmp1_requireNotNull == null) {
            var tmp$ret$2;
            // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.deserialize.<anonymous>.<anonymous>' call
            tmp$ret$2 = 'Polymorphic value has not been read for class ' + klassName;
            var message_0 = tmp$ret$2;
            throw IllegalArgumentException_init_$Create$(toString(message_0));
          } else {
            tmp$ret$3 = tmp1_requireNotNull;
            break $l$block_0;
          }
        }
        var tmp_0 = tmp$ret$3;
        tmp$ret$4 = isObject(tmp_0) ? tmp_0 : THROW_CCE();
        tmp$ret$5 = tmp$ret$4;
        break $l$block_1;
      } catch ($p) {
        if ($p instanceof Error) {
          ex = $p;
          throw $p;
        } else {
          throw $p;
        }
      }
      finally {
        if (ex == null) {
          composite.yr(tmp0_decodeStructure);
        }
      }
    }
    return tmp$ret$5;
  };
  AbstractPolymorphicSerializer.prototype.rp = function (decoder, klassName) {
    return decoder.vp().ut(this.qp(), klassName);
  };
  AbstractPolymorphicSerializer.prototype.sp = function (encoder, value) {
    return encoder.vp().vt(this.qp(), value);
  };
  AbstractPolymorphicSerializer.$metadata$ = classMeta('AbstractPolymorphicSerializer', [KSerializer]);
  function throwSubtypeNotRegistered(subClass, baseClass) {
    var tmp0_elvis_lhs = subClass.kf();
    throwSubtypeNotRegistered_0(tmp0_elvis_lhs == null ? '' + subClass : tmp0_elvis_lhs, baseClass);
  }
  function throwSubtypeNotRegistered_0(subClassName, baseClass) {
    var scope = "in the scope of '" + baseClass.kf() + "'";
    throw SerializationException_init_$Create$(subClassName == null ? 'Class discriminator was missing and no default polymorphic serializers were registered ' + scope : "Class '" + subClassName + "' is not registered for polymorphic serialization " + scope + '.\n' + "Mark the base class as 'sealed' or register the serializer explicitly.");
  }
  function CachedNames() {
  }
  CachedNames.$metadata$ = interfaceMeta('CachedNames');
  function PrimitiveArrayDescriptor(primitive) {
    ListLikeDescriptor.call(this, primitive);
    this.yt_1 = primitive.eq() + 'Array';
  }
  PrimitiveArrayDescriptor.prototype.eq = function () {
    return this.yt_1;
  };
  PrimitiveArrayDescriptor.$metadata$ = classMeta('PrimitiveArrayDescriptor', undefined, undefined, undefined, undefined, ListLikeDescriptor.prototype);
  function ListLikeDescriptor(elementDescriptor) {
    this.zt_1 = elementDescriptor;
    this.au_1 = 1;
  }
  ListLikeDescriptor.prototype.nq = function () {
    return LIST_getInstance();
  };
  ListLikeDescriptor.prototype.lq = function () {
    return this.au_1;
  };
  ListLikeDescriptor.prototype.iq = function (index) {
    return index.toString();
  };
  ListLikeDescriptor.prototype.hq = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid list index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  ListLikeDescriptor.prototype.jq = function (index) {
    // Inline function 'kotlin.require' call
    var tmp0_require = index >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.isElementOptional.<anonymous>' call
      tmp$ret$0 = 'Illegal index ' + index + ', ' + this.eq() + ' expects only non-negative indices';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  ListLikeDescriptor.prototype.fq = function (index) {
    // Inline function 'kotlin.require' call
    var tmp0_require = index >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.getElementAnnotations.<anonymous>' call
      tmp$ret$0 = 'Illegal index ' + index + ', ' + this.eq() + ' expects only non-negative indices';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  ListLikeDescriptor.prototype.gq = function (index) {
    // Inline function 'kotlin.require' call
    var tmp0_require = index >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.getElementDescriptor.<anonymous>' call
      tmp$ret$0 = 'Illegal index ' + index + ', ' + this.eq() + ' expects only non-negative indices';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.zt_1;
  };
  ListLikeDescriptor.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ListLikeDescriptor))
      return false;
    if (equals(this.zt_1, other.zt_1) ? this.eq() === other.eq() : false)
      return true;
    return false;
  };
  ListLikeDescriptor.prototype.hashCode = function () {
    return imul(hashCode(this.zt_1), 31) + getStringHashCode(this.eq()) | 0;
  };
  ListLikeDescriptor.prototype.toString = function () {
    return this.eq() + '(' + this.zt_1 + ')';
  };
  ListLikeDescriptor.$metadata$ = classMeta('ListLikeDescriptor', [SerialDescriptor]);
  function ArrayListClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  ArrayListClassDesc.prototype.eq = function () {
    return 'kotlin.collections.ArrayList';
  };
  ArrayListClassDesc.$metadata$ = classMeta('ArrayListClassDesc', undefined, undefined, undefined, undefined, ListLikeDescriptor.prototype);
  function HashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  HashSetClassDesc.prototype.eq = function () {
    return 'kotlin.collections.HashSet';
  };
  HashSetClassDesc.$metadata$ = classMeta('HashSetClassDesc', undefined, undefined, undefined, undefined, ListLikeDescriptor.prototype);
  function LinkedHashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  LinkedHashSetClassDesc.prototype.eq = function () {
    return 'kotlin.collections.LinkedHashSet';
  };
  LinkedHashSetClassDesc.$metadata$ = classMeta('LinkedHashSetClassDesc', undefined, undefined, undefined, undefined, ListLikeDescriptor.prototype);
  function HashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.HashMap', keyDesc, valueDesc);
  }
  HashMapClassDesc.$metadata$ = classMeta('HashMapClassDesc', undefined, undefined, undefined, undefined, MapLikeDescriptor.prototype);
  function LinkedHashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.LinkedHashMap', keyDesc, valueDesc);
  }
  LinkedHashMapClassDesc.$metadata$ = classMeta('LinkedHashMapClassDesc', undefined, undefined, undefined, undefined, MapLikeDescriptor.prototype);
  function ArrayClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  ArrayClassDesc.prototype.eq = function () {
    return 'kotlin.Array';
  };
  ArrayClassDesc.$metadata$ = classMeta('ArrayClassDesc', undefined, undefined, undefined, undefined, ListLikeDescriptor.prototype);
  function MapLikeDescriptor(serialName, keyDescriptor, valueDescriptor) {
    this.hu_1 = serialName;
    this.iu_1 = keyDescriptor;
    this.ju_1 = valueDescriptor;
    this.ku_1 = 2;
  }
  MapLikeDescriptor.prototype.eq = function () {
    return this.hu_1;
  };
  MapLikeDescriptor.prototype.nq = function () {
    return MAP_getInstance();
  };
  MapLikeDescriptor.prototype.lq = function () {
    return this.ku_1;
  };
  MapLikeDescriptor.prototype.iq = function (index) {
    return index.toString();
  };
  MapLikeDescriptor.prototype.hq = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid map index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  MapLikeDescriptor.prototype.jq = function (index) {
    // Inline function 'kotlin.require' call
    var tmp0_require = index >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.MapLikeDescriptor.isElementOptional.<anonymous>' call
      tmp$ret$0 = 'Illegal index ' + index + ', ' + this.eq() + ' expects only non-negative indices';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  MapLikeDescriptor.prototype.fq = function (index) {
    // Inline function 'kotlin.require' call
    var tmp0_require = index >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.MapLikeDescriptor.getElementAnnotations.<anonymous>' call
      tmp$ret$0 = 'Illegal index ' + index + ', ' + this.eq() + ' expects only non-negative indices';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  MapLikeDescriptor.prototype.gq = function (index) {
    // Inline function 'kotlin.require' call
    var tmp0_require = index >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.MapLikeDescriptor.getElementDescriptor.<anonymous>' call
      tmp$ret$0 = 'Illegal index ' + index + ', ' + this.eq() + ' expects only non-negative indices';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp0_subject = index % 2 | 0;
    var tmp;
    switch (tmp0_subject) {
      case 0:
        tmp = this.iu_1;
        break;
      case 1:
        tmp = this.ju_1;
        break;
      default:
        throw IllegalStateException_init_$Create$('Unreached');
    }
    return tmp;
  };
  MapLikeDescriptor.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapLikeDescriptor))
      return false;
    if (!(this.eq() === other.eq()))
      return false;
    if (!equals(this.iu_1, other.iu_1))
      return false;
    if (!equals(this.ju_1, other.ju_1))
      return false;
    return true;
  };
  MapLikeDescriptor.prototype.hashCode = function () {
    var result = getStringHashCode(this.eq());
    result = imul(31, result) + hashCode(this.iu_1) | 0;
    result = imul(31, result) + hashCode(this.ju_1) | 0;
    return result;
  };
  MapLikeDescriptor.prototype.toString = function () {
    return this.eq() + '(' + this.iu_1 + ', ' + this.ju_1 + ')';
  };
  MapLikeDescriptor.$metadata$ = classMeta('MapLikeDescriptor', [SerialDescriptor]);
  function PrimitiveArraySerializer(primitiveSerializer) {
    ListLikeSerializer.call(this, primitiveSerializer);
    this.ou_1 = new PrimitiveArrayDescriptor(primitiveSerializer.bp());
  }
  PrimitiveArraySerializer.prototype.bp = function () {
    return this.ou_1;
  };
  PrimitiveArraySerializer.prototype.pu = function (_this__u8e3s4) {
    return _this__u8e3s4.qu();
  };
  PrimitiveArraySerializer.prototype.ru = function (_this__u8e3s4) {
    return _this__u8e3s4.jk();
  };
  PrimitiveArraySerializer.prototype.su = function (_this__u8e3s4, size) {
    return _this__u8e3s4.od(size);
  };
  PrimitiveArraySerializer.prototype.tu = function (_this__u8e3s4) {
    // Inline function 'kotlin.error' call
    throw IllegalStateException_init_$Create$('This method lead to boxing and must not be used, use writeContents instead');
  };
  PrimitiveArraySerializer.prototype.uu = function (_this__u8e3s4) {
    return this.tu((_this__u8e3s4 == null ? true : isObject(_this__u8e3s4)) ? _this__u8e3s4 : THROW_CCE());
  };
  PrimitiveArraySerializer.prototype.vu = function (_this__u8e3s4, index, element) {
    // Inline function 'kotlin.error' call
    throw IllegalStateException_init_$Create$('This method lead to boxing and must not be used, use Builder.append instead');
  };
  PrimitiveArraySerializer.prototype.kk = function () {
    return this.xu(this.wu());
  };
  PrimitiveArraySerializer.prototype.bv = function (encoder, value) {
    var size = this.cv(value);
    var composite = encoder.pt(this.ou_1, size);
    this.av(composite, value, size);
    composite.yr(this.ou_1);
  };
  PrimitiveArraySerializer.prototype.cp = function (encoder, value) {
    return this.bv(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  PrimitiveArraySerializer.prototype.dv = function (encoder, value) {
    return this.bv(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  PrimitiveArraySerializer.prototype.dp = function (decoder) {
    return this.ev(decoder, null);
  };
  PrimitiveArraySerializer.$metadata$ = classMeta('PrimitiveArraySerializer', undefined, undefined, undefined, undefined, ListLikeSerializer.prototype);
  function PrimitiveArrayBuilder() {
  }
  PrimitiveArrayBuilder.prototype.hv = function (requiredCapacity, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      requiredCapacity = this.qu() + 1 | 0;
    var tmp;
    if ($handler == null) {
      this.od(requiredCapacity);
      tmp = Unit_getInstance();
    } else {
      tmp = $handler(requiredCapacity);
    }
    return tmp;
  };
  PrimitiveArrayBuilder.$metadata$ = classMeta('PrimitiveArrayBuilder');
  function ListLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this);
    this.fv_1 = elementSerializer;
  }
  ListLikeSerializer.prototype.dv = function (encoder, value) {
    var size = this.cv(value);
    var composite = encoder.pt(this.bp(), size);
    var iterator = this.uu(value);
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        composite.kt(this.bp(), index, this.fv_1, iterator.n());
      }
       while (inductionVariable < size);
    composite.yr(this.bp());
  };
  ListLikeSerializer.prototype.cp = function (encoder, value) {
    return this.dv(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  ListLikeSerializer.prototype.gv = function (decoder, builder, startIndex, size) {
    // Inline function 'kotlin.require' call
    var tmp0_require = size >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.ListLikeSerializer.readAll.<anonymous>' call
      tmp$ret$0 = 'Size must be known in advance when using READ_ALL';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.yu(decoder, startIndex + index | 0, builder, false);
      }
       while (inductionVariable < size);
  };
  ListLikeSerializer.prototype.yu = function (decoder, index, builder, checkIndex) {
    var tmp = this.bp();
    this.vu(builder, index, decoder.js(tmp, index, this.fv_1, null, 8, null));
  };
  ListLikeSerializer.$metadata$ = classMeta('ListLikeSerializer', undefined, undefined, undefined, undefined, AbstractCollectionSerializer.prototype);
  function readSize($this, decoder, builder) {
    var size = decoder.ns($this.bp());
    $this.su(builder, size);
    return size;
  }
  function AbstractCollectionSerializer() {
  }
  AbstractCollectionSerializer.prototype.ev = function (decoder, previous) {
    var tmp0_safe_receiver = previous;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : this.xu(tmp0_safe_receiver);
    var builder = tmp1_elvis_lhs == null ? this.kk() : tmp1_elvis_lhs;
    var startIndex = this.pu(builder);
    var compositeDecoder = decoder.xr(this.bp());
    if (compositeDecoder.ls()) {
      this.gv(compositeDecoder, builder, startIndex, readSize(this, compositeDecoder, builder));
    } else {
      $l$loop: while (true) {
        var index = compositeDecoder.ms(this.bp());
        Companion_getInstance_1();
        if (index === -1)
          break $l$loop;
        var tmp = startIndex + index | 0;
        this.zu(compositeDecoder, tmp, builder, false, 8, null);
      }
    }
    compositeDecoder.yr(this.bp());
    return this.ru(builder);
  };
  AbstractCollectionSerializer.prototype.dp = function (decoder) {
    return this.ev(decoder, null);
  };
  AbstractCollectionSerializer.prototype.zu = function (decoder, index, builder, checkIndex, $mask0, $handler) {
    if (!(($mask0 & 8) === 0))
      checkIndex = true;
    var tmp;
    if ($handler == null) {
      this.yu(decoder, index, builder, checkIndex);
      tmp = Unit_getInstance();
    } else {
      tmp = $handler(decoder, index, builder, checkIndex);
    }
    return tmp;
  };
  AbstractCollectionSerializer.$metadata$ = classMeta('AbstractCollectionSerializer', [KSerializer]);
  function ArrayListSerializer(element) {
    ListLikeSerializer.call(this, element);
    this.jv_1 = new ArrayListClassDesc(element.bp());
  }
  ArrayListSerializer.prototype.bp = function () {
    return this.jv_1;
  };
  ArrayListSerializer.prototype.kv = function (_this__u8e3s4) {
    return _this__u8e3s4.o();
  };
  ArrayListSerializer.prototype.cv = function (_this__u8e3s4) {
    return this.kv((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, List) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ArrayListSerializer.prototype.lv = function (_this__u8e3s4) {
    return _this__u8e3s4.l();
  };
  ArrayListSerializer.prototype.uu = function (_this__u8e3s4) {
    return this.lv((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, List) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ArrayListSerializer.prototype.kk = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp$ret$0 = ArrayList_init_$Create$_0();
    return tmp$ret$0;
  };
  ArrayListSerializer.prototype.mv = function (_this__u8e3s4) {
    return _this__u8e3s4.o();
  };
  ArrayListSerializer.prototype.pu = function (_this__u8e3s4) {
    return this.mv(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  ArrayListSerializer.prototype.nv = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  ArrayListSerializer.prototype.ru = function (_this__u8e3s4) {
    return this.nv(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  ArrayListSerializer.prototype.ov = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? ArrayList_init_$Create$_1(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  ArrayListSerializer.prototype.xu = function (_this__u8e3s4) {
    return this.ov((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, List) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ArrayListSerializer.prototype.pv = function (_this__u8e3s4, size) {
    return _this__u8e3s4.od(size);
  };
  ArrayListSerializer.prototype.su = function (_this__u8e3s4, size) {
    return this.pv(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  ArrayListSerializer.prototype.qv = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.yc(index, element);
  };
  ArrayListSerializer.prototype.vu = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.qv(tmp, index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  ArrayListSerializer.$metadata$ = classMeta('ArrayListSerializer', undefined, undefined, undefined, undefined, ListLikeSerializer.prototype);
  function HashSetSerializer(eSerializer) {
    ListLikeSerializer.call(this, eSerializer);
    this.sv_1 = new HashSetClassDesc(eSerializer.bp());
  }
  HashSetSerializer.prototype.bp = function () {
    return this.sv_1;
  };
  HashSetSerializer.prototype.tv = function (_this__u8e3s4) {
    return _this__u8e3s4.o();
  };
  HashSetSerializer.prototype.cv = function (_this__u8e3s4) {
    return this.tv((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Set) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  HashSetSerializer.prototype.uv = function (_this__u8e3s4) {
    return _this__u8e3s4.l();
  };
  HashSetSerializer.prototype.uu = function (_this__u8e3s4) {
    return this.uv((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Set) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  HashSetSerializer.prototype.kk = function () {
    return HashSet_init_$Create$();
  };
  HashSetSerializer.prototype.vv = function (_this__u8e3s4) {
    return _this__u8e3s4.o();
  };
  HashSetSerializer.prototype.pu = function (_this__u8e3s4) {
    return this.vv(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  HashSetSerializer.prototype.wv = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  HashSetSerializer.prototype.ru = function (_this__u8e3s4) {
    return this.wv(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  HashSetSerializer.prototype.xv = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  HashSetSerializer.prototype.xu = function (_this__u8e3s4) {
    return this.xv((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Set) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  HashSetSerializer.prototype.yv = function (_this__u8e3s4, size) {
  };
  HashSetSerializer.prototype.su = function (_this__u8e3s4, size) {
    return this.yv(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  HashSetSerializer.prototype.zv = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.g(element);
  };
  HashSetSerializer.prototype.vu = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE();
    return this.zv(tmp, index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  HashSetSerializer.$metadata$ = classMeta('HashSetSerializer', undefined, undefined, undefined, undefined, ListLikeSerializer.prototype);
  function LinkedHashSetSerializer(eSerializer) {
    ListLikeSerializer.call(this, eSerializer);
    this.bw_1 = new LinkedHashSetClassDesc(eSerializer.bp());
  }
  LinkedHashSetSerializer.prototype.bp = function () {
    return this.bw_1;
  };
  LinkedHashSetSerializer.prototype.tv = function (_this__u8e3s4) {
    return _this__u8e3s4.o();
  };
  LinkedHashSetSerializer.prototype.cv = function (_this__u8e3s4) {
    return this.tv((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Set) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashSetSerializer.prototype.uv = function (_this__u8e3s4) {
    return _this__u8e3s4.l();
  };
  LinkedHashSetSerializer.prototype.uu = function (_this__u8e3s4) {
    return this.uv((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Set) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashSetSerializer.prototype.kk = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.linkedSetOf' call
    tmp$ret$0 = LinkedHashSet_init_$Create$();
    return tmp$ret$0;
  };
  LinkedHashSetSerializer.prototype.cw = function (_this__u8e3s4) {
    return _this__u8e3s4.o();
  };
  LinkedHashSetSerializer.prototype.pu = function (_this__u8e3s4) {
    return this.cw(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashSetSerializer.prototype.dw = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  LinkedHashSetSerializer.prototype.ru = function (_this__u8e3s4) {
    return this.dw(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashSetSerializer.prototype.xv = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  LinkedHashSetSerializer.prototype.xu = function (_this__u8e3s4) {
    return this.xv((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Set) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashSetSerializer.prototype.ew = function (_this__u8e3s4, size) {
  };
  LinkedHashSetSerializer.prototype.su = function (_this__u8e3s4, size) {
    return this.ew(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  LinkedHashSetSerializer.prototype.fw = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.g(element);
  };
  LinkedHashSetSerializer.prototype.vu = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE();
    return this.fw(tmp, index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  LinkedHashSetSerializer.$metadata$ = classMeta('LinkedHashSetSerializer', undefined, undefined, undefined, undefined, ListLikeSerializer.prototype);
  function HashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.iw_1 = new HashMapClassDesc(kSerializer.bp(), vSerializer.bp());
  }
  HashMapSerializer.prototype.bp = function () {
    return this.iw_1;
  };
  HashMapSerializer.prototype.jw = function (_this__u8e3s4) {
    return _this__u8e3s4.o();
  };
  HashMapSerializer.prototype.cv = function (_this__u8e3s4) {
    return this.jw((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  HashMapSerializer.prototype.kw = function (_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$0 = _this__u8e3s4.v().l();
    return tmp$ret$0;
  };
  HashMapSerializer.prototype.uu = function (_this__u8e3s4) {
    return this.kw((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  HashMapSerializer.prototype.kk = function () {
    return HashMap_init_$Create$();
  };
  HashMapSerializer.prototype.lw = function (_this__u8e3s4) {
    return _this__u8e3s4.o();
  };
  HashMapSerializer.prototype.pu = function (_this__u8e3s4) {
    return this.lw(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  HashMapSerializer.prototype.mw = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  HashMapSerializer.prototype.ru = function (_this__u8e3s4) {
    return this.mw(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  HashMapSerializer.prototype.nw = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  HashMapSerializer.prototype.xu = function (_this__u8e3s4) {
    return this.nw((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  HashMapSerializer.prototype.ow = function (_this__u8e3s4, size) {
  };
  HashMapSerializer.prototype.su = function (_this__u8e3s4, size) {
    return this.ow(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  HashMapSerializer.$metadata$ = classMeta('HashMapSerializer', undefined, undefined, undefined, undefined, MapLikeSerializer.prototype);
  function LinkedHashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.vw_1 = new LinkedHashMapClassDesc(kSerializer.bp(), vSerializer.bp());
  }
  LinkedHashMapSerializer.prototype.bp = function () {
    return this.vw_1;
  };
  LinkedHashMapSerializer.prototype.jw = function (_this__u8e3s4) {
    return _this__u8e3s4.o();
  };
  LinkedHashMapSerializer.prototype.cv = function (_this__u8e3s4) {
    return this.jw((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashMapSerializer.prototype.kw = function (_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$0 = _this__u8e3s4.v().l();
    return tmp$ret$0;
  };
  LinkedHashMapSerializer.prototype.uu = function (_this__u8e3s4) {
    return this.kw((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashMapSerializer.prototype.kk = function () {
    return LinkedHashMap_init_$Create$();
  };
  LinkedHashMapSerializer.prototype.ww = function (_this__u8e3s4) {
    return _this__u8e3s4.o();
  };
  LinkedHashMapSerializer.prototype.pu = function (_this__u8e3s4) {
    return this.ww(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashMapSerializer.prototype.xw = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  LinkedHashMapSerializer.prototype.ru = function (_this__u8e3s4) {
    return this.xw(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashMapSerializer.prototype.nw = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  LinkedHashMapSerializer.prototype.xu = function (_this__u8e3s4) {
    return this.nw((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashMapSerializer.prototype.yw = function (_this__u8e3s4, size) {
  };
  LinkedHashMapSerializer.prototype.su = function (_this__u8e3s4, size) {
    return this.yw(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  LinkedHashMapSerializer.$metadata$ = classMeta('LinkedHashMapSerializer', undefined, undefined, undefined, undefined, MapLikeSerializer.prototype);
  function ReferenceArraySerializer(kClass, eSerializer) {
    ListLikeSerializer.call(this, eSerializer);
    this.ax_1 = kClass;
    this.bx_1 = new ArrayClassDesc(eSerializer.bp());
  }
  ReferenceArraySerializer.prototype.bp = function () {
    return this.bx_1;
  };
  ReferenceArraySerializer.prototype.cx = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  ReferenceArraySerializer.prototype.cv = function (_this__u8e3s4) {
    return this.cx((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ReferenceArraySerializer.prototype.dx = function (_this__u8e3s4) {
    return arrayIterator(_this__u8e3s4);
  };
  ReferenceArraySerializer.prototype.uu = function (_this__u8e3s4) {
    return this.dx((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ReferenceArraySerializer.prototype.kk = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp$ret$0 = ArrayList_init_$Create$_0();
    return tmp$ret$0;
  };
  ReferenceArraySerializer.prototype.ex = function (_this__u8e3s4) {
    return _this__u8e3s4.o();
  };
  ReferenceArraySerializer.prototype.pu = function (_this__u8e3s4) {
    return this.ex(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  ReferenceArraySerializer.prototype.fx = function (_this__u8e3s4) {
    return toNativeArrayImpl(_this__u8e3s4, this.ax_1);
  };
  ReferenceArraySerializer.prototype.ru = function (_this__u8e3s4) {
    return this.fx(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  ReferenceArraySerializer.prototype.gx = function (_this__u8e3s4) {
    return ArrayList_init_$Create$_1(asList(_this__u8e3s4));
  };
  ReferenceArraySerializer.prototype.xu = function (_this__u8e3s4) {
    return this.gx((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ReferenceArraySerializer.prototype.hx = function (_this__u8e3s4, size) {
    return _this__u8e3s4.od(size);
  };
  ReferenceArraySerializer.prototype.su = function (_this__u8e3s4, size) {
    return this.hx(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  ReferenceArraySerializer.prototype.ix = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.yc(index, element);
  };
  ReferenceArraySerializer.prototype.vu = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.ix(tmp, index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  ReferenceArraySerializer.$metadata$ = classMeta('ReferenceArraySerializer', undefined, undefined, undefined, undefined, ListLikeSerializer.prototype);
  function MapLikeSerializer(keySerializer, valueSerializer) {
    AbstractCollectionSerializer.call(this);
    this.pw_1 = keySerializer;
    this.qw_1 = valueSerializer;
  }
  MapLikeSerializer.prototype.rw = function () {
    return this.pw_1;
  };
  MapLikeSerializer.prototype.sw = function () {
    return this.qw_1;
  };
  MapLikeSerializer.prototype.gv = function (decoder, builder, startIndex, size) {
    // Inline function 'kotlin.require' call
    var tmp0_require = size >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.readAll.<anonymous>' call
      tmp$ret$0 = 'Size must be known in advance when using READ_ALL';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var progression = step(until(0, imul(size, 2)), 2);
    var inductionVariable = progression.c1_1;
    var last = progression.d1_1;
    var step_0 = progression.e1_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        this.yu(decoder, startIndex + index | 0, builder, false);
      }
       while (!(index === last));
  };
  MapLikeSerializer.prototype.yu = function (decoder, index, builder, checkIndex) {
    var tmp = this.bp();
    var key = decoder.js(tmp, index, this.pw_1, null, 8, null);
    var tmp_0;
    if (checkIndex) {
      var tmp$ret$1;
      // Inline function 'kotlin.also' call
      var tmp0_also = decoder.ms(this.bp());
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.readElement.<anonymous>' call
      // Inline function 'kotlin.require' call
      var tmp0_require = tmp0_also === (index + 1 | 0);
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_require) {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.readElement.<anonymous>.<anonymous>' call
        tmp$ret$0 = 'Value must follow key in a map, index for key: ' + index + ', returned index for value: ' + tmp0_also;
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      tmp$ret$1 = tmp0_also;
      tmp_0 = tmp$ret$1;
    } else {
      tmp_0 = index + 1 | 0;
    }
    var vIndex = tmp_0;
    var tmp_1;
    var tmp_2;
    if (builder.r2(key)) {
      var tmp_3 = this.qw_1.bp().nq();
      tmp_2 = !(tmp_3 instanceof PrimitiveKind);
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = decoder.is(this.bp(), vIndex, this.qw_1, getValue(builder, key));
    } else {
      var tmp_4 = this.bp();
      tmp_1 = decoder.js(tmp_4, vIndex, this.qw_1, null, 8, null);
    }
    var value = tmp_1;
    // Inline function 'kotlin.collections.set' call
    builder.s(key, value);
  };
  MapLikeSerializer.prototype.dv = function (encoder, value) {
    var size = this.cv(value);
    var composite = encoder.pt(this.bp(), size);
    var iterator = this.uu(value);
    var index = 0;
    // Inline function 'kotlin.collections.forEach' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$0 = iterator;
    var tmp0_iterator = tmp$ret$0;
    while (tmp0_iterator.m()) {
      var element = tmp0_iterator.n();
      // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.serialize.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$1 = element.h2();
      var k = tmp$ret$1;
      var tmp$ret$2;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$2 = element.j2();
      var v = tmp$ret$2;
      var tmp = this.bp();
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      composite.kt(tmp, tmp0, this.pw_1, k);
      var tmp_0 = this.bp();
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      composite.kt(tmp_0, tmp1, this.qw_1, v);
    }
    composite.yr(this.bp());
  };
  MapLikeSerializer.prototype.cp = function (encoder, value) {
    return this.dv(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  MapLikeSerializer.$metadata$ = classMeta('MapLikeSerializer', undefined, undefined, undefined, undefined, AbstractCollectionSerializer.prototype);
  function Companion_0() {
    Companion_instance_0 = this;
    this.jx_1 = longArray(0);
  }
  Companion_0.$metadata$ = objectMeta('Companion');
  var Companion_instance_0;
  function Companion_getInstance_2() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function prepareHighMarksArray($this, elementsCount) {
    var slotsCount = (elementsCount - 1 | 0) >>> 6 | 0;
    Companion_getInstance();
    var elementsInLastSlot = elementsCount & (64 - 1 | 0);
    var highMarks = longArray(slotsCount);
    if (!(elementsInLastSlot === 0)) {
      highMarks[get_lastIndex(highMarks)] = (new Long(-1, -1)).qb(elementsCount);
    }
    return highMarks;
  }
  function markHigh($this, index) {
    var slot = (index >>> 6 | 0) - 1 | 0;
    Companion_getInstance();
    var offsetInSlot = index & (64 - 1 | 0);
    $this.nx_1[slot] = $this.nx_1[slot].ej((new Long(1, 0)).qb(offsetInSlot));
  }
  function nextUnmarkedHighIndex($this) {
    var inductionVariable = 0;
    var last = $this.nx_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var slot = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = slot + 1 | 0;
        Companion_getInstance();
        var slotOffset = imul(tmp, 64);
        var slotMarks = $this.nx_1[slot];
        while (!slotMarks.equals(new Long(-1, -1))) {
          var indexInSlot = countTrailingZeroBits(slotMarks.cj());
          slotMarks = slotMarks.ej((new Long(1, 0)).qb(indexInSlot));
          var index = slotOffset + indexInSlot | 0;
          if ($this.lx_1($this.kx_1, index)) {
            $this.nx_1[slot] = slotMarks;
            return index;
          }
        }
        $this.nx_1[slot] = slotMarks;
      }
       while (inductionVariable <= last);
    Companion_getInstance_1();
    return -1;
  }
  function ElementMarker(descriptor, readIfAbsent) {
    Companion_getInstance_2();
    this.kx_1 = descriptor;
    this.lx_1 = readIfAbsent;
    var elementsCount = this.kx_1.lq();
    Companion_getInstance();
    if (elementsCount <= 64) {
      var tmp = this;
      var tmp_0;
      Companion_getInstance();
      if (elementsCount === 64) {
        tmp_0 = new Long(0, 0);
      } else {
        tmp_0 = (new Long(-1, -1)).qb(elementsCount);
      }
      tmp.mx_1 = tmp_0;
      this.nx_1 = Companion_getInstance_2().jx_1;
    } else {
      this.mx_1 = new Long(0, 0);
      this.nx_1 = prepareHighMarksArray(this, elementsCount);
    }
  }
  ElementMarker.prototype.ox = function (index) {
    Companion_getInstance();
    if (index < 64) {
      this.mx_1 = this.mx_1.ej((new Long(1, 0)).qb(index));
    } else {
      markHigh(this, index);
    }
  };
  ElementMarker.prototype.px = function () {
    var elementsCount = this.kx_1.lq();
    while (!this.mx_1.equals(new Long(-1, -1))) {
      var index = countTrailingZeroBits(this.mx_1.cj());
      this.mx_1 = this.mx_1.ej((new Long(1, 0)).qb(index));
      if (this.lx_1(this.kx_1, index)) {
        return index;
      }
    }
    Companion_getInstance();
    if (elementsCount > 64) {
      return nextUnmarkedHighIndex(this);
    }
    Companion_getInstance_1();
    return -1;
  };
  ElementMarker.$metadata$ = classMeta('ElementMarker');
  function InlinePrimitiveDescriptor(name, primitiveSerializer) {
    return new InlineClassDescriptor(name, new InlinePrimitiveDescriptor$1(primitiveSerializer));
  }
  function InlineClassDescriptor(name, generatedSerializer) {
    PluginGeneratedSerialDescriptor.call(this, name, generatedSerializer, 1);
    this.cy_1 = true;
  }
  InlineClassDescriptor.prototype.mq = function () {
    return this.cy_1;
  };
  InlineClassDescriptor.prototype.hashCode = function () {
    return imul(PluginGeneratedSerialDescriptor.prototype.hashCode.call(this), 31);
  };
  InlineClassDescriptor.prototype.equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof InlineClassDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.eq() === other.eq())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.internal.InlineClassDescriptor.equals.<anonymous>' call
      var tmp0__anonymous__q1qw7t = other;
      tmp$ret$1 = tmp0__anonymous__q1qw7t.cy_1 ? contentEquals(this.py(), tmp0__anonymous__q1qw7t.py()) : false;
      if (!tmp$ret$1) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.lq() === other.lq())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.lq();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.gq(index).eq() === other.gq(index).eq())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.gq(index).nq(), other.gq(index).nq())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  InlineClassDescriptor.$metadata$ = classMeta('InlineClassDescriptor', undefined, undefined, undefined, undefined, PluginGeneratedSerialDescriptor.prototype);
  function InlinePrimitiveDescriptor$1($primitiveSerializer) {
    this.sy_1 = $primitiveSerializer;
  }
  InlinePrimitiveDescriptor$1.prototype.ty = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = [this.sy_1];
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  InlinePrimitiveDescriptor$1.prototype.bp = function () {
    // Inline function 'kotlin.error' call
    throw IllegalStateException_init_$Create$('unsupported');
  };
  InlinePrimitiveDescriptor$1.prototype.cp = function (encoder, value) {
    // Inline function 'kotlin.error' call
    throw IllegalStateException_init_$Create$('unsupported');
  };
  InlinePrimitiveDescriptor$1.prototype.dp = function (decoder) {
    // Inline function 'kotlin.error' call
    throw IllegalStateException_init_$Create$('unsupported');
  };
  InlinePrimitiveDescriptor$1.$metadata$ = classMeta(undefined, [GeneratedSerializer]);
  function UIntSerializer() {
    UIntSerializer_instance = this;
    this.vy_1 = InlinePrimitiveDescriptor('kotlin.UInt', serializer_5(IntCompanionObject_getInstance()));
  }
  UIntSerializer.prototype.bp = function () {
    return this.vy_1;
  };
  UIntSerializer.prototype.wy = function (encoder, value) {
    var tmp = encoder.at(this.vy_1);
    var tmp$ret$0;
    // Inline function 'kotlin.UInt.toInt' call
    tmp$ret$0 = _UInt___get_data__impl__f0vqqw(value);
    tmp.us(tmp$ret$0);
  };
  UIntSerializer.prototype.cp = function (encoder, value) {
    return this.wy(encoder, value instanceof UInt ? value.ya_1 : THROW_CCE());
  };
  UIntSerializer.prototype.xy = function (decoder) {
    var tmp$ret$0;
    // Inline function 'kotlin.toUInt' call
    var tmp0_toUInt = decoder.ur(this.vy_1).or();
    tmp$ret$0 = _UInt___init__impl__l7qpdl(tmp0_toUInt);
    return tmp$ret$0;
  };
  UIntSerializer.prototype.dp = function (decoder) {
    return new UInt(this.xy(decoder));
  };
  UIntSerializer.$metadata$ = objectMeta('UIntSerializer', [KSerializer]);
  var UIntSerializer_instance;
  function UIntSerializer_getInstance() {
    if (UIntSerializer_instance == null)
      new UIntSerializer();
    return UIntSerializer_instance;
  }
  function ULongSerializer() {
    ULongSerializer_instance = this;
    this.yy_1 = InlinePrimitiveDescriptor('kotlin.ULong', serializer_4(Companion_getInstance()));
  }
  ULongSerializer.prototype.bp = function () {
    return this.yy_1;
  };
  ULongSerializer.prototype.zy = function (encoder, value) {
    var tmp = encoder.at(this.yy_1);
    var tmp$ret$0;
    // Inline function 'kotlin.ULong.toLong' call
    tmp$ret$0 = _ULong___get_data__impl__fggpzb(value);
    tmp.vs(tmp$ret$0);
  };
  ULongSerializer.prototype.cp = function (encoder, value) {
    return this.zy(encoder, value instanceof ULong ? value.gb_1 : THROW_CCE());
  };
  ULongSerializer.prototype.az = function (decoder) {
    var tmp$ret$0;
    // Inline function 'kotlin.toULong' call
    var tmp0_toULong = decoder.ur(this.yy_1).pr();
    tmp$ret$0 = _ULong___init__impl__c78o9k(tmp0_toULong);
    return tmp$ret$0;
  };
  ULongSerializer.prototype.dp = function (decoder) {
    return new ULong(this.az(decoder));
  };
  ULongSerializer.$metadata$ = objectMeta('ULongSerializer', [KSerializer]);
  var ULongSerializer_instance;
  function ULongSerializer_getInstance() {
    if (ULongSerializer_instance == null)
      new ULongSerializer();
    return ULongSerializer_instance;
  }
  function UByteSerializer() {
    UByteSerializer_instance = this;
    this.bz_1 = InlinePrimitiveDescriptor('kotlin.UByte', serializer_7(ByteCompanionObject_getInstance()));
  }
  UByteSerializer.prototype.bp = function () {
    return this.bz_1;
  };
  UByteSerializer.prototype.cz = function (encoder, value) {
    var tmp = encoder.at(this.bz_1);
    var tmp$ret$0;
    // Inline function 'kotlin.UByte.toByte' call
    tmp$ret$0 = _UByte___get_data__impl__jof9qr(value);
    tmp.ss(tmp$ret$0);
  };
  UByteSerializer.prototype.cp = function (encoder, value) {
    return this.cz(encoder, value instanceof UByte ? value.h1_1 : THROW_CCE());
  };
  UByteSerializer.prototype.dz = function (decoder) {
    var tmp$ret$0;
    // Inline function 'kotlin.toUByte' call
    var tmp0_toUByte = decoder.ur(this.bz_1).mr();
    tmp$ret$0 = _UByte___init__impl__g9hnc4(tmp0_toUByte);
    return tmp$ret$0;
  };
  UByteSerializer.prototype.dp = function (decoder) {
    return new UByte(this.dz(decoder));
  };
  UByteSerializer.$metadata$ = objectMeta('UByteSerializer', [KSerializer]);
  var UByteSerializer_instance;
  function UByteSerializer_getInstance() {
    if (UByteSerializer_instance == null)
      new UByteSerializer();
    return UByteSerializer_instance;
  }
  function UShortSerializer() {
    UShortSerializer_instance = this;
    this.ez_1 = InlinePrimitiveDescriptor('kotlin.UShort', serializer_6(ShortCompanionObject_getInstance()));
  }
  UShortSerializer.prototype.bp = function () {
    return this.ez_1;
  };
  UShortSerializer.prototype.fz = function (encoder, value) {
    var tmp = encoder.at(this.ez_1);
    var tmp$ret$0;
    // Inline function 'kotlin.UShort.toShort' call
    tmp$ret$0 = _UShort___get_data__impl__g0245(value);
    tmp.ts(tmp$ret$0);
  };
  UShortSerializer.prototype.cp = function (encoder, value) {
    return this.fz(encoder, value instanceof UShort ? value.nb_1 : THROW_CCE());
  };
  UShortSerializer.prototype.gz = function (decoder) {
    var tmp$ret$0;
    // Inline function 'kotlin.toUShort' call
    var tmp0_toUShort = decoder.ur(this.ez_1).nr();
    tmp$ret$0 = _UShort___init__impl__jigrne(tmp0_toUShort);
    return tmp$ret$0;
  };
  UShortSerializer.prototype.dp = function (decoder) {
    return new UShort(this.gz(decoder));
  };
  UShortSerializer.$metadata$ = objectMeta('UShortSerializer', [KSerializer]);
  var UShortSerializer_instance;
  function UShortSerializer_getInstance() {
    if (UShortSerializer_instance == null)
      new UShortSerializer();
    return UShortSerializer_instance;
  }
  function jsonCachedSerialNames(_this__u8e3s4) {
    return cachedSerialNames(_this__u8e3s4);
  }
  function NullableSerializer(serializer) {
    this.hz_1 = serializer;
    this.iz_1 = new SerialDescriptorForNullable(this.hz_1.bp());
  }
  NullableSerializer.prototype.bp = function () {
    return this.iz_1;
  };
  NullableSerializer.prototype.jz = function (encoder, value) {
    if (!(value == null)) {
      encoder.ot();
      encoder.lt(this.hz_1, value);
    } else {
      encoder.qs();
    }
  };
  NullableSerializer.prototype.cp = function (encoder, value) {
    return this.jz(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  NullableSerializer.prototype.dp = function (decoder) {
    return decoder.jr() ? decoder.wr(this.hz_1) : decoder.kr();
  };
  NullableSerializer.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (other instanceof NullableSerializer)
      other;
    else
      THROW_CCE();
    if (!equals(this.hz_1, other.hz_1))
      return false;
    return true;
  };
  NullableSerializer.prototype.hashCode = function () {
    return hashCode(this.hz_1);
  };
  NullableSerializer.$metadata$ = classMeta('NullableSerializer', [KSerializer]);
  function SerialDescriptorForNullable(original) {
    this.oq_1 = original;
    this.pq_1 = this.oq_1.eq() + '?';
    this.qq_1 = cachedSerialNames(this.oq_1);
  }
  SerialDescriptorForNullable.prototype.fq = function (index) {
    return this.oq_1.fq(index);
  };
  SerialDescriptorForNullable.prototype.gq = function (index) {
    return this.oq_1.gq(index);
  };
  SerialDescriptorForNullable.prototype.hq = function (name) {
    return this.oq_1.hq(name);
  };
  SerialDescriptorForNullable.prototype.iq = function (index) {
    return this.oq_1.iq(index);
  };
  SerialDescriptorForNullable.prototype.jq = function (index) {
    return this.oq_1.jq(index);
  };
  SerialDescriptorForNullable.prototype.kq = function () {
    return this.oq_1.kq();
  };
  SerialDescriptorForNullable.prototype.lq = function () {
    return this.oq_1.lq();
  };
  SerialDescriptorForNullable.prototype.mq = function () {
    return this.oq_1.mq();
  };
  SerialDescriptorForNullable.prototype.nq = function () {
    return this.oq_1.nq();
  };
  SerialDescriptorForNullable.prototype.eq = function () {
    return this.pq_1;
  };
  SerialDescriptorForNullable.prototype.hr = function () {
    return this.qq_1;
  };
  SerialDescriptorForNullable.prototype.aq = function () {
    return true;
  };
  SerialDescriptorForNullable.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SerialDescriptorForNullable))
      return false;
    if (!equals(this.oq_1, other.oq_1))
      return false;
    return true;
  };
  SerialDescriptorForNullable.prototype.toString = function () {
    return '' + this.oq_1 + '?';
  };
  SerialDescriptorForNullable.prototype.hashCode = function () {
    return imul(hashCode(this.oq_1), 31);
  };
  SerialDescriptorForNullable.$metadata$ = classMeta('SerialDescriptorForNullable', [SerialDescriptor, CachedNames]);
  function ObjectSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.gp_1 = this$0.lz_1;
      return Unit_getInstance();
    };
  }
  function ObjectSerializer$descriptor$delegate$lambda($serialName, this$0) {
    return function () {
      var tmp = OBJECT_getInstance();
      return buildSerialDescriptor$default($serialName, tmp, [], ObjectSerializer$descriptor$delegate$lambda$lambda(this$0), 4, null);
    };
  }
  function ObjectSerializer(serialName, objectInstance) {
    this.kz_1 = objectInstance;
    this.lz_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.mz_1 = lazy(tmp_0, ObjectSerializer$descriptor$delegate$lambda(serialName, this));
  }
  ObjectSerializer.prototype.bp = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = descriptor$factory_0();
    tmp$ret$0 = this.mz_1.j2();
    return tmp$ret$0;
  };
  ObjectSerializer.prototype.cp = function (encoder, value) {
    encoder.xr(this.bp()).yr(this.bp());
  };
  ObjectSerializer.prototype.dp = function (decoder) {
    decoder.xr(this.bp()).yr(this.bp());
    return this.kz_1;
  };
  ObjectSerializer.$metadata$ = classMeta('ObjectSerializer', [KSerializer]);
  function descriptor$factory_0() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.bp();
    }, null);
  }
  function get_EMPTY_DESCRIPTOR_ARRAY() {
    init_properties_Platform_common_kt_9ujmfm();
    return EMPTY_DESCRIPTOR_ARRAY;
  }
  var EMPTY_DESCRIPTOR_ARRAY;
  function cast(_this__u8e3s4) {
    init_properties_Platform_common_kt_9ujmfm();
    return isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
  }
  function compactArray(_this__u8e3s4) {
    init_properties_Platform_common_kt_9ujmfm();
    var tmp$ret$2;
    // Inline function 'kotlin.takeUnless' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    var tmp$ret$1;
    // Inline function 'kotlinx.serialization.internal.compactArray.<anonymous>' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    tmp$ret$0 = _this__u8e3s4 == null ? true : _this__u8e3s4.d();
    tmp$ret$1 = tmp$ret$0;
    if (!tmp$ret$1) {
      tmp = _this__u8e3s4;
    } else {
      tmp = null;
    }
    tmp$ret$2 = tmp;
    var tmp0_safe_receiver = tmp$ret$2;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$3;
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp$ret$3 = copyToArray(tmp0_safe_receiver);
      tmp_0 = tmp$ret$3;
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp1_elvis_lhs == null ? get_EMPTY_DESCRIPTOR_ARRAY() : tmp1_elvis_lhs;
  }
  function elementsHashCodeBy(_this__u8e3s4, selector) {
    init_properties_Platform_common_kt_9ujmfm();
    var tmp$ret$2;
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var tmp0_iterator = _this__u8e3s4.l();
    while (tmp0_iterator.m()) {
      var element = tmp0_iterator.n();
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy.<anonymous>' call
      var tmp0__anonymous__q1qw7t = accumulator;
      var tmp = imul(31, tmp0__anonymous__q1qw7t);
      var tmp$ret$0;
      // Inline function 'kotlin.hashCode' call
      var tmp0_hashCode = selector(element);
      var tmp0_safe_receiver = tmp0_hashCode;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      tmp$ret$1 = tmp + tmp$ret$0 | 0;
      accumulator = tmp$ret$1;
    }
    tmp$ret$2 = accumulator;
    return tmp$ret$2;
  }
  function cachedSerialNames(_this__u8e3s4) {
    init_properties_Platform_common_kt_9ujmfm();
    if (isInterface(_this__u8e3s4, CachedNames))
      return _this__u8e3s4.hr();
    var result = HashSet_init_$Create$_1(_this__u8e3s4.lq());
    var inductionVariable = 0;
    var last = _this__u8e3s4.lq();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.plusAssign' call
        var tmp0_plusAssign = _this__u8e3s4.iq(i);
        result.g(tmp0_plusAssign);
      }
       while (inductionVariable < last);
    return result;
  }
  function kclass(_this__u8e3s4) {
    init_properties_Platform_common_kt_9ujmfm();
    var t = _this__u8e3s4.tf();
    var tmp;
    if (!(t == null) ? isInterface(t, KClass) : false) {
      tmp = t;
    } else {
      var tmp0_error = 'Only KClass supported as classifier, got ' + t;
      throw IllegalStateException_init_$Create$(toString(tmp0_error));
    }
    var tmp_0 = tmp;
    return isInterface(tmp_0, KClass) ? tmp_0 : THROW_CCE();
  }
  function cast_0(_this__u8e3s4) {
    init_properties_Platform_common_kt_9ujmfm();
    return isInterface(_this__u8e3s4, SerializationStrategy) ? _this__u8e3s4 : THROW_CCE();
  }
  var properties_initialized_Platform_common_kt_i7q4ty;
  function init_properties_Platform_common_kt_9ujmfm() {
    if (properties_initialized_Platform_common_kt_i7q4ty) {
    } else {
      properties_initialized_Platform_common_kt_i7q4ty = true;
      var tmp$ret$2;
      // Inline function 'kotlin.arrayOf' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = [];
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      EMPTY_DESCRIPTOR_ARRAY = tmp$ret$2;
    }
  }
  function throwMissingFieldException(seen, goldenMask, descriptor) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$_0();
    var missingFields = tmp$ret$0;
    var missingFieldsBits = goldenMask & ~seen;
    var inductionVariable = 0;
    if (inductionVariable < 32)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!((missingFieldsBits & 1) === 0)) {
          // Inline function 'kotlin.collections.plusAssign' call
          var tmp0_plusAssign = descriptor.iq(i);
          missingFields.g(tmp0_plusAssign);
        }
        missingFieldsBits = missingFieldsBits >>> 1 | 0;
      }
       while (inductionVariable < 32);
    throw MissingFieldException_init_$Create$(missingFields, descriptor.eq());
  }
  function hashCodeImpl(_this__u8e3s4, typeParams) {
    var result = getStringHashCode(_this__u8e3s4.eq());
    result = imul(31, result) + contentHashCode(typeParams) | 0;
    var elementDescriptors = get_elementDescriptors(_this__u8e3s4);
    var tmp$ret$4;
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    var tmp$ret$3;
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var tmp0_iterator = elementDescriptors.l();
    while (tmp0_iterator.m()) {
      var element = tmp0_iterator.n();
      var tmp$ret$2;
      // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy.<anonymous>' call
      var tmp0__anonymous__q1qw7t = accumulator;
      var tmp = imul(31, tmp0__anonymous__q1qw7t);
      var tmp$ret$1;
      // Inline function 'kotlin.hashCode' call
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.hashCodeImpl.<anonymous>' call
      tmp$ret$0 = element.eq();
      var tmp0_hashCode = tmp$ret$0;
      var tmp0_safe_receiver = tmp0_hashCode;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      tmp$ret$1 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      tmp$ret$2 = tmp + tmp$ret$1 | 0;
      accumulator = tmp$ret$2;
    }
    tmp$ret$3 = accumulator;
    tmp$ret$4 = tmp$ret$3;
    var namesHash = tmp$ret$4;
    var tmp$ret$9;
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    var tmp$ret$8;
    // Inline function 'kotlin.collections.fold' call
    var accumulator_0 = 1;
    var tmp0_iterator_0 = elementDescriptors.l();
    while (tmp0_iterator_0.m()) {
      var element_0 = tmp0_iterator_0.n();
      var tmp$ret$7;
      // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy.<anonymous>' call
      var tmp0__anonymous__q1qw7t_0 = accumulator_0;
      var tmp_0 = imul(31, tmp0__anonymous__q1qw7t_0);
      var tmp$ret$6;
      // Inline function 'kotlin.hashCode' call
      var tmp$ret$5;
      // Inline function 'kotlinx.serialization.internal.hashCodeImpl.<anonymous>' call
      tmp$ret$5 = element_0.nq();
      var tmp0_hashCode_0 = tmp$ret$5;
      var tmp0_safe_receiver_0 = tmp0_hashCode_0;
      var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
      tmp$ret$6 = tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0;
      tmp$ret$7 = tmp_0 + tmp$ret$6 | 0;
      accumulator_0 = tmp$ret$7;
    }
    tmp$ret$8 = accumulator_0;
    tmp$ret$9 = tmp$ret$8;
    var kindHash = tmp$ret$9;
    result = imul(31, result) + namesHash | 0;
    result = imul(31, result) + kindHash | 0;
    return result;
  }
  function _get_childSerializers__7vnyfa($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = childSerializers$factory();
    tmp$ret$0 = $this.my_1.j2();
    return tmp$ret$0;
  }
  function _get__hashCode__tgwhef_0($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = _hashCode$factory_0();
    tmp$ret$0 = $this.oy_1.j2();
    return tmp$ret$0;
  }
  function buildIndices($this) {
    var indices = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = $this.hy_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.set' call
        var tmp0_set = $this.hy_1[i];
        indices.s(tmp0_set, i);
      }
       while (inductionVariable <= last);
    return indices;
  }
  function PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.ey_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ty();
      return tmp1_elvis_lhs == null ? get_EMPTY_SERIALIZER_ARRAY() : tmp1_elvis_lhs;
    };
  }
  function PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.ey_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.uy();
      var tmp;
      if (tmp1_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp$ret$2;
        // Inline function 'kotlin.collections.map' call
        var tmp$ret$1;
        // Inline function 'kotlin.collections.mapTo' call
        var tmp0_mapTo = ArrayList_init_$Create$(tmp1_safe_receiver.length);
        var tmp0_iterator = arrayIterator(tmp1_safe_receiver);
        while (tmp0_iterator.m()) {
          var item = tmp0_iterator.n();
          var tmp$ret$0;
          // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.typeParameterDescriptors$delegate.<anonymous>.<anonymous>' call
          tmp$ret$0 = item.bp();
          tmp0_mapTo.g(tmp$ret$0);
        }
        tmp$ret$1 = tmp0_mapTo;
        tmp$ret$2 = tmp$ret$1;
        tmp = tmp$ret$2;
      }
      return compactArray(tmp);
    };
  }
  function PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.py());
    };
  }
  function PluginGeneratedSerialDescriptor$toString$lambda(this$0) {
    return function (i) {
      return this$0.iq(i) + ': ' + this$0.gq(i).eq();
    };
  }
  function PluginGeneratedSerialDescriptor(serialName, generatedSerializer, elementsCount) {
    this.dy_1 = serialName;
    this.ey_1 = generatedSerializer;
    this.fy_1 = elementsCount;
    this.gy_1 = -1;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.fy_1;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(tmp_1), null);
    var tmp_2 = tmp$ret$0;
    while (tmp_0 < tmp_1) {
      var tmp_3 = tmp_0;
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.names.<anonymous>' call
      tmp$ret$1 = '[UNINITIALIZED]';
      tmp_2[tmp_3] = tmp$ret$1;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.hy_1 = tmp_2;
    var tmp_4 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = this.fy_1;
    tmp$ret$2 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    tmp_4.iy_1 = tmp$ret$2;
    this.jy_1 = null;
    this.ky_1 = booleanArray(this.fy_1);
    this.ly_1 = emptyMap();
    var tmp_5 = this;
    var tmp_6 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_5.my_1 = lazy(tmp_6, PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this));
    var tmp_7 = this;
    var tmp_8 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_7.ny_1 = lazy(tmp_8, PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this));
    var tmp_9 = this;
    var tmp_10 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_9.oy_1 = lazy(tmp_10, PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this));
  }
  PluginGeneratedSerialDescriptor.prototype.eq = function () {
    return this.dy_1;
  };
  PluginGeneratedSerialDescriptor.prototype.lq = function () {
    return this.fy_1;
  };
  PluginGeneratedSerialDescriptor.prototype.nq = function () {
    return CLASS_getInstance();
  };
  PluginGeneratedSerialDescriptor.prototype.kq = function () {
    var tmp0_elvis_lhs = this.jy_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  PluginGeneratedSerialDescriptor.prototype.hr = function () {
    return this.ly_1.y2();
  };
  PluginGeneratedSerialDescriptor.prototype.py = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = typeParameterDescriptors$factory();
    tmp$ret$0 = this.ny_1.j2();
    return tmp$ret$0;
  };
  PluginGeneratedSerialDescriptor.prototype.qy = function (name, isOptional) {
    var tmp0_this = this;
    tmp0_this.gy_1 = tmp0_this.gy_1 + 1 | 0;
    this.hy_1[tmp0_this.gy_1] = name;
    this.ky_1[this.gy_1] = isOptional;
    this.iy_1[this.gy_1] = null;
    if (this.gy_1 === (this.fy_1 - 1 | 0)) {
      this.ly_1 = buildIndices(this);
    }
  };
  PluginGeneratedSerialDescriptor.prototype.ry = function (annotation) {
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = this.iy_1[this.gy_1];
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.pushAnnotation.<anonymous>' call
    var tmp;
    if (tmp0_let == null) {
      var result = ArrayList_init_$Create$(1);
      this.iy_1[this.gy_1] = result;
      tmp = result;
    } else {
      tmp = tmp0_let;
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
    var list = tmp$ret$1;
    list.g(annotation);
  };
  PluginGeneratedSerialDescriptor.prototype.gq = function (index) {
    return getChecked(_get_childSerializers__7vnyfa(this), index).bp();
  };
  PluginGeneratedSerialDescriptor.prototype.jq = function (index) {
    return getChecked_0(this.ky_1, index);
  };
  PluginGeneratedSerialDescriptor.prototype.fq = function (index) {
    var tmp0_elvis_lhs = getChecked(this.iy_1, index);
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  PluginGeneratedSerialDescriptor.prototype.iq = function (index) {
    return getChecked(this.hy_1, index);
  };
  PluginGeneratedSerialDescriptor.prototype.hq = function (name) {
    var tmp0_elvis_lhs = this.ly_1.x2(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      Companion_getInstance_1();
      tmp = -3;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  PluginGeneratedSerialDescriptor.prototype.equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof PluginGeneratedSerialDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.eq() === other.eq())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.equals.<anonymous>' call
      var tmp0__anonymous__q1qw7t = other;
      tmp$ret$1 = contentEquals(this.py(), tmp0__anonymous__q1qw7t.py());
      if (!tmp$ret$1) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.lq() === other.lq())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.lq();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.gq(index).eq() === other.gq(index).eq())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.gq(index).nq(), other.gq(index).nq())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  PluginGeneratedSerialDescriptor.prototype.hashCode = function () {
    return _get__hashCode__tgwhef_0(this);
  };
  PluginGeneratedSerialDescriptor.prototype.toString = function () {
    var tmp = until(0, this.fy_1);
    var tmp_0 = this.eq() + '(';
    return joinToString$default(tmp, ', ', tmp_0, ')', 0, null, PluginGeneratedSerialDescriptor$toString$lambda(this), 24, null);
  };
  PluginGeneratedSerialDescriptor.$metadata$ = classMeta('PluginGeneratedSerialDescriptor', [SerialDescriptor, CachedNames]);
  function childSerializers$factory() {
    return getPropertyCallableRef('childSerializers', 1, KProperty1, function (receiver) {
      return _get_childSerializers__7vnyfa(receiver);
    }, null);
  }
  function typeParameterDescriptors$factory() {
    return getPropertyCallableRef('typeParameterDescriptors', 1, KProperty1, function (receiver) {
      return receiver.py();
    }, null);
  }
  function _hashCode$factory_0() {
    return getPropertyCallableRef('_hashCode', 1, KProperty1, function (receiver) {
      return _get__hashCode__tgwhef_0(receiver);
    }, null);
  }
  function get_EMPTY_SERIALIZER_ARRAY() {
    init_properties_PluginHelperInterfaces_kt_tblf27();
    return EMPTY_SERIALIZER_ARRAY;
  }
  var EMPTY_SERIALIZER_ARRAY;
  function GeneratedSerializer() {
  }
  GeneratedSerializer.$metadata$ = interfaceMeta('GeneratedSerializer', [KSerializer]);
  function SerializerFactory() {
  }
  SerializerFactory.$metadata$ = interfaceMeta('SerializerFactory');
  var properties_initialized_PluginHelperInterfaces_kt_ap8in1;
  function init_properties_PluginHelperInterfaces_kt_tblf27() {
    if (properties_initialized_PluginHelperInterfaces_kt_ap8in1) {
    } else {
      properties_initialized_PluginHelperInterfaces_kt_ap8in1 = true;
      var tmp$ret$2;
      // Inline function 'kotlin.arrayOf' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = [];
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      EMPTY_SERIALIZER_ARRAY = tmp$ret$2;
    }
  }
  function CharArraySerializer_0() {
    CharArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_1(Companion_getInstance_0()));
  }
  CharArraySerializer_0.prototype.qz = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  CharArraySerializer_0.prototype.cv = function (_this__u8e3s4) {
    return this.qz((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  CharArraySerializer_0.prototype.rz = function (_this__u8e3s4) {
    return new CharArrayBuilder(_this__u8e3s4);
  };
  CharArraySerializer_0.prototype.xu = function (_this__u8e3s4) {
    return this.rz((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  CharArraySerializer_0.prototype.wu = function () {
    return charArray(0);
  };
  CharArraySerializer_0.prototype.sz = function (decoder, index, builder, checkIndex) {
    builder.vz(decoder.gs(this.ou_1, index));
  };
  CharArraySerializer_0.prototype.yu = function (decoder, index, builder, checkIndex) {
    return this.sz(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  CharArraySerializer_0.prototype.wz = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.it(this.ou_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  CharArraySerializer_0.prototype.av = function (encoder, content, size) {
    return this.wz(encoder, (!(content == null) ? isCharArray(content) : false) ? content : THROW_CCE(), size);
  };
  CharArraySerializer_0.$metadata$ = objectMeta('CharArraySerializer', [KSerializer], undefined, undefined, undefined, PrimitiveArraySerializer.prototype);
  var CharArraySerializer_instance;
  function CharArraySerializer_getInstance() {
    if (CharArraySerializer_instance == null)
      new CharArraySerializer_0();
    return CharArraySerializer_instance;
  }
  function DoubleArraySerializer_0() {
    DoubleArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_2(DoubleCompanionObject_getInstance()));
  }
  DoubleArraySerializer_0.prototype.zz = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  DoubleArraySerializer_0.prototype.cv = function (_this__u8e3s4) {
    return this.zz((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  DoubleArraySerializer_0.prototype.a10 = function (_this__u8e3s4) {
    return new DoubleArrayBuilder(_this__u8e3s4);
  };
  DoubleArraySerializer_0.prototype.xu = function (_this__u8e3s4) {
    return this.a10((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  DoubleArraySerializer_0.prototype.wu = function () {
    return new Float64Array(0);
  };
  DoubleArraySerializer_0.prototype.b10 = function (decoder, index, builder, checkIndex) {
    builder.e10(decoder.fs(this.ou_1, index));
  };
  DoubleArraySerializer_0.prototype.yu = function (decoder, index, builder, checkIndex) {
    return this.b10(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  DoubleArraySerializer_0.prototype.f10 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.ht(this.ou_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  DoubleArraySerializer_0.prototype.av = function (encoder, content, size) {
    return this.f10(encoder, (!(content == null) ? isDoubleArray(content) : false) ? content : THROW_CCE(), size);
  };
  DoubleArraySerializer_0.$metadata$ = objectMeta('DoubleArraySerializer', [KSerializer], undefined, undefined, undefined, PrimitiveArraySerializer.prototype);
  var DoubleArraySerializer_instance;
  function DoubleArraySerializer_getInstance() {
    if (DoubleArraySerializer_instance == null)
      new DoubleArraySerializer_0();
    return DoubleArraySerializer_instance;
  }
  function FloatArraySerializer_0() {
    FloatArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_3(FloatCompanionObject_getInstance()));
  }
  FloatArraySerializer_0.prototype.i10 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  FloatArraySerializer_0.prototype.cv = function (_this__u8e3s4) {
    return this.i10((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  FloatArraySerializer_0.prototype.j10 = function (_this__u8e3s4) {
    return new FloatArrayBuilder(_this__u8e3s4);
  };
  FloatArraySerializer_0.prototype.xu = function (_this__u8e3s4) {
    return this.j10((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  FloatArraySerializer_0.prototype.wu = function () {
    return new Float32Array(0);
  };
  FloatArraySerializer_0.prototype.k10 = function (decoder, index, builder, checkIndex) {
    builder.n10(decoder.es(this.ou_1, index));
  };
  FloatArraySerializer_0.prototype.yu = function (decoder, index, builder, checkIndex) {
    return this.k10(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  FloatArraySerializer_0.prototype.o10 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.gt(this.ou_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  FloatArraySerializer_0.prototype.av = function (encoder, content, size) {
    return this.o10(encoder, (!(content == null) ? isFloatArray(content) : false) ? content : THROW_CCE(), size);
  };
  FloatArraySerializer_0.$metadata$ = objectMeta('FloatArraySerializer', [KSerializer], undefined, undefined, undefined, PrimitiveArraySerializer.prototype);
  var FloatArraySerializer_instance;
  function FloatArraySerializer_getInstance() {
    if (FloatArraySerializer_instance == null)
      new FloatArraySerializer_0();
    return FloatArraySerializer_instance;
  }
  function LongArraySerializer_0() {
    LongArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_4(Companion_getInstance()));
  }
  LongArraySerializer_0.prototype.r10 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  LongArraySerializer_0.prototype.cv = function (_this__u8e3s4) {
    return this.r10((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  LongArraySerializer_0.prototype.s10 = function (_this__u8e3s4) {
    return new LongArrayBuilder(_this__u8e3s4);
  };
  LongArraySerializer_0.prototype.xu = function (_this__u8e3s4) {
    return this.s10((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  LongArraySerializer_0.prototype.wu = function () {
    return longArray(0);
  };
  LongArraySerializer_0.prototype.t10 = function (decoder, index, builder, checkIndex) {
    builder.w10(decoder.ds(this.ou_1, index));
  };
  LongArraySerializer_0.prototype.yu = function (decoder, index, builder, checkIndex) {
    return this.t10(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  LongArraySerializer_0.prototype.x10 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.ft(this.ou_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  LongArraySerializer_0.prototype.av = function (encoder, content, size) {
    return this.x10(encoder, (!(content == null) ? isLongArray(content) : false) ? content : THROW_CCE(), size);
  };
  LongArraySerializer_0.$metadata$ = objectMeta('LongArraySerializer', [KSerializer], undefined, undefined, undefined, PrimitiveArraySerializer.prototype);
  var LongArraySerializer_instance;
  function LongArraySerializer_getInstance() {
    if (LongArraySerializer_instance == null)
      new LongArraySerializer_0();
    return LongArraySerializer_instance;
  }
  function IntArraySerializer_0() {
    IntArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_5(IntCompanionObject_getInstance()));
  }
  IntArraySerializer_0.prototype.a11 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  IntArraySerializer_0.prototype.cv = function (_this__u8e3s4) {
    return this.a11((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  IntArraySerializer_0.prototype.b11 = function (_this__u8e3s4) {
    return new IntArrayBuilder(_this__u8e3s4);
  };
  IntArraySerializer_0.prototype.xu = function (_this__u8e3s4) {
    return this.b11((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  IntArraySerializer_0.prototype.wu = function () {
    return new Int32Array(0);
  };
  IntArraySerializer_0.prototype.c11 = function (decoder, index, builder, checkIndex) {
    builder.f11(decoder.cs(this.ou_1, index));
  };
  IntArraySerializer_0.prototype.yu = function (decoder, index, builder, checkIndex) {
    return this.c11(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  IntArraySerializer_0.prototype.g11 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.et(this.ou_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  IntArraySerializer_0.prototype.av = function (encoder, content, size) {
    return this.g11(encoder, (!(content == null) ? isIntArray(content) : false) ? content : THROW_CCE(), size);
  };
  IntArraySerializer_0.$metadata$ = objectMeta('IntArraySerializer', [KSerializer], undefined, undefined, undefined, PrimitiveArraySerializer.prototype);
  var IntArraySerializer_instance;
  function IntArraySerializer_getInstance() {
    if (IntArraySerializer_instance == null)
      new IntArraySerializer_0();
    return IntArraySerializer_instance;
  }
  function ShortArraySerializer_0() {
    ShortArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_6(ShortCompanionObject_getInstance()));
  }
  ShortArraySerializer_0.prototype.j11 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  ShortArraySerializer_0.prototype.cv = function (_this__u8e3s4) {
    return this.j11((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ShortArraySerializer_0.prototype.k11 = function (_this__u8e3s4) {
    return new ShortArrayBuilder(_this__u8e3s4);
  };
  ShortArraySerializer_0.prototype.xu = function (_this__u8e3s4) {
    return this.k11((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ShortArraySerializer_0.prototype.wu = function () {
    return new Int16Array(0);
  };
  ShortArraySerializer_0.prototype.l11 = function (decoder, index, builder, checkIndex) {
    builder.o11(decoder.bs(this.ou_1, index));
  };
  ShortArraySerializer_0.prototype.yu = function (decoder, index, builder, checkIndex) {
    return this.l11(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  ShortArraySerializer_0.prototype.p11 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.dt(this.ou_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  ShortArraySerializer_0.prototype.av = function (encoder, content, size) {
    return this.p11(encoder, (!(content == null) ? isShortArray(content) : false) ? content : THROW_CCE(), size);
  };
  ShortArraySerializer_0.$metadata$ = objectMeta('ShortArraySerializer', [KSerializer], undefined, undefined, undefined, PrimitiveArraySerializer.prototype);
  var ShortArraySerializer_instance;
  function ShortArraySerializer_getInstance() {
    if (ShortArraySerializer_instance == null)
      new ShortArraySerializer_0();
    return ShortArraySerializer_instance;
  }
  function ByteArraySerializer_0() {
    ByteArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_7(ByteCompanionObject_getInstance()));
  }
  ByteArraySerializer_0.prototype.s11 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  ByteArraySerializer_0.prototype.cv = function (_this__u8e3s4) {
    return this.s11((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ByteArraySerializer_0.prototype.t11 = function (_this__u8e3s4) {
    return new ByteArrayBuilder(_this__u8e3s4);
  };
  ByteArraySerializer_0.prototype.xu = function (_this__u8e3s4) {
    return this.t11((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ByteArraySerializer_0.prototype.wu = function () {
    return new Int8Array(0);
  };
  ByteArraySerializer_0.prototype.u11 = function (decoder, index, builder, checkIndex) {
    builder.x11(decoder.as(this.ou_1, index));
  };
  ByteArraySerializer_0.prototype.yu = function (decoder, index, builder, checkIndex) {
    return this.u11(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  ByteArraySerializer_0.prototype.y11 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.ct(this.ou_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  ByteArraySerializer_0.prototype.av = function (encoder, content, size) {
    return this.y11(encoder, (!(content == null) ? isByteArray(content) : false) ? content : THROW_CCE(), size);
  };
  ByteArraySerializer_0.$metadata$ = objectMeta('ByteArraySerializer', [KSerializer], undefined, undefined, undefined, PrimitiveArraySerializer.prototype);
  var ByteArraySerializer_instance;
  function ByteArraySerializer_getInstance() {
    if (ByteArraySerializer_instance == null)
      new ByteArraySerializer_0();
    return ByteArraySerializer_instance;
  }
  function BooleanArraySerializer_0() {
    BooleanArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_8(BooleanCompanionObject_getInstance()));
  }
  BooleanArraySerializer_0.prototype.b12 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  BooleanArraySerializer_0.prototype.cv = function (_this__u8e3s4) {
    return this.b12((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  BooleanArraySerializer_0.prototype.c12 = function (_this__u8e3s4) {
    return new BooleanArrayBuilder(_this__u8e3s4);
  };
  BooleanArraySerializer_0.prototype.xu = function (_this__u8e3s4) {
    return this.c12((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  BooleanArraySerializer_0.prototype.wu = function () {
    return booleanArray(0);
  };
  BooleanArraySerializer_0.prototype.d12 = function (decoder, index, builder, checkIndex) {
    builder.g12(decoder.zr(this.ou_1, index));
  };
  BooleanArraySerializer_0.prototype.yu = function (decoder, index, builder, checkIndex) {
    return this.d12(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  BooleanArraySerializer_0.prototype.h12 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.bt(this.ou_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  BooleanArraySerializer_0.prototype.av = function (encoder, content, size) {
    return this.h12(encoder, (!(content == null) ? isBooleanArray(content) : false) ? content : THROW_CCE(), size);
  };
  BooleanArraySerializer_0.$metadata$ = objectMeta('BooleanArraySerializer', [KSerializer], undefined, undefined, undefined, PrimitiveArraySerializer.prototype);
  var BooleanArraySerializer_instance;
  function BooleanArraySerializer_getInstance() {
    if (BooleanArraySerializer_instance == null)
      new BooleanArraySerializer_0();
    return BooleanArraySerializer_instance;
  }
  function CharArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.tz_1 = bufferWithData;
    this.uz_1 = bufferWithData.length;
    this.od(10);
  }
  CharArrayBuilder.prototype.qu = function () {
    return this.uz_1;
  };
  CharArrayBuilder.prototype.od = function (requiredCapacity) {
    if (this.tz_1.length < requiredCapacity)
      this.tz_1 = copyOf(this.tz_1, coerceAtLeast(requiredCapacity, imul(this.tz_1.length, 2)));
  };
  CharArrayBuilder.prototype.vz = function (c) {
    this.hv(0, 1, null);
    var tmp = this.tz_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.uz_1;
    tmp0_this.uz_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  CharArrayBuilder.prototype.jk = function () {
    return copyOf(this.tz_1, this.uz_1);
  };
  CharArrayBuilder.$metadata$ = classMeta('CharArrayBuilder', undefined, undefined, undefined, undefined, PrimitiveArrayBuilder.prototype);
  function DoubleArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.c10_1 = bufferWithData;
    this.d10_1 = bufferWithData.length;
    this.od(10);
  }
  DoubleArrayBuilder.prototype.qu = function () {
    return this.d10_1;
  };
  DoubleArrayBuilder.prototype.od = function (requiredCapacity) {
    if (this.c10_1.length < requiredCapacity)
      this.c10_1 = copyOf_0(this.c10_1, coerceAtLeast(requiredCapacity, imul(this.c10_1.length, 2)));
  };
  DoubleArrayBuilder.prototype.e10 = function (c) {
    this.hv(0, 1, null);
    var tmp = this.c10_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.d10_1;
    tmp0_this.d10_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  DoubleArrayBuilder.prototype.jk = function () {
    return copyOf_0(this.c10_1, this.d10_1);
  };
  DoubleArrayBuilder.$metadata$ = classMeta('DoubleArrayBuilder', undefined, undefined, undefined, undefined, PrimitiveArrayBuilder.prototype);
  function FloatArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.l10_1 = bufferWithData;
    this.m10_1 = bufferWithData.length;
    this.od(10);
  }
  FloatArrayBuilder.prototype.qu = function () {
    return this.m10_1;
  };
  FloatArrayBuilder.prototype.od = function (requiredCapacity) {
    if (this.l10_1.length < requiredCapacity)
      this.l10_1 = copyOf_1(this.l10_1, coerceAtLeast(requiredCapacity, imul(this.l10_1.length, 2)));
  };
  FloatArrayBuilder.prototype.n10 = function (c) {
    this.hv(0, 1, null);
    var tmp = this.l10_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.m10_1;
    tmp0_this.m10_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  FloatArrayBuilder.prototype.jk = function () {
    return copyOf_1(this.l10_1, this.m10_1);
  };
  FloatArrayBuilder.$metadata$ = classMeta('FloatArrayBuilder', undefined, undefined, undefined, undefined, PrimitiveArrayBuilder.prototype);
  function LongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.u10_1 = bufferWithData;
    this.v10_1 = bufferWithData.length;
    this.od(10);
  }
  LongArrayBuilder.prototype.qu = function () {
    return this.v10_1;
  };
  LongArrayBuilder.prototype.od = function (requiredCapacity) {
    if (this.u10_1.length < requiredCapacity)
      this.u10_1 = copyOf_2(this.u10_1, coerceAtLeast(requiredCapacity, imul(this.u10_1.length, 2)));
  };
  LongArrayBuilder.prototype.w10 = function (c) {
    this.hv(0, 1, null);
    var tmp = this.u10_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.v10_1;
    tmp0_this.v10_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  LongArrayBuilder.prototype.jk = function () {
    return copyOf_2(this.u10_1, this.v10_1);
  };
  LongArrayBuilder.$metadata$ = classMeta('LongArrayBuilder', undefined, undefined, undefined, undefined, PrimitiveArrayBuilder.prototype);
  function IntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.d11_1 = bufferWithData;
    this.e11_1 = bufferWithData.length;
    this.od(10);
  }
  IntArrayBuilder.prototype.qu = function () {
    return this.e11_1;
  };
  IntArrayBuilder.prototype.od = function (requiredCapacity) {
    if (this.d11_1.length < requiredCapacity)
      this.d11_1 = copyOf_3(this.d11_1, coerceAtLeast(requiredCapacity, imul(this.d11_1.length, 2)));
  };
  IntArrayBuilder.prototype.f11 = function (c) {
    this.hv(0, 1, null);
    var tmp = this.d11_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.e11_1;
    tmp0_this.e11_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  IntArrayBuilder.prototype.jk = function () {
    return copyOf_3(this.d11_1, this.e11_1);
  };
  IntArrayBuilder.$metadata$ = classMeta('IntArrayBuilder', undefined, undefined, undefined, undefined, PrimitiveArrayBuilder.prototype);
  function ShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.m11_1 = bufferWithData;
    this.n11_1 = bufferWithData.length;
    this.od(10);
  }
  ShortArrayBuilder.prototype.qu = function () {
    return this.n11_1;
  };
  ShortArrayBuilder.prototype.od = function (requiredCapacity) {
    if (this.m11_1.length < requiredCapacity)
      this.m11_1 = copyOf_4(this.m11_1, coerceAtLeast(requiredCapacity, imul(this.m11_1.length, 2)));
  };
  ShortArrayBuilder.prototype.o11 = function (c) {
    this.hv(0, 1, null);
    var tmp = this.m11_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.n11_1;
    tmp0_this.n11_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  ShortArrayBuilder.prototype.jk = function () {
    return copyOf_4(this.m11_1, this.n11_1);
  };
  ShortArrayBuilder.$metadata$ = classMeta('ShortArrayBuilder', undefined, undefined, undefined, undefined, PrimitiveArrayBuilder.prototype);
  function ByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.v11_1 = bufferWithData;
    this.w11_1 = bufferWithData.length;
    this.od(10);
  }
  ByteArrayBuilder.prototype.qu = function () {
    return this.w11_1;
  };
  ByteArrayBuilder.prototype.od = function (requiredCapacity) {
    if (this.v11_1.length < requiredCapacity)
      this.v11_1 = copyOf_5(this.v11_1, coerceAtLeast(requiredCapacity, imul(this.v11_1.length, 2)));
  };
  ByteArrayBuilder.prototype.x11 = function (c) {
    this.hv(0, 1, null);
    var tmp = this.v11_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.w11_1;
    tmp0_this.w11_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  ByteArrayBuilder.prototype.jk = function () {
    return copyOf_5(this.v11_1, this.w11_1);
  };
  ByteArrayBuilder.$metadata$ = classMeta('ByteArrayBuilder', undefined, undefined, undefined, undefined, PrimitiveArrayBuilder.prototype);
  function BooleanArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.e12_1 = bufferWithData;
    this.f12_1 = bufferWithData.length;
    this.od(10);
  }
  BooleanArrayBuilder.prototype.qu = function () {
    return this.f12_1;
  };
  BooleanArrayBuilder.prototype.od = function (requiredCapacity) {
    if (this.e12_1.length < requiredCapacity)
      this.e12_1 = copyOf_6(this.e12_1, coerceAtLeast(requiredCapacity, imul(this.e12_1.length, 2)));
  };
  BooleanArrayBuilder.prototype.g12 = function (c) {
    this.hv(0, 1, null);
    var tmp = this.e12_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.f12_1;
    tmp0_this.f12_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  BooleanArrayBuilder.prototype.jk = function () {
    return copyOf_6(this.e12_1, this.f12_1);
  };
  BooleanArrayBuilder.$metadata$ = classMeta('BooleanArrayBuilder', undefined, undefined, undefined, undefined, PrimitiveArrayBuilder.prototype);
  function get_BUILTIN_SERIALIZERS() {
    init_properties_Primitives_kt_u7dn2q();
    return BUILTIN_SERIALIZERS;
  }
  var BUILTIN_SERIALIZERS;
  function StringSerializer() {
    StringSerializer_instance = this;
    this.i12_1 = new PrimitiveSerialDescriptor_0('kotlin.String', STRING_getInstance());
  }
  StringSerializer.prototype.bp = function () {
    return this.i12_1;
  };
  StringSerializer.prototype.j12 = function (encoder, value) {
    return encoder.zs(value);
  };
  StringSerializer.prototype.cp = function (encoder, value) {
    return this.j12(encoder, (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE());
  };
  StringSerializer.prototype.dp = function (decoder) {
    return decoder.tr();
  };
  StringSerializer.$metadata$ = objectMeta('StringSerializer', [KSerializer]);
  var StringSerializer_instance;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance == null)
      new StringSerializer();
    return StringSerializer_instance;
  }
  function CharSerializer() {
    CharSerializer_instance = this;
    this.k12_1 = new PrimitiveSerialDescriptor_0('kotlin.Char', CHAR_getInstance());
  }
  CharSerializer.prototype.bp = function () {
    return this.k12_1;
  };
  CharSerializer.prototype.l12 = function (encoder, value) {
    return encoder.ys(value);
  };
  CharSerializer.prototype.cp = function (encoder, value) {
    return this.l12(encoder, value instanceof Char ? value.g1_1 : THROW_CCE());
  };
  CharSerializer.prototype.m12 = function (decoder) {
    return decoder.sr();
  };
  CharSerializer.prototype.dp = function (decoder) {
    return new Char(this.m12(decoder));
  };
  CharSerializer.$metadata$ = objectMeta('CharSerializer', [KSerializer]);
  var CharSerializer_instance;
  function CharSerializer_getInstance() {
    if (CharSerializer_instance == null)
      new CharSerializer();
    return CharSerializer_instance;
  }
  function DoubleSerializer() {
    DoubleSerializer_instance = this;
    this.n12_1 = new PrimitiveSerialDescriptor_0('kotlin.Double', DOUBLE_getInstance());
  }
  DoubleSerializer.prototype.bp = function () {
    return this.n12_1;
  };
  DoubleSerializer.prototype.o12 = function (encoder, value) {
    return encoder.xs(value);
  };
  DoubleSerializer.prototype.cp = function (encoder, value) {
    return this.o12(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  DoubleSerializer.prototype.dp = function (decoder) {
    return decoder.rr();
  };
  DoubleSerializer.$metadata$ = objectMeta('DoubleSerializer', [KSerializer]);
  var DoubleSerializer_instance;
  function DoubleSerializer_getInstance() {
    if (DoubleSerializer_instance == null)
      new DoubleSerializer();
    return DoubleSerializer_instance;
  }
  function FloatSerializer() {
    FloatSerializer_instance = this;
    this.p12_1 = new PrimitiveSerialDescriptor_0('kotlin.Float', FLOAT_getInstance());
  }
  FloatSerializer.prototype.bp = function () {
    return this.p12_1;
  };
  FloatSerializer.prototype.q12 = function (encoder, value) {
    return encoder.ws(value);
  };
  FloatSerializer.prototype.cp = function (encoder, value) {
    return this.q12(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  FloatSerializer.prototype.dp = function (decoder) {
    return decoder.qr();
  };
  FloatSerializer.$metadata$ = objectMeta('FloatSerializer', [KSerializer]);
  var FloatSerializer_instance;
  function FloatSerializer_getInstance() {
    if (FloatSerializer_instance == null)
      new FloatSerializer();
    return FloatSerializer_instance;
  }
  function LongSerializer() {
    LongSerializer_instance = this;
    this.r12_1 = new PrimitiveSerialDescriptor_0('kotlin.Long', LONG_getInstance());
  }
  LongSerializer.prototype.bp = function () {
    return this.r12_1;
  };
  LongSerializer.prototype.s12 = function (encoder, value) {
    return encoder.vs(value);
  };
  LongSerializer.prototype.cp = function (encoder, value) {
    return this.s12(encoder, value instanceof Long ? value : THROW_CCE());
  };
  LongSerializer.prototype.dp = function (decoder) {
    return decoder.pr();
  };
  LongSerializer.$metadata$ = objectMeta('LongSerializer', [KSerializer]);
  var LongSerializer_instance;
  function LongSerializer_getInstance() {
    if (LongSerializer_instance == null)
      new LongSerializer();
    return LongSerializer_instance;
  }
  function IntSerializer() {
    IntSerializer_instance = this;
    this.t12_1 = new PrimitiveSerialDescriptor_0('kotlin.Int', INT_getInstance());
  }
  IntSerializer.prototype.bp = function () {
    return this.t12_1;
  };
  IntSerializer.prototype.u12 = function (encoder, value) {
    return encoder.us(value);
  };
  IntSerializer.prototype.cp = function (encoder, value) {
    return this.u12(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  IntSerializer.prototype.dp = function (decoder) {
    return decoder.or();
  };
  IntSerializer.$metadata$ = objectMeta('IntSerializer', [KSerializer]);
  var IntSerializer_instance;
  function IntSerializer_getInstance() {
    if (IntSerializer_instance == null)
      new IntSerializer();
    return IntSerializer_instance;
  }
  function ShortSerializer() {
    ShortSerializer_instance = this;
    this.v12_1 = new PrimitiveSerialDescriptor_0('kotlin.Short', SHORT_getInstance());
  }
  ShortSerializer.prototype.bp = function () {
    return this.v12_1;
  };
  ShortSerializer.prototype.w12 = function (encoder, value) {
    return encoder.ts(value);
  };
  ShortSerializer.prototype.cp = function (encoder, value) {
    return this.w12(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  ShortSerializer.prototype.dp = function (decoder) {
    return decoder.nr();
  };
  ShortSerializer.$metadata$ = objectMeta('ShortSerializer', [KSerializer]);
  var ShortSerializer_instance;
  function ShortSerializer_getInstance() {
    if (ShortSerializer_instance == null)
      new ShortSerializer();
    return ShortSerializer_instance;
  }
  function ByteSerializer() {
    ByteSerializer_instance = this;
    this.x12_1 = new PrimitiveSerialDescriptor_0('kotlin.Byte', BYTE_getInstance());
  }
  ByteSerializer.prototype.bp = function () {
    return this.x12_1;
  };
  ByteSerializer.prototype.y12 = function (encoder, value) {
    return encoder.ss(value);
  };
  ByteSerializer.prototype.cp = function (encoder, value) {
    return this.y12(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  ByteSerializer.prototype.dp = function (decoder) {
    return decoder.mr();
  };
  ByteSerializer.$metadata$ = objectMeta('ByteSerializer', [KSerializer]);
  var ByteSerializer_instance;
  function ByteSerializer_getInstance() {
    if (ByteSerializer_instance == null)
      new ByteSerializer();
    return ByteSerializer_instance;
  }
  function BooleanSerializer() {
    BooleanSerializer_instance = this;
    this.z12_1 = new PrimitiveSerialDescriptor_0('kotlin.Boolean', BOOLEAN_getInstance());
  }
  BooleanSerializer.prototype.bp = function () {
    return this.z12_1;
  };
  BooleanSerializer.prototype.a13 = function (encoder, value) {
    return encoder.rs(value);
  };
  BooleanSerializer.prototype.cp = function (encoder, value) {
    return this.a13(encoder, (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE());
  };
  BooleanSerializer.prototype.dp = function (decoder) {
    return decoder.lr();
  };
  BooleanSerializer.$metadata$ = objectMeta('BooleanSerializer', [KSerializer]);
  var BooleanSerializer_instance;
  function BooleanSerializer_getInstance() {
    if (BooleanSerializer_instance == null)
      new BooleanSerializer();
    return BooleanSerializer_instance;
  }
  function UnitSerializer() {
    UnitSerializer_instance = this;
    this.b13_1 = new ObjectSerializer('kotlin.Unit', Unit_getInstance());
  }
  UnitSerializer.prototype.c13 = function (decoder) {
    this.b13_1.dp(decoder);
  };
  UnitSerializer.prototype.dp = function (decoder) {
    this.c13(decoder);
    return Unit_getInstance();
  };
  UnitSerializer.prototype.d13 = function (encoder, value) {
    this.b13_1.cp(encoder, Unit_getInstance());
  };
  UnitSerializer.prototype.cp = function (encoder, value) {
    return this.d13(encoder, value instanceof Unit ? value : THROW_CCE());
  };
  UnitSerializer.prototype.bp = function () {
    return this.b13_1.bp();
  };
  UnitSerializer.$metadata$ = objectMeta('UnitSerializer', [KSerializer]);
  var UnitSerializer_instance;
  function UnitSerializer_getInstance() {
    if (UnitSerializer_instance == null)
      new UnitSerializer();
    return UnitSerializer_instance;
  }
  function error($this) {
    throw IllegalStateException_init_$Create$('Primitive descriptor does not have elements');
  }
  function PrimitiveSerialDescriptor_0(serialName, kind) {
    this.e13_1 = serialName;
    this.f13_1 = kind;
  }
  PrimitiveSerialDescriptor_0.prototype.eq = function () {
    return this.e13_1;
  };
  PrimitiveSerialDescriptor_0.prototype.nq = function () {
    return this.f13_1;
  };
  PrimitiveSerialDescriptor_0.prototype.lq = function () {
    return 0;
  };
  PrimitiveSerialDescriptor_0.prototype.iq = function (index) {
    error(this);
  };
  PrimitiveSerialDescriptor_0.prototype.hq = function (name) {
    error(this);
  };
  PrimitiveSerialDescriptor_0.prototype.jq = function (index) {
    error(this);
  };
  PrimitiveSerialDescriptor_0.prototype.gq = function (index) {
    error(this);
  };
  PrimitiveSerialDescriptor_0.prototype.fq = function (index) {
    error(this);
  };
  PrimitiveSerialDescriptor_0.prototype.toString = function () {
    return 'PrimitiveDescriptor(' + this.e13_1 + ')';
  };
  PrimitiveSerialDescriptor_0.$metadata$ = classMeta('PrimitiveSerialDescriptor', [SerialDescriptor]);
  function builtinSerializerOrNull(_this__u8e3s4) {
    init_properties_Primitives_kt_u7dn2q();
    var tmp = get_BUILTIN_SERIALIZERS().x2(_this__u8e3s4);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : THROW_CCE();
  }
  function PrimitiveDescriptorSafe(serialName, kind) {
    init_properties_Primitives_kt_u7dn2q();
    checkName(serialName);
    return new PrimitiveSerialDescriptor_0(serialName, kind);
  }
  function checkName(serialName) {
    init_properties_Primitives_kt_u7dn2q();
    var keys = get_BUILTIN_SERIALIZERS().y2();
    var tmp0_iterator = keys.l();
    while (tmp0_iterator.m()) {
      var primitive = tmp0_iterator.n();
      var simpleName = capitalize(ensureNotNull(primitive.kf()));
      var qualifiedName = 'kotlin.' + simpleName;
      if (equals_0(serialName, qualifiedName, true) ? true : equals_0(serialName, simpleName, true)) {
        throw IllegalArgumentException_init_$Create$(trimIndent('\n                The name of serial descriptor should uniquely identify associated serializer.\n                For serial name ' + serialName + ' there already exist ' + capitalize(simpleName) + 'Serializer.\n                Please refer to SerialDescriptor documentation for additional information.\n            '));
      }
    }
  }
  function capitalize(_this__u8e3s4) {
    init_properties_Primitives_kt_u7dn2q();
    var tmp$ret$4;
    // Inline function 'kotlin.text.replaceFirstChar' call
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.text.isNotEmpty' call
    tmp$ret$0 = charSequenceLength(_this__u8e3s4) > 0;
    if (tmp$ret$0) {
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.internal.capitalize.<anonymous>' call
      var tmp0__anonymous__q1qw7t = charSequenceGet(_this__u8e3s4, 0);
      tmp$ret$1 = isLowerCase(tmp0__anonymous__q1qw7t) ? titlecase(tmp0__anonymous__q1qw7t) : toString_0(tmp0__anonymous__q1qw7t);
      var tmp_0 = toString(tmp$ret$1);
      var tmp$ret$3;
      // Inline function 'kotlin.text.substring' call
      var tmp$ret$2;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$2 = _this__u8e3s4;
      tmp$ret$3 = tmp$ret$2.substring(1);
      tmp = tmp_0 + tmp$ret$3;
    } else {
      tmp = _this__u8e3s4;
    }
    tmp$ret$4 = tmp;
    return tmp$ret$4;
  }
  var properties_initialized_Primitives_kt_6dpii6;
  function init_properties_Primitives_kt_u7dn2q() {
    if (properties_initialized_Primitives_kt_6dpii6) {
    } else {
      properties_initialized_Primitives_kt_6dpii6 = true;
      BUILTIN_SERIALIZERS = mapOf([to(PrimitiveClasses_getInstance().dh(), serializer_0(StringCompanionObject_getInstance())), to(getKClass(Char), serializer_1(Companion_getInstance_0())), to(PrimitiveClasses_getInstance().gh(), CharArraySerializer()), to(PrimitiveClasses_getInstance().bh(), serializer_2(DoubleCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().mh(), DoubleArraySerializer()), to(PrimitiveClasses_getInstance().ah(), serializer_3(FloatCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().lh(), FloatArraySerializer()), to(getKClass(Long), serializer_4(Companion_getInstance())), to(PrimitiveClasses_getInstance().kh(), LongArraySerializer()), to(PrimitiveClasses_getInstance().zg(), serializer_5(IntCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().jh(), IntArraySerializer()), to(PrimitiveClasses_getInstance().yg(), serializer_6(ShortCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().ih(), ShortArraySerializer()), to(PrimitiveClasses_getInstance().xg(), serializer_7(ByteCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().hh(), ByteArraySerializer()), to(PrimitiveClasses_getInstance().wg(), serializer_8(BooleanCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().fh(), BooleanArraySerializer()), to(getKClass(Unit), serializer_9(Unit_getInstance()))]);
    }
  }
  function NamedValueDecoder() {
    TaggedDecoder.call(this);
  }
  NamedValueDecoder.prototype.i13 = function (_this__u8e3s4, index) {
    return this.k13(this.j13(_this__u8e3s4, index));
  };
  NamedValueDecoder.prototype.k13 = function (nestedName) {
    var tmp0_elvis_lhs = this.n13();
    return this.o13(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, nestedName);
  };
  NamedValueDecoder.prototype.j13 = function (desc, index) {
    return desc.iq(index);
  };
  NamedValueDecoder.prototype.o13 = function (parentName, childName) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.text.isEmpty' call
    tmp$ret$0 = charSequenceLength(parentName) === 0;
    if (tmp$ret$0) {
      tmp = childName;
    } else {
      tmp = parentName + '.' + childName;
    }
    return tmp;
  };
  NamedValueDecoder.$metadata$ = classMeta('NamedValueDecoder', undefined, undefined, undefined, undefined, TaggedDecoder.prototype);
  function tagBlock($this, tag, block) {
    $this.b14(tag);
    var r = block();
    if (!$this.m13_1) {
      $this.c14();
    }
    $this.m13_1 = false;
    return r;
  }
  function TaggedDecoder$decodeSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      return this$0.vr($deserializer, $previousValue);
    };
  }
  function TaggedDecoder$decodeNullableSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      return this$0.jr() ? this$0.vr($deserializer, $previousValue) : this$0.kr();
    };
  }
  function TaggedDecoder() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp$ret$0 = ArrayList_init_$Create$_0();
    tmp.l13_1 = tmp$ret$0;
    this.m13_1 = false;
  }
  TaggedDecoder.prototype.vp = function () {
    return get_EmptySerializersModule();
  };
  TaggedDecoder.prototype.p13 = function (tag) {
    throw SerializationException_init_$Create$('' + getKClassFromExpression(this) + " can't retrieve untyped values");
  };
  TaggedDecoder.prototype.q13 = function (tag) {
    return true;
  };
  TaggedDecoder.prototype.r13 = function (tag) {
    var tmp = this.p13(tag);
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.s13 = function (tag) {
    var tmp = this.p13(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.t13 = function (tag) {
    var tmp = this.p13(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.u13 = function (tag) {
    var tmp = this.p13(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.v13 = function (tag) {
    var tmp = this.p13(tag);
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.w13 = function (tag) {
    var tmp = this.p13(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.x13 = function (tag) {
    var tmp = this.p13(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.y13 = function (tag) {
    var tmp = this.p13(tag);
    return tmp instanceof Char ? tmp.g1_1 : THROW_CCE();
  };
  TaggedDecoder.prototype.z13 = function (tag) {
    var tmp = this.p13(tag);
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.a14 = function (tag, inlineDescriptor) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.internal.TaggedDecoder.decodeTaggedInline.<anonymous>' call
    this.b14(tag);
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  TaggedDecoder.prototype.vr = function (deserializer, previousValue) {
    return this.wr(deserializer);
  };
  TaggedDecoder.prototype.ur = function (inlineDescriptor) {
    return this.a14(this.c14(), inlineDescriptor);
  };
  TaggedDecoder.prototype.jr = function () {
    var tmp0_elvis_lhs = this.n13();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var currentTag = tmp;
    return this.q13(currentTag);
  };
  TaggedDecoder.prototype.kr = function () {
    return null;
  };
  TaggedDecoder.prototype.lr = function () {
    return this.r13(this.c14());
  };
  TaggedDecoder.prototype.mr = function () {
    return this.s13(this.c14());
  };
  TaggedDecoder.prototype.nr = function () {
    return this.t13(this.c14());
  };
  TaggedDecoder.prototype.or = function () {
    return this.u13(this.c14());
  };
  TaggedDecoder.prototype.pr = function () {
    return this.v13(this.c14());
  };
  TaggedDecoder.prototype.qr = function () {
    return this.w13(this.c14());
  };
  TaggedDecoder.prototype.rr = function () {
    return this.x13(this.c14());
  };
  TaggedDecoder.prototype.sr = function () {
    return this.y13(this.c14());
  };
  TaggedDecoder.prototype.tr = function () {
    return this.z13(this.c14());
  };
  TaggedDecoder.prototype.xr = function (descriptor) {
    return this;
  };
  TaggedDecoder.prototype.yr = function (descriptor) {
  };
  TaggedDecoder.prototype.zr = function (descriptor, index) {
    return this.r13(this.i13(descriptor, index));
  };
  TaggedDecoder.prototype.as = function (descriptor, index) {
    return this.s13(this.i13(descriptor, index));
  };
  TaggedDecoder.prototype.bs = function (descriptor, index) {
    return this.t13(this.i13(descriptor, index));
  };
  TaggedDecoder.prototype.cs = function (descriptor, index) {
    return this.u13(this.i13(descriptor, index));
  };
  TaggedDecoder.prototype.ds = function (descriptor, index) {
    return this.v13(this.i13(descriptor, index));
  };
  TaggedDecoder.prototype.es = function (descriptor, index) {
    return this.w13(this.i13(descriptor, index));
  };
  TaggedDecoder.prototype.fs = function (descriptor, index) {
    return this.x13(this.i13(descriptor, index));
  };
  TaggedDecoder.prototype.gs = function (descriptor, index) {
    return this.y13(this.i13(descriptor, index));
  };
  TaggedDecoder.prototype.hs = function (descriptor, index) {
    return this.z13(this.i13(descriptor, index));
  };
  TaggedDecoder.prototype.is = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.i13(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeSerializableElement$lambda(this, deserializer, previousValue));
  };
  TaggedDecoder.prototype.ks = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.i13(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeNullableSerializableElement$lambda(this, deserializer, previousValue));
  };
  TaggedDecoder.prototype.n13 = function () {
    return lastOrNull(this.l13_1);
  };
  TaggedDecoder.prototype.b14 = function (name) {
    this.l13_1.g(name);
  };
  TaggedDecoder.prototype.c14 = function () {
    var r = this.l13_1.j4(get_lastIndex_0(this.l13_1));
    this.m13_1 = true;
    return r;
  };
  TaggedDecoder.$metadata$ = classMeta('TaggedDecoder', [Decoder, CompositeDecoder]);
  function get_NULL() {
    init_properties_Tuples_kt_v8bvox();
    return NULL;
  }
  var NULL;
  function MapEntry(key, value) {
    this.d14_1 = key;
    this.e14_1 = value;
  }
  MapEntry.prototype.h2 = function () {
    return this.d14_1;
  };
  MapEntry.prototype.j2 = function () {
    return this.e14_1;
  };
  MapEntry.prototype.toString = function () {
    return 'MapEntry(key=' + this.d14_1 + ', value=' + this.e14_1 + ')';
  };
  MapEntry.prototype.hashCode = function () {
    var result = this.d14_1 == null ? 0 : hashCode(this.d14_1);
    result = imul(result, 31) + (this.e14_1 == null ? 0 : hashCode(this.e14_1)) | 0;
    return result;
  };
  MapEntry.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapEntry))
      return false;
    var tmp0_other_with_cast = other instanceof MapEntry ? other : THROW_CCE();
    if (!equals(this.d14_1, tmp0_other_with_cast.d14_1))
      return false;
    if (!equals(this.e14_1, tmp0_other_with_cast.e14_1))
      return false;
    return true;
  };
  MapEntry.$metadata$ = classMeta('MapEntry', [Entry]);
  function MapEntrySerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildSerialDescriptor) {
      var tmp = $keySerializer.bp();
      $this$buildSerialDescriptor.mp('key', tmp, null, false, 12, null);
      var tmp_0 = $valueSerializer.bp();
      $this$buildSerialDescriptor.mp('value', tmp_0, null, false, 12, null);
      return Unit_getInstance();
    };
  }
  function MapEntrySerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    var tmp_0 = MAP_getInstance();
    tmp.h14_1 = buildSerialDescriptor$default('kotlin.collections.Map.Entry', tmp_0, [], MapEntrySerializer$descriptor$lambda(keySerializer, valueSerializer), 4, null);
  }
  MapEntrySerializer_0.prototype.bp = function () {
    return this.h14_1;
  };
  MapEntrySerializer_0.prototype.i14 = function (_this__u8e3s4) {
    return _this__u8e3s4.h2();
  };
  MapEntrySerializer_0.prototype.j14 = function (_this__u8e3s4) {
    return this.i14((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  MapEntrySerializer_0.prototype.k14 = function (_this__u8e3s4) {
    return _this__u8e3s4.j2();
  };
  MapEntrySerializer_0.prototype.l14 = function (_this__u8e3s4) {
    return this.k14((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  MapEntrySerializer_0.prototype.m14 = function (key, value) {
    return new MapEntry(key, value);
  };
  MapEntrySerializer_0.$metadata$ = classMeta('MapEntrySerializer', undefined, undefined, undefined, undefined, KeyValueSerializer.prototype);
  function PairSerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildClassSerialDescriptor) {
      var tmp = $keySerializer.bp();
      $this$buildClassSerialDescriptor.mp('first', tmp, null, false, 12, null);
      var tmp_0 = $valueSerializer.bp();
      $this$buildClassSerialDescriptor.mp('second', tmp_0, null, false, 12, null);
      return Unit_getInstance();
    };
  }
  function PairSerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    tmp.s14_1 = buildClassSerialDescriptor$default('kotlin.Pair', [], PairSerializer$descriptor$lambda(keySerializer, valueSerializer), 2, null);
  }
  PairSerializer_0.prototype.bp = function () {
    return this.s14_1;
  };
  PairSerializer_0.prototype.t14 = function (_this__u8e3s4) {
    return _this__u8e3s4.a4_1;
  };
  PairSerializer_0.prototype.j14 = function (_this__u8e3s4) {
    return this.t14(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  PairSerializer_0.prototype.u14 = function (_this__u8e3s4) {
    return _this__u8e3s4.b4_1;
  };
  PairSerializer_0.prototype.l14 = function (_this__u8e3s4) {
    return this.u14(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  PairSerializer_0.prototype.m14 = function (key, value) {
    return to(key, value);
  };
  PairSerializer_0.$metadata$ = classMeta('PairSerializer', undefined, undefined, undefined, undefined, KeyValueSerializer.prototype);
  function decodeSequentially_1($this, composite) {
    var a = composite.js($this.y14_1, 0, $this.v14_1, null, 8, null);
    var b = composite.js($this.y14_1, 1, $this.w14_1, null, 8, null);
    var c = composite.js($this.y14_1, 2, $this.x14_1, null, 8, null);
    composite.yr($this.y14_1);
    return new Triple(a, b, c);
  }
  function decodeStructure_0($this, composite) {
    var a = get_NULL();
    var b = get_NULL();
    var c = get_NULL();
    mainLoop: while (true) {
      var index = composite.ms($this.y14_1);
      Companion_getInstance_1();
      if (index === -1) {
        break mainLoop;
      } else {
        if (index === 0) {
          a = composite.js($this.y14_1, 0, $this.v14_1, null, 8, null);
        } else {
          if (index === 1) {
            b = composite.js($this.y14_1, 1, $this.w14_1, null, 8, null);
          } else {
            if (index === 2) {
              c = composite.js($this.y14_1, 2, $this.x14_1, null, 8, null);
            } else {
              throw SerializationException_init_$Create$('Unexpected index ' + index);
            }
          }
        }
      }
    }
    composite.yr($this.y14_1);
    if (a === get_NULL())
      throw SerializationException_init_$Create$("Element 'first' is missing");
    if (b === get_NULL())
      throw SerializationException_init_$Create$("Element 'second' is missing");
    if (c === get_NULL())
      throw SerializationException_init_$Create$("Element 'third' is missing");
    var tmp = (a == null ? true : isObject(a)) ? a : THROW_CCE();
    var tmp_0 = (b == null ? true : isObject(b)) ? b : THROW_CCE();
    return new Triple(tmp, tmp_0, (c == null ? true : isObject(c)) ? c : THROW_CCE());
  }
  function TripleSerializer$descriptor$lambda(this$0) {
    return function ($this$buildClassSerialDescriptor) {
      var tmp = this$0.v14_1.bp();
      $this$buildClassSerialDescriptor.mp('first', tmp, null, false, 12, null);
      var tmp_0 = this$0.w14_1.bp();
      $this$buildClassSerialDescriptor.mp('second', tmp_0, null, false, 12, null);
      var tmp_1 = this$0.x14_1.bp();
      $this$buildClassSerialDescriptor.mp('third', tmp_1, null, false, 12, null);
      return Unit_getInstance();
    };
  }
  function TripleSerializer_0(aSerializer, bSerializer, cSerializer) {
    this.v14_1 = aSerializer;
    this.w14_1 = bSerializer;
    this.x14_1 = cSerializer;
    var tmp = this;
    tmp.y14_1 = buildClassSerialDescriptor$default('kotlin.Triple', [], TripleSerializer$descriptor$lambda(this), 2, null);
  }
  TripleSerializer_0.prototype.bp = function () {
    return this.y14_1;
  };
  TripleSerializer_0.prototype.z14 = function (encoder, value) {
    var structuredEncoder = encoder.xr(this.y14_1);
    structuredEncoder.kt(this.y14_1, 0, this.v14_1, value.ea_1);
    structuredEncoder.kt(this.y14_1, 1, this.w14_1, value.fa_1);
    structuredEncoder.kt(this.y14_1, 2, this.x14_1, value.ga_1);
    structuredEncoder.yr(this.y14_1);
  };
  TripleSerializer_0.prototype.cp = function (encoder, value) {
    return this.z14(encoder, value instanceof Triple ? value : THROW_CCE());
  };
  TripleSerializer_0.prototype.dp = function (decoder) {
    var composite = decoder.xr(this.y14_1);
    if (composite.ls()) {
      return decodeSequentially_1(this, composite);
    }
    return decodeStructure_0(this, composite);
  };
  TripleSerializer_0.$metadata$ = classMeta('TripleSerializer', [KSerializer]);
  function KeyValueSerializer(keySerializer, valueSerializer) {
    this.n14_1 = keySerializer;
    this.o14_1 = valueSerializer;
  }
  KeyValueSerializer.prototype.p14 = function (encoder, value) {
    var structuredEncoder = encoder.xr(this.bp());
    structuredEncoder.kt(this.bp(), 0, this.n14_1, this.j14(value));
    structuredEncoder.kt(this.bp(), 1, this.o14_1, this.l14(value));
    structuredEncoder.yr(this.bp());
  };
  KeyValueSerializer.prototype.cp = function (encoder, value) {
    return this.p14(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  KeyValueSerializer.prototype.dp = function (decoder) {
    var composite = decoder.xr(this.bp());
    if (composite.ls()) {
      var tmp = this.bp();
      var key = composite.js(tmp, 0, this.n14_1, null, 8, null);
      var tmp_0 = this.bp();
      var value = composite.js(tmp_0, 1, this.o14_1, null, 8, null);
      return this.m14(key, value);
    }
    var key_0 = get_NULL();
    var value_0 = get_NULL();
    mainLoop: while (true) {
      var idx = composite.ms(this.bp());
      Companion_getInstance_1();
      if (idx === -1) {
        break mainLoop;
      } else {
        if (idx === 0) {
          var tmp_1 = this.bp();
          key_0 = composite.js(tmp_1, 0, this.n14_1, null, 8, null);
        } else {
          if (idx === 1) {
            var tmp_2 = this.bp();
            value_0 = composite.js(tmp_2, 1, this.o14_1, null, 8, null);
          } else {
            throw SerializationException_init_$Create$('Invalid index: ' + idx);
          }
        }
      }
    }
    composite.yr(this.bp());
    if (key_0 === get_NULL())
      throw SerializationException_init_$Create$("Element 'key' is missing");
    if (value_0 === get_NULL())
      throw SerializationException_init_$Create$("Element 'value' is missing");
    var tmp_3 = (key_0 == null ? true : isObject(key_0)) ? key_0 : THROW_CCE();
    return this.m14(tmp_3, (value_0 == null ? true : isObject(value_0)) ? value_0 : THROW_CCE());
  };
  KeyValueSerializer.$metadata$ = classMeta('KeyValueSerializer', [KSerializer]);
  var properties_initialized_Tuples_kt_3vs7ar;
  function init_properties_Tuples_kt_v8bvox() {
    if (properties_initialized_Tuples_kt_3vs7ar) {
    } else {
      properties_initialized_Tuples_kt_3vs7ar = true;
      NULL = new Object();
    }
  }
  function get_EmptySerializersModule() {
    init_properties_SerializersModule_kt_swldyf();
    return EmptySerializersModule;
  }
  var EmptySerializersModule;
  function SerializersModule() {
  }
  SerializersModule.prototype.yp = function (kClass, typeArgumentsSerializers, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      typeArgumentsSerializers = emptyList();
    return $handler == null ? this.zp(kClass, typeArgumentsSerializers) : $handler(kClass, typeArgumentsSerializers);
  };
  SerializersModule.$metadata$ = classMeta('SerializersModule');
  function SerialModuleImpl(class2ContextualFactory, polyBase2Serializers, polyBase2NamedSerializers, polyBase2DefaultProvider) {
    SerializersModule.call(this);
    this.b15_1 = class2ContextualFactory;
    this.c15_1 = polyBase2Serializers;
    this.d15_1 = polyBase2NamedSerializers;
    this.e15_1 = polyBase2DefaultProvider;
  }
  SerialModuleImpl.prototype.vt = function (baseClass, value) {
    if (!isInstanceOf(value, baseClass))
      return null;
    var tmp0_safe_receiver = this.c15_1.x2(baseClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.x2(getKClassFromExpression(value));
    return (!(tmp == null) ? isInterface(tmp, SerializationStrategy) : false) ? tmp : null;
  };
  SerialModuleImpl.prototype.ut = function (baseClass, serializedClassName) {
    var tmp0_safe_receiver = this.d15_1.x2(baseClass);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.get' call
      tmp$ret$0 = ((!(tmp0_safe_receiver == null) ? isInterface(tmp0_safe_receiver, Map) : false) ? tmp0_safe_receiver : THROW_CCE()).x2(serializedClassName);
      tmp = tmp$ret$0;
    }
    var tmp_0 = tmp;
    var registered = (!(tmp_0 == null) ? isInterface(tmp_0, KSerializer) : false) ? tmp_0 : null;
    if (!(registered == null))
      return registered;
    var tmp_1 = this.e15_1.x2(baseClass);
    var tmp1_safe_receiver = (!(tmp_1 == null) ? typeof tmp_1 === 'function' : false) ? tmp_1 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(serializedClassName);
  };
  SerialModuleImpl.prototype.zp = function (kClass, typeArgumentsSerializers) {
    var tmp0_safe_receiver = this.b15_1.x2(kClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.f15(typeArgumentsSerializers);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : null;
  };
  SerialModuleImpl.prototype.a15 = function (collector) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = this.b15_1;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$0 = tmp0_forEach.v().l();
    var tmp0_iterator = tmp$ret$0;
    while (tmp0_iterator.m()) {
      var element = tmp0_iterator.n();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$1 = element.h2();
      var kclass = tmp$ret$1;
      var tmp$ret$2;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$2 = element.j2();
      var serial = tmp$ret$2;
      var tmp0_subject = serial;
      if (tmp0_subject instanceof Argless) {
        var tmp = isInterface(kclass, KClass) ? kclass : THROW_CCE();
        var tmp_0 = serial.i15_1;
        collector.j15(tmp, isInterface(tmp_0, KSerializer) ? tmp_0 : THROW_CCE());
      } else {
        if (tmp0_subject instanceof WithTypeArguments) {
          collector.h15(kclass, serial.g15_1);
        }
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp1_forEach = this.c15_1;
    var tmp$ret$3;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$3 = tmp1_forEach.v().l();
    var tmp0_iterator_0 = tmp$ret$3;
    while (tmp0_iterator_0.m()) {
      var element_0 = tmp0_iterator_0.n();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      var tmp$ret$4;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$4 = element_0.h2();
      var baseClass = tmp$ret$4;
      var tmp$ret$5;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$5 = element_0.j2();
      var classMap = tmp$ret$5;
      // Inline function 'kotlin.collections.forEach' call
      var tmp$ret$6;
      // Inline function 'kotlin.collections.iterator' call
      tmp$ret$6 = classMap.v().l();
      var tmp0_iterator_1 = tmp$ret$6;
      while (tmp0_iterator_1.m()) {
        var element_1 = tmp0_iterator_1.n();
        // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>.<anonymous>' call
        var tmp$ret$7;
        // Inline function 'kotlin.collections.component1' call
        tmp$ret$7 = element_1.h2();
        var actualClass = tmp$ret$7;
        var tmp$ret$8;
        // Inline function 'kotlin.collections.component2' call
        tmp$ret$8 = element_1.j2();
        var serializer = tmp$ret$8;
        var tmp_1 = isInterface(baseClass, KClass) ? baseClass : THROW_CCE();
        var tmp_2 = isInterface(actualClass, KClass) ? actualClass : THROW_CCE();
        var tmp$ret$9;
        // Inline function 'kotlinx.serialization.internal.cast' call
        tmp$ret$9 = isInterface(serializer, KSerializer) ? serializer : THROW_CCE();
        collector.k15(tmp_1, tmp_2, tmp$ret$9);
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp2_forEach = this.e15_1;
    var tmp$ret$10;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$10 = tmp2_forEach.v().l();
    var tmp0_iterator_2 = tmp$ret$10;
    while (tmp0_iterator_2.m()) {
      var element_2 = tmp0_iterator_2.n();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      var tmp$ret$11;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$11 = element_2.h2();
      var baseClass_0 = tmp$ret$11;
      var tmp$ret$12;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$12 = element_2.j2();
      var provider = tmp$ret$12;
      var tmp_3 = isInterface(baseClass_0, KClass) ? baseClass_0 : THROW_CCE();
      collector.l15(tmp_3, typeof provider === 'function' ? provider : THROW_CCE());
    }
  };
  SerialModuleImpl.$metadata$ = classMeta('SerialModuleImpl', undefined, undefined, undefined, undefined, SerializersModule.prototype);
  function Argless() {
  }
  Argless.prototype.m15 = function () {
    return this.i15_1;
  };
  Argless.$metadata$ = classMeta('Argless', undefined, undefined, undefined, undefined, ContextualProvider.prototype);
  function WithTypeArguments() {
  }
  WithTypeArguments.prototype.n15 = function () {
    return this.g15_1;
  };
  WithTypeArguments.$metadata$ = classMeta('WithTypeArguments', undefined, undefined, undefined, undefined, ContextualProvider.prototype);
  function ContextualProvider() {
  }
  ContextualProvider.$metadata$ = classMeta('ContextualProvider');
  var properties_initialized_SerializersModule_kt_fjigjn;
  function init_properties_SerializersModule_kt_swldyf() {
    if (properties_initialized_SerializersModule_kt_fjigjn) {
    } else {
      properties_initialized_SerializersModule_kt_fjigjn = true;
      EmptySerializersModule = new SerialModuleImpl(emptyMap(), emptyMap(), emptyMap(), emptyMap());
    }
  }
  function SerializersModuleCollector$contextual$lambda($serializer) {
    return function (it) {
      return $serializer;
    };
  }
  function SerializersModuleCollector() {
  }
  SerializersModuleCollector.$metadata$ = interfaceMeta('SerializersModuleCollector');
  function SerializableWith(serializer) {
    this.o15_1 = serializer;
  }
  SerializableWith.prototype.equals = function (other) {
    if (!(other instanceof SerializableWith))
      return false;
    var tmp0_other_with_cast = other instanceof SerializableWith ? other : THROW_CCE();
    if (!this.o15_1.equals(tmp0_other_with_cast.o15_1))
      return false;
    return true;
  };
  SerializableWith.prototype.hashCode = function () {
    return imul(getStringHashCode('serializer'), 127) ^ this.o15_1.hashCode();
  };
  SerializableWith.prototype.toString = function () {
    return '@kotlinx.serialization.SerializableWith(serializer=' + this.o15_1 + ')';
  };
  SerializableWith.$metadata$ = classMeta('SerializableWith', [Annotation], 0);
  function isInstanceOf(_this__u8e3s4, kclass) {
    return kclass.lf(_this__u8e3s4);
  }
  function getChecked(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices(_this__u8e3s4));
    return _this__u8e3s4[index];
  }
  function getChecked_0(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices_0(_this__u8e3s4));
    return _this__u8e3s4[index];
  }
  function platformSpecificSerializerNotRegistered(_this__u8e3s4) {
    throw SerializationException_init_$Create$("Serializer for class '" + _this__u8e3s4.kf() + "' is not found.\n" + 'Mark the class as @Serializable or provide the serializer explicitly.\n' + 'On Kotlin/JS explicitly declared serializer should be used for interfaces and enums without @Serializable annotation');
  }
  function compiledSerializerImpl(_this__u8e3s4) {
    var tmp1_elvis_lhs = constructSerializerForGivenTypeArgs(_this__u8e3s4, []);
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      var tmp0_asDynamic = get_js(_this__u8e3s4);
      tmp$ret$0 = tmp0_asDynamic;
      var tmp0_safe_receiver = tmp$ret$0.Companion;
      var tmp_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.serializer();
      tmp = (!(tmp_0 == null) ? isInterface(tmp_0, KSerializer) : false) ? tmp_0 : null;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function isReferenceArray(rootClass) {
    return rootClass.equals(PrimitiveClasses_getInstance().ch());
  }
  function constructSerializerForGivenTypeArgs(_this__u8e3s4, args) {
    var tmp;
    try {
      var tmp$ret$0;
      // Inline function 'kotlin.reflect.findAssociatedObject' call
      tmp$ret$0 = findAssociatedObject(_this__u8e3s4, getKClass(SerializableWith));
      var assocObject = tmp$ret$0;
      var tmp_0;
      if (!(assocObject == null) ? isInterface(assocObject, KSerializer) : false) {
        tmp_0 = (!(assocObject == null) ? isInterface(assocObject, KSerializer) : false) ? assocObject : THROW_CCE();
      } else {
        if (!(assocObject == null) ? isInterface(assocObject, SerializerFactory) : false) {
          var tmp_1 = assocObject.nz(args.slice());
          tmp_0 = isInterface(tmp_1, KSerializer) ? tmp_1 : THROW_CCE();
        } else {
          if (get_isInterface(_this__u8e3s4)) {
            tmp_0 = new PolymorphicSerializer(_this__u8e3s4);
          } else {
            tmp_0 = null;
          }
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      {
        tmp_2 = null;
      }
      tmp = tmp_2;
    }
    return tmp;
  }
  function get_isInterface(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_asDynamic = get_js(_this__u8e3s4);
    tmp$ret$0 = tmp0_asDynamic;
    var tmp0_safe_receiver = tmp$ret$0.$metadata$;
    return (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.kind) == 'interface';
  }
  function toNativeArrayImpl(_this__u8e3s4, eClass) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.toTypedArray' call
    tmp$ret$0 = copyToArray(_this__u8e3s4);
    return tmp$ret$0;
  }
  //region block: post-declaration
  SerialDescriptorImpl.prototype.aq = get_isNullable;
  SerialDescriptorImpl.prototype.mq = get_isInline;
  AbstractDecoder.prototype.js = decodeSerializableElement$default;
  AbstractDecoder.prototype.wr = decodeSerializableValue;
  AbstractDecoder.prototype.ls = decodeSequentially;
  AbstractDecoder.prototype.ns = decodeCollectionSize;
  AbstractEncoder.prototype.ot = encodeNotNullMark;
  AbstractEncoder.prototype.pt = beginCollection;
  AbstractEncoder.prototype.lt = encodeSerializableValue;
  AbstractEncoder.prototype.nt = encodeNullableSerializableValue;
  AbstractEncoder.prototype.qt = shouldEncodeElementDefault;
  ListLikeDescriptor.prototype.aq = get_isNullable;
  ListLikeDescriptor.prototype.mq = get_isInline;
  ListLikeDescriptor.prototype.kq = get_annotations;
  PrimitiveArrayDescriptor.prototype.aq = get_isNullable;
  PrimitiveArrayDescriptor.prototype.mq = get_isInline;
  PrimitiveArrayDescriptor.prototype.kq = get_annotations;
  ArrayListClassDesc.prototype.aq = get_isNullable;
  ArrayListClassDesc.prototype.mq = get_isInline;
  ArrayListClassDesc.prototype.kq = get_annotations;
  HashSetClassDesc.prototype.aq = get_isNullable;
  HashSetClassDesc.prototype.mq = get_isInline;
  HashSetClassDesc.prototype.kq = get_annotations;
  LinkedHashSetClassDesc.prototype.aq = get_isNullable;
  LinkedHashSetClassDesc.prototype.mq = get_isInline;
  LinkedHashSetClassDesc.prototype.kq = get_annotations;
  MapLikeDescriptor.prototype.aq = get_isNullable;
  MapLikeDescriptor.prototype.mq = get_isInline;
  MapLikeDescriptor.prototype.kq = get_annotations;
  HashMapClassDesc.prototype.aq = get_isNullable;
  HashMapClassDesc.prototype.mq = get_isInline;
  HashMapClassDesc.prototype.kq = get_annotations;
  LinkedHashMapClassDesc.prototype.aq = get_isNullable;
  LinkedHashMapClassDesc.prototype.mq = get_isInline;
  LinkedHashMapClassDesc.prototype.kq = get_annotations;
  ArrayClassDesc.prototype.aq = get_isNullable;
  ArrayClassDesc.prototype.mq = get_isInline;
  ArrayClassDesc.prototype.kq = get_annotations;
  PluginGeneratedSerialDescriptor.prototype.aq = get_isNullable;
  PluginGeneratedSerialDescriptor.prototype.mq = get_isInline;
  InlineClassDescriptor.prototype.aq = get_isNullable;
  InlinePrimitiveDescriptor$1.prototype.uy = typeParametersSerializers;
  PrimitiveSerialDescriptor_0.prototype.aq = get_isNullable;
  PrimitiveSerialDescriptor_0.prototype.mq = get_isInline;
  PrimitiveSerialDescriptor_0.prototype.kq = get_annotations;
  TaggedDecoder.prototype.js = decodeSerializableElement$default;
  TaggedDecoder.prototype.wr = decodeSerializableValue;
  TaggedDecoder.prototype.ls = decodeSequentially;
  TaggedDecoder.prototype.ns = decodeCollectionSize;
  NamedValueDecoder.prototype.wr = decodeSerializableValue;
  NamedValueDecoder.prototype.js = decodeSerializableElement$default;
  NamedValueDecoder.prototype.ls = decodeSequentially;
  NamedValueDecoder.prototype.ns = decodeCollectionSize;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = buildSerialDescriptor$default;
  _.$_$.b = decodeSerializableElement$default;
  _.$_$.c = SerializationException_init_$Init$;
  _.$_$.d = SerializationException_init_$Create$;
  _.$_$.e = UnknownFieldException_init_$Create$;
  _.$_$.f = SEALED_getInstance;
  _.$_$.g = STRING_getInstance;
  _.$_$.h = CONTEXTUAL_getInstance;
  _.$_$.i = ENUM_getInstance;
  _.$_$.j = CLASS_getInstance;
  _.$_$.k = LIST_getInstance;
  _.$_$.l = MAP_getInstance;
  _.$_$.m = OBJECT_getInstance;
  _.$_$.n = Companion_getInstance_1;
  _.$_$.o = ByteArraySerializer_getInstance;
  _.$_$.p = ByteSerializer_getInstance;
  _.$_$.q = FloatArraySerializer_getInstance;
  _.$_$.r = FloatSerializer_getInstance;
  _.$_$.s = IntSerializer_getInstance;
  _.$_$.t = StringSerializer_getInstance;
  _.$_$.u = ByteArraySerializer;
  _.$_$.v = ListSerializer;
  _.$_$.w = MapEntrySerializer;
  _.$_$.x = MapSerializer;
  _.$_$.y = SetSerializer;
  _.$_$.z = get_nullable;
  _.$_$.a1 = serializer_0;
  _.$_$.b1 = serializer_13;
  _.$_$.c1 = serializer_10;
  _.$_$.d1 = serializer_12;
  _.$_$.e1 = serializer_11;
  _.$_$.f1 = PolymorphicKind;
  _.$_$.g1 = PrimitiveKind;
  _.$_$.h1 = PrimitiveSerialDescriptor;
  _.$_$.i1 = get_annotations;
  _.$_$.j1 = get_isInline;
  _.$_$.k1 = get_isNullable;
  _.$_$.l1 = SerialDescriptor;
  _.$_$.m1 = ENUM;
  _.$_$.n1 = getContextualDescriptor;
  _.$_$.o1 = AbstractDecoder;
  _.$_$.p1 = AbstractEncoder;
  _.$_$.q1 = decodeCollectionSize;
  _.$_$.r1 = decodeSequentially;
  _.$_$.s1 = CompositeDecoder;
  _.$_$.t1 = shouldEncodeElementDefault;
  _.$_$.u1 = CompositeEncoder;
  _.$_$.v1 = decodeSerializableValue;
  _.$_$.w1 = Decoder;
  _.$_$.x1 = beginCollection;
  _.$_$.y1 = encodeNotNullMark;
  _.$_$.z1 = encodeNullableSerializableValue;
  _.$_$.a2 = encodeSerializableValue;
  _.$_$.b2 = Encoder;
  _.$_$.c2 = AbstractCollectionSerializer;
  _.$_$.d2 = AbstractPolymorphicSerializer;
  _.$_$.e2 = ArrayListSerializer;
  _.$_$.f2 = ElementMarker;
  _.$_$.g2 = typeParametersSerializers;
  _.$_$.h2 = GeneratedSerializer;
  _.$_$.i2 = LinkedHashSetSerializer;
  _.$_$.j2 = MapLikeSerializer;
  _.$_$.k2 = NamedValueDecoder;
  _.$_$.l2 = PluginGeneratedSerialDescriptor;
  _.$_$.m2 = SerializerFactory;
  _.$_$.n2 = jsonCachedSerialNames;
  _.$_$.o2 = throwMissingFieldException;
  _.$_$.p2 = get_EmptySerializersModule;
  _.$_$.q2 = contextual;
  _.$_$.r2 = SerializersModuleCollector;
  _.$_$.s2 = BinaryFormat;
  _.$_$.t2 = DeserializationStrategy;
  _.$_$.u2 = KSerializer;
  _.$_$.v2 = SealedClassSerializer;
  _.$_$.w2 = SerializationException;
  _.$_$.x2 = SerializationStrategy;
  _.$_$.y2 = StringFormat;
  _.$_$.z2 = findPolymorphicSerializer;
  _.$_$.a3 = serializer;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-core-js-ir.js.map
