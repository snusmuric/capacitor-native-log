package host.mote.capacitornativelog;

import android.util.Log;

import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;

@NativePlugin()
public class CAPNativeLog extends Plugin {

    private static final String TAG = "CAPNativeLog";

    @PluginMethod()
    public void log(PluginCall call) {
        String message = call.getString("message");
        String level = call.getString("level");

        switch (level.toLowerCase()) {
            case "info":
                Log.i(TAG, message);
                break;
            case "warn":
                Log.w(TAG, message);
                break;
            case "error":
                Log.e(TAG, message);
                break;
            default:
                Log.d(TAG, message);
                break;
        }
    }
}
