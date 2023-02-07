// This websocket server is a modified version of https://github.com/ljason1993/WebSocketServer-unreal

#pragma once

#include "CoreMinimal.h"
#include "UObject/StrongObjectPtr.h"
#include "GameFramework/Actor.h"

#include "WebSocketNetDriver.h"
#include "INetworkingWebSocket.h"
#include "IWebSocketServer.h"

#include "PhizWebSocketServer.generated.h"

UCLASS()
class PHIZ_API APhizWebSocketServer : public AActor
{
	GENERATED_BODY()

	public:
		// Sets default values for this actor's properties
		APhizWebSocketServer();

	protected:
		// Called when the game starts or when spawned
		virtual void BeginPlay() override;

		virtual void BeginDestroy() override;
	public:
		// Called every frame
		virtual void Tick(float DeltaTime) override;


	public:
		// web client message callback
		UFUNCTION(BlueprintImplementableEvent, Category = "PhizWebSocketServer")
		void OnDataCallback(const FString& addr, const TArray<float>& data);

	public:
		// Open WebSocket Server
		UFUNCTION(BlueprintCallable, Category = "PhizWebSocketServer")
		bool Start(int Port);

		// Close WebSocket Server (The automatic call this func when BeginDestroy)
		UFUNCTION(BlueprintCallable, Category = " PhizWebSocketServer")
		void Stop();

		// It is automatically called in actor tick to maintain the connection of websocket
		bool WebSocketServerTick(float DeltaTime);

		// Returns whether the server is currently running
		UFUNCTION(BlueprintCallable, Category = " PhizWebSocketServer")
			bool IsRunning() const;

		// Callback when a socket is closed
		DECLARE_MULTICAST_DELEGATE_OneParam(FOnConnectionClosed, FGuid /*ClientId*/);
		FOnConnectionClosed& OnConnectionClosed() { return OnConnectionClosedDelegate; }

	private:
		// Handles a new client connecting
		void OnWebSocketClientConnected(INetworkingWebSocket* Socket);

		// Handles sending the received packet to the message router.
		void ReceivedRawPacket(void* Data, int32 Size, FGuid ClientId);

		// Handles a client close
		void OnSocketClose(INetworkingWebSocket* Socket);

		// Decode received data
		void DecodeData(std::string str, std::string delimiter = ",");
	private:
		// Holds a web socket connection to a client.
		class FWebSocketConnection
		{
			public:

				explicit FWebSocketConnection(INetworkingWebSocket* InSocket)
					: Socket(InSocket)
					, Id(FGuid::NewGuid())
				{
				}

				FWebSocketConnection(FWebSocketConnection&& WebSocketConnection)
					: Id(WebSocketConnection.Id)
				{
					Socket = WebSocketConnection.Socket;
					WebSocketConnection.Socket = nullptr;
				}

				~FWebSocketConnection()
				{
					if (Socket)
					{
						delete Socket;
						Socket = nullptr;
					}
				}

				FWebSocketConnection(const FWebSocketConnection&) = delete;
				FWebSocketConnection& operator=(const FWebSocketConnection&) = delete;
				FWebSocketConnection& operator=(FWebSocketConnection&&) = delete;

				// Underlying WebSocket.
				INetworkingWebSocket* Socket = nullptr;

				// Generated ID for this client.
				FGuid Id;
		};



	private:
		// Holds the LibWebSocket wrapper.
		TUniquePtr<IWebSocketServer> Server;

		// Holds all active connections.
		TArray<FWebSocketConnection> Connections;

		// Delegate triggered when a connection is closed
		FOnConnectionClosed OnConnectionClosedDelegate;
};