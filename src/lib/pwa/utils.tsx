/* eslint-disable unicorn/better-regex */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
"use client";

import { useEffect, useState } from "react";

function InstallPrompt() {
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the device is iOS
    const ua = navigator.userAgent || navigator.vendor || (window as any).opera;
    const isIOSDevice = /iPad|iPhone|iPod/.test(ua) && !("MSStream" in window);
    setIsIOS(isIOSDevice);

    // Check if the app is running in standalone mode
    const isInStandaloneMode =
      window.matchMedia("(display-mode: standalone)").matches ||
      (navigator as any).standalone;
    setIsStandalone(isInStandaloneMode);

    // Check if it's a mobile device
    const isMobileDevice =
      /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(ua);
    setIsMobile(isMobileDevice);
  }, []);

  // Return null if the app is already installed or if it's not a mobile device
  if (isStandalone || !isMobile) {
    return;
  }

  return (
    <section className="fixed bottom-0 left-0 z-[999] flex w-full items-center justify-center bg-background p-4 text-center">
      <p className="text-sm font-bold text-primary lg:text-lg">
        Install App
        {isIOS && (
          <>
            &nbsp;&#128073;
            <span className="text-mid-danger lg:ml-5">
              Tap the share button ⎋ and "Add to Home Screen" ➕
            </span>
          </>
        )}
      </p>
    </section>
  );
}

export default InstallPrompt;
