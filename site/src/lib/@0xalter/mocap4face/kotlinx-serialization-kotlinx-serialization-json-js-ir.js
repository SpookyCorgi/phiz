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
  var Char = kotlin_kotlin.$_$.qa;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.c2;
  var equals = kotlin_kotlin.$_$.w7;
  var Annotation = kotlin_kotlin.$_$.pa;
  var Decoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w1;
  var CompositeDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s1;
  var interfaceMeta = kotlin_kotlin.$_$.d8;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.i1;
  var THROW_CCE = kotlin_kotlin.$_$.cb;
  var hashCode = kotlin_kotlin.$_$.c8;
  var joinToString$default = kotlin_kotlin.$_$.h;
  var Map = kotlin_kotlin.$_$.h4;
  var List = kotlin_kotlin.$_$.f4;
  var toDoubleOrNull = kotlin_kotlin.$_$.y9;
  var getKClassFromExpression = kotlin_kotlin.$_$.c;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.f;
  var lazy = kotlin_kotlin.$_$.sb;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m2;
  var getStringHashCode = kotlin_kotlin.$_$.b8;
  var toInt = kotlin_kotlin.$_$.ca;
  var toLong = kotlin_kotlin.$_$.ea;
  var toDouble = kotlin_kotlin.$_$.z9;
  var toLongOrNull = kotlin_kotlin.$_$.da;
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
  var toULongOrNull = kotlin_kotlin.$_$.ka;
  var Companion_getInstance = kotlin_kotlin.$_$.l3;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e1;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.t2;
  var ULong = kotlin_kotlin.$_$.hb;
  var isInterface = kotlin_kotlin.$_$.m8;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.w1;
  var lazy_0 = kotlin_kotlin.$_$.tb;
  var get_isNullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k1;
  var get_isInline = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j1;
  var get_annotations = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i1;
  var KProperty1 = kotlin_kotlin.$_$.j9;
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
  var singleOrNull = kotlin_kotlin.$_$.o6;
  var arrayIterator = kotlin_kotlin.$_$.l7;
  var ensureNotNull = kotlin_kotlin.$_$.ob;
  var emptyMap = kotlin_kotlin.$_$.m5;
  var getValue = kotlin_kotlin.$_$.q5;
  var DeepRecursiveFunction = kotlin_kotlin.$_$.ta;
  var invoke = kotlin_kotlin.$_$.pb;
  var CoroutineImpl = kotlin_kotlin.$_$.i7;
  var DeepRecursiveScope = kotlin_kotlin.$_$.ua;
  var Unit = kotlin_kotlin.$_$.jb;
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
  var IllegalArgumentException = kotlin_kotlin.$_$.xa;
  var isFinite = kotlin_kotlin.$_$.rb;
  var isFinite_0 = kotlin_kotlin.$_$.qb;
  var decodeSequentially = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r1;
  var decodeCollectionSize = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q1;
  var decodeSerializableElement$default = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var toUInt = kotlin_kotlin.$_$.ja;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.q2;
  var toULong = kotlin_kotlin.$_$.la;
  var toUByte = kotlin_kotlin.$_$.ia;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.j2;
  var toUShort = kotlin_kotlin.$_$.ma;
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
  var setOf = kotlin_kotlin.$_$.n6;
  var numberToChar = kotlin_kotlin.$_$.u8;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.g2;
  var equals_0 = kotlin_kotlin.$_$.m9;
  var toByte = kotlin_kotlin.$_$.y8;
  var NamedValueDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k2;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.r1;
  var ByteCompanionObject_getInstance = kotlin_kotlin.$_$.z2;
  var ShortCompanionObject_getInstance = kotlin_kotlin.$_$.d3;
  var toShort = kotlin_kotlin.$_$.a9;
  var single = kotlin_kotlin.$_$.s9;
  var emptySet = kotlin_kotlin.$_$.n5;
  var plus = kotlin_kotlin.$_$.h6;
  var toList = kotlin_kotlin.$_$.x6;
  var Enum = kotlin_kotlin.$_$.va;
  var getContextualDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n1;
  var last = kotlin_kotlin.$_$.z5;
  var removeLast = kotlin_kotlin.$_$.l6;
  var lastIndexOf$default = kotlin_kotlin.$_$.o;
  var Long = kotlin_kotlin.$_$.za;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.d2;
  var Companion_getInstance_4 = kotlin_kotlin.$_$.i3;
  var charArray = kotlin_kotlin.$_$.p7;
  var indexOf$default = kotlin_kotlin.$_$.l;
  var SerializationException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var isArray = kotlin_kotlin.$_$.e8;
  var isNumber = kotlin_kotlin.$_$.o8;
  var numberToLong = kotlin_kotlin.$_$.w8;
  var toBoolean = kotlin_kotlin.$_$.v9;
  var toByteOrNull = kotlin_kotlin.$_$.w9;
  var toShortOrNull = kotlin_kotlin.$_$.fa;
  var toIntOrNull = kotlin_kotlin.$_$.ba;
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
    this.n15_1 = configuration;
    this.o15_1 = serializersModule;
    this.p15_1 = new DescriptorSchemaCache();
  }
  Json.prototype.q15 = function () {
    return this.n15_1;
  };
  Json.prototype.tp = function () {
    return this.o15_1;
  };
  Json.prototype.r15 = function (serializer, value) {
    var result = new JsonStringBuilder();
    try {
      var tmp = WriteMode_OBJ_getInstance();
      var tmp$ret$0;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp0_arrayOfNulls = values().length;
      tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
      var encoder = StreamingJsonEncoder_init_$Create$(result, this, tmp, tmp$ret$0);
      encoder.jt(serializer, value);
      return result.toString();
    }finally {
      result.d16();
    }
  };
  Json.prototype.s15 = function (deserializer, string) {
    var lexer = new StringJsonLexer(string);
    var input = new StreamingJsonDecoder(this, WriteMode_OBJ_getInstance(), lexer, deserializer.zo());
    var result = input.ur(deserializer);
    lexer.o16();
    return result;
  };
  Json.prototype.t15 = function (string) {
    return this.s15(JsonElementSerializer_getInstance(), string);
  };
  Json.$metadata$ = classMeta('Json', [StringFormat]);
  function Json_0(from, builderAction) {
    var builder = new JsonBuilder(from);
    builderAction(builder);
    var conf = builder.hk();
    return new JsonImpl(conf, builder.b17_1);
  }
  function Json$default(from, builderAction, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      from = Default_getInstance();
    return Json_0(from, builderAction);
  }
  function JsonBuilder(json) {
    this.p16_1 = json.n15_1.c17_1;
    this.q16_1 = json.n15_1.h17_1;
    this.r16_1 = json.n15_1.d17_1;
    this.s16_1 = json.n15_1.e17_1;
    this.t16_1 = json.n15_1.f17_1;
    this.u16_1 = json.n15_1.g17_1;
    this.v16_1 = json.n15_1.i17_1;
    this.w16_1 = json.n15_1.j17_1;
    this.x16_1 = json.n15_1.k17_1;
    this.y16_1 = json.n15_1.l17_1;
    this.z16_1 = json.n15_1.m17_1;
    this.a17_1 = json.n15_1.n17_1;
    this.b17_1 = json.tp();
  }
  JsonBuilder.prototype.o17 = function () {
    return this.v16_1;
  };
  JsonBuilder.prototype.hk = function () {
    if (this.x16_1) {
      // Inline function 'kotlin.require' call
      var tmp0_require = this.y16_1 === 'type';
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_require) {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        tmp$ret$0 = 'Class discriminator should not be specified when array polymorphism is specified';
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    if (!this.u16_1) {
      // Inline function 'kotlin.require' call
      var tmp1_require = this.v16_1 === '    ';
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp1_require) {
        var tmp$ret$1;
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        tmp$ret$1 = 'Indent should not be specified when default printing mode is used';
        var message_0 = tmp$ret$1;
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
    } else if (!(this.v16_1 === '    ')) {
      var tmp$ret$3;
      $l$block: {
        // Inline function 'kotlin.text.all' call
        var tmp2_all = this.v16_1;
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
        tmp$ret$4 = 'Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had ' + this.v16_1;
        var message_1 = tmp$ret$4;
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    }
    return new JsonConfiguration(this.p16_1, this.r16_1, this.s16_1, this.t16_1, this.u16_1, this.q16_1, this.v16_1, this.w16_1, this.x16_1, this.y16_1, this.z16_1, this.a17_1);
  };
  JsonBuilder.$metadata$ = classMeta('JsonBuilder');
  function validateConfiguration($this) {
    if (equals($this.tp(), get_EmptySerializersModule()))
      return Unit_getInstance();
    var collector = new PolymorphismValidator($this.n15_1.k17_1, $this.n15_1.l17_1);
    $this.tp().y14(collector);
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
    this.c17_1 = encodeDefaults;
    this.d17_1 = ignoreUnknownKeys;
    this.e17_1 = isLenient;
    this.f17_1 = allowStructuredMapKeys;
    this.g17_1 = prettyPrint;
    this.h17_1 = explicitNulls;
    this.i17_1 = prettyPrintIndent;
    this.j17_1 = coerceInputValues;
    this.k17_1 = useArrayPolymorphism;
    this.l17_1 = classDiscriminator;
    this.m17_1 = allowSpecialFloatingPointValues;
    this.n17_1 = useAlternativeNames;
  }
  JsonConfiguration.prototype.p17 = function () {
    return this.e17_1;
  };
  JsonConfiguration.prototype.o17 = function () {
    return this.i17_1;
  };
  JsonConfiguration.prototype.toString = function () {
    return 'JsonConfiguration(encodeDefaults=' + this.c17_1 + ', ignoreUnknownKeys=' + this.d17_1 + ', isLenient=' + this.e17_1 + ', ' + ('allowStructuredMapKeys=' + this.f17_1 + ', prettyPrint=' + this.g17_1 + ', explicitNulls=' + this.h17_1 + ', ') + ("prettyPrintIndent='" + this.i17_1 + "', coerceInputValues=" + this.j17_1 + ', useArrayPolymorphism=' + this.k17_1 + ', ') + ("classDiscriminator='" + this.l17_1 + "', allowSpecialFloatingPointValues=" + this.m17_1 + ')');
  };
  JsonConfiguration.$metadata$ = classMeta('JsonConfiguration');
  function JsonDecoder() {
  }
  JsonDecoder.$metadata$ = interfaceMeta('JsonDecoder', [Decoder, CompositeDecoder]);
  function Companion() {
    Companion_instance = this;
  }
  Companion.prototype.s17 = function () {
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
    tmp0_apply.j8(_Char___init__impl__6a9atx(58));
    tmp0_apply.oh(v);
    tmp$ret$2 = tmp0_apply;
    tmp$ret$3 = tmp$ret$2.toString();
    return tmp$ret$3;
  }
  function JsonObject(content) {
    Companion_getInstance_6();
    JsonElement.call(this);
    this.t17_1 = content;
  }
  JsonObject.prototype.u17 = function (key) {
    return this.t17_1.r2(key);
  };
  JsonObject.prototype.r2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.u17((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  JsonObject.prototype.v17 = function (key) {
    return this.t17_1.x2(key);
  };
  JsonObject.prototype.x2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.v17((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  JsonObject.prototype.d = function () {
    return this.t17_1.d();
  };
  JsonObject.prototype.v = function () {
    return this.t17_1.v();
  };
  JsonObject.prototype.y2 = function () {
    return this.t17_1.y2();
  };
  JsonObject.prototype.o = function () {
    return this.t17_1.o();
  };
  JsonObject.prototype.z2 = function () {
    return this.t17_1.z2();
  };
  JsonObject.prototype.equals = function (other) {
    return equals(this.t17_1, other);
  };
  JsonObject.prototype.hashCode = function () {
    return hashCode(this.t17_1);
  };
  JsonObject.prototype.toString = function () {
    var tmp = this.t17_1.v();
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
    this.w17_1 = content;
  }
  JsonArray.prototype.x17 = function (elements) {
    return this.w17_1.l1(elements);
  };
  JsonArray.prototype.l1 = function (elements) {
    return this.x17(elements);
  };
  JsonArray.prototype.p = function (index) {
    return this.w17_1.p(index);
  };
  JsonArray.prototype.d = function () {
    return this.w17_1.d();
  };
  JsonArray.prototype.l = function () {
    return this.w17_1.l();
  };
  JsonArray.prototype.r = function (index) {
    return this.w17_1.r(index);
  };
  JsonArray.prototype.o = function () {
    return this.w17_1.o();
  };
  JsonArray.prototype.equals = function (other) {
    return equals(this.w17_1, other);
  };
  JsonArray.prototype.hashCode = function () {
    return hashCode(this.w17_1);
  };
  JsonArray.prototype.toString = function () {
    return joinToString$default(this.w17_1, ',', '[', ']', 0, null, null, 56, null);
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
    return this.y17();
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
    var tmp0_toFloatOrNull = _this__u8e3s4.y17();
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
    this.z17_1 = 'null';
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.a18_1 = lazy(tmp_0, JsonNull$$cachedSerializer$delegate$_anonymous__7w2ks1);
  }
  JsonNull.prototype.y17 = function () {
    return this.z17_1;
  };
  JsonNull.prototype.s17 = function () {
    return this.a18_1.j2();
  };
  JsonNull.prototype.lz = function (typeParamsSerializers) {
    return this.s17();
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
    this.b18_1 = isString;
    this.c18_1 = toString(body);
  }
  JsonLiteral.prototype.y17 = function () {
    return this.c18_1;
  };
  JsonLiteral.prototype.toString = function () {
    var tmp;
    if (this.b18_1) {
      var tmp$ret$1;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'kotlin.apply' call
      var tmp0_apply = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.json.JsonLiteral.toString.<anonymous>' call
      printQuoted(tmp0_apply, this.c18_1);
      tmp$ret$0 = tmp0_apply;
      tmp$ret$1 = tmp$ret$0.toString();
      tmp = tmp$ret$1;
    } else {
      tmp = this.c18_1;
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
    if (!(this.b18_1 === other.b18_1))
      return false;
    if (!(this.c18_1 === other.c18_1))
      return false;
    return true;
  };
  JsonLiteral.prototype.hashCode = function () {
    var result = this.b18_1 | 0;
    result = imul(31, result) + getStringHashCode(this.c18_1) | 0;
    return result;
  };
  JsonLiteral.$metadata$ = classMeta('JsonLiteral', undefined, undefined, undefined, undefined, JsonPrimitive.prototype);
  function get_booleanOrNull(_this__u8e3s4) {
    return toBooleanStrictOrNull(_this__u8e3s4.y17());
  }
  function get_int(_this__u8e3s4) {
    return toInt(_this__u8e3s4.y17());
  }
  function get_long(_this__u8e3s4) {
    return toLong(_this__u8e3s4.y17());
  }
  function get_float(_this__u8e3s4) {
    var tmp$ret$2;
    // Inline function 'kotlin.text.toFloat' call
    var tmp0_toFloat = _this__u8e3s4.y17();
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
    return toDouble(_this__u8e3s4.y17());
  }
  function get_contentOrNull(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof JsonNull) {
      tmp = null;
    } else {
      tmp = _this__u8e3s4.y17();
    }
    return tmp;
  }
  function get_longOrNull(_this__u8e3s4) {
    return toLongOrNull(_this__u8e3s4.y17());
  }
  function get_doubleOrNull(_this__u8e3s4) {
    return toDoubleOrNull(_this__u8e3s4.y17());
  }
  function buildJsonObject(builderAction) {
    // Inline function 'kotlin.contracts.contract' call
    var builder = new JsonObjectBuilder();
    builderAction(builder);
    return builder.hk();
  }
  function JsonObjectBuilder() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.linkedMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    tmp.d18_1 = tmp$ret$0;
  }
  JsonObjectBuilder.prototype.e18 = function (key, element) {
    return this.d18_1.s(key, element);
  };
  JsonObjectBuilder.prototype.hk = function () {
    return new JsonObject(this.d18_1);
  };
  JsonObjectBuilder.$metadata$ = classMeta('JsonObjectBuilder');
  function buildJsonArray(builderAction) {
    // Inline function 'kotlin.contracts.contract' call
    var builder = new JsonArrayBuilder();
    builderAction(builder);
    return builder.hk();
  }
  function JsonArrayBuilder() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.f18_1 = tmp$ret$0;
  }
  JsonArrayBuilder.prototype.g18 = function (element) {
    var tmp0_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp0_plusAssign = tmp0_this.f18_1;
    tmp0_plusAssign.g(element);
    return true;
  };
  JsonArrayBuilder.prototype.hk = function () {
    return new JsonArray(this.f18_1);
  };
  JsonArrayBuilder.$metadata$ = classMeta('JsonArrayBuilder');
  function JsonElementSerializer$descriptor$lambda($this$buildSerialDescriptor) {
    var tmp = defer(JsonElementSerializer$descriptor$lambda$lambda);
    $this$buildSerialDescriptor.kp('JsonPrimitive', tmp, null, false, 12, null);
    var tmp_0 = defer(JsonElementSerializer$descriptor$lambda$lambda_0);
    $this$buildSerialDescriptor.kp('JsonNull', tmp_0, null, false, 12, null);
    var tmp_1 = defer(JsonElementSerializer$descriptor$lambda$lambda_1);
    $this$buildSerialDescriptor.kp('JsonLiteral', tmp_1, null, false, 12, null);
    var tmp_2 = defer(JsonElementSerializer$descriptor$lambda$lambda_2);
    $this$buildSerialDescriptor.kp('JsonObject', tmp_2, null, false, 12, null);
    var tmp_3 = defer(JsonElementSerializer$descriptor$lambda$lambda_3);
    $this$buildSerialDescriptor.kp('JsonArray', tmp_3, null, false, 12, null);
    return Unit_getInstance();
  }
  function JsonElementSerializer$descriptor$lambda$lambda() {
    return JsonPrimitiveSerializer_getInstance().h18_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_0() {
    return JsonNullSerializer_getInstance().i18_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_1() {
    return JsonLiteralSerializer_getInstance().j18_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_2() {
    return JsonObjectSerializer_getInstance().k18_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_3() {
    return JsonArraySerializer_getInstance().l18_1;
  }
  function JsonElementSerializer() {
    JsonElementSerializer_instance = this;
    var tmp = this;
    var tmp_0 = SEALED_getInstance();
    tmp.m18_1 = buildSerialDescriptor$default('kotlinx.serialization.json.JsonElement', tmp_0, [], JsonElementSerializer$descriptor$lambda, 4, null);
  }
  JsonElementSerializer.prototype.zo = function () {
    return this.m18_1;
  };
  JsonElementSerializer.prototype.n18 = function (encoder, value) {
    verify(encoder);
    var tmp0_subject = value;
    if (tmp0_subject instanceof JsonPrimitive) {
      encoder.jt(JsonPrimitiveSerializer_getInstance(), value);
    } else {
      if (tmp0_subject instanceof JsonObject) {
        encoder.jt(JsonObjectSerializer_getInstance(), value);
      } else {
        if (tmp0_subject instanceof JsonArray) {
          encoder.jt(JsonArraySerializer_getInstance(), value);
        }
      }
    }
  };
  JsonElementSerializer.prototype.ap = function (encoder, value) {
    return this.n18(encoder, value instanceof JsonElement ? value : THROW_CCE());
  };
  JsonElementSerializer.prototype.bp = function (decoder) {
    var input = asJsonDecoder(decoder);
    return input.r17();
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
    this.o18_1 = MapSerializer(serializer(StringCompanionObject_getInstance()), JsonElementSerializer_getInstance()).zo();
    this.p18_1 = 'kotlinx.serialization.json.JsonObject';
  }
  JsonObjectDescriptor.prototype.dq = function (index) {
    return this.o18_1.dq(index);
  };
  JsonObjectDescriptor.prototype.eq = function (index) {
    return this.o18_1.eq(index);
  };
  JsonObjectDescriptor.prototype.fq = function (name) {
    return this.o18_1.fq(name);
  };
  JsonObjectDescriptor.prototype.gq = function (index) {
    return this.o18_1.gq(index);
  };
  JsonObjectDescriptor.prototype.hq = function (index) {
    return this.o18_1.hq(index);
  };
  JsonObjectDescriptor.prototype.iq = function () {
    return this.o18_1.iq();
  };
  JsonObjectDescriptor.prototype.jq = function () {
    return this.o18_1.jq();
  };
  JsonObjectDescriptor.prototype.kq = function () {
    return this.o18_1.kq();
  };
  JsonObjectDescriptor.prototype.yp = function () {
    return this.o18_1.yp();
  };
  JsonObjectDescriptor.prototype.lq = function () {
    return this.o18_1.lq();
  };
  JsonObjectDescriptor.prototype.cq = function () {
    return this.p18_1;
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
    this.k18_1 = JsonObjectDescriptor_getInstance();
  }
  JsonObjectSerializer.prototype.zo = function () {
    return this.k18_1;
  };
  JsonObjectSerializer.prototype.q18 = function (encoder, value) {
    verify(encoder);
    MapSerializer(serializer(StringCompanionObject_getInstance()), JsonElementSerializer_getInstance()).ap(encoder, value);
  };
  JsonObjectSerializer.prototype.ap = function (encoder, value) {
    return this.q18(encoder, value instanceof JsonObject ? value : THROW_CCE());
  };
  JsonObjectSerializer.prototype.bp = function (decoder) {
    verify_0(decoder);
    return new JsonObject(MapSerializer(serializer(StringCompanionObject_getInstance()), JsonElementSerializer_getInstance()).bp(decoder));
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
    this.r18_1 = ListSerializer(JsonElementSerializer_getInstance()).zo();
    this.s18_1 = 'kotlinx.serialization.json.JsonArray';
  }
  JsonArrayDescriptor.prototype.dq = function (index) {
    return this.r18_1.dq(index);
  };
  JsonArrayDescriptor.prototype.eq = function (index) {
    return this.r18_1.eq(index);
  };
  JsonArrayDescriptor.prototype.fq = function (name) {
    return this.r18_1.fq(name);
  };
  JsonArrayDescriptor.prototype.gq = function (index) {
    return this.r18_1.gq(index);
  };
  JsonArrayDescriptor.prototype.hq = function (index) {
    return this.r18_1.hq(index);
  };
  JsonArrayDescriptor.prototype.iq = function () {
    return this.r18_1.iq();
  };
  JsonArrayDescriptor.prototype.jq = function () {
    return this.r18_1.jq();
  };
  JsonArrayDescriptor.prototype.kq = function () {
    return this.r18_1.kq();
  };
  JsonArrayDescriptor.prototype.yp = function () {
    return this.r18_1.yp();
  };
  JsonArrayDescriptor.prototype.lq = function () {
    return this.r18_1.lq();
  };
  JsonArrayDescriptor.prototype.cq = function () {
    return this.s18_1;
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
    this.l18_1 = JsonArrayDescriptor_getInstance();
  }
  JsonArraySerializer.prototype.zo = function () {
    return this.l18_1;
  };
  JsonArraySerializer.prototype.t18 = function (encoder, value) {
    verify(encoder);
    ListSerializer(JsonElementSerializer_getInstance()).ap(encoder, value);
  };
  JsonArraySerializer.prototype.ap = function (encoder, value) {
    return this.t18(encoder, value instanceof JsonArray ? value : THROW_CCE());
  };
  JsonArraySerializer.prototype.bp = function (decoder) {
    verify_0(decoder);
    return new JsonArray(ListSerializer(JsonElementSerializer_getInstance()).bp(decoder));
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
    tmp.h18_1 = buildSerialDescriptor$default('kotlinx.serialization.json.JsonPrimitive', tmp_0, [], null, 12, null);
  }
  JsonPrimitiveSerializer.prototype.zo = function () {
    return this.h18_1;
  };
  JsonPrimitiveSerializer.prototype.u18 = function (encoder, value) {
    verify(encoder);
    var tmp;
    if (value instanceof JsonNull) {
      encoder.jt(JsonNullSerializer_getInstance(), JsonNull_getInstance());
      tmp = Unit_getInstance();
    } else {
      var tmp_0 = JsonLiteralSerializer_getInstance();
      encoder.jt(tmp_0, value instanceof JsonLiteral ? value : THROW_CCE());
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  JsonPrimitiveSerializer.prototype.ap = function (encoder, value) {
    return this.u18(encoder, value instanceof JsonPrimitive ? value : THROW_CCE());
  };
  JsonPrimitiveSerializer.prototype.bp = function (decoder) {
    var result = asJsonDecoder(decoder).r17();
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
    tmp.i18_1 = buildSerialDescriptor$default('kotlinx.serialization.json.JsonNull', tmp_0, [], null, 12, null);
  }
  JsonNullSerializer.prototype.zo = function () {
    return this.i18_1;
  };
  JsonNullSerializer.prototype.v18 = function (encoder, value) {
    verify(encoder);
    encoder.os();
  };
  JsonNullSerializer.prototype.ap = function (encoder, value) {
    return this.v18(encoder, value instanceof JsonNull ? value : THROW_CCE());
  };
  JsonNullSerializer.prototype.bp = function (decoder) {
    verify_0(decoder);
    if (decoder.hr()) {
      throw new JsonDecodingException("Expected 'null' literal");
    }
    decoder.ir();
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
    this.j18_1 = PrimitiveSerialDescriptor('kotlinx.serialization.json.JsonLiteral', STRING_getInstance());
  }
  JsonLiteralSerializer.prototype.zo = function () {
    return this.j18_1;
  };
  JsonLiteralSerializer.prototype.w18 = function (encoder, value) {
    verify(encoder);
    if (value.b18_1) {
      return encoder.xs(value.c18_1);
    }
    var tmp0_safe_receiver = get_longOrNull(value);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return encoder.ts(tmp0_safe_receiver);
    }
    var tmp1_safe_receiver = toULongOrNull(value.c18_1);
    var tmp = tmp1_safe_receiver;
    if ((tmp == null ? null : new ULong(tmp)) == null)
      null;
    else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_0 = encoder.ys(serializer_0(Companion_getInstance()).zo());
      var tmp$ret$1;
      // Inline function 'kotlin.ULong.toLong' call
      tmp$ret$1 = _ULong___get_data__impl__fggpzb(tmp1_safe_receiver);
      tmp_0.ts(tmp$ret$1);
      return Unit_getInstance();
    }
    var tmp2_safe_receiver = get_doubleOrNull(value);
    if (tmp2_safe_receiver == null)
      null;
    else {
      var tmp$ret$3;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return encoder.vs(tmp2_safe_receiver);
    }
    var tmp3_safe_receiver = get_booleanOrNull(value);
    if (tmp3_safe_receiver == null)
      null;
    else {
      var tmp$ret$4;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return encoder.ps(tmp3_safe_receiver);
    }
    encoder.xs(value.c18_1);
  };
  JsonLiteralSerializer.prototype.ap = function (encoder, value) {
    return this.w18(encoder, value instanceof JsonLiteral ? value : THROW_CCE());
  };
  JsonLiteralSerializer.prototype.bp = function (decoder) {
    var result = asJsonDecoder(decoder).r17();
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
    tmp$ret$0 = $this.x18_1.j2();
    return tmp$ret$0;
  }
  function defer$1($deferred) {
    this.x18_1 = lazy_0($deferred);
  }
  defer$1.prototype.cq = function () {
    return _get_original__l7ku1m(this).cq();
  };
  defer$1.prototype.lq = function () {
    return _get_original__l7ku1m(this).lq();
  };
  defer$1.prototype.jq = function () {
    return _get_original__l7ku1m(this).jq();
  };
  defer$1.prototype.gq = function (index) {
    return _get_original__l7ku1m(this).gq(index);
  };
  defer$1.prototype.fq = function (name) {
    return _get_original__l7ku1m(this).fq(name);
  };
  defer$1.prototype.dq = function (index) {
    return _get_original__l7ku1m(this).dq(index);
  };
  defer$1.prototype.eq = function (index) {
    return _get_original__l7ku1m(this).eq(index);
  };
  defer$1.prototype.hq = function (index) {
    return _get_original__l7ku1m(this).hq(index);
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
    this.y18_1 = sb;
    this.z18_1 = true;
  }
  Composer.prototype.a19 = function () {
    this.z18_1 = true;
  };
  Composer.prototype.b19 = function () {
    return Unit_getInstance();
  };
  Composer.prototype.c19 = function () {
    this.z18_1 = false;
  };
  Composer.prototype.d19 = function () {
    return Unit_getInstance();
  };
  Composer.prototype.e19 = function (v) {
    return this.y18_1.tz(v);
  };
  Composer.prototype.f19 = function (v) {
    return this.y18_1.g19(v);
  };
  Composer.prototype.h19 = function (v) {
    return this.y18_1.g19(v.toString());
  };
  Composer.prototype.i19 = function (v) {
    return this.y18_1.g19(v.toString());
  };
  Composer.prototype.j19 = function (v) {
    return this.y18_1.u10(toLong_0(v));
  };
  Composer.prototype.k19 = function (v) {
    return this.y18_1.u10(toLong_0(v));
  };
  Composer.prototype.l19 = function (v) {
    return this.y18_1.u10(toLong_0(v));
  };
  Composer.prototype.m19 = function (v) {
    return this.y18_1.u10(v);
  };
  Composer.prototype.n19 = function (v) {
    return this.y18_1.g19(v.toString());
  };
  Composer.prototype.o19 = function (value) {
    return this.y18_1.p19(value);
  };
  Composer.$metadata$ = classMeta('Composer');
  function Composer_0(sb, json) {
    return json.n15_1.g17_1 ? new ComposerWithPrettyPrint(sb, json) : new Composer(sb);
  }
  function ComposerForUnsignedNumbers(sb) {
    Composer.call(this, sb);
  }
  ComposerForUnsignedNumbers.prototype.l19 = function (v) {
    var tmp$ret$0;
    // Inline function 'kotlin.toUInt' call
    tmp$ret$0 = _UInt___init__impl__l7qpdl(v);
    return Composer.prototype.f19.call(this, UInt__toString_impl_dbgl21(tmp$ret$0));
  };
  ComposerForUnsignedNumbers.prototype.m19 = function (v) {
    var tmp$ret$0;
    // Inline function 'kotlin.toULong' call
    tmp$ret$0 = _ULong___init__impl__c78o9k(v);
    return Composer.prototype.f19.call(this, ULong__toString_impl_f9au7k(tmp$ret$0));
  };
  ComposerForUnsignedNumbers.prototype.j19 = function (v) {
    var tmp$ret$0;
    // Inline function 'kotlin.toUByte' call
    tmp$ret$0 = _UByte___init__impl__g9hnc4(v);
    return Composer.prototype.f19.call(this, UByte__toString_impl_v72jg(tmp$ret$0));
  };
  ComposerForUnsignedNumbers.prototype.k19 = function (v) {
    var tmp$ret$0;
    // Inline function 'kotlin.toUShort' call
    tmp$ret$0 = _UShort___init__impl__jigrne(v);
    return Composer.prototype.f19.call(this, UShort__toString_impl_edaoee(tmp$ret$0));
  };
  ComposerForUnsignedNumbers.$metadata$ = classMeta('ComposerForUnsignedNumbers', undefined, undefined, undefined, undefined, Composer.prototype);
  function ComposerWithPrettyPrint(sb, json) {
    Composer.call(this, sb);
    this.u19_1 = json;
    this.v19_1 = 0;
  }
  ComposerWithPrettyPrint.prototype.a19 = function () {
    this.z18_1 = true;
    var tmp0_this = this;
    var tmp1 = tmp0_this.v19_1;
    tmp0_this.v19_1 = tmp1 + 1 | 0;
  };
  ComposerWithPrettyPrint.prototype.b19 = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this.v19_1;
    tmp0_this.v19_1 = tmp1 - 1 | 0;
  };
  ComposerWithPrettyPrint.prototype.c19 = function () {
    this.z18_1 = false;
    this.f19('\n');
    // Inline function 'kotlin.repeat' call
    var tmp0_repeat = this.v19_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < tmp0_repeat)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.serialization.json.internal.ComposerWithPrettyPrint.nextItem.<anonymous>' call
        this.f19(this.u19_1.n15_1.i17_1);
      }
       while (inductionVariable < tmp0_repeat);
  };
  ComposerWithPrettyPrint.prototype.d19 = function () {
    this.e19(_Char___init__impl__6a9atx(32));
  };
  ComposerWithPrettyPrint.$metadata$ = classMeta('ComposerWithPrettyPrint', undefined, undefined, undefined, undefined, Composer.prototype);
  function readIfAbsent($this, descriptor, index) {
    $this.x19_1 = !descriptor.hq(index) ? descriptor.eq(index).yp() : false;
    return $this.x19_1;
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
    tmp.w19_1 = new ElementMarker(descriptor, JsonElementMarker$readIfAbsent$ref(this));
    this.x19_1 = false;
  }
  JsonElementMarker.prototype.mx = function (index) {
    this.w19_1.mx(index);
  };
  JsonElementMarker.prototype.nx = function () {
    return this.w19_1.nx();
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
    return new JsonEncodingException("Value of type '" + keyDescriptor.cq() + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor.lq() + "'.\n") + get_allowStructuredMapKeysHint());
  }
  function throwInvalidFloatingPointDecoded(_this__u8e3s4, result) {
    var tmp = 'Unexpected special floating-point value ' + toString(result) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification. ' + get_specialFlowingValuesHint();
    _this__u8e3s4.y19(tmp, 0, 2, null);
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
    if (!elementDescriptor.yp() ? peekNull() : false)
      return true;
    if (equals(elementDescriptor.lq(), ENUM_getInstance())) {
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
    var index = _this__u8e3s4.fq(name);
    Companion_getInstance_0();
    if (!(index === -3))
      return index;
    if (!json.n15_1.n17_1)
      return index;
    var tmp = get_schemaCache(json);
    var tmp_0 = get_JsonAlternativeNamesKey();
    var alternativeNamesMap = tmp.a1a(_this__u8e3s4, tmp_0, buildAlternativeNamesMap$ref(_this__u8e3s4));
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
    var last = _this__u8e3s4.jq();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$1;
        // Inline function 'kotlin.collections.filterIsInstance' call
        var tmp0_filterIsInstance = _this__u8e3s4.dq(i);
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
        var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.b1a_1;
        if (tmp2_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.collections.forEach' call
          var tmp0_iterator_0 = arrayIterator(tmp2_safe_receiver);
          while (tmp0_iterator_0.m()) {
            var element_0 = tmp0_iterator_0.n();
            // Inline function 'kotlinx.serialization.json.internal.buildAlternativeNamesMap.<anonymous>' call
            if (builder == null)
              builder = createMapForCache(_this__u8e3s4.jq());
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
      throw new JsonException("The suggested name '" + name + "' for property " + $this_buildAlternativeNamesMap.gq(index) + ' is already one of the names for property ' + ($this_buildAlternativeNamesMap.gq(getValue(_this__u8e3s4, name)) + ' in ' + $this_buildAlternativeNamesMap));
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
    var lastToken = $this.c1a_1.f1a(get_TC_BEGIN_OBJ());
    if ($this.c1a_1.g1a() === get_TC_COMMA()) {
      $this.c1a_1.y19('Unexpected leading comma', 0, 2, null);
    }
    var tmp$ret$0;
    // Inline function 'kotlin.collections.linkedMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    var result = tmp$ret$0;
    while ($this.c1a_1.h1a()) {
      var key = $this.d1a_1 ? $this.c1a_1.j1a() : $this.c1a_1.i1a();
      $this.c1a_1.f1a(get_TC_COLON());
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObject.<anonymous>' call
      tmp$ret$1 = $this.k1a();
      var element = tmp$ret$1;
      // Inline function 'kotlin.collections.set' call
      result.s(key, element);
      lastToken = $this.c1a_1.l1a();
      if (!(lastToken === get_TC_COMMA()) ? !(lastToken === get_TC_END_OBJ()) : false) {
        $this.c1a_1.y19('Expected end of the object or comma', 0, 2, null);
      }
    }
    if (lastToken === get_TC_BEGIN_OBJ()) {
      $this.c1a_1.f1a(get_TC_END_OBJ());
    } else if (lastToken === get_TC_COMMA()) {
      $this.c1a_1.y19('Unexpected trailing comma', 0, 2, null);
    }
    tmp$ret$2 = new JsonObject(result);
    return tmp$ret$2;
  }
  function readObject_0(_this__u8e3s4, $this, $cont) {
    var tmp = new $readObjectCOROUTINE$0($this, _this__u8e3s4, $cont);
    tmp.v6_1 = Unit_getInstance();
    tmp.w6_1 = null;
    return tmp.a7();
  }
  function readArray($this) {
    var lastToken = $this.c1a_1.l1a();
    if ($this.c1a_1.g1a() === get_TC_COMMA()) {
      $this.c1a_1.y19('Unexpected leading comma', 0, 2, null);
    }
    var tmp$ret$0;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    var result = tmp$ret$0;
    while ($this.c1a_1.h1a()) {
      var element = $this.k1a();
      result.g(element);
      lastToken = $this.c1a_1.l1a();
      if (!(lastToken === get_TC_COMMA())) {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var tmp0_require = $this.c1a_1;
        var tmp1_require = lastToken === get_TC_END_LIST();
        var tmp2_require = tmp0_require.l16_1;
        if (!tmp1_require) {
          var tmp$ret$1;
          // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readArray.<anonymous>' call
          tmp$ret$1 = 'Expected end of the array or comma';
          tmp0_require.z1a(tmp$ret$1, tmp2_require);
        }
      }
    }
    if (lastToken === get_TC_BEGIN_LIST()) {
      $this.c1a_1.f1a(get_TC_END_LIST());
    } else if (lastToken === get_TC_COMMA()) {
      $this.c1a_1.y19('Unexpected trailing comma', 0, 2, null);
    }
    return new JsonArray(result);
  }
  function readValue($this, isString) {
    var tmp;
    if ($this.d1a_1 ? true : !isString) {
      tmp = $this.c1a_1.j1a();
    } else {
      tmp = $this.c1a_1.i1a();
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
    this.i1b_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  JsonTreeReader$readDeepRecursive$slambda.prototype.n1b = function ($this$$receiver, it, $cont) {
    var tmp = this.o1b($this$$receiver, it, $cont);
    tmp.v6_1 = Unit_getInstance();
    tmp.w6_1 = null;
    return tmp.a7();
  };
  JsonTreeReader$readDeepRecursive$slambda.prototype.t9 = function (p1, p2, $cont) {
    var tmp = p1 instanceof DeepRecursiveScope ? p1 : THROW_CCE();
    return this.n1b(tmp, p2 instanceof Unit ? p2 : THROW_CCE(), $cont);
  };
  JsonTreeReader$readDeepRecursive$slambda.prototype.a7 = function () {
    var suspendResult = this.v6_1;
    $sm: do
      try {
        var tmp = this.t6_1;
        switch (tmp) {
          case 0:
            this.u6_1 = 3;
            this.l1b_1 = this.i1b_1.c1a_1.g1a();
            if (this.l1b_1 === get_TC_STRING()) {
              this.m1b_1 = readValue(this.i1b_1, true);
              this.t6_1 = 2;
              continue $sm;
            } else {
              if (this.l1b_1 === get_TC_OTHER()) {
                this.m1b_1 = readValue(this.i1b_1, false);
                this.t6_1 = 2;
                continue $sm;
              } else {
                if (this.l1b_1 === get_TC_BEGIN_OBJ()) {
                  this.t6_1 = 1;
                  suspendResult = readObject_0(this.j1b_1, this.i1b_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (this.l1b_1 === get_TC_BEGIN_LIST()) {
                    this.m1b_1 = readArray(this.i1b_1);
                    this.t6_1 = 2;
                    continue $sm;
                  } else {
                    var tmp_0 = this;
                    this.i1b_1.c1a_1.y19("Can't begin reading element, unexpected token", 0, 2, null);
                  }
                }
              }
            }

            break;
          case 1:
            this.m1b_1 = suspendResult;
            this.t6_1 = 2;
            continue $sm;
          case 2:
            return this.m1b_1;
          case 3:
            throw this.w6_1;
        }
      } catch ($p) {
        if (this.u6_1 === 3) {
          throw $p;
        } else {
          this.t6_1 = this.u6_1;
          this.w6_1 = $p;
        }
      }
     while (true);
  };
  JsonTreeReader$readDeepRecursive$slambda.prototype.o1b = function ($this$$receiver, it, completion) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this.i1b_1, completion);
    i.j1b_1 = $this$$receiver;
    i.k1b_1 = it;
    return i;
  };
  JsonTreeReader$readDeepRecursive$slambda.$metadata$ = classMeta('JsonTreeReader$readDeepRecursive$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function JsonTreeReader$readDeepRecursive$slambda_0(this$0, resultContinuation) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation);
    var l = function ($this$$receiver, it, $cont) {
      return i.n1b($this$$receiver, it, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function $readObjectCOROUTINE$0(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.u1a_1 = _this__u8e3s4;
    this.v1a_1 = _this__u8e3s4_0;
  }
  $readObjectCOROUTINE$0.prototype.a7 = function () {
    var suspendResult = this.v6_1;
    $sm: do
      try {
        var tmp = this.t6_1;
        switch (tmp) {
          case 0:
            this.u6_1 = 4;
            this.w1a_1 = this.u1a_1.c1a_1.f1a(get_TC_BEGIN_OBJ());
            if (this.u1a_1.c1a_1.g1a() === get_TC_COMMA()) {
              this.u1a_1.c1a_1.y19('Unexpected leading comma', 0, 2, null);
            }

            var tmp_0 = this;
            tmp_0.x1a_1 = LinkedHashMap_init_$Create$();
            this.t6_1 = 1;
            continue $sm;
          case 1:
            if (!this.u1a_1.c1a_1.h1a()) {
              this.t6_1 = 3;
              continue $sm;
            }

            this.y1a_1 = this.u1a_1.d1a_1 ? this.u1a_1.c1a_1.j1a() : this.u1a_1.c1a_1.i1a();
            this.u1a_1.c1a_1.f1a(get_TC_COLON());
            ;
            this.t6_1 = 2;
            suspendResult = this.v1a_1.l9(Unit_getInstance(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var element = suspendResult;
            this.x1a_1.s(this.y1a_1, element);
            ;
            this.w1a_1 = this.u1a_1.c1a_1.l1a();
            if (!(this.w1a_1 === get_TC_COMMA()) ? !(this.w1a_1 === get_TC_END_OBJ()) : false) {
              this.u1a_1.c1a_1.y19('Expected end of the object or comma', 0, 2, null);
            }

            this.t6_1 = 1;
            continue $sm;
          case 3:
            if (this.w1a_1 === get_TC_BEGIN_OBJ()) {
              this.u1a_1.c1a_1.f1a(get_TC_END_OBJ());
            } else if (this.w1a_1 === get_TC_COMMA()) {
              this.u1a_1.c1a_1.y19('Unexpected trailing comma', 0, 2, null);
            }

            return new JsonObject(this.x1a_1);
          case 4:
            throw this.w6_1;
        }
      } catch ($p) {
        if (this.u6_1 === 4) {
          throw $p;
        } else {
          this.t6_1 = this.u6_1;
          this.w6_1 = $p;
        }
      }
     while (true);
  };
  $readObjectCOROUTINE$0.$metadata$ = classMeta('$readObjectCOROUTINE$0', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function JsonTreeReader(configuration, lexer) {
    this.c1a_1 = lexer;
    this.d1a_1 = configuration.e17_1;
    this.e1a_1 = 0;
  }
  JsonTreeReader.prototype.k1a = function () {
    var token = this.c1a_1.g1a();
    var tmp;
    if (token === get_TC_STRING()) {
      tmp = readValue(this, true);
    } else if (token === get_TC_OTHER()) {
      tmp = readValue(this, false);
    } else if (token === get_TC_BEGIN_OBJ()) {
      var tmp_0;
      var tmp0_this = this;
      tmp0_this.e1a_1 = tmp0_this.e1a_1 + 1 | 0;
      if (tmp0_this.e1a_1 === 200) {
        tmp_0 = readDeepRecursive(this);
      } else {
        tmp_0 = readObject(this);
      }
      var result = tmp_0;
      var tmp1_this = this;
      tmp1_this.e1a_1 = tmp1_this.e1a_1 - 1 | 0;
      tmp = result;
    } else if (token === get_TC_BEGIN_LIST()) {
      tmp = readArray(this);
    } else {
      var tmp_1 = 'Cannot begin reading element, unexpected token: ' + token;
      this.c1a_1.y19(tmp_1, 0, 2, null);
    }
    return tmp;
  };
  JsonTreeReader.$metadata$ = classMeta('JsonTreeReader');
  function encodePolymorphically(_this__u8e3s4, serializer, value, ifPolymorphic) {
    var tmp;
    if (!(serializer instanceof AbstractPolymorphicSerializer)) {
      tmp = true;
    } else {
      tmp = _this__u8e3s4.q17().n15_1.k17_1;
    }
    if (tmp) {
      serializer.ap(_this__u8e3s4, value);
      return Unit_getInstance();
    }
    var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
    var baseClassDiscriminator = classDiscriminator(serializer.zo(), _this__u8e3s4.q17());
    var actualSerializer = findPolymorphicSerializer(casted, _this__u8e3s4, isObject(value) ? value : THROW_CCE());
    validateIfSealed$accessor$1ad0flx(casted, actualSerializer, baseClassDiscriminator);
    checkKind(actualSerializer.zo().lq());
    ifPolymorphic(baseClassDiscriminator);
    actualSerializer.ap(_this__u8e3s4, value);
  }
  function decodeSerializableValuePolymorphic(_this__u8e3s4, deserializer) {
    var tmp;
    if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
      tmp = true;
    } else {
      tmp = _this__u8e3s4.q17().n15_1.k17_1;
    }
    if (tmp) {
      return deserializer.bp(_this__u8e3s4);
    }
    var tmp$ret$0;
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var tmp0_cast = _this__u8e3s4.r17();
    var tmp1_cast = deserializer.zo();
    if (!(tmp0_cast instanceof JsonObject)) {
      throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + tmp1_cast.cq() + ', but had ' + getKClassFromExpression(tmp0_cast));
    }
    tmp$ret$0 = tmp0_cast;
    var jsonTree = tmp$ret$0;
    var discriminator = classDiscriminator(deserializer.zo(), _this__u8e3s4.q17());
    var tmp0_safe_receiver = jsonTree.v17(discriminator);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
    var type = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.y17();
    var tmp2_elvis_lhs = deserializer.pp(_this__u8e3s4, type);
    var tmp_0;
    if (tmp2_elvis_lhs == null) {
      throwSerializerNotFound(type, jsonTree);
    } else {
      tmp_0 = tmp2_elvis_lhs;
    }
    var actualSerializer = tmp_0;
    var tmp_1 = _this__u8e3s4.q17();
    return readPolymorphicJson(tmp_1, discriminator, jsonTree, isInterface(actualSerializer, DeserializationStrategy) ? actualSerializer : THROW_CCE());
  }
  function classDiscriminator(_this__u8e3s4, json) {
    var tmp0_iterator = _this__u8e3s4.iq().l();
    while (tmp0_iterator.m()) {
      var annotation = tmp0_iterator.n();
      if (annotation instanceof JsonClassDiscriminator)
        return annotation.p1b_1;
    }
    return json.n15_1.l17_1;
  }
  function validateIfSealed(serializer, actualSerializer, classDiscriminator) {
    if (!(serializer instanceof SealedClassSerializer))
      return Unit_getInstance();
    if (jsonCachedSerialNames(actualSerializer.zo()).k1(classDiscriminator)) {
      var baseName = serializer.zo().cq();
      var actualName = actualSerializer.zo().cq();
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
    var kind = descriptor.lq();
    var tmp;
    if (kind instanceof PolymorphicKind) {
      tmp = true;
    } else {
      tmp = equals(kind, CONTEXTUAL_getInstance());
    }
    if (tmp) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.jf() + " can't be registered as a subclass for polymorphic serialization " + ('because its kind ' + kind + ' is not concrete. To work with multiple hierarchies, register it as a base class.'));
    }
    if ($this.q1b_1)
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
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.jf() + ' of kind ' + kind + ' cannot be serialized polymorphically with class discriminator.');
    }
  }
  function checkDiscriminatorCollisions($this, descriptor, actualClass) {
    var inductionVariable = 0;
    var last = descriptor.jq();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var name = descriptor.gq(i);
        if (name === $this.r1b_1) {
          throw IllegalArgumentException_init_$Create$('Polymorphic serializer for ' + actualClass + " has property '" + name + "' that conflicts " + 'with JSON class discriminator. You can either change class discriminator in JsonConfiguration, ' + 'rename property with @SerialName annotation ' + 'or fall back to array polymorphism');
        }
      }
       while (inductionVariable < last);
  }
  function PolymorphismValidator(useArrayPolymorphism, discriminator) {
    this.q1b_1 = useArrayPolymorphism;
    this.r1b_1 = discriminator;
  }
  PolymorphismValidator.prototype.f15 = function (kClass, provider) {
  };
  PolymorphismValidator.prototype.i15 = function (baseClass, actualClass, actualSerializer) {
    var descriptor = actualSerializer.zo();
    checkKind_0(this, descriptor, actualClass);
    if (!this.q1b_1) {
      checkDiscriminatorCollisions(this, descriptor, actualClass);
    }
  };
  PolymorphismValidator.prototype.j15 = function (baseClass, defaultSerializerProvider) {
  };
  PolymorphismValidator.$metadata$ = classMeta('PolymorphismValidator', [SerializersModuleCollector]);
  function Key() {
  }
  Key.$metadata$ = classMeta('Key');
  function DescriptorSchemaCache() {
    this.z19_1 = createMapForCache(1);
  }
  DescriptorSchemaCache.prototype.s1b = function (descriptor, key, value) {
    // Inline function 'kotlin.collections.set' call
    var tmp$ret$1;
    // Inline function 'kotlin.collections.getOrPut' call
    var tmp0_getOrPut = this.z19_1;
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
  DescriptorSchemaCache.prototype.a1a = function (descriptor, key, defaultValue) {
    var tmp0_safe_receiver = this.t1b(descriptor, key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return tmp0_safe_receiver;
    }
    var value = defaultValue();
    this.s1b(descriptor, key, value);
    return value;
  };
  DescriptorSchemaCache.prototype.t1b = function (descriptor, key) {
    var tmp0_safe_receiver = this.z19_1.x2(descriptor);
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
    if ($this.g16_1.g1a() === get_TC_COMMA()) {
      $this.g16_1.y19('Unexpected leading comma', 0, 2, null);
    }
  }
  function decodeMapIndex($this) {
    var hasComma = false;
    var decodingKey = !(($this.i16_1 % 2 | 0) === 0);
    if (decodingKey) {
      if (!($this.i16_1 === -1)) {
        hasComma = $this.g16_1.v1b();
      }
    } else {
      $this.g16_1.u1b(get_COLON());
    }
    var tmp;
    if ($this.g16_1.h1a()) {
      if (decodingKey) {
        if ($this.i16_1 === -1) {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var tmp0_require = $this.g16_1;
          var tmp1_require = !hasComma;
          var tmp2_require = tmp0_require.l16_1;
          if (!tmp1_require) {
            var tmp$ret$0;
            // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeMapIndex.<anonymous>' call
            tmp$ret$0 = 'Unexpected trailing comma';
            tmp0_require.z1a(tmp$ret$0, tmp2_require);
          }
        } else {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var tmp3_require = $this.g16_1;
          var tmp4_require = hasComma;
          var tmp5_require = tmp3_require.l16_1;
          if (!tmp4_require) {
            var tmp$ret$1;
            // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeMapIndex.<anonymous>' call
            tmp$ret$1 = 'Expected comma after the key-value pair';
            tmp3_require.z1a(tmp$ret$1, tmp5_require);
          }
        }
      }
      var tmp0_this = $this;
      tmp0_this.i16_1 = tmp0_this.i16_1 + 1 | 0;
      tmp = tmp0_this.i16_1;
    } else {
      if (hasComma) {
        $this.g16_1.y19("Expected '}', but had ',' instead", 0, 2, null);
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
      var tmp0_tryCoerceValue = $this.e16_1;
      var tmp1_tryCoerceValue = descriptor.eq(index);
      var tmp;
      if (!tmp1_tryCoerceValue.yp()) {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
        tmp$ret$0 = !$this.g16_1.w1b();
        tmp = tmp$ret$0;
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_1;
      }
      if (equals(tmp1_tryCoerceValue.lq(), ENUM_getInstance())) {
        var tmp$ret$2;
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
        tmp$ret$2 = $this.g16_1.x1b($this.j16_1.e17_1);
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
          $this.g16_1.i1a();
          tmp$ret$1 = true;
          break $l$block_1;
        }
      }
      tmp$ret$1 = false;
    }
    return tmp$ret$1;
  }
  function decodeObjectIndex($this, descriptor) {
    var hasComma = $this.g16_1.v1b();
    while ($this.g16_1.h1a()) {
      hasComma = false;
      var key = decodeStringKey($this);
      $this.g16_1.u1b(get_COLON());
      var index = getJsonNameIndex(descriptor, $this.e16_1, key);
      var tmp;
      Companion_getInstance_0();
      if (!(index === -3)) {
        var tmp_0;
        if ($this.j16_1.j17_1 ? coerceInputValue($this, descriptor, index) : false) {
          hasComma = $this.g16_1.v1b();
          tmp_0 = false;
        } else {
          var tmp0_safe_receiver = $this.k16_1;
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.mx(index);
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
      $this.g16_1.y19('Unexpected trailing comma', 0, 2, null);
    }
    var tmp1_safe_receiver = $this.k16_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.nx();
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
    if ($this.j16_1.d17_1) {
      $this.g16_1.z1b($this.j16_1.e17_1);
    } else {
      $this.g16_1.y1b(key);
    }
    return $this.g16_1.v1b();
  }
  function decodeListIndex($this) {
    var hasComma = $this.g16_1.v1b();
    var tmp;
    if ($this.g16_1.h1a()) {
      if (!($this.i16_1 === -1) ? !hasComma : false) {
        $this.g16_1.y19('Expected end of the array or comma', 0, 2, null);
      }
      var tmp0_this = $this;
      tmp0_this.i16_1 = tmp0_this.i16_1 + 1 | 0;
      tmp = tmp0_this.i16_1;
    } else {
      if (hasComma) {
        $this.g16_1.y19('Unexpected trailing comma', 0, 2, null);
      }
      Companion_getInstance_0();
      tmp = -1;
    }
    return tmp;
  }
  function decodeStringKey($this) {
    var tmp;
    if ($this.j16_1.e17_1) {
      tmp = $this.g16_1.b1c();
    } else {
      tmp = $this.g16_1.a1c();
    }
    return tmp;
  }
  function StreamingJsonDecoder(json, mode, lexer, descriptor) {
    AbstractDecoder.call(this);
    this.e16_1 = json;
    this.f16_1 = mode;
    this.g16_1 = lexer;
    this.h16_1 = this.e16_1.tp();
    this.i16_1 = -1;
    this.j16_1 = this.e16_1.n15_1;
    this.k16_1 = this.j16_1.h17_1 ? null : new JsonElementMarker(descriptor);
  }
  StreamingJsonDecoder.prototype.q17 = function () {
    return this.e16_1;
  };
  StreamingJsonDecoder.prototype.c1c = function () {
    return this.g16_1;
  };
  StreamingJsonDecoder.prototype.tp = function () {
    return this.h16_1;
  };
  StreamingJsonDecoder.prototype.r17 = function () {
    return (new JsonTreeReader(this.e16_1.n15_1, this.g16_1)).k1a();
  };
  StreamingJsonDecoder.prototype.ur = function (deserializer) {
    return decodeSerializableValuePolymorphic(this, deserializer);
  };
  StreamingJsonDecoder.prototype.vr = function (descriptor) {
    var newMode = switchMode(this.e16_1, descriptor);
    this.g16_1.u1b(newMode.f1c_1);
    checkLeadingComma(this);
    var tmp0_subject = newMode;
    var tmp0 = tmp0_subject.q1_1;
    var tmp;
    switch (tmp0) {
      case 1:
      case 2:
      case 3:
        tmp = new StreamingJsonDecoder(this.e16_1, newMode, this.g16_1, descriptor);
        break;
      default:
        var tmp_0;
        if (this.f16_1.equals(newMode) ? this.e16_1.n15_1.h17_1 : false) {
          tmp_0 = this;
        } else {
          tmp_0 = new StreamingJsonDecoder(this.e16_1, newMode, this.g16_1, descriptor);
        }

        tmp = tmp_0;
        break;
    }
    return tmp;
  };
  StreamingJsonDecoder.prototype.wr = function (descriptor) {
    this.g16_1.u1b(this.f16_1.g1c_1);
  };
  StreamingJsonDecoder.prototype.hr = function () {
    var tmp;
    var tmp0_safe_receiver = this.k16_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.x19_1;
    if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
      tmp = this.g16_1.w1b();
    } else {
      tmp = false;
    }
    return tmp;
  };
  StreamingJsonDecoder.prototype.ir = function () {
    return null;
  };
  StreamingJsonDecoder.prototype.ks = function (descriptor) {
    var tmp0_subject = this.f16_1;
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
  StreamingJsonDecoder.prototype.jr = function () {
    var tmp;
    if (this.j16_1.e17_1) {
      tmp = this.g16_1.i1c();
    } else {
      tmp = this.g16_1.h1c();
    }
    return tmp;
  };
  StreamingJsonDecoder.prototype.kr = function () {
    var value = this.g16_1.j1c();
    if (!value.equals(toLong_0(value.na()))) {
      var tmp = "Failed to parse byte for input '" + toString(value) + "'";
      this.g16_1.y19(tmp, 0, 2, null);
    }
    return value.na();
  };
  StreamingJsonDecoder.prototype.lr = function () {
    var value = this.g16_1.j1c();
    if (!value.equals(toLong_0(value.ej()))) {
      var tmp = "Failed to parse short for input '" + toString(value) + "'";
      this.g16_1.y19(tmp, 0, 2, null);
    }
    return value.ej();
  };
  StreamingJsonDecoder.prototype.mr = function () {
    var value = this.g16_1.j1c();
    if (!value.equals(toLong_0(value.ab()))) {
      var tmp = "Failed to parse int for input '" + toString(value) + "'";
      this.g16_1.y19(tmp, 0, 2, null);
    }
    return value.ab();
  };
  StreamingJsonDecoder.prototype.nr = function () {
    return this.g16_1.j1c();
  };
  StreamingJsonDecoder.prototype.or = function () {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.g16_1;
      var input = tmp0_parseString.j1a();
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
          tmp0_parseString.y19(tmp, 0, 2, null);
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$4;
    var specialFp = this.e16_1.n15_1.m17_1;
    if (specialFp ? true : isFinite(result))
      return result;
    throwInvalidFloatingPointDecoded(this.g16_1, result);
  };
  StreamingJsonDecoder.prototype.pr = function () {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.g16_1;
      var input = tmp0_parseString.j1a();
      try {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeDouble.<anonymous>' call
        tmp$ret$0 = toDouble(input);
        tmp$ret$1 = tmp$ret$0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var tmp = "Failed to parse type 'double' for input '" + input + "'";
          tmp0_parseString.y19(tmp, 0, 2, null);
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.e16_1.n15_1.m17_1;
    if (specialFp ? true : isFinite_0(result))
      return result;
    throwInvalidFloatingPointDecoded(this.g16_1, result);
  };
  StreamingJsonDecoder.prototype.qr = function () {
    var string = this.g16_1.j1a();
    if (!(string.length === 1)) {
      var tmp = "Expected single char, but got '" + string + "'";
      this.g16_1.y19(tmp, 0, 2, null);
    }
    return charSequenceGet(string, 0);
  };
  StreamingJsonDecoder.prototype.rr = function () {
    var tmp;
    if (this.j16_1.e17_1) {
      tmp = this.g16_1.b1c();
    } else {
      tmp = this.g16_1.i1a();
    }
    return tmp;
  };
  StreamingJsonDecoder.prototype.sr = function (inlineDescriptor) {
    return get_isUnsignedNumber(inlineDescriptor) ? new JsonDecoderForUnsignedTypes(this.g16_1, this.e16_1) : AbstractDecoder.prototype.sr.call(this, inlineDescriptor);
  };
  StreamingJsonDecoder.$metadata$ = classMeta('StreamingJsonDecoder', [JsonDecoder], undefined, undefined, undefined, AbstractDecoder.prototype);
  function parseString(_this__u8e3s4, expectedType, block) {
    var input = _this__u8e3s4.j1a();
    try {
      return block(input);
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var tmp = "Failed to parse type '" + expectedType + "' for input '" + input + "'";
        _this__u8e3s4.y19(tmp, 0, 2, null);
      } else {
        throw $p;
      }
    }
  }
  function JsonDecoderForUnsignedTypes(lexer, json) {
    AbstractDecoder.call(this);
    this.k1c_1 = lexer;
    this.l1c_1 = json.tp();
  }
  JsonDecoderForUnsignedTypes.prototype.tp = function () {
    return this.l1c_1;
  };
  JsonDecoderForUnsignedTypes.prototype.ks = function (descriptor) {
    // Inline function 'kotlin.error' call
    throw IllegalStateException_init_$Create$('unsupported');
  };
  JsonDecoderForUnsignedTypes.prototype.mr = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.k1c_1;
      var input = tmp0_parseString.j1a();
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
          tmp0_parseString.y19(tmp, 0, 2, null);
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
      var tmp0_parseString = this.k1c_1;
      var input = tmp0_parseString.j1a();
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
          tmp0_parseString.y19(tmp, 0, 2, null);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  JsonDecoderForUnsignedTypes.prototype.kr = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.k1c_1;
      var input = tmp0_parseString.j1a();
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
          tmp0_parseString.y19(tmp, 0, 2, null);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  JsonDecoderForUnsignedTypes.prototype.lr = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.k1c_1;
      var input = tmp0_parseString.j1a();
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
          tmp0_parseString.y19(tmp, 0, 2, null);
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
    $this.u15_1.c19();
    $this.xs(ensureNotNull($this.b16_1));
    $this.u15_1.e19(get_COLON());
    $this.u15_1.d19();
    $this.xs(descriptor.cq());
  }
  function StreamingJsonEncoder(composer, json, mode, modeReuseCache) {
    AbstractEncoder.call(this);
    this.u15_1 = composer;
    this.v15_1 = json;
    this.w15_1 = mode;
    this.x15_1 = modeReuseCache;
    this.y15_1 = this.v15_1.tp();
    this.z15_1 = this.v15_1.n15_1;
    this.a16_1 = false;
    this.b16_1 = null;
    var i = this.w15_1.q1_1;
    if (!(this.x15_1 == null)) {
      if (!(this.x15_1[i] === null) ? true : !(this.x15_1[i] === this)) {
        this.x15_1[i] = this;
      }
    }
  }
  StreamingJsonEncoder.prototype.q17 = function () {
    return this.v15_1;
  };
  StreamingJsonEncoder.prototype.tp = function () {
    return this.y15_1;
  };
  StreamingJsonEncoder.prototype.ot = function (descriptor, index) {
    return this.z15_1.c17_1;
  };
  StreamingJsonEncoder.prototype.jt = function (serializer, value) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
      var tmp;
      if (!(serializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.q17().n15_1.k17_1;
      }
      if (tmp) {
        serializer.ap(this, value);
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      }
      var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
      var baseClassDiscriminator = classDiscriminator(serializer.zo(), this.q17());
      var actualSerializer = findPolymorphicSerializer(casted, this, isObject(value) ? value : THROW_CCE());
      validateIfSealed$accessor$1ad0flx(casted, actualSerializer, baseClassDiscriminator);
      checkKind(actualSerializer.zo().lq());
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.encodeSerializableValue.<anonymous>' call
      this.b16_1 = baseClassDiscriminator;
      actualSerializer.ap(this, value);
    }
  };
  StreamingJsonEncoder.prototype.vr = function (descriptor) {
    var newMode = switchMode(this.v15_1, descriptor);
    if (!equals(new Char(newMode.f1c_1), new Char(get_INVALID()))) {
      this.u15_1.e19(newMode.f1c_1);
      this.u15_1.a19();
    }
    if (!(this.b16_1 == null)) {
      encodeTypeInfo(this, descriptor);
      this.b16_1 = null;
    }
    if (this.w15_1.equals(newMode)) {
      return this;
    }
    var tmp0_safe_receiver = this.x15_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver[newMode.q1_1];
    return tmp1_elvis_lhs == null ? new StreamingJsonEncoder(this.u15_1, this.v15_1, newMode, this.x15_1) : tmp1_elvis_lhs;
  };
  StreamingJsonEncoder.prototype.wr = function (descriptor) {
    if (!equals(new Char(this.w15_1.g1c_1), new Char(get_INVALID()))) {
      this.u15_1.b19();
      this.u15_1.c19();
      this.u15_1.e19(this.w15_1.g1c_1);
    }
  };
  StreamingJsonEncoder.prototype.ms = function (descriptor, index) {
    var tmp0_subject = this.w15_1;
    var tmp0 = tmp0_subject.q1_1;
    switch (tmp0) {
      case 1:
        if (!this.u15_1.z18_1) {
          this.u15_1.e19(get_COMMA());
        }

        this.u15_1.c19();
        ;
        break;
      case 2:
        if (!this.u15_1.z18_1) {
          var tmp = this;
          var tmp_0;
          if ((index % 2 | 0) === 0) {
            this.u15_1.e19(get_COMMA());
            this.u15_1.c19();
            tmp_0 = true;
          } else {
            this.u15_1.e19(get_COLON());
            this.u15_1.d19();
            tmp_0 = false;
          }
          tmp.a16_1 = tmp_0;
        } else {
          this.a16_1 = true;
          this.u15_1.c19();
        }

        break;
      case 3:
        if (index === 0)
          this.a16_1 = true;
        if (index === 1) {
          this.u15_1.e19(get_COMMA());
          this.u15_1.d19();
          this.a16_1 = false;
        }

        break;
      default:
        if (!this.u15_1.z18_1) {
          this.u15_1.e19(get_COMMA());
        }

        this.u15_1.c19();
        this.xs(descriptor.gq(index));
        this.u15_1.e19(get_COLON());
        this.u15_1.d19();
        ;
        break;
    }
    return true;
  };
  StreamingJsonEncoder.prototype.kt = function (descriptor, index, serializer, value) {
    if (!(value == null) ? true : this.z15_1.h17_1) {
      AbstractEncoder.prototype.kt.call(this, descriptor, index, serializer, value);
    }
  };
  StreamingJsonEncoder.prototype.ys = function (inlineDescriptor) {
    return get_isUnsignedNumber(inlineDescriptor) ? new StreamingJsonEncoder(new ComposerForUnsignedNumbers(this.u15_1.y18_1), this.v15_1, this.w15_1, null) : AbstractEncoder.prototype.ys.call(this, inlineDescriptor);
  };
  StreamingJsonEncoder.prototype.os = function () {
    this.u15_1.f19(get_NULL());
  };
  StreamingJsonEncoder.prototype.ps = function (value) {
    if (this.a16_1) {
      this.xs(value.toString());
    } else {
      this.u15_1.n19(value);
    }
  };
  StreamingJsonEncoder.prototype.qs = function (value) {
    if (this.a16_1) {
      this.xs(value.toString());
    } else {
      this.u15_1.j19(value);
    }
  };
  StreamingJsonEncoder.prototype.rs = function (value) {
    if (this.a16_1) {
      this.xs(value.toString());
    } else {
      this.u15_1.k19(value);
    }
  };
  StreamingJsonEncoder.prototype.ss = function (value) {
    if (this.a16_1) {
      this.xs(value.toString());
    } else {
      this.u15_1.l19(value);
    }
  };
  StreamingJsonEncoder.prototype.ts = function (value) {
    if (this.a16_1) {
      this.xs(value.toString());
    } else {
      this.u15_1.m19(value);
    }
  };
  StreamingJsonEncoder.prototype.us = function (value) {
    if (this.a16_1) {
      this.xs(value.toString());
    } else {
      this.u15_1.h19(value);
    }
    if (!this.z15_1.m17_1 ? !isFinite(value) : false) {
      throw InvalidFloatingPointEncoded(value, this.u15_1.y18_1.toString());
    }
  };
  StreamingJsonEncoder.prototype.vs = function (value) {
    if (this.a16_1) {
      this.xs(value.toString());
    } else {
      this.u15_1.i19(value);
    }
    if (!this.z15_1.m17_1 ? !isFinite_0(value) : false) {
      throw InvalidFloatingPointEncoded(value, this.u15_1.y18_1.toString());
    }
  };
  StreamingJsonEncoder.prototype.ws = function (value) {
    this.xs(toString_0(value));
  };
  StreamingJsonEncoder.prototype.xs = function (value) {
    return this.u15_1.o19(value);
  };
  StreamingJsonEncoder.$metadata$ = classMeta('StreamingJsonEncoder', [JsonEncoder], undefined, undefined, undefined, AbstractEncoder.prototype);
  function get_isUnsignedNumber(_this__u8e3s4) {
    init_properties_StreamingJsonEncoder_kt_qkpchk();
    return _this__u8e3s4.kq() ? get_unsignedNumberDescriptors().k1(_this__u8e3s4) : false;
  }
  var properties_initialized_StreamingJsonEncoder_kt_6ifwwk;
  function init_properties_StreamingJsonEncoder_kt_qkpchk() {
    if (properties_initialized_StreamingJsonEncoder_kt_6ifwwk) {
    } else {
      properties_initialized_StreamingJsonEncoder_kt_6ifwwk = true;
      unsignedNumberDescriptors = setOf([serializer_1(Companion_getInstance_1()).zo(), serializer_0(Companion_getInstance()).zo(), serializer_2(Companion_getInstance_2()).zo(), serializer_3(Companion_getInstance_3()).zo()]);
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
    _this__u8e3s4.j8(get_STRING());
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
          _this__u8e3s4.mh(value, lastPos, i);
          _this__u8e3s4.ph(get_ESCAPE_STRINGS()[c]);
          lastPos = i + 1 | 0;
        }
      }
       while (inductionVariable <= last);
    if (!(lastPos === 0)) {
      _this__u8e3s4.mh(value, lastPos, value.length);
    } else {
      _this__u8e3s4.ph(value);
    }
    _this__u8e3s4.j8(get_STRING());
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
    var tmp0_safe_receiver = $this.l13();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.currentObject.<anonymous>' call
      tmp$ret$0 = $this.r1c(tmp0_safe_receiver);
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
    this.o1c_1 = json;
    this.p1c_1 = value;
    this.q1c_1 = this.q17().n15_1;
  }
  AbstractJsonTreeDecoder.prototype.q17 = function () {
    return this.o1c_1;
  };
  AbstractJsonTreeDecoder.prototype.j2 = function () {
    return this.p1c_1;
  };
  AbstractJsonTreeDecoder.prototype.tp = function () {
    return this.q17().tp();
  };
  AbstractJsonTreeDecoder.prototype.r17 = function () {
    return currentObject(this);
  };
  AbstractJsonTreeDecoder.prototype.ur = function (deserializer) {
    return decodeSerializableValuePolymorphic(this, deserializer);
  };
  AbstractJsonTreeDecoder.prototype.m13 = function (parentName, childName) {
    return childName;
  };
  AbstractJsonTreeDecoder.prototype.vr = function (descriptor) {
    var currentObject_0 = currentObject(this);
    var tmp0_subject = descriptor.lq();
    var tmp;
    var tmp_0;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_0 = true;
    } else {
      tmp_0 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_0) {
      var tmp_1 = this.q17();
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      if (!(currentObject_0 instanceof JsonArray)) {
        throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonArray) + ' as the serialized body of ' + descriptor.cq() + ', but had ' + getKClassFromExpression(currentObject_0));
      }
      tmp$ret$0 = currentObject_0;
      tmp = new JsonTreeListDecoder(tmp_1, tmp$ret$0);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        var tmp$ret$5;
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var tmp0_selectMapMode = this.q17();
        var keyDescriptor = carrierDescriptor(descriptor.eq(0), tmp0_selectMapMode.tp());
        var keyKind = keyDescriptor.lq();
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
          var tmp_4 = this.q17();
          var tmp$ret$1;
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          if (!(currentObject_0 instanceof JsonObject)) {
            throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + descriptor.cq() + ', but had ' + getKClassFromExpression(currentObject_0));
          }
          tmp$ret$1 = currentObject_0;
          tmp$ret$2 = new JsonTreeMapDecoder(tmp_4, tmp$ret$1);
          tmp_2 = tmp$ret$2;
        } else {
          if (tmp0_selectMapMode.n15_1.f17_1) {
            var tmp$ret$4;
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.beginStructure.<anonymous>' call
            var tmp_5 = this.q17();
            var tmp$ret$3;
            // Inline function 'kotlinx.serialization.json.internal.cast' call
            if (!(currentObject_0 instanceof JsonArray)) {
              throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonArray) + ' as the serialized body of ' + descriptor.cq() + ', but had ' + getKClassFromExpression(currentObject_0));
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
        var tmp_6 = this.q17();
        var tmp$ret$6;
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        if (!(currentObject_0 instanceof JsonObject)) {
          throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + descriptor.cq() + ', but had ' + getKClassFromExpression(currentObject_0));
        }
        tmp$ret$6 = currentObject_0;
        var tmp_7 = tmp$ret$6;
        tmp = JsonTreeDecoder_init_$Create$(tmp_6, tmp_7, null, null, 12, null);
      }
    }
    return tmp;
  };
  AbstractJsonTreeDecoder.prototype.wr = function (descriptor) {
  };
  AbstractJsonTreeDecoder.prototype.hr = function () {
    var tmp = currentObject(this);
    return !(tmp instanceof JsonNull);
  };
  AbstractJsonTreeDecoder.prototype.s1c = function (tag) {
    var currentElement = this.r1c(tag);
    var tmp0_elvis_lhs = currentElement instanceof JsonPrimitive ? currentElement : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw JsonDecodingException_0(-1, 'Expected JsonPrimitive at ' + tag + ', found ' + currentElement, toString(currentObject(this)));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  AbstractJsonTreeDecoder.prototype.t1c = function (tag) {
    return !(this.r1c(tag) === JsonNull_getInstance());
  };
  AbstractJsonTreeDecoder.prototype.o13 = function (tag) {
    return this.t1c((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.u1c = function (tag) {
    var value = this.s1c(tag);
    if (!this.q17().n15_1.e17_1) {
      var literal = asLiteral(value, this, 'boolean');
      if (literal.b18_1)
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
  AbstractJsonTreeDecoder.prototype.p13 = function (tag) {
    return this.u1c((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.v1c = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.s1c(tag);
      try {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedByte.<anonymous>' call
        var result = get_int(tmp0_primitive);
        var tmp;
        var containsLower = ByteCompanionObject_getInstance().s8_1;
        if (result <= ByteCompanionObject_getInstance().t8_1 ? containsLower <= result : false) {
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
  AbstractJsonTreeDecoder.prototype.q13 = function (tag) {
    return this.v1c((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.w1c = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.s1c(tag);
      try {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedShort.<anonymous>' call
        var result = get_int(tmp0_primitive);
        var tmp;
        var containsLower = ShortCompanionObject_getInstance().w8_1;
        if (result <= ShortCompanionObject_getInstance().x8_1 ? containsLower <= result : false) {
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
  AbstractJsonTreeDecoder.prototype.r13 = function (tag) {
    return this.w1c((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.x1c = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.s1c(tag);
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
  AbstractJsonTreeDecoder.prototype.s13 = function (tag) {
    return this.x1c((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.y1c = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.s1c(tag);
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
  AbstractJsonTreeDecoder.prototype.t13 = function (tag) {
    return this.y1c((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.z1c = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.s1c(tag);
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
    var specialFp = this.q17().n15_1.m17_1;
    if (specialFp ? true : isFinite(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(currentObject(this)));
  };
  AbstractJsonTreeDecoder.prototype.u13 = function (tag) {
    return this.z1c((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.a1d = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.s1c(tag);
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
    var specialFp = this.q17().n15_1.m17_1;
    if (specialFp ? true : isFinite_0(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(currentObject(this)));
  };
  AbstractJsonTreeDecoder.prototype.v13 = function (tag) {
    return this.a1d((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.b1d = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.s1c(tag);
      try {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedChar.<anonymous>' call
        tmp$ret$0 = single(tmp0_primitive.y17());
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
  AbstractJsonTreeDecoder.prototype.w13 = function (tag) {
    return this.b1d((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.c1d = function (tag) {
    var value = this.s1c(tag);
    if (!this.q17().n15_1.e17_1) {
      var literal = asLiteral(value, this, 'string');
      if (!literal.b18_1)
        throw JsonDecodingException_0(-1, "String literal for key '" + tag + "' should be quoted.\n" + get_lenientHint(), toString(currentObject(this)));
    }
    if (value instanceof JsonNull)
      throw JsonDecodingException_0(-1, "Unexpected 'null' value instead of string literal", toString(currentObject(this)));
    return value.y17();
  };
  AbstractJsonTreeDecoder.prototype.x13 = function (tag) {
    return this.c1d((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.d1d = function (tag, inlineDescriptor) {
    return get_isUnsignedNumber(inlineDescriptor) ? new JsonDecoderForUnsignedTypes(new StringJsonLexer(this.s1c(tag).y17()), this.q17()) : NamedValueDecoder.prototype.y13.call(this, tag, inlineDescriptor);
  };
  AbstractJsonTreeDecoder.prototype.y13 = function (tag, inlineDescriptor) {
    return this.d1d((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
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
      var tmp0_tryCoerceValue = $this.q17();
      var tmp1_tryCoerceValue = descriptor.eq(index);
      var tmp;
      if (!tmp1_tryCoerceValue.yp()) {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
        var tmp_0 = $this.r1c(tag);
        tmp$ret$0 = tmp_0 instanceof JsonNull;
        tmp = tmp$ret$0;
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_1;
      }
      if (equals(tmp1_tryCoerceValue.lq(), ENUM_getInstance())) {
        var tmp$ret$2;
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
        var tmp_1 = $this.r1c(tag);
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
    $this.n1d_1 = (!$this.q17().n15_1.h17_1 ? !descriptor.hq(index) : false) ? descriptor.eq(index).yp() : false;
    return $this.n1d_1;
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
    this.j1d_1 = value;
    this.k1d_1 = polyDiscriminator;
    this.l1d_1 = polyDescriptor;
    this.m1d_1 = 0;
    this.n1d_1 = false;
  }
  JsonTreeDecoder.prototype.j2 = function () {
    return this.j1d_1;
  };
  JsonTreeDecoder.prototype.ks = function (descriptor) {
    while (this.m1d_1 < descriptor.jq()) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.m1d_1;
      tmp0_this.m1d_1 = tmp1 + 1 | 0;
      var name = this.g13(descriptor, tmp1);
      var index = this.m1d_1 - 1 | 0;
      this.n1d_1 = false;
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
        tmp = !this.q1c_1.j17_1 ? true : !coerceInputValue_0(this, descriptor, index, name);
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
  JsonTreeDecoder.prototype.hr = function () {
    return !this.n1d_1 ? AbstractJsonTreeDecoder.prototype.hr.call(this) : false;
  };
  JsonTreeDecoder.prototype.h13 = function (desc, index) {
    var mainName = desc.gq(index);
    if (!this.q1c_1.n17_1)
      return mainName;
    if (this.j2().y2().k1(mainName))
      return mainName;
    var tmp = get_schemaCache(this.q17());
    var tmp_0 = get_JsonAlternativeNamesKey();
    var alternativeNamesMap = tmp.a1a(desc, tmp_0, buildAlternativeNamesMap$ref_0(desc));
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
  JsonTreeDecoder.prototype.r1c = function (tag) {
    return getValue(this.j2(), tag);
  };
  JsonTreeDecoder.prototype.vr = function (descriptor) {
    if (descriptor === this.l1d_1)
      return this;
    return AbstractJsonTreeDecoder.prototype.vr.call(this, descriptor);
  };
  JsonTreeDecoder.prototype.wr = function (descriptor) {
    var tmp;
    if (this.q1c_1.d17_1) {
      tmp = true;
    } else {
      var tmp_0 = descriptor.lq();
      tmp = tmp_0 instanceof PolymorphicKind;
    }
    if (tmp)
      return Unit_getInstance();
    var tmp_1;
    if (!this.q1c_1.n17_1) {
      tmp_1 = jsonCachedSerialNames(descriptor);
    } else {
      var tmp_2 = jsonCachedSerialNames(descriptor);
      var tmp$ret$0;
      // Inline function 'kotlin.collections.orEmpty' call
      var tmp0_safe_receiver = get_schemaCache(this.q17()).t1b(descriptor, get_JsonAlternativeNamesKey());
      var tmp0_orEmpty = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.y2();
      var tmp0_elvis_lhs = tmp0_orEmpty;
      tmp$ret$0 = tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
      tmp_1 = plus(tmp_2, tmp$ret$0);
    }
    var names = tmp_1;
    var tmp1_iterator = this.j2().y2().l();
    while (tmp1_iterator.m()) {
      var key = tmp1_iterator.n();
      if (!names.k1(key) ? !(key === this.k1d_1) : false) {
        throw UnknownKeyException(key, this.j2().toString());
      }
    }
  };
  JsonTreeDecoder.$metadata$ = classMeta('JsonTreeDecoder', undefined, undefined, undefined, undefined, AbstractJsonTreeDecoder.prototype);
  function JsonTreeListDecoder(json, value) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.t1d_1 = value;
    this.u1d_1 = this.t1d_1.o();
    this.v1d_1 = -1;
  }
  JsonTreeListDecoder.prototype.j2 = function () {
    return this.t1d_1;
  };
  JsonTreeListDecoder.prototype.h13 = function (desc, index) {
    return index.toString();
  };
  JsonTreeListDecoder.prototype.r1c = function (tag) {
    return this.t1d_1.p(toInt(tag));
  };
  JsonTreeListDecoder.prototype.ks = function (descriptor) {
    while (this.v1d_1 < (this.u1d_1 - 1 | 0)) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.v1d_1;
      tmp0_this.v1d_1 = tmp1 + 1 | 0;
      return this.v1d_1;
    }
    Companion_getInstance_0();
    return -1;
  };
  JsonTreeListDecoder.$metadata$ = classMeta('JsonTreeListDecoder', undefined, undefined, undefined, undefined, AbstractJsonTreeDecoder.prototype);
  function JsonTreeMapDecoder(json, value) {
    JsonTreeDecoder_init_$Init$(json, value, null, null, 12, null, this);
    this.g1e_1 = value;
    this.h1e_1 = toList(this.g1e_1.y2());
    this.i1e_1 = imul(this.h1e_1.o(), 2);
    this.j1e_1 = -1;
  }
  JsonTreeMapDecoder.prototype.j2 = function () {
    return this.g1e_1;
  };
  JsonTreeMapDecoder.prototype.h13 = function (desc, index) {
    var i = index / 2 | 0;
    return this.h1e_1.p(i);
  };
  JsonTreeMapDecoder.prototype.ks = function (descriptor) {
    while (this.j1e_1 < (this.i1e_1 - 1 | 0)) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.j1e_1;
      tmp0_this.j1e_1 = tmp1 + 1 | 0;
      return this.j1e_1;
    }
    Companion_getInstance_0();
    return -1;
  };
  JsonTreeMapDecoder.prototype.r1c = function (tag) {
    return (this.j1e_1 % 2 | 0) === 0 ? JsonPrimitive_2(tag) : getValue(this.g1e_1, tag);
  };
  JsonTreeMapDecoder.prototype.wr = function (descriptor) {
  };
  JsonTreeMapDecoder.$metadata$ = classMeta('JsonTreeMapDecoder', undefined, undefined, undefined, undefined, JsonTreeDecoder.prototype);
  function readPolymorphicJson(_this__u8e3s4, discriminator, element, deserializer) {
    return (new JsonTreeDecoder(_this__u8e3s4, element, discriminator, deserializer.zo())).ur(deserializer);
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
    this.f1c_1 = begin;
    this.g1c_1 = end;
  }
  WriteMode.$metadata$ = classMeta('WriteMode', undefined, undefined, undefined, undefined, Enum.prototype);
  function switchMode(_this__u8e3s4, desc) {
    var tmp0_subject = desc.lq();
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
          var keyDescriptor = carrierDescriptor(desc.eq(0), _this__u8e3s4.tp());
          var keyKind = keyDescriptor.lq();
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
            if (_this__u8e3s4.n15_1.f17_1) {
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
    var keyDescriptor = carrierDescriptor(mapDescriptor.eq(0), _this__u8e3s4.tp());
    var keyKind = keyDescriptor.lq();
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
      if (_this__u8e3s4.n15_1.f17_1) {
        tmp = ifList();
      } else {
        throw InvalidKeyKindException(keyDescriptor);
      }
    }
    return tmp;
  }
  function carrierDescriptor(_this__u8e3s4, module_0) {
    var tmp;
    if (equals(_this__u8e3s4.lq(), CONTEXTUAL_getInstance())) {
      var tmp0_safe_receiver = getContextualDescriptor(module_0, _this__u8e3s4);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : carrierDescriptor(tmp0_safe_receiver, module_0);
      tmp = tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
    } else if (_this__u8e3s4.kq()) {
      tmp = _this__u8e3s4.eq(0);
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
    $this.k1e(lastPosition, current);
    return appendEsc($this, current + 1 | 0);
  }
  function decodedString($this, lastPosition, currentPosition) {
    $this.k1e(lastPosition, currentPosition);
    var result = $this.n16_1.toString();
    $this.n16_1.qh(0);
    return result;
  }
  function takePeeked($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = ensureNotNull($this.m16_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.takePeeked.<anonymous>' call
    $this.m16_1 = null;
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  }
  function wasUnquotedString($this) {
    return !equals(new Char(charSequenceGet($this.l1e(), $this.l16_1 - 1 | 0)), new Char(_Char___init__impl__6a9atx(34)));
  }
  function appendEsc($this, startPosition) {
    var currentPosition = startPosition;
    currentPosition = $this.m1e(currentPosition);
    if (currentPosition === -1) {
      $this.y19('Expected escape sequence to continue, got EOF', 0, 2, null);
    }
    var tmp = $this.l1e();
    var tmp0 = currentPosition;
    currentPosition = tmp0 + 1 | 0;
    var currentChar = charSequenceGet(tmp, tmp0);
    if (equals(new Char(currentChar), new Char(_Char___init__impl__6a9atx(117)))) {
      return appendHex($this, $this.l1e(), currentPosition);
    }
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    tmp$ret$0 = Char__toInt_impl_vasixd(currentChar);
    var c = escapeToChar(tmp$ret$0);
    if (equals(new Char(c), new Char(_Char___init__impl__6a9atx(0)))) {
      var tmp_0 = "Invalid escaped char '" + new Char(currentChar) + "'";
      $this.y19(tmp_0, 0, 2, null);
    }
    $this.n16_1.j8(c);
    return currentPosition;
  }
  function appendHex($this, source, startPos) {
    if ((startPos + 4 | 0) >= charSequenceLength(source)) {
      $this.y19('Unexpected EOF during unicode escape', 0, 2, null);
    }
    $this.n16_1.j8(numberToChar((((fromHexChar($this, source, startPos) << 12) + (fromHexChar($this, source, startPos + 1 | 0) << 8) | 0) + (fromHexChar($this, source, startPos + 2 | 0) << 4) | 0) + fromHexChar($this, source, startPos + 3 | 0) | 0));
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
      $this.y19(tmp_3, 0, 2, null);
    }
    return tmp;
  }
  function consumeBoolean($this, start) {
    var current = $this.m1e(start);
    if (current >= charSequenceLength($this.l1e()) ? true : current === -1) {
      $this.y19('EOF', 0, 2, null);
    }
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    var tmp = $this.l1e();
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
        var tmp_1 = "Expected valid boolean literal prefix, but had '" + $this.j1a() + "'";
        $this.y19(tmp_1, 0, 2, null);
      }
    }
    return tmp_0;
  }
  function consumeBooleanLiteral($this, literalSuffix, current) {
    if ((charSequenceLength($this.l1e()) - current | 0) < literalSuffix.length) {
      $this.y19('Unexpected end of boolean literal', 0, 2, null);
    }
    var inductionVariable = 0;
    var last = charSequenceLength(literalSuffix) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var expected = charSequenceGet(literalSuffix, i);
        var actual = charSequenceGet($this.l1e(), current + i | 0);
        var tmp$ret$0;
        // Inline function 'kotlin.code' call
        tmp$ret$0 = Char__toInt_impl_vasixd(expected);
        var tmp = tmp$ret$0;
        var tmp$ret$1;
        // Inline function 'kotlin.code' call
        tmp$ret$1 = Char__toInt_impl_vasixd(actual);
        if (!(tmp === (tmp$ret$1 | 32))) {
          var tmp_0 = "Expected valid boolean literal prefix, but had '" + $this.j1a() + "'";
          $this.y19(tmp_0, 0, 2, null);
        }
      }
       while (inductionVariable <= last);
    $this.l16_1 = current + literalSuffix.length | 0;
  }
  function AbstractJsonLexer() {
    this.l16_1 = 0;
    this.m16_1 = null;
    this.n16_1 = StringBuilder_init_$Create$();
  }
  AbstractJsonLexer.prototype.n1e = function () {
  };
  AbstractJsonLexer.prototype.o1e = function (c) {
    var tmp0_subject = c;
    return (((equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(125))) ? true : equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(93)))) ? true : equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(58)))) ? true : equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(44)))) ? false : true;
  };
  AbstractJsonLexer.prototype.o16 = function () {
    var nextToken = this.l1a();
    if (!(nextToken === 10)) {
      var tmp = 'Expected EOF after parsing an object, but had ' + new Char(charSequenceGet(this.l1e(), this.l16_1 - 1 | 0)) + ' instead';
      this.y19(tmp, 0, 2, null);
    }
  };
  AbstractJsonLexer.prototype.f1a = function (expected) {
    var token = this.l1a();
    if (!(token === expected)) {
      this.p1e(expected);
    }
    return token;
  };
  AbstractJsonLexer.prototype.u1b = function (expected) {
    this.n1e();
    var source = this.l1e();
    var cpos = this.l16_1;
    $l$loop_0: while (true) {
      cpos = this.m1e(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var tmp0 = cpos;
      cpos = tmp0 + 1 | 0;
      var c = charSequenceGet(source, tmp0);
      if (((equals(new Char(c), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(9))))
        continue $l$loop_0;
      this.l16_1 = cpos;
      if (equals(new Char(c), new Char(expected)))
        return Unit_getInstance();
      this.q1e(expected);
    }
    this.l16_1 = cpos;
    this.q1e(expected);
  };
  AbstractJsonLexer.prototype.q1e = function (expected) {
    var tmp0_this = this;
    tmp0_this.l16_1 = tmp0_this.l16_1 - 1 | 0;
    if ((this.l16_1 >= 0 ? equals(new Char(expected), new Char(_Char___init__impl__6a9atx(34))) : false) ? this.j1a() === 'null' : false) {
      this.z1a("Expected string literal but 'null' literal was found.\nUse 'coerceInputValues = true' in 'Json {}` builder to coerce nulls to default values.", this.l16_1 - 4 | 0);
    }
    this.p1e(charToTokenClass(expected));
  };
  AbstractJsonLexer.prototype.p1e = function (expectedToken) {
    var tmp0_subject = expectedToken;
    var expected = tmp0_subject === 1 ? "quotation mark '\"'" : tmp0_subject === 4 ? "comma ','" : tmp0_subject === 5 ? "semicolon ':'" : tmp0_subject === 6 ? "start of the object '{'" : tmp0_subject === 7 ? "end of the object '}'" : tmp0_subject === 8 ? "start of the array '['" : tmp0_subject === 9 ? "end of the array ']'" : 'valid token';
    var s = (this.l16_1 === charSequenceLength(this.l1e()) ? true : this.l16_1 <= 0) ? 'EOF' : toString_0(charSequenceGet(this.l1e(), this.l16_1 - 1 | 0));
    this.z1a('Expected ' + expected + ", but had '" + s + "' instead", this.l16_1 - 1 | 0);
  };
  AbstractJsonLexer.prototype.g1a = function () {
    var source = this.l1e();
    var cpos = this.l16_1;
    $l$loop_0: while (true) {
      cpos = this.m1e(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var ch = charSequenceGet(source, cpos);
      if (((equals(new Char(ch), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(ch), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(ch), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(ch), new Char(_Char___init__impl__6a9atx(9)))) {
        cpos = cpos + 1 | 0;
        continue $l$loop_0;
      }
      this.l16_1 = cpos;
      return charToTokenClass(ch);
    }
    this.l16_1 = cpos;
    return 10;
  };
  AbstractJsonLexer.prototype.w1b = function () {
    var current = this.r1e();
    current = this.m1e(current);
    var len = charSequenceLength(this.l1e()) - current | 0;
    if (len < 4 ? true : current === -1)
      return true;
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!equals(new Char(charSequenceGet('null', i)), new Char(charSequenceGet(this.l1e(), current + i | 0))))
          return true;
      }
       while (inductionVariable <= 3);
    if (len > 4 ? charToTokenClass(charSequenceGet(this.l1e(), current + 4 | 0)) === 0 : false)
      return true;
    this.l16_1 = current + 4 | 0;
    return false;
  };
  AbstractJsonLexer.prototype.r1e = function () {
    var current = this.l16_1;
    $l$loop_0: while (true) {
      current = this.m1e(current);
      if (current === -1)
        break $l$loop_0;
      var c = charSequenceGet(this.l1e(), current);
      if (((equals(new Char(c), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(9)))) {
        current = current + 1 | 0;
      } else {
        break $l$loop_0;
      }
    }
    this.l16_1 = current;
    return current;
  };
  AbstractJsonLexer.prototype.x1b = function (isLenient) {
    var token = this.g1a();
    var tmp;
    if (isLenient) {
      if (!(token === 1) ? !(token === 0) : false)
        return null;
      tmp = this.j1a();
    } else {
      if (!(token === 1))
        return null;
      tmp = this.i1a();
    }
    var string = tmp;
    this.m16_1 = string;
    return string;
  };
  AbstractJsonLexer.prototype.s1e = function (startPos, endPos) {
    var tmp$ret$0;
    // Inline function 'kotlin.text.substring' call
    var tmp0_substring = this.l1e();
    tmp$ret$0 = toString(charSequenceSubSequence(tmp0_substring, startPos, endPos));
    return tmp$ret$0;
  };
  AbstractJsonLexer.prototype.i1a = function () {
    if (!(this.m16_1 == null)) {
      return takePeeked(this);
    }
    return this.a1c();
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
          this.k1e(lastPosition, currentPosition);
          currentPosition = this.m1e(currentPosition);
          if (currentPosition === -1) {
            this.z1a('EOF', currentPosition);
          }
          lastPosition = currentPosition;
        }
      }
      char = charSequenceGet(source, currentPosition);
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.s1e(lastPosition, currentPosition);
    } else {
      tmp = decodedString(this, lastPosition, currentPosition);
    }
    var string = tmp;
    this.l16_1 = currentPosition + 1 | 0;
    return string;
  };
  AbstractJsonLexer.prototype.b1c = function () {
    var result = this.j1a();
    if (result === 'null' ? wasUnquotedString(this) : false) {
      this.y19("Unexpected 'null' value instead of string literal", 0, 2, null);
    }
    return result;
  };
  AbstractJsonLexer.prototype.j1a = function () {
    if (!(this.m16_1 == null)) {
      return takePeeked(this);
    }
    var current = this.r1e();
    if (current >= charSequenceLength(this.l1e()) ? true : current === -1) {
      this.z1a('EOF', current);
    }
    var token = charToTokenClass(charSequenceGet(this.l1e(), current));
    if (token === 1) {
      return this.i1a();
    }
    if (!(token === 0)) {
      var tmp = 'Expected beginning of the string, but got ' + new Char(charSequenceGet(this.l1e(), current));
      this.y19(tmp, 0, 2, null);
    }
    var usedAppend = false;
    while (charToTokenClass(charSequenceGet(this.l1e(), current)) === 0) {
      current = current + 1 | 0;
      if (current >= charSequenceLength(this.l1e())) {
        usedAppend = true;
        this.k1e(this.l16_1, current);
        var eof = this.m1e(current);
        if (eof === -1) {
          this.l16_1 = current;
          return decodedString(this, 0, 0);
        } else {
          current = eof;
        }
      }
    }
    var tmp_0;
    if (!usedAppend) {
      tmp_0 = this.s1e(this.l16_1, current);
    } else {
      tmp_0 = decodedString(this, this.l16_1, current);
    }
    var result = tmp_0;
    this.l16_1 = current;
    return result;
  };
  AbstractJsonLexer.prototype.k1e = function (fromIndex, toIndex) {
    this.n16_1.mh(this.l1e(), fromIndex, toIndex);
  };
  AbstractJsonLexer.prototype.t1e = function (condition, position, message) {
    if (!condition) {
      this.z1a(message(), position);
    }
  };
  AbstractJsonLexer.prototype.z1b = function (allowLenientStrings) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    var tokenStack = tmp$ret$0;
    var lastToken = this.g1a();
    if (!(lastToken === 8) ? !(lastToken === 6) : false) {
      this.j1a();
      return Unit_getInstance();
    }
    $l$loop: while (true) {
      lastToken = this.g1a();
      if (lastToken === 1) {
        if (allowLenientStrings) {
          this.j1a();
        } else {
          this.a1c();
        }
        continue $l$loop;
      }
      var tmp0_subject = lastToken;
      if (tmp0_subject === 8 ? true : tmp0_subject === 6) {
        tokenStack.g(lastToken);
      } else if (tmp0_subject === 9) {
        if (!(last(tokenStack) === 8))
          throw JsonDecodingException_0(this.l16_1, 'found ] instead of }', this.l1e());
        removeLast(tokenStack);
      } else if (tmp0_subject === 7) {
        if (!(last(tokenStack) === 6))
          throw JsonDecodingException_0(this.l16_1, 'found } instead of ]', this.l1e());
        removeLast(tokenStack);
      } else if (tmp0_subject === 10) {
        this.y19('Unexpected end of input due to malformed JSON during ignoring unknown keys', 0, 2, null);
      }
      this.l1a();
      if (tokenStack.o() === 0)
        return Unit_getInstance();
    }
  };
  AbstractJsonLexer.prototype.toString = function () {
    return "JsonReader(source='" + this.l1e() + "', currentPosition=" + this.l16_1 + ')';
  };
  AbstractJsonLexer.prototype.y1b = function (key) {
    var processed = this.s1e(0, this.l16_1);
    var lastIndexOf = lastIndexOf$default(processed, key, 0, false, 6, null);
    this.z1a("Encountered an unknown key '" + key + "'.\nUse 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.", lastIndexOf);
  };
  AbstractJsonLexer.prototype.z1a = function (message, position) {
    throw JsonDecodingException_0(position, message, this.l1e());
  };
  AbstractJsonLexer.prototype.y19 = function (message, position, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      position = this.l16_1;
    return this.z1a(message, position);
  };
  AbstractJsonLexer.prototype.j1c = function () {
    var current = this.r1e();
    current = this.m1e(current);
    if (current >= charSequenceLength(this.l1e()) ? true : current === -1) {
      this.y19('EOF', 0, 2, null);
    }
    var tmp;
    if (equals(new Char(charSequenceGet(this.l1e(), current)), new Char(_Char___init__impl__6a9atx(34)))) {
      current = current + 1 | 0;
      if (current === charSequenceLength(this.l1e())) {
        this.y19('EOF', 0, 2, null);
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
      var ch = charSequenceGet(this.l1e(), current);
      if (equals(new Char(ch), new Char(_Char___init__impl__6a9atx(45)))) {
        if (!(current === start)) {
          this.y19("Unexpected symbol '-' in numeric literal", 0, 2, null);
        }
        isNegative = true;
        current = current + 1 | 0;
        continue $l$loop_0;
      }
      var token = charToTokenClass(ch);
      if (!(token === 0))
        break $l$loop_0;
      current = current + 1 | 0;
      hasChars = !(current === charSequenceLength(this.l1e()));
      var digit = Char__minus_impl_a2frrh(ch, _Char___init__impl__6a9atx(48));
      if (!(0 <= digit ? digit <= 9 : false)) {
        var tmp_0 = "Unexpected symbol '" + new Char(ch) + "' in numeric literal";
        this.y19(tmp_0, 0, 2, null);
      }
      var tmp$ret$1;
      // Inline function 'kotlin.Long.minus' call
      var tmp$ret$0;
      // Inline function 'kotlin.Long.times' call
      var tmp0_times = accumulator;
      tmp$ret$0 = tmp0_times.p8(new Long(10, 0));
      var tmp1_minus = tmp$ret$0;
      tmp$ret$1 = tmp1_minus.r8(toLong_0(digit));
      accumulator = tmp$ret$1;
      if (accumulator.o8(new Long(0, 0)) > 0) {
        this.y19('Numeric value overflow', 0, 2, null);
      }
    }
    if (start === current ? true : isNegative ? start === (current - 1 | 0) : false) {
      this.y19('Expected numeric literal', 0, 2, null);
    }
    if (hasQuotation) {
      if (!hasChars) {
        this.y19('EOF', 0, 2, null);
      }
      if (!equals(new Char(charSequenceGet(this.l1e(), current)), new Char(_Char___init__impl__6a9atx(34)))) {
        this.y19('Expected closing quotation mark', 0, 2, null);
      }
      current = current + 1 | 0;
    }
    this.l16_1 = current;
    var tmp_1;
    if (isNegative) {
      tmp_1 = accumulator;
    } else {
      var tmp_2 = accumulator;
      Companion_getInstance_4();
      if (!tmp_2.equals(new Long(0, -2147483648))) {
        tmp_1 = accumulator.m8();
      } else {
        this.y19('Numeric value overflow', 0, 2, null);
      }
    }
    return tmp_1;
  };
  AbstractJsonLexer.prototype.h1c = function () {
    return consumeBoolean(this, this.r1e());
  };
  AbstractJsonLexer.prototype.i1c = function () {
    var current = this.r1e();
    if (current === charSequenceLength(this.l1e())) {
      this.y19('EOF', 0, 2, null);
    }
    var tmp;
    if (equals(new Char(charSequenceGet(this.l1e(), current)), new Char(_Char___init__impl__6a9atx(34)))) {
      current = current + 1 | 0;
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var result = consumeBoolean(this, current);
    if (hasQuotation) {
      if (this.l16_1 === charSequenceLength(this.l1e())) {
        this.y19('EOF', 0, 2, null);
      }
      if (!equals(new Char(charSequenceGet(this.l1e(), this.l16_1)), new Char(_Char___init__impl__6a9atx(34)))) {
        this.y19('Expected closing quotation mark', 0, 2, null);
      }
      var tmp0_this = this;
      tmp0_this.l16_1 = tmp0_this.l16_1 + 1 | 0;
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
      var tmp_0 = CharMappings_getInstance().v1e_1;
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
    return c < 117 ? CharMappings_getInstance().u1e_1[c] : _Char___init__impl__6a9atx(0);
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
      $this.u1e_1[tmp$ret$0] = numberToChar(c);
    }
  }
  function initC2ESC_0($this, c, esc) {
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2ESC($this, tmp$ret$0, esc);
  }
  function initC2TC($this, c, cl) {
    $this.v1e_1[c] = cl;
  }
  function initC2TC_0($this, c, cl) {
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2TC($this, tmp$ret$0, cl);
  }
  function CharMappings() {
    CharMappings_instance = this;
    this.u1e_1 = charArray(117);
    this.v1e_1 = new Int8Array(126);
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
    this.z1e_1 = source;
  }
  StringJsonLexer.prototype.l1e = function () {
    return this.z1e_1;
  };
  StringJsonLexer.prototype.m1e = function (position) {
    return position < this.z1e_1.length ? position : -1;
  };
  StringJsonLexer.prototype.l1a = function () {
    var source = this.z1e_1;
    $l$loop: while (!(this.l16_1 === -1) ? this.l16_1 < source.length : false) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.l16_1;
      tmp0_this.l16_1 = tmp1 + 1 | 0;
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
  StringJsonLexer.prototype.v1b = function () {
    var current = this.r1e();
    if (current === this.z1e_1.length ? true : current === -1)
      return false;
    if (equals(new Char(charSequenceGet(this.z1e_1, current)), new Char(_Char___init__impl__6a9atx(44)))) {
      var tmp0_this = this;
      tmp0_this.l16_1 = tmp0_this.l16_1 + 1 | 0;
      return true;
    }
    return false;
  };
  StringJsonLexer.prototype.h1a = function () {
    var current = this.l16_1;
    if (current === -1)
      return false;
    $l$loop: while (current < this.z1e_1.length) {
      var c = charSequenceGet(this.z1e_1, current);
      if (((equals(new Char(c), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(9)))) {
        current = current + 1 | 0;
        continue $l$loop;
      }
      this.l16_1 = current;
      return this.o1e(c);
    }
    this.l16_1 = current;
    return false;
  };
  StringJsonLexer.prototype.r1e = function () {
    var current = this.l16_1;
    if (current === -1)
      return current;
    $l$loop: while (current < this.z1e_1.length) {
      var c = charSequenceGet(this.z1e_1, current);
      if (((equals(new Char(c), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(9)))) {
        current = current + 1 | 0;
      } else {
        break $l$loop;
      }
    }
    this.l16_1 = current;
    return current;
  };
  StringJsonLexer.prototype.u1b = function (expected) {
    if (this.l16_1 === -1) {
      this.q1e(expected);
    }
    var source = this.z1e_1;
    $l$loop: while (this.l16_1 < source.length) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.l16_1;
      tmp0_this.l16_1 = tmp1 + 1 | 0;
      var c = charSequenceGet(source, tmp1);
      if (((equals(new Char(c), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(9))))
        continue $l$loop;
      if (equals(new Char(c), new Char(expected)))
        return Unit_getInstance();
      this.q1e(expected);
    }
    this.q1e(expected);
  };
  StringJsonLexer.prototype.a1c = function () {
    this.u1b(get_STRING());
    var current = this.l16_1;
    var tmp = _Char___init__impl__6a9atx(34);
    var closingQuote = indexOf$default(this.z1e_1, tmp, current, false, 4, null);
    if (closingQuote === -1) {
      this.p1e(get_TC_STRING());
    }
    var inductionVariable = current;
    if (inductionVariable < closingQuote)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (equals(new Char(charSequenceGet(this.z1e_1, i)), new Char(get_STRING_ESC()))) {
          return this.consumeString2(this.z1e_1, this.l16_1, i);
        }
      }
       while (inductionVariable < closingQuote);
    this.l16_1 = closingQuote + 1 | 0;
    var tmp$ret$1;
    // Inline function 'kotlin.text.substring' call
    var tmp0_substring = this.z1e_1;
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
    return _this__u8e3s4.p15_1;
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
    return input.ur(deserializer);
  }
  function coerceInputValue_1($this, descriptor, index, tag) {
    var tmp$ret$1;
    $l$block_1: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var tmp0_tryCoerceValue = $this.q17();
      var tmp1_tryCoerceValue = descriptor.eq(index);
      var tmp;
      if (!tmp1_tryCoerceValue.yp()) {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.DynamicInput.coerceInputValue.<anonymous>' call
        tmp$ret$0 = $this.i1f(tag) == null;
        tmp = tmp$ret$0;
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_1;
      }
      if (equals(tmp1_tryCoerceValue.lq(), ENUM_getInstance())) {
        var tmp$ret$2;
        // Inline function 'kotlinx.serialization.json.internal.DynamicInput.coerceInputValue.<anonymous>' call
        var tmp_0 = $this.i1f(tag);
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
    return $this.c1f_1[name] !== undefined;
  }
  function absenceIsNull_0($this, descriptor, index) {
    $this.g1f_1 = (!$this.q17().n15_1.h17_1 ? !descriptor.hq(index) : false) ? descriptor.eq(index).yp() : false;
    return $this.g1f_1;
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
    this.c1f_1 = value;
    this.d1f_1 = json;
    var tmp = this;
    var tmp0_elvis_lhs = this.c1f_1;
    tmp.e1f_1 = Object.keys(tmp0_elvis_lhs == null ? {} : tmp0_elvis_lhs);
    var tmp_0 = this;
    var tmp_1 = this.e1f_1.length;
    tmp_0.f1f_1 = (!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE();
    this.g1f_1 = false;
    this.h1f_1 = 0;
  }
  DynamicInput.prototype.j2 = function () {
    return this.c1f_1;
  };
  DynamicInput.prototype.q17 = function () {
    return this.d1f_1;
  };
  DynamicInput.prototype.y2 = function () {
    return this.e1f_1;
  };
  DynamicInput.prototype.o = function () {
    return this.f1f_1;
  };
  DynamicInput.prototype.tp = function () {
    return this.q17().tp();
  };
  DynamicInput.prototype.r17 = function () {
    var tag = this.l13();
    if (!(tag == null)) {
      return decodeFromDynamic(this.q17(), Companion_getInstance_5().s17(), this.c1f_1[tag]);
    }
    if (this.c1f_1 == null) {
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
        var key = this.e1f_1[i];
        var value = decodeDynamic(this.q17(), Companion_getInstance_5().s17(), this.c1f_1[key]);
        builder.e18(toString(key), value);
      }
       while (inductionVariable < last);
    tmp$ret$0 = builder.hk();
    return tmp$ret$0;
  };
  DynamicInput.prototype.ur = function (deserializer) {
    return decodeSerializableValuePolymorphic(this, deserializer);
  };
  DynamicInput.prototype.m13 = function (parentName, childName) {
    return childName;
  };
  DynamicInput.prototype.ks = function (descriptor) {
    while (this.h1f_1 < descriptor.jq()) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.h1f_1;
      tmp0_this.h1f_1 = tmp1 + 1 | 0;
      var name = this.g13(descriptor, tmp1);
      var index = this.h1f_1 - 1 | 0;
      this.g1f_1 = false;
      if ((hasName(this, name) ? true : absenceIsNull_0(this, descriptor, index)) ? !this.q17().n15_1.j17_1 ? true : !coerceInputValue_1(this, descriptor, index, name) : false) {
        return index;
      }
    }
    Companion_getInstance_0();
    return -1;
  };
  DynamicInput.prototype.h13 = function (desc, index) {
    var mainName = desc.gq(index);
    if (!this.q17().n15_1.n17_1)
      return mainName;
    if (hasName(this, mainName))
      return mainName;
    var tmp = get_schemaCache(this.q17());
    var tmp_0 = get_JsonAlternativeNamesKey();
    var alternativeNamesMap = tmp.a1a(desc, tmp_0, buildAlternativeNamesMap$ref_1(desc));
    var tmp$ret$2;
    // Inline function 'kotlin.collections.find' call
    var tmp_1 = this.e1f_1;
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
  DynamicInput.prototype.i1f = function (tag) {
    return this.c1f_1[tag];
  };
  DynamicInput.prototype.b1d = function (tag) {
    var value = this.i1f(tag);
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
  DynamicInput.prototype.w13 = function (tag) {
    return this.b1d((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  DynamicInput.prototype.y1c = function (tag) {
    var value = this.i1f(tag);
    var tmp0_elvis_lhs = (!(value == null) ? typeof value === 'number' : false) ? value : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw SerializationException_init_$Create$('' + value + ' is not a Number');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var number = tmp;
    return this.j1f(number);
  };
  DynamicInput.prototype.t13 = function (tag) {
    return this.y1c((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  DynamicInput.prototype.j1f = function (number) {
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
  DynamicInput.prototype.k1f = function (tag) {
    var tmp0_elvis_lhs = this.i1f(tag);
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
  DynamicInput.prototype.n13 = function (tag) {
    return this.k1f((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  DynamicInput.prototype.t1c = function (tag) {
    if (this.g1f_1) {
      return false;
    }
    var o = this.i1f(tag);
    if (o === undefined) {
      throwMissingTag(this, tag);
    }
    return o != null;
  };
  DynamicInput.prototype.o13 = function (tag) {
    return this.t1c((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  DynamicInput.prototype.vr = function (descriptor) {
    var tmp0_safe_receiver = this.l13();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.json.internal.DynamicInput.beginStructure.<anonymous>' call
      tmp$ret$0 = this.c1f_1[tmp0_safe_receiver];
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    var currentValue = tmp1_elvis_lhs == null ? this.c1f_1 : tmp1_elvis_lhs;
    var tmp2_subject = descriptor.lq();
    var tmp_0;
    if (tmp2_subject instanceof PolymorphicKind) {
      tmp_0 = this.q17().n15_1.k17_1 ? LIST_getInstance() : MAP_getInstance();
    } else {
      tmp_0 = descriptor.lq();
    }
    var kind = tmp_0;
    var tmp3_subject = kind;
    return equals(tmp3_subject, LIST_getInstance()) ? new DynamicListInput(currentValue, this.q17()) : equals(tmp3_subject, MAP_getInstance()) ? new DynamicMapInput(currentValue, this.q17()) : new DynamicInput(currentValue, this.q17());
  };
  DynamicInput.$metadata$ = classMeta('DynamicInput', [JsonDecoder], undefined, undefined, undefined, NamedValueDecoder.prototype);
  function PrimitiveDynamicInput(value, json) {
    DynamicInput.call(this, value, json);
    this.z13('primitive');
  }
  PrimitiveDynamicInput.prototype.i1f = function (tag) {
    return this.c1f_1;
  };
  PrimitiveDynamicInput.prototype.r17 = function () {
    var str = toString(this.c1f_1);
    var tmp0_subject = typeof this.c1f_1;
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
    tmp.b1g_1 = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
    this.c1g_1 = -1;
  }
  DynamicListInput.prototype.o = function () {
    return this.b1g_1;
  };
  DynamicListInput.prototype.h13 = function (desc, index) {
    return index.toString();
  };
  DynamicListInput.prototype.ks = function (descriptor) {
    while (this.c1g_1 < (this.b1g_1 - 1 | 0)) {
      var tmp0_this = this;
      tmp0_this.c1g_1 = tmp0_this.c1g_1 + 1 | 0;
      var o = this.c1f_1[tmp0_this.c1g_1];
      if (o !== undefined)
        return this.c1g_1;
    }
    Companion_getInstance_0();
    return -1;
  };
  DynamicListInput.prototype.r17 = function () {
    var tag = this.l13();
    if (!(tag == null)) {
      return decodeFromDynamic(this.q17(), Companion_getInstance_5().s17(), this.c1f_1[tag]);
    }
    var tmp$ret$0;
    // Inline function 'kotlinx.serialization.json.buildJsonArray' call
    // Inline function 'kotlin.contracts.contract' call
    var builder = new JsonArrayBuilder();
    // Inline function 'kotlinx.serialization.json.internal.DynamicListInput.decodeJsonElement.<anonymous>' call
    var inductionVariable = 0;
    var last = this.b1g_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        builder.g18(decodeFromDynamic(this.q17(), Companion_getInstance_5().s17(), this.c1f_1[i]));
      }
       while (inductionVariable < last);
    tmp$ret$0 = builder.hk();
    return tmp$ret$0;
  };
  DynamicListInput.$metadata$ = classMeta('DynamicListInput', undefined, undefined, undefined, undefined, DynamicInput.prototype);
  function _get_isKey__g0dpic($this) {
    return ($this.m1g_1 % 2 | 0) === 0;
  }
  function throwIllegalKeyType($this, tag, value, type) {
    throw SerializationException_init_$Create$('Property ' + tag + ' is not valid type ' + type + ': ' + toString(value));
  }
  function DynamicMapInput(value, json) {
    DynamicInput.call(this, value, json);
    var tmp = this;
    var tmp_0 = this.e1f_1.length;
    tmp.l1g_1 = imul((!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE(), 2);
    this.m1g_1 = -1;
  }
  DynamicMapInput.prototype.o = function () {
    return this.l1g_1;
  };
  DynamicMapInput.prototype.h13 = function (desc, index) {
    var i = index / 2 | 0;
    var tmp = this.e1f_1[i];
    return (!(tmp == null) ? typeof tmp === 'string' : false) ? tmp : THROW_CCE();
  };
  DynamicMapInput.prototype.v1c = function (tag) {
    var tmp$ret$1;
    $l$block_0: {
      // Inline function 'kotlinx.serialization.json.internal.DynamicMapInput.decodeMapKey' call
      if (_get_isKey__g0dpic(this)) {
        var value = this.k1f(tag);
        if (!(typeof value === 'string')) {
          var tmp$ret$0;
          // Inline function 'kotlinx.serialization.json.internal.DynamicMapInput.decodeTaggedByte.<anonymous>' call
          tmp$ret$0 = DynamicInput.prototype.q13.call(this, tag);
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
      tmp$ret$3 = DynamicInput.prototype.q13.call(this, tag);
      tmp$ret$1 = tmp$ret$3;
    }
    return tmp$ret$1;
  };
  DynamicMapInput.prototype.q13 = function (tag) {
    return this.v1c((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  DynamicMapInput.prototype.w1c = function (tag) {
    var tmp$ret$1;
    $l$block_0: {
      // Inline function 'kotlinx.serialization.json.internal.DynamicMapInput.decodeMapKey' call
      if (_get_isKey__g0dpic(this)) {
        var value = this.k1f(tag);
        if (!(typeof value === 'string')) {
          var tmp$ret$0;
          // Inline function 'kotlinx.serialization.json.internal.DynamicMapInput.decodeTaggedShort.<anonymous>' call
          tmp$ret$0 = DynamicInput.prototype.r13.call(this, tag);
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
      tmp$ret$3 = DynamicInput.prototype.r13.call(this, tag);
      tmp$ret$1 = tmp$ret$3;
    }
    return tmp$ret$1;
  };
  DynamicMapInput.prototype.r13 = function (tag) {
    return this.w1c((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  DynamicMapInput.prototype.x1c = function (tag) {
    var tmp$ret$1;
    $l$block_0: {
      // Inline function 'kotlinx.serialization.json.internal.DynamicMapInput.decodeMapKey' call
      if (_get_isKey__g0dpic(this)) {
        var value = this.k1f(tag);
        if (!(typeof value === 'string')) {
          var tmp$ret$0;
          // Inline function 'kotlinx.serialization.json.internal.DynamicMapInput.decodeTaggedInt.<anonymous>' call
          tmp$ret$0 = DynamicInput.prototype.s13.call(this, tag);
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
      tmp$ret$3 = DynamicInput.prototype.s13.call(this, tag);
      tmp$ret$1 = tmp$ret$3;
    }
    return tmp$ret$1;
  };
  DynamicMapInput.prototype.s13 = function (tag) {
    return this.x1c((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  DynamicMapInput.prototype.y1c = function (tag) {
    var tmp$ret$1;
    $l$block_0: {
      // Inline function 'kotlinx.serialization.json.internal.DynamicMapInput.decodeMapKey' call
      if (_get_isKey__g0dpic(this)) {
        var value = this.k1f(tag);
        if (!(typeof value === 'string')) {
          var tmp$ret$0;
          // Inline function 'kotlinx.serialization.json.internal.DynamicMapInput.decodeTaggedLong.<anonymous>' call
          tmp$ret$0 = DynamicInput.prototype.y1c.call(this, tag);
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
        tmp$ret$2 = this.j1f(tmp);
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
      tmp$ret$3 = DynamicInput.prototype.y1c.call(this, tag);
      tmp$ret$1 = tmp$ret$3;
    }
    return tmp$ret$1;
  };
  DynamicMapInput.prototype.t13 = function (tag) {
    return this.y1c((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  DynamicMapInput.prototype.z1c = function (tag) {
    var tmp$ret$1;
    $l$block_0: {
      // Inline function 'kotlinx.serialization.json.internal.DynamicMapInput.decodeMapKey' call
      if (_get_isKey__g0dpic(this)) {
        var value = this.k1f(tag);
        if (!(typeof value === 'string')) {
          var tmp$ret$0;
          // Inline function 'kotlinx.serialization.json.internal.DynamicMapInput.decodeTaggedFloat.<anonymous>' call
          tmp$ret$0 = DynamicInput.prototype.u13.call(this, tag);
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
      tmp$ret$6 = DynamicInput.prototype.u13.call(this, tag);
      tmp$ret$1 = tmp$ret$6;
    }
    return tmp$ret$1;
  };
  DynamicMapInput.prototype.u13 = function (tag) {
    return this.z1c((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  DynamicMapInput.prototype.a1d = function (tag) {
    var tmp$ret$1;
    $l$block_0: {
      // Inline function 'kotlinx.serialization.json.internal.DynamicMapInput.decodeMapKey' call
      if (_get_isKey__g0dpic(this)) {
        var value = this.k1f(tag);
        if (!(typeof value === 'string')) {
          var tmp$ret$0;
          // Inline function 'kotlinx.serialization.json.internal.DynamicMapInput.decodeTaggedDouble.<anonymous>' call
          tmp$ret$0 = DynamicInput.prototype.v13.call(this, tag);
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
      tmp$ret$3 = DynamicInput.prototype.v13.call(this, tag);
      tmp$ret$1 = tmp$ret$3;
    }
    return tmp$ret$1;
  };
  DynamicMapInput.prototype.v13 = function (tag) {
    return this.a1d((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  DynamicMapInput.prototype.ks = function (descriptor) {
    while (this.m1g_1 < (this.l1g_1 - 1 | 0)) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.m1g_1;
      tmp0_this.m1g_1 = tmp1 + 1 | 0;
      var i = tmp1 / 2 | 0;
      var tmp = this.e1f_1[i];
      var name = (!(tmp == null) ? typeof tmp === 'string' : false) ? tmp : THROW_CCE();
      if (this.c1f_1[name] !== undefined)
        return this.m1g_1;
    }
    Companion_getInstance_0();
    return -1;
  };
  DynamicMapInput.prototype.i1f = function (tag) {
    return (this.m1g_1 % 2 | 0) === 0 ? tag : this.c1f_1[tag];
  };
  DynamicMapInput.$metadata$ = classMeta('DynamicMapInput', undefined, undefined, undefined, undefined, DynamicInput.prototype);
  function JsonStringBuilder() {
    this.c16_1 = StringBuilder_init_$Create$_0(128);
  }
  JsonStringBuilder.prototype.u10 = function (value) {
    this.c16_1.oh(value);
  };
  JsonStringBuilder.prototype.tz = function (ch) {
    this.c16_1.j8(ch);
  };
  JsonStringBuilder.prototype.g19 = function (string) {
    this.c16_1.ph(string);
  };
  JsonStringBuilder.prototype.p19 = function (string) {
    printQuoted(this.c16_1, string);
  };
  JsonStringBuilder.prototype.toString = function () {
    return this.c16_1.toString();
  };
  JsonStringBuilder.prototype.d16 = function () {
  };
  JsonStringBuilder.$metadata$ = classMeta('JsonStringBuilder');
  function createMapForCache(initialCapacity) {
    return HashMap_init_$Create$(initialCapacity);
  }
  //region block: post-declaration
  defer$1.prototype.yp = get_isNullable;
  defer$1.prototype.kq = get_isInline;
  defer$1.prototype.iq = get_annotations;
  PolymorphismValidator.prototype.h15 = contextual;
  StreamingJsonDecoder.prototype.js = decodeSequentially;
  StreamingJsonDecoder.prototype.ls = decodeCollectionSize;
  StreamingJsonDecoder.prototype.hs = decodeSerializableElement$default;
  JsonDecoderForUnsignedTypes.prototype.ur = decodeSerializableValue;
  JsonDecoderForUnsignedTypes.prototype.hs = decodeSerializableElement$default;
  JsonDecoderForUnsignedTypes.prototype.js = decodeSequentially;
  JsonDecoderForUnsignedTypes.prototype.ls = decodeCollectionSize;
  StreamingJsonEncoder.prototype.mt = encodeNotNullMark;
  StreamingJsonEncoder.prototype.nt = beginCollection;
  StreamingJsonEncoder.prototype.lt = encodeNullableSerializableValue;
  AbstractJsonTreeDecoder.prototype.hs = decodeSerializableElement$default;
  AbstractJsonTreeDecoder.prototype.js = decodeSequentially;
  AbstractJsonTreeDecoder.prototype.ls = decodeCollectionSize;
  JsonTreeDecoder.prototype.hs = decodeSerializableElement$default;
  JsonTreeDecoder.prototype.js = decodeSequentially;
  JsonTreeDecoder.prototype.ls = decodeCollectionSize;
  JsonTreeListDecoder.prototype.hs = decodeSerializableElement$default;
  JsonTreeListDecoder.prototype.js = decodeSequentially;
  JsonTreeListDecoder.prototype.ls = decodeCollectionSize;
  JsonTreeMapDecoder.prototype.hs = decodeSerializableElement$default;
  JsonTreeMapDecoder.prototype.js = decodeSequentially;
  JsonTreeMapDecoder.prototype.ls = decodeCollectionSize;
  DynamicInput.prototype.hs = decodeSerializableElement$default;
  DynamicInput.prototype.js = decodeSequentially;
  DynamicInput.prototype.ls = decodeCollectionSize;
  PrimitiveDynamicInput.prototype.hs = decodeSerializableElement$default;
  PrimitiveDynamicInput.prototype.js = decodeSequentially;
  PrimitiveDynamicInput.prototype.ls = decodeCollectionSize;
  DynamicListInput.prototype.hs = decodeSerializableElement$default;
  DynamicListInput.prototype.js = decodeSequentially;
  DynamicListInput.prototype.ls = decodeCollectionSize;
  DynamicMapInput.prototype.hs = decodeSerializableElement$default;
  DynamicMapInput.prototype.js = decodeSequentially;
  DynamicMapInput.prototype.ls = decodeCollectionSize;
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
