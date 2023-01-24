// Fill out your copyright notice in the Description page of Project Settings.


#include "PhizFunctionLibrary.h"

bool UPhizFunctionLibrary::BlendshapeDataRemap(TArray<float> floatArrayData, FPhizBlendshapeData& blendshapeData) {

	// make sure we dont access unassigned array
	int count = FMath::Min(floatArrayData.Num(), blendshapeData.blendshapeCount);
	// modify the values in map
	for (int i = 0; i < count; i++) {
		blendshapeData.blendshapes.Add(blendshapeData.blendshapeNames[i], floatArrayData[i]);
	}
	// c++ doesn't allow call struct member by string so we can only assign them one by one
	// if float array data is supplied, use the value, otherwise assign 0;
	blendshapeData.browInnerUp = 0 < count ? floatArrayData[0] : 0.0;
	blendshapeData.browDownLeft = 1 < count ? floatArrayData[1] : 0.0;
	blendshapeData.browDownRight = 2 < count ? floatArrayData[2] : 0.0;
	blendshapeData.browOuterUpLeft = 3 < count ? floatArrayData[3] : 0.0;
	blendshapeData.browOuterUpRight = 4 < count ? floatArrayData[4] : 0.0;
	blendshapeData.eyeLookUpLeft = 5 < count ? floatArrayData[5] : 0.0;
	blendshapeData.eyeLookUpRight = 6 < count ? floatArrayData[6] : 0.0;
	blendshapeData.eyeLookDownLeft = 7 < count ? floatArrayData[7] : 0.0;
	blendshapeData.eyeLookDownRight = 8 < count ? floatArrayData[8] : 0.0;
	blendshapeData.eyeLookInLeft = 9 < count ? floatArrayData[9] : 0.0;
	blendshapeData.eyeLookInRight = 10 < count ? floatArrayData[10] : 0.0;
	blendshapeData.eyeLookOutLeft = 11 < count ? floatArrayData[11] : 0.0;
	blendshapeData.eyeLookOutRight = 12 < count ? floatArrayData[12] : 0.0;
	blendshapeData.eyeBlinkLeft = 13 < count ? floatArrayData[13] : 0.0;
	blendshapeData.eyeBlinkRight = 14 < count ? floatArrayData[14] : 0.0;
	blendshapeData.eyeSquintLeft = 15 < count ? floatArrayData[15] : 0.0;
	blendshapeData.eyeSquintRight = 16 < count ? floatArrayData[16] : 0.0;
	blendshapeData.eyeWideLeft = 17 < count ? floatArrayData[17] : 0.0;
	blendshapeData.eyeWideRight = 18 < count ? floatArrayData[18] : 0.0;
	blendshapeData.cheekPuff = 19 < count ? floatArrayData[19] : 0.0;
	blendshapeData.cheekSquintLeft = 20 < count ? floatArrayData[20] : 0.0;
	blendshapeData.cheekSquintRight = 21 < count ? floatArrayData[21] : 0.0;
	blendshapeData.noseSneerLeft = 22 < count ? floatArrayData[22] : 0.0;
	blendshapeData.noseSneerRight = 23 < count ? floatArrayData[23] : 0.0;
	blendshapeData.mouthFunnel = 24 < count ? floatArrayData[24] : 0.0;
	blendshapeData.mouthPucker = 25 < count ? floatArrayData[25] : 0.0;
	blendshapeData.mouthRollUpper = 26 < count ? floatArrayData[26] : 0.0;
	blendshapeData.mouthRollLower = 27 < count ? floatArrayData[27] : 0.0;
	blendshapeData.mouthShrugUpper = 28 < count ? floatArrayData[28] : 0.0;
	blendshapeData.mouthShrugLower = 29 < count ? floatArrayData[29] : 0.0;
	blendshapeData.mouthClose = 30 < count ? floatArrayData[30] : 0.0;
	blendshapeData.mouthSmileLeft = 31 < count ? floatArrayData[31] : 0.0;
	blendshapeData.mouthSmileRight = 32 < count ? floatArrayData[32] : 0.0;
	blendshapeData.mouthFrownLeft = 33 < count ? floatArrayData[33] : 0.0;
	blendshapeData.mouthFrownRight = 34 < count ? floatArrayData[34] : 0.0;
	blendshapeData.mouthDimpleLeft = 35 < count ? floatArrayData[35] : 0.0;
	blendshapeData.mouthDimpleRight = 36 < count ? floatArrayData[36] : 0.0;
	blendshapeData.mouthUpperUpLeft = 37 < count ? floatArrayData[37] : 0.0;
	blendshapeData.mouthUpperUpRight = 38 < count ? floatArrayData[38] : 0.0;
	blendshapeData.mouthLowerDownLeft = 39 < count ? floatArrayData[39] : 0.0;
	blendshapeData.mouthLowerDownRight = 40 < count ? floatArrayData[40] : 0.0;
	blendshapeData.mouthPressLeft = 41 < count ? floatArrayData[41] : 0.0;
	blendshapeData.mouthPressRight = 42 < count ? floatArrayData[42] : 0.0;
	blendshapeData.mouthStretchLeft = 43 < count ? floatArrayData[43] : 0.0;
	blendshapeData.mouthStretchRight = 44 < count ? floatArrayData[44] : 0.0;
	blendshapeData.mouthLeft = 45 < count ? floatArrayData[45] : 0.0;
	blendshapeData.mouthRight = 46 < count ? floatArrayData[46] : 0.0;
	blendshapeData.jawOpen = 47 < count ? floatArrayData[47] : 0.0;
	blendshapeData.jawForward = 48 < count ? floatArrayData[48] : 0.0;
	blendshapeData.jawLeft = 49 < count ? floatArrayData[49] : 0.0;
	blendshapeData.jawRight = 50 < count ? floatArrayData[50] : 0.0;
	blendshapeData.tongueOut = 51 < count ? floatArrayData[51] : 0.0;


	return (floatArrayData.Num() == blendshapeData.blendshapeCount);
}