#pragma once

#include "PhizTypes.generated.h"

USTRUCT(BlueprintType)
struct FPhizRawData
{
	GENERATED_USTRUCT_BODY()

		UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Phiz")
		TArray<float> Blendshapes = { 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0};

		UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Phiz")
		TArray<float> HeadRotation = { 0,0,0,0 };

		UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Phiz")
		TArray<float> LeftEyeRotation = { 0,0,0,0 };

		UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Phiz")
		TArray<float> RightEyeRotation = { 0,0,0,0 };
};

USTRUCT(BlueprintType)
struct FPhizBlendshapeData
{
	GENERATED_USTRUCT_BODY()

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Phiz")
	TMap<FString, float> blendshapes = {
		{"browInnerUp", 0.0},
		{"browDownLeft", 0.0},
		{"browDownRight", 0.0},
		{"browOuterUpLeft", 0.0},
		{"browOuterUpRight", 0.0},
		{"eyeLookUpLeft", 0.0},
		{"eyeLookUpRight", 0.0},
		{"eyeLookDownLeft", 0.0},
		{"eyeLookDownRight", 0.0},
		{"eyeLookInLeft", 0.0},
		{"eyeLookInRight", 0.0},
		{"eyeLookOutLeft", 0.0},
		{"eyeLookOutRight", 0.0},
		{"eyeBlinkLeft", 0.0},
		{"eyeBlinkRight", 0.0},
		{"eyeSquintLeft", 0.0},
		{"eyeSquintRight", 0.0},
		{"eyeWideLeft", 0.0},
		{"eyeWideRight", 0.0},
		{"cheekPuff", 0.0},
		{"cheekSquintLeft", 0.0},
		{"cheekSquintRight", 0.0},
		{"noseSneerLeft", 0.0},
		{"noseSneerRight", 0.0},
		{"mouthFunnel", 0.0},
		{"mouthPucker", 0.0},
		{"mouthRollUpper", 0.0},
		{"mouthRollLower", 0.0},
		{"mouthShrugUpper", 0.0},
		{"mouthShrugLower", 0.0},
		{"mouthClose", 0.0},
		{"mouthSmileLeft", 0.0},
		{"mouthSmileRight", 0.0},
		{"mouthFrownLeft", 0.0},
		{"mouthFrownRight", 0.0},
		{"mouthDimpleLeft", 0.0},
		{"mouthDimpleRight", 0.0},
		{"mouthUpperUpLeft", 0.0},
		{"mouthUpperUpRight", 0.0},
		{"mouthLowerDownLeft", 0.0},
		{"mouthLowerDownRight", 0.0},
		{"mouthPressLeft", 0.0},
		{"mouthPressRight", 0.0},
		{"mouthStretchLeft", 0.0},
		{"mouthStretchRight", 0.0},
		{"mouthLeft", 0.0},
		{"mouthRight", 0.0},
		{"jawOpen", 0.0},
		{"jawForward", 0.0},
		{"jawLeft", 0.0},
		{"jawRight", 0.0},
		{"tongueOut", 0.0}
	};

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Phiz")
	TArray<FString> blendshapeNames = {
		"browInnerUp",
		"browDownLeft",
		"browDownRight",
		"browOuterUpLeft",
		"browOuterUpRight",
		"eyeLookUpLeft",
		"eyeLookUpRight",
		"eyeLookDownLeft",
		"eyeLookDownRight",
		"eyeLookInLeft",
		"eyeLookInRight",
		"eyeLookOutLeft",
		"eyeLookOutRight",
		"eyeBlinkLeft",
		"eyeBlinkRight",
		"eyeSquintLeft",
		"eyeSquintRight",
		"eyeWideLeft",
		"eyeWideRight",
		"cheekPuff",
		"cheekSquintLeft",
		"cheekSquintRight",
		"noseSneerLeft",
		"noseSneerRight",
		"mouthFunnel",
		"mouthPucker",
		"mouthRollUpper",
		"mouthRollLower",
		"mouthShrugUpper",
		"mouthShrugLower",
		"mouthClose",
		"mouthSmileLeft",
		"mouthSmileRight",
		"mouthFrownLeft",
		"mouthFrownRight",
		"mouthDimpleLeft",
		"mouthDimpleRight",
		"mouthUpperUpLeft",
		"mouthUpperUpRight",
		"mouthLowerDownLeft",
		"mouthLowerDownRight",
		"mouthPressLeft",
		"mouthPressRight",
		"mouthStretchLeft",
		"mouthStretchRight",
		"mouthLeft",
		"mouthRight",
		"jawOpen",
		"jawForward",
		"jawLeft",
		"jawRight",
		"tongueOut"
	};
	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Phiz")
	float browInnerUp = 0.0;
		
	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Phiz")
	float browDownLeft = 0.0;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Phiz")
	float browDownRight = 0.0;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Phiz")
	float browOuterUpLeft = 0.0;
		
	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Phiz")
	float browOuterUpRight = 0.0;
		
	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Phiz")
	float eyeLookUpLeft = 0.0;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Phiz")
	float eyeLookUpRight = 0.0;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Phiz")
	float eyeLookDownLeft = 0.0;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Phiz")
	float eyeLookDownRight = 0.0;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Phiz")
	float eyeLookInLeft = 0.0;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Phiz")
	float eyeLookInRight = 0.0;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Phiz")
	float eyeLookOutLeft = 0.0;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Phiz")
	float eyeLookOutRight = 0.0;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Phiz")
	float eyeBlinkLeft = 0.0;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Phiz")
	float eyeBlinkRight = 0.0;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Phiz")
	float eyeSquintLeft = 0.0;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Phiz")
	float eyeSquintRight = 0.0;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Phiz")
	float eyeWideLeft = 0.0;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Phiz")
	float eyeWideRight = 0.0;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Phiz")
	float cheekPuff = 0.0;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Phiz")
	float cheekSquintLeft = 0.0;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Phiz")
	float cheekSquintRight = 0.0;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Phiz")
	float noseSneerLeft = 0.0;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Phiz")
	float noseSneerRight = 0.0;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Phiz")
	float mouthFunnel = 0.0;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Phiz")
	float mouthPucker = 0.0;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Phiz")
	float mouthRollUpper = 0.0;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Phiz")
	float mouthRollLower = 0.0;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Phiz")
	float mouthShrugUpper = 0.0;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Phiz")
	float mouthShrugLower = 0.0;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Phiz")
	float mouthClose = 0.0;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Phiz")
	float mouthSmileLeft = 0.0;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Phiz")
	float mouthSmileRight = 0.0;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Phiz")
	float mouthFrownLeft = 0.0;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Phiz")
	float mouthFrownRight = 0.0;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Phiz")
	float mouthDimpleLeft = 0.0;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Phiz")
	float mouthDimpleRight = 0.0;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Phiz")
	float mouthUpperUpLeft = 0.0;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Phiz")
	float mouthUpperUpRight = 0.0;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Phiz")
	float mouthLowerDownLeft = 0.0;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Phiz")
	float mouthLowerDownRight = 0.0;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Phiz")
	float mouthPressLeft = 0.0;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Phiz")
	float mouthPressRight = 0.0;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Phiz")
	float mouthStretchLeft = 0.0;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Phiz")
	float mouthStretchRight = 0.0;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Phiz")
	float mouthLeft = 0.0;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Phiz")
	float mouthRight = 0.0;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Phiz")
	float jawOpen = 0.0;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Phiz")
	float jawForward = 0.0;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Phiz")
	float jawLeft = 0.0;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Phiz")
	float jawRight = 0.0;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Phiz")
	float tongueOut = 0.0;
	
	float blendshapeCount = 52;
};

USTRUCT(BlueprintType)
struct FPhizAnimationData {
	GENERATED_USTRUCT_BODY()

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Phiz Struct")
	FPhizBlendshapeData BlendshapeData;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Phiz Struct")
	FRotator HeadRotation = FRotator::ZeroRotator;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Phiz Struct")
	FRotator LeftEyeRotation = FRotator::ZeroRotator;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Phiz Struct")
	FRotator RightEyeRotation = FRotator::ZeroRotator;
};

