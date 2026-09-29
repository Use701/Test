// A conceptual look at how scripts gather device details
function collectDeviceData() {
    const deviceFingerprint = {
        // Reads your exact inner screen dimensions
        screenHeight: window.innerHeight,
        screenWidth: window.innerWidth,
        
        // Reads the exact operating system and browser version string
        browserInfo: navigator.userAgent,
        
        // Reads the language and timezone of your machine
        language: navigator.language,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
    };
    
    // In a tracking scenario, this data is sent back to a server to log you
    console.log("Device profile collected:", deviceFingerprint);
}
