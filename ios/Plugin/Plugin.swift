import Foundation
import os.log
import Capacitor

extension OSLog {
//    private static var subsystem = Bundle.main.bundleIdentifier!
    private static var subsystem = "app.play-time"
    private static var category = "CAPNativeLog"
}

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitor.ionicframework.com/docs/plugins/ios
 */
@objc(CAPNativeLog)
public class CAPNativeLog: CAPPlugin {
    @objc func log(_ call: CAPPluginCall) {
        NSLog("CAPNativeLog NSLog")
        os_log("CAPNativeLog os_log", log: OSLog.default, type: OSLogType.error)
        let message = call.getString("message") ?? ""
        let level = call.getString("level") ?? "debug"
        writeToLog(level: level, message: message)
    }
    
    internal func writeToLog(level: String, message: String) {
        NSLog("CAPNativeLog writeToLog [\(level)] - \(message)")
        let type: OSLogType
        switch level.lowercased() {
            case "debug":
                type = OSLogType.debug
            case "info":
                type = OSLogType.info
            case "warn":
                type = OSLogType.error
            case "error":
                type = OSLogType.fault
            default:
                type = OSLogType.default
        }
        os_log("%{public}@", log: OSLog.default, type: type, message)
    }
}
