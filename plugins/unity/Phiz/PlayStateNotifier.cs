using UnityEngine;
using UnityEditor;


namespace Phiz
{
    [InitializeOnLoad]
    public static class PlayStateNotifier
    {

        static PlayStateNotifier()
        {
            EditorApplication.playModeStateChanged += ModeChanged;
        }

        static void ModeChanged(PlayModeStateChange playModeState)
        {
            if (playModeState == PlayModeStateChange.EnteredPlayMode)
            {

                //Debug.Log("Entered play mode");
            }
            else if (playModeState == PlayModeStateChange.ExitingPlayMode)
            {
                Globals.wssv.Stop();
                Debug.Log("Server stopped");
                //Debug.Log("Exiting play mode");
            }
        }
    }
}
