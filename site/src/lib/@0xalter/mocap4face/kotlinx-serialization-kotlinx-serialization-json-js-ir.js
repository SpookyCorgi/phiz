(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlinx-serialization-kotlinx-serialization-core-js-ir.js', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlinx-serialization-kotlinx-serialization-core-js-ir.js'), require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-json-js-ir'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core-js-ir' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core-js-ir' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-json-js-ir'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-json-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-json-js-ir'.");
    }
    root['kotlinx-serialization-kotlinx-serialization-json-js-ir'] = factory(typeof this['kotlinx-serialization-kotlinx-serialization-json-js-ir'] === 'undefined' ? {} : this['kotlinx-serialization-kotlinx-serialization-json-js-ir'], this['kotlinx-serialization-kotlinx-serialization-core-js-ir'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var get_EmptySerializersModule = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p2;
  var objectMeta = kotlin_kotlin.$_$.x8;
  var fillArrayVal = kotlin_kotlin.$_$.x7;
  var Unit_getInstance = kotlin_kotlin.$_$.n3;
  var StringFormat = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y2;
  var classMeta = kotlin_kotlin.$_$.t7;
  var toString = kotlin_kotlin.$_$.b9;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.t1;
  var charSequenceGet = kotlin_kotlin.$_$.q7;
  var Char = kotlin_kotlin.$_$.ra;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.c2;
  var equals = kotlin_kotlin.$_$.w7;
  var Annotation = kotlin_kotlin.$_$.qa;
  var Decoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w1;
  var CompositeDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s1;
  var interfaceMeta = kotlin_kotlin.$_$.d8;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.i1;
  var THROW_CCE = kotlin_kotlin.$_$.db;
  var hashCode = kotlin_kotlin.$_$.c8;
  var joinToString$default = kotlin_kotlin.$_$.h;
  var Map = kotlin_kotlin.$_$.h4;
  var List = kotlin_kotlin.$_$.f4;
  var toDoubleOrNull = kotlin_kotlin.$_$.z9;
  var getKClassFromExpression = kotlin_kotlin.$_$.c;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.f;
  var lazy = kotlin_kotlin.$_$.tb;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m2;
  var getStringHashCode = kotlin_kotlin.$_$.b8;
  var toInt = kotlin_kotlin.$_$.da;
  var toLong = kotlin_kotlin.$_$.fa;
  var toDouble = kotlin_kotlin.$_$.aa;
  var toLongOrNull = kotlin_kotlin.$_$.ea;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.d1;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.u;
  var SEALED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var buildSerialDescriptor$default = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u2;
  var StringCompanionObject_getInstance = kotlin_kotlin.$_$.e3;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a1;
  var MapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x;
  var SerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l1;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g;
  var ENUM_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i;
  var PrimitiveSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h1;
  var toULongOrNull = kotlin_kotlin.$_$.la;
  var Companion_getInstance = kotlin_kotlin.$_$.l3;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e1;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.t2;
  var ULong = kotlin_kotlin.$_$.ib;
  var isInterface = kotlin_kotlin.$_$.m8;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.w1;
  var lazy_0 = kotlin_kotlin.$_$.ub;
  var get_isNullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k1;
  var get_isInline = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j1;
  var get_annotations = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i1;
  var KProperty1 = kotlin_kotlin.$_$.k9;
  var getPropertyCallableRef = kotlin_kotlin.$_$.a8;
  var Encoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b2;
  var CompositeEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u1;
  var toLong_0 = kotlin_kotlin.$_$.z8;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.p2;
  var UInt__toString_impl_dbgl21 = kotlin_kotlin.$_$.r2;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.s2;
  var ULong__toString_impl_f9au7k = kotlin_kotlin.$_$.u2;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.i2;
  var UByte__toString_impl_v72jg = kotlin_kotlin.$_$.k2;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.v2;
  var UShort__toString_impl_edaoee = kotlin_kotlin.$_$.x2;
  var ElementMarker = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f2;
  var captureStack = kotlin_kotlin.$_$.n7;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w2;
  var SerializationException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var charSequenceLength = kotlin_kotlin.$_$.r7;
  var charSequenceSubSequence = kotlin_kotlin.$_$.s7;
  var coerceAtLeast = kotlin_kotlin.$_$.e9;
  var coerceAtMost = kotlin_kotlin.$_$.f9;
  var Companion_getInstance_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var singleOrNull = kotlin_kotlin.$_$.p6;
  var arrayIterator = kotlin_kotlin.$_$.l7;
  var ensureNotNull = kotlin_kotlin.$_$.pb;
  var emptyMap = kotlin_kotlin.$_$.m5;
  var getValue = kotlin_kotlin.$_$.r5;
  var DeepRecursiveFunction = kotlin_kotlin.$_$.ua;
  var invoke = kotlin_kotlin.$_$.qb;
  var CoroutineImpl = kotlin_kotlin.$_$.i7;
  var DeepRecursiveScope = kotlin_kotlin.$_$.va;
  var Unit = kotlin_kotlin.$_$.kb;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.h7;
  var SuspendFunction2 = kotlin_kotlin.$_$.j7;
  var AbstractPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d2;
  var isObject = kotlin_kotlin.$_$.p8;
  var findPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z2;
  var getKClass = kotlin_kotlin.$_$.d;
  var DeserializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t2;
  var SealedClassSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v2;
  var jsonCachedSerialNames = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n2;
  var ENUM = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m1;
  var PrimitiveKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g1;
  var PolymorphicKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f1;
  var CONTEXTUAL_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h;
  var MAP_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
  var LIST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k;
  var contextual = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q2;
  var SerializersModuleCollector = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r2;
  var AbstractDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o1;
  var IllegalArgumentException = kotlin_kotlin.$_$.ya;
  var isFinite = kotlin_kotlin.$_$.sb;
  var isFinite_0 = kotlin_kotlin.$_$.rb;
  var decodeSequentially = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r1;
  var decodeCollectionSize = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q1;
  var decodeSerializableElement$default = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var toUInt = kotlin_kotlin.$_$.ka;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.q2;
  var toULong = kotlin_kotlin.$_$.ma;
  var toUByte = kotlin_kotlin.$_$.ja;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.j2;
  var toUShort = kotlin_kotlin.$_$.na;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.w2;
  var decodeSerializableValue = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v1;
  var AbstractEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p1;
  var toString_0 = kotlin_kotlin.$_$.h2;
  var encodeNotNullMark = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y1;
  var beginCollection = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x1;
  var encodeNullableSerializableValue = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z1;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.k3;
  var serializer_1 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c1;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.j3;
  var serializer_2 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d1;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.m3;
  var serializer_3 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b1;
  var setOf = kotlin_kotlin.$_$.o6;
  var numberToChar = kotlin_kotlin.$_$.u8;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.g2;
  var equals_0 = kotlin_kotlin.$_$.n9;
  var toByte = kotlin_kotlin.$_$.y8;
  var NamedValueDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k2;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.r1;
  var ByteCompanionObject_getInstance = kotlin_kotlin.$_$.z2;
  var ShortCompanionObject_getInstance = kotlin_kotlin.$_$.d3;
  var toShort = kotlin_kotlin.$_$.a9;
  var single = kotlin_kotlin.$_$.t9;
  var emptySet = kotlin_kotlin.$_$.n5;
  var plus = kotlin_kotlin.$_$.i6;
  var toList = kotlin_kotlin.$_$.y6;
  var Enum = kotlin_kotlin.$_$.wa;
  var getContextualDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n1;
  var last = kotlin_kotlin.$_$.a6;
  var removeLast = kotlin_kotlin.$_$.m6;
  var lastIndexOf$default = kotlin_kotlin.$_$.o;
  var Long = kotlin_kotlin.$_$.ab;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.d2;
  var Companion_getInstance_4 = kotlin_kotlin.$_$.i3;
  var charArray = kotlin_kotlin.$_$.p7;
  var indexOf$default = kotlin_kotlin.$_$.l;
  var SerializationException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var isArray = kotlin_kotlin.$_$.e8;
  var isNumber = kotlin_kotlin.$_$.o8;
  var numberToLong = kotlin_kotlin.$_$.w8;
  var toBoolean = kotlin_kotlin.$_$.w9;
  var toByteOrNull = kotlin_kotlin.$_$.x9;
  var toShortOrNull = kotlin_kotlin.$_$.ga;
  var toIntOrNull = kotlin_kotlin.$_$.ca;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.h1;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.w;
  //endregion
  //region block: pre-declaration
  Default.prototype = Object.create(Json.prototype);
  Default.prototype.constructor = Default;
  JsonImpl.prototype = Object.create(Json.prototype);
  JsonImpl.prototype.constructor = JsonImpl;
  JsonObject.prototype = Object.create(JsonElement.prototype);
  JsonObject.prototype.constructor = JsonObject;
  JsonArray.prototype = Object.create(JsonElement.prototype);
  JsonArray.prototype.constructor = JsonArray;
  JsonPrimitive.prototype = Object.create(JsonElement.prototype);
  JsonPrimitive.prototype.constructor = JsonPrimitive;
  JsonNull.prototype = Object.create(JsonPrimitive.prototype);
  JsonNull.prototype.constructor = JsonNull;
  JsonLiteral.prototype = Object.create(JsonPrimitive.prototype);
  JsonLiteral.prototype.constructor = JsonLiteral;
  ComposerForUnsignedNumbers.prototype = Object.create(Composer.prototype);
  ComposerForUnsignedNumbers.prototype.constructor = ComposerForUnsignedNumbers;
  ComposerWithPrettyPrint.prototype = Object.create(Composer.prototype);
  ComposerWithPrettyPrint.prototype.constructor = ComposerWithPrettyPrint;
  JsonException.prototype = Object.create(SerializationException.prototype);
  JsonException.prototype.constructor = JsonException;
  JsonEncodingException.prototype = Object.create(JsonException.prototype);
  JsonEncodingException.prototype.constructor = JsonEncodingException;
  JsonDecodingException.prototype = Object.create(JsonException.prototype);
  JsonDecodingException.prototype.constructor = JsonDecodingException;
  JsonTreeReader$readDeepRecursive$slambda.prototype = Object.create(CoroutineImpl.prototype);
  JsonTreeReader$readDeepRecursive$slambda.prototype.constructor = JsonTreeReader$readDeepRecursive$slambda;
  $readObjectCOROUTINE$0.prototype = Object.create(CoroutineImpl.prototype);
  $readObjectCOROUTINE$0.prototype.constructor = $readObjectCOROUTINE$0;
  StreamingJsonDecoder.prototype = Object.create(AbstractDecoder.prototype);
  StreamingJsonDecoder.prototype.constructor = StreamingJsonDecoder;
  JsonDecoderForUnsignedTypes.prototype = Object.create(AbstractDecoder.prototype);
  JsonDecoderForUnsignedTypes.prototype.constructor = JsonDecoderForUnsignedTypes;
  StreamingJsonEncoder.prototype = Object.create(AbstractEncoder.prototype);
  StreamingJsonEncoder.prototype.constructor = StreamingJsonEncoder;
  AbstractJsonTreeDecoder.prototype = Object.create(NamedValueDecoder.prototype);
  AbstractJsonTreeDecoder.prototype.constructor = AbstractJsonTreeDecoder;
  JsonTreeDecoder.prototype = Object.create(AbstractJsonTreeDecoder.prototype);
  JsonTreeDecoder.prototype.constructor = JsonTreeDecoder;
  JsonTreeListDecoder.prototype = Object.create(AbstractJsonTreeDecoder.prototype);
  JsonTreeListDecoder.prototype.constructor = JsonTreeListDecoder;
  JsonTreeMapDecoder.prototype = Object.create(JsonTreeDecoder.prototype);
  JsonTreeMapDecoder.prototype.constructor = JsonTreeMapDecoder;
  WriteMode.prototype = Object.create(Enum.prototype);
  WriteMode.prototype.constructor = WriteMode;
  StringJsonLexer.prototype = Object.create(AbstractJsonLexer.prototype);
  StringJsonLexer.prototype.constructor = StringJsonLexer;
  DynamicInput.prototype = Object.create(NamedValueDecoder.prototype);
  DynamicInput.prototype.constructor = DynamicInput;
  PrimitiveDynamicInput.prototype = Object.create(DynamicInput.prototype);
  PrimitiveDynamicInput.prototype.constructor = PrimitiveDynamicInput;
  DynamicListInput.prototype = Object.create(DynamicInput.prototype);
  DynamicListInput.prototype.constructor = DynamicListInput;
  DynamicMapInput.prototype = Object.create(DynamicInput.prototype);
  DynamicMapInput.prototype.constructor = DynamicMapInput;
  //endregion
  function Default() {
    Default_instance = this;
    Json.call(this, JsonConfiguration_init_$Create$(false, false, false, false, false, false, null, false, false, null, false, false, 4095, null), get_EmptySerializersModule());
  }
  Default.$metadata$ = objectMeta('Default', undefined, undefined, undefined, undefined, Json.prototype);
  var Default_instance;
  function Default_getInstance() {
    if (Default_instance == null)
      new Default();
    return Default_instance;
  }
  function Json(configuration, serializersModule) {
    Default_getInstance();
    this.p15_1 = configuration;
    this.q15_1 = serializersModule;
    this.r15_1 = new DescriptorSchemaCache();
  }
  Json.prototype.s15 = function () {
    return this.p15_1;
  };
  Json.prototype.vp = function () {
    return this.q15_1;
  };
  Json.prototype.t15 = function (serializer, value) {
    var result = new JsonStringBuilder();
    try {
      var tmp = WriteMode_OBJ_getInstance();
      var tmp$ret$0;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp0_arrayOfNulls = values().length;
      tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
      var encoder = StreamingJsonEncoder_init_$Create$(result, this, tmp, tmp$ret$0);
      encoder.lt(serializer, value);
      return result.toString();
    }finally {
      result.f16();
    }
  };
  Json.prototype.u15 = function (deserializer, string) {
    var lexer = new StringJsonLexer(string);
    var input = new StreamingJsonDecoder(this, WriteMode_OBJ_getInstance(), lexer, deserializer.bp());
    var result = input.wr(deserializer);
    lexer.q16();
    return result;
  };
  Json.prototype.v15 = function (string) {
    return this.u15(JsonElementSerializer_getInstance(), string);
  };
  Json.$metadata$ = classMeta('Json', [StringFormat]);
  function Json_0(from, builderAction) {
    var builder = new JsonBuilder(from);
    builderAction(builder);
    var conf = builder.jk();
    return new JsonImpl(conf, builder.d17_1);
  }
  function Json$default(from, builderAction, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      from = Default_getInstance();
    return Json_0(from, builderAction);
  }
  function JsonBuilder(json) {
    this.r16_1 = json.p15_1.e17_1;
    this.s16_1 = json.p15_1.j17_1;
    this.t16_1 = json.p15_1.f17_1;
    this.u16_1 = json.p15_1.g17_1;
    this.v16_1 = json.p15_1.h17_1;
    this.w16_1 = json.p15_1.i17_1;
    this.x16_1 = json.p15_1.k17_1;
    this.y16_1 = json.p15_1.l17_1;
    this.z16_1 = json.p15_1.m17_1;
    this.a17_1 = json.p15_1.n17_1;
    this.b17_1 = json.p15_1.o17_1;
    this.c17_1 = json.p15_1.p17_1;
    this.d17_1 = json.vp();
  }
  JsonBuilder.prototype.q17 = function () {
    return this.x16_1;
  };
  JsonBuilder.prototype.jk = function () {
    if (this.z16_1) {
      // Inline function 'kotlin.require' call
      var tmp0_require = this.a17_1 === 'type';
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_require) {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        tmp$ret$0 = 'Class discriminator should not be specified when array polymorphism is specified';
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    if (!this.w16_1) {
      // Inline function 'kotlin.require' call
      var tmp1_require = this.x16_1 === '    ';
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp1_require) {
        var tmp$ret$1;
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        tmp$ret$1 = 'Indent should not be specified when default printing mode is used';
        var message_0 = tmp$ret$1;
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
    } else if (!(this.x16_1 === '    ')) {
      var tmp$ret$3;
      $l$block: {
        // Inline function 'kotlin.text.all' call
        var tmp2_all = this.x16_1;
        var indexedObject = tmp2_all;
        var inductionVariable = 0;
        var last = indexedObject.length;
        while (inductionVariable < last) {
          var element = charSequenceGet(indexedObject, inductionVariable);
          inductionVariable = inductionVariable + 1 | 0;
          var tmp$ret$2;
          // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
          tmp$ret$2 = ((equals(new Char(element), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(element), new Char(_Char___init__impl__6a9atx(9)))) ? true : equals(new Char(element), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(element), new Char(_Char___init__impl__6a9atx(10)));
          if (!tmp$ret$2) {
            tmp$ret$3 = false;
            break $l$block;
          }
        }
        tmp$ret$3 = true;
      }
      var allWhitespaces = tmp$ret$3;
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!allWhitespaces) {
        var tmp$ret$4;
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        tmp$ret$4 = 'Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had ' + this.x16_1;
        var message_1 = tmp$ret$4;
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    }
    return new JsonConfiguration(this.r16_1, this.t16_1, this.u16_1, this.v16_1, this.w16_1, this.s16_1, this.x16_1, this.y16_1, this.z16_1, this.a17_1, this.b17_1, this.c17_1);
  };
  JsonBuilder.$metadata$ = classMeta('JsonBuilder');
  function validateConfiguration($this) {
    if (equals($this.vp(), get_EmptySerializersModule()))
      return Unit_getInstance();
    var collector = new PolymorphismValidator($this.p15_1.m17_1, $this.p15_1.n17_1);
    $this.vp().a15(collector);
  }
  function JsonImpl(configuration, module_0) {
    Json.call(this, configuration, module_0);
    validateConfiguration(this);
  }
  JsonImpl.$metadata$ = classMeta('JsonImpl', undefined, undefined, undefined, undefined, Json.prototype);
  function JsonClassDiscriminator() {
  }
  JsonClassDiscriminator.$metadata$ = classMeta('JsonClassDiscriminator', [Annotation]);
  function JsonNames() {
  }
  JsonNames.$metadata$ = classMeta('JsonNames', [Annotation]);
  function JsonConfiguration_init_$Init$(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      encodeDefaults = false;
    if (!(($mask0 & 2) === 0))
      ignoreUnknownKeys = false;
    if (!(($mask0 & 4) === 0))
      isLenient = false;
    if (!(($mask0 & 8) === 0))
      allowStructuredMapKeys = false;
    if (!(($mask0 & 16) === 0))
      prettyPrint = false;
    if (!(($mask0 & 32) === 0))
      explicitNulls = true;
    if (!(($mask0 & 64) === 0))
      prettyPrintIndent = '    ';
    if (!(($mask0 & 128) === 0))
      coerceInputValues = false;
    if (!(($mask0 & 256) === 0))
      useArrayPolymorphism = false;
    if (!(($mask0 & 512) === 0))
      classDiscriminator = 'type';
    if (!(($mask0 & 1024) === 0))
      allowSpecialFloatingPointValues = false;
    if (!(($mask0 & 2048) === 0))
      useAlternativeNames = true;
    JsonConfiguration.call($this, encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames);
    return $this;
  }
  function JsonConfiguration_init_$Create$(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, $mask0, $marker) {
    return JsonConfiguration_init_$Init$(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, $mask0, $marker, Object.create(JsonConfiguration.prototype));
  }
  function JsonConfiguration(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames) {
    this.e17_1 = encodeDefaults;
    this.f17_1 = ignoreUnknownKeys;
    this.g17_1 = isLenient;
    this.h17_1 = allowStructuredMapKeys;
    this.i17_1 = prettyPrint;
    this.j17_1 = explicitNulls;
    this.k17_1 = prettyPrintIndent;
    this.l17_1 = coerceInputValues;
    this.m17_1 = useArrayPolymorphism;
    this.n17_1 = classDiscriminator;
    this.o17_1 = allowSpecialFloatingPointValues;
    this.p17_1 = useAlternativeNames;
  }
  JsonConfiguration.prototype.r17 = function () {
    return this.g17_1;
  };
  JsonConfiguration.prototype.q17 = function () {
    return this.k17_1;
  };
  JsonConfiguration.prototype.toString = function () {
    return 'JsonConfiguration(encodeDefaults=' + this.e17_1 + ', ignoreUnknownKeys=' + this.f17_1 + ', isLenient=' + this.g17_1 + ', ' + ('allowStructuredMapKeys=' + this.h17_1 + ', prettyPrint=' + this.i17_1 + ', explicitNulls=' + this.j17_1 + ', ') + ("prettyPrintIndent='" + this.k17_1 + "', coerceInputValues=" + this.l17_1 + ', useArrayPolymorphism=' + this.m17_1 + ', ') + ("classDiscriminator='" + this.n17_1 + "', allowSpecialFloatingPointValues=" + this.o17_1 + ')');
  };
  JsonConfiguration.$metadata$ = classMeta('JsonConfiguration');
  function JsonDecoder() {
  }
  JsonDecoder.$metadata$ = interfaceMeta('JsonDecoder', [Decoder, CompositeDecoder]);
  function Companion() {
    Companion_instance = this;
  }
  Companion.prototype.u17 = function () {
    return JsonElementSerializer_getInstance();
  };
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance_5() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function JsonElement() {
    Companion_getInstance_5();
  }
  JsonElement.$metadata$ = classMeta('JsonElement', undefined, undefined, {0: JsonElementSerializer_getInstance});
  function Companion_0() {
    Companion_instance_0 = this;
  }
  Companion_0.$metadata$ = objectMeta('Companion');
  var Companion_instance_0;
  function Companion_getInstance_6() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function JsonObject$toString$lambda(_name_for_destructuring_parameter_0__wldtmu) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.component1' call
    tmp$ret$0 = _name_for_destructuring_parameter_0__wldtmu.h2();
    var k = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.component2' call
    tmp$ret$1 = _name_for_destructuring_parameter_0__wldtmu.j2();
    var v = tmp$ret$1;
    var tmp$ret$3;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$2;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.json.JsonObject.toString.<anonymous>.<anonymous>' call
    printQuoted(tmp0_apply, k);
    tmp0_apply.k8(_Char___init__impl__6a9atx(58));
    tmp0_apply.ph(v);
    tmp$ret$2 = tmp0_apply;
    tmp$ret$3 = tmp$ret$2.toString();
    return tmp$ret$3;
  }
  function JsonObject(content) {
    Companion_getInstance_6();
    JsonElement.call(this);
    this.v17_1 = content;
  }
  JsonObject.prototype.w17 = function (key) {
    return this.v17_1.r2(key);
  };
  JsonObject.prototype.r2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.w17((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  JsonObject.prototype.x17 = function (value) {
    return this.v17_1.v2(value);
  };
  JsonObject.prototype.v2 = function (value) {
    if (!(value instanceof JsonElement))
      return false;
    return this.x17(value instanceof JsonElement ? value : THROW_CCE());
  };
  JsonObject.prototype.y17 = function (key) {
    return this.v17_1.x2(key);
  };
  JsonObject.prototype.x2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.y17((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  JsonObject.prototype.d = function () {
    return this.v17_1.d();
  };
  JsonObject.prototype.v = function () {
    return this.v17_1.v();
  };
  JsonObject.prototype.y2 = function () {
    return this.v17_1.y2();
  };
  JsonObject.prototype.o = function () {
    return this.v17_1.o();
  };
  JsonObject.prototype.z2 = function () {
    return this.v17_1.z2();
  };
  JsonObject.prototype.equals = function (other) {
    return equals(this.v17_1, other);
  };
  JsonObject.prototype.hashCode = function () {
    return hashCode(this.v17_1);
  };
  JsonObject.prototype.toString = function () {
    var tmp = this.v17_1.v();
    return joinToString$default(tmp, ',', '{', '}', 0, null, JsonObject$toString$lambda, 24, null);
  };
  JsonObject.$metadata$ = classMeta('JsonObject', [Map], undefined, {0: JsonObjectSerializer_getInstance}, undefined, JsonElement.prototype);
  function get_jsonObject(_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonObject ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      error(_this__u8e3s4, 'JsonObject');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function Companion_1() {
    Companion_instance_1 = this;
  }
  Companion_1.$metadata$ = objectMeta('Companion');
  var Companion_instance_1;
  function Companion_getInstance_7() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function JsonArray(content) {
    Companion_getInstance_7();
    JsonElement.call(this);
    this.z17_1 = content;
  }
  JsonArray.prototype.a18 = function (elements) {
    return this.z17_1.l1(elements);
  };
  JsonArray.prototype.l1 = function (elements) {
    return this.a18(elements);
  };
  JsonArray.prototype.p = function (index) {
    return this.z17_1.p(index);
  };
  JsonArray.prototype.d = function () {
    return this.z17_1.d();
  };
  JsonArray.prototype.l = function () {
    return this.z17_1.l();
  };
  JsonArray.prototype.r = function (index) {
    return this.z17_1.r(index);
  };
  JsonArray.prototype.o = function () {
    return this.z17_1.o();
  };
  JsonArray.prototype.equals = function (other) {
    return equals(this.z17_1, other);
  };
  JsonArray.prototype.hashCode = function () {
    return hashCode(this.z17_1);
  };
  JsonArray.prototype.toString = function () {
    return joinToString$default(this.z17_1, ',', '[', ']', 0, null, null, 56, null);
  };
  JsonArray.$metadata$ = classMeta('JsonArray', [List], undefined, {0: JsonArraySerializer_getInstance}, undefined, JsonElement.prototype);
  function get_jsonArray(_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonArray ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      error(_this__u8e3s4, 'JsonArray');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function Companion_2() {
    Companion_instance_2 = this;
  }
  Companion_2.$metadata$ = objectMeta('Companion');
  var Companion_instance_2;
  function Companion_getInstance_8() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function JsonPrimitive() {
    Companion_getInstance_8();
    JsonElement.call(this);
  }
  JsonPrimitive.prototype.toString = function () {
    return this.b18();
  };
  JsonPrimitive.$metadata$ = classMeta('JsonPrimitive', undefined, undefined, {0: JsonPrimitiveSerializer_getInstance}, undefined, JsonElement.prototype);
  function get_jsonPrimitive(_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonPrimitive ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      error(_this__u8e3s4, 'JsonPrimitive');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function get_floatOrNull(_this__u8e3s4) {
    var tmp$ret$2;
    // Inline function 'kotlin.text.toFloatOrNull' call
    var tmp0_toFloatOrNull = _this__u8e3s4.b18();
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = toDoubleOrNull(tmp0_toFloatOrNull);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_unsafeCast;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  }
  function error(_this__u8e3s4, element) {
    throw IllegalArgumentException_init_$Create$('Element ' + getKClassFromExpression(_this__u8e3s4) + ' is not a ' + element);
  }
  function JsonNull$$cachedSerializer$delegate$_anonymous__7w2ks1() {
    return JsonNullSerializer_getInstance();
  }
  function JsonNull() {
    JsonNull_instance = this;
    JsonPrimitive.call(this);
    this.c18_1 = 'null';
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.d18_1 = lazy(tmp_0, JsonNull$$cachedSerializer$delegate$_anonymous__7w2ks1);
  }
  JsonNull.prototype.b18 = function () {
    return this.c18_1;
  };
  JsonNull.prototype.u17 = function () {
    return this.d18_1.j2();
  };
  JsonNull.prototype.nz = function (typeParamsSerializers) {
    return this.u17();
  };
  JsonNull.$metadata$ = objectMeta('JsonNull', [SerializerFactory], undefined, {0: JsonNullSerializer_getInstance}, undefined, JsonPrimitive.prototype);
  var JsonNull_instance;
  function JsonNull_getInstance() {
    if (JsonNull_instance == null)
      new JsonNull();
    return JsonNull_instance;
  }
  function JsonPrimitive_0(value) {
    if (value == null)
      return JsonNull_getInstance();
    return new JsonLiteral(value, false);
  }
  function JsonPrimitive_1(value) {
    if (value == null)
      return JsonNull_getInstance();
    return new JsonLiteral(value, false);
  }
  function JsonPrimitive_2(value) {
    if (value == null)
      return JsonNull_getInstance();
    return new JsonLiteral(value, true);
  }
  function JsonLiteral(body, isString) {
    JsonPrimitive.call(this);
    this.e18_1 = isString;
    this.f18_1 = toString(body);
  }
  JsonLiteral.prototype.b18 = function () {
    return this.f18_1;
  };
  JsonLiteral.prototype.toString = function () {
    var tmp;
    if (this.e18_1) {
      var tmp$ret$1;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'kotlin.apply' call
      var tmp0_apply = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.json.JsonLiteral.toString.<anonymous>' call
      printQuoted(tmp0_apply, this.f18_1);
      tmp$ret$0 = tmp0_apply;
      tmp$ret$1 = tmp$ret$0.toString();
      tmp = tmp$ret$1;
    } else {
      tmp = this.f18_1;
    }
    return tmp;
  };
  JsonLiteral.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (other instanceof JsonLiteral)
      other;
    else
      THROW_CCE();
    if (!(this.e18_1 === other.e18_1))
      return false;
    if (!(this.f18_1 === other.f18_1))
      return false;
    return true;
  };
  JsonLiteral.prototype.hashCode = function () {
    var result = this.e18_1 | 0;
    result = imul(31, result) + getStringHashCode(this.f18_1) | 0;
    return result;
  };
  JsonLiteral.$metadata$ = classMeta('JsonLiteral', undefined, undefined, undefined, undefined, JsonPrimitive.prototype);
  function get_booleanOrNull(_this__u8e3s4) {
    return toBooleanStrictOrNull(_this__u8e3s4.b18());
  }
  function get_int(_this__u8e3s4) {
    return toInt(_this__u8e3s4.b18());
  }
  function get_long(_this__u8e3s4) {
    return toLong(_this__u8e3s4.b18());
  }
  function get_float(_this__u8e3s4) {
    var tmp$ret$2;
    // Inline function 'kotlin.text.toFloat' call
    var tmp0_toFloat = _this__u8e3s4.b18();
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = toDouble(tmp0_toFloat);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_unsafeCast;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  }
  function get_double(_this__u8e3s4) {
    return toDouble(_this__u8e3s4.b18());
  }
  function get_contentOrNull(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof JsonNull) {
      tmp = null;
    } else {
      tmp = _this__u8e3s4.b18();
    }
    return tmp;
  }
  function get_longOrNull(_this__u8e3s4) {
    return toLongOrNull(_this__u8e3s4.b18());
  }
  function get_doubleOrNull(_this__u8e3s4) {
    return toDoubleOrNull(_this__u8e3s4.b18());
  }
  function buildJsonObject(builderAction) {
    // Inline function 'kotlin.contracts.contract' call
    var builder = new JsonObjectBuilder();
    builderAction(builder);
    return builder.jk();
  }
  function JsonObjectBuilder() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.linkedMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    tmp.g18_1 = tmp$ret$0;
  }
  JsonObjectBuilder.prototype.h18 = function (key, element) {
    return this.g18_1.s(key, element);
  };
  JsonObjectBuilder.prototype.jk = function () {
    return new JsonObject(this.g18_1);
  };
  JsonObjectBuilder.$metadata$ = classMeta('JsonObjectBuilder');
  function buildJsonArray(builderAction) {
    // Inline function 'kotlin.contracts.contract' call
    var builder = new JsonArrayBuilder();
    builderAction(builder);
    return builder.jk();
  }
  function JsonArrayBuilder() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.i18_1 = tmp$ret$0;
  }
  JsonArrayBuilder.prototype.j18 = function (element) {
    var tmp0_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp0_plusAssign = tmp0_this.i18_1;
    tmp0_plusAssign.g(element);
    return true;
  };
  JsonArrayBuilder.prototype.jk = function () {
    return new JsonArray(this.i18_1);
  };
  JsonArrayBuilder.$metadata$ = classMeta('JsonArrayBuilder');
  function JsonElementSerializer$descriptor$lambda($this$buildSerialDescriptor) {
    var tmp = defer(JsonElementSerializer$descriptor$lambda$lambda);
    $this$buildSerialDescriptor.mp('JsonPrimitive', tmp, null, false, 12, null);
    var tmp_0 = defer(JsonElementSerializer$descriptor$lambda$lambda_0);
    $this$buildSerialDescriptor.mp('JsonNull', tmp_0, null, false, 12, null);
    var tmp_1 = defer(JsonElementSerializer$descriptor$lambda$lambda_1);
    $this$buildSerialDescriptor.mp('JsonLiteral', tmp_1, null, false, 12, null);
    var tmp_2 = defer(JsonElementSerializer$descriptor$lambda$lambda_2);
    $this$buildSerialDescriptor.mp('JsonObject', tmp_2, null, false, 12, null);
    var tmp_3 = defer(JsonElementSerializer$descriptor$lambda$lambda_3);
    $this$buildSerialDescriptor.mp('JsonArray', tmp_3, null, false, 12, null);
    return Unit_getInstance();
  }
  function JsonElementSerializer$descriptor$lambda$lambda() {
    return JsonPrimitiveSerializer_getInstance().k18_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_0() {
    return JsonNullSerializer_getInstance().l18_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_1() {
    return JsonLiteralSerializer_getInstance().m18_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_2() {
    return JsonObjectSerializer_getInstance().n18_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_3() {
    return JsonArraySerializer_getInstance().o18_1;
  }
  function JsonElementSerializer() {
    JsonElementSerializer_instance = this;
    var tmp = this;
    var tmp_0 = SEALED_getInstance();
    tmp.p18_1 = buildSerialDescriptor$default('kotlinx.serialization.json.JsonElement', tmp_0, [], JsonElementSerializer$descriptor$lambda, 4, null);
  }
  JsonElementSerializer.prototype.bp = function () {
    return this.p18_1;
  };
  JsonElementSerializer.prototype.q18 = function (encoder, value) {
    verify(encoder);
    var tmp0_subject = value;
    if (tmp0_subject instanceof JsonPrimitive) {
      encoder.lt(JsonPrimitiveSerializer_getInstance(), value);
    } else {
      if (tmp0_subject instanceof JsonObject) {
        encoder.lt(JsonObjectSerializer_getInstance(), value);
      } else {
        if (tmp0_subject instanceof JsonArray) {
          encoder.lt(JsonArraySerializer_getInstance(), value);
        }
      }
    }
  };
  JsonElementSerializer.prototype.cp = function (encoder, value) {
    return this.q18(encoder, value instanceof JsonElement ? value : THROW_CCE());
  };
  JsonElementSerializer.prototype.dp = function (decoder) {
    var input = asJsonDecoder(decoder);
    return input.t17();
  };
  JsonElementSerializer.$metadata$ = objectMeta('JsonElementSerializer', [KSerializer]);
  var JsonElementSerializer_instance;
  function JsonElementSerializer_getInstance() {
    if (JsonElementSerializer_instance == null)
      new JsonElementSerializer();
    return JsonElementSerializer_instance;
  }
  function JsonObjectDescriptor() {
    JsonObjectDescriptor_instance = this;
    this.r18_1 = MapSerializer(serializer(StringCompanionObject_getInstance()), JsonElementSerializer_getInstance()).bp();
    this.s18_1 = 'kotlinx.serialization.json.JsonObject';
  }
  JsonObjectDescriptor.prototype.fq = function (index) {
    return this.r18_1.fq(index);
  };
  JsonObjectDescriptor.prototype.gq = function (index) {
    return this.r18_1.gq(index);
  };
  JsonObjectDescriptor.prototype.hq = function (name) {
    return this.r18_1.hq(name);
  };
  JsonObjectDescriptor.prototype.iq = function (index) {
    return this.r18_1.iq(index);
  };
  JsonObjectDescriptor.prototype.jq = function (index) {
    return this.r18_1.jq(index);
  };
  JsonObjectDescriptor.prototype.kq = function () {
    return this.r18_1.kq();
  };
  JsonObjectDescriptor.prototype.lq = function () {
    return this.r18_1.lq();
  };
  JsonObjectDescriptor.prototype.mq = function () {
    return this.r18_1.mq();
  };
  JsonObjectDescriptor.prototype.aq = function () {
    return this.r18_1.aq();
  };
  JsonObjectDescriptor.prototype.nq = function () {
    return this.r18_1.nq();
  };
  JsonObjectDescriptor.prototype.eq = function () {
    return this.s18_1;
  };
  JsonObjectDescriptor.$metadata$ = objectMeta('JsonObjectDescriptor', [SerialDescriptor]);
  var JsonObjectDescriptor_instance;
  function JsonObjectDescriptor_getInstance() {
    if (JsonObjectDescriptor_instance == null)
      new JsonObjectDescriptor();
    return JsonObjectDescriptor_instance;
  }
  function JsonObjectSerializer() {
    JsonObjectSerializer_instance = this;
    this.n18_1 = JsonObjectDescriptor_getInstance();
  }
  JsonObjectSerializer.prototype.bp = function () {
    return this.n18_1;
  };
  JsonObjectSerializer.prototype.t18 = function (encoder, value) {
    verify(encoder);
    MapSerializer(serializer(StringCompanionObject_getInstance()), JsonElementSerializer_getInstance()).cp(encoder, value);
  };
  JsonObjectSerializer.prototype.cp = function (encoder, value) {
    return this.t18(encoder, value instanceof JsonObject ? value : THROW_CCE());
  };
  JsonObjectSerializer.prototype.dp = function (decoder) {
    verify_0(decoder);
    return new JsonObject(MapSerializer(serializer(StringCompanionObject_getInstance()), JsonElementSerializer_getInstance()).dp(decoder));
  };
  JsonObjectSerializer.$metadata$ = objectMeta('JsonObjectSerializer', [KSerializer]);
  var JsonObjectSerializer_instance;
  function JsonObjectSerializer_getInstance() {
    if (JsonObjectSerializer_instance == null)
      new JsonObjectSerializer();
    return JsonObjectSerializer_instance;
  }
  function JsonArrayDescriptor() {
    JsonArrayDescriptor_instance = this;
    this.u18_1 = ListSerializer(JsonElementSerializer_getInstance()).bp();
    this.v18_1 = 'kotlinx.serialization.json.JsonArray';
  }
  JsonArrayDescriptor.prototype.fq = function (index) {
    return this.u18_1.fq(index);
  };
  JsonArrayDescriptor.prototype.gq = function (index) {
    return this.u18_1.gq(index);
  };
  JsonArrayDescriptor.prototype.hq = function (name) {
    return this.u18_1.hq(name);
  };
  JsonArrayDescriptor.prototype.iq = function (index) {
    return this.u18_1.iq(index);
  };
  JsonArrayDescriptor.prototype.jq = function (index) {
    return this.u18_1.jq(index);
  };
  JsonArrayDescriptor.prototype.kq = function () {
    return this.u18_1.kq();
  };
  JsonArrayDescriptor.prototype.lq = function () {
    return this.u18_1.lq();
  };
  JsonArrayDescriptor.prototype.mq = function () {
    return this.u18_1.mq();
  };
  JsonArrayDescriptor.prototype.aq = function () {
    return this.u18_1.aq();
  };
  JsonArrayDescriptor.prototype.nq = function () {
    return this.u18_1.nq();
  };
  JsonArrayDescriptor.prototype.eq = function () {
    return this.v18_1;
  };
  JsonArrayDescriptor.$metadata$ = objectMeta('JsonArrayDescriptor', [SerialDescriptor]);
  var JsonArrayDescriptor_instance;
  function JsonArrayDescriptor_getInstance() {
    if (JsonArrayDescriptor_instance == null)
      new JsonArrayDescriptor();
    return JsonArrayDescriptor_instance;
  }
  function JsonArraySerializer() {
    JsonArraySerializer_instance = this;
    this.o18_1 = JsonArrayDescriptor_getInstance();
  }
  JsonArraySerializer.prototype.bp = function () {
    return this.o18_1;
  };
  JsonArraySerializer.prototype.w18 = function (encoder, value) {
    verify(encoder);
    ListSerializer(JsonElementSerializer_getInstance()).cp(encoder, value);
  };
  JsonArraySerializer.prototype.cp = function (encoder, value) {
    return this.w18(encoder, value instanceof JsonArray ? value : THROW_CCE());
  };
  JsonArraySerializer.prototype.dp = function (decoder) {
    verify_0(decoder);
    return new JsonArray(ListSerializer(JsonElementSerializer_getInstance()).dp(decoder));
  };
  JsonArraySerializer.$metadata$ = objectMeta('JsonArraySerializer', [KSerializer]);
  var JsonArraySerializer_instance;
  function JsonArraySerializer_getInstance() {
    if (JsonArraySerializer_instance == null)
      new JsonArraySerializer();
    return JsonArraySerializer_instance;
  }
  function JsonPrimitiveSerializer() {
    JsonPrimitiveSerializer_instance = this;
    var tmp = this;
    var tmp_0 = STRING_getInstance();
    tmp.k18_1 = buildSerialDescriptor$default('kotlinx.serialization.json.JsonPrimitive', tmp_0, [], null, 12, null);
  }
  JsonPrimitiveSerializer.prototype.bp = function () {
    return this.k18_1;
  };
  JsonPrimitiveSerializer.prototype.x18 = function (encoder, value) {
    verify(encoder);
    var tmp;
    if (value instanceof JsonNull) {
      encoder.lt(JsonNullSerializer_getInstance(), JsonNull_getInstance());
      tmp = Unit_getInstance();
    } else {
      var tmp_0 = JsonLiteralSerializer_getInstance();
      encoder.lt(tmp_0, value instanceof JsonLiteral ? value : THROW_CCE());
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  JsonPrimitiveSerializer.prototype.cp = function (encoder, value) {
    return this.x18(encoder, value instanceof JsonPrimitive ? value : THROW_CCE());
  };
  JsonPrimitiveSerializer.prototype.dp = function (decoder) {
    var result = asJsonDecoder(decoder).t17();
    if (!(result instanceof JsonPrimitive))
      throw JsonDecodingException_0(-1, 'Unexpected JSON element, expected JsonPrimitive, had ' + getKClassFromExpression(result), toString(result));
    return result;
  };
  JsonPrimitiveSerializer.$metadata$ = objectMeta('JsonPrimitiveSerializer', [KSerializer]);
  var JsonPrimitiveSerializer_instance;
  function JsonPrimitiveSerializer_getInstance() {
    if (JsonPrimitiveSerializer_instance == null)
      new JsonPrimitiveSerializer();
    return JsonPrimitiveSerializer_instance;
  }
  function defer(deferred) {
    return new defer$1(deferred);
  }
  function JsonNullSerializer() {
    JsonNullSerializer_instance = this;
    var tmp = this;
    var tmp_0 = ENUM_getInstance();
    tmp.l18_1 = buildSerialDescriptor$default('kotlinx.serialization.json.JsonNull', tmp_0, [], null, 12, null);
  }
  JsonNullSerializer.prototype.bp = function () {
    return this.l18_1;
  };
  JsonNullSerializer.prototype.y18 = function (encoder, value) {
    verify(encoder);
    encoder.qs();
  };
  JsonNullSerializer.prototype.cp = function (encoder, value) {
    return this.y18(encoder, value instanceof JsonNull ? value : THROW_CCE());
  };
  JsonNullSerializer.prototype.dp = function (decoder) {
    verify_0(decoder);
    if (decoder.jr()) {
      throw new JsonDecodingException("Expected 'null' literal");
    }
    decoder.kr();
    return JsonNull_getInstance();
  };
  JsonNullSerializer.$metadata$ = objectMeta('JsonNullSerializer', [KSerializer]);
  var JsonNullSerializer_instance;
  function JsonNullSerializer_getInstance() {
    if (JsonNullSerializer_instance == null)
      new JsonNullSerializer();
    return JsonNullSerializer_instance;
  }
  function JsonLiteralSerializer() {
    JsonLiteralSerializer_instance = this;
    this.m18_1 = PrimitiveSerialDescriptor('kotlinx.serialization.json.JsonLiteral', STRING_getInstance());
  }
  JsonLiteralSerializer.prototype.bp = function () {
    return this.m18_1;
  };
  JsonLiteralSerializer.prototype.z18 = function (encoder, value) {
    verify(encoder);
    if (value.e18_1) {
      return encoder.zs(value.f18_1);
    }
    var tmp0_safe_receiver = get_longOrNull(value);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return encoder.vs(tmp0_safe_receiver);
    }
    var tmp1_safe_receiver = toULongOrNull(value.f18_1);
    var tmp = tmp1_safe_receiver;
    if ((tmp == null ? null : new ULong(tmp)) == null)
      null;
    else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_0 = encoder.at(serializer_0(Companion_getInstance()).bp());
      var tmp$ret$1;
      // Inline function 'kotlin.ULong.toLong' call
      tmp$ret$1 = _ULong___get_data__impl__fggpzb(tmp1_safe_receiver);
      tmp_0.vs(tmp$ret$1);
      return Unit_getInstance();
    }
    var tmp2_safe_receiver = get_doubleOrNull(value);
    if (tmp2_safe_receiver == null)
      null;
    else {
      var tmp$ret$3;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return encoder.xs(tmp2_safe_receiver);
    }
    var tmp3_safe_receiver = get_booleanOrNull(value);
    if (tmp3_safe_receiver == null)
      null;
    else {
      var tmp$ret$4;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return encoder.rs(tmp3_safe_receiver);
    }
    encoder.zs(value.f18_1);
  };
  JsonLiteralSerializer.prototype.cp = function (encoder, value) {
    return this.z18(encoder, value instanceof JsonLiteral ? value : THROW_CCE());
  };
  JsonLiteralSerializer.prototype.dp = function (decoder) {
    var result = asJsonDecoder(decoder).t17();
    if (!(result instanceof JsonLiteral))
      throw JsonDecodingException_0(-1, 'Unexpected JSON element, expected JsonLiteral, had ' + getKClassFromExpression(result), toString(result));
    return result;
  };
  JsonLiteralSerializer.$metadata$ = objectMeta('JsonLiteralSerializer', [KSerializer]);
  var JsonLiteralSerializer_instance;
  function JsonLiteralSerializer_getInstance() {
    if (JsonLiteralSerializer_instance == null)
      new JsonLiteralSerializer();
    return JsonLiteralSerializer_instance;
  }
  function verify(encoder) {
    asJsonEncoder(encoder);
  }
  function asJsonDecoder(_this__u8e3s4) {
    var tmp0_elvis_lhs = isInterface(_this__u8e3s4, JsonDecoder) ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('This serializer can be used only with Json format.' + ('Expected Decoder to be JsonDecoder, got ' + getKClassFromExpression(_this__u8e3s4)));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function verify_0(decoder) {
    asJsonDecoder(decoder);
  }
  function asJsonEncoder(_this__u8e3s4) {
    var tmp0_elvis_lhs = isInterface(_this__u8e3s4, JsonEncoder) ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('This serializer can be used only with Json format.' + ('Expected Encoder to be JsonEncoder, got ' + getKClassFromExpression(_this__u8e3s4)));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function _get_original__l7ku1m($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = original$factory();
    tmp$ret$0 = $this.a19_1.j2();
    return tmp$ret$0;
  }
  function defer$1($deferred) {
    this.a19_1 = lazy_0($deferred);
  }
  defer$1.prototype.eq = function () {
    return _get_original__l7ku1m(this).eq();
  };
  defer$1.prototype.nq = function () {
    return _get_original__l7ku1m(this).nq();
  };
  defer$1.prototype.lq = function () {
    return _get_original__l7ku1m(this).lq();
  };
  defer$1.prototype.iq = function (index) {
    return _get_original__l7ku1m(this).iq(index);
  };
  defer$1.prototype.hq = function (name) {
    return _get_original__l7ku1m(this).hq(name);
  };
  defer$1.prototype.fq = function (index) {
    return _get_original__l7ku1m(this).fq(index);
  };
  defer$1.prototype.gq = function (index) {
    return _get_original__l7ku1m(this).gq(index);
  };
  defer$1.prototype.jq = function (index) {
    return _get_original__l7ku1m(this).jq(index);
  };
  defer$1.$metadata$ = classMeta(undefined, [SerialDescriptor]);
  function original$factory() {
    return getPropertyCallableRef('original', 1, KProperty1, function (receiver) {
      return _get_original__l7ku1m(receiver);
    }, null);
  }
  function JsonEncoder() {
  }
  JsonEncoder.$metadata$ = interfaceMeta('JsonEncoder', [Encoder, CompositeEncoder]);
  function Composer(sb) {
    this.b19_1 = sb;
    this.c19_1 = true;
  }
  Composer.prototype.d19 = function () {
    this.c19_1 = true;
  };
  Composer.prototype.e19 = function () {
    return Unit_getInstance();
  };
  Composer.prototype.f19 = function () {
    this.c19_1 = false;
  };
  Composer.prototype.g19 = function () {
    return Unit_getInstance();
  };
  Composer.prototype.h19 = function (v) {
    return this.b19_1.vz(v);
  };
  Composer.prototype.i19 = function (v) {
    return this.b19_1.j19(v);
  };
  Composer.prototype.k19 = function (v) {
    return this.b19_1.j19(v.toString());
  };
  Composer.prototype.l19 = function (v) {
    return this.b19_1.j19(v.toString());
  };
  Composer.prototype.m19 = function (v) {
    return this.b19_1.w10(toLong_0(v));
  };
  Composer.prototype.n19 = function (v) {
    return this.b19_1.w10(toLong_0(v));
  };
  Composer.prototype.o19 = function (v) {
    return this.b19_1.w10(toLong_0(v));
  };
  Composer.prototype.p19 = function (v) {
    return this.b19_1.w10(v);
  };
  Composer.prototype.q19 = function (v) {
    return this.b19_1.j19(v.toString());
  };
  Composer.prototype.r19 = function (value) {
    return this.b19_1.s19(value);
  };
  Composer.$metadata$ = classMeta('Composer');
  function Composer_0(sb, json) {
    return json.p15_1.i17_1 ? new ComposerWithPrettyPrint(sb, json) : new Composer(sb);
  }
  function ComposerForUnsignedNumbers(sb) {
    Composer.call(this, sb);
  }
  ComposerForUnsignedNumbers.prototype.o19 = function (v) {
    var tmp$ret$0;
    // Inline function 'kotlin.toUInt' call
    tmp$ret$0 = _UInt___init__impl__l7qpdl(v);
    return Composer.prototype.i19.call(this, UInt__toString_impl_dbgl21(tmp$ret$0));
  };
  ComposerForUnsignedNumbers.prototype.p19 = function (v) {
    var tmp$ret$0;
    // Inline function 'kotlin.toULong' call
    tmp$ret$0 = _ULong___init__impl__c78o9k(v);
    return Composer.prototype.i19.call(this, ULong__toString_impl_f9au7k(tmp$ret$0));
  };
  ComposerForUnsignedNumbers.prototype.m19 = function (v) {
    var tmp$ret$0;
    // Inline function 'kotlin.toUByte' call
    tmp$ret$0 = _UByte___init__impl__g9hnc4(v);
    return Composer.prototype.i19.call(this, UByte__toString_impl_v72jg(tmp$ret$0));
  };
  ComposerForUnsignedNumbers.prototype.n19 = function (v) {
    var tmp$ret$0;
    // Inline function 'kotlin.toUShort' call
    tmp$ret$0 = _UShort___init__impl__jigrne(v);
    return Composer.prototype.i19.call(this, UShort__toString_impl_edaoee(tmp$ret$0));
  };
  ComposerForUnsignedNumbers.$metadata$ = classMeta('ComposerForUnsignedNumbers', undefined, undefined, undefined, undefined, Composer.prototype);
  function ComposerWithPrettyPrint(sb, json) {
    Composer.call(this, sb);
    this.x19_1 = json;
    this.y19_1 = 0;
  }
  ComposerWithPrettyPrint.prototype.d19 = function () {
    this.c19_1 = true;
    var tmp0_this = this;
    var tmp1 = tmp0_this.y19_1;
    tmp0_this.y19_1 = tmp1 + 1 | 0;
  };
  ComposerWithPrettyPrint.prototype.e19 = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this.y19_1;
    tmp0_this.y19_1 = tmp1 - 1 | 0;
  };
  ComposerWithPrettyPrint.prototype.f19 = function () {
    this.c19_1 = false;
    this.i19('\n');
    // Inline function 'kotlin.repeat' call
    var tmp0_repeat = this.y19_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < tmp0_repeat)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.serialization.json.internal.ComposerWithPrettyPrint.nextItem.<anonymous>' call
        this.i19(this.x19_1.p15_1.k17_1);
      }
       while (inductionVariable < tmp0_repeat);
  };
  ComposerWithPrettyPrint.prototype.g19 = function () {
    this.h19(_Char___init__impl__6a9atx(32));
  };
  ComposerWithPrettyPrint.$metadata$ = classMeta('ComposerWithPrettyPrint', undefined, undefined, undefined, undefined, Composer.prototype);
  function readIfAbsent($this, descriptor, index) {
    $this.a1a_1 = !descriptor.jq(index) ? descriptor.gq(index).aq() : false;
    return $this.a1a_1;
  }
  function JsonElementMarker$readIfAbsent$ref($boundThis) {
    var l = function (p0, p1) {
      return readIfAbsent($boundThis, p0, p1);
    };
    l.callableName = 'readIfAbsent';
    return l;
  }
  function JsonElementMarker(descriptor) {
    var tmp = this;
    tmp.z19_1 = new ElementMarker(descriptor, JsonElementMarker$readIfAbsent$ref(this));
    this.a1a_1 = false;
  }
  JsonElementMarker.prototype.ox = function (index) {
    this.z19_1.ox(index);
  };
  JsonElementMarker.prototype.px = function () {
    return this.z19_1.px();
  };
  JsonElementMarker.$metadata$ = classMeta('JsonElementMarker');
  function JsonEncodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonEncodingException);
  }
  JsonEncodingException.$metadata$ = classMeta('JsonEncodingException', undefined, undefined, undefined, undefined, JsonException.prototype);
  function InvalidFloatingPointEncoded(value, output) {
    var tmp = 'Unexpected special floating-point value ' + toString(value) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification. ' + (get_specialFlowingValuesHint() + '\n');
    return new JsonEncodingException(tmp + ('Current output: ' + minify$default(output, 0, 1, null)));
  }
  function InvalidKeyKindException(keyDescriptor) {
    return new JsonEncodingException("Value of type '" + keyDescriptor.eq() + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor.nq() + "'.\n") + get_allowStructuredMapKeysHint());
  }
  function throwInvalidFloatingPointDecoded(_this__u8e3s4, result) {
    var tmp = 'Unexpected special floating-point value ' + toString(result) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification. ' + get_specialFlowingValuesHint();
    _this__u8e3s4.b1a(tmp, 0, 2, null);
  }
  function JsonDecodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonDecodingException);
  }
  JsonDecodingException.$metadata$ = classMeta('JsonDecodingException', undefined, undefined, undefined, undefined, JsonException.prototype);
  function JsonDecodingException_0(offset, message, input) {
    return JsonDecodingException_1(offset, message + '\nJSON input: ' + minify(input, offset));
  }
  function InvalidFloatingPointDecoded(value, key, output) {
    return JsonDecodingException_1(-1, unexpectedFpErrorMessage(value, key, output));
  }
  function JsonDecodingException_1(offset, message) {
    return new JsonDecodingException(offset >= 0 ? 'Unexpected JSON token at offset ' + offset + ': ' + message : message);
  }
  function UnknownKeyException(key, input) {
    var tmp = "Encountered unknown key '" + key + "'.\n" + (get_ignoreUnknownKeysHint() + '\n');
    return JsonDecodingException_1(-1, tmp + ('Current input: ' + minify$default(input, 0, 1, null)));
  }
  function JsonException(message) {
    SerializationException_init_$Init$(message, this);
    captureStack(this, JsonException);
  }
  JsonException.$metadata$ = classMeta('JsonException', undefined, undefined, undefined, undefined, SerializationException.prototype);
  function minify(_this__u8e3s4, offset) {
    if (charSequenceLength(_this__u8e3s4) < 200)
      return _this__u8e3s4;
    if (offset === -1) {
      var start = charSequenceLength(_this__u8e3s4) - 60 | 0;
      if (start <= 0)
        return _this__u8e3s4;
      var tmp$ret$0;
      // Inline function 'kotlin.text.substring' call
      var tmp0_substring = charSequenceLength(_this__u8e3s4);
      tmp$ret$0 = toString(charSequenceSubSequence(_this__u8e3s4, start, tmp0_substring));
      return '.....' + tmp$ret$0;
    }
    var start_0 = offset - 30 | 0;
    var end = offset + 30 | 0;
    var prefix = start_0 <= 0 ? '' : '.....';
    var suffix = end >= charSequenceLength(_this__u8e3s4) ? '' : '.....';
    var tmp$ret$1;
    // Inline function 'kotlin.text.substring' call
    var tmp1_substring = coerceAtLeast(start_0, 0);
    var tmp2_substring = coerceAtMost(end, charSequenceLength(_this__u8e3s4));
    tmp$ret$1 = toString(charSequenceSubSequence(_this__u8e3s4, tmp1_substring, tmp2_substring));
    return prefix + tmp$ret$1 + suffix;
  }
  function minify$default(_this__u8e3s4, offset, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      offset = -1;
    return minify(_this__u8e3s4, offset);
  }
  function unexpectedFpErrorMessage(value, key, output) {
    var tmp = 'Unexpected special floating-point value ' + toString(value) + ' with key ' + key + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification. ' + (get_specialFlowingValuesHint() + '\n');
    return tmp + ('Current output: ' + minify$default(output, 0, 1, null));
  }
  function get_JsonAlternativeNamesKey() {
    init_properties_JsonNamesMap_kt_1j2xk2();
    return JsonAlternativeNamesKey;
  }
  var JsonAlternativeNamesKey;
  function tryCoerceValue(_this__u8e3s4, elementDescriptor, peekNull, peekString, onEnumCoercing) {
    init_properties_JsonNamesMap_kt_1j2xk2();
    if (!elementDescriptor.aq() ? peekNull() : false)
      return true;
    if (equals(elementDescriptor.nq(), ENUM_getInstance())) {
      var tmp0_elvis_lhs = peekString();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return false;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var enumValue = tmp;
      var enumIndex = getJsonNameIndex(elementDescriptor, _this__u8e3s4, enumValue);
      Companion_getInstance_0();
      if (enumIndex === -3) {
        onEnumCoercing();
        return true;
      }
    }
    return false;
  }
  function getJsonNameIndex(_this__u8e3s4, json, name) {
    init_properties_JsonNamesMap_kt_1j2xk2();
    var index = _this__u8e3s4.hq(name);
    Companion_getInstance_0();
    if (!(index === -3))
      return index;
    if (!json.p15_1.p17_1)
      return index;
    var tmp = get_schemaCache(json);
    var tmp_0 = get_JsonAlternativeNamesKey();
    var alternativeNamesMap = tmp.d1a(_this__u8e3s4, tmp_0, buildAlternativeNamesMap$ref(_this__u8e3s4));
    var tmp0_elvis_lhs = alternativeNamesMap.x2(name);
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      Companion_getInstance_0();
      tmp_1 = -3;
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    return tmp_1;
  }
  function buildAlternativeNamesMap(_this__u8e3s4) {
    init_properties_JsonNamesMap_kt_1j2xk2();
    var builder = null;
    var inductionVariable = 0;
    var last = _this__u8e3s4.lq();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$1;
        // Inline function 'kotlin.collections.filterIsInstance' call
        var tmp0_filterIsInstance = _this__u8e3s4.fq(i);
        var tmp$ret$0;
        // Inline function 'kotlin.collections.filterIsInstanceTo' call
        var tmp0_filterIsInstanceTo = ArrayList_init_$Create$();
        var tmp0_iterator = tmp0_filterIsInstance.l();
        while (tmp0_iterator.m()) {
          var element = tmp0_iterator.n();
          if (element instanceof JsonNames) {
            tmp0_filterIsInstanceTo.g(element);
          }
        }
        tmp$ret$0 = tmp0_filterIsInstanceTo;
        tmp$ret$1 = tmp$ret$0;
        var tmp1_safe_receiver = singleOrNull(tmp$ret$1);
        var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.e1a_1;
        if (tmp2_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.collections.forEach' call
          var tmp0_iterator_0 = arrayIterator(tmp2_safe_receiver);
          while (tmp0_iterator_0.m()) {
            var element_0 = tmp0_iterator_0.n();
            // Inline function 'kotlinx.serialization.json.internal.buildAlternativeNamesMap.<anonymous>' call
            if (builder == null)
              builder = createMapForCache(_this__u8e3s4.lq());
            buildAlternativeNamesMap$putOrThrow(ensureNotNull(builder), _this__u8e3s4, element_0, i);
          }
        }
      }
       while (inductionVariable < last);
    var tmp3_elvis_lhs = builder;
    return tmp3_elvis_lhs == null ? emptyMap() : tmp3_elvis_lhs;
  }
  function buildAlternativeNamesMap$putOrThrow(_this__u8e3s4, $this_buildAlternativeNamesMap, name, index) {
    var tmp$ret$1;
    // Inline function 'kotlin.collections.contains' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.containsKey' call
    tmp$ret$0 = (isInterface(_this__u8e3s4, Map) ? _this__u8e3s4 : THROW_CCE()).r2(name);
    tmp$ret$1 = tmp$ret$0;
    if (tmp$ret$1) {
      throw new JsonException("The suggested name '" + name + "' for property " + $this_buildAlternativeNamesMap.iq(index) + ' is already one of the names for property ' + ($this_buildAlternativeNamesMap.iq(getValue(_this__u8e3s4, name)) + ' in ' + $this_buildAlternativeNamesMap));
    }
    // Inline function 'kotlin.collections.set' call
    _this__u8e3s4.s(name, index);
  }
  function buildAlternativeNamesMap$ref($boundThis) {
    var l = function () {
      return buildAlternativeNamesMap($boundThis);
    };
    l.callableName = 'buildAlternativeNamesMap';
    return l;
  }
  var properties_initialized_JsonNamesMap_kt_ljpf42;
  function init_properties_JsonNamesMap_kt_1j2xk2() {
    if (properties_initialized_JsonNamesMap_kt_ljpf42) {
    } else {
      properties_initialized_JsonNamesMap_kt_ljpf42 = true;
      JsonAlternativeNamesKey = new Key();
    }
  }
  function readObject($this) {
    var tmp$ret$2;
    // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObjectImpl' call
    var lastToken = $this.f1a_1.i1a(get_TC_BEGIN_OBJ());
    if ($this.f1a_1.j1a() === get_TC_COMMA()) {
      $this.f1a_1.b1a('Unexpected leading comma', 0, 2, null);
    }
    var tmp$ret$0;
    // Inline function 'kotlin.collections.linkedMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    var result = tmp$ret$0;
    while ($this.f1a_1.k1a()) {
      var key = $this.g1a_1 ? $this.f1a_1.m1a() : $this.f1a_1.l1a();
      $this.f1a_1.i1a(get_TC_COLON());
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObject.<anonymous>' call
      tmp$ret$1 = $this.n1a();
      var element = tmp$ret$1;
      // Inline function 'kotlin.collections.set' call
      result.s(key, element);
      lastToken = $this.f1a_1.o1a();
      if (!(lastToken === get_TC_COMMA()) ? !(lastToken === get_TC_END_OBJ()) : false) {
        $this.f1a_1.b1a('Expected end of the object or comma', 0, 2, null);
      }
    }
    if (lastToken === get_TC_BEGIN_OBJ()) {
      $this.f1a_1.i1a(get_TC_END_OBJ());
    } else if (lastToken === get_TC_COMMA()) {
      $this.f1a_1.b1a('Unexpected trailing comma', 0, 2, null);
    }
    tmp$ret$2 = new JsonObject(result);
    return tmp$ret$2;
  }
  function readObject_0(_this__u8e3s4, $this, $cont) {
    var tmp = new $readObjectCOROUTINE$0($this, _this__u8e3s4, $cont);
    tmp.w6_1 = Unit_getInstance();
    tmp.x6_1 = null;
    return tmp.b7();
  }
  function readArray($this) {
    var lastToken = $this.f1a_1.o1a();
    if ($this.f1a_1.j1a() === get_TC_COMMA()) {
      $this.f1a_1.b1a('Unexpected leading comma', 0, 2, null);
    }
    var tmp$ret$0;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    var result = tmp$ret$0;
    while ($this.f1a_1.k1a()) {
      var element = $this.n1a();
      result.g(element);
      lastToken = $this.f1a_1.o1a();
      if (!(lastToken === get_TC_COMMA())) {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var tmp0_require = $this.f1a_1;
        var tmp1_require = lastToken === get_TC_END_LIST();
        var tmp2_require = tmp0_require.n16_1;
        if (!tmp1_require) {
          var tmp$ret$1;
          // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readArray.<anonymous>' call
          tmp$ret$1 = 'Expected end of the array or comma';
          tmp0_require.c1b(tmp$ret$1, tmp2_require);
        }
      }
    }
    if (lastToken === get_TC_BEGIN_LIST()) {
      $this.f1a_1.i1a(get_TC_END_LIST());
    } else if (lastToken === get_TC_COMMA()) {
      $this.f1a_1.b1a('Unexpected trailing comma', 0, 2, null);
    }
    return new JsonArray(result);
  }
  function readValue($this, isString) {
    var tmp;
    if ($this.g1a_1 ? true : !isString) {
      tmp = $this.f1a_1.m1a();
    } else {
      tmp = $this.f1a_1.l1a();
    }
    var string = tmp;
    if (!isString ? string === get_NULL() : false)
      return JsonNull_getInstance();
    return new JsonLiteral(string, isString);
  }
  function readDeepRecursive($this) {
    return invoke(new DeepRecursiveFunction(JsonTreeReader$readDeepRecursive$slambda_0($this, null)), Unit_getInstance());
  }
  function JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation) {
    this.l1b_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  JsonTreeReader$readDeepRecursive$slambda.prototype.q1b = function ($this$$receiver, it, $cont) {
    var tmp = this.r1b($this$$receiver, it, $cont);
    tmp.w6_1 = Unit_getInstance();
    tmp.x6_1 = null;
    return tmp.b7();
  };
  JsonTreeReader$readDeepRecursive$slambda.prototype.u9 = function (p1, p2, $cont) {
    var tmp = p1 instanceof DeepRecursiveScope ? p1 : THROW_CCE();
    return this.q1b(tmp, p2 instanceof Unit ? p2 : THROW_CCE(), $cont);
  };
  JsonTreeReader$readDeepRecursive$slambda.prototype.b7 = function () {
    var suspendResult = this.w6_1;
    $sm: do
      try {
        var tmp = this.u6_1;
        switch (tmp) {
          case 0:
            this.v6_1 = 3;
            this.o1b_1 = this.l1b_1.f1a_1.j1a();
            if (this.o1b_1 === get_TC_STRING()) {
              this.p1b_1 = readValue(this.l1b_1, true);
              this.u6_1 = 2;
              continue $sm;
            } else {
              if (this.o1b_1 === get_TC_OTHER()) {
                this.p1b_1 = readValue(this.l1b_1, false);
                this.u6_1 = 2;
                continue $sm;
              } else {
                if (this.o1b_1 === get_TC_BEGIN_OBJ()) {
                  this.u6_1 = 1;
                  suspendResult = readObject_0(this.m1b_1, this.l1b_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (this.o1b_1 === get_TC_BEGIN_LIST()) {
                    this.p1b_1 = readArray(this.l1b_1);
                    this.u6_1 = 2;
                    continue $sm;
                  } else {
                    var tmp_0 = this;
                    this.l1b_1.f1a_1.b1a("Can't begin reading element, unexpected token", 0, 2, null);
                  }
                }
              }
            }

            break;
          case 1:
            this.p1b_1 = suspendResult;
            this.u6_1 = 2;
            continue $sm;
          case 2:
            return this.p1b_1;
          case 3:
            throw this.x6_1;
        }
      } catch ($p) {
        if (this.v6_1 === 3) {
          throw $p;
        } else {
          this.u6_1 = this.v6_1;
          this.x6_1 = $p;
        }
      }
     while (true);
  };
  JsonTreeReader$readDeepRecursive$slambda.prototype.r1b = function ($this$$receiver, it, completion) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this.l1b_1, completion);
    i.m1b_1 = $this$$receiver;
    i.n1b_1 = it;
    return i;
  };
  JsonTreeReader$readDeepRecursive$slambda.$metadata$ = classMeta('JsonTreeReader$readDeepRecursive$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function JsonTreeReader$readDeepRecursive$slambda_0(this$0, resultContinuation) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation);
    var l = function ($this$$receiver, it, $cont) {
      return i.q1b($this$$receiver, it, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function $readObjectCOROUTINE$0(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.x1a_1 = _this__u8e3s4;
    this.y1a_1 = _this__u8e3s4_0;
  }
  $readObjectCOROUTINE$0.prototype.b7 = function () {
    var suspendResult = this.w6_1;
    $sm: do
      try {
        var tmp = this.u6_1;
        switch (tmp) {
          case 0:
            this.v6_1 = 4;
            this.z1a_1 = this.x1a_1.f1a_1.i1a(get_TC_BEGIN_OBJ());
            if (this.x1a_1.f1a_1.j1a() === get_TC_COMMA()) {
              this.x1a_1.f1a_1.b1a('Unexpected leading comma', 0, 2, null);
            }

            var tmp_0 = this;
            tmp_0.a1b_1 = LinkedHashMap_init_$Create$();
            this.u6_1 = 1;
            continue $sm;
          case 1:
            if (!this.x1a_1.f1a_1.k1a()) {
              this.u6_1 = 3;
              continue $sm;
            }

            this.b1b_1 = this.x1a_1.g1a_1 ? this.x1a_1.f1a_1.m1a() : this.x1a_1.f1a_1.l1a();
            this.x1a_1.f1a_1.i1a(get_TC_COLON());
            ;
            this.u6_1 = 2;
            suspendResult = this.y1a_1.m9(Unit_getInstance(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var element = suspendResult;
            this.a1b_1.s(this.b1b_1, element);
            ;
            this.z1a_1 = this.x1a_1.f1a_1.o1a();
            if (!(this.z1a_1 === get_TC_COMMA()) ? !(this.z1a_1 === get_TC_END_OBJ()) : false) {
              this.x1a_1.f1a_1.b1a('Expected end of the object or comma', 0, 2, null);
            }

            this.u6_1 = 1;
            continue $sm;
          case 3:
            if (this.z1a_1 === get_TC_BEGIN_OBJ()) {
              this.x1a_1.f1a_1.i1a(get_TC_END_OBJ());
            } else if (this.z1a_1 === get_TC_COMMA()) {
              this.x1a_1.f1a_1.b1a('Unexpected trailing comma', 0, 2, null);
            }

            return new JsonObject(this.a1b_1);
          case 4:
            throw this.x6_1;
        }
      } catch ($p) {
        if (this.v6_1 === 4) {
          throw $p;
        } else {
          this.u6_1 = this.v6_1;
          this.x6_1 = $p;
        }
      }
     while (true);
  };
  $readObjectCOROUTINE$0.$metadata$ = classMeta('$readObjectCOROUTINE$0', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function JsonTreeReader(configuration, lexer) {
    this.f1a_1 = lexer;
    this.g1a_1 = configuration.g17_1;
    this.h1a_1 = 0;
  }
  JsonTreeReader.prototype.n1a = function () {
    var token = this.f1a_1.j1a();
    var tmp;
    if (token === get_TC_STRING()) {
      tmp = readValue(this, true);
    } else if (token === get_TC_OTHER()) {
      tmp = readValue(this, false);
    } else if (token === get_TC_BEGIN_OBJ()) {
      var tmp_0;
      var tmp0_this = this;
      tmp0_this.h1a_1 = tmp0_this.h1a_1 + 1 | 0;
      if (tmp0_this.h1a_1 === 200) {
        tmp_0 = readDeepRecursive(this);
      } else {
        tmp_0 = readObject(this);
      }
      var result = tmp_0;
      var tmp1_this = this;
      tmp1_this.h1a_1 = tmp1_this.h1a_1 - 1 | 0;
      tmp = result;
    } else if (token === get_TC_BEGIN_LIST()) {
      tmp = readArray(this);
    } else {
      var tmp_1 = 'Cannot begin reading element, unexpected token: ' + token;
      this.f1a_1.b1a(tmp_1, 0, 2, null);
    }
    return tmp;
  };
  JsonTreeReader.$metadata$ = classMeta('JsonTreeReader');
  function encodePolymorphically(_this__u8e3s4, serializer, value, ifPolymorphic) {
    var tmp;
    if (!(serializer instanceof AbstractPolymorphicSerializer)) {
      tmp = true;
    } else {
      tmp = _this__u8e3s4.s17().p15_1.m17_1;
    }
    if (tmp) {
      serializer.cp(_this__u8e3s4, value);
      return Unit_getInstance();
    }
    var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
    var baseClassDiscriminator = classDiscriminator(serializer.bp(), _this__u8e3s4.s17());
    var actualSerializer = findPolymorphicSerializer(casted, _this__u8e3s4, isObject(value) ? value : THROW_CCE());
    validateIfSealed$accessor$1ad0flx(casted, actualSerializer, baseClassDiscriminator);
    checkKind(actualSerializer.bp().nq());
    ifPolymorphic(baseClassDiscriminator);
    actualSerializer.cp(_this__u8e3s4, value);
  }
  function decodeSerializableValuePolymorphic(_this__u8e3s4, deserializer) {
    var tmp;
    if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
      tmp = true;
    } else {
      tmp = _this__u8e3s4.s17().p15_1.m17_1;
    }
    if (tmp) {
      return deserializer.dp(_this__u8e3s4);
    }
    var tmp$ret$0;
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var tmp0_cast = _this__u8e3s4.t17();
    var tmp1_cast = deserializer.bp();
    if (!(tmp0_cast instanceof JsonObject)) {
      throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + tmp1_cast.eq() + ', but had ' + getKClassFromExpression(tmp0_cast));
    }
    tmp$ret$0 = tmp0_cast;
    var jsonTree = tmp$ret$0;
    var discriminator = classDiscriminator(deserializer.bp(), _this__u8e3s4.s17());
    var tmp0_safe_receiver = jsonTree.y17(discriminator);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
    var type = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.b18();
    var tmp2_elvis_lhs = deserializer.rp(_this__u8e3s4, type);
    var tmp_0;
    if (tmp2_elvis_lhs == null) {
      throwSerializerNotFound(type, jsonTree);
    } else {
      tmp_0 = tmp2_elvis_lhs;
    }
    var actualSerializer = tmp_0;
    var tmp_1 = _this__u8e3s4.s17();
    return readPolymorphicJson(tmp_1, discriminator, jsonTree, isInterface(actualSerializer, DeserializationStrategy) ? actualSerializer : THROW_CCE());
  }
  function classDiscriminator(_this__u8e3s4, json) {
    var tmp0_iterator = _this__u8e3s4.kq().l();
    while (tmp0_iterator.m()) {
      var annotation = tmp0_iterator.n();
      if (annotation instanceof JsonClassDiscriminator)
        return annotation.s1b_1;
    }
    return json.p15_1.n17_1;
  }
  function validateIfSealed(serializer, actualSerializer, classDiscriminator) {
    if (!(serializer instanceof SealedClassSerializer))
      return Unit_getInstance();
    if (jsonCachedSerialNames(actualSerializer.bp()).k1(classDiscriminator)) {
      var baseName = serializer.bp().eq();
      var actualName = actualSerializer.bp().eq();
      // Inline function 'kotlin.error' call
      var tmp0_error = "Sealed class '" + actualName + "' cannot be serialized as base class '" + baseName + "' because" + (" it has property name that conflicts with JSON class discriminator '" + classDiscriminator + "'. ") + 'You can either change class discriminator in JsonConfiguration, ' + 'rename property with @SerialName annotation or fall back to array polymorphism';
      throw IllegalStateException_init_$Create$(toString(tmp0_error));
    }
  }
  function checkKind(kind) {
    if (kind instanceof ENUM) {
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$("Enums cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead");
    }
    if (kind instanceof PrimitiveKind) {
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$("Primitives cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead");
    }
    if (kind instanceof PolymorphicKind) {
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$('Actual serializer for polymorphic cannot be polymorphic itself');
    }
  }
  function throwSerializerNotFound(type, jsonTree) {
    var suffix = type == null ? "missing class discriminator ('null')" : "class discriminator '" + type + "'";
    throw JsonDecodingException_0(-1, 'Polymorphic serializer was not found for ' + suffix, jsonTree.toString());
  }
  function validateIfSealed$accessor$1ad0flx(serializer, actualSerializer, classDiscriminator) {
    return validateIfSealed(serializer, actualSerializer, classDiscriminator);
  }
  function checkKind_0($this, descriptor, actualClass) {
    var kind = descriptor.nq();
    var tmp;
    if (kind instanceof PolymorphicKind) {
      tmp = true;
    } else {
      tmp = equals(kind, CONTEXTUAL_getInstance());
    }
    if (tmp) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.kf() + " can't be registered as a subclass for polymorphic serialization " + ('because its kind ' + kind + ' is not concrete. To work with multiple hierarchies, register it as a base class.'));
    }
    if ($this.t1b_1)
      return Unit_getInstance();
    var tmp_0;
    var tmp_1;
    if (equals(kind, LIST_getInstance()) ? true : equals(kind, MAP_getInstance())) {
      tmp_1 = true;
    } else {
      tmp_1 = kind instanceof PrimitiveKind;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = kind instanceof ENUM;
    }
    if (tmp_0) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.kf() + ' of kind ' + kind + ' cannot be serialized polymorphically with class discriminator.');
    }
  }
  function checkDiscriminatorCollisions($this, descriptor, actualClass) {
    var inductionVariable = 0;
    var last = descriptor.lq();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var name = descriptor.iq(i);
        if (name === $this.u1b_1) {
          throw IllegalArgumentException_init_$Create$('Polymorphic serializer for ' + actualClass + " has property '" + name + "' that conflicts " + 'with JSON class discriminator. You can either change class discriminator in JsonConfiguration, ' + 'rename property with @SerialName annotation ' + 'or fall back to array polymorphism');
        }
      }
       while (inductionVariable < last);
  }
  function PolymorphismValidator(useArrayPolymorphism, discriminator) {
    this.t1b_1 = useArrayPolymorphism;
    this.u1b_1 = discriminator;
  }
  PolymorphismValidator.prototype.h15 = function (kClass, provider) {
  };
  PolymorphismValidator.prototype.k15 = function (baseClass, actualClass, actualSerializer) {
    var descriptor = actualSerializer.bp();
    checkKind_0(this, descriptor, actualClass);
    if (!this.t1b_1) {
      checkDiscriminatorCollisions(this, descriptor, actualClass);
    }
  };
  PolymorphismValidator.prototype.l15 = function (baseClass, defaultSerializerProvider) {
  };
  PolymorphismValidator.$metadata$ = classMeta('PolymorphismValidator', [SerializersModuleCollector]);
  function Key() {
  }
  Key.$metadata$ = classMeta('Key');
  function DescriptorSchemaCache() {
    this.c1a_1 = createMapForCache(1);
  }
  DescriptorSchemaCache.prototype.v1b = function (descriptor, key, value) {
    // Inline function 'kotlin.collections.set' call
    var tmp$ret$1;
    // Inline function 'kotlin.collections.getOrPut' call
    var tmp0_getOrPut = this.c1a_1;
    var value_0 = tmp0_getOrPut.x2(descriptor);
    var tmp;
    if (value_0 == null) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.json.internal.DescriptorSchemaCache.set.<anonymous>' call
      tmp$ret$0 = createMapForCache(1);
      var answer = tmp$ret$0;
      tmp0_getOrPut.s(descriptor, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    tmp$ret$1 = tmp;
    var tmp1_set = tmp$ret$1;
    var tmp2_set = key instanceof Key ? key : THROW_CCE();
    var tmp3_set = isObject(value) ? value : THROW_CCE();
    tmp1_set.s(tmp2_set, tmp3_set);
  };
  DescriptorSchemaCache.prototype.d1a = function (descriptor, key, defaultValue) {
    var tmp0_safe_receiver = this.w1b(descriptor, key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return tmp0_safe_receiver;
    }
    var value = defaultValue();
    this.v1b(descriptor, key, value);
    return value;
  };
  DescriptorSchemaCache.prototype.w1b = function (descriptor, key) {
    var tmp0_safe_receiver = this.c1a_1.x2(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = tmp0_safe_receiver.x2(key instanceof Key ? key : THROW_CCE());
    }
    var tmp_0 = tmp;
    return isObject(tmp_0) ? tmp_0 : null;
  };
  DescriptorSchemaCache.$metadata$ = classMeta('DescriptorSchemaCache');
  function checkLeadingComma($this) {
    if ($this.i16_1.j1a() === get_TC_COMMA()) {
      $this.i16_1.b1a('Unexpected leading comma', 0, 2, null);
    }
  }
  function decodeMapIndex($this) {
    var hasComma = false;
    var decodingKey = !(($this.k16_1 % 2 | 0) === 0);
    if (decodingKey) {
      if (!($this.k16_1 === -1)) {
        hasComma = $this.i16_1.y1b();
      }
    } else {
      $this.i16_1.x1b(get_COLON());
    }
    var tmp;
    if ($this.i16_1.k1a()) {
      if (decodingKey) {
        if ($this.k16_1 === -1) {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var tmp0_require = $this.i16_1;
          var tmp1_require = !hasComma;
          var tmp2_require = tmp0_require.n16_1;
          if (!tmp1_require) {
            var tmp$ret$0;
            // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeMapIndex.<anonymous>' call
            tmp$ret$0 = 'Unexpected trailing comma';
            tmp0_require.c1b(tmp$ret$0, tmp2_require);
          }
        } else {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var tmp3_require = $this.i16_1;
          var tmp4_require = hasComma;
          var tmp5_require = tmp3_require.n16_1;
          if (!tmp4_require) {
            var tmp$ret$1;
            // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeMapIndex.<anonymous>' call
            tmp$ret$1 = 'Expected comma after the key-value pair';
            tmp3_require.c1b(tmp$ret$1, tmp5_require);
          }
        }
      }
      var tmp0_this = $this;
      tmp0_this.k16_1 = tmp0_this.k16_1 + 1 | 0;
      tmp = tmp0_this.k16_1;
    } else {
      if (hasComma) {
        $this.i16_1.b1a("Expected '}', but had ',' instead", 0, 2, null);
      }
      Companion_getInstance_0();
      tmp = -1;
    }
    return tmp;
  }
  function coerceInputValue($this, descriptor, index) {
    var tmp$ret$1;
    $l$block_1: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var tmp0_tryCoerceValue = $this.g16_1;
      var tmp1_tryCoerceValue = descriptor.gq(index);
      var tmp;
      if (!tmp1_tryCoerceValue.aq()) {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
        tmp$ret$0 = !$this.i16_1.z1b();
        tmp = tmp$ret$0;
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_1;
      }
      if (equals(tmp1_tryCoerceValue.nq(), ENUM_getInstance())) {
        var tmp$ret$2;
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
        tmp$ret$2 = $this.i16_1.a1c($this.l16_1.g17_1);
        var tmp0_elvis_lhs = tmp$ret$2;
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$1 = false;
          break $l$block_1;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var enumValue = tmp_0;
        var enumIndex = getJsonNameIndex(tmp1_tryCoerceValue, tmp0_tryCoerceValue, enumValue);
        Companion_getInstance_0();
        if (enumIndex === -3) {
          // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
          $this.i16_1.l1a();
          tmp$ret$1 = true;
          break $l$block_1;
        }
      }
      tmp$ret$1 = false;
    }
    return tmp$ret$1;
  }
  function decodeObjectIndex($this, descriptor) {
    var hasComma = $this.i16_1.y1b();
    while ($this.i16_1.k1a()) {
      hasComma = false;
      var key = decodeStringKey($this);
      $this.i16_1.x1b(get_COLON());
      var index = getJsonNameIndex(descriptor, $this.g16_1, key);
      var tmp;
      Companion_getInstance_0();
      if (!(index === -3)) {
        var tmp_0;
        if ($this.l16_1.l17_1 ? coerceInputValue($this, descriptor, index) : false) {
          hasComma = $this.i16_1.y1b();
          tmp_0 = false;
        } else {
          var tmp0_safe_receiver = $this.m16_1;
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.ox(index);
          }
          return index;
        }
        tmp = tmp_0;
      } else {
        tmp = true;
      }
      var isUnknown = tmp;
      if (isUnknown) {
        hasComma = handleUnknown($this, key);
      }
    }
    if (hasComma) {
      $this.i16_1.b1a('Unexpected trailing comma', 0, 2, null);
    }
    var tmp1_safe_receiver = $this.m16_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.px();
    var tmp_1;
    if (tmp2_elvis_lhs == null) {
      Companion_getInstance_0();
      tmp_1 = -1;
    } else {
      tmp_1 = tmp2_elvis_lhs;
    }
    return tmp_1;
  }
  function handleUnknown($this, key) {
    if ($this.l16_1.f17_1) {
      $this.i16_1.c1c($this.l16_1.g17_1);
    } else {
      $this.i16_1.b1c(key);
    }
    return $this.i16_1.y1b();
  }
  function decodeListIndex($this) {
    var hasComma = $this.i16_1.y1b();
    var tmp;
    if ($this.i16_1.k1a()) {
      if (!($this.k16_1 === -1) ? !hasComma : false) {
        $this.i16_1.b1a('Expected end of the array or comma', 0, 2, null);
      }
      var tmp0_this = $this;
      tmp0_this.k16_1 = tmp0_this.k16_1 + 1 | 0;
      tmp = tmp0_this.k16_1;
    } else {
      if (hasComma) {
        $this.i16_1.b1a('Unexpected trailing comma', 0, 2, null);
      }
      Companion_getInstance_0();
      tmp = -1;
    }
    return tmp;
  }
  function decodeStringKey($this) {
    var tmp;
    if ($this.l16_1.g17_1) {
      tmp = $this.i16_1.e1c();
    } else {
      tmp = $this.i16_1.d1c();
    }
    return tmp;
  }
  function StreamingJsonDecoder(json, mode, lexer, descriptor) {
    AbstractDecoder.call(this);
    this.g16_1 = json;
    this.h16_1 = mode;
    this.i16_1 = lexer;
    this.j16_1 = this.g16_1.vp();
    this.k16_1 = -1;
    this.l16_1 = this.g16_1.p15_1;
    this.m16_1 = this.l16_1.j17_1 ? null : new JsonElementMarker(descriptor);
  }
  StreamingJsonDecoder.prototype.s17 = function () {
    return this.g16_1;
  };
  StreamingJsonDecoder.prototype.f1c = function () {
    return this.i16_1;
  };
  StreamingJsonDecoder.prototype.vp = function () {
    return this.j16_1;
  };
  StreamingJsonDecoder.prototype.t17 = function () {
    return (new JsonTreeReader(this.g16_1.p15_1, this.i16_1)).n1a();
  };
  StreamingJsonDecoder.prototype.wr = function (deserializer) {
    return decodeSerializableValuePolymorphic(this, deserializer);
  };
  StreamingJsonDecoder.prototype.xr = function (descriptor) {
    var newMode = switchMode(this.g16_1, descriptor);
    this.i16_1.x1b(newMode.i1c_1);
    checkLeadingComma(this);
    var tmp0_subject = newMode;
    var tmp0 = tmp0_subject.q1_1;
    var tmp;
    switch (tmp0) {
      case 1:
      case 2:
      case 3:
        tmp = new StreamingJsonDecoder(this.g16_1, newMode, this.i16_1, descriptor);
        break;
      default:
        var tmp_0;
        if (this.h16_1.equals(newMode) ? this.g16_1.p15_1.j17_1 : false) {
          tmp_0 = this;
        } else {
          tmp_0 = new StreamingJsonDecoder(this.g16_1, newMode, this.i16_1, descriptor);
        }

        tmp = tmp_0;
        break;
    }
    return tmp;
  };
  StreamingJsonDecoder.prototype.yr = function (descriptor) {
    this.i16_1.x1b(this.h16_1.j1c_1);
  };
  StreamingJsonDecoder.prototype.jr = function () {
    var tmp;
    var tmp0_safe_receiver = this.m16_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.a1a_1;
    if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
      tmp = this.i16_1.z1b();
    } else {
      tmp = false;
    }
    return tmp;
  };
  StreamingJsonDecoder.prototype.kr = function () {
    return null;
  };
  StreamingJsonDecoder.prototype.ms = function (descriptor) {
    var tmp0_subject = this.h16_1;
    var tmp0 = tmp0_subject.q1_1;
    switch (tmp0) {
      case 0:
        return decodeObjectIndex(this, descriptor);
      case 2:
        return decodeMapIndex(this);
      default:
        return decodeListIndex(this);
    }
  };
  StreamingJsonDecoder.prototype.lr = function () {
    var tmp;
    if (this.l16_1.g17_1) {
      tmp = this.i16_1.l1c();
    } else {
      tmp = this.i16_1.k1c();
    }
    return tmp;
  };
  StreamingJsonDecoder.prototype.mr = function () {
    var value = this.i16_1.m1c();
    if (!value.equals(toLong_0(value.oa()))) {
      var tmp = "Failed to parse byte for input '" + toString(value) + "'";
      this.i16_1.b1a(tmp, 0, 2, null);
    }
    return value.oa();
  };
  StreamingJsonDecoder.prototype.nr = function () {
    var value = this.i16_1.m1c();
    if (!value.equals(toLong_0(value.fj()))) {
      var tmp = "Failed to parse short for input '" + toString(value) + "'";
      this.i16_1.b1a(tmp, 0, 2, null);
    }
    return value.fj();
  };
  StreamingJsonDecoder.prototype.or = function () {
    var value = this.i16_1.m1c();
    if (!value.equals(toLong_0(value.bb()))) {
      var tmp = "Failed to parse int for input '" + toString(value) + "'";
      this.i16_1.b1a(tmp, 0, 2, null);
    }
    return value.bb();
  };
  StreamingJsonDecoder.prototype.pr = function () {
    return this.i16_1.m1c();
  };
  StreamingJsonDecoder.prototype.qr = function () {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.i16_1;
      var input = tmp0_parseString.m1a();
      try {
        var tmp$ret$3;
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeFloat.<anonymous>' call
        var tmp$ret$2;
        // Inline function 'kotlin.text.toFloat' call
        var tmp$ret$1;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp0_unsafeCast = toDouble(input);
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = tmp0_unsafeCast;
        tmp$ret$1 = tmp$ret$0;
        tmp$ret$2 = tmp$ret$1;
        tmp$ret$3 = tmp$ret$2;
        tmp$ret$4 = tmp$ret$3;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var tmp = "Failed to parse type 'float' for input '" + input + "'";
          tmp0_parseString.b1a(tmp, 0, 2, null);
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$4;
    var specialFp = this.g16_1.p15_1.o17_1;
    if (specialFp ? true : isFinite(result))
      return result;
    throwInvalidFloatingPointDecoded(this.i16_1, result);
  };
  StreamingJsonDecoder.prototype.rr = function () {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.i16_1;
      var input = tmp0_parseString.m1a();
      try {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeDouble.<anonymous>' call
        tmp$ret$0 = toDouble(input);
        tmp$ret$1 = tmp$ret$0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var tmp = "Failed to parse type 'double' for input '" + input + "'";
          tmp0_parseString.b1a(tmp, 0, 2, null);
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.g16_1.p15_1.o17_1;
    if (specialFp ? true : isFinite_0(result))
      return result;
    throwInvalidFloatingPointDecoded(this.i16_1, result);
  };
  StreamingJsonDecoder.prototype.sr = function () {
    var string = this.i16_1.m1a();
    if (!(string.length === 1)) {
      var tmp = "Expected single char, but got '" + string + "'";
      this.i16_1.b1a(tmp, 0, 2, null);
    }
    return charSequenceGet(string, 0);
  };
  StreamingJsonDecoder.prototype.tr = function () {
    var tmp;
    if (this.l16_1.g17_1) {
      tmp = this.i16_1.e1c();
    } else {
      tmp = this.i16_1.l1a();
    }
    return tmp;
  };
  StreamingJsonDecoder.prototype.ur = function (inlineDescriptor) {
    return get_isUnsignedNumber(inlineDescriptor) ? new JsonDecoderForUnsignedTypes(this.i16_1, this.g16_1) : AbstractDecoder.prototype.ur.call(this, inlineDescriptor);
  };
  StreamingJsonDecoder.$metadata$ = classMeta('StreamingJsonDecoder', [JsonDecoder], undefined, undefined, undefined, AbstractDecoder.prototype);
  function parseString(_this__u8e3s4, expectedType, block) {
    var input = _this__u8e3s4.m1a();
    try {
      return block(input);
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var tmp = "Failed to parse type '" + expectedType + "' for input '" + input + "'";
        _this__u8e3s4.b1a(tmp, 0, 2, null);
      } else {
        throw $p;
      }
    }
  }
  function JsonDecoderForUnsignedTypes(lexer, json) {
    AbstractDecoder.call(this);
    this.n1c_1 = lexer;
    this.o1c_1 = json.vp();
  }
  JsonDecoderForUnsignedTypes.prototype.vp = function () {
    return this.o1c_1;
  };
  JsonDecoderForUnsignedTypes.prototype.ms = function (descriptor) {
    // Inline function 'kotlin.error' call
    throw IllegalStateException_init_$Create$('unsupported');
  };
  JsonDecoderForUnsignedTypes.prototype.or = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.n1c_1;
      var input = tmp0_parseString.m1a();
      try {
        var tmp$ret$1;
        // Inline function 'kotlinx.serialization.json.internal.JsonDecoderForUnsignedTypes.decodeInt.<anonymous>' call
        var tmp$ret$0;
        // Inline function 'kotlin.UInt.toInt' call
        var tmp0_toInt = toUInt(input);
        tmp$ret$0 = _UInt___get_data__impl__f0vqqw(tmp0_toInt);
        tmp$ret$1 = tmp$ret$0;
        tmp$ret$2 = tmp$ret$1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var tmp = "Failed to parse type 'UInt' for input '" + input + "'";
          tmp0_parseString.b1a(tmp, 0, 2, null);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  JsonDecoderForUnsignedTypes.prototype.pr = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.n1c_1;
      var input = tmp0_parseString.m1a();
      try {
        var tmp$ret$1;
        // Inline function 'kotlinx.serialization.json.internal.JsonDecoderForUnsignedTypes.decodeLong.<anonymous>' call
        var tmp$ret$0;
        // Inline function 'kotlin.ULong.toLong' call
        var tmp0_toLong = toULong(input);
        tmp$ret$0 = _ULong___get_data__impl__fggpzb(tmp0_toLong);
        tmp$ret$1 = tmp$ret$0;
        tmp$ret$2 = tmp$ret$1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var tmp = "Failed to parse type 'ULong' for input '" + input + "'";
          tmp0_parseString.b1a(tmp, 0, 2, null);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  JsonDecoderForUnsignedTypes.prototype.mr = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.n1c_1;
      var input = tmp0_parseString.m1a();
      try {
        var tmp$ret$1;
        // Inline function 'kotlinx.serialization.json.internal.JsonDecoderForUnsignedTypes.decodeByte.<anonymous>' call
        var tmp$ret$0;
        // Inline function 'kotlin.UByte.toByte' call
        var tmp0_toByte = toUByte(input);
        tmp$ret$0 = _UByte___get_data__impl__jof9qr(tmp0_toByte);
        tmp$ret$1 = tmp$ret$0;
        tmp$ret$2 = tmp$ret$1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var tmp = "Failed to parse type 'UByte' for input '" + input + "'";
          tmp0_parseString.b1a(tmp, 0, 2, null);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  JsonDecoderForUnsignedTypes.prototype.nr = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.n1c_1;
      var input = tmp0_parseString.m1a();
      try {
        var tmp$ret$1;
        // Inline function 'kotlinx.serialization.json.internal.JsonDecoderForUnsignedTypes.decodeShort.<anonymous>' call
        var tmp$ret$0;
        // Inline function 'kotlin.UShort.toShort' call
        var tmp0_toShort = toUShort(input);
        tmp$ret$0 = _UShort___get_data__impl__g0245(tmp0_toShort);
        tmp$ret$1 = tmp$ret$0;
        tmp$ret$2 = tmp$ret$1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var tmp = "Failed to parse type 'UShort' for input '" + input + "'";
          tmp0_parseString.b1a(tmp, 0, 2, null);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  JsonDecoderForUnsignedTypes.$metadata$ = classMeta('JsonDecoderForUnsignedTypes', undefined, undefined, undefined, undefined, AbstractDecoder.prototype);
  function get_unsignedNumberDescriptors() {
    init_properties_StreamingJsonEncoder_kt_qkpchk();
    return unsignedNumberDescriptors;
  }
  var unsignedNumberDescriptors;
  function StreamingJsonEncoder_init_$Init$(output, json, mode, modeReuseCache, $this) {
    StreamingJsonEncoder.call($this, Composer_0(output, json), json, mode, modeReuseCache);
    return $this;
  }
  function StreamingJsonEncoder_init_$Create$(output, json, mode, modeReuseCache) {
    return StreamingJsonEncoder_init_$Init$(output, json, mode, modeReuseCache, Object.create(StreamingJsonEncoder.prototype));
  }
  function encodeTypeInfo($this, descriptor) {
    $this.w15_1.f19();
    $this.zs(ensureNotNull($this.d16_1));
    $this.w15_1.h19(get_COLON());
    $this.w15_1.g19();
    $this.zs(descriptor.eq());
  }
  function StreamingJsonEncoder(composer, json, mode, modeReuseCache) {
    AbstractEncoder.call(this);
    this.w15_1 = composer;
    this.x15_1 = json;
    this.y15_1 = mode;
    this.z15_1 = modeReuseCache;
    this.a16_1 = this.x15_1.vp();
    this.b16_1 = this.x15_1.p15_1;
    this.c16_1 = false;
    this.d16_1 = null;
    var i = this.y15_1.q1_1;
    if (!(this.z15_1 == null)) {
      if (!(this.z15_1[i] === null) ? true : !(this.z15_1[i] === this)) {
        this.z15_1[i] = this;
      }
    }
  }
  StreamingJsonEncoder.prototype.s17 = function () {
    return this.x15_1;
  };
  StreamingJsonEncoder.prototype.vp = function () {
    return this.a16_1;
  };
  StreamingJsonEncoder.prototype.qt = function (descriptor, index) {
    return this.b16_1.e17_1;
  };
  StreamingJsonEncoder.prototype.lt = function (serializer, value) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
      var tmp;
      if (!(serializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.s17().p15_1.m17_1;
      }
      if (tmp) {
        serializer.cp(this, value);
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      }
      var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
      var baseClassDiscriminator = classDiscriminator(serializer.bp(), this.s17());
      var actualSerializer = findPolymorphicSerializer(casted, this, isObject(value) ? value : THROW_CCE());
      validateIfSealed$accessor$1ad0flx(casted, actualSerializer, baseClassDiscriminator);
      checkKind(actualSerializer.bp().nq());
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.encodeSerializableValue.<anonymous>' call
      this.d16_1 = baseClassDiscriminator;
      actualSerializer.cp(this, value);
    }
  };
  StreamingJsonEncoder.prototype.xr = function (descriptor) {
    var newMode = switchMode(this.x15_1, descriptor);
    if (!equals(new Char(newMode.i1c_1), new Char(get_INVALID()))) {
      this.w15_1.h19(newMode.i1c_1);
      this.w15_1.d19();
    }
    if (!(this.d16_1 == null)) {
      encodeTypeInfo(this, descriptor);
      this.d16_1 = null;
    }
    if (this.y15_1.equals(newMode)) {
      return this;
    }
    var tmp0_safe_receiver = this.z15_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver[newMode.q1_1];
    return tmp1_elvis_lhs == null ? new StreamingJsonEncoder(this.w15_1, this.x15_1, newMode, this.z15_1) : tmp1_elvis_lhs;
  };
  StreamingJsonEncoder.prototype.yr = function (descriptor) {
    if (!equals(new Char(this.y15_1.j1c_1), new Char(get_INVALID()))) {
      this.w15_1.e19();
      this.w15_1.f19();
      this.w15_1.h19(this.y15_1.j1c_1);
    }
  };
  StreamingJsonEncoder.prototype.os = function (descriptor, index) {
    var tmp0_subject = this.y15_1;
    var tmp0 = tmp0_subject.q1_1;
    switch (tmp0) {
      case 1:
        if (!this.w15_1.c19_1) {
          this.w15_1.h19(get_COMMA());
        }

        this.w15_1.f19();
        ;
        break;
      case 2:
        if (!this.w15_1.c19_1) {
          var tmp = this;
          var tmp_0;
          if ((index % 2 | 0) === 0) {
            this.w15_1.h19(get_COMMA());
            this.w15_1.f19();
            tmp_0 = true;
          } else {
            this.w15_1.h19(get_COLON());
            this.w15_1.g19();
            tmp_0 = false;
          }
          tmp.c16_1 = tmp_0;
        } else {
          this.c16_1 = true;
          this.w15_1.f19();
        }

        break;
      case 3:
        if (index === 0)
          this.c16_1 = true;
        if (index === 1) {
          this.w15_1.h19(get_COMMA());
          this.w15_1.g19();
          this.c16_1 = false;
        }

        break;
      default:
        if (!this.w15_1.c19_1) {
          this.w15_1.h19(get_COMMA());
        }

        this.w15_1.f19();
        this.zs(descriptor.iq(index));
        this.w15_1.h19(get_COLON());
        this.w15_1.g19();
        ;
        break;
    }
    return true;
  };
  StreamingJsonEncoder.prototype.mt = function (descriptor, index, serializer, value) {
    if (!(value == null) ? true : this.b16_1.j17_1) {
      AbstractEncoder.prototype.mt.call(this, descriptor, index, serializer, value);
    }
  };
  StreamingJsonEncoder.prototype.at = function (inlineDescriptor) {
    return get_isUnsignedNumber(inlineDescriptor) ? new StreamingJsonEncoder(new ComposerForUnsignedNumbers(this.w15_1.b19_1), this.x15_1, this.y15_1, null) : AbstractEncoder.prototype.at.call(this, inlineDescriptor);
  };
  StreamingJsonEncoder.prototype.qs = function () {
    this.w15_1.i19(get_NULL());
  };
  StreamingJsonEncoder.prototype.rs = function (value) {
    if (this.c16_1) {
      this.zs(value.toString());
    } else {
      this.w15_1.q19(value);
    }
  };
  StreamingJsonEncoder.prototype.ss = function (value) {
    if (this.c16_1) {
      this.zs(value.toString());
    } else {
      this.w15_1.m19(value);
    }
  };
  StreamingJsonEncoder.prototype.ts = function (value) {
    if (this.c16_1) {
      this.zs(value.toString());
    } else {
      this.w15_1.n19(value);
    }
  };
  StreamingJsonEncoder.prototype.us = function (value) {
    if (this.c16_1) {
      this.zs(value.toString());
    } else {
      this.w15_1.o19(value);
    }
  };
  StreamingJsonEncoder.prototype.vs = function (value) {
    if (this.c16_1) {
      this.zs(value.toString());
    } else {
      this.w15_1.p19(value);
    }
  };
  StreamingJsonEncoder.prototype.ws = function (value) {
    if (this.c16_1) {
      this.zs(value.toString());
    } else {
      this.w15_1.k19(value);
    }
    if (!this.b16_1.o17_1 ? !isFinite(value) : false) {
      throw InvalidFloatingPointEncoded(value, this.w15_1.b19_1.toString());
    }
  };
  StreamingJsonEncoder.prototype.xs = function (value) {
    if (this.c16_1) {
      this.zs(value.toString());
    } else {
      this.w15_1.l19(value);
    }
    if (!this.b16_1.o17_1 ? !isFinite_0(value) : false) {
      throw InvalidFloatingPointEncoded(value, this.w15_1.b19_1.toString());
    }
  };
  StreamingJsonEncoder.prototype.ys = function (value) {
    this.zs(toString_0(value));
  };
  StreamingJsonEncoder.prototype.zs = function (value) {
    return this.w15_1.r19(value);
  };
  StreamingJsonEncoder.$metadata$ = classMeta('StreamingJsonEncoder', [JsonEncoder], undefined, undefined, undefined, AbstractEncoder.prototype);
  function get_isUnsignedNumber(_this__u8e3s4) {
    init_properties_StreamingJsonEncoder_kt_qkpchk();
    return _this__u8e3s4.mq() ? get_unsignedNumberDescriptors().k1(_this__u8e3s4) : false;
  }
  var properties_initialized_StreamingJsonEncoder_kt_6ifwwk;
  function init_properties_StreamingJsonEncoder_kt_qkpchk() {
    if (properties_initialized_StreamingJsonEncoder_kt_6ifwwk) {
    } else {
      properties_initialized_StreamingJsonEncoder_kt_6ifwwk = true;
      unsignedNumberDescriptors = setOf([serializer_1(Companion_getInstance_1()).bp(), serializer_0(Companion_getInstance()).bp(), serializer_2(Companion_getInstance_2()).bp(), serializer_3(Companion_getInstance_3()).bp()]);
    }
  }
  function get_ESCAPE_STRINGS() {
    init_properties_StringOps_kt_g67jhv();
    return ESCAPE_STRINGS;
  }
  var ESCAPE_STRINGS;
  var ESCAPE_MARKERS;
  function toHexChar(i) {
    init_properties_StringOps_kt_g67jhv();
    var d = i & 15;
    var tmp;
    if (d < 10) {
      var tmp$ret$0;
      // Inline function 'kotlin.code' call
      tmp$ret$0 = 48;
      tmp = numberToChar(d + tmp$ret$0 | 0);
    } else {
      var tmp_0 = d - 10 | 0;
      var tmp$ret$1;
      // Inline function 'kotlin.code' call
      tmp$ret$1 = 97;
      tmp = numberToChar(tmp_0 + tmp$ret$1 | 0);
    }
    return tmp;
  }
  function printQuoted(_this__u8e3s4, value) {
    init_properties_StringOps_kt_g67jhv();
    _this__u8e3s4.k8(get_STRING());
    var lastPos = 0;
    var inductionVariable = 0;
    var last = charSequenceLength(value) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        // Inline function 'kotlin.code' call
        var tmp0__get_code__88qj9g = charSequenceGet(value, i);
        tmp$ret$0 = Char__toInt_impl_vasixd(tmp0__get_code__88qj9g);
        var c = tmp$ret$0;
        if (c < get_ESCAPE_STRINGS().length ? !(get_ESCAPE_STRINGS()[c] == null) : false) {
          _this__u8e3s4.nh(value, lastPos, i);
          _this__u8e3s4.qh(get_ESCAPE_STRINGS()[c]);
          lastPos = i + 1 | 0;
        }
      }
       while (inductionVariable <= last);
    if (!(lastPos === 0)) {
      _this__u8e3s4.nh(value, lastPos, value.length);
    } else {
      _this__u8e3s4.qh(value);
    }
    _this__u8e3s4.k8(get_STRING());
  }
  function toBooleanStrictOrNull(_this__u8e3s4) {
    init_properties_StringOps_kt_g67jhv();
    return equals_0(_this__u8e3s4, 'true', true) ? true : equals_0(_this__u8e3s4, 'false', true) ? false : null;
  }
  var properties_initialized_StringOps_kt_wzaea7;
  function init_properties_StringOps_kt_g67jhv() {
    if (properties_initialized_StringOps_kt_wzaea7) {
    } else {
      properties_initialized_StringOps_kt_wzaea7 = true;
      var tmp$ret$7;
      // Inline function 'kotlin.apply' call
      var tmp$ret$0;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp$ret$0 = fillArrayVal(Array(93), null);
      var tmp0_apply = tmp$ret$0;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.json.internal.ESCAPE_STRINGS.<anonymous>' call
      var inductionVariable = 0;
      if (inductionVariable <= 31)
        do {
          var c = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var c1 = toHexChar(c >> 12);
          var c2 = toHexChar(c >> 8);
          var c3 = toHexChar(c >> 4);
          var c4 = toHexChar(c);
          tmp0_apply[c] = '\\u' + new Char(c1) + new Char(c2) + new Char(c3) + new Char(c4);
        }
         while (inductionVariable <= 31);
      var tmp$ret$1;
      // Inline function 'kotlin.code' call
      tmp$ret$1 = 34;
      tmp0_apply[tmp$ret$1] = '\\"';
      var tmp$ret$2;
      // Inline function 'kotlin.code' call
      tmp$ret$2 = 92;
      tmp0_apply[tmp$ret$2] = '\\\\';
      var tmp$ret$3;
      // Inline function 'kotlin.code' call
      tmp$ret$3 = 9;
      tmp0_apply[tmp$ret$3] = '\\t';
      var tmp$ret$4;
      // Inline function 'kotlin.code' call
      tmp$ret$4 = 8;
      tmp0_apply[tmp$ret$4] = '\\b';
      var tmp$ret$5;
      // Inline function 'kotlin.code' call
      tmp$ret$5 = 10;
      tmp0_apply[tmp$ret$5] = '\\n';
      var tmp$ret$6;
      // Inline function 'kotlin.code' call
      tmp$ret$6 = 13;
      tmp0_apply[tmp$ret$6] = '\\r';
      tmp0_apply[12] = '\\f';
      tmp$ret$7 = tmp0_apply;
      ESCAPE_STRINGS = tmp$ret$7;
      var tmp$ret$13;
      // Inline function 'kotlin.apply' call
      var tmp0_apply_0 = new Int8Array(93);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.json.internal.ESCAPE_MARKERS.<anonymous>' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 <= 31)
        do {
          var c_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          tmp0_apply_0[c_0] = 1;
        }
         while (inductionVariable_0 <= 31);
      var tmp$ret$0_0;
      // Inline function 'kotlin.code' call
      tmp$ret$0_0 = 34;
      var tmp = tmp$ret$0_0;
      var tmp$ret$1_0;
      // Inline function 'kotlin.code' call
      tmp$ret$1_0 = 34;
      tmp0_apply_0[tmp] = toByte(tmp$ret$1_0);
      var tmp$ret$2_0;
      // Inline function 'kotlin.code' call
      tmp$ret$2_0 = 92;
      var tmp_0 = tmp$ret$2_0;
      var tmp$ret$3_0;
      // Inline function 'kotlin.code' call
      tmp$ret$3_0 = 92;
      tmp0_apply_0[tmp_0] = toByte(tmp$ret$3_0);
      var tmp$ret$4_0;
      // Inline function 'kotlin.code' call
      tmp$ret$4_0 = 9;
      var tmp_1 = tmp$ret$4_0;
      var tmp$ret$5_0;
      // Inline function 'kotlin.code' call
      tmp$ret$5_0 = 116;
      tmp0_apply_0[tmp_1] = toByte(tmp$ret$5_0);
      var tmp$ret$6_0;
      // Inline function 'kotlin.code' call
      tmp$ret$6_0 = 8;
      var tmp_2 = tmp$ret$6_0;
      var tmp$ret$7_0;
      // Inline function 'kotlin.code' call
      tmp$ret$7_0 = 98;
      tmp0_apply_0[tmp_2] = toByte(tmp$ret$7_0);
      var tmp$ret$8;
      // Inline function 'kotlin.code' call
      tmp$ret$8 = 10;
      var tmp_3 = tmp$ret$8;
      var tmp$ret$9;
      // Inline function 'kotlin.code' call
      tmp$ret$9 = 110;
      tmp0_apply_0[tmp_3] = toByte(tmp$ret$9);
      var tmp$ret$10;
      // Inline function 'kotlin.code' call
      tmp$ret$10 = 13;
      var tmp_4 = tmp$ret$10;
      var tmp$ret$11;
      // Inline function 'kotlin.code' call
      tmp$ret$11 = 114;
      tmp0_apply_0[tmp_4] = toByte(tmp$ret$11);
      var tmp$ret$12;
      // Inline function 'kotlin.code' call
      tmp$ret$12 = 102;
      tmp0_apply_0[12] = toByte(tmp$ret$12);
      tmp$ret$13 = tmp0_apply_0;
      ESCAPE_MARKERS = tmp$ret$13;
    }
  }
  function currentObject($this) {
    var tmp0_safe_receiver = $this.n13();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.currentObject.<anonymous>' call
      tmp$ret$0 = $this.u1c(tmp0_safe_receiver);
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? $this.j2() : tmp1_elvis_lhs;
  }
  function unparsedPrimitive($this, primitive) {
    throw JsonDecodingException_0(-1, "Failed to parse '" + primitive + "'", toString(currentObject($this)));
  }
  function asLiteral(_this__u8e3s4, $this, type) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonLiteral ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw JsonDecodingException_1(-1, "Unexpected 'null' when " + type + ' was expected');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function AbstractJsonTreeDecoder(json, value) {
    NamedValueDecoder.call(this);
    this.r1c_1 = json;
    this.s1c_1 = value;
    this.t1c_1 = this.s17().p15_1;
  }
  AbstractJsonTreeDecoder.prototype.s17 = function () {
    return this.r1c_1;
  };
  AbstractJsonTreeDecoder.prototype.j2 = function () {
    return this.s1c_1;
  };
  AbstractJsonTreeDecoder.prototype.vp = function () {
    return this.s17().vp();
  };
  AbstractJsonTreeDecoder.prototype.t17 = function () {
    return currentObject(this);
  };
  AbstractJsonTreeDecoder.prototype.wr = function (deserializer) {
    return decodeSerializableValuePolymorphic(this, deserializer);
  };
  AbstractJsonTreeDecoder.prototype.o13 = function (parentName, childName) {
    return childName;
  };
  AbstractJsonTreeDecoder.prototype.xr = function (descriptor) {
    var currentObject_0 = currentObject(this);
    var tmp0_subject = descriptor.nq();
    var tmp;
    var tmp_0;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_0 = true;
    } else {
      tmp_0 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_0) {
      var tmp_1 = this.s17();
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      if (!(currentObject_0 instanceof JsonArray)) {
        throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonArray) + ' as the serialized body of ' + descriptor.eq() + ', but had ' + getKClassFromExpression(currentObject_0));
      }
      tmp$ret$0 = currentObject_0;
      tmp = new JsonTreeListDecoder(tmp_1, tmp$ret$0);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        var tmp$ret$5;
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var tmp0_selectMapMode = this.s17();
        var keyDescriptor = carrierDescriptor(descriptor.gq(0), tmp0_selectMapMode.vp());
        var keyKind = keyDescriptor.nq();
        var tmp_2;
        var tmp_3;
        if (keyKind instanceof PrimitiveKind) {
          tmp_3 = true;
        } else {
          tmp_3 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_3) {
          var tmp$ret$2;
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.beginStructure.<anonymous>' call
          var tmp_4 = this.s17();
          var tmp$ret$1;
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          if (!(currentObject_0 instanceof JsonObject)) {
            throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + descriptor.eq() + ', but had ' + getKClassFromExpression(currentObject_0));
          }
          tmp$ret$1 = currentObject_0;
          tmp$ret$2 = new JsonTreeMapDecoder(tmp_4, tmp$ret$1);
          tmp_2 = tmp$ret$2;
        } else {
          if (tmp0_selectMapMode.p15_1.h17_1) {
            var tmp$ret$4;
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.beginStructure.<anonymous>' call
            var tmp_5 = this.s17();
            var tmp$ret$3;
            // Inline function 'kotlinx.serialization.json.internal.cast' call
            if (!(currentObject_0 instanceof JsonArray)) {
              throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonArray) + ' as the serialized body of ' + descriptor.eq() + ', but had ' + getKClassFromExpression(currentObject_0));
            }
            tmp$ret$3 = currentObject_0;
            tmp$ret$4 = new JsonTreeListDecoder(tmp_5, tmp$ret$3);
            tmp_2 = tmp$ret$4;
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp$ret$5 = tmp_2;
        tmp = tmp$ret$5;
      } else {
        var tmp_6 = this.s17();
        var tmp$ret$6;
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        if (!(currentObject_0 instanceof JsonObject)) {
          throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + descriptor.eq() + ', but had ' + getKClassFromExpression(currentObject_0));
        }
        tmp$ret$6 = currentObject_0;
        var tmp_7 = tmp$ret$6;
        tmp = JsonTreeDecoder_init_$Create$(tmp_6, tmp_7, null, null, 12, null);
      }
    }
    return tmp;
  };
  AbstractJsonTreeDecoder.prototype.yr = function (descriptor) {
  };
  AbstractJsonTreeDecoder.prototype.jr = function () {
    var tmp = currentObject(this);
    return !(tmp instanceof JsonNull);
  };
  AbstractJsonTreeDecoder.prototype.v1c = function (tag) {
    var currentElement = this.u1c(tag);
    var tmp0_elvis_lhs = currentElement instanceof JsonPrimitive ? currentElement : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw JsonDecodingException_0(-1, 'Expected JsonPrimitive at ' + tag + ', found ' + currentElement, toString(currentObject(this)));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  AbstractJsonTreeDecoder.prototype.w1c = function (tag) {
    return !(this.u1c(tag) === JsonNull_getInstance());
  };
  AbstractJsonTreeDecoder.prototype.q13 = function (tag) {
    return this.w1c((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.x1c = function (tag) {
    var value = this.v1c(tag);
    if (!this.s17().p15_1.g17_1) {
      var literal = asLiteral(value, this, 'boolean');
      if (literal.e18_1)
        throw JsonDecodingException_0(-1, "Boolean literal for key '" + tag + "' should be unquoted.\n" + get_lenientHint(), toString(currentObject(this)));
    }
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      try {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedBoolean.<anonymous>' call
        var tmp0_elvis_lhs = get_booleanOrNull(value);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          throw IllegalArgumentException_init_$Create$_0();
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp;
        var tmp0_elvis_lhs_0 = tmp$ret$0;
        var tmp_0;
        if (tmp0_elvis_lhs_0 == null) {
          unparsedPrimitive(this, 'boolean');
        } else {
          tmp_0 = tmp0_elvis_lhs_0;
        }
        tmp$ret$1 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'boolean');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  AbstractJsonTreeDecoder.prototype.r13 = function (tag) {
    return this.x1c((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.y1c = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.v1c(tag);
      try {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedByte.<anonymous>' call
        var result = get_int(tmp0_primitive);
        var tmp;
        var containsLower = ByteCompanionObject_getInstance().t8_1;
        if (result <= ByteCompanionObject_getInstance().u8_1 ? containsLower <= result : false) {
          tmp = toByte(result);
        } else {
          tmp = null;
        }
        tmp$ret$0 = tmp;
        var tmp0_elvis_lhs = tmp$ret$0;
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'byte');
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'byte');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  AbstractJsonTreeDecoder.prototype.s13 = function (tag) {
    return this.y1c((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.z1c = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.v1c(tag);
      try {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedShort.<anonymous>' call
        var result = get_int(tmp0_primitive);
        var tmp;
        var containsLower = ShortCompanionObject_getInstance().x8_1;
        if (result <= ShortCompanionObject_getInstance().y8_1 ? containsLower <= result : false) {
          tmp = toShort(result);
        } else {
          tmp = null;
        }
        tmp$ret$0 = tmp;
        var tmp0_elvis_lhs = tmp$ret$0;
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'short');
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'short');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  AbstractJsonTreeDecoder.prototype.t13 = function (tag) {
    return this.z1c((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.a1d = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.v1c(tag);
      try {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedInt.<anonymous>' call
        tmp$ret$0 = get_int(tmp0_primitive);
        var tmp0_elvis_lhs = tmp$ret$0;
        var tmp;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'int');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'int');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  AbstractJsonTreeDecoder.prototype.u13 = function (tag) {
    return this.a1d((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.b1d = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.v1c(tag);
      try {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedLong.<anonymous>' call
        tmp$ret$0 = get_long(tmp0_primitive);
        var tmp0_elvis_lhs = tmp$ret$0;
        var tmp;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'long');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'long');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  AbstractJsonTreeDecoder.prototype.v13 = function (tag) {
    return this.b1d((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.c1d = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.v1c(tag);
      try {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedFloat.<anonymous>' call
        tmp$ret$0 = get_float(tmp0_primitive);
        var tmp0_elvis_lhs = tmp$ret$0;
        var tmp;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'float');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'float');
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.s17().p15_1.o17_1;
    if (specialFp ? true : isFinite(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(currentObject(this)));
  };
  AbstractJsonTreeDecoder.prototype.w13 = function (tag) {
    return this.c1d((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.d1d = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.v1c(tag);
      try {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedDouble.<anonymous>' call
        tmp$ret$0 = get_double(tmp0_primitive);
        var tmp0_elvis_lhs = tmp$ret$0;
        var tmp;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'double');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'double');
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.s17().p15_1.o17_1;
    if (specialFp ? true : isFinite_0(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(currentObject(this)));
  };
  AbstractJsonTreeDecoder.prototype.x13 = function (tag) {
    return this.d1d((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.e1d = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.v1c(tag);
      try {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedChar.<anonymous>' call
        tmp$ret$0 = single(tmp0_primitive.b18());
        var tmp0_elvis_lhs = tmp$ret$0;
        var tmp;
        var tmp_0 = tmp0_elvis_lhs;
        if ((tmp_0 == null ? null : new Char(tmp_0)) == null) {
          unparsedPrimitive(this, 'char');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'char');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  AbstractJsonTreeDecoder.prototype.y13 = function (tag) {
    return this.e1d((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.f1d = function (tag) {
    var value = this.v1c(tag);
    if (!this.s17().p15_1.g17_1) {
      var literal = asLiteral(value, this, 'string');
      if (!literal.e18_1)
        throw JsonDecodingException_0(-1, "String literal for key '" + tag + "' should be quoted.\n" + get_lenientHint(), toString(currentObject(this)));
    }
    if (value instanceof JsonNull)
      throw JsonDecodingException_0(-1, "Unexpected 'null' value instead of string literal", toString(currentObject(this)));
    return value.b18();
  };
  AbstractJsonTreeDecoder.prototype.z13 = function (tag) {
    return this.f1d((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.g1d = function (tag, inlineDescriptor) {
    return get_isUnsignedNumber(inlineDescriptor) ? new JsonDecoderForUnsignedTypes(new StringJsonLexer(this.v1c(tag).b18()), this.s17()) : NamedValueDecoder.prototype.a14.call(this, tag, inlineDescriptor);
  };
  AbstractJsonTreeDecoder.prototype.a14 = function (tag, inlineDescriptor) {
    return this.g1d((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
  };
  AbstractJsonTreeDecoder.$metadata$ = classMeta('AbstractJsonTreeDecoder', [JsonDecoder], undefined, undefined, undefined, NamedValueDecoder.prototype);
  function JsonTreeDecoder_init_$Init$(json, value, polyDiscriminator, polyDescriptor, $mask0, $marker, $this) {
    if (!(($mask0 & 4) === 0))
      polyDiscriminator = null;
    if (!(($mask0 & 8) === 0))
      polyDescriptor = null;
    JsonTreeDecoder.call($this, json, value, polyDiscriminator, polyDescriptor);
    return $this;
  }
  function JsonTreeDecoder_init_$Create$(json, value, polyDiscriminator, polyDescriptor, $mask0, $marker) {
    return JsonTreeDecoder_init_$Init$(json, value, polyDiscriminator, polyDescriptor, $mask0, $marker, Object.create(JsonTreeDecoder.prototype));
  }
  function coerceInputValue_0($this, descriptor, index, tag) {
    var tmp$ret$1;
    $l$block_1: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var tmp0_tryCoerceValue = $this.s17();
      var tmp1_tryCoerceValue = descriptor.gq(index);
      var tmp;
      if (!tmp1_tryCoerceValue.aq()) {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
        var tmp_0 = $this.u1c(tag);
        tmp$ret$0 = tmp_0 instanceof JsonNull;
        tmp = tmp$ret$0;
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_1;
      }
      if (equals(tmp1_tryCoerceValue.nq(), ENUM_getInstance())) {
        var tmp$ret$2;
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
        var tmp_1 = $this.u1c(tag);
        var tmp0_safe_receiver = tmp_1 instanceof JsonPrimitive ? tmp_1 : null;
        tmp$ret$2 = tmp0_safe_receiver == null ? null : get_contentOrNull(tmp0_safe_receiver);
        var tmp0_elvis_lhs = tmp$ret$2;
        var tmp_2;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$1 = false;
          break $l$block_1;
        } else {
          tmp_2 = tmp0_elvis_lhs;
        }
        var enumValue = tmp_2;
        var enumIndex = getJsonNameIndex(tmp1_tryCoerceValue, tmp0_tryCoerceValue, enumValue);
        Companion_getInstance_0();
        if (enumIndex === -3) {
          var tmp$ret$3;
          // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue.<anonymous>' call
          tmp$ret$3 = Unit_getInstance();
          tmp$ret$1 = true;
          break $l$block_1;
        }
      }
      tmp$ret$1 = false;
    }
    return tmp$ret$1;
  }
  function absenceIsNull($this, descriptor, index) {
    $this.q1d_1 = (!$this.s17().p15_1.j17_1 ? !descriptor.jq(index) : false) ? descriptor.gq(index).aq() : false;
    return $this.q1d_1;
  }
  function buildAlternativeNamesMap$ref_0($boundThis) {
    var l = function () {
      return buildAlternativeNamesMap($boundThis);
    };
    l.callableName = 'buildAlternativeNamesMap';
    return l;
  }
  function JsonTreeDecoder(json, value, polyDiscriminator, polyDescriptor) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.m1d_1 = value;
    this.n1d_1 = polyDiscriminator;
    this.o1d_1 = polyDescriptor;
    this.p1d_1 = 0;
    this.q1d_1 = false;
  }
  JsonTreeDecoder.prototype.j2 = function () {
    return this.m1d_1;
  };
  JsonTreeDecoder.prototype.ms = function (descriptor) {
    while (this.p1d_1 < descriptor.lq()) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.p1d_1;
      tmp0_this.p1d_1 = tmp1 + 1 | 0;
      var name = this.i13(descriptor, tmp1);
      var index = this.p1d_1 - 1 | 0;
      this.q1d_1 = false;
      var tmp;
      var tmp_0;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.contains' call
      var tmp0_contains = this.j2();
      var tmp$ret$0;
      // Inline function 'kotlin.collections.containsKey' call
      tmp$ret$0 = (isInterface(tmp0_contains, Map) ? tmp0_contains : THROW_CCE()).r2(name);
      tmp$ret$1 = tmp$ret$0;
      if (tmp$ret$1) {
        tmp_0 = true;
      } else {
        tmp_0 = absenceIsNull(this, descriptor, index);
      }
      if (tmp_0) {
        tmp = !this.t1c_1.l17_1 ? true : !coerceInputValue_0(this, descriptor, index, name);
      } else {
        tmp = false;
      }
      if (tmp) {
        return index;
      }
    }
    Companion_getInstance_0();
    return -1;
  };
  JsonTreeDecoder.prototype.jr = function () {
    return !this.q1d_1 ? AbstractJsonTreeDecoder.prototype.jr.call(this) : false;
  };
  JsonTreeDecoder.prototype.j13 = function (desc, index) {
    var mainName = desc.iq(index);
    if (!this.t1c_1.p17_1)
      return mainName;
    if (this.j2().y2().k1(mainName))
      return mainName;
    var tmp = get_schemaCache(this.s17());
    var tmp_0 = get_JsonAlternativeNamesKey();
    var alternativeNamesMap = tmp.d1a(desc, tmp_0, buildAlternativeNamesMap$ref_0(desc));
    var tmp$ret$2;
    // Inline function 'kotlin.collections.find' call
    var tmp0_find = this.j2().y2();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = tmp0_find.l();
      while (tmp0_iterator.m()) {
        var element = tmp0_iterator.n();
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.elementName.<anonymous>' call
        tmp$ret$0 = alternativeNamesMap.x2(element) === index;
        if (tmp$ret$0) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    tmp$ret$2 = tmp$ret$1;
    var nameInObject = tmp$ret$2;
    var tmp0_elvis_lhs = nameInObject;
    return tmp0_elvis_lhs == null ? mainName : tmp0_elvis_lhs;
  };
  JsonTreeDecoder.prototype.u1c = function (tag) {
    return getValue(this.j2(), tag);
  };
  JsonTreeDecoder.prototype.xr = function (descriptor) {
    if (descriptor === this.o1d_1)
      return this;
    return AbstractJsonTreeDecoder.prototype.xr.call(this, descriptor);
  };
  JsonTreeDecoder.prototype.yr = function (descriptor) {
    var tmp;
    if (this.t1c_1.f17_1) {
      tmp = true;
    } else {
      var tmp_0 = descriptor.nq();
      tmp = tmp_0 instanceof PolymorphicKind;
    }
    if (tmp)
      return Unit_getInstance();
    var tmp_1;
    if (!this.t1c_1.p17_1) {
      tmp_1 = jsonCachedSerialNames(descriptor);
    } else {
      var tmp_2 = jsonCachedSerialNames(descriptor);
      var tmp$ret$0;
      // Inline function 'kotlin.collections.orEmpty' call
      var tmp0_safe_receiver = get_schemaCache(this.s17()).w1b(descriptor, get_JsonAlternativeNamesKey());
      var tmp0_orEmpty = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.y2();
      var tmp0_elvis_lhs = tmp0_orEmpty;
      tmp$ret$0 = tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
      tmp_1 = plus(tmp_2, tmp$ret$0);
    }
    var names = tmp_1;
    var tmp1_iterator = this.j2().y2().l();
    while (tmp1_iterator.m()) {
      var key = tmp1_iterator.n();
      if (!names.k1(key) ? !(key === this.n1d_1) : false) {
        throw UnknownKeyException(key, this.j2().toString());
      }
    }
  };
  JsonTreeDecoder.$metadata$ = classMeta('JsonTreeDecoder', undefined, undefined, undefined, undefined, AbstractJsonTreeDecoder.prototype);
  function JsonTreeListDecoder(json, value) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.w1d_1 = value;
    this.x1d_1 = this.w1d_1.o();
    this.y1d_1 = -1;
  }
  JsonTreeListDecoder.prototype.j2 = function () {
    return this.w1d_1;
  };
  JsonTreeListDecoder.prototype.j13 = function (desc, index) {
    return index.toString();
  };
  JsonTreeListDecoder.prototype.u1c = function (tag) {
    return this.w1d_1.p(toInt(tag));
  };
  JsonTreeListDecoder.prototype.ms = function (descriptor) {
    while (this.y1d_1 < (this.x1d_1 - 1 | 0)) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.y1d_1;
      tmp0_this.y1d_1 = tmp1 + 1 | 0;
      return this.y1d_1;
    }
    Companion_getInstance_0();
    return -1;
  };
  JsonTreeListDecoder.$metadata$ = classMeta('JsonTreeListDecoder', undefined, undefined, undefined, undefined, AbstractJsonTreeDecoder.prototype);
  function JsonTreeMapDecoder(json, value) {
    JsonTreeDecoder_init_$Init$(json, value, null, null, 12, null, this);
    this.j1e_1 = value;
    this.k1e_1 = toList(this.j1e_1.y2());
    this.l1e_1 = imul(this.k1e_1.o(), 2);
    this.m1e_1 = -1;
  }
  JsonTreeMapDecoder.prototype.j2 = function () {
    return this.j1e_1;
  };
  JsonTreeMapDecoder.prototype.j13 = function (desc, index) {
    var i = index / 2 | 0;
    return this.k1e_1.p(i);
  };
  JsonTreeMapDecoder.prototype.ms = function (descriptor) {
    while (this.m1e_1 < (this.l1e_1 - 1 | 0)) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.m1e_1;
      tmp0_this.m1e_1 = tmp1 + 1 | 0;
      return this.m1e_1;
    }
    Companion_getInstance_0();
    return -1;
  };
  JsonTreeMapDecoder.prototype.u1c = function (tag) {
    return (this.m1e_1 % 2 | 0) === 0 ? JsonPrimitive_2(tag) : getValue(this.j1e_1, tag);
  };
  JsonTreeMapDecoder.prototype.yr = function (descriptor) {
  };
  JsonTreeMapDecoder.$metadata$ = classMeta('JsonTreeMapDecoder', undefined, undefined, undefined, undefined, JsonTreeDecoder.prototype);
  function readPolymorphicJson(_this__u8e3s4, discriminator, element, deserializer) {
    return (new JsonTreeDecoder(_this__u8e3s4, element, discriminator, deserializer.bp())).wr(deserializer);
  }
  var WriteMode_OBJ_instance;
  var WriteMode_LIST_instance;
  var WriteMode_MAP_instance;
  var WriteMode_POLY_OBJ_instance;
  function values() {
    return [WriteMode_OBJ_getInstance(), WriteMode_LIST_getInstance(), WriteMode_MAP_getInstance(), WriteMode_POLY_OBJ_getInstance()];
  }
  var WriteMode_entriesInitialized;
  function WriteMode_initEntries() {
    if (WriteMode_entriesInitialized)
      return Unit_getInstance();
    WriteMode_entriesInitialized = true;
    WriteMode_OBJ_instance = new WriteMode('OBJ', 0, get_BEGIN_OBJ(), get_END_OBJ());
    WriteMode_LIST_instance = new WriteMode('LIST', 1, get_BEGIN_LIST(), get_END_LIST());
    WriteMode_MAP_instance = new WriteMode('MAP', 2, get_BEGIN_OBJ(), get_END_OBJ());
    WriteMode_POLY_OBJ_instance = new WriteMode('POLY_OBJ', 3, get_BEGIN_LIST(), get_END_LIST());
  }
  function WriteMode(name, ordinal, begin, end) {
    Enum.call(this, name, ordinal);
    this.i1c_1 = begin;
    this.j1c_1 = end;
  }
  WriteMode.$metadata$ = classMeta('WriteMode', undefined, undefined, undefined, undefined, Enum.prototype);
  function switchMode(_this__u8e3s4, desc) {
    var tmp0_subject = desc.nq();
    var tmp;
    if (tmp0_subject instanceof PolymorphicKind) {
      tmp = WriteMode_POLY_OBJ_getInstance();
    } else {
      if (equals(tmp0_subject, LIST_getInstance())) {
        tmp = WriteMode_LIST_getInstance();
      } else {
        if (equals(tmp0_subject, MAP_getInstance())) {
          var tmp$ret$2;
          // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
          var keyDescriptor = carrierDescriptor(desc.gq(0), _this__u8e3s4.vp());
          var keyKind = keyDescriptor.nq();
          var tmp_0;
          var tmp_1;
          if (keyKind instanceof PrimitiveKind) {
            tmp_1 = true;
          } else {
            tmp_1 = equals(keyKind, ENUM_getInstance());
          }
          if (tmp_1) {
            var tmp$ret$0;
            // Inline function 'kotlinx.serialization.json.internal.switchMode.<anonymous>' call
            tmp$ret$0 = WriteMode_MAP_getInstance();
            tmp_0 = tmp$ret$0;
          } else {
            if (_this__u8e3s4.p15_1.h17_1) {
              var tmp$ret$1;
              // Inline function 'kotlinx.serialization.json.internal.switchMode.<anonymous>' call
              tmp$ret$1 = WriteMode_LIST_getInstance();
              tmp_0 = tmp$ret$1;
            } else {
              throw InvalidKeyKindException(keyDescriptor);
            }
          }
          tmp$ret$2 = tmp_0;
          tmp = tmp$ret$2;
        } else {
          tmp = WriteMode_OBJ_getInstance();
        }
      }
    }
    return tmp;
  }
  function selectMapMode(_this__u8e3s4, mapDescriptor, ifMap, ifList) {
    var keyDescriptor = carrierDescriptor(mapDescriptor.gq(0), _this__u8e3s4.vp());
    var keyKind = keyDescriptor.nq();
    var tmp;
    var tmp_0;
    if (keyKind instanceof PrimitiveKind) {
      tmp_0 = true;
    } else {
      tmp_0 = equals(keyKind, ENUM_getInstance());
    }
    if (tmp_0) {
      tmp = ifMap();
    } else {
      if (_this__u8e3s4.p15_1.h17_1) {
        tmp = ifList();
      } else {
        throw InvalidKeyKindException(keyDescriptor);
      }
    }
    return tmp;
  }
  function carrierDescriptor(_this__u8e3s4, module_0) {
    var tmp;
    if (equals(_this__u8e3s4.nq(), CONTEXTUAL_getInstance())) {
      var tmp0_safe_receiver = getContextualDescriptor(module_0, _this__u8e3s4);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : carrierDescriptor(tmp0_safe_receiver, module_0);
      tmp = tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
    } else if (_this__u8e3s4.mq()) {
      tmp = _this__u8e3s4.gq(0);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function WriteMode_OBJ_getInstance() {
    WriteMode_initEntries();
    return WriteMode_OBJ_instance;
  }
  function WriteMode_LIST_getInstance() {
    WriteMode_initEntries();
    return WriteMode_LIST_instance;
  }
  function WriteMode_MAP_getInstance() {
    WriteMode_initEntries();
    return WriteMode_MAP_instance;
  }
  function WriteMode_POLY_OBJ_getInstance() {
    WriteMode_initEntries();
    return WriteMode_POLY_OBJ_instance;
  }
  function get_COLON() {
    return COLON;
  }
  var COLON;
  function get_INVALID() {
    return INVALID;
  }
  var INVALID;
  function get_COMMA() {
    return COMMA;
  }
  var COMMA;
  function get_NULL() {
    return NULL;
  }
  var NULL;
  function get_BEGIN_OBJ() {
    return BEGIN_OBJ;
  }
  var BEGIN_OBJ;
  function get_END_OBJ() {
    return END_OBJ;
  }
  var END_OBJ;
  function get_BEGIN_LIST() {
    return BEGIN_LIST;
  }
  var BEGIN_LIST;
  function get_END_LIST() {
    return END_LIST;
  }
  var END_LIST;
  function appendEscape($this, lastPosition, current) {
    $this.n1e(lastPosition, current);
    return appendEsc($this, current + 1 | 0);
  }
  function decodedString($this, lastPosition, currentPosition) {
    $this.n1e(lastPosition, currentPosition);
    var result = $this.p16_1.toString();
    $this.p16_1.rh(0);
    return result;
  }
  function takePeeked($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = ensureNotNull($this.o16_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.takePeeked.<anonymous>' call
    $this.o16_1 = null;
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  }
  function wasUnquotedString($this) {
    return !equals(new Char(charSequenceGet($this.o1e(), $this.n16_1 - 1 | 0)), new Char(_Char___init__impl__6a9atx(34)));
  }
  function appendEsc($this, startPosition) {
    var currentPosition = startPosition;
    currentPosition = $this.p1e(currentPosition);
    if (currentPosition === -1) {
      $this.b1a('Expected escape sequence to continue, got EOF', 0, 2, null);
    }
    var tmp = $this.o1e();
    var tmp0 = currentPosition;
    currentPosition = tmp0 + 1 | 0;
    var currentChar = charSequenceGet(tmp, tmp0);
    if (equals(new Char(currentChar), new Char(_Char___init__impl__6a9atx(117)))) {
      return appendHex($this, $this.o1e(), currentPosition);
    }
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    tmp$ret$0 = Char__toInt_impl_vasixd(currentChar);
    var c = escapeToChar(tmp$ret$0);
    if (equals(new Char(c), new Char(_Char___init__impl__6a9atx(0)))) {
      var tmp_0 = "Invalid escaped char '" + new Char(currentChar) + "'";
      $this.b1a(tmp_0, 0, 2, null);
    }
    $this.p16_1.k8(c);
    return currentPosition;
  }
  function appendHex($this, source, startPos) {
    if ((startPos + 4 | 0) >= charSequenceLength(source)) {
      $this.b1a('Unexpected EOF during unicode escape', 0, 2, null);
    }
    $this.p16_1.k8(numberToChar((((fromHexChar($this, source, startPos) << 12) + (fromHexChar($this, source, startPos + 1 | 0) << 8) | 0) + (fromHexChar($this, source, startPos + 2 | 0) << 4) | 0) + fromHexChar($this, source, startPos + 3 | 0) | 0));
    return startPos + 4 | 0;
  }
  function fromHexChar($this, source, currentPosition) {
    var character = charSequenceGet(source, currentPosition);
    var tmp;
    if (_Char___init__impl__6a9atx(48) <= character ? character <= _Char___init__impl__6a9atx(57) : false) {
      var tmp$ret$0;
      // Inline function 'kotlin.code' call
      tmp$ret$0 = Char__toInt_impl_vasixd(character);
      var tmp_0 = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'kotlin.code' call
      tmp$ret$1 = 48;
      tmp = tmp_0 - tmp$ret$1 | 0;
    } else if (_Char___init__impl__6a9atx(97) <= character ? character <= _Char___init__impl__6a9atx(102) : false) {
      var tmp$ret$2;
      // Inline function 'kotlin.code' call
      tmp$ret$2 = Char__toInt_impl_vasixd(character);
      var tmp_1 = tmp$ret$2;
      var tmp$ret$3;
      // Inline function 'kotlin.code' call
      tmp$ret$3 = 97;
      tmp = (tmp_1 - tmp$ret$3 | 0) + 10 | 0;
    } else if (_Char___init__impl__6a9atx(65) <= character ? character <= _Char___init__impl__6a9atx(70) : false) {
      var tmp$ret$4;
      // Inline function 'kotlin.code' call
      tmp$ret$4 = Char__toInt_impl_vasixd(character);
      var tmp_2 = tmp$ret$4;
      var tmp$ret$5;
      // Inline function 'kotlin.code' call
      tmp$ret$5 = 65;
      tmp = (tmp_2 - tmp$ret$5 | 0) + 10 | 0;
    } else {
      var tmp_3 = "Invalid toHexChar char '" + new Char(character) + "' in unicode escape";
      $this.b1a(tmp_3, 0, 2, null);
    }
    return tmp;
  }
  function consumeBoolean($this, start) {
    var current = $this.p1e(start);
    if (current >= charSequenceLength($this.o1e()) ? true : current === -1) {
      $this.b1a('EOF', 0, 2, null);
    }
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    var tmp = $this.o1e();
    var tmp0 = current;
    current = tmp0 + 1 | 0;
    var tmp0__get_code__88qj9g = charSequenceGet(tmp, tmp0);
    tmp$ret$0 = Char__toInt_impl_vasixd(tmp0__get_code__88qj9g);
    var tmp1_subject = tmp$ret$0 | 32;
    var tmp_0;
    var tmp$ret$1;
    // Inline function 'kotlin.code' call
    tmp$ret$1 = 116;
    if (tmp1_subject === tmp$ret$1) {
      consumeBooleanLiteral($this, 'rue', current);
      tmp_0 = true;
    } else {
      var tmp$ret$2;
      // Inline function 'kotlin.code' call
      tmp$ret$2 = 102;
      if (tmp1_subject === tmp$ret$2) {
        consumeBooleanLiteral($this, 'alse', current);
        tmp_0 = false;
      } else {
        var tmp_1 = "Expected valid boolean literal prefix, but had '" + $this.m1a() + "'";
        $this.b1a(tmp_1, 0, 2, null);
      }
    }
    return tmp_0;
  }
  function consumeBooleanLiteral($this, literalSuffix, current) {
    if ((charSequenceLength($this.o1e()) - current | 0) < literalSuffix.length) {
      $this.b1a('Unexpected end of boolean literal', 0, 2, null);
    }
    var inductionVariable = 0;
    var last = charSequenceLength(literalSuffix) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var expected = charSequenceGet(literalSuffix, i);
        var actual = charSequenceGet($this.o1e(), current + i | 0);
        var tmp$ret$0;
        // Inline function 'kotlin.code' call
        tmp$ret$0 = Char__toInt_impl_vasixd(expected);
        var tmp = tmp$ret$0;
        var tmp$ret$1;
        // Inline function 'kotlin.code' call
        tmp$ret$1 = Char__toInt_impl_vasixd(actual);
        if (!(tmp === (tmp$ret$1 | 32))) {
          var tmp_0 = "Expected valid boolean literal prefix, but had '" + $this.m1a() + "'";
          $this.b1a(tmp_0, 0, 2, null);
        }
      }
       while (inductionVariable <= last);
    $this.n16_1 = current + literalSuffix.length | 0;
  }
  function AbstractJsonLexer() {
    this.n16_1 = 0;
    this.o16_1 = null;
    this.p16_1 = StringBuilder_init_$Create$();
  }
  AbstractJsonLexer.prototype.q1e = function () {
  };
  AbstractJsonLexer.prototype.r1e = function (c) {
    var tmp0_subject = c;
    return (((equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(125))) ? true : equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(93)))) ? true : equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(58)))) ? true : equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(44)))) ? false : true;
  };
  AbstractJsonLexer.prototype.q16 = function () {
    var nextToken = this.o1a();
    if (!(nextToken === 10)) {
      var tmp = 'Expected EOF after parsing an object, but had ' + new Char(charSequenceGet(this.o1e(), this.n16_1 - 1 | 0)) + ' instead';
      this.b1a(tmp, 0, 2, null);
    }
  };
  AbstractJsonLexer.prototype.i1a = function (expected) {
    var token = this.o1a();
    if (!(token === expected)) {
      this.s1e(expected);
    }
    return token;
  };
  AbstractJsonLexer.prototype.x1b = function (expected) {
    this.q1e();
    var source = this.o1e();
    var cpos = this.n16_1;
    $l$loop_0: while (true) {
      cpos = this.p1e(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var tmp0 = cpos;
      cpos = tmp0 + 1 | 0;
      var c = charSequenceGet(source, tmp0);
      if (((equals(new Char(c), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(9))))
        continue $l$loop_0;
      this.n16_1 = cpos;
      if (equals(new Char(c), new Char(expected)))
        return Unit_getInstance();
      this.t1e(expected);
    }
    this.n16_1 = cpos;
    this.t1e(expected);
  };
  AbstractJsonLexer.prototype.t1e = function (expected) {
    var tmp0_this = this;
    tmp0_this.n16_1 = tmp0_this.n16_1 - 1 | 0;
    if ((this.n16_1 >= 0 ? equals(new Char(expected), new Char(_Char___init__impl__6a9atx(34))) : false) ? this.m1a() === 'null' : false) {
      this.c1b("Expected string literal but 'null' literal was found.\nUse 'coerceInputValues = true' in 'Json {}` builder to coerce nulls to default values.", this.n16_1 - 4 | 0);
    }
    this.s1e(charToTokenClass(expected));
  };
  AbstractJsonLexer.prototype.s1e = function (expectedToken) {
    var tmp0_subject = expectedToken;
    var expected = tmp0_subject === 1 ? "quotation mark '\"'" : tmp0_subject === 4 ? "comma ','" : tmp0_subject === 5 ? "semicolon ':'" : tmp0_subject === 6 ? "start of the object '{'" : tmp0_subject === 7 ? "end of the object '}'" : tmp0_subject === 8 ? "start of the array '['" : tmp0_subject === 9 ? "end of the array ']'" : 'valid token';
    var s = (this.n16_1 === charSequenceLength(this.o1e()) ? true : this.n16_1 <= 0) ? 'EOF' : toString_0(charSequenceGet(this.o1e(), this.n16_1 - 1 | 0));
    this.c1b('Expected ' + expected + ", but had '" + s + "' instead", this.n16_1 - 1 | 0);
  };
  AbstractJsonLexer.prototype.j1a = function () {
    var source = this.o1e();
    var cpos = this.n16_1;
    $l$loop_0: while (true) {
      cpos = this.p1e(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var ch = charSequenceGet(source, cpos);
      if (((equals(new Char(ch), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(ch), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(ch), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(ch), new Char(_Char___init__impl__6a9atx(9)))) {
        cpos = cpos + 1 | 0;
        continue $l$loop_0;
      }
      this.n16_1 = cpos;
      return charToTokenClass(ch);
    }
    this.n16_1 = cpos;
    return 10;
  };
  AbstractJsonLexer.prototype.z1b = function () {
    var current = this.u1e();
    current = this.p1e(current);
    var len = charSequenceLength(this.o1e()) - current | 0;
    if (len < 4 ? true : current === -1)
      return true;
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!equals(new Char(charSequenceGet('null', i)), new Char(charSequenceGet(this.o1e(), current + i | 0))))
          return true;
      }
       while (inductionVariable <= 3);
    if (len > 4 ? charToTokenClass(charSequenceGet(this.o1e(), current + 4 | 0)) === 0 : false)
      return true;
    this.n16_1 = current + 4 | 0;
    return false;
  };
  AbstractJsonLexer.prototype.u1e = function () {
    var current = this.n16_1;
    $l$loop_0: while (true) {
      current = this.p1e(current);
      if (current === -1)
        break $l$loop_0;
      var c = charSequenceGet(this.o1e(), current);
      if (((equals(new Char(c), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(9)))) {
        current = current + 1 | 0;
      } else {
        break $l$loop_0;
      }
    }
    this.n16_1 = current;
    return current;
  };
  AbstractJsonLexer.prototype.a1c = function (isLenient) {
    var token = this.j1a();
    var tmp;
    if (isLenient) {
      if (!(token === 1) ? !(token === 0) : false)
        return null;
      tmp = this.m1a();
    } else {
      if (!(token === 1))
        return null;
      tmp = this.l1a();
    }
    var string = tmp;
    this.o16_1 = string;
    return string;
  };
  AbstractJsonLexer.prototype.v1e = function (startPos, endPos) {
    var tmp$ret$0;
    // Inline function 'kotlin.text.substring' call
    var tmp0_substring = this.o1e();
    tmp$ret$0 = toString(charSequenceSubSequence(tmp0_substring, startPos, endPos));
    return tmp$ret$0;
  };
  AbstractJsonLexer.prototype.l1a = function () {
    if (!(this.o16_1 == null)) {
      return takePeeked(this);
    }
    return this.d1c();
  };
  AbstractJsonLexer.prototype.consumeString2 = function (source, startPosition, current) {
    var currentPosition = current;
    var lastPosition = startPosition;
    var char = charSequenceGet(source, currentPosition);
    var usedAppend = false;
    while (!equals(new Char(char), new Char(_Char___init__impl__6a9atx(34)))) {
      if (equals(new Char(char), new Char(_Char___init__impl__6a9atx(92)))) {
        usedAppend = true;
        currentPosition = appendEscape(this, lastPosition, currentPosition);
        lastPosition = currentPosition;
      } else {
        currentPosition = currentPosition + 1 | 0;
        if (currentPosition >= charSequenceLength(source)) {
          usedAppend = true;
          this.n1e(lastPosition, currentPosition);
          currentPosition = this.p1e(currentPosition);
          if (currentPosition === -1) {
            this.c1b('EOF', currentPosition);
          }
          lastPosition = currentPosition;
        }
      }
      char = charSequenceGet(source, currentPosition);
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.v1e(lastPosition, currentPosition);
    } else {
      tmp = decodedString(this, lastPosition, currentPosition);
    }
    var string = tmp;
    this.n16_1 = currentPosition + 1 | 0;
    return string;
  };
  AbstractJsonLexer.prototype.e1c = function () {
    var result = this.m1a();
    if (result === 'null' ? wasUnquotedString(this) : false) {
      this.b1a("Unexpected 'null' value instead of string literal", 0, 2, null);
    }
    return result;
  };
  AbstractJsonLexer.prototype.m1a = function () {
    if (!(this.o16_1 == null)) {
      return takePeeked(this);
    }
    var current = this.u1e();
    if (current >= charSequenceLength(this.o1e()) ? true : current === -1) {
      this.c1b('EOF', current);
    }
    var token = charToTokenClass(charSequenceGet(this.o1e(), current));
    if (token === 1) {
      return this.l1a();
    }
    if (!(token === 0)) {
      var tmp = 'Expected beginning of the string, but got ' + new Char(charSequenceGet(this.o1e(), current));
      this.b1a(tmp, 0, 2, null);
    }
    var usedAppend = false;
    while (charToTokenClass(charSequenceGet(this.o1e(), current)) === 0) {
      current = current + 1 | 0;
      if (current >= charSequenceLength(this.o1e())) {
        usedAppend = true;
        this.n1e(this.n16_1, current);
        var eof = this.p1e(current);
        if (eof === -1) {
          this.n16_1 = current;
          return decodedString(this, 0, 0);
        } else {
          current = eof;
        }
      }
    }
    var tmp_0;
    if (!usedAppend) {
      tmp_0 = this.v1e(this.n16_1, current);
    } else {
      tmp_0 = decodedString(this, this.n16_1, current);
    }
    var result = tmp_0;
    this.n16_1 = current;
    return result;
  };
  AbstractJsonLexer.prototype.n1e = function (fromIndex, toIndex) {
    this.p16_1.nh(this.o1e(), fromIndex, toIndex);
  };
  AbstractJsonLexer.prototype.w1e = function (condition, position, message) {
    if (!condition) {
      this.c1b(message(), position);
    }
  };
  AbstractJsonLexer.prototype.c1c = function (allowLenientStrings) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    var tokenStack = tmp$ret$0;
    var lastToken = this.j1a();
    if (!(lastToken === 8) ? !(lastToken === 6) : false) {
      this.m1a();
      return Unit_getInstance();
    }
    $l$loop: while (true) {
      lastToken = this.j1a();
      if (lastToken === 1) {
        if (allowLenientStrings) {
          this.m1a();
        } else {
          this.d1c();
        }
        continue $l$loop;
      }
      var tmp0_subject = lastToken;
      if (tmp0_subject === 8 ? true : tmp0_subject === 6) {
        tokenStack.g(lastToken);
      } else if (tmp0_subject === 9) {
        if (!(last(tokenStack) === 8))
          throw JsonDecodingException_0(this.n16_1, 'found ] instead of }', this.o1e());
        removeLast(tokenStack);
      } else if (tmp0_subject === 7) {
        if (!(last(tokenStack) === 6))
          throw JsonDecodingException_0(this.n16_1, 'found } instead of ]', this.o1e());
        removeLast(tokenStack);
      } else if (tmp0_subject === 10) {
        this.b1a('Unexpected end of input due to malformed JSON during ignoring unknown keys', 0, 2, null);
      }
      this.o1a();
      if (tokenStack.o() === 0)
        return Unit_getInstance();
    }
  };
  AbstractJsonLexer.prototype.toString = function () {
    return "JsonReader(source='" + this.o1e() + "', currentPosition=" + this.n16_1 + ')';
  };
  AbstractJsonLexer.prototype.b1c = function (key) {
    var processed = this.v1e(0, this.n16_1);
    var lastIndexOf = lastIndexOf$default(processed, key, 0, false, 6, null);
    this.c1b("Encountered an unknown key '" + key + "'.\nUse 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.", lastIndexOf);
  };
  AbstractJsonLexer.prototype.c1b = function (message, position) {
    throw JsonDecodingException_0(position, message, this.o1e());
  };
  AbstractJsonLexer.prototype.b1a = function (message, position, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      position = this.n16_1;
    return this.c1b(message, position);
  };
  AbstractJsonLexer.prototype.m1c = function () {
    var current = this.u1e();
    current = this.p1e(current);
    if (current >= charSequenceLength(this.o1e()) ? true : current === -1) {
      this.b1a('EOF', 0, 2, null);
    }
    var tmp;
    if (equals(new Char(charSequenceGet(this.o1e(), current)), new Char(_Char___init__impl__6a9atx(34)))) {
      current = current + 1 | 0;
      if (current === charSequenceLength(this.o1e())) {
        this.b1a('EOF', 0, 2, null);
      }
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var accumulator = new Long(0, 0);
    var isNegative = false;
    var start = current;
    var hasChars = true;
    $l$loop_0: while (hasChars) {
      var ch = charSequenceGet(this.o1e(), current);
      if (equals(new Char(ch), new Char(_Char___init__impl__6a9atx(45)))) {
        if (!(current === start)) {
          this.b1a("Unexpected symbol '-' in numeric literal", 0, 2, null);
        }
        isNegative = true;
        current = current + 1 | 0;
        continue $l$loop_0;
      }
      var token = charToTokenClass(ch);
      if (!(token === 0))
        break $l$loop_0;
      current = current + 1 | 0;
      hasChars = !(current === charSequenceLength(this.o1e()));
      var digit = Char__minus_impl_a2frrh(ch, _Char___init__impl__6a9atx(48));
      if (!(0 <= digit ? digit <= 9 : false)) {
        var tmp_0 = "Unexpected symbol '" + new Char(ch) + "' in numeric literal";
        this.b1a(tmp_0, 0, 2, null);
      }
      var tmp$ret$1;
      // Inline function 'kotlin.Long.minus' call
      var tmp$ret$0;
      // Inline function 'kotlin.Long.times' call
      var tmp0_times = accumulator;
      tmp$ret$0 = tmp0_times.q8(new Long(10, 0));
      var tmp1_minus = tmp$ret$0;
      tmp$ret$1 = tmp1_minus.s8(toLong_0(digit));
      accumulator = tmp$ret$1;
      if (accumulator.p8(new Long(0, 0)) > 0) {
        this.b1a('Numeric value overflow', 0, 2, null);
      }
    }
    if (start === current ? true : isNegative ? start === (current - 1 | 0) : false) {
      this.b1a('Expected numeric literal', 0, 2, null);
    }
    if (hasQuotation) {
      if (!hasChars) {
        this.b1a('EOF', 0, 2, null);
      }
      if (!equals(new Char(charSequenceGet(this.o1e(), current)), new Char(_Char___init__impl__6a9atx(34)))) {
        this.b1a('Expected closing quotation mark', 0, 2, null);
      }
      current = current + 1 | 0;
    }
    this.n16_1 = current;
    var tmp_1;
    if (isNegative) {
      tmp_1 = accumulator;
    } else {
      var tmp_2 = accumulator;
      Companion_getInstance_4();
      if (!tmp_2.equals(new Long(0, -2147483648))) {
        tmp_1 = accumulator.n8();
      } else {
        this.b1a('Numeric value overflow', 0, 2, null);
      }
    }
    return tmp_1;
  };
  AbstractJsonLexer.prototype.k1c = function () {
    return consumeBoolean(this, this.u1e());
  };
  AbstractJsonLexer.prototype.l1c = function () {
    var current = this.u1e();
    if (current === charSequenceLength(this.o1e())) {
      this.b1a('EOF', 0, 2, null);
    }
    var tmp;
    if (equals(new Char(charSequenceGet(this.o1e(), current)), new Char(_Char___init__impl__6a9atx(34)))) {
      current = current + 1 | 0;
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var result = consumeBoolean(this, current);
    if (hasQuotation) {
      if (this.n16_1 === charSequenceLength(this.o1e())) {
        this.b1a('EOF', 0, 2, null);
      }
      if (!equals(new Char(charSequenceGet(this.o1e(), this.n16_1)), new Char(_Char___init__impl__6a9atx(34)))) {
        this.b1a('Expected closing quotation mark', 0, 2, null);
      }
      var tmp0_this = this;
      tmp0_this.n16_1 = tmp0_this.n16_1 + 1 | 0;
    }
    return result;
  };
  AbstractJsonLexer.$metadata$ = classMeta('AbstractJsonLexer');
  function charToTokenClass(c) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    tmp$ret$0 = Char__toInt_impl_vasixd(c);
    if (tmp$ret$0 < 126) {
      var tmp_0 = CharMappings_getInstance().y1e_1;
      var tmp$ret$1;
      // Inline function 'kotlin.code' call
      tmp$ret$1 = Char__toInt_impl_vasixd(c);
      tmp = tmp_0[tmp$ret$1];
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function get_TC_WHITESPACE() {
    return TC_WHITESPACE;
  }
  var TC_WHITESPACE;
  function get_TC_EOF() {
    return TC_EOF;
  }
  var TC_EOF;
  function get_STRING() {
    return STRING;
  }
  var STRING;
  function get_TC_STRING() {
    return TC_STRING;
  }
  var TC_STRING;
  function get_STRING_ESC() {
    return STRING_ESC;
  }
  var STRING_ESC;
  function get_TC_COMMA() {
    return TC_COMMA;
  }
  var TC_COMMA;
  function get_lenientHint() {
    return lenientHint;
  }
  var lenientHint;
  function get_TC_COLON() {
    return TC_COLON;
  }
  var TC_COLON;
  function get_TC_BEGIN_OBJ() {
    return TC_BEGIN_OBJ;
  }
  var TC_BEGIN_OBJ;
  function get_TC_END_OBJ() {
    return TC_END_OBJ;
  }
  var TC_END_OBJ;
  function get_TC_BEGIN_LIST() {
    return TC_BEGIN_LIST;
  }
  var TC_BEGIN_LIST;
  function get_TC_END_LIST() {
    return TC_END_LIST;
  }
  var TC_END_LIST;
  function get_TC_OTHER() {
    return TC_OTHER;
  }
  var TC_OTHER;
  function escapeToChar(c) {
    return c < 117 ? CharMappings_getInstance().x1e_1[c] : _Char___init__impl__6a9atx(0);
  }
  function get_ignoreUnknownKeysHint() {
    return ignoreUnknownKeysHint;
  }
  var ignoreUnknownKeysHint;
  function initEscape($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 31)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        initC2ESC($this, i, _Char___init__impl__6a9atx(117));
      }
       while (inductionVariable <= 31);
    initC2ESC($this, 8, _Char___init__impl__6a9atx(98));
    initC2ESC($this, 9, _Char___init__impl__6a9atx(116));
    initC2ESC($this, 10, _Char___init__impl__6a9atx(110));
    initC2ESC($this, 12, _Char___init__impl__6a9atx(102));
    initC2ESC($this, 13, _Char___init__impl__6a9atx(114));
    initC2ESC_0($this, _Char___init__impl__6a9atx(47), _Char___init__impl__6a9atx(47));
    initC2ESC_0($this, _Char___init__impl__6a9atx(34), _Char___init__impl__6a9atx(34));
    initC2ESC_0($this, _Char___init__impl__6a9atx(92), _Char___init__impl__6a9atx(92));
  }
  function initCharToToken($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 32)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        initC2TC($this, i, 127);
      }
       while (inductionVariable <= 32);
    initC2TC($this, 9, 3);
    initC2TC($this, 10, 3);
    initC2TC($this, 13, 3);
    initC2TC($this, 32, 3);
    initC2TC_0($this, _Char___init__impl__6a9atx(44), 4);
    initC2TC_0($this, _Char___init__impl__6a9atx(58), 5);
    initC2TC_0($this, _Char___init__impl__6a9atx(123), 6);
    initC2TC_0($this, _Char___init__impl__6a9atx(125), 7);
    initC2TC_0($this, _Char___init__impl__6a9atx(91), 8);
    initC2TC_0($this, _Char___init__impl__6a9atx(93), 9);
    initC2TC_0($this, _Char___init__impl__6a9atx(34), 1);
    initC2TC_0($this, _Char___init__impl__6a9atx(92), 2);
  }
  function initC2ESC($this, c, esc) {
    if (!equals(new Char(esc), new Char(_Char___init__impl__6a9atx(117)))) {
      var tmp$ret$0;
      // Inline function 'kotlin.code' call
      tmp$ret$0 = Char__toInt_impl_vasixd(esc);
      $this.x1e_1[tmp$ret$0] = numberToChar(c);
    }
  }
  function initC2ESC_0($this, c, esc) {
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2ESC($this, tmp$ret$0, esc);
  }
  function initC2TC($this, c, cl) {
    $this.y1e_1[c] = cl;
  }
  function initC2TC_0($this, c, cl) {
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2TC($this, tmp$ret$0, cl);
  }
  function CharMappings() {
    CharMappings_instance = this;
    this.x1e_1 = charArray(117);
    this.y1e_1 = new Int8Array(126);
    initEscape(this);
    initCharToToken(this);
  }
  CharMappings.$metadata$ = objectMeta('CharMappings');
  var CharMappings_instance;
  function CharMappings_getInstance() {
    if (CharMappings_instance == null)
      new CharMappings();
    return CharMappings_instance;
  }
  function get_specialFlowingValuesHint() {
    return specialFlowingValuesHint;
  }
  var specialFlowingValuesHint;
  function get_allowStructuredMapKeysHint() {
    return allowStructuredMapKeysHint;
  }
  var allowStructuredMapKeysHint;
  function StringJsonLexer(source) {
    AbstractJsonLexer.call(this);
    this.c1f_1 = source;
  }
  StringJsonLexer.prototype.o1e = function () {
    return this.c1f_1;
  };
  StringJsonLexer.prototype.p1e = function (position) {
    return position < this.c1f_1.length ? position : -1;
  };
  StringJsonLexer.prototype.o1a = function () {
    var source = this.c1f_1;
    $l$loop: while (!(this.n16_1 === -1) ? this.n16_1 < source.length : false) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.n16_1;
      tmp0_this.n16_1 = tmp1 + 1 | 0;
      var ch = charSequenceGet(source, tmp1);
      var tc = charToTokenClass(ch);
      var tmp;
      if (tc === get_TC_WHITESPACE()) {
        continue $l$loop;
      } else {
        tmp = tc;
      }
      return tmp;
    }
    return get_TC_EOF();
  };
  StringJsonLexer.prototype.y1b = function () {
    var current = this.u1e();
    if (current === this.c1f_1.length ? true : current === -1)
      return false;
    if (equals(new Char(charSequenceGet(this.c1f_1, current)), new Char(_Char___init__impl__6a9atx(44)))) {
      var tmp0_this = this;
      tmp0_this.n16_1 = tmp0_this.n16_1 + 1 | 0;
      return true;
    }
    return false;
  };
  StringJsonLexer.prototype.k1a = function () {
    var current = this.n16_1;
    if (current === -1)
      return false;
    $l$loop: while (current < this.c1f_1.length) {
      var c = charSequenceGet(this.c1f_1, current);
      if (((equals(new Char(c), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(9)))) {
        current = current + 1 | 0;
        continue $l$loop;
      }
      this.n16_1 = current;
      return this.r1e(c);
    }
    this.n16_1 = current;
    return false;
  };
  StringJsonLexer.prototype.u1e = function () {
    var current = this.n16_1;
    if (current === -1)
      return current;
    $l$loop: while (current < this.c1f_1.length) {
      var c = charSequenceGet(this.c1f_1, current);
      if (((equals(new Char(c), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(9)))) {
        current = current + 1 | 0;
      } else {
        break $l$loop;
      }
    }
    this.n16_1 = current;
    return current;
  };
  StringJsonLexer.prototype.x1b = function (expected) {
    if (this.n16_1 === -1) {
      this.t1e(expected);
    }
    var source = this.c1f_1;
    $l$loop: while (this.n16_1 < source.length) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.n16_1;
      tmp0_this.n16_1 = tmp1 + 1 | 0;
      var c = charSequenceGet(source, tmp1);
      if (((equals(new Char(c), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(9))))
        continue $l$loop;
      if (equals(new Char(c), new Char(expected)))
        return Unit_getInstance();
      this.t1e(expected);
    }
    this.t1e(expected);
  };
  StringJsonLexer.prototype.d1c = function () {
    this.x1b(get_STRING());
    var current = this.n16_1;
    var tmp = _Char___init__impl__6a9atx(34);
    var closingQuote = indexOf$default(this.c1f_1, tmp, current, false, 4, null);
    if (closingQuote === -1) {
      this.s1e(get_TC_STRING());
    }
    var inductionVariable = current;
    if (inductionVariable < closingQuote)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (equals(new Char(charSequenceGet(this.c1f_1, i)), new Char(get_STRING_ESC()))) {
          return this.consumeString2(this.c1f_1, this.n16_1, i);
        }
      }
       while (inductionVariable < closingQuote);
    this.n16_1 = closingQuote + 1 | 0;
    var tmp$ret$1;
    // Inline function 'kotlin.text.substring' call
    var tmp0_substring = this.c1f_1;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_substring;
    tmp$ret$1 = tmp$ret$0.substring(current, closingQuote);
    return tmp$ret$1;
  };
  StringJsonLexer.$metadata$ = classMeta('StringJsonLexer', undefined, undefined, undefined, undefined, AbstractJsonLexer.prototype);
  function decodeFromDynamic(_this__u8e3s4, deserializer, dynamic) {
    return decodeDynamic(_this__u8e3s4, deserializer, dynamic);
  }
  function get_schemaCache(_this__u8e3s4) {
    return _this__u8e3s4.r15_1;
  }
  function decodeDynamic(_this__u8e3s4, deserializer, dynamic) {
    var tmp0_subject = typeof dynamic;
    var tmp;
    switch (tmp0_subject) {
      case 'boolean':
      case 'number':
      case 'string':
        tmp = new PrimitiveDynamicInput(dynamic, _this__u8e3s4);
        break;
      default:
        var tmp_0;
        ;
        if (Array.isArray(dynamic)) {
          tmp_0 = new DynamicListInput(dynamic, _this__u8e3s4);
        } else {
          tmp_0 = new DynamicInput(dynamic, _this__u8e3s4);
        }

        tmp = tmp_0;
        break;
    }
    var input = tmp;
    return input.wr(deserializer);
  }
  function coerceInputValue_1($this, descriptor, index, tag) {
    var tmp$ret$1;
    $l$block_1: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var tmp0_tryCoerceValue = $this.s17();
      var tmp1_tryCoerceValue = descriptor.gq(index);
      var tmp;
      if (!tmp1_tryCoerceValue.aq()) {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.DynamicInput.coerceInputValue.<anonymous>' call
        tmp$ret$0 = $this.l1f(tag) == null;
        tmp = tmp$ret$0;
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_1;
      }
      if (equals(tmp1_tryCoerceValue.nq(), ENUM_getInstance())) {
        var tmp$ret$2;
        // Inline function 'kotlinx.serialization.json.internal.DynamicInput.coerceInputValue.<anonymous>' call
        var tmp_0 = $this.l1f(tag);
        tmp$ret$2 = (!(tmp_0 == null) ? typeof tmp_0 === 'string' : false) ? tmp_0 : null;
        var tmp0_elvis_lhs = tmp$ret$2;
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$1 = false;
          break $l$block_1;
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        var enumValue = tmp_1;
        var enumIndex = getJsonNameIndex(tmp1_tryCoerceValue, tmp0_tryCoerceValue, enumValue);
        Companion_getInstance_0();
        if (enumIndex === -3) {
          var tmp$ret$3;
          // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue.<anonymous>' call
          tmp$ret$3 = Unit_getInstance();
          tmp$ret$1 = true;
          break $l$block_1;
        }
      }
      tmp$ret$1 = false;
    }
    return tmp$ret$1;
  }
  function hasName($this, name) {
    return $this.f1f_1[name] !== undefined;
  }
  function absenceIsNull_0($this, descriptor, index) {
    $this.j1f_1 = (!$this.s17().p15_1.j17_1 ? !descriptor.jq(index) : false) ? descriptor.gq(index).aq() : false;
    return $this.j1f_1;
  }
  function throwMissingTag($this, tag) {
    throw SerializationException_init_$Create$('Value for field ' + tag + ' is missing');
  }
  function buildAlternativeNamesMap$ref_1($boundThis) {
    var l = function () {
      return buildAlternativeNamesMap($boundThis);
    };
    l.callableName = 'buildAlternativeNamesMap';
    return l;
  }
  function DynamicInput(value, json) {
    NamedValueDecoder.call(this);
    this.f1f_1 = value;
    this.g1f_1 = json;
    var tmp = this;
    var tmp0_elvis_lhs = this.f1f_1;
    tmp.h1f_1 = Object.keys(tmp0_elvis_lhs == null ? {} : tmp0_elvis_lhs);
    var tmp_0 = this;
    var tmp_1 = this.h1f_1.length;
    tmp_0.i1f_1 = (!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE();
    this.j1f_1 = false;
    this.k1f_1 = 0;
  }
  DynamicInput.prototype.j2 = function () {
    return this.f1f_1;
  };
  DynamicInput.prototype.s17 = function () {
    return this.g1f_1;
  };
  DynamicInput.prototype.y2 = function () {
    return this.h1f_1;
  };
  DynamicInput.prototype.o = function () {
    return this.i1f_1;
  };
  DynamicInput.prototype.vp = function () {
    return this.s17().vp();
  };
  DynamicInput.prototype.t17 = function () {
    var tag = this.n13();
    if (!(tag == null)) {
      return decodeFromDynamic(this.s17(), Companion_getInstance_5().u17(), this.f1f_1[tag]);
    }
    if (this.f1f_1 == null) {
      return JsonNull_getInstance();
    }
    var tmp$ret$0;
    // Inline function 'kotlinx.serialization.json.buildJsonObject' call
    // Inline function 'kotlin.contracts.contract' call
    var builder = new JsonObjectBuilder();
    // Inline function 'kotlinx.serialization.json.internal.DynamicInput.decodeJsonElement.<anonymous>' call
    var inductionVariable = 0;
    var last = this.o();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var key = this.h1f_1[i];
        var value = decodeDynamic(this.s17(), Companion_getInstance_5().u17(), this.f1f_1[key]);
        builder.h18(toString(key), value);
      }
       while (inductionVariable < last);
    tmp$ret$0 = builder.jk();
    return tmp$ret$0;
  };
  DynamicInput.prototype.wr = function (deserializer) {
    return decodeSerializableValuePolymorphic(this, deserializer);
  };
  DynamicInput.prototype.o13 = function (parentName, childName) {
    return childName;
  };
  DynamicInput.prototype.ms = function (descriptor) {
    while (this.k1f_1 < descriptor.lq()) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.k1f_1;
      tmp0_this.k1f_1 = tmp1 + 1 | 0;
      var name = this.i13(descriptor, tmp1);
      var index = this.k1f_1 - 1 | 0;
      this.j1f_1 = false;
      if ((hasName(this, name) ? true : absenceIsNull_0(this, descriptor, index)) ? !this.s17().p15_1.l17_1 ? true : !coerceInputValue_1(this, descriptor, index, name) : false) {
        return index;
      }
    }
    Companion_getInstance_0();
    return -1;
  };
  DynamicInput.prototype.j13 = function (desc, index) {
    var mainName = desc.iq(index);
    if (!this.s17().p15_1.p17_1)
      return mainName;
    if (hasName(this, mainName))
      return mainName;
    var tmp = get_schemaCache(this.s17());
    var tmp_0 = get_JsonAlternativeNamesKey();
    var alternativeNamesMap = tmp.d1a(desc, tmp_0, buildAlternativeNamesMap$ref_1(desc));
    var tmp$ret$2;
    // Inline function 'kotlin.collections.find' call
    var tmp_1 = this.h1f_1;
    var tmp0_find = (!(tmp_1 == null) ? isArray(tmp_1) : false) ? tmp_1 : THROW_CCE();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var indexedObject = tmp0_find;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var element = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.DynamicInput.elementName.<anonymous>' call
        tmp$ret$0 = alternativeNamesMap.x2(element) === index;
        if (tmp$ret$0) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    tmp$ret$2 = tmp$ret$1;
    var nameInObject = tmp$ret$2;
    var tmp0_elvis_lhs = nameInObject;
    return tmp0_elvis_lhs == null ? mainName : tmp0_elvis_lhs;
  };
  DynamicInput.prototype.l1f = function (tag) {
    return this.f1f_1[tag];
  };
  DynamicInput.prototype.e1d = function (tag) {
    var value = this.l1f(tag);
    var tmp;
    if (!(value == null) ? typeof value === 'string' : false) {
      var tmp_0;
      if (value.length === 1) {
        tmp_0 = charSequenceGet(value, 0);
      } else {
        throw SerializationException_init_$Create$('' + value + " can't be represented as Char");
      }
      tmp = tmp_0;
    } else {
      if (isNumber(value)) {
        tmp = numberToChar(value);
      } else {
        throw SerializationException_init_$Create$('' + value + " can't be represented as Char");
      }
    }
    return tmp;
  };
  DynamicInput.prototype.y13 = function (tag) {
    return this.e1d((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  DynamicInput.prototype.b1d = function (tag) {
    var value = this.l1f(tag);
    var tmp0_elvis_lhs = (!(value == null) ? typeof value === 'number' : false) ? value : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw SerializationException_init_$Create$('' + value + ' is not a Number');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var number = tmp;
    return this.m1f(number);
  };
  DynamicInput.prototype.v13 = function (tag) {
    return this.b1d((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  DynamicInput.prototype.m1f = function (number) {
    var tmp;
    if (isFinite_0(number)) {
      var tmp$ret$0;
      // Inline function 'kotlin.math.floor' call
      tmp$ret$0 = Math.floor(number);
      tmp = tmp$ret$0 === number;
    } else {
      tmp = false;
    }
    var canBeConverted = tmp;
    if (!canBeConverted)
      throw SerializationException_init_$Create$('' + number + " can't be represented as Long because it is not finite or has non-zero fractional part");
    var tmp$ret$1;
    // Inline function 'kotlin.math.abs' call
    tmp$ret$1 = Math.abs(number);
    var inBound = tmp$ret$1 <= 9.007199254740991E15;
    if (!inBound)
      throw SerializationException_init_$Create$('' + number + " can't be deserialized to Long due to a potential precision loss");
    return numberToLong(number);
  };
  DynamicInput.prototype.n1f = function (tag) {
    var tmp0_elvis_lhs = this.l1f(tag);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwMissingTag(this, tag);
      tmp = Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var o = tmp;
    return isObject(o) ? o : THROW_CCE();
  };
  DynamicInput.prototype.p13 = function (tag) {
    return this.n1f((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  DynamicInput.prototype.w1c = function (tag) {
    if (this.j1f_1) {
      return false;
    }
    var o = this.l1f(tag);
    if (o === undefined) {
      throwMissingTag(this, tag);
    }
    return o != null;
  };
  DynamicInput.prototype.q13 = function (tag) {
    return this.w1c((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  DynamicInput.prototype.xr = function (descriptor) {
    var tmp0_safe_receiver = this.n13();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.json.internal.DynamicInput.beginStructure.<anonymous>' call
      tmp$ret$0 = this.f1f_1[tmp0_safe_receiver];
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    var currentValue = tmp1_elvis_lhs == null ? this.f1f_1 : tmp1_elvis_lhs;
    var tmp2_subject = descriptor.nq();
    var tmp_0;
    if (tmp2_subject instanceof PolymorphicKind) {
      tmp_0 = this.s17().p15_1.m17_1 ? LIST_getInstance() : MAP_getInstance();
    } else {
      tmp_0 = descriptor.nq();
    }
    var kind = tmp_0;
    var tmp3_subject = kind;
    return equals(tmp3_subject, LIST_getInstance()) ? new DynamicListInput(currentValue, this.s17()) : equals(tmp3_subject, MAP_getInstance()) ? new DynamicMapInput(currentValue, this.s17()) : new DynamicInput(currentValue, this.s17());
  };
  DynamicInput.$metadata$ = classMeta('DynamicInput', [JsonDecoder], undefined, undefined, undefined, NamedValueDecoder.prototype);
  function PrimitiveDynamicInput(value, json) {
    DynamicInput.call(this, value, json);
    this.b14('primitive');
  }
  PrimitiveDynamicInput.prototype.l1f = function (tag) {
    return this.f1f_1;
  };
  PrimitiveDynamicInput.prototype.t17 = function () {
    var str = toString(this.f1f_1);
    var tmp0_subject = typeof this.f1f_1;
    var tmp;
    switch (tmp0_subject) {
      case 'boolean':
        tmp = JsonPrimitive_1(toBoolean(str));
        break;
      case 'number':
        var l = toLongOrNull(str);
        if (!(l == null))
          return JsonPrimitive_0(l);
        var d = toDoubleOrNull(str);
        if (!(d == null))
          return JsonPrimitive_0(d);
        return JsonPrimitive_2(str);
      default:
        tmp = JsonPrimitive_2(str);
        break;
    }
    return tmp;
  };
  PrimitiveDynamicInput.$metadata$ = classMeta('PrimitiveDynamicInput', undefined, undefined, undefined, undefined, DynamicInput.prototype);
  function DynamicListInput(value, json) {
    DynamicInput.call(this, value, json);
    var tmp = this;
    var tmp_0 = value.length;
    tmp.e1g_1 = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
    this.f1g_1 = -1;
  }
  DynamicListInput.prototype.o = function () {
    return this.e1g_1;
  };
  DynamicListInput.prototype.j13 = function (desc, index) {
    return index.toString();
  };
  DynamicListInput.prototype.ms = function (descriptor) {
    while (this.f1g_1 < (this.e1g_1 - 1 | 0)) {
      var tmp0_this = this;
      tmp0_this.f1g_1 = tmp0_this.f1g_1 + 1 | 0;
      var o = this.f1f_1[tmp0_this.f1g_1];
      if (o !== undefined)
        return this.f1g_1;
    }
    Companion_getInstance_0();
    return -1;
  };
  DynamicListInput.prototype.t17 = function () {
    var tag = this.n13();
    if (!(tag == null)) {
      return decodeFromDynamic(this.s17(), Companion_getInstance_5().u17(), this.f1f_1[tag]);
    }
    var tmp$ret$0;
    // Inline function 'kotlinx.serialization.json.buildJsonArray' call
    // Inline function 'kotlin.contracts.contract' call
    var builder = new JsonArrayBuilder();
    // Inline function 'kotlinx.serialization.json.internal.DynamicListInput.decodeJsonElement.<anonymous>' call
    var inductionVariable = 0;
    var last = this.e1g_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        builder.j18(decodeFromDynamic(this.s17(), Companion_getInstance_5().u17(), this.f1f_1[i]));
      }
       while (inductionVariable < last);
    tmp$ret$0 = builder.jk();
    return tmp$ret$0;
  };
  DynamicListInput.$metadata$ = classMeta('DynamicListInput', undefined, undefined, undefined, undefined, DynamicInput.prototype);
  function _get_isKey__g0dpic($this) {
    return ($this.p1g_1 % 2 | 0) === 0;
  }
  function throwIllegalKeyType($this, tag, value, type) {
    throw SerializationException_init_$Create$('Property ' + tag + ' is not valid type ' + type + ': ' + toString(value));
  }
  function DynamicMapInput(value, json) {
    DynamicInput.call(this, value, json);
    var tmp = this;
    var tmp_0 = this.h1f_1.length;
    tmp.o1g_1 = imul((!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE(), 2);
    this.p1g_1 = -1;
  }
  DynamicMapInput.prototype.o = function () {
    return this.o1g_1;
  };
  DynamicMapInput.prototype.j13 = function (desc, index) {
    var i = index / 2 | 0;
    var tmp = this.h1f_1[i];
    return (!(tmp == null) ? typeof tmp === 'string' : false) ? tmp : THROW_CCE();
  };
  DynamicMapInput.prototype.y1c = function (tag) {
    var tmp$ret$1;
    $l$block_0: {
      // Inline function 'kotlinx.serialization.json.internal.DynamicMapInput.decodeMapKey' call
      if (_get_isKey__g0dpic(this)) {
        var value = this.n1f(tag);
        if (!(typeof value === 'string')) {
          var tmp$ret$0;
          // Inline function 'kotlinx.serialization.json.internal.DynamicMapInput.decodeTaggedByte.<anonymous>' call
          tmp$ret$0 = DynamicInput.prototype.s13.call(this, tag);
          tmp$ret$1 = tmp$ret$0;
          break $l$block_0;
        }
        var tmp$ret$2;
        // Inline function 'kotlinx.serialization.json.internal.DynamicMapInput.decodeTaggedByte.<anonymous>' call
        var tmp0__anonymous__q1qw7t = toString(value);
        tmp$ret$2 = toByteOrNull(tmp0__anonymous__q1qw7t);
        var tmp0_elvis_lhs = tmp$ret$2;
        var tmp;
        if (tmp0_elvis_lhs == null) {
          throwIllegalKeyType(this, tag, value, 'byte');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block_0;
      }
      var tmp$ret$3;
      // Inline function 'kotlinx.serialization.json.internal.DynamicMapInput.decodeTaggedByte.<anonymous>' call
      tmp$ret$3 = DynamicInput.prototype.s13.call(this, tag);
      tmp$ret$1 = tmp$ret$3;
    }
    return tmp$ret$1;
  };
  DynamicMapInput.prototype.s13 = function (tag) {
    return this.y1c((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  DynamicMapInput.prototype.z1c = function (tag) {
    var tmp$ret$1;
    $l$block_0: {
      // Inline function 'kotlinx.serialization.json.internal.DynamicMapInput.decodeMapKey' call
      if (_get_isKey__g0dpic(this)) {
        var value = this.n1f(tag);
        if (!(typeof value === 'string')) {
          var tmp$ret$0;
          // Inline function 'kotlinx.serialization.json.internal.DynamicMapInput.decodeTaggedShort.<anonymous>' call
          tmp$ret$0 = DynamicInput.prototype.t13.call(this, tag);
          tmp$ret$1 = tmp$ret$0;
          break $l$block_0;
        }
        var tmp$ret$2;
        // Inline function 'kotlinx.serialization.json.internal.DynamicMapInput.decodeTaggedShort.<anonymous>' call
        var tmp0__anonymous__q1qw7t = toString(value);
        tmp$ret$2 = toShortOrNull(tmp0__anonymous__q1qw7t);
        var tmp0_elvis_lhs = tmp$ret$2;
        var tmp;
        if (tmp0_elvis_lhs == null) {
          throwIllegalKeyType(this, tag, value, 'short');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block_0;
      }
      var tmp$ret$3;
      // Inline function 'kotlinx.serialization.json.internal.DynamicMapInput.decodeTaggedShort.<anonymous>' call
      tmp$ret$3 = DynamicInput.prototype.t13.call(this, tag);
      tmp$ret$1 = tmp$ret$3;
    }
    return tmp$ret$1;
  };
  DynamicMapInput.prototype.t13 = function (tag) {
    return this.z1c((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  DynamicMapInput.prototype.a1d = function (tag) {
    var tmp$ret$1;
    $l$block_0: {
      // Inline function 'kotlinx.serialization.json.internal.DynamicMapInput.decodeMapKey' call
      if (_get_isKey__g0dpic(this)) {
        var value = this.n1f(tag);
        if (!(typeof value === 'string')) {
          var tmp$ret$0;
          // Inline function 'kotlinx.serialization.json.internal.DynamicMapInput.decodeTaggedInt.<anonymous>' call
          tmp$ret$0 = DynamicInput.prototype.u13.call(this, tag);
          tmp$ret$1 = tmp$ret$0;
          break $l$block_0;
        }
        var tmp$ret$2;
        // Inline function 'kotlinx.serialization.json.internal.DynamicMapInput.decodeTaggedInt.<anonymous>' call
        var tmp0__anonymous__q1qw7t = toString(value);
        tmp$ret$2 = toIntOrNull(tmp0__anonymous__q1qw7t);
        var tmp0_elvis_lhs = tmp$ret$2;
        var tmp;
        if (tmp0_elvis_lhs == null) {
          throwIllegalKeyType(this, tag, value, 'int');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block_0;
      }
      var tmp$ret$3;
      // Inline function 'kotlinx.serialization.json.internal.DynamicMapInput.decodeTaggedInt.<anonymous>' call
      tmp$ret$3 = DynamicInput.prototype.u13.call(this, tag);
      tmp$ret$1 = tmp$ret$3;
    }
    return tmp$ret$1;
  };
  DynamicMapInput.prototype.u13 = function (tag) {
    return this.a1d((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  DynamicMapInput.prototype.b1d = function (tag) {
    var tmp$ret$1;
    $l$block_0: {
      // Inline function 'kotlinx.serialization.json.internal.DynamicMapInput.decodeMapKey' call
      if (_get_isKey__g0dpic(this)) {
        var value = this.n1f(tag);
        if (!(typeof value === 'string')) {
          var tmp$ret$0;
          // Inline function 'kotlinx.serialization.json.internal.DynamicMapInput.decodeTaggedLong.<anonymous>' call
          tmp$ret$0 = DynamicInput.prototype.b1d.call(this, tag);
          tmp$ret$1 = tmp$ret$0;
          break $l$block_0;
        }
        var tmp$ret$2;
        // Inline function 'kotlinx.serialization.json.internal.DynamicMapInput.decodeTaggedLong.<anonymous>' call
        var tmp0__anonymous__q1qw7t = toString(value);
        var tmp0_elvis_lhs = toDoubleOrNull(tmp0__anonymous__q1qw7t);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          throwIllegalKeyType(this, tag, tmp0__anonymous__q1qw7t, 'long');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$2 = this.m1f(tmp);
        var tmp0_elvis_lhs_0 = tmp$ret$2;
        var tmp_0;
        if (tmp0_elvis_lhs_0 == null) {
          throwIllegalKeyType(this, tag, value, 'long');
        } else {
          tmp_0 = tmp0_elvis_lhs_0;
        }
        tmp$ret$1 = tmp_0;
        break $l$block_0;
      }
      var tmp$ret$3;
      // Inline function 'kotlinx.serialization.json.internal.DynamicMapInput.decodeTaggedLong.<anonymous>' call
      tmp$ret$3 = DynamicInput.prototype.b1d.call(this, tag);
      tmp$ret$1 = tmp$ret$3;
    }
    return tmp$ret$1;
  };
  DynamicMapInput.prototype.v13 = function (tag) {
    return this.b1d((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  DynamicMapInput.prototype.c1d = function (tag) {
    var tmp$ret$1;
    $l$block_0: {
      // Inline function 'kotlinx.serialization.json.internal.DynamicMapInput.decodeMapKey' call
      if (_get_isKey__g0dpic(this)) {
        var value = this.n1f(tag);
        if (!(typeof value === 'string')) {
          var tmp$ret$0;
          // Inline function 'kotlinx.serialization.json.internal.DynamicMapInput.decodeTaggedFloat.<anonymous>' call
          tmp$ret$0 = DynamicInput.prototype.w13.call(this, tag);
          tmp$ret$1 = tmp$ret$0;
          break $l$block_0;
        }
        var tmp$ret$5;
        // Inline function 'kotlinx.serialization.json.internal.DynamicMapInput.decodeTaggedFloat.<anonymous>' call
        var tmp0__anonymous__q1qw7t = toString(value);
        var tmp$ret$4;
        // Inline function 'kotlin.text.toFloatOrNull' call
        var tmp$ret$3;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp0_unsafeCast = toDoubleOrNull(tmp0__anonymous__q1qw7t);
        var tmp$ret$2;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$2 = tmp0_unsafeCast;
        tmp$ret$3 = tmp$ret$2;
        tmp$ret$4 = tmp$ret$3;
        tmp$ret$5 = tmp$ret$4;
        var tmp0_elvis_lhs = tmp$ret$5;
        var tmp;
        if (tmp0_elvis_lhs == null) {
          throwIllegalKeyType(this, tag, value, 'float');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block_0;
      }
      var tmp$ret$6;
      // Inline function 'kotlinx.serialization.json.internal.DynamicMapInput.decodeTaggedFloat.<anonymous>' call
      tmp$ret$6 = DynamicInput.prototype.w13.call(this, tag);
      tmp$ret$1 = tmp$ret$6;
    }
    return tmp$ret$1;
  };
  DynamicMapInput.prototype.w13 = function (tag) {
    return this.c1d((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  DynamicMapInput.prototype.d1d = function (tag) {
    var tmp$ret$1;
    $l$block_0: {
      // Inline function 'kotlinx.serialization.json.internal.DynamicMapInput.decodeMapKey' call
      if (_get_isKey__g0dpic(this)) {
        var value = this.n1f(tag);
        if (!(typeof value === 'string')) {
          var tmp$ret$0;
          // Inline function 'kotlinx.serialization.json.internal.DynamicMapInput.decodeTaggedDouble.<anonymous>' call
          tmp$ret$0 = DynamicInput.prototype.x13.call(this, tag);
          tmp$ret$1 = tmp$ret$0;
          break $l$block_0;
        }
        var tmp$ret$2;
        // Inline function 'kotlinx.serialization.json.internal.DynamicMapInput.decodeTaggedDouble.<anonymous>' call
        var tmp0__anonymous__q1qw7t = toString(value);
        tmp$ret$2 = toDoubleOrNull(tmp0__anonymous__q1qw7t);
        var tmp0_elvis_lhs = tmp$ret$2;
        var tmp;
        if (tmp0_elvis_lhs == null) {
          throwIllegalKeyType(this, tag, value, 'double');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block_0;
      }
      var tmp$ret$3;
      // Inline function 'kotlinx.serialization.json.internal.DynamicMapInput.decodeTaggedDouble.<anonymous>' call
      tmp$ret$3 = DynamicInput.prototype.x13.call(this, tag);
      tmp$ret$1 = tmp$ret$3;
    }
    return tmp$ret$1;
  };
  DynamicMapInput.prototype.x13 = function (tag) {
    return this.d1d((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  DynamicMapInput.prototype.ms = function (descriptor) {
    while (this.p1g_1 < (this.o1g_1 - 1 | 0)) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.p1g_1;
      tmp0_this.p1g_1 = tmp1 + 1 | 0;
      var i = tmp1 / 2 | 0;
      var tmp = this.h1f_1[i];
      var name = (!(tmp == null) ? typeof tmp === 'string' : false) ? tmp : THROW_CCE();
      if (this.f1f_1[name] !== undefined)
        return this.p1g_1;
    }
    Companion_getInstance_0();
    return -1;
  };
  DynamicMapInput.prototype.l1f = function (tag) {
    return (this.p1g_1 % 2 | 0) === 0 ? tag : this.f1f_1[tag];
  };
  DynamicMapInput.$metadata$ = classMeta('DynamicMapInput', undefined, undefined, undefined, undefined, DynamicInput.prototype);
  function JsonStringBuilder() {
    this.e16_1 = StringBuilder_init_$Create$_0(128);
  }
  JsonStringBuilder.prototype.w10 = function (value) {
    this.e16_1.ph(value);
  };
  JsonStringBuilder.prototype.vz = function (ch) {
    this.e16_1.k8(ch);
  };
  JsonStringBuilder.prototype.j19 = function (string) {
    this.e16_1.qh(string);
  };
  JsonStringBuilder.prototype.s19 = function (string) {
    printQuoted(this.e16_1, string);
  };
  JsonStringBuilder.prototype.toString = function () {
    return this.e16_1.toString();
  };
  JsonStringBuilder.prototype.f16 = function () {
  };
  JsonStringBuilder.$metadata$ = classMeta('JsonStringBuilder');
  function createMapForCache(initialCapacity) {
    return HashMap_init_$Create$(initialCapacity);
  }
  //region block: post-declaration
  defer$1.prototype.aq = get_isNullable;
  defer$1.prototype.mq = get_isInline;
  defer$1.prototype.kq = get_annotations;
  PolymorphismValidator.prototype.j15 = contextual;
  StreamingJsonDecoder.prototype.ls = decodeSequentially;
  StreamingJsonDecoder.prototype.ns = decodeCollectionSize;
  StreamingJsonDecoder.prototype.js = decodeSerializableElement$default;
  JsonDecoderForUnsignedTypes.prototype.wr = decodeSerializableValue;
  JsonDecoderForUnsignedTypes.prototype.js = decodeSerializableElement$default;
  JsonDecoderForUnsignedTypes.prototype.ls = decodeSequentially;
  JsonDecoderForUnsignedTypes.prototype.ns = decodeCollectionSize;
  StreamingJsonEncoder.prototype.ot = encodeNotNullMark;
  StreamingJsonEncoder.prototype.pt = beginCollection;
  StreamingJsonEncoder.prototype.nt = encodeNullableSerializableValue;
  AbstractJsonTreeDecoder.prototype.js = decodeSerializableElement$default;
  AbstractJsonTreeDecoder.prototype.ls = decodeSequentially;
  AbstractJsonTreeDecoder.prototype.ns = decodeCollectionSize;
  JsonTreeDecoder.prototype.js = decodeSerializableElement$default;
  JsonTreeDecoder.prototype.ls = decodeSequentially;
  JsonTreeDecoder.prototype.ns = decodeCollectionSize;
  JsonTreeListDecoder.prototype.js = decodeSerializableElement$default;
  JsonTreeListDecoder.prototype.ls = decodeSequentially;
  JsonTreeListDecoder.prototype.ns = decodeCollectionSize;
  JsonTreeMapDecoder.prototype.js = decodeSerializableElement$default;
  JsonTreeMapDecoder.prototype.ls = decodeSequentially;
  JsonTreeMapDecoder.prototype.ns = decodeCollectionSize;
  DynamicInput.prototype.js = decodeSerializableElement$default;
  DynamicInput.prototype.ls = decodeSequentially;
  DynamicInput.prototype.ns = decodeCollectionSize;
  PrimitiveDynamicInput.prototype.js = decodeSerializableElement$default;
  PrimitiveDynamicInput.prototype.ls = decodeSequentially;
  PrimitiveDynamicInput.prototype.ns = decodeCollectionSize;
  DynamicListInput.prototype.js = decodeSerializableElement$default;
  DynamicListInput.prototype.ls = decodeSequentially;
  DynamicListInput.prototype.ns = decodeCollectionSize;
  DynamicMapInput.prototype.js = decodeSerializableElement$default;
  DynamicMapInput.prototype.ls = decodeSequentially;
  DynamicMapInput.prototype.ns = decodeCollectionSize;
  //endregion
  //region block: init
  COLON = _Char___init__impl__6a9atx(58);
  INVALID = _Char___init__impl__6a9atx(0);
  COMMA = _Char___init__impl__6a9atx(44);
  NULL = 'null';
  BEGIN_OBJ = _Char___init__impl__6a9atx(123);
  END_OBJ = _Char___init__impl__6a9atx(125);
  BEGIN_LIST = _Char___init__impl__6a9atx(91);
  END_LIST = _Char___init__impl__6a9atx(93);
  TC_WHITESPACE = 3;
  TC_EOF = 10;
  STRING = _Char___init__impl__6a9atx(34);
  TC_STRING = 1;
  STRING_ESC = _Char___init__impl__6a9atx(92);
  TC_COMMA = 4;
  lenientHint = "Use 'isLenient = true' in 'Json {}` builder to accept non-compliant JSON.";
  TC_COLON = 5;
  TC_BEGIN_OBJ = 6;
  TC_END_OBJ = 7;
  TC_BEGIN_LIST = 8;
  TC_END_LIST = 9;
  TC_OTHER = 0;
  ignoreUnknownKeysHint = "Use 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.";
  specialFlowingValuesHint = "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'";
  allowStructuredMapKeysHint = "Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.";
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Json$default;
  _.$_$.b = decodeFromDynamic;
  _.$_$.c = get_floatOrNull;
  _.$_$.d = get_jsonArray;
  _.$_$.e = get_jsonObject;
  _.$_$.f = get_jsonPrimitive;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-json-js-ir.js.map
