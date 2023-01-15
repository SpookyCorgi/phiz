(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'Kotlin-Immutable-Collections-kotlinx-collections-immutable-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'Kotlin-Immutable-Collections-kotlinx-collections-immutable-js-ir'.");
    }
    root['Kotlin-Immutable-Collections-kotlinx-collections-immutable-js-ir'] = factory(typeof this['Kotlin-Immutable-Collections-kotlinx-collections-immutable-js-ir'] === 'undefined' ? {} : this['Kotlin-Immutable-Collections-kotlinx-collections-immutable-js-ir'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Collection = kotlin_kotlin.$_$.x3;
  var interfaceMeta = kotlin_kotlin.$_$.d8;
  var MutableCollection = kotlin_kotlin.$_$.i4;
  var MutableList = kotlin_kotlin.$_$.l4;
  var List = kotlin_kotlin.$_$.f4;
  var MutableMap = kotlin_kotlin.$_$.n4;
  var Map = kotlin_kotlin.$_$.h4;
  var MutableSet = kotlin_kotlin.$_$.o4;
  var Set = kotlin_kotlin.$_$.p4;
  var Unit_getInstance = kotlin_kotlin.$_$.n3;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.y1;
  var ListIterator = kotlin_kotlin.$_$.e4;
  var classMeta = kotlin_kotlin.$_$.t7;
  var AbstractList = kotlin_kotlin.$_$.p3;
  var isInterface = kotlin_kotlin.$_$.m8;
  var copyOf = kotlin_kotlin.$_$.h5;
  var fillArrayVal = kotlin_kotlin.$_$.x7;
  var THROW_CCE = kotlin_kotlin.$_$.db;
  var isArray = kotlin_kotlin.$_$.e8;
  var arrayCopy = kotlin_kotlin.$_$.r4;
  var ensureNotNull = kotlin_kotlin.$_$.pb;
  var toString = kotlin_kotlin.$_$.b9;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.t1;
  var coerceAtMost = kotlin_kotlin.$_$.f9;
  var isObject = kotlin_kotlin.$_$.p8;
  var arrayIterator = kotlin_kotlin.$_$.l7;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.w1;
  var AbstractMutableList = kotlin_kotlin.$_$.s3;
  var ConcurrentModificationException_init_$Create$ = kotlin_kotlin.$_$.k1;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.v1;
  var MutableListIterator = kotlin_kotlin.$_$.k4;
  var objectMeta = kotlin_kotlin.$_$.x8;
  var indexOf = kotlin_kotlin.$_$.s5;
  var equals = kotlin_kotlin.$_$.w7;
  var AbstractMap = kotlin_kotlin.$_$.q3;
  var hashCode = kotlin_kotlin.$_$.c8;
  var AbstractMutableMap = kotlin_kotlin.$_$.t3;
  var Iterator = kotlin_kotlin.$_$.b4;
  var Entry = kotlin_kotlin.$_$.g4;
  var toString_0 = kotlin_kotlin.$_$.ac;
  var AbstractSet = kotlin_kotlin.$_$.v3;
  var AbstractCollection = kotlin_kotlin.$_$.o3;
  var until = kotlin_kotlin.$_$.h9;
  var step = kotlin_kotlin.$_$.g9;
  var countOneBits = kotlin_kotlin.$_$.nb;
  var AbstractMutableSet = kotlin_kotlin.$_$.u3;
  var ConcurrentModificationException_init_$Create$_0 = kotlin_kotlin.$_$.l1;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.x1;
  var AssertionError_init_$Create$ = kotlin_kotlin.$_$.j1;
  //endregion
  //region block: pre-declaration
  AbstractPersistentList.prototype = Object.create(AbstractList.prototype);
  AbstractPersistentList.prototype.constructor = AbstractPersistentList;
  BufferIterator.prototype = Object.create(AbstractListIterator.prototype);
  BufferIterator.prototype.constructor = BufferIterator;
  PersistentVector.prototype = Object.create(AbstractPersistentList.prototype);
  PersistentVector.prototype.constructor = PersistentVector;
  PersistentVectorBuilder.prototype = Object.create(AbstractMutableList.prototype);
  PersistentVectorBuilder.prototype.constructor = PersistentVectorBuilder;
  PersistentVectorIterator.prototype = Object.create(AbstractListIterator.prototype);
  PersistentVectorIterator.prototype.constructor = PersistentVectorIterator;
  PersistentVectorMutableIterator.prototype = Object.create(AbstractListIterator.prototype);
  PersistentVectorMutableIterator.prototype.constructor = PersistentVectorMutableIterator;
  SmallPersistentVector.prototype = Object.create(AbstractPersistentList.prototype);
  SmallPersistentVector.prototype.constructor = SmallPersistentVector;
  TrieIterator.prototype = Object.create(AbstractListIterator.prototype);
  TrieIterator.prototype.constructor = TrieIterator;
  PersistentHashMap.prototype = Object.create(AbstractMap.prototype);
  PersistentHashMap.prototype.constructor = PersistentHashMap;
  PersistentHashMapBuilder.prototype = Object.create(AbstractMutableMap.prototype);
  PersistentHashMapBuilder.prototype.constructor = PersistentHashMapBuilder;
  PersistentHashMapKeysIterator.prototype = Object.create(PersistentHashMapBaseIterator.prototype);
  PersistentHashMapKeysIterator.prototype.constructor = PersistentHashMapKeysIterator;
  PersistentHashMapValuesIterator.prototype = Object.create(PersistentHashMapBaseIterator.prototype);
  PersistentHashMapValuesIterator.prototype.constructor = PersistentHashMapValuesIterator;
  PersistentHashMapEntriesIterator.prototype = Object.create(PersistentHashMapBaseIterator.prototype);
  PersistentHashMapEntriesIterator.prototype.constructor = PersistentHashMapEntriesIterator;
  TrieNodeKeysIterator.prototype = Object.create(TrieNodeBaseIterator.prototype);
  TrieNodeKeysIterator.prototype.constructor = TrieNodeKeysIterator;
  TrieNodeValuesIterator.prototype = Object.create(TrieNodeBaseIterator.prototype);
  TrieNodeValuesIterator.prototype.constructor = TrieNodeValuesIterator;
  TrieNodeEntriesIterator.prototype = Object.create(TrieNodeBaseIterator.prototype);
  TrieNodeEntriesIterator.prototype.constructor = TrieNodeEntriesIterator;
  PersistentHashMapKeys.prototype = Object.create(AbstractSet.prototype);
  PersistentHashMapKeys.prototype.constructor = PersistentHashMapKeys;
  PersistentHashMapValues.prototype = Object.create(AbstractCollection.prototype);
  PersistentHashMapValues.prototype.constructor = PersistentHashMapValues;
  PersistentHashMapEntries.prototype = Object.create(AbstractSet.prototype);
  PersistentHashMapEntries.prototype.constructor = PersistentHashMapEntries;
  PersistentOrderedMap.prototype = Object.create(AbstractMap.prototype);
  PersistentOrderedMap.prototype.constructor = PersistentOrderedMap;
  PersistentOrderedMapBuilder.prototype = Object.create(AbstractMutableMap.prototype);
  PersistentOrderedMapBuilder.prototype.constructor = PersistentOrderedMapBuilder;
  PersistentOrderedSet.prototype = Object.create(AbstractSet.prototype);
  PersistentOrderedSet.prototype.constructor = PersistentOrderedSet;
  PersistentOrderedSetBuilder.prototype = Object.create(AbstractMutableSet.prototype);
  PersistentOrderedSetBuilder.prototype.constructor = PersistentOrderedSetBuilder;
  //endregion
  function ImmutableCollection() {
  }
  ImmutableCollection.$metadata$ = interfaceMeta('ImmutableCollection', [Collection]);
  function Builder() {
  }
  Builder.$metadata$ = interfaceMeta('Builder', [MutableCollection]);
  function PersistentCollection() {
  }
  PersistentCollection.$metadata$ = interfaceMeta('PersistentCollection', [ImmutableCollection]);
  function Builder_0() {
  }
  Builder_0.$metadata$ = interfaceMeta('Builder', [MutableList, Builder]);
  function PersistentList() {
  }
  PersistentList.$metadata$ = interfaceMeta('PersistentList', [ImmutableList, PersistentCollection]);
  function ImmutableList() {
  }
  ImmutableList.$metadata$ = interfaceMeta('ImmutableList', [List, ImmutableCollection]);
  function Builder_1() {
  }
  Builder_1.$metadata$ = interfaceMeta('Builder', [MutableMap]);
  function PersistentMap() {
  }
  PersistentMap.$metadata$ = interfaceMeta('PersistentMap', [ImmutableMap]);
  function ImmutableMap() {
  }
  ImmutableMap.$metadata$ = interfaceMeta('ImmutableMap', [Map]);
  function Builder_2() {
  }
  Builder_2.$metadata$ = interfaceMeta('Builder', [MutableSet, Builder]);
  function PersistentSet() {
  }
  PersistentSet.$metadata$ = interfaceMeta('PersistentSet', [ImmutableSet, PersistentCollection]);
  function ImmutableSet() {
  }
  ImmutableSet.$metadata$ = interfaceMeta('ImmutableSet', [Set, ImmutableCollection]);
  function persistentHashMapOf() {
    return Companion_getInstance_0().mk();
  }
  function persistentSetOf() {
    return Companion_getInstance_2().ok();
  }
  function persistentListOf() {
    return persistentVectorOf();
  }
  function mutate(_this__u8e3s4, mutator) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = _this__u8e3s4.kk();
    // Inline function 'kotlin.contracts.contract' call
    mutator(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0.jk();
  }
  function AbstractListIterator(index, size) {
    this.pk_1 = index;
    this.qk_1 = size;
  }
  AbstractListIterator.prototype.m = function () {
    return this.pk_1 < this.qk_1;
  };
  AbstractListIterator.prototype.rk = function () {
    if (!this.m())
      throw NoSuchElementException_init_$Create$();
  };
  AbstractListIterator.$metadata$ = classMeta('AbstractListIterator', [ListIterator]);
  function AbstractPersistentList() {
    AbstractList.call(this);
  }
  AbstractPersistentList.prototype.q = function (elements) {
    var tmp$ret$1;
    // Inline function 'kotlinx.collections.immutable.mutate' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = this.kk();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.collections.immutable.implementations.immutableList.AbstractPersistentList.addAll.<anonymous>' call
    tmp0_apply.q(elements);
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.jk();
    return tmp$ret$1;
  };
  AbstractPersistentList.prototype.ee = function (element) {
    var index = this.f2(element);
    if (!(index === -1)) {
      return this.j4(index);
    }
    return this;
  };
  AbstractPersistentList.prototype.k1 = function (element) {
    return !(this.f2(element) === -1);
  };
  AbstractPersistentList.prototype.l1 = function (elements) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.d();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = elements.l();
      while (tmp0_iterator.m()) {
        var element = tmp0_iterator.n();
        var tmp$ret$1;
        // Inline function 'kotlinx.collections.immutable.implementations.immutableList.AbstractPersistentList.containsAll.<anonymous>' call
        tmp$ret$1 = this.k1(element);
        if (!tmp$ret$1) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  AbstractPersistentList.prototype.l = function () {
    return this.sk();
  };
  AbstractPersistentList.prototype.sk = function () {
    return this.r(0);
  };
  AbstractPersistentList.$metadata$ = classMeta('AbstractPersistentList', [PersistentList], undefined, undefined, undefined, AbstractList.prototype);
  function BufferIterator(buffer, index, size) {
    AbstractListIterator.call(this, index, size);
    this.vk_1 = buffer;
  }
  BufferIterator.prototype.n = function () {
    if (!this.m()) {
      throw NoSuchElementException_init_$Create$();
    }
    var tmp0_this = this;
    var tmp1 = tmp0_this.pk_1;
    tmp0_this.pk_1 = tmp1 + 1 | 0;
    return this.vk_1[tmp1];
  };
  BufferIterator.$metadata$ = classMeta('BufferIterator', undefined, undefined, undefined, undefined, AbstractListIterator.prototype);
  function rootSize($this) {
    return rootSize_1($this.yk_1);
  }
  function pushFilledTail($this, root, filledTail, newTail) {
    if ($this.yk_1 >> get_LOG_MAX_BUFFER_SIZE() > 1 << $this.zk_1) {
      var newRoot = presizedBufferWith(root);
      var newRootShift = $this.zk_1 + get_LOG_MAX_BUFFER_SIZE() | 0;
      newRoot = pushTail($this, newRoot, newRootShift, filledTail);
      return new PersistentVector(newRoot, newTail, $this.yk_1 + 1 | 0, newRootShift);
    }
    var newRoot_0 = pushTail($this, root, $this.zk_1, filledTail);
    return new PersistentVector(newRoot_0, newTail, $this.yk_1 + 1 | 0, $this.zk_1);
  }
  function pushTail($this, root, shift, tail) {
    var bufferIndex = indexSegment($this.yk_1 - 1 | 0, shift);
    var tmp0_safe_receiver = root;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : copyOf(tmp0_safe_receiver, get_MAX_BUFFER_SIZE());
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp0_arrayOfNulls = get_MAX_BUFFER_SIZE();
      tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
      tmp = tmp$ret$0;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var newRootNode = tmp;
    if (shift === get_LOG_MAX_BUFFER_SIZE()) {
      newRootNode[bufferIndex] = tail;
    } else {
      var tmp_0 = newRootNode[bufferIndex];
      newRootNode[bufferIndex] = pushTail($this, (tmp_0 == null ? true : isArray(tmp_0)) ? tmp_0 : THROW_CCE(), shift - get_LOG_MAX_BUFFER_SIZE() | 0, tail);
    }
    return newRootNode;
  }
  function removeFromTailAt($this, root, rootSize, shift, index) {
    var tailSize = $this.yk_1 - rootSize | 0;
    assert(index < tailSize);
    if (tailSize === 1) {
      return pullLastBufferFromRoot($this, root, rootSize, shift);
    }
    var newTail = copyOf($this.xk_1, get_MAX_BUFFER_SIZE());
    if (index < (tailSize - 1 | 0)) {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = $this.xk_1;
      var tmp1_copyInto = index + 1 | 0;
      arrayCopy(tmp0_copyInto, newTail, index, tmp1_copyInto, tailSize);
      tmp$ret$0 = newTail;
    }
    newTail[tailSize - 1 | 0] = null;
    return new PersistentVector(root, newTail, (rootSize + tailSize | 0) - 1 | 0, shift);
  }
  function pullLastBufferFromRoot($this, root, rootSize, shift) {
    if (shift === 0) {
      var buffer = root.length === get_MUTABLE_BUFFER_SIZE() ? copyOf(root, get_MAX_BUFFER_SIZE()) : root;
      return new SmallPersistentVector(buffer);
    }
    var tailCarry = new ObjectRef(null);
    var newRoot = ensureNotNull(pullLastBuffer($this, root, shift, rootSize - 1 | 0, tailCarry));
    var tmp = tailCarry.al_1;
    var newTail = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
    if (newRoot[1] == null) {
      var tmp_0 = newRoot[0];
      var lowerLevelRoot = (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE();
      return new PersistentVector(lowerLevelRoot, newTail, rootSize, shift - get_LOG_MAX_BUFFER_SIZE() | 0);
    }
    return new PersistentVector(newRoot, newTail, rootSize, shift);
  }
  function pullLastBuffer($this, root, shift, index, tailCarry) {
    var bufferIndex = indexSegment(index, shift);
    var tmp;
    if (shift === get_LOG_MAX_BUFFER_SIZE()) {
      tailCarry.al_1 = root[bufferIndex];
      tmp = null;
    } else {
      var tmp_0 = root[bufferIndex];
      tmp = pullLastBuffer($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), shift - get_LOG_MAX_BUFFER_SIZE() | 0, index, tailCarry);
    }
    var newBufferAtIndex = tmp;
    if (newBufferAtIndex == null ? bufferIndex === 0 : false) {
      return null;
    }
    var newRoot = copyOf(root, get_MAX_BUFFER_SIZE());
    newRoot[bufferIndex] = newBufferAtIndex;
    return newRoot;
  }
  function removeFromRootAt($this, root, shift, index, tailCarry) {
    var bufferIndex = indexSegment(index, shift);
    if (shift === 0) {
      var tmp;
      if (bufferIndex === 0) {
        var tmp$ret$0;
        // Inline function 'kotlin.arrayOfNulls' call
        var tmp0_arrayOfNulls = get_MAX_BUFFER_SIZE();
        tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
        tmp = tmp$ret$0;
      } else {
        tmp = copyOf(root, get_MAX_BUFFER_SIZE());
      }
      var newRoot = tmp;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp1_copyInto = bufferIndex + 1 | 0;
      var tmp2_copyInto = get_MAX_BUFFER_SIZE();
      arrayCopy(root, newRoot, bufferIndex, tmp1_copyInto, tmp2_copyInto);
      tmp$ret$1 = newRoot;
      newRoot[get_MAX_BUFFER_SIZE() - 1 | 0] = tailCarry.al_1;
      tailCarry.al_1 = root[bufferIndex];
      return newRoot;
    }
    var bufferLastIndex = get_MAX_BUFFER_SIZE_MINUS_ONE();
    if (root[bufferLastIndex] == null) {
      bufferLastIndex = indexSegment(rootSize($this) - 1 | 0, shift);
    }
    var newRoot_0 = copyOf(root, get_MAX_BUFFER_SIZE());
    var lowerLevelShift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    var inductionVariable = bufferLastIndex;
    var last = bufferIndex + 1 | 0;
    if (last <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var tmp_0 = newRoot_0[i];
        newRoot_0[i] = removeFromRootAt($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), lowerLevelShift, 0, tailCarry);
      }
       while (!(i === last));
    var tmp_1 = newRoot_0[bufferIndex];
    newRoot_0[bufferIndex] = removeFromRootAt($this, (!(tmp_1 == null) ? isArray(tmp_1) : false) ? tmp_1 : THROW_CCE(), lowerLevelShift, index, tailCarry);
    return newRoot_0;
  }
  function bufferFor($this, index) {
    if (rootSize($this) <= index) {
      return $this.xk_1;
    }
    var buffer = $this.wk_1;
    var shift = $this.zk_1;
    while (shift > 0) {
      var tmp = buffer[indexSegment(index, shift)];
      buffer = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
      shift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    }
    return buffer;
  }
  function PersistentVector(root, tail, size, rootShift) {
    AbstractPersistentList.call(this);
    this.wk_1 = root;
    this.xk_1 = tail;
    this.yk_1 = size;
    this.zk_1 = rootShift;
    // Inline function 'kotlin.require' call
    var tmp0_require = this.yk_1 > get_MAX_BUFFER_SIZE();
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.collections.immutable.implementations.immutableList.PersistentVector.<anonymous>' call
      tmp$ret$0 = 'Trie-based persistent vector should have at least ' + (get_MAX_BUFFER_SIZE() + 1 | 0) + ' elements, got ' + this.yk_1;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    assert((this.yk_1 - rootSize_1(this.yk_1) | 0) <= coerceAtMost(this.xk_1.length, get_MAX_BUFFER_SIZE()));
  }
  PersistentVector.prototype.o = function () {
    return this.yk_1;
  };
  PersistentVector.prototype.g = function (element) {
    var tailSize = this.yk_1 - rootSize(this) | 0;
    if (tailSize < get_MAX_BUFFER_SIZE()) {
      var newTail = copyOf(this.xk_1, get_MAX_BUFFER_SIZE());
      newTail[tailSize] = element;
      return new PersistentVector(this.wk_1, newTail, this.yk_1 + 1 | 0, this.zk_1);
    }
    var newTail_0 = presizedBufferWith(element);
    return pushFilledTail(this, this.wk_1, this.xk_1, newTail_0);
  };
  PersistentVector.prototype.j4 = function (index) {
    ListImplementation_getInstance().a2(index, this.yk_1);
    var rootSize_0 = rootSize(this);
    if (index >= rootSize_0) {
      return removeFromTailAt(this, this.wk_1, rootSize_0, this.zk_1, index - rootSize_0 | 0);
    }
    var newRoot = removeFromRootAt(this, this.wk_1, this.zk_1, index, new ObjectRef(this.xk_1[0]));
    return removeFromTailAt(this, newRoot, rootSize_0, this.zk_1, 0);
  };
  PersistentVector.prototype.kk = function () {
    return new PersistentVectorBuilder(this, this.wk_1, this.xk_1, this.zk_1);
  };
  PersistentVector.prototype.r = function (index) {
    ListImplementation_getInstance().z1(index, this.yk_1);
    var tmp = this.xk_1;
    return new PersistentVectorIterator(this.wk_1, isArray(tmp) ? tmp : THROW_CCE(), index, this.yk_1, (this.zk_1 / get_LOG_MAX_BUFFER_SIZE() | 0) + 1 | 0);
  };
  PersistentVector.prototype.p = function (index) {
    ListImplementation_getInstance().a2(index, this.yk_1);
    var buffer = bufferFor(this, index);
    var tmp = buffer[index & get_MAX_BUFFER_SIZE_MINUS_ONE()];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  PersistentVector.$metadata$ = classMeta('PersistentVector', [PersistentList], undefined, undefined, undefined, AbstractPersistentList.prototype);
  function rootSize_0($this) {
    if ($this.jl_1 <= get_MAX_BUFFER_SIZE()) {
      return 0;
    }
    return rootSize_1($this.jl_1);
  }
  function tailSize($this, size) {
    if (size <= get_MAX_BUFFER_SIZE()) {
      return size;
    }
    return size - rootSize_1(size) | 0;
  }
  function tailSize_0($this) {
    return tailSize($this, $this.jl_1);
  }
  function isMutable($this, buffer) {
    return buffer.length === get_MUTABLE_BUFFER_SIZE() ? buffer[get_MUTABLE_BUFFER_SIZE() - 1 | 0] === $this.gl_1 : false;
  }
  function makeMutable($this, buffer) {
    if (buffer == null) {
      return mutableBuffer($this);
    }
    if (isMutable($this, buffer)) {
      return buffer;
    }
    var tmp$ret$0;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = mutableBuffer($this);
    var tmp1_copyInto = coerceAtMost(buffer.length, get_MAX_BUFFER_SIZE());
    arrayCopy(buffer, tmp0_copyInto, 0, 0, tmp1_copyInto);
    tmp$ret$0 = tmp0_copyInto;
    return tmp$ret$0;
  }
  function mutableBufferWith($this, element) {
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = get_MUTABLE_BUFFER_SIZE();
    tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    var buffer = tmp$ret$0;
    buffer[0] = element;
    buffer[get_MUTABLE_BUFFER_SIZE() - 1 | 0] = $this.gl_1;
    return buffer;
  }
  function mutableBuffer($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = get_MUTABLE_BUFFER_SIZE();
    tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    var buffer = tmp$ret$0;
    buffer[get_MUTABLE_BUFFER_SIZE() - 1 | 0] = $this.gl_1;
    return buffer;
  }
  function pushFilledTail_0($this, root, filledTail, newTail) {
    var tmp;
    if ($this.jl_1 >> get_LOG_MAX_BUFFER_SIZE() > 1 << $this.fl_1) {
      $this.hl_1 = pushTail_0($this, mutableBufferWith($this, root), filledTail, $this.fl_1 + get_LOG_MAX_BUFFER_SIZE() | 0);
      $this.il_1 = newTail;
      var tmp0_this = $this;
      tmp0_this.fl_1 = tmp0_this.fl_1 + get_LOG_MAX_BUFFER_SIZE() | 0;
      var tmp1_this = $this;
      tmp1_this.jl_1 = tmp1_this.jl_1 + 1 | 0;
      tmp = Unit_getInstance();
    } else if (root == null) {
      $this.hl_1 = filledTail;
      $this.il_1 = newTail;
      var tmp2_this = $this;
      tmp2_this.jl_1 = tmp2_this.jl_1 + 1 | 0;
      tmp = Unit_getInstance();
    } else {
      $this.hl_1 = pushTail_0($this, root, filledTail, $this.fl_1);
      $this.il_1 = newTail;
      var tmp3_this = $this;
      tmp3_this.jl_1 = tmp3_this.jl_1 + 1 | 0;
      tmp = Unit_getInstance();
    }
    return tmp;
  }
  function pushTail_0($this, root, tail, shift) {
    var index = indexSegment($this.jl_1 - 1 | 0, shift);
    var mutableRoot = makeMutable($this, root);
    if (shift === get_LOG_MAX_BUFFER_SIZE()) {
      mutableRoot[index] = tail;
    } else {
      var tmp = mutableRoot[index];
      mutableRoot[index] = pushTail_0($this, (tmp == null ? true : isArray(tmp)) ? tmp : THROW_CCE(), tail, shift - get_LOG_MAX_BUFFER_SIZE() | 0);
    }
    return mutableRoot;
  }
  function copyToBuffer($this, buffer, bufferIndex, sourceIterator) {
    var index = bufferIndex;
    while (index < get_MAX_BUFFER_SIZE() ? sourceIterator.m() : false) {
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      buffer[tmp0] = sourceIterator.n();
    }
    return buffer;
  }
  function pushBuffersIncreasingHeightIfNeeded($this, root, rootSize, buffers) {
    var buffersIterator = arrayIterator(buffers);
    var mutableRoot = rootSize >> get_LOG_MAX_BUFFER_SIZE() < 1 << $this.fl_1 ? pushBuffers($this, root, rootSize, $this.fl_1, buffersIterator) : makeMutable($this, root);
    while (buffersIterator.m()) {
      var tmp0_this = $this;
      tmp0_this.fl_1 = tmp0_this.fl_1 + get_LOG_MAX_BUFFER_SIZE() | 0;
      mutableRoot = mutableBufferWith($this, mutableRoot);
      pushBuffers($this, mutableRoot, 1 << $this.fl_1, $this.fl_1, buffersIterator);
    }
    return mutableRoot;
  }
  function pushBuffers($this, root, rootSize, shift, buffersIterator) {
    // Inline function 'kotlin.check' call
    var tmp0_check = buffersIterator.m();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'kotlin.check.<anonymous>' call
      tmp$ret$0 = 'Check failed.';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.check' call
    var tmp1_check = shift >= 0;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_check) {
      var tmp$ret$1;
      // Inline function 'kotlin.check.<anonymous>' call
      tmp$ret$1 = 'Check failed.';
      var message_0 = tmp$ret$1;
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    if (shift === 0) {
      return buffersIterator.n();
    }
    var mutableRoot = makeMutable($this, root);
    var index = indexSegment(rootSize, shift);
    var tmp = index;
    var tmp_0 = mutableRoot[index];
    mutableRoot[tmp] = pushBuffers($this, (tmp_0 == null ? true : isArray(tmp_0)) ? tmp_0 : THROW_CCE(), rootSize, shift - get_LOG_MAX_BUFFER_SIZE() | 0, buffersIterator);
    $l$loop: while (true) {
      var tmp_1;
      index = index + 1 | 0;
      if (index < get_MAX_BUFFER_SIZE()) {
        tmp_1 = buffersIterator.m();
      } else {
        tmp_1 = false;
      }
      if (!tmp_1) {
        break $l$loop;
      }
      var tmp_2 = index;
      var tmp_3 = mutableRoot[index];
      mutableRoot[tmp_2] = pushBuffers($this, (tmp_3 == null ? true : isArray(tmp_3)) ? tmp_3 : THROW_CCE(), 0, shift - get_LOG_MAX_BUFFER_SIZE() | 0, buffersIterator);
    }
    return mutableRoot;
  }
  function insertIntoTail($this, root, index, element) {
    var tailSize = tailSize_0($this);
    var mutableTail = makeMutable($this, $this.il_1);
    if (tailSize < get_MAX_BUFFER_SIZE()) {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = $this.il_1;
      var tmp1_copyInto = index + 1 | 0;
      arrayCopy(tmp0_copyInto, mutableTail, tmp1_copyInto, index, tailSize);
      tmp$ret$0 = mutableTail;
      mutableTail[index] = element;
      $this.hl_1 = root;
      $this.il_1 = mutableTail;
      var tmp0_this = $this;
      tmp0_this.jl_1 = tmp0_this.jl_1 + 1 | 0;
    } else {
      var lastElement = $this.il_1[get_MAX_BUFFER_SIZE_MINUS_ONE()];
      var tmp$ret$1;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp2_copyInto = $this.il_1;
      var tmp3_copyInto = index + 1 | 0;
      var tmp4_copyInto = get_MAX_BUFFER_SIZE_MINUS_ONE();
      arrayCopy(tmp2_copyInto, mutableTail, tmp3_copyInto, index, tmp4_copyInto);
      tmp$ret$1 = mutableTail;
      mutableTail[index] = element;
      pushFilledTail_0($this, root, mutableTail, mutableBufferWith($this, lastElement));
    }
  }
  function insertIntoRoot($this, root, shift, index, element, elementCarry) {
    var bufferIndex = indexSegment(index, shift);
    if (shift === 0) {
      elementCarry.al_1 = root[get_MAX_BUFFER_SIZE_MINUS_ONE()];
      var tmp$ret$0;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = makeMutable($this, root);
      var tmp1_copyInto = bufferIndex + 1 | 0;
      var tmp2_copyInto = get_MAX_BUFFER_SIZE_MINUS_ONE();
      arrayCopy(root, tmp0_copyInto, tmp1_copyInto, bufferIndex, tmp2_copyInto);
      tmp$ret$0 = tmp0_copyInto;
      var mutableRoot = tmp$ret$0;
      mutableRoot[bufferIndex] = element;
      return mutableRoot;
    }
    var mutableRoot_0 = makeMutable($this, root);
    var lowerLevelShift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    var tmp = mutableRoot_0[bufferIndex];
    mutableRoot_0[bufferIndex] = insertIntoRoot($this, (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE(), lowerLevelShift, index, element, elementCarry);
    var inductionVariable = bufferIndex + 1 | 0;
    var last = get_MAX_BUFFER_SIZE();
    if (inductionVariable < last)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (mutableRoot_0[i] == null)
          break $l$loop;
        var tmp_0 = mutableRoot_0[i];
        mutableRoot_0[i] = insertIntoRoot($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), lowerLevelShift, 0, elementCarry.al_1, elementCarry);
      }
       while (inductionVariable < last);
    return mutableRoot_0;
  }
  function bufferFor_0($this, index) {
    if (rootSize_0($this) <= index) {
      return $this.il_1;
    }
    var buffer = ensureNotNull($this.hl_1);
    var shift = $this.fl_1;
    while (shift > 0) {
      var tmp = buffer[indexSegment(index, shift)];
      buffer = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
      shift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    }
    return buffer;
  }
  function removeFromTailAt_0($this, root, rootSize, shift, index) {
    var tailSize = $this.jl_1 - rootSize | 0;
    assert(index < tailSize);
    var removedElement;
    if (tailSize === 1) {
      removedElement = $this.il_1[0];
      pullLastBufferFromRoot_0($this, root, rootSize, shift);
    } else {
      removedElement = $this.il_1[index];
      var tmp$ret$0;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = $this.il_1;
      var tmp1_copyInto = makeMutable($this, $this.il_1);
      var tmp2_copyInto = index + 1 | 0;
      arrayCopy(tmp0_copyInto, tmp1_copyInto, index, tmp2_copyInto, tailSize);
      tmp$ret$0 = tmp1_copyInto;
      var mutableTail = tmp$ret$0;
      mutableTail[tailSize - 1 | 0] = null;
      $this.hl_1 = root;
      $this.il_1 = mutableTail;
      $this.jl_1 = (rootSize + tailSize | 0) - 1 | 0;
      $this.fl_1 = shift;
    }
    return removedElement;
  }
  function removeFromRootAt_0($this, root, shift, index, tailCarry) {
    var bufferIndex = indexSegment(index, shift);
    if (shift === 0) {
      var removedElement = root[bufferIndex];
      var tmp$ret$0;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = makeMutable($this, root);
      var tmp1_copyInto = bufferIndex + 1 | 0;
      var tmp2_copyInto = get_MAX_BUFFER_SIZE();
      arrayCopy(root, tmp0_copyInto, bufferIndex, tmp1_copyInto, tmp2_copyInto);
      tmp$ret$0 = tmp0_copyInto;
      var mutableRoot = tmp$ret$0;
      mutableRoot[get_MAX_BUFFER_SIZE() - 1 | 0] = tailCarry.al_1;
      tailCarry.al_1 = removedElement;
      return mutableRoot;
    }
    var bufferLastIndex = get_MAX_BUFFER_SIZE_MINUS_ONE();
    if (root[bufferLastIndex] == null) {
      bufferLastIndex = indexSegment(rootSize_0($this) - 1 | 0, shift);
    }
    var mutableRoot_0 = makeMutable($this, root);
    var lowerLevelShift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    var inductionVariable = bufferLastIndex;
    var last = bufferIndex + 1 | 0;
    if (last <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var tmp = mutableRoot_0[i];
        mutableRoot_0[i] = removeFromRootAt_0($this, (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE(), lowerLevelShift, 0, tailCarry);
      }
       while (!(i === last));
    var tmp_0 = mutableRoot_0[bufferIndex];
    mutableRoot_0[bufferIndex] = removeFromRootAt_0($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), lowerLevelShift, index, tailCarry);
    return mutableRoot_0;
  }
  function pullLastBufferFromRoot_0($this, root, rootSize, shift) {
    if (shift === 0) {
      $this.hl_1 = null;
      var tmp = $this;
      var tmp0_elvis_lhs = root;
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        var tmp$ret$0;
        // Inline function 'kotlin.emptyArray' call
        tmp$ret$0 = [];
        tmp_0 = tmp$ret$0;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      tmp.il_1 = tmp_0;
      $this.jl_1 = rootSize;
      $this.fl_1 = shift;
      return Unit_getInstance();
    }
    var tailCarry = new ObjectRef(null);
    var newRoot = ensureNotNull(pullLastBuffer_0($this, ensureNotNull(root), shift, rootSize, tailCarry));
    var tmp_1 = $this;
    var tmp_2 = tailCarry.al_1;
    tmp_1.il_1 = (!(tmp_2 == null) ? isArray(tmp_2) : false) ? tmp_2 : THROW_CCE();
    $this.jl_1 = rootSize;
    if (newRoot[1] == null) {
      var tmp_3 = $this;
      var tmp_4 = newRoot[0];
      tmp_3.hl_1 = (tmp_4 == null ? true : isArray(tmp_4)) ? tmp_4 : THROW_CCE();
      $this.fl_1 = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    } else {
      $this.hl_1 = newRoot;
      $this.fl_1 = shift;
    }
  }
  function pullLastBuffer_0($this, root, shift, rootSize, tailCarry) {
    var bufferIndex = indexSegment(rootSize - 1 | 0, shift);
    var tmp;
    if (shift === get_LOG_MAX_BUFFER_SIZE()) {
      tailCarry.al_1 = root[bufferIndex];
      tmp = null;
    } else {
      var tmp_0 = root[bufferIndex];
      tmp = pullLastBuffer_0($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), shift - get_LOG_MAX_BUFFER_SIZE() | 0, rootSize, tailCarry);
    }
    var newBufferAtIndex = tmp;
    if (newBufferAtIndex == null ? bufferIndex === 0 : false) {
      return null;
    }
    var mutableRoot = makeMutable($this, root);
    mutableRoot[bufferIndex] = newBufferAtIndex;
    return mutableRoot;
  }
  function setInRoot($this, root, shift, index, e, oldElementCarry) {
    var bufferIndex = indexSegment(index, shift);
    var mutableRoot = makeMutable($this, root);
    if (shift === 0) {
      if (!(mutableRoot === root)) {
        var tmp0_this = $this;
        var tmp1 = tmp0_this.tc_1;
        tmp0_this.tc_1 = tmp1 + 1 | 0;
      }
      oldElementCarry.al_1 = mutableRoot[bufferIndex];
      mutableRoot[bufferIndex] = e;
      return mutableRoot;
    }
    var tmp = mutableRoot[bufferIndex];
    mutableRoot[bufferIndex] = setInRoot($this, (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE(), shift - get_LOG_MAX_BUFFER_SIZE() | 0, index, e, oldElementCarry);
    return mutableRoot;
  }
  function PersistentVectorBuilder(vector, vectorRoot, vectorTail, rootShift) {
    AbstractMutableList.call(this);
    this.cl_1 = vector;
    this.dl_1 = vectorRoot;
    this.el_1 = vectorTail;
    this.fl_1 = rootShift;
    this.gl_1 = new MutabilityOwnership();
    this.hl_1 = this.dl_1;
    this.il_1 = this.el_1;
    this.jl_1 = this.cl_1.o();
  }
  PersistentVectorBuilder.prototype.o = function () {
    return this.jl_1;
  };
  PersistentVectorBuilder.prototype.kl = function () {
    return this.tc_1;
  };
  PersistentVectorBuilder.prototype.jk = function () {
    var tmp = this;
    var tmp_0;
    if (this.hl_1 === this.dl_1 ? this.il_1 === this.el_1 : false) {
      tmp_0 = this.cl_1;
    } else {
      this.gl_1 = new MutabilityOwnership();
      this.dl_1 = this.hl_1;
      this.el_1 = this.il_1;
      var tmp_1;
      if (this.hl_1 == null) {
        var tmp_2;
        var tmp$ret$0;
        // Inline function 'kotlin.collections.isEmpty' call
        var tmp0_isEmpty = this.il_1;
        tmp$ret$0 = tmp0_isEmpty.length === 0;
        if (tmp$ret$0) {
          tmp_2 = persistentVectorOf();
        } else {
          tmp_2 = new SmallPersistentVector(copyOf(this.il_1, this.jl_1));
        }
        tmp_1 = tmp_2;
      } else {
        tmp_1 = new PersistentVector(ensureNotNull(this.hl_1), this.il_1, this.jl_1, this.fl_1);
      }
      tmp_0 = tmp_1;
    }
    tmp.cl_1 = tmp_0;
    return this.cl_1;
  };
  PersistentVectorBuilder.prototype.g = function (element) {
    var tmp0_this = this;
    tmp0_this.tc_1 = tmp0_this.tc_1 + 1 | 0;
    var tailSize = tailSize_0(this);
    if (tailSize < get_MAX_BUFFER_SIZE()) {
      var mutableTail = makeMutable(this, this.il_1);
      mutableTail[tailSize] = element;
      this.il_1 = mutableTail;
      var tmp1_this = this;
      tmp1_this.jl_1 = tmp1_this.jl_1 + 1 | 0;
    } else {
      var newTail = mutableBufferWith(this, element);
      pushFilledTail_0(this, this.hl_1, this.il_1, newTail);
    }
    return true;
  };
  PersistentVectorBuilder.prototype.q = function (elements) {
    if (elements.d()) {
      return false;
    }
    var tmp0_this = this;
    var tmp1 = tmp0_this.tc_1;
    tmp0_this.tc_1 = tmp1 + 1 | 0;
    var tailSize = tailSize_0(this);
    var elementsIterator = elements.l();
    if ((get_MAX_BUFFER_SIZE() - tailSize | 0) >= elements.o()) {
      this.il_1 = copyToBuffer(this, makeMutable(this, this.il_1), tailSize, elementsIterator);
      var tmp2_this = this;
      tmp2_this.jl_1 = tmp2_this.jl_1 + elements.o() | 0;
    } else {
      var buffersSize = ((elements.o() + tailSize | 0) - 1 | 0) / get_MAX_BUFFER_SIZE() | 0;
      var tmp$ret$0;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp$ret$0 = fillArrayVal(Array(buffersSize), null);
      var buffers = tmp$ret$0;
      buffers[0] = copyToBuffer(this, makeMutable(this, this.il_1), tailSize, elementsIterator);
      var inductionVariable = 1;
      if (inductionVariable < buffersSize)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          buffers[index] = copyToBuffer(this, mutableBuffer(this), 0, elementsIterator);
        }
         while (inductionVariable < buffersSize);
      var tmp = this;
      var tmp_0 = this.hl_1;
      var tmp_1 = rootSize_0(this);
      tmp.hl_1 = pushBuffersIncreasingHeightIfNeeded(this, tmp_0, tmp_1, isArray(buffers) ? buffers : THROW_CCE());
      this.il_1 = copyToBuffer(this, mutableBuffer(this), 0, elementsIterator);
      var tmp4_this = this;
      tmp4_this.jl_1 = tmp4_this.jl_1 + elements.o() | 0;
    }
    return true;
  };
  PersistentVectorBuilder.prototype.yc = function (index, element) {
    ListImplementation_getInstance().z1(index, this.jl_1);
    if (index === this.jl_1) {
      this.g(element);
      return Unit_getInstance();
    }
    var tmp0_this = this;
    tmp0_this.tc_1 = tmp0_this.tc_1 + 1 | 0;
    var rootSize = rootSize_0(this);
    if (index >= rootSize) {
      insertIntoTail(this, this.hl_1, index - rootSize | 0, element);
      return Unit_getInstance();
    }
    var elementCarry = new ObjectRef(null);
    var newRest = insertIntoRoot(this, ensureNotNull(this.hl_1), this.fl_1, index, element, elementCarry);
    var tmp = elementCarry.al_1;
    insertIntoTail(this, newRest, 0, (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE());
  };
  PersistentVectorBuilder.prototype.p = function (index) {
    ListImplementation_getInstance().a2(index, this.jl_1);
    var buffer = bufferFor_0(this, index);
    var tmp = buffer[index & get_MAX_BUFFER_SIZE_MINUS_ONE()];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  PersistentVectorBuilder.prototype.j4 = function (index) {
    ListImplementation_getInstance().a2(index, this.jl_1);
    var tmp0_this = this;
    tmp0_this.tc_1 = tmp0_this.tc_1 + 1 | 0;
    var rootSize = rootSize_0(this);
    if (index >= rootSize) {
      var tmp = removeFromTailAt_0(this, this.hl_1, rootSize, this.fl_1, index - rootSize | 0);
      return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
    }
    var elementCarry = new ObjectRef(this.il_1[0]);
    var newRoot = removeFromRootAt_0(this, ensureNotNull(this.hl_1), this.fl_1, index, elementCarry);
    removeFromTailAt_0(this, newRoot, rootSize, this.fl_1, 0);
    var tmp_0 = elementCarry.al_1;
    return (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
  };
  PersistentVectorBuilder.prototype.i4 = function (index, element) {
    ListImplementation_getInstance().a2(index, this.jl_1);
    if (rootSize_0(this) <= index) {
      var mutableTail = makeMutable(this, this.il_1);
      if (!(mutableTail === this.il_1)) {
        var tmp0_this = this;
        var tmp1 = tmp0_this.tc_1;
        tmp0_this.tc_1 = tmp1 + 1 | 0;
      }
      var tailIndex = index & get_MAX_BUFFER_SIZE_MINUS_ONE();
      var oldElement = mutableTail[tailIndex];
      mutableTail[tailIndex] = element;
      this.il_1 = mutableTail;
      return (oldElement == null ? true : isObject(oldElement)) ? oldElement : THROW_CCE();
    }
    var oldElementCarry = new ObjectRef(null);
    this.hl_1 = setInRoot(this, ensureNotNull(this.hl_1), this.fl_1, index, element, oldElementCarry);
    var tmp = oldElementCarry.al_1;
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  PersistentVectorBuilder.prototype.l = function () {
    return this.sk();
  };
  PersistentVectorBuilder.prototype.sk = function () {
    return this.r(0);
  };
  PersistentVectorBuilder.prototype.r = function (index) {
    ListImplementation_getInstance().z1(index, this.jl_1);
    return new PersistentVectorMutableIterator(this, index);
  };
  PersistentVectorBuilder.$metadata$ = classMeta('PersistentVectorBuilder', [Builder_0], undefined, undefined, undefined, AbstractMutableList.prototype);
  function PersistentVectorIterator(root, tail, index, size, trieHeight) {
    AbstractListIterator.call(this, index, size);
    this.nl_1 = tail;
    var trieSize = rootSize_1(size);
    var trieIndex = coerceAtMost(index, trieSize);
    this.ol_1 = new TrieIterator(root, trieIndex, trieSize, trieHeight);
  }
  PersistentVectorIterator.prototype.n = function () {
    this.rk();
    if (this.ol_1.m()) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.pk_1;
      tmp0_this.pk_1 = tmp1 + 1 | 0;
      return this.ol_1.n();
    }
    var tmp2_this = this;
    var tmp3 = tmp2_this.pk_1;
    tmp2_this.pk_1 = tmp3 + 1 | 0;
    return this.nl_1[tmp3 - this.ol_1.qk_1 | 0];
  };
  PersistentVectorIterator.$metadata$ = classMeta('PersistentVectorIterator', undefined, undefined, undefined, undefined, AbstractListIterator.prototype);
  function reset($this) {
    $this.qk_1 = $this.wl_1.jl_1;
    $this.xl_1 = $this.wl_1.kl();
    $this.zl_1 = -1;
    setupTrieIterator($this);
  }
  function setupTrieIterator($this) {
    var root = $this.wl_1.hl_1;
    if (root == null) {
      $this.yl_1 = null;
      return Unit_getInstance();
    }
    var trieSize = rootSize_1($this.wl_1.jl_1);
    var trieIndex = coerceAtMost($this.pk_1, trieSize);
    var trieHeight = ($this.wl_1.fl_1 / get_LOG_MAX_BUFFER_SIZE() | 0) + 1 | 0;
    if ($this.yl_1 == null) {
      $this.yl_1 = new TrieIterator(root, trieIndex, trieSize, trieHeight);
    } else {
      ensureNotNull($this.yl_1).am(root, trieIndex, trieSize, trieHeight);
    }
  }
  function checkForComodification($this) {
    if (!($this.xl_1 === $this.wl_1.kl()))
      throw ConcurrentModificationException_init_$Create$();
  }
  function checkHasIterated($this) {
    if ($this.zl_1 === -1)
      throw IllegalStateException_init_$Create$_0();
  }
  function PersistentVectorMutableIterator(builder, index) {
    AbstractListIterator.call(this, index, builder.jl_1);
    this.wl_1 = builder;
    this.xl_1 = this.wl_1.kl();
    this.yl_1 = null;
    this.zl_1 = -1;
    setupTrieIterator(this);
  }
  PersistentVectorMutableIterator.prototype.n = function () {
    checkForComodification(this);
    this.rk();
    this.zl_1 = this.pk_1;
    var tmp2_elvis_lhs = this.yl_1;
    var tmp;
    if (tmp2_elvis_lhs == null) {
      var tmp_0 = this.wl_1.il_1;
      var tmp0_this = this;
      var tmp1 = tmp0_this.pk_1;
      tmp0_this.pk_1 = tmp1 + 1 | 0;
      var tmp_1 = tmp_0[tmp1];
      return (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
    } else {
      tmp = tmp2_elvis_lhs;
    }
    var trieIterator = tmp;
    if (trieIterator.m()) {
      var tmp3_this = this;
      var tmp4 = tmp3_this.pk_1;
      tmp3_this.pk_1 = tmp4 + 1 | 0;
      return trieIterator.n();
    }
    var tmp_2 = this.wl_1.il_1;
    var tmp5_this = this;
    var tmp6 = tmp5_this.pk_1;
    tmp5_this.pk_1 = tmp6 + 1 | 0;
    var tmp_3 = tmp_2[tmp6 - trieIterator.qk_1 | 0];
    return (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
  };
  PersistentVectorMutableIterator.prototype.k4 = function () {
    checkForComodification(this);
    checkHasIterated(this);
    this.wl_1.j4(this.zl_1);
    if (this.zl_1 < this.pk_1)
      this.pk_1 = this.zl_1;
    reset(this);
  };
  PersistentVectorMutableIterator.$metadata$ = classMeta('PersistentVectorMutableIterator', [MutableListIterator], undefined, undefined, undefined, AbstractListIterator.prototype);
  function Companion() {
    Companion_instance = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.emptyArray' call
    tmp$ret$0 = [];
    tmp.bm_1 = new SmallPersistentVector(tmp$ret$0);
  }
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function SmallPersistentVector(buffer) {
    Companion_getInstance();
    AbstractPersistentList.call(this);
    this.cm_1 = buffer;
    assert(this.cm_1.length <= get_MAX_BUFFER_SIZE());
  }
  SmallPersistentVector.prototype.o = function () {
    return this.cm_1.length;
  };
  SmallPersistentVector.prototype.g = function (element) {
    if (this.o() < get_MAX_BUFFER_SIZE()) {
      var newBuffer = copyOf(this.cm_1, this.o() + 1 | 0);
      newBuffer[this.o()] = element;
      return new SmallPersistentVector(newBuffer);
    }
    var tail = presizedBufferWith(element);
    return new PersistentVector(this.cm_1, tail, this.o() + 1 | 0, 0);
  };
  SmallPersistentVector.prototype.q = function (elements) {
    if ((this.o() + elements.o() | 0) <= get_MAX_BUFFER_SIZE()) {
      var newBuffer = copyOf(this.cm_1, this.o() + elements.o() | 0);
      var index = this.o();
      var tmp0_iterator = elements.l();
      while (tmp0_iterator.m()) {
        var element = tmp0_iterator.n();
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        newBuffer[tmp1] = element;
      }
      return new SmallPersistentVector(newBuffer);
    }
    var tmp$ret$1;
    // Inline function 'kotlinx.collections.immutable.mutate' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = this.kk();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.collections.immutable.implementations.immutableList.SmallPersistentVector.addAll.<anonymous>' call
    tmp0_apply.q(elements);
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.jk();
    return tmp$ret$1;
  };
  SmallPersistentVector.prototype.j4 = function (index) {
    ListImplementation_getInstance().a2(index, this.o());
    if (this.o() === 1) {
      return Companion_getInstance().bm_1;
    }
    var newBuffer = copyOf(this.cm_1, this.o() - 1 | 0);
    var tmp$ret$0;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = this.cm_1;
    var tmp1_copyInto = index + 1 | 0;
    var tmp2_copyInto = this.o();
    arrayCopy(tmp0_copyInto, newBuffer, index, tmp1_copyInto, tmp2_copyInto);
    tmp$ret$0 = newBuffer;
    return new SmallPersistentVector(newBuffer);
  };
  SmallPersistentVector.prototype.kk = function () {
    return new PersistentVectorBuilder(this, null, this.cm_1, 0);
  };
  SmallPersistentVector.prototype.f2 = function (element) {
    return indexOf(this.cm_1, element);
  };
  SmallPersistentVector.prototype.r = function (index) {
    ListImplementation_getInstance().z1(index, this.o());
    var tmp = this.cm_1;
    return new BufferIterator(isArray(tmp) ? tmp : THROW_CCE(), index, this.o());
  };
  SmallPersistentVector.prototype.p = function (index) {
    ListImplementation_getInstance().a2(index, this.o());
    var tmp = this.cm_1[index];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  SmallPersistentVector.$metadata$ = classMeta('SmallPersistentVector', [ImmutableList], undefined, undefined, undefined, AbstractPersistentList.prototype);
  function fillPath($this, index, startLevel) {
    var shift = imul($this.rl_1 - startLevel | 0, get_LOG_MAX_BUFFER_SIZE());
    var i = startLevel;
    while (i < $this.rl_1) {
      var tmp = $this.sl_1;
      var tmp_0 = i;
      var tmp_1 = $this.sl_1[i - 1 | 0];
      tmp[tmp_0] = ((!(tmp_1 == null) ? isArray(tmp_1) : false) ? tmp_1 : THROW_CCE())[indexSegment(index, shift)];
      shift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
      i = i + 1 | 0;
    }
  }
  function fillPathIfNeeded($this, indexPredicate) {
    var shift = 0;
    while (indexSegment($this.pk_1, shift) === indexPredicate) {
      shift = shift + get_LOG_MAX_BUFFER_SIZE() | 0;
    }
    if (shift > 0) {
      var level = ($this.rl_1 - 1 | 0) - (shift / get_LOG_MAX_BUFFER_SIZE() | 0) | 0;
      fillPath($this, $this.pk_1, level + 1 | 0);
    }
  }
  function elementAtCurrentIndex($this) {
    var leafBufferIndex = $this.pk_1 & get_MAX_BUFFER_SIZE_MINUS_ONE();
    var tmp = $this.sl_1[$this.rl_1 - 1 | 0];
    return ((!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE())[leafBufferIndex];
  }
  function TrieIterator(root, index, size, height) {
    AbstractListIterator.call(this, index, size);
    this.rl_1 = height;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = this.rl_1;
    tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    tmp.sl_1 = tmp$ret$0;
    this.tl_1 = index === size;
    this.sl_1[0] = root;
    fillPath(this, index - (this.tl_1 ? 1 : 0) | 0, 1);
  }
  TrieIterator.prototype.am = function (root, index, size, height) {
    this.pk_1 = index;
    this.qk_1 = size;
    this.rl_1 = height;
    if (this.sl_1.length < height) {
      var tmp = this;
      var tmp$ret$0;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp$ret$0 = fillArrayVal(Array(height), null);
      tmp.sl_1 = tmp$ret$0;
    }
    this.sl_1[0] = root;
    this.tl_1 = index === size;
    fillPath(this, index - (this.tl_1 ? 1 : 0) | 0, 1);
  };
  TrieIterator.prototype.n = function () {
    if (!this.m()) {
      throw NoSuchElementException_init_$Create$();
    }
    var result = elementAtCurrentIndex(this);
    var tmp0_this = this;
    tmp0_this.pk_1 = tmp0_this.pk_1 + 1 | 0;
    if (this.pk_1 === this.qk_1) {
      this.tl_1 = true;
      return result;
    }
    fillPathIfNeeded(this, 0);
    return result;
  };
  TrieIterator.$metadata$ = classMeta('TrieIterator', undefined, undefined, undefined, undefined, AbstractListIterator.prototype);
  function persistentVectorOf() {
    return Companion_getInstance().bm_1;
  }
  function get_MAX_BUFFER_SIZE() {
    return MAX_BUFFER_SIZE;
  }
  var MAX_BUFFER_SIZE;
  function presizedBufferWith(element) {
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = 32;
    tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    var buffer = tmp$ret$0;
    buffer[0] = element;
    return buffer;
  }
  function get_MAX_BUFFER_SIZE_MINUS_ONE() {
    return MAX_BUFFER_SIZE_MINUS_ONE;
  }
  var MAX_BUFFER_SIZE_MINUS_ONE;
  function rootSize_1(vectorSize) {
    return (vectorSize - 1 | 0) & -32;
  }
  function get_LOG_MAX_BUFFER_SIZE() {
    return LOG_MAX_BUFFER_SIZE;
  }
  var LOG_MAX_BUFFER_SIZE;
  function indexSegment(index, shift) {
    return index >> shift & 31;
  }
  function ObjectRef(value) {
    this.al_1 = value;
  }
  ObjectRef.$metadata$ = classMeta('ObjectRef');
  function get_MUTABLE_BUFFER_SIZE() {
    return MUTABLE_BUFFER_SIZE;
  }
  var MUTABLE_BUFFER_SIZE;
  function createEntries($this) {
    return new PersistentHashMapEntries($this);
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.lk_1 = new PersistentHashMap(Companion_getInstance_1().dm_1, 0);
  }
  Companion_0.prototype.mk = function () {
    var tmp = this.lk_1;
    return tmp instanceof PersistentHashMap ? tmp : THROW_CCE();
  };
  Companion_0.$metadata$ = objectMeta('Companion');
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function PersistentHashMap$equals$lambda(a, b) {
    return equals(a, b.em_1);
  }
  function PersistentHashMap$equals$lambda_0(a, b) {
    return equals(a, b.em_1);
  }
  function PersistentHashMap$equals$lambda_1(a, b) {
    return equals(a, b);
  }
  function PersistentHashMap$equals$lambda_2(a, b) {
    return equals(a, b);
  }
  function PersistentHashMap(node, size) {
    Companion_getInstance_0();
    AbstractMap.call(this);
    this.jm_1 = node;
    this.km_1 = size;
  }
  PersistentHashMap.prototype.o = function () {
    return this.km_1;
  };
  PersistentHashMap.prototype.y2 = function () {
    return new PersistentHashMapKeys(this);
  };
  PersistentHashMap.prototype.z2 = function () {
    return new PersistentHashMapValues(this);
  };
  PersistentHashMap.prototype.v = function () {
    return createEntries(this);
  };
  PersistentHashMap.prototype.r2 = function (key) {
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = key;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return this.jm_1.pm(tmp$ret$0, key, 0);
  };
  PersistentHashMap.prototype.x2 = function (key) {
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = key;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return this.jm_1.qm(tmp$ret$0, key, 0);
  };
  PersistentHashMap.prototype.s = function (key, value) {
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = key;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp0_elvis_lhs = this.jm_1.rm(tmp$ret$0, key, value, 0);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var newNodeResult = tmp;
    return new PersistentHashMap(newNodeResult.sm_1, this.km_1 + newNodeResult.tm_1 | 0);
  };
  PersistentHashMap.prototype.equals = function (other) {
    if (other === this)
      return true;
    if (!(!(other == null) ? isInterface(other, Map) : false))
      return false;
    if (!(this.km_1 === other.o()))
      return false;
    var tmp0_subject = other;
    var tmp;
    if (tmp0_subject instanceof PersistentOrderedMap) {
      tmp = this.jm_1.zm(other.hn_1.jm_1, PersistentHashMap$equals$lambda);
    } else {
      if (tmp0_subject instanceof PersistentOrderedMapBuilder) {
        var tmp_0 = other.en_1.ym_1;
        tmp = this.jm_1.zm(tmp_0, PersistentHashMap$equals$lambda_0);
      } else {
        if (tmp0_subject instanceof PersistentHashMap) {
          tmp = this.jm_1.zm(other.jm_1, PersistentHashMap$equals$lambda_1);
        } else {
          if (tmp0_subject instanceof PersistentHashMapBuilder) {
            var tmp_1 = other.ym_1;
            tmp = this.jm_1.zm(tmp_1, PersistentHashMap$equals$lambda_2);
          } else {
            tmp = AbstractMap.prototype.equals.call(this, other);
          }
        }
      }
    }
    return tmp;
  };
  PersistentHashMap.prototype.hashCode = function () {
    return AbstractMap.prototype.hashCode.call(this);
  };
  PersistentHashMap.$metadata$ = classMeta('PersistentHashMap', [PersistentMap], undefined, undefined, undefined, AbstractMap.prototype);
  function PersistentHashMapBuilder() {
  }
  PersistentHashMapBuilder.$metadata$ = classMeta('PersistentHashMapBuilder', [Builder_1], undefined, undefined, undefined, AbstractMutableMap.prototype);
  function PersistentHashMapKeysIterator(node) {
    var tmp = 0;
    var tmp_0 = 8;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(tmp_0), null);
    var tmp_1 = tmp$ret$0;
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var tmp$ret$1;
      // Inline function 'kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapKeysIterator.<init>.<anonymous>' call
      tmp$ret$1 = new TrieNodeKeysIterator();
      tmp_1[tmp_2] = tmp$ret$1;
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBaseIterator.call(this, node, tmp_1);
  }
  PersistentHashMapKeysIterator.$metadata$ = classMeta('PersistentHashMapKeysIterator', undefined, undefined, undefined, undefined, PersistentHashMapBaseIterator.prototype);
  function PersistentHashMapValuesIterator(node) {
    var tmp = 0;
    var tmp_0 = 8;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(tmp_0), null);
    var tmp_1 = tmp$ret$0;
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var tmp$ret$1;
      // Inline function 'kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapValuesIterator.<init>.<anonymous>' call
      tmp$ret$1 = new TrieNodeValuesIterator();
      tmp_1[tmp_2] = tmp$ret$1;
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBaseIterator.call(this, node, tmp_1);
  }
  PersistentHashMapValuesIterator.$metadata$ = classMeta('PersistentHashMapValuesIterator', undefined, undefined, undefined, undefined, PersistentHashMapBaseIterator.prototype);
  function PersistentHashMapEntriesIterator(node) {
    var tmp = 0;
    var tmp_0 = 8;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(tmp_0), null);
    var tmp_1 = tmp$ret$0;
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var tmp$ret$1;
      // Inline function 'kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapEntriesIterator.<init>.<anonymous>' call
      tmp$ret$1 = new TrieNodeEntriesIterator();
      tmp_1[tmp_2] = tmp$ret$1;
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBaseIterator.call(this, node, tmp_1);
  }
  PersistentHashMapEntriesIterator.$metadata$ = classMeta('PersistentHashMapEntriesIterator', undefined, undefined, undefined, undefined, PersistentHashMapBaseIterator.prototype);
  function moveToNextNodeWithData($this, pathIndex) {
    if ($this.in_1[pathIndex].on()) {
      return pathIndex;
    }
    if ($this.in_1[pathIndex].sn()) {
      var node = $this.in_1[pathIndex].pn();
      if (pathIndex === 6) {
        $this.in_1[pathIndex + 1 | 0].rn(node.om_1, node.om_1.length);
      } else {
        $this.in_1[pathIndex + 1 | 0].rn(node.om_1, imul(get_ENTRY_SIZE(), node.qn()));
      }
      return moveToNextNodeWithData($this, pathIndex + 1 | 0);
    }
    return -1;
  }
  function ensureNextEntryIsReady($this) {
    if ($this.in_1[$this.jn_1].on()) {
      return Unit_getInstance();
    }
    var inductionVariable = $this.jn_1;
    if (0 <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var result = moveToNextNodeWithData($this, i);
        if (result === -1 ? $this.in_1[i].sn() : false) {
          $this.in_1[i].tn();
          result = moveToNextNodeWithData($this, i);
        }
        if (!(result === -1)) {
          $this.jn_1 = result;
          return Unit_getInstance();
        }
        if (i > 0) {
          $this.in_1[i - 1 | 0].tn();
        }
        $this.in_1[i].rn(Companion_getInstance_1().dm_1.om_1, 0);
      }
       while (0 <= inductionVariable);
    $this.kn_1 = false;
  }
  function checkHasNext($this) {
    if (!$this.m())
      throw NoSuchElementException_init_$Create$();
  }
  function PersistentHashMapBaseIterator(node, path) {
    this.in_1 = path;
    this.jn_1 = 0;
    this.kn_1 = true;
    this.in_1[0].rn(node.om_1, imul(get_ENTRY_SIZE(), node.qn()));
    this.jn_1 = 0;
    ensureNextEntryIsReady(this);
  }
  PersistentHashMapBaseIterator.prototype.m = function () {
    return this.kn_1;
  };
  PersistentHashMapBaseIterator.prototype.n = function () {
    checkHasNext(this);
    var result = this.in_1[this.jn_1].n();
    ensureNextEntryIsReady(this);
    return result;
  };
  PersistentHashMapBaseIterator.$metadata$ = classMeta('PersistentHashMapBaseIterator', [Iterator]);
  function TrieNodeBaseIterator() {
    this.ln_1 = Companion_getInstance_1().dm_1.om_1;
    this.mn_1 = 0;
    this.nn_1 = 0;
  }
  TrieNodeBaseIterator.prototype.un = function (buffer, dataSize, index) {
    this.ln_1 = buffer;
    this.mn_1 = dataSize;
    this.nn_1 = index;
  };
  TrieNodeBaseIterator.prototype.rn = function (buffer, dataSize) {
    this.un(buffer, dataSize, 0);
  };
  TrieNodeBaseIterator.prototype.on = function () {
    return this.nn_1 < this.mn_1;
  };
  TrieNodeBaseIterator.prototype.sn = function () {
    assert(this.nn_1 >= this.mn_1);
    return this.nn_1 < this.ln_1.length;
  };
  TrieNodeBaseIterator.prototype.pn = function () {
    assert(this.sn());
    var tmp = this.ln_1[this.nn_1];
    return tmp instanceof TrieNode ? tmp : THROW_CCE();
  };
  TrieNodeBaseIterator.prototype.tn = function () {
    assert(this.sn());
    var tmp0_this = this;
    var tmp1 = tmp0_this.nn_1;
    tmp0_this.nn_1 = tmp1 + 1 | 0;
  };
  TrieNodeBaseIterator.prototype.m = function () {
    return this.on();
  };
  TrieNodeBaseIterator.$metadata$ = classMeta('TrieNodeBaseIterator', [Iterator]);
  function TrieNodeKeysIterator() {
    TrieNodeBaseIterator.call(this);
  }
  TrieNodeKeysIterator.prototype.n = function () {
    assert(this.on());
    var tmp0_this = this;
    tmp0_this.nn_1 = tmp0_this.nn_1 + 2 | 0;
    var tmp = this.ln_1[this.nn_1 - 2 | 0];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  TrieNodeKeysIterator.$metadata$ = classMeta('TrieNodeKeysIterator', undefined, undefined, undefined, undefined, TrieNodeBaseIterator.prototype);
  function TrieNodeValuesIterator() {
    TrieNodeBaseIterator.call(this);
  }
  TrieNodeValuesIterator.prototype.n = function () {
    assert(this.on());
    var tmp0_this = this;
    tmp0_this.nn_1 = tmp0_this.nn_1 + 2 | 0;
    var tmp = this.ln_1[this.nn_1 - 1 | 0];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  TrieNodeValuesIterator.$metadata$ = classMeta('TrieNodeValuesIterator', undefined, undefined, undefined, undefined, TrieNodeBaseIterator.prototype);
  function TrieNodeEntriesIterator() {
    TrieNodeBaseIterator.call(this);
  }
  TrieNodeEntriesIterator.prototype.n = function () {
    assert(this.on());
    var tmp0_this = this;
    tmp0_this.nn_1 = tmp0_this.nn_1 + 2 | 0;
    var tmp = this.ln_1[this.nn_1 - 2 | 0];
    var tmp_0 = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
    var tmp_1 = this.ln_1[this.nn_1 - 1 | 0];
    return new MapEntry(tmp_0, (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE());
  };
  TrieNodeEntriesIterator.$metadata$ = classMeta('TrieNodeEntriesIterator', undefined, undefined, undefined, undefined, TrieNodeBaseIterator.prototype);
  function MapEntry(key, value) {
    this.eo_1 = key;
    this.fo_1 = value;
  }
  MapEntry.prototype.h2 = function () {
    return this.eo_1;
  };
  MapEntry.prototype.j2 = function () {
    return this.fo_1;
  };
  MapEntry.prototype.hashCode = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_hashCode = this.h2();
    var tmp0_safe_receiver = tmp0_hashCode;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.hashCode' call
    var tmp1_hashCode = this.j2();
    var tmp0_safe_receiver_0 = tmp1_hashCode;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    tmp$ret$1 = tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0;
    return tmp ^ tmp$ret$1;
  };
  MapEntry.prototype.equals = function (other) {
    var tmp0_safe_receiver = (!(other == null) ? isInterface(other, Entry) : false) ? other : null;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'kotlinx.collections.immutable.implementations.immutableMap.MapEntry.equals.<anonymous>' call
      tmp$ret$0 = equals(tmp0_safe_receiver.h2(), this.h2()) ? equals(tmp0_safe_receiver.j2(), this.j2()) : false;
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  };
  MapEntry.prototype.toString = function () {
    return toString_0(this.h2()) + '=' + toString_0(this.j2());
  };
  MapEntry.$metadata$ = classMeta('MapEntry', [Entry]);
  function PersistentHashMapKeys(map) {
    AbstractSet.call(this);
    this.go_1 = map;
  }
  PersistentHashMapKeys.prototype.o = function () {
    return this.go_1.km_1;
  };
  PersistentHashMapKeys.prototype.o2 = function (element) {
    return this.go_1.r2(element);
  };
  PersistentHashMapKeys.prototype.k1 = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.o2((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  PersistentHashMapKeys.prototype.l = function () {
    return new PersistentHashMapKeysIterator(this.go_1.jm_1);
  };
  PersistentHashMapKeys.$metadata$ = classMeta('PersistentHashMapKeys', [ImmutableSet], undefined, undefined, undefined, AbstractSet.prototype);
  function PersistentHashMapValues(map) {
    AbstractCollection.call(this);
    this.ho_1 = map;
  }
  PersistentHashMapValues.prototype.o = function () {
    return this.ho_1.km_1;
  };
  PersistentHashMapValues.prototype.u2 = function (element) {
    return this.ho_1.v2(element);
  };
  PersistentHashMapValues.prototype.k1 = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.u2((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  PersistentHashMapValues.prototype.l = function () {
    return new PersistentHashMapValuesIterator(this.ho_1.jm_1);
  };
  PersistentHashMapValues.$metadata$ = classMeta('PersistentHashMapValues', [ImmutableCollection], undefined, undefined, undefined, AbstractCollection.prototype);
  function PersistentHashMapEntries(map) {
    AbstractSet.call(this);
    this.io_1 = map;
  }
  PersistentHashMapEntries.prototype.o = function () {
    return this.io_1.km_1;
  };
  PersistentHashMapEntries.prototype.jo = function (element) {
    return MapImplementation_getInstance().ko(this.io_1, element);
  };
  PersistentHashMapEntries.prototype.k1 = function (element) {
    if (!(!(element == null) ? isInterface(element, Entry) : false))
      return false;
    return this.jo((!(element == null) ? isInterface(element, Entry) : false) ? element : THROW_CCE());
  };
  PersistentHashMapEntries.prototype.l = function () {
    return new PersistentHashMapEntriesIterator(this.io_1.jm_1);
  };
  PersistentHashMapEntries.$metadata$ = classMeta('PersistentHashMapEntries', [ImmutableSet], undefined, undefined, undefined, AbstractSet.prototype);
  function TrieNode_init_$Init$(dataMap, nodeMap, buffer, $this) {
    TrieNode.call($this, dataMap, nodeMap, buffer, null);
    return $this;
  }
  function TrieNode_init_$Create$(dataMap, nodeMap, buffer) {
    return TrieNode_init_$Init$(dataMap, nodeMap, buffer, Object.create(TrieNode.prototype));
  }
  function ModificationResult(node, sizeDelta) {
    this.sm_1 = node;
    this.tm_1 = sizeDelta;
  }
  ModificationResult.prototype.lo = function (_set____db54di) {
    this.sm_1 = _set____db54di;
  };
  ModificationResult.prototype.mo = function () {
    return this.sm_1;
  };
  ModificationResult.prototype.no = function (operation) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.collections.immutable.implementations.immutableMap.ModificationResult.replaceNode.<anonymous>' call
    this.sm_1 = operation(this.sm_1);
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  ModificationResult.$metadata$ = classMeta('ModificationResult');
  function asInsertResult($this) {
    return new ModificationResult($this, 1);
  }
  function asUpdateResult($this) {
    return new ModificationResult($this, 0);
  }
  function hasNodeAt($this, positionMask) {
    return !(($this.mm_1 & positionMask) === 0);
  }
  function keyAtIndex($this, keyIndex) {
    var tmp = $this.om_1[keyIndex];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  }
  function valueAtKeyIndex($this, keyIndex) {
    var tmp = $this.om_1[keyIndex + 1 | 0];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  }
  function insertEntryAt($this, positionMask, key, value) {
    var keyIndex = $this.oo(positionMask);
    var newBuffer = insertEntryAtIndex($this.om_1, keyIndex, key, value);
    return TrieNode_init_$Create$($this.lm_1 | positionMask, $this.mm_1, newBuffer);
  }
  function updateValueAtIndex($this, keyIndex, value) {
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyOf' call
    var tmp0_copyOf = $this.om_1;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_copyOf;
    tmp$ret$1 = tmp$ret$0.slice();
    var newBuffer = tmp$ret$1;
    newBuffer[keyIndex + 1 | 0] = value;
    return TrieNode_init_$Create$($this.lm_1, $this.mm_1, newBuffer);
  }
  function updateNodeAtIndex($this, nodeIndex, positionMask, newNode) {
    var newNodeBuffer = newNode.om_1;
    if (newNodeBuffer.length === 2 ? newNode.mm_1 === 0 : false) {
      if ($this.om_1.length === 1) {
        newNode.lm_1 = $this.mm_1;
        return newNode;
      }
      var keyIndex = $this.oo(positionMask);
      var newBuffer = replaceNodeWithEntry($this.om_1, nodeIndex, keyIndex, newNodeBuffer[0], newNodeBuffer[1]);
      return TrieNode_init_$Create$($this.lm_1 ^ positionMask, $this.mm_1 ^ positionMask, newBuffer);
    }
    var newBuffer_0 = copyOf($this.om_1, $this.om_1.length);
    newBuffer_0[nodeIndex] = newNode;
    return TrieNode_init_$Create$($this.lm_1, $this.mm_1, newBuffer_0);
  }
  function bufferMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, owner) {
    var storedKey = keyAtIndex($this, keyIndex);
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = storedKey;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var storedKeyHash = tmp$ret$0;
    var storedValue = valueAtKeyIndex($this, keyIndex);
    var newNode = makeNode($this, storedKeyHash, storedKey, storedValue, newKeyHash, newKey, newValue, shift + 5 | 0, owner);
    var nodeIndex = $this.po(positionMask) + 1 | 0;
    return replaceEntryWithNode($this.om_1, keyIndex, nodeIndex, newNode);
  }
  function moveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift) {
    var newBuffer = bufferMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, null);
    return TrieNode_init_$Create$($this.lm_1 ^ positionMask, $this.mm_1 | positionMask, newBuffer);
  }
  function makeNode($this, keyHash1, key1, value1, keyHash2, key2, value2, shift, owner) {
    if (shift > 30) {
      var tmp$ret$2;
      // Inline function 'kotlin.arrayOf' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = [key1, value1, key2, value2];
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      return new TrieNode(0, 0, tmp$ret$2, owner);
    }
    var setBit1 = indexSegment_0(keyHash1, shift);
    var setBit2 = indexSegment_0(keyHash2, shift);
    if (!(setBit1 === setBit2)) {
      var tmp;
      if (setBit1 < setBit2) {
        var tmp$ret$5;
        // Inline function 'kotlin.arrayOf' call
        var tmp$ret$4;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$3;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$3 = [key1, value1, key2, value2];
        tmp$ret$4 = tmp$ret$3;
        tmp$ret$5 = tmp$ret$4;
        tmp = tmp$ret$5;
      } else {
        var tmp$ret$8;
        // Inline function 'kotlin.arrayOf' call
        var tmp$ret$7;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$6;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$6 = [key2, value2, key1, value1];
        tmp$ret$7 = tmp$ret$6;
        tmp$ret$8 = tmp$ret$7;
        tmp = tmp$ret$8;
      }
      var nodeBuffer = tmp;
      return new TrieNode(1 << setBit1 | 1 << setBit2, 0, nodeBuffer, owner);
    }
    var node = makeNode($this, keyHash1, key1, value1, keyHash2, key2, value2, shift + 5 | 0, owner);
    var tmp_0 = 1 << setBit1;
    var tmp$ret$11;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$10;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$9;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$9 = [node];
    tmp$ret$10 = tmp$ret$9;
    tmp$ret$11 = tmp$ret$10;
    return new TrieNode(0, tmp_0, tmp$ret$11, owner);
  }
  function collisionKeyIndex($this, key) {
    var progression = step(until(0, $this.om_1.length), 2);
    var inductionVariable = progression.c1_1;
    var last = progression.d1_1;
    var step_0 = progression.e1_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i)))
          return i;
      }
       while (!(i === last));
    return -1;
  }
  function collisionContainsKey($this, key) {
    return !(collisionKeyIndex($this, key) === -1);
  }
  function collisionGet($this, key) {
    var keyIndex = collisionKeyIndex($this, key);
    return !(keyIndex === -1) ? valueAtKeyIndex($this, keyIndex) : null;
  }
  function collisionPut($this, key, value) {
    var keyIndex = collisionKeyIndex($this, key);
    if (!(keyIndex === -1)) {
      if (value === valueAtKeyIndex($this, keyIndex)) {
        return null;
      }
      var tmp$ret$1;
      // Inline function 'kotlin.collections.copyOf' call
      var tmp0_copyOf = $this.om_1;
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = tmp0_copyOf;
      tmp$ret$1 = tmp$ret$0.slice();
      var newBuffer = tmp$ret$1;
      newBuffer[keyIndex + 1 | 0] = value;
      return asUpdateResult(TrieNode_init_$Create$(0, 0, newBuffer));
    }
    var newBuffer_0 = insertEntryAtIndex($this.om_1, 0, key, value);
    return asInsertResult(TrieNode_init_$Create$(0, 0, newBuffer_0));
  }
  function Companion_1() {
    Companion_instance_1 = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.emptyArray' call
    tmp$ret$0 = [];
    tmp.dm_1 = TrieNode_init_$Create$(0, 0, tmp$ret$0);
  }
  Companion_1.$metadata$ = objectMeta('Companion');
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function TrieNode(dataMap, nodeMap, buffer, ownedBy) {
    Companion_getInstance_1();
    this.lm_1 = dataMap;
    this.mm_1 = nodeMap;
    this.nm_1 = ownedBy;
    this.om_1 = buffer;
  }
  TrieNode.prototype.qn = function () {
    return countOneBits(this.lm_1);
  };
  TrieNode.prototype.qo = function (positionMask) {
    return !((this.lm_1 & positionMask) === 0);
  };
  TrieNode.prototype.oo = function (positionMask) {
    return imul(2, countOneBits(this.lm_1 & (positionMask - 1 | 0)));
  };
  TrieNode.prototype.po = function (positionMask) {
    return (this.om_1.length - 1 | 0) - countOneBits(this.mm_1 & (positionMask - 1 | 0)) | 0;
  };
  TrieNode.prototype.ro = function (nodeIndex) {
    var tmp = this.om_1[nodeIndex];
    return tmp instanceof TrieNode ? tmp : THROW_CCE();
  };
  TrieNode.prototype.pm = function (keyHash, key, shift) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.qo(keyPositionMask)) {
      return equals(key, keyAtIndex(this, this.oo(keyPositionMask)));
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var targetNode = this.ro(this.po(keyPositionMask));
      if (shift === 30) {
        return collisionContainsKey(targetNode, key);
      }
      return targetNode.pm(keyHash, key, shift + 5 | 0);
    }
    return false;
  };
  TrieNode.prototype.qm = function (keyHash, key, shift) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.qo(keyPositionMask)) {
      var keyIndex = this.oo(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        return valueAtKeyIndex(this, keyIndex);
      }
      return null;
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var targetNode = this.ro(this.po(keyPositionMask));
      if (shift === 30) {
        return collisionGet(targetNode, key);
      }
      return targetNode.qm(keyHash, key, shift + 5 | 0);
    }
    return null;
  };
  TrieNode.prototype.rm = function (keyHash, key, value, shift) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.qo(keyPositionMask)) {
      var keyIndex = this.oo(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        if (valueAtKeyIndex(this, keyIndex) === value)
          return null;
        return asUpdateResult(updateValueAtIndex(this, keyIndex, value));
      }
      return asInsertResult(moveEntryToNode(this, keyIndex, keyPositionMask, keyHash, key, value, shift));
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.po(keyPositionMask);
      var targetNode = this.ro(nodeIndex);
      var tmp;
      if (shift === 30) {
        var tmp0_elvis_lhs = collisionPut(targetNode, key, value);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return null;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp = tmp_0;
      } else {
        var tmp1_elvis_lhs = targetNode.rm(keyHash, key, value, shift + 5 | 0);
        var tmp_1;
        if (tmp1_elvis_lhs == null) {
          return null;
        } else {
          tmp_1 = tmp1_elvis_lhs;
        }
        tmp = tmp_1;
      }
      var putResult = tmp;
      var tmp$ret$2;
      // Inline function 'kotlinx.collections.immutable.implementations.immutableMap.ModificationResult.replaceNode' call
      var tmp$ret$1;
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.collections.immutable.implementations.immutableMap.ModificationResult.replaceNode.<anonymous>' call
      var tmp_2 = putResult;
      var tmp$ret$0;
      // Inline function 'kotlinx.collections.immutable.implementations.immutableMap.TrieNode.put.<anonymous>' call
      var tmp0__anonymous__q1qw7t = putResult.sm_1;
      tmp$ret$0 = updateNodeAtIndex(this, nodeIndex, keyPositionMask, tmp0__anonymous__q1qw7t);
      tmp_2.sm_1 = tmp$ret$0;
      tmp$ret$1 = putResult;
      tmp$ret$2 = tmp$ret$1;
      return tmp$ret$2;
    }
    return asInsertResult(insertEntryAt(this, keyPositionMask, key, value));
  };
  TrieNode.prototype.zm = function (that, equalityComparator) {
    if (this === that)
      return true;
    if (!(this.lm_1 === that.lm_1) ? true : !(this.mm_1 === that.mm_1))
      return false;
    if (this.lm_1 === 0 ? this.mm_1 === 0 : false) {
      if (!(this.om_1.length === that.om_1.length))
        return false;
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.all' call
        var tmp0_all = step(until(0, this.om_1.length), 2);
        var tmp;
        if (isInterface(tmp0_all, Collection)) {
          tmp = tmp0_all.d();
        } else {
          tmp = false;
        }
        if (tmp) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
        var inductionVariable = tmp0_all.c1_1;
        var last = tmp0_all.d1_1;
        var step_0 = tmp0_all.e1_1;
        if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
          do {
            var element = inductionVariable;
            inductionVariable = inductionVariable + step_0 | 0;
            var tmp$ret$1;
            // Inline function 'kotlinx.collections.immutable.implementations.immutableMap.TrieNode.equalsWith.<anonymous>' call
            var thatKey = keyAtIndex(that, element);
            var thatValue = valueAtKeyIndex(that, element);
            var keyIndex = collisionKeyIndex(this, thatKey);
            var tmp_0;
            if (!(keyIndex === -1)) {
              var value = valueAtKeyIndex(this, keyIndex);
              tmp_0 = equalityComparator(value, thatValue);
            } else {
              tmp_0 = false;
            }
            tmp$ret$1 = tmp_0;
            if (!tmp$ret$1) {
              tmp$ret$0 = false;
              break $l$block_0;
            }
          }
           while (!(element === last));
        tmp$ret$0 = true;
      }
      return tmp$ret$0;
    }
    var valueSize = imul(countOneBits(this.lm_1), 2);
    var progression = step(until(0, valueSize), 2);
    var inductionVariable_0 = progression.c1_1;
    var last_0 = progression.d1_1;
    var step_1 = progression.e1_1;
    if ((step_1 > 0 ? inductionVariable_0 <= last_0 : false) ? true : step_1 < 0 ? last_0 <= inductionVariable_0 : false)
      do {
        var i = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + step_1 | 0;
        if (!equals(keyAtIndex(this, i), keyAtIndex(that, i)))
          return false;
        if (!equalityComparator(valueAtKeyIndex(this, i), valueAtKeyIndex(that, i)))
          return false;
      }
       while (!(i === last_0));
    var inductionVariable_1 = valueSize;
    var last_1 = this.om_1.length;
    if (inductionVariable_1 < last_1)
      do {
        var i_0 = inductionVariable_1;
        inductionVariable_1 = inductionVariable_1 + 1 | 0;
        if (!this.ro(i_0).zm(that.ro(i_0), equalityComparator))
          return false;
      }
       while (inductionVariable_1 < last_1);
    return true;
  };
  TrieNode.$metadata$ = classMeta('TrieNode');
  function get_ENTRY_SIZE() {
    return ENTRY_SIZE;
  }
  var ENTRY_SIZE;
  function insertEntryAtIndex(_this__u8e3s4, keyIndex, key, value) {
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = _this__u8e3s4.length + 2 | 0;
    tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    var newBuffer = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, keyIndex);
    tmp$ret$1 = newBuffer;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp1_copyInto = keyIndex + 2 | 0;
    var tmp2_copyInto = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, tmp1_copyInto, keyIndex, tmp2_copyInto);
    tmp$ret$2 = newBuffer;
    newBuffer[keyIndex] = key;
    newBuffer[keyIndex + 1 | 0] = value;
    return newBuffer;
  }
  function replaceNodeWithEntry(_this__u8e3s4, nodeIndex, keyIndex, key, value) {
    var newBuffer = copyOf(_this__u8e3s4, _this__u8e3s4.length + 1 | 0);
    var tmp$ret$0;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = nodeIndex + 2 | 0;
    var tmp1_copyInto = nodeIndex + 1 | 0;
    var tmp2_copyInto = _this__u8e3s4.length;
    arrayCopy(newBuffer, newBuffer, tmp0_copyInto, tmp1_copyInto, tmp2_copyInto);
    tmp$ret$0 = newBuffer;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp3_copyInto = keyIndex + 2 | 0;
    arrayCopy(newBuffer, newBuffer, tmp3_copyInto, keyIndex, nodeIndex);
    tmp$ret$1 = newBuffer;
    newBuffer[keyIndex] = key;
    newBuffer[keyIndex + 1 | 0] = value;
    return newBuffer;
  }
  function replaceEntryWithNode(_this__u8e3s4, keyIndex, nodeIndex, newNode) {
    var newNodeIndex = nodeIndex - 2 | 0;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = (_this__u8e3s4.length - 2 | 0) + 1 | 0;
    tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    var newBuffer = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, keyIndex);
    tmp$ret$1 = newBuffer;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp1_copyInto = keyIndex + 2 | 0;
    arrayCopy(_this__u8e3s4, newBuffer, keyIndex, tmp1_copyInto, nodeIndex);
    tmp$ret$2 = newBuffer;
    newBuffer[newNodeIndex] = newNode;
    var tmp$ret$3;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp2_copyInto = newNodeIndex + 1 | 0;
    var tmp3_copyInto = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, tmp2_copyInto, nodeIndex, tmp3_copyInto);
    tmp$ret$3 = newBuffer;
    return newBuffer;
  }
  function indexSegment_0(index, shift) {
    return index >> shift & 31;
  }
  function PersistentOrderedMap() {
  }
  PersistentOrderedMap.$metadata$ = classMeta('PersistentOrderedMap', [PersistentMap], undefined, undefined, undefined, AbstractMap.prototype);
  function PersistentOrderedMapBuilder() {
  }
  PersistentOrderedMapBuilder.$metadata$ = classMeta('PersistentOrderedMapBuilder', [Builder_1], undefined, undefined, undefined, AbstractMutableMap.prototype);
  function Companion_2() {
    Companion_instance_2 = this;
    this.nk_1 = new PersistentOrderedSet(EndOfChain_getInstance(), EndOfChain_getInstance(), Companion_getInstance_0().mk());
  }
  Companion_2.prototype.ok = function () {
    return this.nk_1;
  };
  Companion_2.$metadata$ = objectMeta('Companion');
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function PersistentOrderedSet$equals$lambda(_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd) {
    return true;
  }
  function PersistentOrderedSet$equals$lambda_0(_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd) {
    return true;
  }
  function PersistentOrderedSet(firstElement, lastElement, hashMap) {
    Companion_getInstance_2();
    AbstractSet.call(this);
    this.so_1 = firstElement;
    this.to_1 = lastElement;
    this.uo_1 = hashMap;
  }
  PersistentOrderedSet.prototype.o = function () {
    return this.uo_1.km_1;
  };
  PersistentOrderedSet.prototype.k1 = function (element) {
    return this.uo_1.r2(element);
  };
  PersistentOrderedSet.prototype.l = function () {
    return new PersistentOrderedSetIterator(this.so_1, this.uo_1);
  };
  PersistentOrderedSet.prototype.equals = function (other) {
    if (other === this)
      return true;
    if (!(!(other == null) ? isInterface(other, Set) : false))
      return false;
    if (!(this.o() === other.o()))
      return false;
    var tmp0_subject = other;
    var tmp;
    if (tmp0_subject instanceof PersistentOrderedSet) {
      tmp = this.uo_1.jm_1.zm(other.uo_1.jm_1, PersistentOrderedSet$equals$lambda);
    } else {
      if (tmp0_subject instanceof PersistentOrderedSetBuilder) {
        var tmp_0 = other.vo_1.ym_1;
        tmp = this.uo_1.jm_1.zm(tmp_0, PersistentOrderedSet$equals$lambda_0);
      } else {
        tmp = AbstractSet.prototype.equals.call(this, other);
      }
    }
    return tmp;
  };
  PersistentOrderedSet.prototype.hashCode = function () {
    return AbstractSet.prototype.hashCode.call(this);
  };
  PersistentOrderedSet.$metadata$ = classMeta('PersistentOrderedSet', [PersistentSet], undefined, undefined, undefined, AbstractSet.prototype);
  function PersistentOrderedSetBuilder() {
  }
  PersistentOrderedSetBuilder.$metadata$ = classMeta('PersistentOrderedSetBuilder', [Builder_2], undefined, undefined, undefined, AbstractMutableSet.prototype);
  function checkHasNext_0($this) {
    if (!$this.m())
      throw NoSuchElementException_init_$Create$();
  }
  function PersistentOrderedSetIterator(nextElement, map) {
    this.wo_1 = nextElement;
    this.xo_1 = map;
    this.yo_1 = 0;
  }
  PersistentOrderedSetIterator.prototype.m = function () {
    return this.yo_1 < this.xo_1.o();
  };
  PersistentOrderedSetIterator.prototype.n = function () {
    checkHasNext_0(this);
    var tmp = this.wo_1;
    var result = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
    var tmp0_this = this;
    var tmp1 = tmp0_this.yo_1;
    tmp0_this.yo_1 = tmp1 + 1 | 0;
    var tmp_0 = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.getOrElse' call
    var tmp0_getOrElse = this.xo_1;
    var tmp0_elvis_lhs = tmp0_getOrElse.x2(result);
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      throw ConcurrentModificationException_init_$Create$_0('Hash code of an element (' + result + ') has changed after it was added to the persistent set.');
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    tmp$ret$0 = tmp_1;
    tmp_0.wo_1 = tmp$ret$0.ap_1;
    return result;
  };
  PersistentOrderedSetIterator.$metadata$ = classMeta('PersistentOrderedSetIterator', [Iterator]);
  function EndOfChain() {
    EndOfChain_instance = this;
  }
  EndOfChain.$metadata$ = objectMeta('EndOfChain');
  var EndOfChain_instance;
  function EndOfChain_getInstance() {
    if (EndOfChain_instance == null)
      new EndOfChain();
    return EndOfChain_instance;
  }
  function ListImplementation() {
    ListImplementation_instance = this;
  }
  ListImplementation.prototype.a2 = function (index, size) {
    if (index < 0 ? true : index >= size) {
      throw IndexOutOfBoundsException_init_$Create$('index: ' + index + ', size: ' + size);
    }
  };
  ListImplementation.prototype.z1 = function (index, size) {
    if (index < 0 ? true : index > size) {
      throw IndexOutOfBoundsException_init_$Create$('index: ' + index + ', size: ' + size);
    }
  };
  ListImplementation.$metadata$ = objectMeta('ListImplementation');
  var ListImplementation_instance;
  function ListImplementation_getInstance() {
    if (ListImplementation_instance == null)
      new ListImplementation();
    return ListImplementation_instance;
  }
  function MapImplementation() {
    MapImplementation_instance = this;
  }
  MapImplementation.prototype.ko = function (map, element) {
    var tmp = isObject(element) ? element : THROW_CCE();
    if (!(!(tmp == null) ? isInterface(tmp, Entry) : false))
      return false;
    var tmp0_safe_receiver = map.x2(element.h2());
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'kotlinx.collections.immutable.internal.MapImplementation.containsEntry.<anonymous>' call
      tmp$ret$0 = equals(tmp0_safe_receiver, element.j2());
      tmp$ret$1 = tmp$ret$0;
      tmp_0 = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp1_elvis_lhs == null ? element.j2() == null ? map.r2(element.h2()) : false : tmp1_elvis_lhs;
  };
  MapImplementation.$metadata$ = objectMeta('MapImplementation');
  var MapImplementation_instance;
  function MapImplementation_getInstance() {
    if (MapImplementation_instance == null)
      new MapImplementation();
    return MapImplementation_instance;
  }
  function MutabilityOwnership() {
  }
  MutabilityOwnership.$metadata$ = classMeta('MutabilityOwnership');
  function assert(condition) {
    if (!condition) {
      throw AssertionError_init_$Create$('Assertion failed');
    }
  }
  //region block: init
  MAX_BUFFER_SIZE = 32;
  MAX_BUFFER_SIZE_MINUS_ONE = 31;
  LOG_MAX_BUFFER_SIZE = 5;
  MUTABLE_BUFFER_SIZE = 33;
  ENTRY_SIZE = 2;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = persistentHashMapOf;
  _.$_$.b = persistentListOf;
  _.$_$.c = persistentSetOf;
  //endregion
  return _;
}));

//# sourceMappingURL=Kotlin-Immutable-Collections-kotlinx-collections-immutable-js-ir.js.map
