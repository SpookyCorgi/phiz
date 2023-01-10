type Nullable<T> = T | null | undefined
declare const __doNotImplementIt: unique symbol
type __doNotImplementIt = typeof __doNotImplementIt
export abstract class AbstractBlendshapes<T> extends Vector<T> {
    protected constructor(names: any/* kotlin.collections.List<string> */, elements: Float32Array);
    get names(): any/* kotlin.collections.List<string> */;
    protected abstract factoryWithNames(elements: Float32Array, names: any/* kotlin.collections.List<string> */): T;
    protected factory(elements: Float32Array): T;
    protected static get Companion(): {
    };
}
export const EXPRESSION_BLENDSHAPES: any/* kotlin.collections.List<string> */;
export class BPSymmetriseMax /* implements BlendshapeProcessor */ {
    constructor(bsToSymmetrise: any/* kotlin.collections.Iterable<kotlin.Pair<string, string>> */, power?: number);
}
export class BPSymmetriseSCurve /* implements BlendshapeProcessor */ {
    constructor(bsToSymmetrise: any/* kotlin.collections.Iterable<kotlin.Pair<string, string>> */);
}
export class BPSymmetriseDiff /* implements BlendshapeProcessor */ {
    constructor(bsToSymmetrise: any/* kotlin.collections.Iterable<kotlin.Pair<string, string>> */, power?: number);
}
export class BPSymmetriseNormDiff /* implements BlendshapeProcessor */ {
    constructor(bsToSymmetrise: any/* kotlin.collections.Iterable<kotlin.Pair<string, string>> */, power?: number);
}
export class BPFixConflictingPreferringFirst /* implements BlendshapeProcessor */ {
    constructor(bsToFix: any/* kotlin.collections.Iterable<kotlin.Triple<string, string, number>> */);
}
export class BPFixConflictingDampeningBoth /* implements BlendshapeProcessor */ {
    constructor(bsToFix: any/* kotlin.collections.Iterable<kotlin.Pair<string, string>> */);
}
export class BPAmplify /* implements BlendshapeProcessor */ {
    constructor(bsToAmplify: any/* kotlin.collections.Map<string, kotlin.collections.List<number>> */);
}
export class BPDisable /* implements BlendshapeProcessor */ {
    constructor(bsToDisable: any/* kotlin.collections.Iterable<string> */);
}
export class BPStabilize /* implements BlendshapeProcessor */ {
    constructor(defaultStabilizer: any/* Stabilizer<ExpressionBlendshapes> */, stabilizers: any/* kotlin.collections.Map<string, Stabilizer<Vec1>> */);
}
export class BPChain /* implements BlendshapeProcessor */ {
    constructor(processors: any/* kotlin.collections.Iterable<BlendshapeProcessor> */);
}
export const ByteBufferCompanionInit: void;
export const CameraCompanionInit: void;
export const OrbitCameraControlsCompanionInit: void;
export class Camera {
    private constructor();
    get origin(): Vec3;
    get view(): Vec3;
    get upVec3(): Vec3;
    get orbit(): boolean;
    get orbitRadius(): number;
    get viewMatrix(): Mat4;
    get eye(): Vec3;
    get rightVec3(): Vec3;
    orthoNormalized(): Camera;
    forward(speed?: number): Camera;
    backward(speed?: number): Camera;
    rightWithNum(speed?: number): Camera;
    left(speed?: number): Camera;
    upWithNum(speed?: number, upOverride?: Nullable<Vec3>): Camera;
    down(speed?: number, upOverride?: Nullable<Vec3>): Camera;
    lookTo(viewDirection: Vec3, verticalUp?: Nullable<Vec3>): Camera;
    lookAt(target: Vec3, verticalUp?: Nullable<Vec3>): Camera;
    rotateWithAzimuth(azimuth: number, zenith: number, verticalUp?: Vec3, zenithLimit?: Nullable<number>): Camera;
    rotateWithHeading(heading: number, elevation: number, bank: number): Camera;
    withOrigin(origin: Vec3): Camera;
    withView(view: Vec3): Camera;
    withUp(up: Vec3): Camera;
    withOrbit(orbit: boolean): Camera;
    withOrbitRadius(orbitRadius: number): Camera;
    up(p0?: Nullable<any>, p1?: Nullable<any>): Nullable<any>;
    rotate(p0: Nullable<any>, p1: Nullable<any>, p2?: Nullable<any>, p3?: Nullable<any>): Nullable<any>;
    static get Companion(): {
        lookTo(origin: Vec3, viewDirection: Vec3, upDirection: Vec3, orbit?: boolean, orbitRadius?: Nullable<number>): Camera;
        lookAt(lookFrom: Vec3, lookAt: Vec3, upDirection: Vec3, orbit?: boolean): Camera;
    };
}
export class OrbitCameraControls {
    private constructor();
    get camera(): Camera;
    tick(delta: number): OrbitCameraControls;
    static get Companion(): {
        from(basePosition: Vec3, targetPosition: Vec3, timeToRotate: number, rotationalAxis?: Vec3): OrbitCameraControls;
    };
}
export const ColCompanionInit: void;
export class Col extends Vector<Col> {
    private constructor();
    static createWithDoubleAndDoubleAndDoubleAndDouble(r: number, g: number, b: number, a: number): Col;
    static createWithDoubleAndDoubleAndDouble(r: number, g: number, b: number): Col;
    static createWithFloatAndFloatAndFloatAndFloat(r: number, g: number, b: number, a: number): Col;
    static createWithFloatAndFloatAndFloat(r: number, g: number, b: number): Col;
    static createWithIntAndIntAndIntAndInt(r: number, g: number, b: number, a: number): Col;
    static createWithIntAndIntAndInt(r: number, g: number, b: number): Col;
    static create7(): Col;
    static createWithIntAndIntArray(color: number, channelMap?: Int32Array): Col;
    protected factory(elements: Float32Array): Col;
    get r(): number;
    get g(): number;
    get b(): number;
    get a(): number;
    get rgb(): Col;
    get xy(): Vec2;
    get xyz(): Vec3;
    get xyzw(): Vec4;
    withR(r: number): Col;
    withG(g: number): Col;
    withB(b: number): Col;
    withA(a: number): Col;
    toInt(channelMap?: Int32Array): number;
    clamp(): Col;
    static get Companion(): {
        get RGBA(): Int32Array;
        get BGRA(): Int32Array;
        get RGB(): Int32Array;
        get BGR(): Int32Array;
        get WHITE(): Col;
        get BLACK(): Col;
        get TRANSPARENT(): Col;
        get RED(): Col;
        get GREEN(): Col;
        get BLUE(): Col;
        get MAGENTA(): Col;
        get YELLOW(): Col;
        get CYAN(): Col;
        get GRAY(): Col;
        fromHex(hex: string): Try<Col>;
        create(p0?: Nullable<any>, p1?: Nullable<any>, p2?: Nullable<any>, p3?: Nullable<any>): Nullable<any>;
    };
}
export const CommonEmotions: {
    get HAPPY(): any/* kotlin.collections.Map<string, number> */;
    get SAD(): any/* kotlin.collections.Map<string, number> */;
    get ANGRY(): any/* kotlin.collections.Map<string, number> */;
    get VICIOUS(): any/* kotlin.collections.Map<string, number> */;
    get SURPRISED(): any/* kotlin.collections.Map<string, number> */;
    get SCARED(): any/* kotlin.collections.Map<string, number> */;
};
export const ComputationResultCompanionInit: void;
export class ExpressionBlendshapes extends AbstractBlendshapes<ExpressionBlendshapes> {
    private constructor();
    static createWithBlendshapes(blendshapes: any/* kotlin.collections.Map<string, number> */, _default?: number): ExpressionBlendshapes;
    protected factoryWithNames(elements: Float32Array, names: any/* kotlin.collections.List<string> */): ExpressionBlendshapes;
    static get Companion(): {
    };
}
export const FaceDetectorYoloFace500kCompanionInit: void;
export const FaceTrackerResultCompanionInit: void;
export const FaceTrackerCompanionInit: void;
export class FaceTrackerResult {
    constructor(blendshapes: any/* kotlin.collections.Map<string, number> */, normalizedImagePosition: Vec2, normalizedImageScale: number, rotationQuaternion: Quaternion, confidence: number, inputImageSize: Vec2, faceRectangle: Rect, positionInCrop: Vec2, scaleInCrop: number, debug?: Nullable<any>);
    get blendshapes(): any/* kotlin.collections.Map<string, number> */;
    set blendshapes(value: any/* kotlin.collections.Map<string, number> */);
    get normalizedImagePosition(): Vec2;
    get normalizedImageScale(): number;
    get rotationQuaternion(): Quaternion;
    get confidence(): number;
    get inputImageSize(): Vec2;
    get faceRectangle(): Rect;
    get debug(): Nullable<any>;
    hasFace(): boolean;
    interpolate(other: FaceTrackerResult, t: number): FaceTrackerResult;
    serialize(customData?: Nullable<Int8Array>): Int8Array;
    component1(): any/* kotlin.collections.Map<string, number> */;
    component2(): Vec2;
    component3(): number;
    component4(): Quaternion;
    component5(): number;
    component6(): Vec2;
    component7(): Rect;
    component10(): Nullable<any>;
    copy(blendshapes?: any/* kotlin.collections.Map<string, number> */, normalizedImagePosition?: Vec2, normalizedImageScale?: number, rotationQuaternion?: Quaternion, confidence?: number, inputImageSize?: Vec2, faceRectangle?: Rect, positionInCrop?: Vec2, scaleInCrop?: number, debug?: Nullable<any>): FaceTrackerResult;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
    static get Companion(): {
        get EMPTY(): FaceTrackerResult;
    };
}
export class FaceTrackerWithResult {
    constructor(tracker: any/* PersistentFaceTracker */, result: Nullable<FaceTrackerResult>);
    get tracker(): any/* PersistentFaceTracker */;
    get result(): Nullable<FaceTrackerResult>;
    component1(): any/* PersistentFaceTracker */;
    component2(): Nullable<FaceTrackerResult>;
    copy(tracker?: any/* PersistentFaceTracker */, result?: Nullable<FaceTrackerResult>): FaceTrackerWithResult;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export class AdvancedFaceTrackerOptions {
    constructor(modelName?: Nullable<string>, stabilizerImagePosition?: any/* Nullable<Stabilizer<Vec2>> */, stabilizerImageScale?: any/* Nullable<Stabilizer<Vec1>> */, stabilizerRotation?: any/* Nullable<Stabilizer<Quaternion>> */, blendshapeProcessor?: any/* Nullable<BlendshapeProcessor> */, feedbackDetectorScale?: Nullable<number>, feedbackDetectorOffset?: Nullable<number>);
    get modelName(): Nullable<string>;
    get stabilizerImagePosition(): any/* Nullable<Stabilizer<Vec2>> */;
    get stabilizerImageScale(): any/* Nullable<Stabilizer<Vec1>> */;
    get stabilizerRotation(): any/* Nullable<Stabilizer<Quaternion>> */;
    get blendshapeProcessor(): any/* Nullable<BlendshapeProcessor> */;
    get feedbackDetectorScale(): Nullable<number>;
    get feedbackDetectorOffset(): Nullable<number>;
}
export class FaceTracker {
    private constructor();
    trackWithImage(image: TrackerImage): Nullable<FaceTrackerResult>;
    get lastResult(): Nullable<FaceTrackerResult>;
    get blendshapeNames(): any/* kotlin.collections.List<string> */;
    trackWithFaceTrackerAndHTMLVideoElement(video: Nullable<HTMLVideoElement>, flipHorizontally?: boolean): Nullable<FaceTrackerResult>;
    trackWithFaceTrackerAndImageBitmap(bitmap: Nullable<ImageBitmap>, flipHorizontally?: boolean): Nullable<FaceTrackerResult>;
    trackWithFaceTrackerAndHTMLCanvasElement(canvas: Nullable<HTMLCanvasElement>, flipHorizontally?: boolean): Nullable<FaceTrackerResult>;
    trackWithFaceTrackerAndHTMLImageElement(image: Nullable<HTMLImageElement>, flipHorizontally?: boolean): Nullable<FaceTrackerResult>;
    track(p0: Nullable<any>, p1?: Nullable<any>): Nullable<any>;
    static get Companion(): {
        createVideoTrackerWithFileSystemAndTrackerGPUContext(fileSystem: any/* FileSystem */, context: TrackerGPUContext): Future<Try<FaceTracker>>;
        createVideoTrackerWithFileSystemAndTrackerGPUContextAndAdvancedFaceTrackerOptions(fileSystem: any/* FileSystem */, context: TrackerGPUContext, options: AdvancedFaceTrackerOptions): Future<Try<FaceTracker>>;
        createImageTrackerWithFileSystem(fileSystem: any/* FileSystem */, context: TrackerGPUContext): Future<Try<FaceTracker>>;
        createVideoTrackerWithThis(fs: any/* FileSystem */): Future<Try<FaceTracker>>;
        createImageTrackerWithThis(fs: any/* FileSystem */): Future<Try<FaceTracker>>;
        createVideoTracker(p0: Nullable<any>, p1?: Nullable<any>, p2?: Nullable<any>): Nullable<any>;
        createImageTracker(p0: Nullable<any>, p1?: Nullable<any>): Nullable<any>;
    };
}
export const FaceTrackerReprojectorsCompanionInit: void;
export class FaceTrackerReprojectors {
    constructor();
    static get Companion(): {
        fixedZReprojectorWithWidthToHeight(fovDegrees: number, widthToHeight: number, avatarWidth: number, z: number): any/* FaceTrackerReprojector */;
        fixedZReprojectorWithAspectRatio(fovDegrees: number, renderingWidth: number, renderingHeight: number, imageWidth: number, imageHeight: number, fillMode: any/* FillModeType */, avatarWidth: number, z: number): any/* FaceTrackerReprojector */;
        fixedScaleReprojectorWithWidthToHeight(fovDegrees: number, widthToHeight: number, avatarWidth: number, scale: number): any/* FaceTrackerReprojector */;
        fixedScaleReprojectorWithAspectRatio(fovDegrees: number, renderingWidth: number, renderingHeight: number, imageWidth: number, imageHeight: number, fillMode: any/* FillModeType */, avatarWidth: number, scale: number): any/* FaceTrackerReprojector */;
        fixedZReprojector(p0: Nullable<any>, p1: Nullable<any>, p2: Nullable<any>, p3: Nullable<any>, p4?: Nullable<any>, p5?: Nullable<any>, p6?: Nullable<any>, p7?: Nullable<any>): Nullable<any>;
        fixedScaleReprojector(p0: Nullable<any>, p1: Nullable<any>, p2: Nullable<any>, p3: Nullable<any>, p4?: Nullable<any>, p5?: Nullable<any>, p6?: Nullable<any>, p7?: Nullable<any>): Nullable<any>;
    };
}
export const FaceTrackerResultSerializationFormatCompanionInit: void;
export const FaceTrackerResultSerializerCompanionInit: void;
export const FaceTrackerResultDeserializerCompanionInit: void;
export class FaceTrackerResultSerializer {
    private constructor();
    get serializationFormat(): Int8Array;
    serialize(trackerResult: FaceTrackerResult, userData?: Nullable<Int8Array>): Int8Array;
    static get Companion(): {
        create(): FaceTrackerResultSerializer;
    };
}
export class DeserializedResult {
    constructor(trackerResult: FaceTrackerResult, userData: Nullable<Int8Array>);
    get trackerResult(): FaceTrackerResult;
    get userData(): Nullable<Int8Array>;
    component1(): FaceTrackerResult;
    component2(): Nullable<Int8Array>;
    get first(): FaceTrackerResult;
    get second(): Nullable<Int8Array>;
}
export class FaceTrackerResultDeserializer {
    private constructor();
    deserialize(data: Int8Array): DeserializedResult;
    static get Companion(): {
        create(serializationFormat: Int8Array): FaceTrackerResultDeserializer;
    };
}
export function deserializeResult(data: Int8Array): DeserializedResult;
export const FacemojiAPI: {
    initialize(apiKey: string, context: ApplicationContext): Future<boolean>;
    get isFullyActivated(): boolean;
    get isDemoMode(): boolean;
    addDemoTimeoutCallback(cb: () => void): void;
};
export class FileSubSystem<T> /* implements FileSystem */ {
    constructor(parent: T, newRoot: Path);
    protected get parent(): T;
    protected get newRoot(): Path;
}
export class WriteableFileSubSystem extends FileSubSystem<any/* WriteableFileSystem */> /* implements WriteableFileSystem */ {
    constructor(parent: any/* WriteableFileSystem */, newRoot: Path);
}
export class ExtendedFileSubSystem extends FileSubSystem<any/* ExtendedFileSystem */> /* implements ExtendedFileSystem */ {
    constructor(parent: any/* ExtendedFileSystem */, newRoot: Path);
    glob(p0: Nullable<any>, p1?: Nullable<any>, p2?: Nullable<any>, p3?: Nullable<any>): Nullable<any>;
}
export class FallbackFileSystem /* implements FileSystem */ {
    constructor(filesystems: any/* kotlin.collections.List<FileSystem> */);
    static createWithFileSystem(filesystems: Array<any/* FileSystem */>): FallbackFileSystem;
    static get Companion(): {
    };
}
export class DevelopmentFileSystem /* implements ExtendedFileSystem, InternalFileSystem, WriteableFileSystem */ {
    private constructor();
    static createWithListOfString(root: Path, resourceDirsOverride: any/* kotlin.collections.List<string> */, port?: string): DevelopmentFileSystem;
    static createWithArrayOfString(root?: Path, resourceDirsOverride?: Nullable<Array<string>>, port?: string): DevelopmentFileSystem;
    glob(p0: Nullable<any>, p1?: Nullable<any>, p2?: Nullable<any>, p3?: Nullable<any>): Nullable<any>;
    watch(p0: Nullable<any>): Nullable<any>;
    static get Companion(): {
    };
}
export class FileSystemWatcher {
    private constructor();
    static createWithFileSystem(fileSystem: any/* FileSystem */, watchFilter?: Nullable<(p0: string) => boolean>, errorSensitivity?: any/* FileWatchErrorSensitivityType */): FileSystemWatcher;
    watchWithTAndFn<T>(noChangeValue: T, watcher: (p0: any/* FileSystem */) => T): T;
    watchWithTAndFileSystem<T>(noChangeValue: T, fileSystem: any/* FileSystem */, watcher: (p0: any/* FileSystem */) => T): T;
    watchFlat<T>(noChangeValue: T, watcher: (p0: any/* FileSystem */) => Future<T>): Future<T>;
    watch(p0: Nullable<any>, p1: Nullable<any>, p2?: Nullable<any>): Nullable<any>;
    static get Companion(): {
    };
}
export const FileWatchErrorSensitivity: {
    get LOW(): any/* FileWatchErrorSensitivityType */;
    get MEDIUM(): any/* FileWatchErrorSensitivityType */;
    get HIGH(): any/* FileWatchErrorSensitivityType */;
};
export const FillMode: {
    get Stretch(): any/* FillModeType */;
    get Zoom(): any/* FillModeType */;
    get Shrink(): any/* FillModeType */;
};
export const FutureCompanionInit: void;
export const FuturePendingCompanionInit: void;
export abstract class Future<T> {
    constructor();
    abstract whenDone(consumer: (p0: T) => void): void;
    abstract peek(consumer: (p0: T) => void): Future<T>;
    abstract map<U>(mapper: (p0: T) => U): Future<U>;
    abstract flatMap<U>(mapper: (p0: T) => Future<U>): Future<U>;
    abstract waitFor0(): T;
    abstract waitForWithInt(timeoutMillis: number): Nullable<T>;
    abstract get resolved(): boolean;
    abstract get currentValue(): Nullable<T>;
    mapTry<T, U>(mapper: (p0: T) => U): Future<Try<U>>;
    mapTryFlat<T, U>(mapper: (p0: T) => Try<U>): Future<Try<U>>;
    flatMapTry<T, U>(mapper: (p0: T) => Future<Try<U>>): Future<Try<U>>;
    flatMapTryFlat<T, U>(mapper: (p0: T) => Try<Future<U>>): Future<Try<U>>;
    mapError<T>(mapper: (p0: any/* kotlin.Exception */) => any/* kotlin.Exception */): Future<Try<T>>;
    catchError<T>(catcher: (p0: any/* kotlin.Exception */) => T): Future<T>;
    orTry<T>(fn: (p0: Try.Error) => Try<T>): Future<Try<T>>;
    orTryFlat<T>(fn: (p0: Try.Error) => Future<Try<T>>): Future<Try<T>>;
    upcast<SuperType, DerivedType extends SuperType>(): Future<SuperType>;
    upcastTry<SuperType, DerivedType extends SuperType>(): Future<Try<SuperType>>;
    logError<T>(prefix?: Nullable<string>): Future<Nullable<T>>;
    logWarning<T>(prefix?: Nullable<string>): Future<Nullable<T>>;
    logInfo<T>(prefix?: Nullable<string>): Future<Nullable<T>>;
    logDebug<T>(prefix?: Nullable<string>): Future<Nullable<T>>;
    logInternal<T>(prefix?: Nullable<string>): Future<Nullable<T>>;
    promiseWithFutureOfTryOfT<T>(): Promise<T>;
    promiseWithFutureOfT<T>(): Promise<T>;
    thenWithOnSuccess<T, U>(onSuccess: (p0: T) => U, onError?: Nullable<(p0: any/* kotlin.Exception */) => U>): Future<Try<U>>;
    thenWithSuccess<T, U>(success: (p0: T) => U): Future<U>;
    waitFor(p0?: Nullable<any>): Nullable<any>;
    promise(): Nullable<any>;
    then(p0: Nullable<any>, p1?: Nullable<any>): Nullable<any>;
    static get Companion(): {
        any<T>(futures: Array<Future<T>>): Future<T>;
        all<T>(futures: any/* kotlin.collections.List<Future<T>> */): Future<any/* kotlin.collections.List<T> */>;
        resolved<T>(value: T): Future<T>;
        async<T>(fn: () => T): Future<T>;
        fromGenerator<T>(generator: (p0: (p0: T) => void) => void): Future<T>;
        both<T0, T1>(_0: Future<T0>, _1: Future<T1>): Future<any/* kotlin.Pair<T0, T1> */>;
        tryBoth<T0, T1>(_0: Future<Try<T0>>, _1: Future<Try<T1>>): Future<Try<any/* kotlin.Pair<T0, T1> */>>;
    };
}
export class FuturePending<T> extends Future<T> {
    private constructor();
    static createWithGenerator<T>(generator: (p0: (p0: T) => void) => void): FuturePending<T>;
    whenDone(consumer: (p0: T) => void): void;
    peek(consumer: (p0: T) => void): Future<T>;
    map<U>(mapper: (p0: T) => U): Future<U>;
    flatMap<U>(mapper: (p0: T) => Future<U>): Future<U>;
    waitFor0(): T;
    waitForWithInt(timeoutMillis: number): Nullable<T>;
    get resolved(): boolean;
    get currentValue(): Nullable<T>;
    waitFor_dispatcher(p0: Nullable<any>): Nullable<any>;
    static get Companion(): {
    };
}
export class FutureResolved<T> extends Future<T> {
    constructor(currentValue: T);
    get currentValue(): T;
    whenDone(consumer: (p0: T) => void): void;
    peek(consumer: (p0: T) => void): Future<T>;
    map<U>(mapper: (p0: T) => U): Future<U>;
    flatMap<U>(mapper: (p0: T) => Future<U>): Future<U>;
    waitFor0(): T;
    waitForWithInt(timeoutMillis: number): Nullable<T>;
    get resolved(): boolean;
    waitFor_dispatcher(p0: Nullable<any>): Nullable<any>;
}
export const PixelComponents: {
    get R(): any/* PixelComponentsType */;
    get RG(): any/* PixelComponentsType */;
    get RGBA(): any/* PixelComponentsType */;
};
export const ImageFaceTrackerCompanionInit: void;
export const DispatchQueueCompanionInit: void;
export class DispatchQueue {
    constructor(name: string);
    get name(): string;
    queue(fn: () => void): void;
    runOrQueue(fn: () => void): void;
    targetsThisThread(): Nullable<boolean>;
    static get Companion(): {
        get main(): DispatchQueue;
        get current(): Nullable<DispatchQueue>;
        get globalAsync(): DispatchQueue;
    };
}
export class PeriodicExecutor {
    constructor(intervalSeconds: number, fn: () => void);
    cancel(): void;
    protected finalize(): void;
}
export const CameraWrapperCompanionInit: void;
export class CameraWrapper {
    constructor(video?: Nullable<HTMLVideoElement>);
    get frontFacing(): boolean;
    set frontFacing(value: boolean);
    addOnFrameListener(listener: (p0: TrackerImage) => void): void;
    start0(frontFacing?: boolean): Future<Try<void>>;
    startWithAny(frontFacing?: boolean, deviceId?: Nullable<any>): Future<Try<void>>;
    stop(): Future<Try<void>>;
    pause(): Future<Try<void>>;
    resume(): Future<Try<void>>;
    get paused(): boolean;
    start(p0?: Nullable<any>, p1?: Nullable<any>): Nullable<any>;
    static get Companion(): {
        checkWebcamAvailable(): Future<Try<boolean>>;
        enumerateDevices(): Future<Try<any/* kotlin.collections.List<MediaDeviceInfo> */>>;
    };
}
export function toKotlinMap<V>(obj: any): any/* kotlin.collections.Map<string, V> */;
export function toKotlinList<V>(obj: any): any/* kotlin.collections.List<V> */;
export class TrackerImage {
    constructor(image: PlatformImage, flipHorizontally?: boolean);
    get image(): PlatformImage;
    get flipHorizontally(): boolean;
    get width(): number;
    get height(): number;
}
export const TrackerBackend: {
    get CPU(): any/* TrackerBackendType */;
    get WebGL(): any/* TrackerBackendType */;
    get WASM(): any/* TrackerBackendType */;
    get WebGPU(): any/* TrackerBackendType */;
};
export class TrackerGPUContext {
    constructor(backend?: any/* TrackerBackendType */);
    get backend(): any/* TrackerBackendType */;
}
export function imageFromBytes(bytes: Int8Array): Future<Try<Image>>;
export const ResourceFileSystemCompanionInit: void;
export const DeviceFileSystemCompanionInit: void;
export const NetworkFileSystemCompanionInit: void;
export const WriteableNetworkFileSystemCompanionInit: void;
export class ApplicationContext {
    constructor(resourcePath: string);
    get resourcePath(): string;
}
export class ResourceFileSystem /* implements FileSystem */ {
    constructor(context: ApplicationContext, root?: Path);
    static get Companion(): {
        createWithResourceFileSystemAndApplicationContext(context: ApplicationContext): ResourceFileSystem;
        createWithResourceFileSystemAndApplicationContextAndPath(context: ApplicationContext, root: Path): ResourceFileSystem;
        create(p0: Nullable<any>, p1?: Nullable<any>): Nullable<any>;
    };
}
export class DeviceFileSystem /* implements WriteableFileSystem */ {
    constructor(root?: Path);
    static get Companion(): {
        createWithThis(root: Path): DeviceFileSystem;
        create(p0?: Nullable<any>): Nullable<any>;
    };
}
export class NetworkFileSystem /* implements FileSystem */ {
    constructor(serverUrl: string, disableCache?: boolean, root?: Path);
    static get Companion(): {
        createWithNetworkFileSystemAndString(serverUrl: string): NetworkFileSystem;
        createWithNetworkFileSystemAndStringAndBoolean(serverUrl: string, disableCache: boolean): NetworkFileSystem;
        createWithNetworkFileSystemAndStringAndPath(serverUrl: string, root: Path): NetworkFileSystem;
        createWithNetworkFileSystemAndStringAndBooleanAndPath(serverUrl: string, disableCache: boolean, root: Path): NetworkFileSystem;
        create(p0: Nullable<any>, p1?: Nullable<any>, p2?: Nullable<any>): Nullable<any>;
    };
}
export class WriteableNetworkFileSystem /* implements ExtendedFileSystem, WriteableFileSystem, InternalFileSystem */ {
    constructor(serverUrl: string, disableCache?: boolean, root?: Path);
    watch(p0: Nullable<any>): Nullable<any>;
    glob(p0: Nullable<any>, p1?: Nullable<any>, p2?: Nullable<any>, p3?: Nullable<any>): Nullable<any>;
    static get Companion(): {
        createWithWriteableNetworkFileSystemAndString(serverUrl: string): WriteableNetworkFileSystem;
        createWithWriteableNetworkFileSystemAndStringAndBoolean(serverUrl: string, disableCache: boolean): WriteableNetworkFileSystem;
        createWithWriteableNetworkFileSystemAndStringAndPath(serverUrl: string, root: Path): WriteableNetworkFileSystem;
        createWithWriteableNetworkFileSystemAndStringAndBooleanAndPath(serverUrl: string, disableCache: boolean, root: Path): WriteableNetworkFileSystem;
        create(p0: Nullable<any>, p1?: Nullable<any>, p2?: Nullable<any>): Nullable<any>;
    };
}
export function cacheDir(context: ApplicationContext, subDir: Nullable<Path>): Path;
export function developmentResourceDirs(): Array<string>;
export abstract class Image {
    protected constructor();
    abstract get width(): number;
    abstract get height(): number;
}
export namespace Image {
    class RawInt extends Image {
        constructor(width: number, height: number, data: Int32Array);
        get width(): number;
        get height(): number;
        get data(): Int32Array;
    }
    class RawFloat extends Image {
        constructor(width: number, height: number, data: Float32Array, pixelComponents: any/* PixelComponentsType */);
        get width(): number;
        get height(): number;
        get data(): Float32Array;
        get pixelComponents(): any/* PixelComponentsType */;
    }
}
export abstract class PlatformImage extends Image {
    protected constructor(width: number, height: number);
    get width(): number;
    get height(): number;
}
export class BitmapImage extends PlatformImage {
    constructor(bitmap: ImageBitmap);
    get bitmap(): ImageBitmap;
}
export class HTMLVideoImage extends PlatformImage {
    constructor(video: HTMLVideoElement);
    get video(): HTMLVideoElement;
}
export class HTMLImage extends PlatformImage {
    constructor(image: HTMLImageElement);
    get image(): HTMLImageElement;
}
export class HTMLCanvasImage extends PlatformImage {
    constructor(canvas: HTMLCanvasElement);
    get canvas(): HTMLCanvasElement;
}
export class ImageDataImage extends PlatformImage {
    constructor(data: ImageData);
    get data(): ImageData;
}
export abstract class ImageList {
    protected constructor();
    abstract get images(): any/* kotlin.collections.List<Image> */;
}
export namespace ImageList {
    class RawInt extends ImageList {
        private constructor();
        get images(): any/* kotlin.collections.List<Image.RawInt> */;
        static createWithWidth(width: number, height: number, data: any/* kotlin.collections.List<Int32Array> */): ImageList.RawInt;
        static get Companion(): {
        };
    }
    class RawFloat extends ImageList {
        private constructor();
        get images(): any/* kotlin.collections.List<Image.RawFloat> */;
        static createWithWidth(width: number, height: number, data: any/* kotlin.collections.List<Float32Array> */, pixelComponents: any/* PixelComponentsType */): ImageList.RawFloat;
        static get Companion(): {
        };
    }
}
export abstract class ImageCube {
    protected constructor();
}
export namespace ImageCube {
    class RawInt extends ImageCube {
        private constructor();
        get xPos(): Image.RawInt;
        get xNeg(): Image.RawInt;
        get yPos(): Image.RawInt;
        get yNeg(): Image.RawInt;
        get zPos(): Image.RawInt;
        get zNeg(): Image.RawInt;
        static createWithSize(size: number, xPos: Int32Array, xNeg: Int32Array, yPos: Int32Array, yNeg: Int32Array, zPos: Int32Array, zNeg: Int32Array): ImageCube.RawInt;
        static get Companion(): {
        };
    }
    class RawFloat extends ImageCube {
        private constructor();
        get xPos(): Image.RawFloat;
        get xNeg(): Image.RawFloat;
        get yPos(): Image.RawFloat;
        get yNeg(): Image.RawFloat;
        get zPos(): Image.RawFloat;
        get zNeg(): Image.RawFloat;
        static createWithSize(size: number, xPos: Float32Array, xNeg: Float32Array, yPos: Float32Array, yNeg: Float32Array, zPos: Float32Array, zNeg: Float32Array, pixelComponents: any/* PixelComponentsType */): ImageCube.RawFloat;
        static get Companion(): {
        };
    }
}
export const InternalLoggerCompanionInit: void;
export abstract class DebugMemoryTag {
    constructor(extraName?: Nullable<string>);
}
export namespace _js {
    class StringMap<V> /* extends kotlin.collections.AbstractMutableMap<string, V> */ /* implements kotlin.collections.Map<string, V> */ {
        private constructor();
        static create1<V>(): _js.StringMap<V>;
        static createWithIterableOfPairOfString<V>(values: any/* kotlin.collections.Iterable<kotlin.Pair<string, V>> */): _js.StringMap<V>;
        static createWithArrayOfArrayOfAny<V>(values: Array<Array<Nullable<any>>>): _js.StringMap<V>;
        static createWithMapOfString<V>(values: any/* kotlin.collections.Map<string, V> */): _js.StringMap<V>;
        putAllWithIterableOfPairOfString(from: any/* kotlin.collections.Iterable<kotlin.Pair<string, V>> */): void;
        putAll(p0: Nullable<any>): Nullable<any>;
        static get Companion(): {
        };
    }
}
export function getTimeMillis(): any/* kotlin.Long */;
export namespace _js {
    class JSWrappedIterator<T> {
        constructor(wrapped: any/* kotlin.collections.Iterator<T> */);
        next(): JSIteratorResult<T>;
    }
    class MapJSIterator<K, V> {
        constructor(wrapped: any/* kotlin.collections.Map<K, V> */);
        next(): JSIteratorResult<any>;
    }
}
export class WeakReference<T> {
    constructor(referred: T);
    get(): Nullable<T>;
}
export function initLibraryAPI(): void;
export const JsonEncoderDecoder: {
    get json(): any/* kotlinx.serialization.json.Json */;
    parseJson<T>(jsonText: string, strategy: any/* kotlinx.serialization.DeserializationStrategy<T> */): Try<T>;
};
export const LateInitCompanionInit: void;
export const LoggerCompanionInit: void;
export const LogLevel: {
    get Internal(): any/* LogLevelType */;
    get Debug(): any/* LogLevelType */;
    get Info(): any/* LogLevelType */;
    get Warning(): any/* LogLevelType */;
    get Error(): any/* LogLevelType */;
};
export class Logger {
    constructor();
    static get Companion(): {
        get logLevel(): any/* LogLevelType */;
        set logLevel(value: any/* LogLevelType */);
        get printLogWithListeners(): boolean;
        set printLogWithListeners(value: boolean);
        log(level: any/* LogLevelType */, message: string, logStackTrace?: any/* Nullable<kotlin.Exception> */): void;
        addLogListener(l: (p0: any/* LogLevelType */, p1: string) => void): void;
        removeLogListener(l: (p0: any/* LogLevelType */, p1: string) => void): void;
        time(): TimeLogger;
        debug(message: string): void;
        info(message: string): void;
        warning(message: string): void;
        errorWithString(message: string): void;
        errorWithError(error: any/* kotlin.Exception */): void;
        errorWithStringAndException(message: string, error: any/* kotlin.Exception */): void;
        error(p0: Nullable<any>, p1?: Nullable<any>): Nullable<any>;
    };
}
export class TimeLogger {
    constructor(start?: any/* kotlin.Long */);
    log(level: any/* LogLevelType */, message: string, logStackTrace?: any/* Nullable<kotlin.Exception> */): void;
    debug(message: string): void;
    internal(message: string): void;
    info(message: string): void;
    warning(message: string): void;
    error(message: string): void;
}
export const MatrixLayoutCompanionInit: void;
export const Mat2CompanionInit: void;
export const Mat3CompanionInit: void;
export const Mat4CompanionInit: void;
export abstract class MatrixLayout {
    protected constructor();
    abstract invoke(row: number, column: number, order: number): number;
    abstract get transposed(): MatrixLayout;
    static get RowMajor(): {
        invoke(row: number, column: number, order: number): number;
        get transposed(): typeof MatrixLayout.ColumnMajor;
    } & MatrixLayout;
    static get ColumnMajor(): {
        invoke(row: number, column: number, order: number): number;
        get transposed(): typeof MatrixLayout.RowMajor;
    } & MatrixLayout;
    static get Companion(): {
        get defaultLayout(): MatrixLayout;
    };
}
export abstract class Matrix<T> extends Vector<T> {
    constructor(elements: Float32Array, order: number, layout?: MatrixLayout);
    get order(): number;
    get layout(): MatrixLayout;
    protected factory0(elements: Float32Array): T;
    protected abstract factory(elements: Float32Array, order: number, layout: MatrixLayout): T;
    transposed(): T;
    transposedLayout(): T;
    mulWithT(rhs: T): T;
    abstract inverse0(): Nullable<T>;
    inverseWithT(_default: T): T;
    toString(): string;
    factory_dispatcher(p0: Nullable<any>, p1: Nullable<any>, p2: Nullable<any>): Nullable<any>;
    mul(p0: Nullable<any>): Nullable<any>;
    times(p0: Nullable<any>): Nullable<any>;
    inverse(p0?: Nullable<any>): Nullable<any>;
}
export class Mat2 extends Matrix<Mat2> {
    private constructor();
    static createWithX(x: Vec2, y: Vec2, layout?: MatrixLayout): Mat2;
    static createWithLayout(layout?: MatrixLayout): Mat2;
    protected factoryWithInt(elements: Float32Array, order: number, layout: MatrixLayout): Mat2;
    get x(): Vec2;
    get y(): Vec2;
    withX(x: Vec2): Mat2;
    withY(y: Vec2): Mat2;
    withZ(z: Vec3): Mat3;
    get mat2(): Mat2;
    get mat3(): Mat3;
    get mat4(): Mat4;
    inverse0(): Nullable<Mat2>;
    mulVec(rhs: Vec2): Vec2;
    scale(): Vec2;
    factory_dispatcher(p0: Nullable<any>, p1: Nullable<any>, p2: Nullable<any>): Nullable<any>;
    inverse_dispatcher(p0: Nullable<any>): Nullable<any>;
    mul(p0: Nullable<any>): Nullable<any>;
    static get Companion(): {
        identity(layout?: MatrixLayout): Mat2;
        scaleWithDouble(x: number, y?: Nullable<number>, layout?: MatrixLayout): Mat2;
        scaleWithFloat(x: number, y?: Nullable<number>, layout?: MatrixLayout): Mat2;
        scaleWithVec(vec: Vec2, layout?: MatrixLayout): Mat2;
        translateWithDouble(x: number, y?: Nullable<number>, layout?: MatrixLayout): Mat2;
        translateWithFloat(x: number, y?: Nullable<number>, layout?: MatrixLayout): Mat2;
        translateWithVec(vec: Vec2, layout?: MatrixLayout): Mat2;
        rotateWithDouble(angle: number, layout?: MatrixLayout): Mat2;
        rotateWithFloat(angle: number, layout?: MatrixLayout): Mat2;
        scale(p0: Nullable<any>, p1?: Nullable<any>, p2?: Nullable<any>): Nullable<any>;
        translate(p0: Nullable<any>, p1?: Nullable<any>, p2?: Nullable<any>): Nullable<any>;
        rotate(p0: Nullable<any>, p1?: Nullable<any>): Nullable<any>;
        create(p0?: Nullable<any>, p1?: Nullable<any>, p2?: Nullable<any>): Nullable<any>;
    };
}
export class Mat3 extends Matrix<Mat3> {
    private constructor();
    static createWithX(x: Vec3, y: Vec3, z: Vec3, layout?: MatrixLayout): Mat3;
    static createWithLayout(layout?: MatrixLayout): Mat3;
    protected factoryWithInt(elements: Float32Array, order: number, layout: MatrixLayout): Mat3;
    get x(): Vec3;
    get y(): Vec3;
    get z(): Vec3;
    get mat2(): Mat2;
    get mat3(): Mat3;
    get mat4(): Mat4;
    withX(x: Vec3): Mat3;
    withY(y: Vec3): Mat3;
    withZ(z: Vec3): Mat3;
    withW(w: Vec4): Mat4;
    inverse0(): Nullable<Mat3>;
    mulVec(rhs: Vec3): Vec3;
    mulWithThis(rhs: Quaternion): Mat3;
    quaternion(): Quaternion;
    scale(): Vec3;
    scale2(): Vec2;
    translation(): Vec2;
    rotation(): Quaternion;
    factory_dispatcher(p0: Nullable<any>, p1: Nullable<any>, p2: Nullable<any>): Nullable<any>;
    inverse_dispatcher(p0: Nullable<any>): Nullable<any>;
    mul(p0: Nullable<any>): Nullable<any>;
    static get Companion(): {
        identity(layout?: MatrixLayout): Mat3;
        scaleWithDoubleAndDoubleAndMatrixLayout(x: number, y?: Nullable<number>, layout?: MatrixLayout): Mat3;
        scaleWithFloatAndFloatAndMatrixLayout(x: number, y?: Nullable<number>, layout?: MatrixLayout): Mat3;
        scaleWithVec2(vec: Vec2, layout?: MatrixLayout): Mat3;
        scaleWithDoubleAndDoubleAndDouble(x: number, y?: Nullable<number>, z?: Nullable<number>, layout?: MatrixLayout): Mat3;
        scaleWithFloatAndFloatAndFloat(x: number, y?: Nullable<number>, z?: Nullable<number>, layout?: MatrixLayout): Mat3;
        scaleWithVec3(vec: Vec3, layout?: MatrixLayout): Mat3;
        translateWithDoubleAndDoubleAndMatrixLayout(x: number, y?: Nullable<number>, layout?: MatrixLayout): Mat3;
        translateWithFloatAndFloatAndMatrixLayout(x: number, y?: Nullable<number>, layout?: MatrixLayout): Mat3;
        translateWithVec2(vec: Vec2, layout?: MatrixLayout): Mat3;
        translateWithDoubleAndDoubleAndDouble(x: number, y?: Nullable<number>, z?: Nullable<number>, layout?: MatrixLayout): Mat3;
        translateWithFloatAndFloatAndFloat(x: number, y?: Nullable<number>, z?: Nullable<number>, layout?: MatrixLayout): Mat3;
        translateWithVec3(vec: Vec3, layout?: MatrixLayout): Mat3;
        rotateXWithDouble(angle: number, layout?: MatrixLayout): Mat3;
        rotateXWithFloat(angle: number, layout?: MatrixLayout): Mat3;
        rotateYWithDouble(angle: number, layout?: MatrixLayout): Mat3;
        rotateYWithFloat(angle: number, layout?: MatrixLayout): Mat3;
        rotateZWithDouble(angle: number, layout?: MatrixLayout): Mat3;
        rotateZWithFloat(angle: number, layout?: MatrixLayout): Mat3;
        rotateWithDouble(angleX: number, angleY: number, angleZ: number, layout?: MatrixLayout): Mat3;
        rotateWithFloat(angleX: number, angleY: number, angleZ: number, layout?: MatrixLayout): Mat3;
        rotateWithDoubleAndVec3(angle: number, axis: Vec3, layout?: MatrixLayout): Mat3;
        rotateWithFloatAndVec3(angle: number, axis: Vec3, layout?: MatrixLayout): Mat3;
        rotateWithDoubleAndDoubleAndVec3(cosAngle: number, sinAngle: number, axis: Vec3, layout?: MatrixLayout): Mat3;
        rotateWithFloatAndFloatAndVec3(cosAngle: number, sinAngle: number, axis: Vec3, layout?: MatrixLayout): Mat3;
        rotateWithV1(v1: Vec3, v2: Vec3, layout?: MatrixLayout): Mat3;
        scale(p0: Nullable<any>, p1?: Nullable<any>, p2?: Nullable<any>, p3?: Nullable<any>): Nullable<any>;
        translate(p0: Nullable<any>, p1?: Nullable<any>, p2?: Nullable<any>, p3?: Nullable<any>): Nullable<any>;
        rotateX(p0: Nullable<any>, p1?: Nullable<any>): Nullable<any>;
        rotateY(p0: Nullable<any>, p1?: Nullable<any>): Nullable<any>;
        rotateZ(p0: Nullable<any>, p1?: Nullable<any>): Nullable<any>;
        rotate(p0: Nullable<any>, p1: Nullable<any>, p2?: Nullable<any>, p3?: Nullable<any>): Nullable<any>;
        create(p0?: Nullable<any>, p1?: Nullable<any>, p2?: Nullable<any>, p3?: Nullable<any>): Nullable<any>;
    };
}
export class Mat4 extends Matrix<Mat4> {
    private constructor();
    static createWithX(x: Vec4, y: Vec4, z: Vec4, w: Vec4, layout?: MatrixLayout): Mat4;
    static createWithLayout(layout?: MatrixLayout): Mat4;
    protected factoryWithInt(elements: Float32Array, order: number, layout: MatrixLayout): Mat4;
    get x(): Vec4;
    get y(): Vec4;
    get z(): Vec4;
    get w(): Vec4;
    get mat2(): Mat2;
    get mat3(): Mat3;
    get mat4(): Mat4;
    withX(x: Vec4): Mat4;
    withY(y: Vec4): Mat4;
    withZ(z: Vec4): Mat4;
    withW(w: Vec4): Mat4;
    inverse0(): Nullable<Mat4>;
    mulVec(rhs: Vec4): Vec4;
    mulWithThis(rhs: Quaternion): Mat4;
    quaternion(): Quaternion;
    scale(): Vec3;
    translation(): Vec3;
    rotation(): Quaternion;
    factory_dispatcher(p0: Nullable<any>, p1: Nullable<any>, p2: Nullable<any>): Nullable<any>;
    inverse_dispatcher(p0: Nullable<any>): Nullable<any>;
    mul(p0: Nullable<any>): Nullable<any>;
    static get Companion(): {
        identity(layout?: MatrixLayout): Mat4;
        scaleWithDoubleAndDoubleAndDoubleAndMatrixLayout(x: number, y?: Nullable<number>, z?: Nullable<number>, layout?: MatrixLayout): Mat4;
        scaleWithFloatAndFloatAndFloatAndMatrixLayout(x: number, y?: Nullable<number>, z?: Nullable<number>, layout?: MatrixLayout): Mat4;
        scaleWithVec3(vec: Vec3, layout?: MatrixLayout): Mat4;
        scaleWithDoubleAndDoubleAndDoubleAndDouble(x: number, y: number, z: number, w: number, layout?: MatrixLayout): Mat4;
        scaleWithFloatAndFloatAndFloatAndFloat(x: number, y: number, z: number, w: number, layout?: MatrixLayout): Mat4;
        scaleWithVec4(vec: Vec4, layout?: MatrixLayout): Mat4;
        translateWithDoubleAndDoubleAndDoubleAndMatrixLayout(x: number, y?: Nullable<number>, z?: Nullable<number>, layout?: MatrixLayout): Mat4;
        translateWithFloatAndFloatAndFloatAndMatrixLayout(x: number, y?: Nullable<number>, z?: Nullable<number>, layout?: MatrixLayout): Mat4;
        translateWithVec3(vec: Vec3, layout?: MatrixLayout): Mat4;
        translateWithDoubleAndDoubleAndDoubleAndDouble(x: number, y: number, z: number, w: number, layout?: MatrixLayout): Mat4;
        translateWithFloatAndFloatAndFloatAndFloat(x: number, y: number, z: number, w: number, layout?: MatrixLayout): Mat4;
        translateWithVec4(vec: Vec4, layout?: MatrixLayout): Mat4;
        rotateXWithDouble(angle: number, layout?: MatrixLayout): Mat4;
        rotateXWithFloat(angle: number, layout?: MatrixLayout): Mat4;
        rotateYWithDouble(angle: number, layout?: MatrixLayout): Mat4;
        rotateYWithFloat(angle: number, layout?: MatrixLayout): Mat4;
        rotateZWithDouble(angle: number, layout?: MatrixLayout): Mat4;
        rotateZWithFloat(angle: number, layout?: MatrixLayout): Mat4;
        rotateWithDoubleAndDoubleAndDouble(angleX: number, angleY: number, angleZ: number, layout?: MatrixLayout): Mat4;
        rotateWithFloatAndFloatAndFloat(angleX: number, angleY: number, angleZ: number, layout?: MatrixLayout): Mat4;
        rotateWithAngleXYZ(angleXYZ: Vec3, layout?: MatrixLayout): Mat4;
        rotateWithDoubleAndVec3(angle: number, axis: Vec3, layout?: MatrixLayout): Mat4;
        rotateWithFloatAndVec3(angle: number, axis: Vec3, layout?: MatrixLayout): Mat4;
        rotateWithDoubleAndDoubleAndVec3(cosAngle: number, sinAngle: number, axis: Vec3, layout?: MatrixLayout): Mat4;
        rotateWithFloatAndFloatAndVec3(cosAngle: number, sinAngle: number, axis: Vec3, layout?: MatrixLayout): Mat4;
        rotateWithV1(v1: Vec3, v2: Vec3, layout?: MatrixLayout): Mat4;
        viewRH(eye: Vec3, view: Vec3, up: Vec3, layout?: MatrixLayout): Mat4;
        orthoRHWithDouble(w: number, h: number, zNear: number, zFar: number, layout?: MatrixLayout): Mat4;
        orthoRHWithFloat(w: number, h: number, zNear: number, zFar: number, layout?: MatrixLayout): Mat4;
        perspRHWithDouble(fov: number, aspect: number, zNear: number, zFar: number, layout?: MatrixLayout): Mat4;
        perspRHWithFloat(fov: number, aspect: number, zNear: number, zFar: number, layout?: MatrixLayout): Mat4;
        perspRHSymmetricZWithDouble(fov: number, aspect: number, zNear: number, zFar: number, layout?: MatrixLayout): Mat4;
        perspRHSymmetricZWithFloat(fov: number, aspect: number, zNear: number, zFar: number, layout?: MatrixLayout): Mat4;
        scale(p0: Nullable<any>, p1?: Nullable<any>, p2?: Nullable<any>, p3?: Nullable<any>, p4?: Nullable<any>): Nullable<any>;
        translate(p0: Nullable<any>, p1?: Nullable<any>, p2?: Nullable<any>, p3?: Nullable<any>, p4?: Nullable<any>): Nullable<any>;
        rotateX(p0: Nullable<any>, p1?: Nullable<any>): Nullable<any>;
        rotateY(p0: Nullable<any>, p1?: Nullable<any>): Nullable<any>;
        rotateZ(p0: Nullable<any>, p1?: Nullable<any>): Nullable<any>;
        rotate(p0: Nullable<any>, p1?: Nullable<any>, p2?: Nullable<any>, p3?: Nullable<any>): Nullable<any>;
        orthoRH(p0: Nullable<any>, p1: Nullable<any>, p2: Nullable<any>, p3: Nullable<any>, p4?: Nullable<any>): Nullable<any>;
        perspRH(p0: Nullable<any>, p1: Nullable<any>, p2: Nullable<any>, p3: Nullable<any>, p4?: Nullable<any>): Nullable<any>;
        perspRHSymmetricZ(p0: Nullable<any>, p1: Nullable<any>, p2: Nullable<any>, p3: Nullable<any>, p4?: Nullable<any>): Nullable<any>;
        create(p0?: Nullable<any>, p1?: Nullable<any>, p2?: Nullable<any>, p3?: Nullable<any>, p4?: Nullable<any>): Nullable<any>;
    };
}
export function printRemainingObjects(): void;
export const NeuralNetModelCompanionInit: void;
export function numArrayOfWithDouble(elements: Float64Array): Float32Array;
export function numArrayOfWithFloat(elements: Float32Array): Float32Array;
export function numArrayOfWithInt(elements: Int32Array): Float32Array;
export const PIn: number;
export const radianPerDegree: number;
export const degreePerRadian: number;
export const PIf: number;
export const ObservableCompanionInit: void;
export class Observable<T> {
    private constructor();
    get last(): Future<Nullable<T>>;
    get id(): number;
    static createWithGenerator<T>(generator: (p0: (p0: T) => void, p1: () => void) => void): Observable<T>;
    static createWithFutureOfT<T>(futures: Array<Future<T>>): Observable<T>;
    static createWithCollectionOfFutureOfT<T>(futures: any/* kotlin.collections.Collection<Future<T>> */): Observable<T>;
    static createWithValue<T>(value: T): Observable<T>;
    subscribe(observer: (p0: T) => void): void;
    unsubscribe(observer: (p0: T) => void): void;
    map<U>(mapper: (p0: T) => U): Observable<U>;
    flatMap<U>(mapper: (p0: T) => Observable<U>): Observable<U>;
    mapNotNull<U>(mapper: (p0: T) => Nullable<U>): Observable<U>;
    peek(fn: (p0: T) => void): Observable<T>;
    filter(fn: (p0: T) => boolean): Observable<T>;
    zipSecond<U>(withValue: U): Observable<any/* kotlin.Pair<T, U> */>;
    zipFirst<U>(withValue: U): Observable<any/* kotlin.Pair<U, T> */>;
    zipMap<U>(mapper: (p0: T) => U): Observable<any/* kotlin.Pair<T, U> */>;
    get first(): Future<T>;
    get value(): Nullable<T>;
    mapTry<T, U>(mapper: (p0: T) => U): Observable<Try<U>>;
    mapTryFlat<T, U>(mapper: (p0: T) => Try<U>): Observable<Try<U>>;
    flatMapTry<T, U>(mapper: (p0: T) => Observable<Try<U>>): Observable<Try<U>>;
    flatMapTryFlat<T, U>(mapper: (p0: T) => Try<Observable<U>>): Observable<Try<U>>;
    catchObservableError<T>(catcher: (p0: any/* kotlin.Exception */) => T): Observable<T>;
    orTry<T>(fn: (p0: Try.Error) => Try<T>): Observable<Try<T>>;
    orTryFlat<T>(fn: (p0: Try.Error) => Observable<Try<T>>): Observable<Try<T>>;
    static get Companion(): {
        any<T>(observables: any/* kotlin.collections.Iterable<Observable<T>> */): Observable<T>;
        all<T>(observables: any/* kotlin.collections.Iterable<Observable<T>> */): Observable<any/* kotlin.collections.List<T> */>;
        create(p0: Nullable<any>): Nullable<any>;
    };
}
export class Path {
    constructor(path: string);
    lastComponent(): string;
    extension(): string;
    baseName(): string;
    directory(): Path;
    joinWithString(path: string): Path;
    joinWithPath(path: Path): Path;
    divWithString(path: string): Path;
    divWithPath(path: Path): Path;
    normalized(): Path;
    toString(): string;
    join(p0: Nullable<any>): Nullable<any>;
    div(p0: Nullable<any>): Nullable<any>;
    copy(path?: string): Path;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
export const ALTER_CORE_VERSION: string;
export const FACEMOJI_SDK_VERSION: string;
export const QuaternionCompanionInit: void;
export class Quaternion extends Vector<Quaternion> {
    private constructor();
    static createWithDouble(r: number, i: number, j: number, k: number): Quaternion;
    static createWithFloat(r: number, i: number, j: number, k: number): Quaternion;
    static createWithVec4(vec: Vec4): Quaternion;
    static create4(): Quaternion;
    protected factory(elements: Float32Array): Quaternion;
    get r(): number;
    get i(): number;
    get j(): number;
    get k(): number;
    get ijk(): Vec3;
    get xyzw(): Vec4;
    get mat3RowMajor(): Mat3;
    get mat3ColumnMajor(): Mat3;
    get mat4RowMajor(): Mat4;
    get mat4ColumnMajor(): Mat4;
    withR(r: number): Quaternion;
    withI(i: number): Quaternion;
    withJ(j: number): Quaternion;
    withK(k: number): Quaternion;
    mulWithQuaternion(rhs: Quaternion): Quaternion;
    mulWithMat3(rhs: Mat3): Mat3;
    mulWithMat4(rhs: Mat4): Mat4;
    mulWithVec3(rhs: Vec3): Vec3;
    inverse(): Quaternion;
    log(): Quaternion;
    exp(): Quaternion;
    toRotation(): any/* kotlin.Pair<number, Vec3> */;
    toEuler(): Vec3;
    slerp(q: Quaternion, t: number): Quaternion;
    spline(q1: Quaternion, q2: Quaternion, q3: Quaternion, t: number): Quaternion;
    toString(): string;
    toMat3(layout?: MatrixLayout): Mat3;
    toMat4(layout?: MatrixLayout): Mat4;
    mul(p0: Nullable<any>): Nullable<any>;
    times(p0: Nullable<any>): Nullable<any>;
    static get Companion(): {
        get identity(): Quaternion;
        fromMatrix(mat: Mat4): Quaternion;
        fromRotationWithX(angle: number, x: number, y: number, z: number): Quaternion;
        fromRotationWithVec(angle: number, vec: Vec3): Quaternion;
        fromEulerWithX(x: number, y: number, z: number): Quaternion;
        fromEulerWithVec(vec: Vec3): Quaternion;
        fromRotation(p0: Nullable<any>, p1: Nullable<any>, p2?: Nullable<any>, p3?: Nullable<any>): Nullable<any>;
        fromEuler(p0: Nullable<any>, p1?: Nullable<any>, p2?: Nullable<any>): Nullable<any>;
        create(p0?: Nullable<any>, p1?: Nullable<any>, p2?: Nullable<any>, p3?: Nullable<any>): Nullable<any>;
    };
}
export const RandomValueCompanionInit: void;
export const RectCompanionInit: void;
export class Rect extends Vector<Rect> {
    private constructor();
    static createWithNum(x: number, y: number, width: number, height: number): Rect;
    static createWithVec2(origin: Vec2, size: Vec2): Rect;
    static create3(): Rect;
    protected factory(elements: Float32Array): Rect;
    get x(): number;
    get y(): number;
    get width(): number;
    get height(): number;
    get origin(): Vec2;
    get extent(): Vec2;
    get minX(): number;
    get minY(): number;
    get maxX(): number;
    get maxY(): number;
    area(): number;
    expandToSquare(): Rect;
    scaleWidthHeight(sw: number, sh: number): Rect;
    scaleXY(sx: number, sy: number): Rect;
    scaleWithSx(sx: number, sy: number): Rect;
    scaleWithS(s: Vec2): Rect;
    scaleAroundCenter(sx: number, sy: number): Rect;
    offset(dx: number, dy: number): Rect;
    flipY(maxHeight?: number): Rect;
    toArray(): Float32Array;
    toFloatArray(): Float32Array;
    insetBy(dx: number, dy: number): Rect;
    normalizeBy(size: Vec2): Rect;
    scale(p0: Nullable<any>, p1?: Nullable<any>): Nullable<any>;
    static get Companion(): {
        get FULL(): Rect;
        create(p0?: Nullable<any>, p1?: Nullable<any>, p2?: Nullable<any>, p3?: Nullable<any>): Nullable<any>;
    };
}
export const Sha256CompanionInit: void;
export class StabilizerResult<T> {
    constructor(newStabilizer: any/* Stabilizer<T> */, data: T);
    get newStabilizer(): any/* Stabilizer<T> */;
    get data(): T;
    component1(): any/* Stabilizer<T> */;
    component2(): T;
}
export class SNRStabilizer<T> /* implements Stabilizer<T> */ {
    private constructor();
    static createWithSnr<T>(smoothing: number, snr: number, signalSmoothingRatio?: number): SNRStabilizer<T>;
    static get Companion(): {
    };
}
export class SNRStabilizerVec<T> /* implements Stabilizer<T> */ {
    private constructor();
    static createWithSnr<T>(smoothing: T, snr: T, signalSmoothingRatio?: number): SNRStabilizerVec<T>;
    static get Companion(): {
    };
}
export class NoiseDetectStabilizer<T> /* implements Stabilizer<T> */ {
    private constructor();
    static createWithSmoothing<T>(smoothing: number, noise: number, sampleCount: number): NoiseDetectStabilizer<T>;
}
export class ChainedStabilizer<T> /* implements Stabilizer<T> */ {
    constructor(stabilizers: any/* kotlin.collections.List<Stabilizer<T>> */);
}
export class AveragedStabilizer<T> /* implements Stabilizer<T> */ {
    constructor(stabilizers: any/* kotlin.collections.List<Stabilizer<T>> */);
}
export class DummyStabilizer<T> /* implements Stabilizer<T> */ {
    constructor();
}
export class ThresholdStabilizer<T> /* implements Stabilizer<T> */ {
    constructor(below: any/* Stabilizer<T> */, above: any/* Stabilizer<T> */, threshold: number);
}
export const TimerCompanionInit: void;
export class Timer {
    private constructor();
    get elapsed(): number;
    tick(): Timer;
    static get Companion(): {
        start(): Timer;
    };
}
export class FPS {
    constructor(interval: number);
    tick(consumer: Nullable<(p0: number) => void>): number;
}
export class Ticker {
    constructor(interval: number);
    tickWithTickerMapperOfT<T>(value: T, mapper: any/* TickerMapper<T> */): T;
    tickWithFn<T>(value: T, mapper: (p0: T) => T): T;
    tick(p0: Nullable<any>, p1: Nullable<any>): Nullable<any>;
}
export const TryCompanionInit: void;
export abstract class Try<T> {
    protected constructor();
    flatMap<U>(mapper: (p0: T) => Try<U>): Try<U>;
    map<U>(mapper: (p0: T) => U): Try<U>;
    mapError(mapper: (p0: any/* kotlin.Exception */) => any/* kotlin.Exception */): Try<T>;
    get optional(): Nullable<T>;
    get exception(): any/* Nullable<kotlin.Exception> */;
    get bool(): boolean;
    get orThrow(): T;
    deferWithTryOfFutureOfT<T>(): Future<Try<T>>;
    squash<T>(): Future<Try<T>>;
    deferWithTryOfObservableOfT<T>(): Observable<Try<T>>;
    catchException<T>(catcher: (p0: any/* kotlin.Exception */) => T): T;
    catchError<T>(catcher: (p0: Try.Error) => T): T;
    or<T>(fn: (p0: Try.Error) => Try<T>): Try<T>;
    flatten<T>(): Try<T>;
    upcast<SuperType, DerivedType extends SuperType>(): Try<SuperType>;
    logError<T>(prefix?: Nullable<string>): Nullable<T>;
    logWarning<T>(prefix?: Nullable<string>): Nullable<T>;
    logInfo<T>(prefix?: Nullable<string>): Nullable<T>;
    logDebug<T>(prefix?: Nullable<string>): Nullable<T>;
    logInternal<T>(prefix?: Nullable<string>): Nullable<T>;
    defer(): Nullable<any>;
    static get Companion(): {
        success<T>(value: T): Try<T>;
        errorWithException<T>(exception: any/* kotlin.Exception */): Try<T>;
        errorWithMessage<T>(message: string): Try<T>;
        all<T>(items: any/* kotlin.collections.List<Try<T>> */): Try<any/* kotlin.collections.List<T> */>;
        invoke(p0: Nullable<any>, p1?: Nullable<any>): Nullable<any>;
        error(p0: Nullable<any>): Nullable<any>;
    };
}
export namespace Try {
    class Value<T> extends Try<T> {
        constructor(value: T);
        get value(): T;
        component1(): T;
        copy(value?: T): Try.Value<T>;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    class Error extends Try<never> {
        constructor(error: any/* kotlin.Exception */);
        get error(): any/* kotlin.Exception */;
        static createWithMessage(message: string): Try.Error;
        component1(): any/* kotlin.Exception */;
        copy(error?: any/* kotlin.Exception */): Try.Error;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export const Vec1CompanionInit: void;
export const Vec2CompanionInit: void;
export const Vec3CompanionInit: void;
export const Vec4CompanionInit: void;
export function min<T>(a: T, b: T): T;
export function max<T>(a: T, b: T): T;
export abstract class Vector<T> /* implements Vec<T> */ {
    constructor(elements: Float32Array);
    protected abstract factory(elements: Float32Array): T;
    asList(): any/* kotlin.collections.List<number> */;
    toString(): string;
    protected vecMulMat<M extends Matrix<M>>(mat: M): T;
    factory(p0: Nullable<any>, p1?: Nullable<any>, p2?: Nullable<any>): Nullable<any>;
    plus(p0: Nullable<any>): Nullable<any>;
    minus(p0: Nullable<any>): Nullable<any>;
    times(p0: Nullable<any>): Nullable<any>;
    div(p0: Nullable<any>): Nullable<any>;
    invDiv(p0: Nullable<any>): Nullable<any>;
    min(p0?: Nullable<any>): Nullable<any>;
    max(p0?: Nullable<any>): Nullable<any>;
    normalized(p0?: Nullable<any>): Nullable<any>;
    elementWise(p0: Nullable<any>, p1?: Nullable<any>): Nullable<any>;
    protected static get Companion(): {
        matMulVec<M extends Matrix<M>, V extends Vector<V>>(mat: M, vec: V): V;
    };
}
export class Vec1 extends Vector<Vec1> {
    private constructor();
    static createWithDouble(x: number): Vec1;
    static createWithFloat(x: number): Vec1;
    static createWithInt(x: number): Vec1;
    static create4(): Vec1;
    protected factory(elements: Float32Array): Vec1;
    get x(): number;
    get xy(): Vec2;
    get xyz(): Vec3;
    get xyzw(): Vec4;
    withX(x: number): Vec1;
    withY(y: number): Vec2;
    static get Companion(): {
        get xAxis(): Vec1;
        get zero(): Vec1;
        get one(): Vec1;
        create(p0?: Nullable<any>): Nullable<any>;
    };
}
export class Vec2 extends Vector<Vec2> {
    private constructor();
    static createWithDouble(x: number, y: number): Vec2;
    static createWithFloat(x: number, y: number): Vec2;
    static createWithInt(x: number, y: number): Vec2;
    static create4(): Vec2;
    protected factory(elements: Float32Array): Vec2;
    get x(): number;
    get y(): number;
    get xy(): Vec2;
    get xyz(): Vec3;
    get xyzw(): Vec4;
    withX(x: number): Vec2;
    withY(y: number): Vec2;
    withZ(z: number): Vec3;
    mul(mat: Mat2): Vec2;
    static get Companion(): {
        get xAxis(): Vec2;
        get yAxis(): Vec2;
        get zero(): Vec2;
        get one(): Vec2;
        create(p0?: Nullable<any>, p1?: Nullable<any>): Nullable<any>;
    };
}
export class Vec3 extends Vector<Vec3> {
    private constructor();
    static createWithDouble(x: number, y: number, z: number): Vec3;
    static createWithFloat(x: number, y: number, z: number): Vec3;
    static createWithInt(x: number, y: number, z: number): Vec3;
    static createWithVec2(xy: Vec2, z: number): Vec3;
    static createWithNum(xyz: number): Vec3;
    static create6(): Vec3;
    protected factory(elements: Float32Array): Vec3;
    get x(): number;
    get y(): number;
    get z(): number;
    get xy(): Vec2;
    get xyz(): Vec3;
    get xyzw(): Vec4;
    get rgb(): Col;
    withX(x: number): Vec3;
    withY(y: number): Vec3;
    withZ(z: number): Vec3;
    withW(w: number): Vec4;
    cross(rhs: Vec3): Vec3;
    mulWithMat(mat: Mat3): Vec3;
    mulWithThis(rhs: Quaternion): Vec3;
    mul(p0: Nullable<any>): Nullable<any>;
    static get Companion(): {
        get xAxis(): Vec3;
        get yAxis(): Vec3;
        get zAxis(): Vec3;
        get zero(): Vec3;
        get one(): Vec3;
        create(p0?: Nullable<any>, p1?: Nullable<any>, p2?: Nullable<any>): Nullable<any>;
    };
}
export class Vec4 extends Vector<Vec4> {
    private constructor();
    static createWithDouble(x: number, y: number, z: number, w: number): Vec4;
    static createWithFloat(x: number, y: number, z: number, w: number): Vec4;
    static createWithInt(x: number, y: number, z: number, w: number): Vec4;
    static createWithVec2AndNum(xy: Vec2, z: number): Vec4;
    static createWithVec2AndNumAndNum(xy: Vec2, z: number, w: number): Vec4;
    static createWithVec2AndVec2(xy: Vec2, zw: Vec2): Vec4;
    static createWithVec3(xyz: Vec3): Vec4;
    static createWithVec3AndNum(xyz: Vec3, w: number): Vec4;
    static create9(): Vec4;
    protected factory(elements: Float32Array): Vec4;
    get x(): number;
    get y(): number;
    get z(): number;
    get w(): number;
    get xy(): Vec2;
    get xyz(): Vec3;
    get xyzw(): Vec4;
    get rgb(): Col;
    get rgba(): Col;
    withX(x: number): Vec4;
    withY(y: number): Vec4;
    withZ(z: number): Vec4;
    withW(w: number): Vec4;
    dehomog(): Nullable<Vec3>;
    mul(mat: Mat4): Vec4;
    static get Companion(): {
        get xAxis(): Vec4;
        get yAxis(): Vec4;
        get zAxis(): Vec4;
        get wAxis(): Vec4;
        get zero(): Vec4;
        get one(): Vec4;
        create(p0?: Nullable<any>, p1?: Nullable<any>, p2?: Nullable<any>, p3?: Nullable<any>): Nullable<any>;
    };
}
export as namespace mocap4face;