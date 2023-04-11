using UnityEngine;
using WebSocketSharp;
using WebSocketSharp.Server;
using System.Collections.Generic;

namespace Phiz
{
    public class PhizServer
    {
        private WebSocketServer wssv;
        public bool autoStartServer = false;

        private float[] _blendshapes = new float[52];
        private float[] _headRotation = new float[4];
        private float[] _leftEyeRotation = new float[4];
        private float[] _rightEyeRotation = new float[4];
        private float[] _webVersion = new float[3];
        private float[] _pluginVersion = new float[3] { 0, 3, 1 };
        public static readonly string[] blendshapeNames ={
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

        public PhizServer()
        {
        }

        public void StartServer(int port)
        {
            wssv = new WebSocketServer("ws://localhost:" + port);
            wssv.AddWebSocketService<PhizWebSocket>("/", () => new PhizWebSocket(this));
            wssv.Start();
            Debug.Log("Phiz websocket server started");
        }

        public void StopServer()
        {
            wssv.Stop();
            Debug.Log("Phiz websocket server stopped");
        }

        public float[] blendshapes
        {
            get { return _blendshapes; }
        }

        public float[] headRotation
        {
            get { return _headRotation; }
        }

        public float[] leftEyeRotation
        {
            get { return _leftEyeRotation; }
        }

        public float[] rightEyeRotation
        {
            get { return _rightEyeRotation; }
        }

        public float[] webVersion
        {
            get { return _webVersion; }
        }

        public float[] pluginVersion
        {
            get { return _pluginVersion; }
        }

        private class PhizWebSocket : WebSocketBehavior
        {
            private PhizServer _phizServer;
            private bool _versionWarning = false;

            public PhizWebSocket(PhizServer phizServer)
            {
                _phizServer = phizServer;
            }


            protected override void OnMessage(MessageEventArgs e)
            {
                if (e.IsBinary)
                {
                    OSCMessage msg = OSCParser.ParseOSCBytesToMessage(e.RawData);
                    switch (msg.Address)
                    {
                        case "/phiz/blendshapes":
                            ValuesToFloatArray(msg.Values).CopyTo(_phizServer._blendshapes, 0);
                            break;
                        case "/phiz/headRotation":
                            ValuesToFloatArray(msg.Values).CopyTo(_phizServer._headRotation, 0);
                            break;
                        case "/phiz/leftEyeRotation":
                            ValuesToFloatArray(msg.Values).CopyTo(_phizServer._leftEyeRotation, 0);
                            break;
                        case "/phiz/rightEyeRotation":
                            ValuesToFloatArray(msg.Values).CopyTo(_phizServer._rightEyeRotation, 0);
                            break;
                        case "/phiz/version":
                            ValuesToFloatArray(msg.Values).CopyTo(_phizServer._webVersion, 0);
                            if (!_versionWarning && (_phizServer._webVersion[0] != _phizServer._pluginVersion[0]
                            || _phizServer._webVersion[1] != _phizServer._pluginVersion[1]
                            || _phizServer._webVersion[2] != _phizServer._pluginVersion[2]))
                            {
                                Debug.LogWarning("Phiz plugin version (" + _phizServer._pluginVersion[0] + "." + _phizServer._pluginVersion[1] + "." + _phizServer._pluginVersion[2] + ") does not match web version (" + _phizServer._webVersion[0] + "." + _phizServer._webVersion[1] + "." + _phizServer._webVersion[2] + ")");
                                _versionWarning = true;
                            }
                            break;
                    }
                }
            }

            float[] ValuesToFloatArray(List<OSCValue> values)
            {
                float[] floatArray = new float[values.Count];
                for (int i = 0; i < values.Count; i++)
                {
                    if (values[i].Type == OSCValue.ValueType.Float || values[i].Type == OSCValue.ValueType.Integer)
                    {
                        floatArray[i] = values[i].Type == OSCValue.ValueType.Float ? values[i].FloatValue : values[i].IntValue;
                    }
                    else
                    {
                        //Debug.LogError("Invalid value type in ValuesToFloatArray: " + values[i].Type);
                    }
                }
                return floatArray;
            }

            string ValuesToString(List<OSCValue> values)
            {
                if (values.Count == 1 && values[0].Type == OSCValue.ValueType.String)
                {
                    return values[0].StringValue;
                }
                else
                {
                    //Debug.LogError("Invalid values in ValuesToString");
                    return null;
                }
            }
        }
    }
}