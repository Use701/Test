function collectDeviceData() {
    const deviceData = {
        // Screen / browser window
        screenWidth: window.screen.width,
        screenHeight: window.screen.height,
        availableScreenWidth: window.screen.availWidth,
        availableScreenHeight: window.screen.availHeight,
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
        pixelRatio: window.devicePixelRatio,

        // Browser
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        language: navigator.language,
        languages: navigator.languages,

        // Device/browser capabilities
        cookiesEnabled: navigator.cookieEnabled,
        online: navigator.onLine,
        hardwareConcurrency: navigator.hardwareConcurrency,
        deviceMemory: navigator.deviceMemory || "Not available",
        maxTouchPoints: navigator.maxTouchPoints,

        // Location/time settings
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        timezoneOffset: new Date().getTimezoneOffset(),

        // Page information
        pageURL: window.location.href,
        referrer: document.referrer,

        // Current time
        collectedAt: new Date().toISOString()
    };

    console.log("Device information:", deviceData);

    return deviceData;
}

collectDeviceData();
