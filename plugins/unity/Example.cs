using UnityEngine;
using System;
using Phiz;

public class Example : MonoBehaviour
{
    PhizServer server1, server2;

    void Start()
    {
        // Start two servers on different ports
        server1 = new PhizServer();
        server1.StartServer(9912);
        server2 = new PhizServer();
        server2.StartServer(9913);
    }

    // Update is called once per frame
    void Update()
    {
        //using the helper array to get index by blendshape name
        int jawOpenIndex = Array.IndexOf(PhizServer.blendshapeNames, "jawOpen");
        //getting the value of the blendshape
        float jawOpenValue1 = server1.blendshapes[jawOpenIndex];
        float jawOpenValue2 = server2.blendshapes[jawOpenIndex];
        Debug.Log("jawOpen1: " + jawOpenValue1 + " jawOpen2: " + jawOpenValue2);
    }

    void OnDestroy()
    {
        // stop the servers on play mode exit
        // since normally unity with resets everything on play anyway
        server1.StopServer();
        server2.StopServer();
    }
}
