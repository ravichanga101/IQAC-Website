"use client";

import { useEffect } from "react";

export default function LoadingHandler() {
    useEffect(() => {
        // Attempt to remove loading overlay logic gracefully first
        if (typeof window !== "undefined") {
            // Force remove the class from body
            const removeLoading = () => {
                document.body.classList.remove("loading-overlay-showing");
                const overlay = document.querySelector(".loading-overlay");
                if (overlay) {
                    overlay.style.opacity = "0";
                    setTimeout(() => {
                        overlay.style.display = "none";
                    }, 500);
                }
            };

            // Run immediately if document is ready
            if (document.readyState === "complete") {
                removeLoading();
            } else {
                window.addEventListener("load", removeLoading);
            }

            // Backup timer in case load event fired before hydration or listener attachment
            const timer = setTimeout(removeLoading, 1000);

            return () => {
                window.removeEventListener("load", removeLoading);
                clearTimeout(timer);
            };
        }
    }, []);

    return null;
}
