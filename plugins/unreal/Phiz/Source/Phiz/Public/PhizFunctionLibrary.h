// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "Kismet/BlueprintFunctionLibrary.h"

#include "INetworkingWebSocket.h"
#include "IWebSocketServer.h"
#include "UObject/StrongObjectPtr.h"
#include "WebSocketNetDriver.h"

#include "PhizTypes.h"
#include "PhizFunctionLibrary.generated.h"

/**
 * 
 */
UCLASS()
class PHIZ_API UPhizFunctionLibrary : public UBlueprintFunctionLibrary
{
	GENERATED_BODY()

		public:

		/**
		 * Remap the raw float array data into individual blendshapes' value
		 * @param	blendshapeData  Custom blendshape struct with all blendshapes and values
		 * @return  Return false if the input array and the output blendshape count doesn't match
		 */
		UFUNCTION(BlueprintPure, Category = "Phiz", meta = (DisplayName = "Blendshape Data Remap"))
		static bool BlendshapeDataRemap(const TArray<float> floatArrayData, FPhizBlendshapeData& blendshapeData);
};
