type Nullable<T> = T | null | undefined

export namespace kotlin {
    export class Enum {}

    export class Pair<A, B> {
        readonly _first: A;
        readonly _second: B;
        toString(): string;
    }
    
    export class Exception extends Error {
        readonly message: string;
        toString(): string;
    }
    
    export class Long {
        toInt(): number;
        toString(): string;
    }
    
    export namespace ranges {
        export class IntRange {}
    }
}

declare type JSIterable<T> = Iterable<T>

export namespace kotlin.collections {
    export interface Collection<T> extends JSIterable<T> {
        get(index: number): T;
        toArray(): Array<T>;
        readonly size: number;
        toString(): string;
    }

    export interface List<T> extends Collection<T> {
        get(index: number): T;
        toArray(): Array<T>;
        readonly size: number;
        toString(): string;
    }
    
    export interface Map<K, V> extends JSIterable<[K, V]> {
        get(key: K): V | null | undefined;
        containsKey(key: K): boolean;
        readonly size: number;
        readonly entries: kotlin.collections.Set<Map.Entry<K, V>>;
        readonly keys: kotlin.collections.Set<K>;
        readonly values: kotlin.collections.Collection<V>;
        toString(): string;
    }
    
    export namespace Map {
        export class Entry<K, V> {
            readonly key: K;
            readonly value: V;
        }
    }
    
    export interface Set<T> extends JSIterable<T> {
        contains(key: T): boolean;
        toArray(): Array<T>;
        readonly size: number;
        toString(): string;
    }
    
    export interface Iterable<T> {
        toArray(): Array<T>;
    }
}

export namespace kotlinx.serialization {
     export interface KSerializer<T> {}
     export interface DeserializationStrategy<T> {}
     
     export namespace json {
        export class Json {}
     }
}

declare type PlainObjectMap<V> = { [k: string]: V}
/**
 * Contains the version of this SDK
 */
export const ALTER_CORE_VERSION: string;
/**
 * @deprecated Renamed to ALTER_CORE_VERSION; replace with `ALTER_CORE_VERSION`
 */
export const FACEMOJI_SDK_VERSION: string;
type FacemojiAPIType = {
    /**
     * Initializes the API with the given key. Get your API key at https://studio.facemoji.co
     * Returns a Future that resolves to true if the activation was successful, false otherwise.
     */
    initialize(apiKey: string, context: ApplicationContext): Future<boolean>;
    /**
     * Returns true if the API is activated and ready to use.
     */
    readonly isFullyActivated: boolean;
    /**
     * Returns true if the API is running in a demo mode.
     */
    readonly isDemoMode: boolean;
    /**
     * Called when the API activation fails and demo time runs out.
     */
    addDemoTimeoutCallback(cb: () => void): void;
}
export const FacemojiAPI: FacemojiAPIType;
/**
 * Represents a future value of an asynchronous computation.
 * On native platforms handles automatic freezing.
 */
export abstract class Future<T> {
    /**
     * Represents a future value of an asynchronous computation.
     * On native platforms handles automatic freezing.
     */
    constructor();
    /**
     * Adds a [consumer] callback that gets called when the future is resolved.
     *
     * The consumer will be automatically frozen on native platforms.
     */
    abstract whenDone(consumer: (p0: T) => void): void;
    /**
     * Peeks at the result of this future by calling the [consumer] and returns the result unchanged.
     *
     * The function will be automatically frozen on native platforms.
     */
    abstract peek(consumer: (p0: T) => void): Future<T>;
    /**
     * Maps the result of this future.
     *
     * The mapper will be automatically frozen on native platforms.
     */
    abstract map<U>(mapper: (p0: T) => U): Future<U>;
    /**
     * Maps and flattens the resulting future. Useful for chaining async code together.
     *
     * The mapper will be automatically frozen on native platforms.
     */
    abstract flatMap<U>(mapper: (p0: T) => Future<U>): Future<U>;
    /**
     * Synchronously waits for this future to resolve.
     *
     * *WARNING*: can deadlock if the future resolves on the same thread, use with caution
     */
    abstract waitFor(): T;
    /**
     * Synchronously waits for this future to resolve up until the given timeout.
     */
    abstract waitFor(timeoutMillis: number): Nullable<T>;
    abstract readonly resolved: boolean;
    /**
     * Ask for the current value if the future has already been resolved.
     * Returns null if the future is not resolved (or if [T] is an optional type and the future has been resolved to null).
     */
    abstract readonly currentValue: Nullable<T>;
    mapTry<T, U>(this: Future<Try<T>>, mapper: (p0: T) => U): Future<Try<U>>;
    mapTryFlat<T, U>(this: Future<Try<T>>, mapper: (p0: T) => Try<U>): Future<Try<U>>;
    flatMapTry<T, U>(this: Future<Try<T>>, mapper: (p0: T) => Future<Try<U>>): Future<Try<U>>;
    flatMapTryFlat<T, U>(this: Future<T>, mapper: (p0: T) => Try<Future<U>>): Future<Try<U>>;
    mapError<T>(this: Future<Try<T>>, mapper: (p0: kotlin.Exception) => kotlin.Exception): Future<Try<T>>;
    catchError<T>(this: Future<Try<T>>, catcher: (p0: kotlin.Exception) => T): Future<T>;
    orTry<T>(this: Future<Try<T>>, fn: (p0: Try.Error) => Try<T>): Future<Try<T>>;
    orTryFlat<T>(this: Future<Try<T>>, fn: (p0: Try.Error) => Future<Try<T>>): Future<Try<T>>;
    upcast<SuperType, DerivedType>(this: Future<DerivedType>): Future<SuperType>;
    upcastTry<SuperType, DerivedType>(this: Future<Try<DerivedType>>): Future<Try<SuperType>>;
    /**
     * If the trial was successful the returned [Future] holds the resulting value, otherwise the returned [Future] logs the resulting error as an error and holds `null`
     *
     * Equivalent to _`map { it.optional }`_ but with the logging, same as _`map { it.logError }`_, see [Try.optional] and [Try.logError]
     */
    logError<T>(this: Future<Try<T>>, prefix?: Nullable<string>): Future<Nullable<T>>;
    /**
     * If the trial was successful the returned [Future] holds the resulting value, otherwise the returned [Future] logs the resulting error as a warning and holds `null`
     *
     * Equivalent to _`map { it.optional }`_ but with the logging, same as _`map { it.logWarning }`_, see [Try.optional] and [Try.logWarning]
     */
    logWarning<T>(this: Future<Try<T>>, prefix?: Nullable<string>): Future<Nullable<T>>;
    /**
     * If the trial was successful the returned [Future] holds the resulting value, otherwise the returned [Future] logs the resulting error as an info and holds `null`
     *
     * Equivalent to _`map { it.optional }`_ but with the logging, same as _`map { it.logInfo }`_, see [Try.optional] and [Try.logInfo]
     */
    logInfo<T>(this: Future<Try<T>>, prefix?: Nullable<string>): Future<Nullable<T>>;
    logDebug<T>(this: Future<Try<T>>, prefix?: Nullable<string>): Future<Nullable<T>>;
    logInternal<T>(this: Future<Try<T>>, prefix?: Nullable<string>): Future<Nullable<T>>;
    promise<T>(this: Future<Try<T>>): Promise<T>;
    promise<T>(this: Future<T>): Promise<T>;
    then<T, U>(this: Future<Try<T>>, onSuccess: (p0: T) => U, onError?: Nullable<(p0: kotlin.Exception) => U>): Future<Try<U>>;
    then<T, U>(this: Future<T>, success: (p0: T) => U): Future<U>;
}
export namespace Future {
    /**
     * Returns a future that resolves to the first resolved future from the given list
     */
    function any<T>(futures: Array<Future<T>>): Future<T>;
    /**
     * Returns a future that resolves with a list of results of all the given futures
     */
    function all<T>(futures: (Array<Future<T>> | kotlin.collections.List<Future<T>>)): Future<kotlin.collections.List<T>>;
    /**
     * Returns a future that is already resolved to the given [value]
     */
    function resolved<T>(value: T): Future<T>;
    /**
     * Runs the given code asynchronously and returns a future on the result
     */
    function async<T>(fn: () => T): Future<T>;
    /**
     * Creates a new future from a generator/producer callback which fulfills the future
     * at any given time, potentially from any thread.
     */
    function fromGenerator<T>(generator: (p0: (p0: T) => void) => void): Future<T>;
    function both<T0, T1>(_0: Future<T0>, _1: Future<T1>): Future<kotlin.Pair<T0, T1>>;
    function tryBoth<T0, T1>(_0: Future<Try<T0>>, _1: Future<Try<T1>>): Future<Try<kotlin.Pair<T0, T1>>>;

}
/**
 * Represents a stream of asynchronous values.
 */
export class Observable<T> {
    private constructor();
    readonly last: Future<Nullable<T>>;
    readonly id: number;
    /**
     * Add a callback that gets called whenever this observable produces a value.
     *
     * There is no general guarantee which thread the observer will be called on and it might be
     * frozen automatically if it crosses threads. To ensure callback on a given thread/queue,
     * use the [on] or [DispatchQueue.here] methods.
     *
     * The observer will be automatically frozen on native platforms if it crosses threads.
     */
    subscribe(observer: (p0: T) => void): void;
    /**
     * Removes a previously registered observer
     */
    unsubscribe(observer: (p0: T) => void): void;
    /**
     * Maps values of this observable
     *
     * There is no general guarantee which thread the mapper will be called on and it might be
     * frozen automatically if it crosses threads. To ensure callback on a given thread/queue,
     * use the [on] or [DispatchQueue.here] methods.
     *
     * The mapper will be automatically frozen on native platforms if it crosses threads.
     */
    map<U>(mapper: (p0: T) => U): Observable<U>;
    /**
     * Maps the values of this observable and flattens the result. Useful when chaining multiple observables together.
     *
     * There is no general guarantee which thread the mapper will be called on and it might be
     * frozen automatically if it crosses threads. To ensure callback on a given thread/queue,
     * use the [on] or [DispatchQueue.here] methods.
     *
     * The mapper will be automatically frozen on native platforms if it crosses threads.
     */
    flatMap<U>(mapper: (p0: T) => Observable<U>): Observable<U>;
    /**
     * Performs a mapping of the values and checks the result for null. If the mapper produces
     * a null value, no output is produced in the resulting observable (the value is filtered out).
     *
     * There is no general guarantee which thread the mapper will be called on and it might be
     * frozen automatically if it crosses threads. To ensure callback on a given thread/queue,
     * use the [on] or [DispatchQueue.here] methods.
     *
     * The mapper will be automatically frozen on native platforms if it crosses threads.
     */
    mapNotNull<U>(mapper: (p0: T) => Nullable<U>): Observable<U>;
    /**
     * Peeks values of this observable and passes them along unmodified. Useful for printing
     * observable values for debug: ``` observable.peek(::println) ```
     *
     * There is no general guarantee which thread the callback will be called on and it might be
     * frozen automatically if it crosses threads. To ensure callback on a given thread/queue,
     * use the [on] or [DispatchQueue.here] methods.
     *
     * The callback will be automatically frozen on native platforms if it crosses threads.
     */
    peek(fn: (p0: T) => void): Observable<T>;
    /**
     * Filters values of this observable based on the given predicate. Values for which the predicate
     * returns true are passed down to the subscribers.
     *
     * There is no general guarantee which thread the callback will be called on and it might be
     * frozen automatically if it crosses threads. To ensure callback on a given thread/queue,
     * use the [on] or [DispatchQueue.here] methods.
     *
     * The callback will be automatically frozen on native platforms if it crosses threads.
     */
    filter(fn: (p0: T) => boolean): Observable<T>;
    /**
     * Adds [withValue] to each of the values produced by this observable as the second parameter of the resulting [Pair].
     *
     * If the given value crosses threads, it will be automatically frozen on native platforms.
     */
    zipSecond<U>(withValue: U): Observable<kotlin.Pair<T, U>>;
    /**
     * Adds [withValue] to each of the values produced by this observable as the first parameter of the resulting [Pair].
     *
     * If the given value crosses threads, it will be automatically frozen on native platforms.
     */
    zipFirst<U>(withValue: U): Observable<kotlin.Pair<U, T>>;
    /**
     * Performs a [map] on the given observable and then forms a pair of the unmapped and mapped value.
     * Useful when producing key-value pairs for a dictionary.
     *
     * There is no general guarantee which thread the mapper will be called on and it might be
     * frozen automatically if it crosses threads. To ensure callback on a given thread/queue,
     * use the [Observable.on] or [DispatchQueue.here] methods.
     *
     * The mapper will be automatically frozen on native platforms if it crosses threads.
     */
    zipMap<U>(mapper: (p0: T) => U): Observable<kotlin.Pair<T, U>>;
    /**
     * Returns a [Future] on the first value produced by this observable.
     */
    readonly first: Future<T>;
    /**
     * Gets the latest value this observable has produced (if any)
     */
    readonly value: Nullable<T>;
    mapTry<T, U>(this: Observable<Try<T>>, mapper: (p0: T) => U): Observable<Try<U>>;
    mapTryFlat<T, U>(this: Observable<Try<T>>, mapper: (p0: T) => Try<U>): Observable<Try<U>>;
    flatMapTry<T, U>(this: Observable<Try<T>>, mapper: (p0: T) => Observable<Try<U>>): Observable<Try<U>>;
    flatMapTryFlat<T, U>(this: Observable<T>, mapper: (p0: T) => Try<Observable<U>>): Observable<Try<U>>;
    catchObservableError<T>(this: Observable<Try<T>>, catcher: (p0: kotlin.Exception) => T): Observable<T>;
    orTry<T>(this: Observable<Try<T>>, fn: (p0: Try.Error) => Try<T>): Observable<Try<T>>;
    orTryFlat<T>(this: Observable<Try<T>>, fn: (p0: Try.Error) => Observable<Try<T>>): Observable<Try<T>>;
}
export namespace Observable {
    /**
     * Creates a new observable from a generator/producer callback which repeatedly fires the observable,
     * potentially from any thread.
     */
    function create<T>(generator: (p0: (p0: T) => void, p1: () => void) => void): Observable<T>;
    /**
     * Creates a new observable from a generator/producer callback which repeatedly fires the observable,
     * potentially from any thread.
     */
    function createWithGenerator<T>(generator: (p0: (p0: T) => void, p1: () => void) => void): Observable<T>;
    function create<T>(futures: Array<Future<T>>): Observable<T>;
    function createWithFutureOfT<T>(futures: Array<Future<T>>): Observable<T>;
    /**
     * Creates an observable from a list of future values. The observable fires a single value
     * for each of the given futures. After all futures have resolved, this observable is ended
     * and the [last] future is resolved.
     */
    function create<T>(futures: (Array<Future<T>> | kotlin.collections.Collection<Future<T>>)): Observable<T>;
    /**
     * Creates an observable from a list of future values. The observable fires a single value
     * for each of the given futures. After all futures have resolved, this observable is ended
     * and the [last] future is resolved.
     */
    function createWithCollectionOfFutureOfT<T>(futures: (Array<Future<T>> | kotlin.collections.Collection<Future<T>>)): Observable<T>;
    /**
     * Wraps a single value as an observable. Useful when combining primitive values with
     * other observables.
     */
    function create<T>(value: T): Observable<T>;
    /**
     * Wraps a single value as an observable. Useful when combining primitive values with
     * other observables.
     */
    function createWithValue<T>(value: T): Observable<T>;
    /**
     * Produces an observable that fires any time any of the given observables produces a value.
     * Ends when all of the given observables end.
     */
    function any<T>(observables: (Array<Observable<T>> | kotlin.collections.Iterable<Observable<T>>)): Observable<T>;
    /**
     * Produces an observable that fires when all of the given observables produced at least
     * one value. The produced value is a list containing values from the given observables in
     * the same order they were provided.
     * If after the observables fire multiple values, a new list of values is produced any time an
     * observable fires.
     */
    function all<T>(observables: (Array<Observable<T>> | kotlin.collections.Iterable<Observable<T>>)): Observable<kotlin.collections.List<T>>;

}
export abstract class AbstractBlendshapes extends Vector {
    readonly names: kotlin.collections.List<string>;
}
export const EXPRESSION_BLENDSHAPES: kotlin.collections.List<string>;
type CommonEmotionsType = {
    readonly HAPPY: kotlin.collections.Map<string, number>;
    readonly SAD: kotlin.collections.Map<string, number>;
    readonly ANGRY: kotlin.collections.Map<string, number>;
    readonly VICIOUS: kotlin.collections.Map<string, number>;
    readonly SURPRISED: kotlin.collections.Map<string, number>;
    readonly SCARED: kotlin.collections.Map<string, number>;
}
/**
 * Contains definitions for common facial expressions for basic emotions such as happy/angry/sad/...
 */
