using UnityEngine;
using Phiz;
using WebSocketSharp.Server;

public class PhizData : MonoBehaviour
{
    public int port = 9912;

    // Start is called before the first frame update
    void Start()
    {
        Phiz.Globals.port = port;
        Globals.wssv = new WebSocketServer("ws://localhost:" + Globals.port);
        Globals.wssv.AddWebSocketService<PhizWebSocket>("/");
        Globals.wssv.Start();
        Debug.Log("Server started");
    }


    // Update is called once per frame
    void Update()
    {

    }
}
