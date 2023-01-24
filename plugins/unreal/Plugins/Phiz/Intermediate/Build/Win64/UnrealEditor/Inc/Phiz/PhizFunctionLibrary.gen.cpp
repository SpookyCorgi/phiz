// Copyright Epic Games, Inc. All Rights Reserved.
/*===========================================================================
	Generated code exported from UnrealHeaderTool.
	DO NOT modify this manually! Edit the corresponding .h files instead!
===========================================================================*/

#include "UObject/GeneratedCppIncludes.h"
#include "Phiz/Public/PhizFunctionLibrary.h"
PRAGMA_DISABLE_DEPRECATION_WARNINGS
void EmptyLinkFunctionForGeneratedCodePhizFunctionLibrary() {}
// Cross Module References
	PHIZ_API UClass* Z_Construct_UClass_UPhizFunctionLibrary_NoRegister();
	PHIZ_API UClass* Z_Construct_UClass_UPhizFunctionLibrary();
	ENGINE_API UClass* Z_Construct_UClass_UBlueprintFunctionLibrary();
	UPackage* Z_Construct_UPackage__Script_Phiz();
	PHIZ_API UScriptStruct* Z_Construct_UScriptStruct_FPhizBlendshapeData();
// End Cross Module References
	DEFINE_FUNCTION(UPhizFunctionLibrary::execBlendshapeDataRemap)
	{
		P_GET_TARRAY(float,Z_Param_floatArrayData);
		P_GET_STRUCT_REF(FPhizBlendshapeData,Z_Param_Out_blendshapeData);
		P_FINISH;
		P_NATIVE_BEGIN;
		*(bool*)Z_Param__Result=UPhizFunctionLibrary::BlendshapeDataRemap(Z_Param_floatArrayData,Z_Param_Out_blendshapeData);
		P_NATIVE_END;
	}
	void UPhizFunctionLibrary::StaticRegisterNativesUPhizFunctionLibrary()
	{
		UClass* Class = UPhizFunctionLibrary::StaticClass();
		static const FNameNativePtrPair Funcs[] = {
			{ "BlendshapeDataRemap", &UPhizFunctionLibrary::execBlendshapeDataRemap },
		};
		FNativeFunctionRegistrar::RegisterFunctions(Class, Funcs, UE_ARRAY_COUNT(Funcs));
	}
	struct Z_Construct_UFunction_UPhizFunctionLibrary_BlendshapeDataRemap_Statics
	{
		struct PhizFunctionLibrary_eventBlendshapeDataRemap_Parms
		{
			TArray<float> floatArrayData;
			FPhizBlendshapeData blendshapeData;
			bool ReturnValue;
		};
		static const UECodeGen_Private::FFloatPropertyParams NewProp_floatArrayData_Inner;
#if WITH_METADATA
		static const UECodeGen_Private::FMetaDataPairParam NewProp_floatArrayData_MetaData[];
#endif
		static const UECodeGen_Private::FArrayPropertyParams NewProp_floatArrayData;
		static const UECodeGen_Private::FStructPropertyParams NewProp_blendshapeData;
		static void NewProp_ReturnValue_SetBit(void* Obj);
		static const UECodeGen_Private::FBoolPropertyParams NewProp_ReturnValue;
		static const UECodeGen_Private::FPropertyParamsBase* const PropPointers[];
#if WITH_METADATA
		static const UECodeGen_Private::FMetaDataPairParam Function_MetaDataParams[];
#endif
		static const UECodeGen_Private::FFunctionParams FuncParams;
	};
	const UECodeGen_Private::FFloatPropertyParams Z_Construct_UFunction_UPhizFunctionLibrary_BlendshapeDataRemap_Statics::NewProp_floatArrayData_Inner = { "floatArrayData", nullptr, (EPropertyFlags)0x0000000000000000, UECodeGen_Private::EPropertyGenFlags::Float, RF_Public|RF_Transient|RF_MarkAsNative, 1, 0, METADATA_PARAMS(nullptr, 0) };
