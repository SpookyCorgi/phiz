// Copyright Epic Games, Inc. All Rights Reserved.
/*===========================================================================
	Generated code exported from UnrealHeaderTool.
	DO NOT modify this manually! Edit the corresponding .h files instead!
===========================================================================*/

#include "UObject/ObjectMacros.h"
#include "UObject/ScriptMacros.h"

PRAGMA_DISABLE_DEPRECATION_WARNINGS
struct FPhizBlendshapeData;
#ifdef PHIZ_PhizFunctionLibrary_generated_h
#error "PhizFunctionLibrary.generated.h already included, missing '#pragma once' in PhizFunctionLibrary.h"
#endif
#define PHIZ_PhizFunctionLibrary_generated_h

#define FID_PhizPluginProject_Plugins_Phiz_Source_Phiz_Public_PhizFunctionLibrary_h_16_SPARSE_DATA
#define FID_PhizPluginProject_Plugins_Phiz_Source_Phiz_Public_PhizFunctionLibrary_h_16_RPC_WRAPPERS \
 \
	DECLARE_FUNCTION(execBlendshapeDataRemap);


#define FID_PhizPluginProject_Plugins_Phiz_Source_Phiz_Public_PhizFunctionLibrary_h_16_RPC_WRAPPERS_NO_PURE_DECLS \
 \
	DECLARE_FUNCTION(execBlendshapeDataRemap);


#define FID_PhizPluginProject_Plugins_Phiz_Source_Phiz_Public_PhizFunctionLibrary_h_16_INCLASS_NO_PURE_DECLS \
private: \
	static void StaticRegisterNativesUPhizFunctionLibrary(); \
	friend struct Z_Construct_UClass_UPhizFunctionLibrary_Statics; \
public: \
	DECLARE_CLASS(UPhizFunctionLibrary, UBlueprintFunctionLibrary, COMPILED_IN_FLAGS(0), CASTCLASS_None, TEXT("/Script/Phiz"), NO_API) \
	DECLARE_SERIALIZER(UPhizFunctionLibrary)


#define FID_PhizPluginProject_Plugins_Phiz_Source_Phiz_Public_PhizFunctionLibrary_h_16_INCLASS \
private: \
	static void StaticRegisterNativesUPhizFunctionLibrary(); \
	friend struct Z_Construct_UClass_UPhizFunctionLibrary_Statics; \
public: \
	DECLARE_CLASS(UPhizFunctionLibrary, UBlueprintFunctionLibrary, COMPILED_IN_FLAGS(0), CASTCLASS_None, TEXT("/Script/Phiz"), NO_API) \
	DECLARE_SERIALIZER(UPhizFunctionLibrary)


#define FID_PhizPluginProject_Plugins_Phiz_Source_Phiz_Public_PhizFunctionLibrary_h_16_STANDARD_CONSTRUCTORS \
	/** Standard constructor, called after all reflected properties have been initialized */ \
	NO_API UPhizFunctionLibrary(const FObjectInitializer& ObjectInitializer = FObjectInitializer::Get()); \
	DEFINE_DEFAULT_OBJECT_INITIALIZER_CONSTRUCTOR_CALL(UPhizFunctionLibrary) \
	DECLARE_VTABLE_PTR_HELPER_CTOR(NO_API, UPhizFunctionLibrary); \
	DEFINE_VTABLE_PTR_HELPER_CTOR_CALLER(UPhizFunctionLibrary); \
private: \
	/** Private move- and copy-constructors, should never be used */ \
	NO_API UPhizFunctionLibrary(UPhizFunctionLibrary&&); \
	NO_API UPhizFunctionLibrary(const UPhizFunctionLibrary&); \
public:


#define FID_PhizPluginProject_Plugins_Phiz_Source_Phiz_Public_PhizFunctionLibrary_h_16_ENHANCED_CONSTRUCTORS \
	/** Standard constructor, called after all reflected properties have been initialized */ \
	NO_API UPhizFunctionLibrary(const FObjectInitializer& ObjectInitializer = FObjectInitializer::Get()) : Super(ObjectInitializer) { }; \
private: \
	/** Private move- and copy-constructors, should never be used */ \
	NO_API UPhizFunctionLibrary(UPhizFunctionLibrary&&); \
	NO_API UPhizFunctionLibrary(const UPhizFunctionLibrary&); \
public: \
	DECLARE_VTABLE_PTR_HELPER_CTOR(NO_API, UPhizFunctionLibrary); \
	DEFINE_VTABLE_PTR_HELPER_CTOR_CALLER(UPhizFunctionLibrary); \
	DEFINE_DEFAULT_OBJECT_INITIALIZER_CONSTRUCTOR_CALL(UPhizFunctionLibrary)


#define FID_PhizPluginProject_Plugins_Phiz_Source_Phiz_Public_PhizFunctionLibrary_h_13_PROLOG
#define FID_PhizPluginProject_Plugins_Phiz_Source_Phiz_Public_PhizFunctionLibrary_h_16_GENERATED_BODY_LEGACY \
PRAGMA_DISABLE_DEPRECATION_WARNINGS \
public: \
	FID_PhizPluginProject_Plugins_Phiz_Source_Phiz_Public_PhizFunctionLibrary_h_16_SPARSE_DATA \
	FID_PhizPluginProject_Plugins_Phiz_Source_Phiz_Public_PhizFunctionLibrary_h_16_RPC_WRAPPERS \
	FID_PhizPluginProject_Plugins_Phiz_Source_Phiz_Public_PhizFunctionLibrary_h_16_INCLASS \
	FID_PhizPluginProject_Plugins_Phiz_Source_Phiz_Public_PhizFunctionLibrary_h_16_STANDARD_CONSTRUCTORS \
public: \
PRAGMA_ENABLE_DEPRECATION_WARNINGS


#define FID_PhizPluginProject_Plugins_Phiz_Source_Phiz_Public_PhizFunctionLibrary_h_16_GENERATED_BODY \
PRAGMA_DISABLE_DEPRECATION_WARNINGS \
public: \
	FID_PhizPluginProject_Plugins_Phiz_Source_Phiz_Public_PhizFunctionLibrary_h_16_SPARSE_DATA \
	FID_PhizPluginProject_Plugins_Phiz_Source_Phiz_Public_PhizFunctionLibrary_h_16_RPC_WRAPPERS_NO_PURE_DECLS \
	FID_PhizPluginProject_Plugins_Phiz_Source_Phiz_Public_PhizFunctionLibrary_h_16_INCLASS_NO_PURE_DECLS \
	FID_PhizPluginProject_Plugins_Phiz_Source_Phiz_Public_PhizFunctionLibrary_h_16_ENHANCED_CONSTRUCTORS \
private: \
PRAGMA_ENABLE_DEPRECATION_WARNINGS


template<> PHIZ_API UClass* StaticClass<class UPhizFunctionLibrary>();

#undef CURRENT_FILE_ID
#define CURRENT_FILE_ID FID_PhizPluginProject_Plugins_Phiz_Source_Phiz_Public_PhizFunctionLibrary_h


PRAGMA_ENABLE_DEPRECATION_WARNINGS
