async function collectAndSendVisitorInfo(name) {
    const visitorInfo = {
        name: name,
        screenWidth: screen.width,
        screenHeight: screen.height,
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
        devicePixelRatio: window.devicePixelRatio,
        browser: navigator.userAgent,
        platform: navigator.platform,
        language: navigator.language,
        languages: navigator.languages,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        timezoneOffset: new Date().getTimezoneOffset(),
        cookiesEnabled: navigator.cookieEnabled,
        online: navigator.onLine,
        cpuThreads: navigator.hardwareConcurrency || "Unavailable",
        touchPoints: navigator.maxTouchPoints,
        page: window.location.href,
        referrer: document.referrer,
        visitedAt: new Date().toISOString()
    };

    const response = await fetch("/collect", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(visitorInfo)
    });

    const result = await response.json();

    console.log("Information sent:", result);
}
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