#if WITH_METADATA
	const UECodeGen_Private::FMetaDataPairParam Z_Construct_UFunction_UPhizFunctionLibrary_BlendshapeDataRemap_Statics::NewProp_floatArrayData_MetaData[] = {
		{ "NativeConst", "" },
	};
#endif
	const UECodeGen_Private::FArrayPropertyParams Z_Construct_UFunction_UPhizFunctionLibrary_BlendshapeDataRemap_Statics::NewProp_floatArrayData = { "floatArrayData", nullptr, (EPropertyFlags)0x0010000000000082, UECodeGen_Private::EPropertyGenFlags::Array, RF_Public|RF_Transient|RF_MarkAsNative, 1, STRUCT_OFFSET(PhizFunctionLibrary_eventBlendshapeDataRemap_Parms, floatArrayData), EArrayPropertyFlags::None, METADATA_PARAMS(Z_Construct_UFunction_UPhizFunctionLibrary_BlendshapeDataRemap_Statics::NewProp_floatArrayData_MetaData, UE_ARRAY_COUNT(Z_Construct_UFunction_UPhizFunctionLibrary_BlendshapeDataRemap_Statics::NewProp_floatArrayData_MetaData)) };
	const UECodeGen_Private::FStructPropertyParams Z_Construct_UFunction_UPhizFunctionLibrary_BlendshapeDataRemap_Statics::NewProp_blendshapeData = { "blendshapeData", nullptr, (EPropertyFlags)0x0010000000000180, UECodeGen_Private::EPropertyGenFlags::Struct, RF_Public|RF_Transient|RF_MarkAsNative, 1, STRUCT_OFFSET(PhizFunctionLibrary_eventBlendshapeDataRemap_Parms, blendshapeData), Z_Construct_UScriptStruct_FPhizBlendshapeData, METADATA_PARAMS(nullptr, 0) }; // 3590742331
	void Z_Construct_UFunction_UPhizFunctionLibrary_BlendshapeDataRemap_Statics::NewProp_ReturnValue_SetBit(void* Obj)
	{
		((PhizFunctionLibrary_eventBlendshapeDataRemap_Parms*)Obj)->ReturnValue = 1;
	}
	const UECodeGen_Private::FBoolPropertyParams Z_Construct_UFunction_UPhizFunctionLibrary_BlendshapeDataRemap_Statics::NewProp_ReturnValue = { "ReturnValue", nullptr, (EPropertyFlags)0x0010000000000580, UECodeGen_Private::EPropertyGenFlags::Bool | UECodeGen_Private::EPropertyGenFlags::NativeBool, RF_Public|RF_Transient|RF_MarkAsNative, 1, sizeof(bool), sizeof(PhizFunctionLibrary_eventBlendshapeDataRemap_Parms), &Z_Construct_UFunction_UPhizFunctionLibrary_BlendshapeDataRemap_Statics::NewProp_ReturnValue_SetBit, METADATA_PARAMS(nullptr, 0) };
	const UECodeGen_Private::FPropertyParamsBase* const Z_Construct_UFunction_UPhizFunctionLibrary_BlendshapeDataRemap_Statics::PropPointers[] = {
		(const UECodeGen_Private::FPropertyParamsBase*)&Z_Construct_UFunction_UPhizFunctionLibrary_BlendshapeDataRemap_Statics::NewProp_floatArrayData_Inner,
		(const UECodeGen_Private::FPropertyParamsBase*)&Z_Construct_UFunction_UPhizFunctionLibrary_BlendshapeDataRemap_Statics::NewProp_floatArrayData,
		(const UECodeGen_Private::FPropertyParamsBase*)&Z_Construct_UFunction_UPhizFunctionLibrary_BlendshapeDataRemap_Statics::NewProp_blendshapeData,
		(const UECodeGen_Private::FPropertyParamsBase*)&Z_Construct_UFunction_UPhizFunctionLibrary_BlendshapeDataRemap_Statics::NewProp_ReturnValue,
	};
