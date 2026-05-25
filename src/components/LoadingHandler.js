"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function LoadingHandler() {
    const pathname = usePathname();

    useEffect(() => {
        if (typeof window === "undefined") {
            return undefined;
        }

        const removeLoading = () => {
            document.body.classList.remove("loading-overlay-showing");
            const overlay = document.querySelector(".loading-overlay");

            if (overlay) {
                overlay.style.opacity = "0";
                window.setTimeout(() => {
                    overlay.style.display = "none";
                }, 500);
            }
        };

        const initializeThemePlugins = () => {
            const jquery = window.jQuery;
            const theme = window.theme;

            if (!jquery || !theme?.fn) {
                return;
            }

            const runPlugin = (selector, pluginName) => {
                if (!jquery.isFunction(jquery.fn[pluginName])) {
                    return;
                }

                jquery(selector).each(function () {
                    const element = jquery(this);
                    const pluginOptions = theme.fn.getOptions?.(element.data("plugin-options"));
                    element[pluginName](pluginOptions || undefined);
                });
            };

            runPlugin("[data-plugin-scrollable]:not(.manual)", "themePluginScrollable");
            runPlugin("[data-plugin-sticky]:not(.manual)", "themePluginSticky");
            runPlugin("[data-plugin-toggle]:not(.manual)", "themePluginToggle");
            runPlugin("[data-plugin-section-scroll]:not(.manual)", "themePluginSectionScroll");
            runPlugin("[data-appear-animation]:not(.manual)", "themePluginAnimate");
            runPlugin("[data-plugin-revolution-slider]:not(.manual)", "themePluginRevolutionSlider");
        };

        const handleLoad = () => {
            removeLoading();
            initializeThemePlugins();
        };

        const timer = window.setTimeout(handleLoad, 0);

        if (document.readyState !== "complete") {
            window.addEventListener("load", handleLoad);
        }

        return () => {
            window.removeEventListener("load", handleLoad);
            window.clearTimeout(timer);
        };
    }, [pathname]);

    return null;
}
