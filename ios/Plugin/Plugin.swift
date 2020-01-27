import Foundation
import os.log
import Capacitor

@objc(CAPNativeLog)
public class CAPNativeLog: CAPPlugin {
    static var logTarget = OSLog(subsystem: Bundle.main.bundleIdentifier!, category: "CAPNativeLog")
    
    @objc func log(_ call: CAPPluginCall) {
        let message = call.getString("message") ?? ""
        let level = call.getString("level") ?? "debug"
        writeToLog(level: level, message: message)
    }
    
    internal func writeToLog(level: String, message: String) {
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
        os_log("%{public}@", log: CAPNativeLog.logTarget, type: type, message)
    }
}