#if WITH_METADATA
	const UECodeGen_Private::FMetaDataPairParam Z_Construct_UFunction_UPhizFunctionLibrary_BlendshapeDataRemap_Statics::Function_MetaDataParams[] = {
		{ "Category", "Phiz" },
		{ "Comment", "/**\n\x09\x09 * Remap the raw float array data into individual blendshapes' value\n\x09\x09 * @param\x09""blendshapeData  Custom blendshape struct with all blendshapes and values\n\x09\x09 * @return  Return false if the input array and the output blendshape count doesn't match\n\x09\x09 */" },
		{ "DisplayName", "Blendshape Data Remap" },
		{ "ModuleRelativePath", "Public/PhizFunctionLibrary.h" },
		{ "ToolTip", "Remap the raw float array data into individual blendshapes' value\n@param       blendshapeData  Custom blendshape struct with all blendshapes and values\n@return  Return false if the input array and the output blendshape count doesn't match" },
	};
#endif
	const UECodeGen_Private::FFunctionParams Z_Construct_UFunction_UPhizFunctionLibrary_BlendshapeDataRemap_Statics::FuncParams = { (UObject*(*)())Z_Construct_UClass_UPhizFunctionLibrary, nullptr, "BlendshapeDataRemap", nullptr, nullptr, sizeof(Z_Construct_UFunction_UPhizFunctionLibrary_BlendshapeDataRemap_Statics::PhizFunctionLibrary_eventBlendshapeDataRemap_Parms), Z_Construct_UFunction_UPhizFunctionLibrary_BlendshapeDataRemap_Statics::PropPointers, UE_ARRAY_COUNT(Z_Construct_UFunction_UPhizFunctionLibrary_BlendshapeDataRemap_Statics::PropPointers), RF_Public|RF_Transient|RF_MarkAsNative, (EFunctionFlags)0x14422401, 0, 0, METADATA_PARAMS(Z_Construct_UFunction_UPhizFunctionLibrary_BlendshapeDataRemap_Statics::Function_MetaDataParams, UE_ARRAY_COUNT(Z_Construct_UFunction_UPhizFunctionLibrary_BlendshapeDataRemap_Statics::Function_MetaDataParams)) };
	UFunction* Z_Construct_UFunction_UPhizFunctionLibrary_BlendshapeDataRemap()
	{
		static UFunction* ReturnFunction = nullptr;
		if (!ReturnFunction)
		{
			UECodeGen_Private::ConstructUFunction(&ReturnFunction, Z_Construct_UFunction_UPhizFunctionLibrary_BlendshapeDataRemap_Statics::FuncParams);
		}
		return ReturnFunction;
	}
	IMPLEMENT_CLASS_NO_AUTO_REGISTRATION(UPhizFunctionLibrary);
	UClass* Z_Construct_UClass_UPhizFunctionLibrary_NoRegister()
	{
		return UPhizFunctionLibrary::StaticClass();
	}
	struct Z_Construct_UClass_UPhizFunctionLibrary_Statics
	{
		static UObject* (*const DependentSingletons[])();
		static const FClassFunctionLinkInfo FuncInfo[];
#if WITH_METADATA
		static const UECodeGen_Private::FMetaDataPairParam Class_MetaDataParams[];
#endif
		static const FCppClassTypeInfoStatic StaticCppClassTypeInfo;
		static const UECodeGen_Private::FClassParams ClassParams;
	};
	UObject* (*const Z_Construct_UClass_UPhizFunctionLibrary_Statics::DependentSingletons[])() = {
		(UObject* (*)())Z_Construct_UClass_UBlueprintFunctionLibrary,
		(UObject* (*)())Z_Construct_UPackage__Script_Phiz,
	};
	const FClassFunctionLinkInfo Z_Construct_UClass_UPhizFunctionLibrary_Statics::FuncInfo[] = {
		{ &Z_Construct_UFunction_UPhizFunctionLibrary_BlendshapeDataRemap, "BlendshapeDataRemap" }, // 3909522878
	};
