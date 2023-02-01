using VVVV_OSC;
using WebSocketSharp;
using WebSocketSharp.Server;

namespace Phiz
{
    public static class Globals
    {
        public static int port = 9912;
        public static WebSocketServer wssv = null;
        public static float[] blendshapes = new float[52];
        public static float[] headRotation = new float[4];
        public static float[] leftEyeRotation = new float[4];
        public static float[] rightEyeRotation = new float[4];
    }

    public class PhizWebSocket : WebSocketBehavior
    {
        protected override void OnMessage(MessageEventArgs e)
        {
            if (e.IsBinary)
            {
                OSCPacket msg = OSCPacket.Unpack(e.RawData);
                switch (msg.Address)
                {
                    case "/phiz/blendshapes":
                        msg.Values.ToArray(typeof(float)).CopyTo(Globals.blendshapes, 0);
                        break;
                    case "/phiz/headRotation":
                        msg.Values.ToArray(typeof(float)).CopyTo(Globals.headRotation, 0);
                        break;
                    case "/phiz/leftEyeRotation":
                        msg.Values.ToArray(typeof(float)).CopyTo(Globals.leftEyeRotation, 0);
                        break;
                    case "/phiz/rightEyeRotation":
                        msg.Values.ToArray(typeof(float)).CopyTo(Globals.rightEyeRotation, 0);
                        break;
                }
            }
        }
    }
}