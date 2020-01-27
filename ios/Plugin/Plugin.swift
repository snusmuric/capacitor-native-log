import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitor.ionicframework.com/docs/plugins/ios
 */
@objc(CAPNativeLog)
public class CAPNativeLog: CAPPlugin {
    enum LogLevels: String {
        case debug = "DEBUG"
        case info = "INFO"
        case warn = "WARN"
        case error = "ERROR"
    }
    
    @objc func log(_ call: CAPPluginCall) {
        let message = call.getString("message") ?? ""
        let level = call.getString("level") ?? LogLevels.debug.rawValue
        guard let logLevel = LogLevels(rawValue: level.uppercased()) else {
            call.reject("Invalid log level: \(level)")
            return
        }
        writeToLog(level: logLevel.rawValue, message: message)
    }
    
    @objc internal func writeToLog(level: String, message: String) {
        NSLog("[\(level)] - \(message)")
    }
}
