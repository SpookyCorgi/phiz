using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Phiz;

public class Testing : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {

    }

    // Update is called once per frame
    void Update()
    {
        Debug.Log(Phiz.Globals.headRotation[0] + " " + Phiz.Globals.headRotation[1] + " " + Phiz.Globals.headRotation[2] + " " + Phiz.Globals.headRotation[3]);
    }
}
