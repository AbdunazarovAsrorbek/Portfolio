import { UAParser } from "ua-parser-js";

const WORKER_URL =
    "https://portfolio-telegram.abdunazarovasror16.workers.dev";
const SESSION_STORAGE_KEY = "portfolio-visitor-session";
let listenersRegistered = false;
let visitStarted = false;

type VisitorEvent = "enter" | "exit";

interface VisitorPayload {
    event: VisitorEvent;
    sessionId: string;

    url: string;
    referrer: string;

    browser: string;
    os: string;
    device: string;

    language: string;
    timezone: string;

    screen: string;
    theme: string;

    online: boolean;

    userAgent: string;
    timestamp: string;

    address?: string;
    coordinates?: string;
    mapsUrl?: string;
}

function getBrowserInfo() {
    const parser = new UAParser();
    const result = parser.getResult();

    return {
        browser: `${result.browser.name ?? "Unknown"} ${result.browser.version?.split(".")[0] ?? ""}`.trim(),
        os: `${result.os.name ?? "Unknown"} ${result.os.version ?? ""}`.trim(),
        device: result.device.type
            ? result.device.type.charAt(0).toUpperCase() + result.device.type.slice(1)
            : "Desktop",
    };
}

async function getLocation() {
    return new Promise<{
        address: string;
        coordinates: string;
        mapsUrl: string;
    }>((resolve) => {
        if (!("geolocation" in navigator)) {
            resolve({
                address: "Geolocation not supported",
                coordinates: "",
                mapsUrl: "",
            });
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;

                resolve({
                    address: "",
                    coordinates: `${latitude}, ${longitude}`,
                    mapsUrl: `https://maps.google.com/?q=${latitude},${longitude}`,
                });
            },
            () => {
                resolve({
                    address: "Permission Denied",
                    coordinates: "",
                    mapsUrl: "",
                });
            },
            {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 0,
            }
        );
    });
}

async function buildPayload(
    event: VisitorEvent,
    sessionId: string,
    timestamp: Date
): Promise<VisitorPayload> {
    const { browser, os, device } = getBrowserInfo();
    const location =
        event === "enter"
            ? await getLocation()
            : {
                address: "",
                coordinates: "",
                mapsUrl: "",
            };
    const language = navigator.language || "unknown";
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || "unknown";
    const screen = `${window.screen.width}x${window.screen.height}`;
    const theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "Dark" : "Light";

    const payload: VisitorPayload = {
        event,
        sessionId,
        url: window.location.href,
        referrer: document.referrer || "Direct",
        language,
        timezone,
        screen,
        browser,
        os,
        device,
        theme,
        userAgent: navigator.userAgent,
        timestamp: timestamp.toLocaleString("en-GB", {
            timeZone: timezone,
        }),
        address: location.address,
        coordinates: location.coordinates,
        mapsUrl: location.mapsUrl,
        online: navigator.onLine,
    };

    return payload;
}

async function sendPayload(payload: VisitorPayload) {
    try {
        const body = JSON.stringify(payload);

        await fetch(WORKER_URL, {
            method: "POST",
            mode: "cors",
            credentials: "omit",
            headers: {
                "Content-Type": "application/json",
            },
            body,
            keepalive: true,
        });
    } catch (error) {
        console.error("Visitor tracking error:", error);
    }
}

export async function sendVisitor() {
    if (typeof window === "undefined") {
        return;
    }

    const existingSession = sessionStorage.getItem(SESSION_STORAGE_KEY);
    let sessionId = "";

    if (existingSession) {
        try {
            const parsed = JSON.parse(existingSession) as {
                sessionId: string;
                startedAt: string;
            };
            sessionId = parsed.sessionId;
        } catch {
            sessionStorage.removeItem(SESSION_STORAGE_KEY);
        }
    }

    if (!sessionId && !visitStarted) {
        // MUHIM: flag va sessionStorage'ni HAR QANDAY await'dan OLDIN, sinxron
        // ravishda o'rnatamiz. Aks holda React StrictMode effectni ikki marta
        // (deyarli bir vaqtda) chaqirganda, ikkinchi chaqiruv ham sessiya
        // hali yozilmagan deb hisoblab, yana bir marta "enter" yuboradi.
        visitStarted = true;

        sessionId = `visitor-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
        const startedAt = new Date();

        sessionStorage.setItem(
            SESSION_STORAGE_KEY,
            JSON.stringify({
                sessionId,
                startedAt: startedAt.toISOString(),
            }),
        );

        const payload = await buildPayload("enter", sessionId, startedAt);
        await sendPayload(payload);
    }

    if (listenersRegistered) {
        return;
    }

    listenersRegistered = true;

    const finalizeVisit = async () => {
        if (!visitStarted) {
            return;
        }

        const savedSession = sessionStorage.getItem(SESSION_STORAGE_KEY);
        if (!savedSession) {
            return;
        }

        try {
            const parsed = JSON.parse(savedSession) as {
                sessionId: string;
                startedAt: string;
            };

            const payload = await buildPayload("exit", parsed.sessionId, new Date());
            await sendPayload(payload);
            sessionStorage.removeItem(SESSION_STORAGE_KEY);
            visitStarted = false;
        } catch {
            sessionStorage.removeItem(SESSION_STORAGE_KEY);
        }
    };

    window.addEventListener("beforeunload", () => {
        void finalizeVisit();
    });

    window.addEventListener("pagehide", () => {
        void finalizeVisit();
    });

    document.addEventListener("visibilitychange", () => {
        if (document.visibilityState === "hidden") {
            void finalizeVisit();
        }
    });
}