#if WITH_METADATA
	const UECodeGen_Private::FMetaDataPairParam Z_Construct_UClass_UPhizFunctionLibrary_Statics::Class_MetaDataParams[] = {
		{ "Comment", "/**\n * \n */" },
		{ "IncludePath", "PhizFunctionLibrary.h" },
		{ "ModuleRelativePath", "Public/PhizFunctionLibrary.h" },
	};
#endif
	const FCppClassTypeInfoStatic Z_Construct_UClass_UPhizFunctionLibrary_Statics::StaticCppClassTypeInfo = {
		TCppClassTypeTraits<UPhizFunctionLibrary>::IsAbstract,
	};
	const UECodeGen_Private::FClassParams Z_Construct_UClass_UPhizFunctionLibrary_Statics::ClassParams = {
		&UPhizFunctionLibrary::StaticClass,
		nullptr,
		&StaticCppClassTypeInfo,
		DependentSingletons,
		FuncInfo,
		nullptr,
		nullptr,
		UE_ARRAY_COUNT(DependentSingletons),
		UE_ARRAY_COUNT(FuncInfo),
		0,
		0,
		0x001000A0u,
		METADATA_PARAMS(Z_Construct_UClass_UPhizFunctionLibrary_Statics::Class_MetaDataParams, UE_ARRAY_COUNT(Z_Construct_UClass_UPhizFunctionLibrary_Statics::Class_MetaDataParams))
	};
	UClass* Z_Construct_UClass_UPhizFunctionLibrary()
	{
		if (!Z_Registration_Info_UClass_UPhizFunctionLibrary.OuterSingleton)
		{
			UECodeGen_Private::ConstructUClass(Z_Registration_Info_UClass_UPhizFunctionLibrary.OuterSingleton, Z_Construct_UClass_UPhizFunctionLibrary_Statics::ClassParams);
		}
		return Z_Registration_Info_UClass_UPhizFunctionLibrary.OuterSingleton;
	}
	template<> PHIZ_API UClass* StaticClass<UPhizFunctionLibrary>()
	{
		return UPhizFunctionLibrary::StaticClass();
	}
	DEFINE_VTABLE_PTR_HELPER_CTOR(UPhizFunctionLibrary);
	struct Z_CompiledInDeferFile_FID_PhizPluginProject_Plugins_Phiz_Source_Phiz_Public_PhizFunctionLibrary_h_Statics
	{
		static const FClassRegisterCompiledInInfo ClassInfo[];
	};
	const FClassRegisterCompiledInInfo Z_CompiledInDeferFile_FID_PhizPluginProject_Plugins_Phiz_Source_Phiz_Public_PhizFunctionLibrary_h_Statics::ClassInfo[] = {
		{ Z_Construct_UClass_UPhizFunctionLibrary, UPhizFunctionLibrary::StaticClass, TEXT("UPhizFunctionLibrary"), &Z_Registration_Info_UClass_UPhizFunctionLibrary, CONSTRUCT_RELOAD_VERSION_INFO(FClassReloadVersionInfo, sizeof(UPhizFunctionLibrary), 2819930400U) },
	};
	static FRegisterCompiledInInfo Z_CompiledInDeferFile_FID_PhizPluginProject_Plugins_Phiz_Source_Phiz_Public_PhizFunctionLibrary_h_973526404(TEXT("/Script/Phiz"),
		Z_CompiledInDeferFile_FID_PhizPluginProject_Plugins_Phiz_Source_Phiz_Public_PhizFunctionLibrary_h_Statics::ClassInfo, UE_ARRAY_COUNT(Z_CompiledInDeferFile_FID_PhizPluginProject_Plugins_Phiz_Source_Phiz_Public_PhizFunctionLibrary_h_Statics::ClassInfo),
		nullptr, 0,
		nullptr, 0);
PRAGMA_ENABLE_DEPRECATION_WARNINGS
