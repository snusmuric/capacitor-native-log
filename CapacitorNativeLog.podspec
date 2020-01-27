
  Pod::Spec.new do |s|
    s.name = 'CapacitorNativeLog'
    s.version = '0.0.3'
    s.summary = 'Alternative to Capacitor‘s Console plugin for logging to the native device log console'
    s.license = 'MIT'
    s.homepage = 'https://github.com/Mote-OU/capacitor-native-log'
    s.author = 'Michael Lawlor'
    s.source = { :git => 'https://github.com/Mote-OU/capacitor-native-log', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
  end