export const CommonEmotions: CommonEmotionsType;
export class ExpressionBlendshapes extends AbstractBlendshapes {
    private constructor();
}
export namespace ExpressionBlendshapes {
    function create(blendshapes: (Map<string, number> | PlainObjectMap<number> | kotlin.collections.Map<string, number>), _default?: number): ExpressionBlendshapes;
    function createWithBlendshapes(blendshapes: (Map<string, number> | PlainObjectMap<number> | kotlin.collections.Map<string, number>), _default?: number): ExpressionBlendshapes;

}
export abstract class Try<T> {
    flatMap<U>(mapper: (p0: T) => Try<U>): Try<U>;
    map<U>(mapper: (p0: T) => U): Try<U>;
    mapError(mapper: (p0: kotlin.Exception) => kotlin.Exception): Try<T>;
    readonly optional: Nullable<T>;
    readonly exception: Nullable<kotlin.Exception>;
    readonly bool: boolean;
    readonly orThrow: T;
    defer<T>(this: Try<Future<T>>): Future<Try<T>>;
    squash<T>(this: Try<Future<Try<T>>>): Future<Try<T>>;
    defer<T>(this: Try<Observable<T>>): Observable<Try<T>>;
    catchException<T>(this: Try<T>, catcher: (p0: kotlin.Exception) => T): T;
    catchError<T>(this: Try<T>, catcher: (p0: Try.Error) => T): T;
    or<T>(this: Try<T>, fn: (p0: Try.Error) => Try<T>): Try<T>;
    flatten<T>(this: Try<Try<T>>): Try<T>;
    upcast<SuperType, DerivedType>(this: Try<DerivedType>): Try<SuperType>;
    /**
     * If the trial was successful returns the resulting value, otherwise logs the resulting error as an error and returns `null`
     *
     * Same as [Try.optional] but with the logging
     */
    logError<T>(this: Try<T>, prefix?: Nullable<string>): Nullable<T>;
    /**
     * If the trial was successful returns the resulting value, otherwise logs the resulting error as a warning and returns `null`
     *
     * Same as [Try.optional] but with the logging
     */
    logWarning<T>(this: Try<T>, prefix?: Nullable<string>): Nullable<T>;
    /**
     * If the trial was successful returns the resulting value, otherwise logs the resulting error as an info and returns `null`
     *
     * Same as [Try.optional] but with the logging
     */
    logInfo<T>(this: Try<T>, prefix?: Nullable<string>): Nullable<T>;
    logDebug<T>(this: Try<T>, prefix?: Nullable<string>): Nullable<T>;
    logInternal<T>(this: Try<T>, prefix?: Nullable<string>): Nullable<T>;
}
export namespace Try {
    class Value<T> extends Try<T> {
        constructor(value: T);
        readonly value: T;
        component1(): T;
        copy(value?: T): Try.Value<T>;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    class Error extends Try<never> {
        constructor(error: kotlin.Exception);
        readonly error: kotlin.Exception;
        component1(): kotlin.Exception;
        copy(error?: kotlin.Exception): Try.Error;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    namespace Error {
        function create(message: string): Try.Error;
        function createWithMessage(message: string): Try.Error;

    }
    function success<T>(value: T): Try<T>;
    function error<T>(exception: kotlin.Exception): Try<T>;
    function error<T>(message: string): Try<T>;
    function all<T>(items: (Array<Try<T>> | kotlin.collections.List<Try<T>>)): Try<kotlin.collections.List<T>>;

}
type FillModeType = {
    readonly Stretch: FillModeType;
    readonly Zoom: FillModeType;
    readonly Shrink: FillModeType;
}
/**
 * Specifies the behaviour when some target is filled with an image
 */
export const FillMode: FillModeType;
type PixelComponentsType = {
    readonly R: PixelComponentsType;
    readonly RG: PixelComponentsType;
    readonly RGBA: PixelComponentsType;
}
export const PixelComponents: PixelComponentsType;
export interface File {
    readonly path: Path;
    readonly fileSystem: FileSystem;
    readAllBytes(): Future<Try<Int8Array>>;
    readAllText(): Future<Try<string>>;
    readImage(): Future<Try<Image>>;
    readJson(): Future<Try<DecodedJson>>;
    readLines(this: File): Future<Try<kotlin.collections.List<string>>>;
}
export interface FileSystem {
    fileAt(path: Path): Future<Try<File>>;
    watch(path: Path): Observable<Try<File>>;
    exists(path: Path): Future<boolean>;
    lastModified(path: Path): Future<Try<kotlin.Long>>;
    url(path: Path): Try<string>;
    readonly root: Path;
    subSystem(this: FileSystem, root: Path): FileSystem;
    indexed(this: FileSystem, indexReloadIntervalMs?: number): FileSystem;
    textAt(this: FileSystem, path: Path): Future<Try<string>>;
    processFiles<T>(this: FileSystem, paths: (Array<string> | kotlin.collections.List<string>), filesInParallel?: number, processFile: (p0: number, p1: File) => Future<Try<T>>): Future<Try<kotlinx.collections.immutable.PersistentList<T>>>;
    readAllTexts(this: FileSystem, paths: (Array<string> | kotlin.collections.List<string>), filesInParallel?: number, onFileLoaded?: Nullable<(p0: number, p1: string) => void>): Future<Try<kotlinx.collections.immutable.PersistentList<string>>>;
    watcher(this: FileSystem, watchFilter?: Nullable<(p0: string) => boolean>, errorSensitivity?: FileWatchErrorSensitivityType): FileSystemWatcher;
}
export interface WriteableFileSystem extends FileSystem {
    writeFile(path: Path, bytes: Int8Array, lastModified?: Nullable<kotlin.Long>): Future<Try<void>>;
    subSystem(this: WriteableFileSystem, root: Path): WriteableFileSystem;
    indexed(this: WriteableFileSystem, indexReloadIntervalMs?: number): WriteableFileSystem;
    textAt(this: FileSystem, path: Path): Future<Try<string>>;
    processFiles<T>(this: FileSystem, paths: (Array<string> | kotlin.collections.List<string>), filesInParallel?: number, processFile: (p0: number, p1: File) => Future<Try<T>>): Future<Try<kotlinx.collections.immutable.PersistentList<T>>>;
    readAllTexts(this: FileSystem, paths: (Array<string> | kotlin.collections.List<string>), filesInParallel?: number, onFileLoaded?: Nullable<(p0: number, p1: string) => void>): Future<Try<kotlinx.collections.immutable.PersistentList<string>>>;
    watcher(this: FileSystem, watchFilter?: Nullable<(p0: string) => boolean>, errorSensitivity?: FileWatchErrorSensitivityType): FileSystemWatcher;
}
export interface ExtendedFileSystem extends FileSystem {
    glob(pathPattern: Path, recursive?: boolean, includeDirectories?: boolean, includeFiles?: boolean): Future<Try<kotlin.collections.List<string>>>;
    glob(pathPattern: string, recursive?: boolean, includeDirectories?: boolean, includeFiles?: boolean): Future<Try<kotlin.collections.List<string>>>;
    subSystem(this: FileSystem, root: Path): FileSystem;
    indexed(this: FileSystem, indexReloadIntervalMs?: number): FileSystem;
    textAt(this: FileSystem, path: Path): Future<Try<string>>;
    processFiles<T>(this: FileSystem, paths: (Array<string> | kotlin.collections.List<string>), filesInParallel?: number, processFile: (p0: number, p1: File) => Future<Try<T>>): Future<Try<kotlinx.collections.immutable.PersistentList<T>>>;
    readAllTexts(this: FileSystem, paths: (Array<string> | kotlin.collections.List<string>), filesInParallel?: number, onFileLoaded?: Nullable<(p0: number, p1: string) => void>): Future<Try<kotlinx.collections.immutable.PersistentList<string>>>;
    watcher(this: FileSystem, watchFilter?: Nullable<(p0: string) => boolean>, errorSensitivity?: FileWatchErrorSensitivityType): FileSystemWatcher;
}
export class FileSubSystem<T> implements FileSystem {
    constructor(parent: T, newRoot: Path);
    fileAt(path: Path): Future<Try<File>>;
    watch(path: Path): Observable<Try<File>>;
    exists(path: Path): Future<boolean>;
    lastModified(path: Path): Future<Try<kotlin.Long>>;
    url(path: Path): Try<string>;
    readonly root: Path;
    subSystem(this: FileSystem, root: Path): FileSystem;
    indexed(this: FileSystem, indexReloadIntervalMs?: number): FileSystem;
    textAt(this: FileSystem, path: Path): Future<Try<string>>;
    processFiles<T>(this: FileSystem, paths: (Array<string> | kotlin.collections.List<string>), filesInParallel?: number, processFile: (p0: number, p1: File) => Future<Try<T>>): Future<Try<kotlinx.collections.immutable.PersistentList<T>>>;
    readAllTexts(this: FileSystem, paths: (Array<string> | kotlin.collections.List<string>), filesInParallel?: number, onFileLoaded?: Nullable<(p0: number, p1: string) => void>): Future<Try<kotlinx.collections.immutable.PersistentList<string>>>;
    watcher(this: FileSystem, watchFilter?: Nullable<(p0: string) => boolean>, errorSensitivity?: FileWatchErrorSensitivityType): FileSystemWatcher;
}
export class WriteableFileSubSystem extends FileSubSystem<WriteableFileSystem> implements WriteableFileSystem {
    constructor(parent: WriteableFileSystem, newRoot: Path);
    writeFile(path: Path, bytes: Int8Array, lastModified?: Nullable<kotlin.Long>): Future<Try<void>>;
    textAt(this: FileSystem, path: Path): Future<Try<string>>;
    processFiles<T>(this: FileSystem, paths: (Array<string> | kotlin.collections.List<string>), filesInParallel?: number, processFile: (p0: number, p1: File) => Future<Try<T>>): Future<Try<kotlinx.collections.immutable.PersistentList<T>>>;
    readAllTexts(this: FileSystem, paths: (Array<string> | kotlin.collections.List<string>), filesInParallel?: number, onFileLoaded?: Nullable<(p0: number, p1: string) => void>): Future<Try<kotlinx.collections.immutable.PersistentList<string>>>;
    watcher(this: FileSystem, watchFilter?: Nullable<(p0: string) => boolean>, errorSensitivity?: FileWatchErrorSensitivityType): FileSystemWatcher;
    subSystem(this: WriteableFileSystem, root: Path): WriteableFileSystem;
    indexed(this: WriteableFileSystem, indexReloadIntervalMs?: number): WriteableFileSystem;
}
export class ExtendedFileSubSystem extends FileSubSystem<ExtendedFileSystem> implements ExtendedFileSystem {
    constructor(parent: ExtendedFileSystem, newRoot: Path);
    glob(pathPattern: Path, recursive?: boolean, includeDirectories?: boolean, includeFiles?: boolean): Future<Try<kotlin.collections.List<string>>>;
    subSystem(this: FileSystem, root: Path): FileSystem;
    indexed(this: FileSystem, indexReloadIntervalMs?: number): FileSystem;
    textAt(this: FileSystem, path: Path): Future<Try<string>>;
    processFiles<T>(this: FileSystem, paths: (Array<string> | kotlin.collections.List<string>), filesInParallel?: number, processFile: (p0: number, p1: File) => Future<Try<T>>): Future<Try<kotlinx.collections.immutable.PersistentList<T>>>;
    readAllTexts(this: FileSystem, paths: (Array<string> | kotlin.collections.List<string>), filesInParallel?: number, onFileLoaded?: Nullable<(p0: number, p1: string) => void>): Future<Try<kotlinx.collections.immutable.PersistentList<string>>>;
    watcher(this: FileSystem, watchFilter?: Nullable<(p0: string) => boolean>, errorSensitivity?: FileWatchErrorSensitivityType): FileSystemWatcher;
}
export class FallbackFileSystem implements FileSystem {
    constructor(filesystems: (Array<FileSystem> | kotlin.collections.List<FileSystem>));
    fileAt(path: Path): Future<Try<File>>;
    watch(path: Path): Observable<Try<File>>;
    exists(path: Path): Future<boolean>;
    lastModified(path: Path): Future<Try<kotlin.Long>>;
    url(path: Path): Try<string>;
    readonly root: Path;
    subSystem(this: FileSystem, root: Path): FileSystem;
    indexed(this: FileSystem, indexReloadIntervalMs?: number): FileSystem;
    textAt(this: FileSystem, path: Path): Future<Try<string>>;
    processFiles<T>(this: FileSystem, paths: (Array<string> | kotlin.collections.List<string>), filesInParallel?: number, processFile: (p0: number, p1: File) => Future<Try<T>>): Future<Try<kotlinx.collections.immutable.PersistentList<T>>>;
    readAllTexts(this: FileSystem, paths: (Array<string> | kotlin.collections.List<string>), filesInParallel?: number, onFileLoaded?: Nullable<(p0: number, p1: string) => void>): Future<Try<kotlinx.collections.immutable.PersistentList<string>>>;
    watcher(this: FileSystem, watchFilter?: Nullable<(p0: string) => boolean>, errorSensitivity?: FileWatchErrorSensitivityType): FileSystemWatcher;
}
export namespace FallbackFileSystem {
    function create(filesystems: Array<FileSystem>): FallbackFileSystem;
    function createWithFileSystem(filesystems: Array<FileSystem>): FallbackFileSystem;

}
export class DevelopmentFileSystem implements ExtendedFileSystem, WriteableFileSystem {
    private constructor();
    readonly root: Path;
    writeFile(path: Path, bytes: Int8Array, lastModified?: Nullable<kotlin.Long>): Future<Try<void>>;
    glob(pathPattern: Path, recursive?: boolean, includeDirectories?: boolean, includeFiles?: boolean): Future<Try<kotlin.collections.List<string>>>;
    fileAt(path: Path): Future<Try<File>>;
    watch(path: Path): Observable<Try<File>>;
    exists(path: Path): Future<boolean>;
    lastModified(path: Path): Future<Try<kotlin.Long>>;
    url(path: Path): Try<string>;
    textAt(this: FileSystem, path: Path): Future<Try<string>>;
    processFiles<T>(this: FileSystem, paths: (Array<string> | kotlin.collections.List<string>), filesInParallel?: number, processFile: (p0: number, p1: File) => Future<Try<T>>): Future<Try<kotlinx.collections.immutable.PersistentList<T>>>;
    readAllTexts(this: FileSystem, paths: (Array<string> | kotlin.collections.List<string>), filesInParallel?: number, onFileLoaded?: Nullable<(p0: number, p1: string) => void>): Future<Try<kotlinx.collections.immutable.PersistentList<string>>>;
    watcher(this: FileSystem, watchFilter?: Nullable<(p0: string) => boolean>, errorSensitivity?: FileWatchErrorSensitivityType): FileSystemWatcher;
    subSystem(this: WriteableFileSystem, root: Path): WriteableFileSystem;
    indexed(this: WriteableFileSystem, indexReloadIntervalMs?: number): WriteableFileSystem;
}
export namespace DevelopmentFileSystem {
    function create(root: Path, resourceDirsOverride: (Array<string> | kotlin.collections.List<string>), port?: string): DevelopmentFileSystem;
    function createWithListOfString(root: Path, resourceDirsOverride: (Array<string> | kotlin.collections.List<string>), port?: string): DevelopmentFileSystem;
    function create(root?: Path, resourceDirsOverride?: Nullable<Array<string>>, port?: string): DevelopmentFileSystem;
    function createWithArrayOfString(root?: Path, resourceDirsOverride?: Nullable<Array<string>>, port?: string): DevelopmentFileSystem;

}
export class FileSystemWatcher {
    private constructor();
    watch<T>(noChangeValue: T, watcher: (p0: FileSystem) => T): T;
    watch<T>(noChangeValue: T, fileSystem: FileSystem, watcher: (p0: FileSystem) => T): T;
    watchFlat<T>(noChangeValue: T, watcher: (p0: FileSystem) => Future<T>): Future<T>;
}
export namespace FileSystemWatcher {
    function create(fileSystem: FileSystem, watchFilter?: Nullable<(p0: string) => boolean>, errorSensitivity?: FileWatchErrorSensitivityType): FileSystemWatcher;
    function createWithFileSystem(fileSystem: FileSystem, watchFilter?: Nullable<(p0: string) => boolean>, errorSensitivity?: FileWatchErrorSensitivityType): FileSystemWatcher;

}
type FileWatchErrorSensitivityType = {
    readonly LOW: FileWatchErrorSensitivityType;
    readonly MEDIUM: FileWatchErrorSensitivityType;
    readonly HIGH: FileWatchErrorSensitivityType;
}
export const FileWatchErrorSensitivity: FileWatchErrorSensitivityType;
type JsonEncoderDecoderType = {
    readonly json: kotlinx.serialization.json.Json;
    parseJson<T>(jsonText: string, strategy: kotlinx.serialization.DeserializationStrategy<T>): Try<T>;
}
export const JsonEncoderDecoder: JsonEncoderDecoderType;
export interface DecodedJson {
    get(key: string): Nullable<DecodedJson>;
    get(index: number): Nullable<DecodedJson>;
    readonly size: number;
    readonly keys: kotlin.collections.Iterable<string>;
    getString(key: string): Nullable<string>;
    getInt(key: string): Nullable<number>;
    getDouble(key: string): Nullable<number>;
    getBool(key: string): Nullable<boolean>;
    getString(index: number): Nullable<string>;
    getInt(index: number): Nullable<number>;
    getDouble(index: number): Nullable<number>;
    getBool(index: number): Nullable<boolean>;
}
export class Path {
    constructor(path: string);
    lastComponent(): string;
    extension(): string;
    baseName(): string;
    directory(): Path;
    join(path: string): Path;
    join(path: Path): Path;
    div(path: string): Path;
    div(path: Path): Path;
    normalized(): Path;
    toString(): string;
    copy(path?: string): Path;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
type LogLevelType = {
    readonly Internal: LogLevelType;
    readonly Debug: LogLevelType;
    readonly Info: LogLevelType;
    readonly Warning: LogLevelType;
    readonly Error: LogLevelType;
}
export const LogLevel: LogLevelType;
export class Logger {
    constructor();
}
export namespace Logger {
    let logLevel: LogLevelType;
    let printLogWithListeners: boolean;
    function log(level: LogLevelType, message: string, logStackTrace?: Nullable<kotlin.Exception>): void;
    function addLogListener(l: (p0: LogLevelType, p1: string) => void): void;
    function removeLogListener(l: (p0: LogLevelType, p1: string) => void): void;
    function time(): TimeLogger;
    function debug(message: string): void;
    function info(message: string): void;
    function warning(message: string): void;
    function error(message: string): void;
    function error(error: kotlin.Exception): void;
    function error(message: string, error: kotlin.Exception): void;

}
export class TimeLogger {
    constructor(start?: kotlin.Long);
    log(level: LogLevelType, message: string, logStackTrace?: Nullable<kotlin.Exception>): void;
    debug(message: string): void;
    internal(message: string): void;
    info(message: string): void;
    warning(message: string): void;
    error(message: string): void;
}
export class Camera {
    private constructor();
    readonly origin: Vec3;
    readonly view: Vec3;
    readonly upVec3: Vec3;
    readonly orbit: boolean;
    readonly orbitRadius: number;
    readonly viewMatrix: Mat4;
    /**
     * Pass eye to shaders to have e.g. correct specular when in orbit mode
     */
    readonly eye: Vec3;
    readonly rightVec3: Vec3;
    orthoNormalized(): Camera;
    forward(speed?: number): Camera;
    backward(speed?: number): Camera;
    right(speed?: number): Camera;
    left(speed?: number): Camera;
    up(speed?: number, upOverride?: Nullable<Vec3>): Camera;
    down(speed?: number, upOverride?: Nullable<Vec3>): Camera;
    lookTo(viewDirection: Vec3, verticalUp?: Nullable<Vec3>): Camera;
    lookAt(target: Vec3, verticalUp?: Nullable<Vec3>): Camera;
    /**
     * Rotates the camera first-person-shooter style keeping the given vector as vertical (unless other rotations were performed)
     * @param azimuth right-handed rotation about the verticalUp axis (positive => turn left)
     * @param zenith "up-down" rotation in the view-verticalUp plane (right-handed rotation about view X verticalUp, positive => look up)
     * @param verticalUp vector defining the vertical axis to keep
     * @param zenithLimit fraction of PI to which the view vector can get to the given vertical axis (in either direction), no limit if null
     */
    rotate(azimuth: number, zenith: number, verticalUp?: Vec3, zenithLimit?: Nullable<number>): Camera;
    /**
     * Rotates the camera space-flight-simulator style using Tait-Bryan angles, first by heading, then by elevation, then by bank
     * @param heading right-handed rotation about current up vector
     * @param elevation right-handed rotation about heading-rotated right vector
     * @param bank left-handed rotation about heading-and-elevation-rotated view vector
     */
    rotate(heading: number, elevation: number, bank: number): Camera;
    withOrigin(origin: Vec3): Camera;
    withView(view: Vec3): Camera;
    withUp(up: Vec3): Camera;
    withOrbit(orbit: boolean): Camera;
    withOrbitRadius(orbitRadius: number): Camera;
}
export namespace Camera {
    /**
     * Creates a camera looking in the given direction
     * @param origin reference camera point
     * @param viewDirection vector along which the camera is pointed
     * @param upDirection vector seen as vertical, pointing upwards
     * @param orbit whether the camera eye should orbit the origin (true, third person camera) or be in the origin (false, first person camera)
     * @param orbitRadius the distance from origin to camera eye in orbit mode
     */
    function lookTo(origin: Vec3, viewDirection: Vec3, upDirection: Vec3, orbit?: boolean, orbitRadius?: Nullable<number>): Camera;
    /**
     * Creates a camera looking from the given point [lookFrom] at the given point [lookAt].
     * The reference point [origin] of the camera is either [lookFrom] if [orbit] is false or [lookAt] if it is true
     */
    function lookAt(lookFrom: Vec3, lookAt: Vec3, upDirection: Vec3, orbit?: boolean): Camera;

}
/**
 * Camera controls that rotates camera around point in space
 * @see from
 */
export class OrbitCameraControls {
    private constructor();
    readonly camera: Camera;
    /**
     * Rotates camera around selected axis of rotation
     * @param delta [Num] ]elapsed time since last frame
     * @return [OrbitCameraControls]
     */
    tick(delta: number): OrbitCameraControls;
}
export namespace OrbitCameraControls {
    /**
     * Creates camera controls that rotates camera around point in space keeping selected zenith (based on #basePosition parameter)
     * @param basePosition [Vec3] init camera position, used to evaluate init azimuth and zenith that will be respected during rotation
     * @param targetPosition [Vec3] point in space around which will camera rotate
     * @param timeToRotate [Num] time in seconds that should take camera to make single rotation around target point
     * @param rotationalAxis [Vec3] axis of camera rotation ([Vec3.zAxis] is default)
     * @see tick
     */
    function from(basePosition: Vec3, targetPosition: Vec3, timeToRotate: number, rotationalAxis?: Vec3): OrbitCameraControls;

}
export class Col extends Vector {
    private constructor();
    readonly r: number;
    readonly g: number;
    readonly b: number;
    readonly a: number;
    readonly rgb: Col;
    readonly xy: Vec2;
    readonly xyz: Vec3;
    readonly xyzw: Vec4;
    withR(r: number): Col;
    withG(g: number): Col;
    withB(b: number): Col;
    withA(a: number): Col;
    toInt(channelMap?: Int32Array): number;
    clamp(): Col;
}
export namespace Col {
    function create(r: number, g: number, b: number, a: number): Col;
    function createWithDoubleAndDoubleAndDoubleAndDouble(r: number, g: number, b: number, a: number): Col;
    function create(r: number, g: number, b: number): Col;
    function createWithDoubleAndDoubleAndDouble(r: number, g: number, b: number): Col;
    function create(r: number, g: number, b: number, a: number): Col;
    function createWithFloatAndFloatAndFloatAndFloat(r: number, g: number, b: number, a: number): Col;
    function create(r: number, g: number, b: number): Col;
    function createWithFloatAndFloatAndFloat(r: number, g: number, b: number): Col;
    function create(r: number, g: number, b: number, a: number): Col;
    function createWithIntAndIntAndIntAndInt(r: number, g: number, b: number, a: number): Col;
    function create(r: number, g: number, b: number): Col;
    function createWithIntAndIntAndInt(r: number, g: number, b: number): Col;
    function create(): Col;
    function create7(): Col;
    function create(color: number, channelMap?: Int32Array): Col;
    function createWithIntAndIntArray(color: number, channelMap?: Int32Array): Col;
    const RGBA: Int32Array;
    const BGRA: Int32Array;
    const RGB: Int32Array;
    const BGR: Int32Array;
    const WHITE: Col;
    const BLACK: Col;
    const TRANSPARENT: Col;
    const RED: Col;
    const GREEN: Col;
    const BLUE: Col;
    const MAGENTA: Col;
    const YELLOW: Col;
    const CYAN: Col;
    const GRAY: Col;
    /**
     * Creates a new Col from a hexadecimal RGB(A) definition.
     */
    function fromHex(hex: string): Try<Col>;

}
export abstract class MatrixLayout {
    abstract invoke(row: number, column: number, order: number): number;
    abstract readonly transposed: MatrixLayout;
}
export namespace MatrixLayout {
    type RowMajorType = {
        invoke(row: number, column: number, order: number): number;
        readonly transposed: MatrixLayout.ColumnMajorType;
    } & MatrixLayout
    const RowMajor: RowMajorType;
    type ColumnMajorType = {
        invoke(row: number, column: number, order: number): number;
        readonly transposed: MatrixLayout.RowMajorType;
    } & MatrixLayout
    const ColumnMajor: ColumnMajorType;
    const defaultLayout: MatrixLayout;

}
export abstract class Matrix extends Vector {
    constructor(elements: Float32Array, order: number, layout?: MatrixLayout);
    readonly order: number;
    readonly layout: MatrixLayout;
    transposed(): T;
    transposedLayout(): T;
    mul(rhs: T): T;
    times(rhs: T): T;
    abstract inverse(): Nullable<T>;
    inverse(_default: T): T;
    toString(): string;
}
export class Mat2 extends Matrix {
    private constructor();
    readonly x: Vec2;
    readonly y: Vec2;
    withX(x: Vec2): Mat2;
    withY(y: Vec2): Mat2;
    withZ(z: Vec3): Mat3;
    readonly mat2: Mat2;
    readonly mat3: Mat3;
    readonly mat4: Mat4;
    inverse(): Nullable<Mat2>;
    mulVec(rhs: Vec2): Vec2;
    /**
     * Returns scale vector extracted from this matrix
     */
    scale(this: Mat2): Vec2;
}
export namespace Mat2 {
    function create(x: Vec2, y: Vec2, layout?: MatrixLayout): Mat2;
    function createWithX(x: Vec2, y: Vec2, layout?: MatrixLayout): Mat2;
    function create(layout?: MatrixLayout): Mat2;
    function createWithLayout(layout?: MatrixLayout): Mat2;
    function identity(layout?: MatrixLayout): Mat2;
    function scale(x: number, y?: Nullable<number>, layout?: MatrixLayout): Mat2;
    function scale(x: number, y?: Nullable<number>, layout?: MatrixLayout): Mat2;
    function scale(vec: Vec2, layout?: MatrixLayout): Mat2;
    function translate(x: number, y?: Nullable<number>, layout?: MatrixLayout): Mat2;
    function translate(x: number, y?: Nullable<number>, layout?: MatrixLayout): Mat2;
    function translate(vec: Vec2, layout?: MatrixLayout): Mat2;
    function rotate(angle: number, layout?: MatrixLayout): Mat2;
    function rotate(angle: number, layout?: MatrixLayout): Mat2;

}
export class Mat3 extends Matrix {
    private constructor();
    readonly x: Vec3;
    readonly y: Vec3;
    readonly z: Vec3;
    readonly mat2: Mat2;
    readonly mat3: Mat3;
    readonly mat4: Mat4;
    withX(x: Vec3): Mat3;
    withY(y: Vec3): Mat3;
    withZ(z: Vec3): Mat3;
    withW(w: Vec4): Mat4;
    inverse(): Nullable<Mat3>;
    mulVec(rhs: Vec3): Vec3;
    mul(this: Mat3, rhs: Quaternion): Mat3;
    /**
     * Creates a new quaternion equivalent to the rotation given by
     * this rotation (orthonormal) matrix
     * @return new [Quaternion] instance
     */
    quaternion(this: Mat3): Quaternion;
    /**
     * Returns scale vector extracted from this matrix interpreted as a 3D vector transformation
     */
    scale(this: Mat3): Vec3;
    /**
     * Returns scale vector extracted from this matrix interpreted as a 2D homogeneous (projective) point transformation
     */
    scale2(this: Mat3): Vec2;
    /**
     * Returns translation vector extracted from this matrix interpreted as a 2D homogeneous (projective) point transformation
     */
    translation(this: Mat3): Vec2;
    /**
     * Returns rotation quaternion extracted from this matrix
     */
    rotation(this: Mat3): Quaternion;
}
export namespace Mat3 {
    function create(x: Vec3, y: Vec3, z: Vec3, layout?: MatrixLayout): Mat3;
    function createWithX(x: Vec3, y: Vec3, z: Vec3, layout?: MatrixLayout): Mat3;
    function create(layout?: MatrixLayout): Mat3;
    function createWithLayout(layout?: MatrixLayout): Mat3;
    function identity(layout?: MatrixLayout): Mat3;
    function scale(x: number, y?: Nullable<number>, layout?: MatrixLayout): Mat3;
    function scale(x: number, y?: Nullable<number>, layout?: MatrixLayout): Mat3;
    function scale(vec: Vec2, layout?: MatrixLayout): Mat3;
    function scale(x: number, y?: Nullable<number>, z?: Nullable<number>, layout?: MatrixLayout): Mat3;
    function scale(x: number, y?: Nullable<number>, z?: Nullable<number>, layout?: MatrixLayout): Mat3;
    function scale(vec: Vec3, layout?: MatrixLayout): Mat3;
    function translate(x: number, y?: Nullable<number>, layout?: MatrixLayout): Mat3;
    function translate(x: number, y?: Nullable<number>, layout?: MatrixLayout): Mat3;
    function translate(vec: Vec2, layout?: MatrixLayout): Mat3;
    function translate(x: number, y?: Nullable<number>, z?: Nullable<number>, layout?: MatrixLayout): Mat3;
    function translate(x: number, y?: Nullable<number>, z?: Nullable<number>, layout?: MatrixLayout): Mat3;
    function translate(vec: Vec3, layout?: MatrixLayout): Mat3;
    function rotateX(angle: number, layout?: MatrixLayout): Mat3;
    function rotateX(angle: number, layout?: MatrixLayout): Mat3;
    function rotateY(angle: number, layout?: MatrixLayout): Mat3;
    function rotateY(angle: number, layout?: MatrixLayout): Mat3;
    function rotateZ(angle: number, layout?: MatrixLayout): Mat3;
    function rotateZ(angle: number, layout?: MatrixLayout): Mat3;
    function rotate(angleX: number, angleY: number, angleZ: number, layout?: MatrixLayout): Mat3;
    function rotate(angleX: number, angleY: number, angleZ: number, layout?: MatrixLayout): Mat3;
    function rotate(angle: number, axis: Vec3, layout?: MatrixLayout): Mat3;
    function rotate(angle: number, axis: Vec3, layout?: MatrixLayout): Mat3;
    function rotate(cosAngle: number, sinAngle: number, axis: Vec3, layout?: MatrixLayout): Mat3;
    function rotate(cosAngle: number, sinAngle: number, axis: Vec3, layout?: MatrixLayout): Mat3;
    function rotate(v1: Vec3, v2: Vec3, layout?: MatrixLayout): Mat3;

}
export class Mat4 extends Matrix {
    private constructor();
    readonly x: Vec4;
    readonly y: Vec4;
    readonly z: Vec4;
    readonly w: Vec4;
    readonly mat2: Mat2;
    readonly mat3: Mat3;
    readonly mat4: Mat4;
    withX(x: Vec4): Mat4;
    withY(y: Vec4): Mat4;
    withZ(z: Vec4): Mat4;
    withW(w: Vec4): Mat4;
    inverse(): Nullable<Mat4>;
    mulVec(rhs: Vec4): Vec4;
    mul(this: Mat4, rhs: Quaternion): Mat4;
    /**
     * Creates a new quaternion equivalent to the rotation given by
     * this rotation (orthonormal) matrix
     * @return new [Quaternion] instance
     */
    quaternion(this: Mat4): Quaternion;
    /**
     * Returns scale vector extracted from this matrix
     */
    scale(this: Mat4): Vec3;
    /**
     * Returns translation vector extracted from this matrix
     */
    translation(this: Mat4): Vec3;
    /**
     * Returns rotation quaternion extracted from this matrix
     */
    rotation(this: Mat4): Quaternion;
}
export namespace Mat4 {
    function create(x: Vec4, y: Vec4, z: Vec4, w: Vec4, layout?: MatrixLayout): Mat4;
    function createWithX(x: Vec4, y: Vec4, z: Vec4, w: Vec4, layout?: MatrixLayout): Mat4;
    function create(layout?: MatrixLayout): Mat4;
    function createWithLayout(layout?: MatrixLayout): Mat4;
    function identity(layout?: MatrixLayout): Mat4;
    function scale(x: number, y?: Nullable<number>, z?: Nullable<number>, layout?: MatrixLayout): Mat4;
    function scale(x: number, y?: Nullable<number>, z?: Nullable<number>, layout?: MatrixLayout): Mat4;
    function scale(vec: Vec3, layout?: MatrixLayout): Mat4;
    function scale(x: number, y: number, z: number, w: number, layout?: MatrixLayout): Mat4;
    function scale(x: number, y: number, z: number, w: number, layout?: MatrixLayout): Mat4;
    function scale(vec: Vec4, layout?: MatrixLayout): Mat4;
    function translate(x: number, y?: Nullable<number>, z?: Nullable<number>, layout?: MatrixLayout): Mat4;
    function translate(x: number, y?: Nullable<number>, z?: Nullable<number>, layout?: MatrixLayout): Mat4;
    function translate(vec: Vec3, layout?: MatrixLayout): Mat4;
    function translate(x: number, y: number, z: number, w: number, layout?: MatrixLayout): Mat4;
    function translate(x: number, y: number, z: number, w: number, layout?: MatrixLayout): Mat4;
    function translate(vec: Vec4, layout?: MatrixLayout): Mat4;
    function rotateX(angle: number, layout?: MatrixLayout): Mat4;
    function rotateX(angle: number, layout?: MatrixLayout): Mat4;
    function rotateY(angle: number, layout?: MatrixLayout): Mat4;
    function rotateY(angle: number, layout?: MatrixLayout): Mat4;
    function rotateZ(angle: number, layout?: MatrixLayout): Mat4;
    function rotateZ(angle: number, layout?: MatrixLayout): Mat4;
    function rotate(angleX: number, angleY: number, angleZ: number, layout?: MatrixLayout): Mat4;
    function rotate(angleX: number, angleY: number, angleZ: number, layout?: MatrixLayout): Mat4;
    function rotate(angleXYZ: Vec3, layout?: MatrixLayout): Mat4;
    function rotate(angle: number, axis: Vec3, layout?: MatrixLayout): Mat4;
    function rotate(angle: number, axis: Vec3, layout?: MatrixLayout): Mat4;
    function rotate(cosAngle: number, sinAngle: number, axis: Vec3, layout?: MatrixLayout): Mat4;
    function rotate(cosAngle: number, sinAngle: number, axis: Vec3, layout?: MatrixLayout): Mat4;
    function rotate(v1: Vec3, v2: Vec3, layout?: MatrixLayout): Mat4;
    function viewRH(eye: Vec3, view: Vec3, up: Vec3, layout?: MatrixLayout): Mat4;
    function orthoRH(w: number, h: number, zNear: number, zFar: number, layout?: MatrixLayout): Mat4;
    function orthoRH(w: number, h: number, zNear: number, zFar: number, layout?: MatrixLayout): Mat4;
    function perspRH(fov: number, aspect: number, zNear: number, zFar: number, layout?: MatrixLayout): Mat4;
    function perspRH(fov: number, aspect: number, zNear: number, zFar: number, layout?: MatrixLayout): Mat4;
    function perspRHSymmetricZ(fov: number, aspect: number, zNear: number, zFar: number, layout?: MatrixLayout): Mat4;
    function perspRHSymmetricZ(fov: number, aspect: number, zNear: number, zFar: number, layout?: MatrixLayout): Mat4;

}
export function numArrayOfWithDouble(elements: Float64Array): Float32Array;
export function numArrayOfWithFloat(elements: Float32Array): Float32Array;
export function numArrayOfWithInt(elements: Int32Array): Float32Array;
export const PIf: number;
export const PIn: number;
export const radianPerDegree: number;
export const degreePerRadian: number;
export class Quaternion extends Vector {
    private constructor();
    readonly r: number;
    readonly i: number;
    readonly j: number;
    readonly k: number;
    readonly ijk: Vec3;
    readonly xyzw: Vec4;
    readonly mat3RowMajor: Mat3;
    readonly mat3ColumnMajor: Mat3;
    readonly mat4RowMajor: Mat4;
    readonly mat4ColumnMajor: Mat4;
    withR(r: number): Quaternion;
    withI(i: number): Quaternion;
    withJ(j: number): Quaternion;
    withK(k: number): Quaternion;
    mul(rhs: Quaternion): Quaternion;
    mul(rhs: Mat3): Mat3;
    mul(rhs: Mat4): Mat4;
    times(rhs: Quaternion): Quaternion;
    /**
     * Rotates the given vector by this quaternion
     * @param rhs vector to be rotated
     * @return new [Vec3] instance with the rotated vector
     */
    mul(rhs: Vec3): Vec3;
    inverse(): Quaternion;
    log(): Quaternion;
    exp(): Quaternion;
    /**
     * Returns the rotation angle and axis as a Pair(angle, axis)
     * @return new Pair<Number, Vec3> instance
     */
    toRotation(): kotlin.Pair<number, Vec3>;
    /**
     * Returns the euler angles in radians as a Vec3
     * @return new Vec3 instance
     */
    toEuler(): Vec3;
    /**
     * Spherical interpolation between this ([t] == 0) and the given quaternion [q] ([t] == 1)
     * @param q the other quaternion
     * @param t interpolation parameter in interval `[0;1]`
     * @return new Quaternion instance
     */
    slerp(q: Quaternion, t: number): Quaternion;
    /**
     * Spline spherical interpolation between the i-th (this, [t] == 0) and (i+1)-th ([q2], [t] == 1) of a series of quaternions
     * with this quaternion being the i-th, the first given the (i-1)-th, the second given being the (i+1)-ths and the last (i+2)-th
     * @param q1 (i-1)-th quaternion
     * @param q2 i+1-th quaternion
     * @param q3 i+2-th quaternion
     * @param t interpolation parameter in interval `[0;1]`
     * @return new Quaternion instance
     */
    spline(q1: Quaternion, q2: Quaternion, q3: Quaternion, t: number): Quaternion;
    toString(): string;
    /**
     * Creates a 3x3 transformation matrix equivalent to rotation defined by this quaternion
     *
     * @return new Mat3 instance
     */
    toMat3(this: Quaternion, layout?: MatrixLayout): Mat3;
    /**
     * Creates a 4x4 transformation matrix equivalent to rotation defined by this quaternion
     *
     * @return new Mat4 instance
     */
    toMat4(this: Quaternion, layout?: MatrixLayout): Mat4;
}
export namespace Quaternion {
    function create(r: number, i: number, j: number, k: number): Quaternion;
    function createWithDouble(r: number, i: number, j: number, k: number): Quaternion;
    function create(r: number, i: number, j: number, k: number): Quaternion;
    function createWithFloat(r: number, i: number, j: number, k: number): Quaternion;
    function create(vec: Vec4): Quaternion;
    function createWithVec4(vec: Vec4): Quaternion;
    function create(): Quaternion;
    function create4(): Quaternion;
    const identity: Quaternion;
    /**
     * Creates a new quaternion equivalent to the rotation given by
     * a 4x4 transformation matrix
     * @param mat 4x4 matrix
     * @return new Quaternion instance
     */
    function fromMatrix(mat: Mat4): Quaternion;
    /**
     * Creates a new quaternion equivalent to a right-handed rotation about axis given by
     * normalized vector coordinates x, y, z
     * @param angle rotation angle in radians
     * @param x x vector coordinate
     * @param y y vector coordinate
     * @param z z vector coordinate
     * @return new Quaternion instance
     */
    function fromRotation(angle: number, x: number, y: number, z: number): Quaternion;
    /**
     * Creates a new quaternion equivalent to a right-handed rotation about axis given by a vector
     * @param angle rotation angle in radians
     * @param vec axis vector, expected to be normalized
     * @return new Quaternion instance
     */
    function fromRotation(angle: number, vec: Vec3): Quaternion;
    /**
     * Creates a new quaternion equivalent to the right-handed rotations given by
     * the Euler angles about x, y and z axes chained in reversed order
     * @param x rotation angle about x-axis, in radians
     * @param y rotation angle about y-axis, in radians
     * @param z rotation angle about z-axis, in radians
     * @return new Quaternion instance
     */
    function fromEuler(x: number, y: number, z: number): Quaternion;
    /**
     * Creates a new quaternion equivalent to the right-handed rotations given by
     * the Euler angles about x, y and z axes chained in reversed order
     * @param vec rotation angles about respective angles
     * @return new Quaternion instance
     */
    function fromEuler(vec: Vec3): Quaternion;

}
/**
 * Stabilization result that contains new stabilizer state and the stabilized data.
 */
export class StabilizerResult<T> {
    constructor(newStabilizer: Stabilizer<T>, data: T);
    readonly newStabilizer: Stabilizer<T>;
    readonly data: T;
    component1(): Stabilizer<T>;
    component2(): T;
}
export interface Stabilizer<T> {
    stabilize(newValue: T): StabilizerResult<T>;
}
export class SNRStabilizer<T> implements Stabilizer<T> {
    private constructor();
    stabilize(newValue: T): StabilizerResult<T>;
}
export namespace SNRStabilizer {
    function create<T>(smoothing: number, snr: number, signalSmoothingRatio?: number): SNRStabilizer<T>;
    function createWithSnr<T>(smoothing: number, snr: number, signalSmoothingRatio?: number): SNRStabilizer<T>;

}
export class SNRStabilizerVec<T> implements Stabilizer<T> {
    private constructor();
    stabilize(newValue: T): StabilizerResult<T>;
}
export namespace SNRStabilizerVec {
    function create<T>(smoothing: T, snr: T, signalSmoothingRatio?: number): SNRStabilizerVec<T>;
    function createWithSnr<T>(smoothing: T, snr: T, signalSmoothingRatio?: number): SNRStabilizerVec<T>;

}
export class NoiseDetectStabilizer<T> implements Stabilizer<T> {
    private constructor();
    stabilize(newValue: T): StabilizerResult<T>;
}
export class ChainedStabilizer<T> implements Stabilizer<T> {
    constructor(stabilizers: (Array<Stabilizer<T>> | kotlin.collections.List<Stabilizer<T>>));
    stabilize(newValue: T): StabilizerResult<T>;
}
export class AveragedStabilizer<T> implements Stabilizer<T> {
    constructor(stabilizers: (Array<Stabilizer<T>> | kotlin.collections.List<Stabilizer<T>>));
    stabilize(newValue: T): StabilizerResult<T>;
}
export class DummyStabilizer<T> implements Stabilizer<T> {
    constructor();
    stabilize(newValue: T): StabilizerResult<T>;
}
export class ThresholdStabilizer<T> implements Stabilizer<T> {
    constructor(below: Stabilizer<T>, above: Stabilizer<T>, threshold: number);
    stabilize(newValue: T): StabilizerResult<T>;
}
export interface Vec {
    plus(rhs: T): T;
    minus(rhs: T): T;
    plus(rhs: number): T;
    plus(rhs: number): T;
    minus(rhs: number): T;
    minus(rhs: number): T;
    times(rhs: T): T;
    times(rhs: number): T;
    times(rhs: number): T;
    div(rhs: T): T;
    div(rhs: number): T;
    div(rhs: number): T;
    unaryMinus(): T;
    invDiv(rhs: number): T;
    invDiv(rhs: number): T;
    sum(): number;
    length(): number;
    lengthSquared(): number;
    min(): number;
    max(): number;
    min(rhs: T): T;
    max(rhs: T): T;
    dot(rhs: T): number;
    normalized(): Nullable<T>;
    normalized(_default: T): T;
    elementWise(rhs: T, operation: Vec.BinaryOperator): T;
    elementWise(operation: Vec.UnaryOperator): T;
    zero(): T;
    one(): T;
    floatArray(): Float32Array;
}
export namespace Vec {
    interface UnaryOperator {
        invoke(a: number): number;
    }
    interface BinaryOperator {
        invoke(a: number, b: number): number;
    }
}
export function min<T>(a: T, b: T): T;
export function max<T>(a: T, b: T): T;
export abstract class Vector implements Vec {
    constructor(elements: Float32Array);
    plus(rhs: T): T;
    minus(rhs: T): T;
    plus(rhs: number): T;
    plus(rhs: number): T;
    minus(rhs: number): T;
    minus(rhs: number): T;
    times(rhs: T): T;
    times(rhs: number): T;
    times(rhs: number): T;
    div(rhs: T): T;
    div(rhs: number): T;
    div(rhs: number): T;
    unaryMinus(): T;
    invDiv(rhs: number): T;
    invDiv(rhs: number): T;
    sum(): number;
    length(): number;
    lengthSquared(): number;
    min(): number;
    max(): number;
    min(rhs: T): T;
    max(rhs: T): T;
    dot(rhs: T): number;
    normalized(): Nullable<T>;
    normalized(_default: T): T;
    elementWise(rhs: T, operation: Vec.BinaryOperator): T;
    elementWise(operation: Vec.UnaryOperator): T;
    zero(): T;
    one(): T;
    floatArray(): Float32Array;
    asList(): kotlin.collections.List<number>;
    toString(): string;
}
export class Vec1 extends Vector {
    private constructor();
    readonly x: number;
    readonly xy: Vec2;
    readonly xyz: Vec3;
    readonly xyzw: Vec4;
    withX(x: number): Vec1;
    withY(y: number): Vec2;
}
export namespace Vec1 {
    function create(x: number): Vec1;
    function createWithDouble(x: number): Vec1;
    function create(x: number): Vec1;
    function createWithFloat(x: number): Vec1;
    function create(x: number): Vec1;
    function createWithInt(x: number): Vec1;
    function create(): Vec1;
    function create4(): Vec1;
    const xAxis: Vec1;
    const zero: Vec1;
    const one: Vec1;

}
export class Vec2 extends Vector {
    private constructor();
    readonly x: number;
    readonly y: number;
    readonly xy: Vec2;
    readonly xyz: Vec3;
    readonly xyzw: Vec4;
    withX(x: number): Vec2;
    withY(y: number): Vec2;
    withZ(z: number): Vec3;
    mul(mat: Mat2): Vec2;
}
export namespace Vec2 {
    function create(x: number, y: number): Vec2;
    function createWithDouble(x: number, y: number): Vec2;
    function create(x: number, y: number): Vec2;
    function createWithFloat(x: number, y: number): Vec2;
    function create(x: number, y: number): Vec2;
    function createWithInt(x: number, y: number): Vec2;
    function create(): Vec2;
    function create4(): Vec2;
    const xAxis: Vec2;
    const yAxis: Vec2;
    const zero: Vec2;
    const one: Vec2;

}
export class Vec3 extends Vector {
    private constructor();
    readonly x: number;
    readonly y: number;
    readonly z: number;
    readonly xy: Vec2;
    readonly xyz: Vec3;
    readonly xyzw: Vec4;
    readonly rgb: Col;
    withX(x: number): Vec3;
    withY(y: number): Vec3;
    withZ(z: number): Vec3;
    withW(w: number): Vec4;
    length(): number;
    lengthSquared(): number;
    cross(rhs: Vec3): Vec3;
    mul(mat: Mat3): Vec3;
    /**
     * Rotates this vector by the given quaternion
     * @param rhs quaternion specifying the rotation
     * @receiver vector to be rotated
     * @return new [Vec3] instance with the rotated vector
     */
    mul(this: Vec3, rhs: Quaternion): Vec3;
}
export namespace Vec3 {
    function create(x: number, y: number, z: number): Vec3;
    function createWithDouble(x: number, y: number, z: number): Vec3;
    function create(x: number, y: number, z: number): Vec3;
    function createWithFloat(x: number, y: number, z: number): Vec3;
    function create(x: number, y: number, z: number): Vec3;
    function createWithInt(x: number, y: number, z: number): Vec3;
    function create(xy: Vec2, z: number): Vec3;
    function createWithVec2(xy: Vec2, z: number): Vec3;
    function create(xyz: number): Vec3;
    function createWithNum(xyz: number): Vec3;
    function create(): Vec3;
    function create6(): Vec3;
    const xAxis: Vec3;
    const yAxis: Vec3;
    const zAxis: Vec3;
    const zero: Vec3;
    const one: Vec3;

}
export class Vec4 extends Vector {
    private constructor();
    readonly x: number;
    readonly y: number;
    readonly z: number;
    readonly w: number;
    readonly xy: Vec2;
    readonly xyz: Vec3;
    readonly xyzw: Vec4;
    readonly rgb: Col;
    readonly rgba: Col;
    withX(x: number): Vec4;
    withY(y: number): Vec4;
    withZ(z: number): Vec4;
    withW(w: number): Vec4;
    dehomog(): Nullable<Vec3>;
    length(): number;
    mul(mat: Mat4): Vec4;
}
export namespace Vec4 {
    function create(x: number, y: number, z: number, w: number): Vec4;
    function createWithDouble(x: number, y: number, z: number, w: number): Vec4;
    function create(x: number, y: number, z: number, w: number): Vec4;
    function createWithFloat(x: number, y: number, z: number, w: number): Vec4;
    function create(x: number, y: number, z: number, w: number): Vec4;
    function createWithInt(x: number, y: number, z: number, w: number): Vec4;
    function create(xy: Vec2, z: number): Vec4;
    function createWithVec2AndNum(xy: Vec2, z: number): Vec4;
    function create(xy: Vec2, z: number, w: number): Vec4;
    function createWithVec2AndNumAndNum(xy: Vec2, z: number, w: number): Vec4;
    function create(xy: Vec2, zw: Vec2): Vec4;
    function createWithVec2AndVec2(xy: Vec2, zw: Vec2): Vec4;
    function create(xyz: Vec3): Vec4;
    function createWithVec3(xyz: Vec3): Vec4;
    function create(xyz: Vec3, w: number): Vec4;
    function createWithVec3AndNum(xyz: Vec3, w: number): Vec4;
    function create(): Vec4;
    function create9(): Vec4;
    const xAxis: Vec4;
    const yAxis: Vec4;
    const zAxis: Vec4;
    const wAxis: Vec4;
    const zero: Vec4;
    const one: Vec4;

}
/**
 * @deprecated Use only for debugging memory issues; replace with ``
 */
export function printRemainingObjects(): void;
/**
 * Persistent time measurement. Use [Timer.start] to create a new instance with start time at the current time and zero elapsed time
 * Use [tick] to get a new instance with start time at the current time and [elapsed] the time in seconds elapsed since [Timer.start] or the previous [tick]
 *
 * Example:
 *
 * `val timer = Timer.start()`
 *
 * ...
 *
 * `var timing = timer.tick()`
 *
 * ...
 *
 * `timing = timing.tick()`
 *
 * `println(timer.tick().elapsed)  // time since start`
 *
 * `println(timing.elapsed)  // time between the two ticks`
 */
export class Timer {
    private constructor();
    readonly elapsed: number;
    tick(): Timer;
}
export namespace Timer {
    function start(): Timer;

}
export class FPS {
    constructor(interval: number);
    tick(consumer: Nullable<(p0: number) => void>): number;
}
export interface TickerMapper<T> {
    invoke(value: T, tickCount: number, elapsed: number): T;
}
export class Ticker {
    constructor(interval: number);
    tick<T>(value: T, mapper: TickerMapper<T>): T;
    tick<T>(value: T, mapper: (p0: T) => T): T;
}
export namespace _js {
    interface JSIteratorResult<T> {
        readonly done: boolean;
        readonly value: Nullable<T>;
    }
}
export class DispatchQueue {
    constructor(name: string);
    readonly name: string;
    /**
     * Queues a runnable on this queue, guaranteed to run after this tick.
     */
    queue(fn: () => void): void;
    runOrQueue(fn: () => void): void;
    /**
     * Checks whether this queue schedules runnables on the current thread (if it can be determined)
     */
    targetsThisThread(): Nullable<boolean>;
}
export namespace DispatchQueue {
    /**
     * Main/UI queue. Use to queue UI tasks or tasks that must be run on the main thread.
     */
    const main: DispatchQueue;
    /**
     * Queue assigned to the current thread (if any)
     */
    const current: Nullable<DispatchQueue>;
    /**
     * Queue for dispatching asynchronous work, usually backed by a thread pool
     */
    const globalAsync: DispatchQueue;

}
export class PeriodicExecutor {
    constructor(intervalSeconds: number, fn: () => void);
    cancel(): void;
}
export abstract class Image {
    abstract readonly width: number;
    abstract readonly height: number;
}
export namespace Image {
    class RawInt extends Image {
        constructor(width: number, height: number, data: Int32Array);
        readonly width: number;
        readonly height: number;
        readonly data: Int32Array;
    }
    class RawFloat extends Image {
        constructor(width: number, height: number, data: Float32Array, pixelComponents: PixelComponentsType);
        readonly width: number;
        readonly height: number;
        readonly data: Float32Array;
        readonly pixelComponents: PixelComponentsType;
    }
}
export abstract class PlatformImage extends Image {
    readonly width: number;
    readonly height: number;
}
export class BitmapImage extends PlatformImage {
    constructor(bitmap: ImageBitmap);
    readonly bitmap: ImageBitmap;
}
export class HTMLVideoImage extends PlatformImage {
    constructor(video: HTMLVideoElement);
    readonly video: HTMLVideoElement;
}
export class HTMLImage extends PlatformImage {
    constructor(image: HTMLImageElement);
    readonly image: HTMLImageElement;
}
export class HTMLCanvasImage extends PlatformImage {
    constructor(canvas: HTMLCanvasElement);
    readonly canvas: HTMLCanvasElement;
}
export class ImageDataImage extends PlatformImage {
    constructor(data: ImageData);
    readonly data: ImageData;
}
export abstract class ImageList {
    abstract readonly images: kotlin.collections.List<Image>;
}
export namespace ImageList {
    class RawInt extends ImageList {
        private constructor();
        readonly images: kotlin.collections.List<Image.RawInt>;
    }
    namespace RawInt {
        function create(width: number, height: number, data: (Array<Int32Array> | kotlin.collections.List<Int32Array>)): ImageList.RawInt;
        function createWithWidth(width: number, height: number, data: (Array<Int32Array> | kotlin.collections.List<Int32Array>)): ImageList.RawInt;

    }
    class RawFloat extends ImageList {
        private constructor();
        readonly images: kotlin.collections.List<Image.RawFloat>;
    }
    namespace RawFloat {
        function create(width: number, height: number, data: (Array<Float32Array> | kotlin.collections.List<Float32Array>), pixelComponents: PixelComponentsType): ImageList.RawFloat;
        function createWithWidth(width: number, height: number, data: (Array<Float32Array> | kotlin.collections.List<Float32Array>), pixelComponents: PixelComponentsType): ImageList.RawFloat;

    }
}
export abstract class ImageCube {
}
export namespace ImageCube {
    class RawInt extends ImageCube {
        private constructor();
        readonly xPos: Image.RawInt;
        readonly xNeg: Image.RawInt;
        readonly yPos: Image.RawInt;
        readonly yNeg: Image.RawInt;
        readonly zPos: Image.RawInt;
        readonly zNeg: Image.RawInt;
    }
    namespace RawInt {
        function create(size: number, xPos: Int32Array, xNeg: Int32Array, yPos: Int32Array, yNeg: Int32Array, zPos: Int32Array, zNeg: Int32Array): ImageCube.RawInt;
        function createWithSize(size: number, xPos: Int32Array, xNeg: Int32Array, yPos: Int32Array, yNeg: Int32Array, zPos: Int32Array, zNeg: Int32Array): ImageCube.RawInt;

    }
    class RawFloat extends ImageCube {
        private constructor();
        readonly xPos: Image.RawFloat;
        readonly xNeg: Image.RawFloat;
        readonly yPos: Image.RawFloat;
        readonly yNeg: Image.RawFloat;
        readonly zPos: Image.RawFloat;
        readonly zNeg: Image.RawFloat;
    }
    namespace RawFloat {
        function create(size: number, xPos: Float32Array, xNeg: Float32Array, yPos: Float32Array, yNeg: Float32Array, zPos: Float32Array, zNeg: Float32Array, pixelComponents: PixelComponentsType): ImageCube.RawFloat;
        function createWithSize(size: number, xPos: Float32Array, xNeg: Float32Array, yPos: Float32Array, yNeg: Float32Array, zPos: Float32Array, zNeg: Float32Array, pixelComponents: PixelComponentsType): ImageCube.RawFloat;

    }
}
export function imageFromBytes(bytes: Int8Array): Future<Try<Image>>;
export class ApplicationContext {
    constructor(resourcePath: string);
    readonly resourcePath: string;
}
export class ResourceFileSystem implements FileSystem {
    constructor(context: ApplicationContext, root?: Path);
    readonly root: Path;
    fileAt(path: Path): Future<Try<File>>;
    watch(path: Path): Observable<Try<File>>;
    exists(path: Path): Future<boolean>;
    lastModified(path: Path): Future<Try<kotlin.Long>>;
    url(path: Path): Try<string>;
    subSystem(this: FileSystem, root: Path): FileSystem;
    indexed(this: FileSystem, indexReloadIntervalMs?: number): FileSystem;
    textAt(this: FileSystem, path: Path): Future<Try<string>>;
    processFiles<T>(this: FileSystem, paths: (Array<string> | kotlin.collections.List<string>), filesInParallel?: number, processFile: (p0: number, p1: File) => Future<Try<T>>): Future<Try<kotlinx.collections.immutable.PersistentList<T>>>;
    readAllTexts(this: FileSystem, paths: (Array<string> | kotlin.collections.List<string>), filesInParallel?: number, onFileLoaded?: Nullable<(p0: number, p1: string) => void>): Future<Try<kotlinx.collections.immutable.PersistentList<string>>>;
    watcher(this: FileSystem, watchFilter?: Nullable<(p0: string) => boolean>, errorSensitivity?: FileWatchErrorSensitivityType): FileSystemWatcher;
}
export namespace ResourceFileSystem {
    function create(context: ApplicationContext): ResourceFileSystem;
    function create(context: ApplicationContext, root: Path): ResourceFileSystem;

}
export class DeviceFileSystem implements WriteableFileSystem {
    constructor(root?: Path);
    readonly root: Path;
    fileAt(path: Path): Future<Try<File>>;
    watch(path: Path): Observable<Try<File>>;
    exists(path: Path): Future<boolean>;
    lastModified(path: Path): Future<Try<kotlin.Long>>;
    url(path: Path): Try<string>;
    writeFile(path: Path, bytes: Int8Array, lastModified?: Nullable<kotlin.Long>): Future<Try<void>>;
    subSystem(this: WriteableFileSystem, root: Path): WriteableFileSystem;
    indexed(this: WriteableFileSystem, indexReloadIntervalMs?: number): WriteableFileSystem;
    textAt(this: FileSystem, path: Path): Future<Try<string>>;
    processFiles<T>(this: FileSystem, paths: (Array<string> | kotlin.collections.List<string>), filesInParallel?: number, processFile: (p0: number, p1: File) => Future<Try<T>>): Future<Try<kotlinx.collections.immutable.PersistentList<T>>>;
    readAllTexts(this: FileSystem, paths: (Array<string> | kotlin.collections.List<string>), filesInParallel?: number, onFileLoaded?: Nullable<(p0: number, p1: string) => void>): Future<Try<kotlinx.collections.immutable.PersistentList<string>>>;
    watcher(this: FileSystem, watchFilter?: Nullable<(p0: string) => boolean>, errorSensitivity?: FileWatchErrorSensitivityType): FileSystemWatcher;
}
export namespace DeviceFileSystem {
    function create(root: Path): DeviceFileSystem;

}
export class NetworkFileSystem implements FileSystem {
    constructor(serverUrl: string, disableCache?: boolean, root?: Path);
    readonly root: Path;
    fileAt(path: Path): Future<Try<File>>;
    watch(path: Path): Observable<Try<File>>;
    exists(path: Path): Future<boolean>;
    lastModified(path: Path): Future<Try<kotlin.Long>>;
    url(path: Path): Try<string>;
    subSystem(this: FileSystem, root: Path): FileSystem;
    indexed(this: FileSystem, indexReloadIntervalMs?: number): FileSystem;
    textAt(this: FileSystem, path: Path): Future<Try<string>>;
    processFiles<T>(this: FileSystem, paths: (Array<string> | kotlin.collections.List<string>), filesInParallel?: number, processFile: (p0: number, p1: File) => Future<Try<T>>): Future<Try<kotlinx.collections.immutable.PersistentList<T>>>;
    readAllTexts(this: FileSystem, paths: (Array<string> | kotlin.collections.List<string>), filesInParallel?: number, onFileLoaded?: Nullable<(p0: number, p1: string) => void>): Future<Try<kotlinx.collections.immutable.PersistentList<string>>>;
    watcher(this: FileSystem, watchFilter?: Nullable<(p0: string) => boolean>, errorSensitivity?: FileWatchErrorSensitivityType): FileSystemWatcher;
}
export namespace NetworkFileSystem {
    function create(serverUrl: string): NetworkFileSystem;
    function create(serverUrl: string, disableCache: boolean): NetworkFileSystem;
    function create(serverUrl: string, root: Path): NetworkFileSystem;
    function create(serverUrl: string, disableCache: boolean, root: Path): NetworkFileSystem;

}
export class WriteableNetworkFileSystem implements ExtendedFileSystem, WriteableFileSystem {
    constructor(serverUrl: string, disableCache?: boolean, root?: Path);
    readonly root: Path;
    fileAt(path: Path): Future<Try<File>>;
    watch(path: Path): Observable<Try<File>>;
    exists(path: Path): Future<boolean>;
    lastModified(path: Path): Future<Try<kotlin.Long>>;
    url(path: Path): Try<string>;
    writeFile(path: Path, bytes: Int8Array, lastModified?: Nullable<kotlin.Long>): Future<Try<void>>;
    glob(pathPattern: Path, recursive?: boolean, includeDirectories?: boolean, includeFiles?: boolean): Future<Try<kotlin.collections.List<string>>>;
    textAt(this: FileSystem, path: Path): Future<Try<string>>;
    processFiles<T>(this: FileSystem, paths: (Array<string> | kotlin.collections.List<string>), filesInParallel?: number, processFile: (p0: number, p1: File) => Future<Try<T>>): Future<Try<kotlinx.collections.immutable.PersistentList<T>>>;
    readAllTexts(this: FileSystem, paths: (Array<string> | kotlin.collections.List<string>), filesInParallel?: number, onFileLoaded?: Nullable<(p0: number, p1: string) => void>): Future<Try<kotlinx.collections.immutable.PersistentList<string>>>;
    watcher(this: FileSystem, watchFilter?: Nullable<(p0: string) => boolean>, errorSensitivity?: FileWatchErrorSensitivityType): FileSystemWatcher;
    subSystem(this: WriteableFileSystem, root: Path): WriteableFileSystem;
    indexed(this: WriteableFileSystem, indexReloadIntervalMs?: number): WriteableFileSystem;
}
export namespace WriteableNetworkFileSystem {
    function create(serverUrl: string): WriteableNetworkFileSystem;
    function create(serverUrl: string, disableCache: boolean): WriteableNetworkFileSystem;
    function create(serverUrl: string, root: Path): WriteableNetworkFileSystem;
    function create(serverUrl: string, disableCache: boolean, root: Path): WriteableNetworkFileSystem;

}
export function cacheDir(context: ApplicationContext, subDir: Nullable<Path>): Path;
export function developmentResourceDirs(): Array<string>;
export function toKotlinMap<V>(obj: any): kotlin.collections.Map<string, V>;
export function toKotlinList<V>(obj: any): kotlin.collections.List<V>;
export abstract class DebugMemoryTag {
    constructor(extraName?: Nullable<string>);
}
export function getTimeMillis(): kotlin.Long;
export class WeakReference<T> {
    constructor(referred: T);
    get(): Nullable<T>;
}
/**
 * Contains raw results of face tracker output.
 */
export class FaceTrackerResult {
    constructor(blendshapes: (Map<string, number> | PlainObjectMap<number> | kotlin.collections.Map<string, number>), normalizedImagePosition: Vec2, normalizedImageScale: number, rotationQuaternion: Quaternion, confidence: number, inputImageSize: Vec2, faceRectangle: Rect, positionInCrop: Vec2, scaleInCrop: number, debug?: Nullable<any>);
    /**
     * Blend-shape coefficients for individual expressions (such as mouthPucker, mouthSmile_L, ...)
     */
    blendshapes: kotlin.collections.Map<string, number>;
    /**
     * Normalized (0.0-1.0) position of face center within the input image
     */
    readonly normalizedImagePosition: Vec2;
    /**
     * Normalized scale (1.0 = face fills the whole image) of the face within the input image
     */
    readonly normalizedImageScale: number;
    /**
     * Rotation of the head expressed as a quaternion. Zero rotation means a face looking straight at the camera.
     */
    readonly rotationQuaternion: Quaternion;
    /**
     * Confidence of the tracker about the provided result
     */
    readonly confidence: number;
    /**
     * Original input image dimensions in pixels
     */
    readonly inputImageSize: Vec2;
    /**
     * Rectangle around the detected face, coordinates are in pixels.
     * Image origin is in bottom left corner, with y axis going up.
     * You may need to flip the rectangle vertically (see [Rect.flipY]) to position it on
     * an image with a top-left origin.
     */
    readonly faceRectangle: Rect;
    readonly debug: Nullable<any>;
    hasFace(): boolean;
    interpolate(other: FaceTrackerResult, t: number): FaceTrackerResult;
    /**
     * @deprecated The standalone serialization functions are not future-proof, use the FaceTrackerSerializer and FaceTrackerDeserializer objects instead, they allow exchanging the serialization format too; replace with `FaceTrackerResultSerializer().serialize(this, customData)`
     */
    serialize(this: FaceTrackerResult, customData?: Nullable<Int8Array>): Int8Array;
    /**
     * Blend-shape coefficients for individual expressions (such as mouthPucker, mouthSmile_L, ...)
     */
    component1(): kotlin.collections.Map<string, number>;
    /**
     * Normalized (0.0-1.0) position of face center within the input image
     */
    component2(): Vec2;
    /**
     * Normalized scale (1.0 = face fills the whole image) of the face within the input image
     */
    component3(): number;
    /**
     * Rotation of the head expressed as a quaternion. Zero rotation means a face looking straight at the camera.
     */
    component4(): Quaternion;
    /**
     * Confidence of the tracker about the provided result
     */
    component5(): number;
    /**
     * Original input image dimensions in pixels
     */
    component6(): Vec2;
    /**
     * Rectangle around the detected face, coordinates are in pixels.
     * Image origin is in bottom left corner, with y axis going up.
     * You may need to flip the rectangle vertically (see [Rect.flipY]) to position it on
     * an image with a top-left origin.
     */
    component7(): Rect;
    component10(): Nullable<any>;
    /**
     * Contains raw results of face tracker output.
     */
    copy(blendshapes?: (Map<string, number> | PlainObjectMap<number> | kotlin.collections.Map<string, number>), normalizedImagePosition?: Vec2, normalizedImageScale?: number, rotationQuaternion?: Quaternion, confidence?: number, inputImageSize?: Vec2, faceRectangle?: Rect, positionInCrop?: Vec2, scaleInCrop?: number, debug?: Nullable<any>): FaceTrackerResult;
    /**
     * Contains raw results of face tracker output.
     */
    toString(): string;
    /**
     * Contains raw results of face tracker output.
     */
    hashCode(): number;
    /**
     * Contains raw results of face tracker output.
     */
    equals(other: Nullable<any>): boolean;
}
export namespace FaceTrackerResult {
    const EMPTY: FaceTrackerResult;

}
export class FaceTrackerWithResult {
    constructor(tracker: PersistentFaceTracker, result: Nullable<FaceTrackerResult>);
    readonly tracker: PersistentFaceTracker;
    readonly result: Nullable<FaceTrackerResult>;
    component1(): PersistentFaceTracker;
    component2(): Nullable<FaceTrackerResult>;
    copy(tracker?: PersistentFaceTracker, result?: Nullable<FaceTrackerResult>): FaceTrackerWithResult;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export interface PersistentFaceTracker {
    readonly version: string;
    readonly blendshapeNames: kotlin.collections.List<string>;
    track(image: TrackerImage): FaceTrackerWithResult;
}
/**
 * Contains advanced option fields for face tracker setup. Can be used to tweak
 * all the details of video post processing, we recommend using defaults for production use.
 */
export class AdvancedFaceTrackerOptions {
    constructor(modelName?: Nullable<string>, stabilizerImagePosition?: Nullable<Stabilizer<Vec2>>, stabilizerImageScale?: Nullable<Stabilizer<Vec1>>, stabilizerRotation?: Nullable<Stabilizer<Quaternion>>, blendshapeProcessor?: Nullable<BlendshapeProcessor>, feedbackDetectorScale?: Nullable<number>, feedbackDetectorOffset?: Nullable<number>);
    readonly modelName: Nullable<string>;
    readonly stabilizerImagePosition: Nullable<Stabilizer<Vec2>>;
    readonly stabilizerImageScale: Nullable<Stabilizer<Vec1>>;
    readonly stabilizerRotation: Nullable<Stabilizer<Quaternion>>;
    readonly blendshapeProcessor: Nullable<BlendshapeProcessor>;
    readonly feedbackDetectorScale: Nullable<number>;
    readonly feedbackDetectorOffset: Nullable<number>;
}
export class FaceTracker {
    private constructor();
    /**
     * Perform expression tracking on a new input image.
     */
    track(image: TrackerImage): Nullable<FaceTrackerResult>;
    /**
     * Latest tracking result this tracker returned from track().
     */
    readonly lastResult: Nullable<FaceTrackerResult>;
    /**
     * Names of all the expressions/blendshapes (morph targets) this tracker provides.
     */
    readonly blendshapeNames: kotlin.collections.List<string>;
    track(this: FaceTracker, video: Nullable<HTMLVideoElement>, flipHorizontally?: boolean): Nullable<FaceTrackerResult>;
    track(this: FaceTracker, bitmap: Nullable<ImageBitmap>, flipHorizontally?: boolean): Nullable<FaceTrackerResult>;
    track(this: FaceTracker, canvas: Nullable<HTMLCanvasElement>, flipHorizontally?: boolean): Nullable<FaceTrackerResult>;
    track(this: FaceTracker, image: Nullable<HTMLImageElement>, flipHorizontally?: boolean): Nullable<FaceTrackerResult>;
}
export namespace FaceTracker {
    /**
     * Create a face tracker for tracking facial expressions in a video feed.
     * Video tracker keeps an internal state to produce smooth results for
     * consecutive video frames. If you want a stateless tracker that always
     * outputs the same values for the given input image, use createImageTracker instead.
     */
    function createVideoTracker(fileSystem: FileSystem, context: TrackerGPUContext): Future<Try<FaceTracker>>;
    /**
     * Create a face tracker for tracking facial expressions in a video feed.
     * Video tracker keeps an internal state to produce smooth results for
     * consecutive video frames. If you want a stateless tracker that always
     * outputs the same values for the given input image, use createImageTracker instead.
     * The options parameter allows you to tune all the ins and outs of the video tracker, aimed at power users.
     */
    function createVideoTracker(fileSystem: FileSystem, context: TrackerGPUContext, options: AdvancedFaceTrackerOptions): Future<Try<FaceTracker>>;
    /**
     * Create a face tracker for tracking facial expressions in a single image.
     * Does not perform any inter-frame smoothing, always outputs the same values
     * for the given input image.
     */
    function createImageTracker(fileSystem: FileSystem, context: TrackerGPUContext): Future<Try<FaceTracker>>;
    function createVideoTracker(fs: FileSystem): Future<Try<FaceTracker>>;
    function createImageTracker(fs: FileSystem): Future<Try<FaceTracker>>;

}
export interface FaceTrackerFactory {
    create(fileSystem: FileSystem, context: TrackerGPUContext): Future<Try<PersistentFaceTracker>>;
}
/**
 * Face Tracker tracking result reprojector from image to scene.
 * Implementations with fixed z or fixed scale
 */
export interface FaceTrackerReprojector {
    reproject(trackerResult: FaceTrackerResult): FaceTrackerReprojector.Result;
    reproject(normalizedImagePosition: Vec2, normalizedImageScale: number): FaceTrackerReprojector.Result;
}
export namespace FaceTrackerReprojector {
    class Result {
        constructor(spatialPosition: Vec3, spatialScale: number);
        readonly spatialPosition: Vec3;
        readonly spatialScale: number;
        component1(): Vec3;
        component2(): number;
        copy(spatialPosition?: Vec3, spatialScale?: number): FaceTrackerReprojector.Result;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
}
export class FaceTrackerReprojectors {
    constructor();
}
export namespace FaceTrackerReprojectors {
    function fixedZReprojector(fovDegrees: number, widthToHeight: number, avatarWidth: number, z: number): FaceTrackerReprojector;
    function fixedZReprojectorWithAspectRatio(fovDegrees: number, renderingWidth: number, renderingHeight: number, imageWidth: number, imageHeight: number, fillMode: FillModeType, avatarWidth: number, z: number): FaceTrackerReprojector;
    function fixedScaleReprojector(fovDegrees: number, widthToHeight: number, avatarWidth: number, scale: number): FaceTrackerReprojector;
    function fixedScaleReprojectorWithAspectRatio(fovDegrees: number, renderingWidth: number, renderingHeight: number, imageWidth: number, imageHeight: number, fillMode: FillModeType, avatarWidth: number, scale: number): FaceTrackerReprojector;

}
/**
 * A [FaceTrackerResult] serializer that also holds and provides serialization format information required during [FaceTrackerResultDeserializer] initialization
 */
export class FaceTrackerResultSerializer {
    private constructor();
    /**
     * Information that describes the serialization format, required during [FaceTrackerResultDeserializer] initialization. It can therefore be exchanged only once between devices.
     */
    readonly serializationFormat: Int8Array;
    serialize(trackerResult: FaceTrackerResult, userData?: Nullable<Int8Array>): Int8Array;
}
export namespace FaceTrackerResultSerializer {
    function create(): FaceTrackerResultSerializer;

}
/**
 * Represents a deserialized [FaceTrackerResult] with an optional field containing user data
 * passed in originally to [FaceTrackerResultSerializer.serialize].
 */
export class DeserializedResult {
    constructor(trackerResult: FaceTrackerResult, userData: Nullable<Int8Array>);
    /**
     * Deserialized [FaceTrackerResult]
     */
    readonly trackerResult: FaceTrackerResult;
    /**
     * Deserialized user data passed to [FaceTrackerResult.serialize]
     */
    readonly userData: Nullable<Int8Array>;
    component1(): FaceTrackerResult;
    component2(): Nullable<Int8Array>;
    /**
     * @deprecated Renamed to trackerResult; replace with `trackerResult`
     */
    readonly first: FaceTrackerResult;
    /**
     * @deprecated Renamed to userData; replace with `userData`
     */
    readonly second: Nullable<Int8Array>;
}
/**
 * A [FaceTrackerResult] deserializer initialized with serialization format information originally provided by [FaceTrackerResultSerializer]
 */
export class FaceTrackerResultDeserializer {
    private constructor();
    deserialize(data: Int8Array): DeserializedResult;
}
export namespace FaceTrackerResultDeserializer {
    /**
     * Pass the [serializationFormat] provided by a [FaceTrackerResultSerializer] running on the other device
     */
    function create(serializationFormat: Int8Array): FaceTrackerResultDeserializer;

}
/**
 * @deprecated The standalone serialization functions are not future-proof, use the FaceTrackerSerializer and FaceTrackerDeserializer objects instead, they allow exchanging the serialization format too; replace with `FaceTrackerResultDeserializer(serializationFormat).serialize(this, customData)`
 */
export function deserializeResult(data: Int8Array): DeserializedResult;
export interface BlendshapeProcessor {
    process(blendshapes: (Map<string, number> | PlainObjectMap<number> | kotlin.collections.Map<string, number>)): kotlin.Pair<BlendshapeProcessor, kotlin.collections.Map<string, number>>;
}
export class BPSymmetriseMax implements BlendshapeProcessor {
    constructor(bsToSymmetrise: (Array<kotlin.Pair<string, string>> | kotlin.collections.Iterable<kotlin.Pair<string, string>>), power?: number);
    process(blendshapes: (Map<string, number> | PlainObjectMap<number> | kotlin.collections.Map<string, number>)): kotlin.Pair<BlendshapeProcessor, kotlin.collections.Map<string, number>>;
}
export class BPSymmetriseSCurve implements BlendshapeProcessor {
    constructor(bsToSymmetrise: (Array<kotlin.Pair<string, string>> | kotlin.collections.Iterable<kotlin.Pair<string, string>>));
    process(blendshapes: (Map<string, number> | PlainObjectMap<number> | kotlin.collections.Map<string, number>)): kotlin.Pair<BlendshapeProcessor, kotlin.collections.Map<string, number>>;
}
export class BPSymmetriseDiff implements BlendshapeProcessor {
    constructor(bsToSymmetrise: (Array<kotlin.Pair<string, string>> | kotlin.collections.Iterable<kotlin.Pair<string, string>>), power?: number);
    process(blendshapes: (Map<string, number> | PlainObjectMap<number> | kotlin.collections.Map<string, number>)): kotlin.Pair<BlendshapeProcessor, kotlin.collections.Map<string, number>>;
}
export class BPSymmetriseNormDiff implements BlendshapeProcessor {
    constructor(bsToSymmetrise: (Array<kotlin.Pair<string, string>> | kotlin.collections.Iterable<kotlin.Pair<string, string>>), power?: number);
    process(blendshapes: (Map<string, number> | PlainObjectMap<number> | kotlin.collections.Map<string, number>)): kotlin.Pair<BlendshapeProcessor, kotlin.collections.Map<string, number>>;
}
export class BPFixConflictingPreferringFirst implements BlendshapeProcessor {
    constructor(bsToFix: (Array<kotlin.Triple<string, string, number>> | kotlin.collections.Iterable<kotlin.Triple<string, string, number>>));
    process(blendshapes: (Map<string, number> | PlainObjectMap<number> | kotlin.collections.Map<string, number>)): kotlin.Pair<BlendshapeProcessor, kotlin.collections.Map<string, number>>;
}
export class BPFixConflictingDampeningBoth implements BlendshapeProcessor {
    constructor(bsToFix: (Array<kotlin.Pair<string, string>> | kotlin.collections.Iterable<kotlin.Pair<string, string>>));
    process(blendshapes: (Map<string, number> | PlainObjectMap<number> | kotlin.collections.Map<string, number>)): kotlin.Pair<BlendshapeProcessor, kotlin.collections.Map<string, number>>;
}
export class BPAmplify implements BlendshapeProcessor {
    constructor(bsToAmplify: (Map<string, kotlin.collections.List<number>> | PlainObjectMap<kotlin.collections.List<number>> | kotlin.collections.Map<string, kotlin.collections.List<number>>));
    process(blendshapes: (Map<string, number> | PlainObjectMap<number> | kotlin.collections.Map<string, number>)): kotlin.Pair<BlendshapeProcessor, kotlin.collections.Map<string, number>>;
}
export class BPDisable implements BlendshapeProcessor {
    constructor(bsToDisable: (Array<string> | kotlin.collections.Iterable<string>));
    process(blendshapes: (Map<string, number> | PlainObjectMap<number> | kotlin.collections.Map<string, number>)): kotlin.Pair<BlendshapeProcessor, kotlin.collections.Map<string, number>>;
}
export class BPStabilize implements BlendshapeProcessor {
    constructor(defaultStabilizer: Stabilizer<ExpressionBlendshapes>, stabilizers: (Map<string, Stabilizer<Vec1>> | PlainObjectMap<Stabilizer<Vec1>> | kotlin.collections.Map<string, Stabilizer<Vec1>>));
    process(blendshapes: (Map<string, number> | PlainObjectMap<number> | kotlin.collections.Map<string, number>)): kotlin.Pair<BlendshapeProcessor, kotlin.collections.Map<string, number>>;
}
export class BPChain implements BlendshapeProcessor {
    constructor(processors: (Array<BlendshapeProcessor> | kotlin.collections.Iterable<BlendshapeProcessor>));
    process(blendshapes: (Map<string, number> | PlainObjectMap<number> | kotlin.collections.Map<string, number>)): kotlin.Pair<BlendshapeProcessor, kotlin.collections.Map<string, number>>;
}
export class Rect extends Vector {
    private constructor();
    readonly x: number;
    readonly y: number;
    readonly width: number;
    readonly height: number;
    readonly origin: Vec2;
    readonly extent: Vec2;
    readonly minX: number;
    readonly minY: number;
    readonly maxX: number;
    readonly maxY: number;
    area(): number;
    expandToSquare(): Rect;
    scaleWidthHeight(sw: number, sh: number): Rect;
    scaleXY(sx: number, sy: number): Rect;
    scale(sx: number, sy: number): Rect;
    scale(s: Vec2): Rect;
    scaleAroundCenter(sx: number, sy: number): Rect;
    offset(dx: number, dy: number): Rect;
    flipY(maxHeight?: number): Rect;
    toArray(): Float32Array;
    toFloatArray(): Float32Array;
    insetBy(dx: number, dy: number): Rect;
    normalizeBy(size: Vec2): Rect;
}
export namespace Rect {
    function create(x: number, y: number, width: number, height: number): Rect;
    function createWithNum(x: number, y: number, width: number, height: number): Rect;
    function create(origin: Vec2, size: Vec2): Rect;
    function createWithVec2(origin: Vec2, size: Vec2): Rect;
    function create(): Rect;
    function create3(): Rect;
    const FULL: Rect;

}
/**
 * A basic wrapper around HTMLVideoElement for Webcamera input.
 */
export class CameraWrapper {
    constructor(video?: Nullable<HTMLVideoElement>);
    /**
     * Returns true if the current camera is front-facing and its output should be mirrored
     */
    frontFacing: boolean;
    addOnFrameListener(listener: (p0: TrackerImage) => void): void;
    /**
     * Starts camera recording. The [frontFacing] argument hints subsequent processing
     * whether the image should be flipped horizontally. Returns a future that resolves
     * when the webcam is started and ready to provide data.
     */
    start(frontFacing?: boolean): Future<Try<void>>;
    /**
     * Starts camera recording. The [frontFacing] argument hints subsequent processing
     * whether the image should be flipped horizontally. Returns a future that resolves
     * when the webcam is started and ready to provide data.
     */
    start(frontFacing?: boolean, deviceId?: Nullable<any>): Future<Try<void>>;
    /**
     * Stops the webcamera playback
     */
    stop(): Future<Try<void>>;
    /**
     * Pauses the video
     */
    pause(): Future<Try<void>>;
    /**
     * Resumes the video playback. Returns a future that resolves when the playback is actually resumed.
     */
    resume(): Future<Try<void>>;
    /**
     * Returns true if the video is currently paused
     */
    readonly paused: boolean;
}
export namespace CameraWrapper {
    /**
     * Checks whether this device supports webcamera playback.
     * Returns a [Future] that resolves to true if webcamera is supported on this device or an error if no suitable camera exists.
     */
    function checkWebcamAvailable(): Future<Try<boolean>>;
    /**
     * Enumerates all webcams
     * Returns a [Future] that resolves to a possibly empty list of available devices or error.
     */
    function enumerateDevices(): Future<Try<kotlin.collections.List<mediacapture.MediaDeviceInfo>>>;

}
export class TrackerImage {
    constructor(image: PlatformImage, flipHorizontally?: boolean);
    readonly image: PlatformImage;
    readonly flipHorizontally: boolean;
    readonly width: number;
    readonly height: number;
}
type TrackerBackendType = {
    readonly CPU: TrackerBackendType;
    readonly WebGL: TrackerBackendType;
    readonly WASM: TrackerBackendType;
    readonly WebGPU: TrackerBackendType;
}
export const TrackerBackend: TrackerBackendType;
export class TrackerGPUContext {
    constructor(backend?: TrackerBackendType);
    readonly backend: TrackerBackendType;
}
export function initLibraryAPI(): void;