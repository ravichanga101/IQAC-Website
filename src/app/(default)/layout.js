import { Open_Sans, Shadows_Into_Light, Playfair_Display } from "next/font/google";
import Script from "next/script";
import LoadingHandler from "@/components/LoadingHandler";
import "../globals.css";

// Configure fonts to match original: Open Sans:300,400,600,700,800 | Shadows Into Light | Playfair Display:400
const openSans = Open_Sans({
    subsets: ["latin"],
    weight: ["300", "400", "600", "700", "800"],
    variable: "--font-open-sans",
    display: "swap",
});

const shadowsIntoLight = Shadows_Into_Light({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-shadows-into-light",
    display: "swap",
});

const playfairDisplay = Playfair_Display({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-playfair-display",
    display: "swap",
});

export const metadata = {
    title: "IQAC - CHARUSAT",
    description: "IQAC - CHARUSAT Page",
    keywords: "IQAC, CHARUSAT",
    authors: [{ name: "IQAC, CHARUSAT" }],
    icons: {
        icon: "/img/iqac/IQAC_logo.png",
        apple: "/img/apple-touch-icon.png",
    },
};

export const viewport = {
    width: "device-width",
    initialScale: 1,
    minimumScale: 1,
    shrinkToFit: "no",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning className={`${openSans.variable} ${shadowsIntoLight.variable} ${playfairDisplay.variable} side-header side-header-disable-offcanvas`}>
            <head>
                {/* Vendor CSS */}
                <link rel="stylesheet" href="/vendor/bootstrap/css/bootstrap.min.css" />
                <link rel="stylesheet" href="/vendor/fontawesome-free/css/all.min.css" />
                <link rel="stylesheet" href="/vendor/animate/animate.min.css" />
                <link rel="stylesheet" href="/vendor/simple-line-icons/css/simple-line-icons.min.css" />
                <link rel="stylesheet" href="/vendor/owl.carousel/assets/owl.carousel.min.css" />
                <link rel="stylesheet" href="/vendor/owl.carousel/assets/owl.theme.default.min.css" />
                <link rel="stylesheet" href="/vendor/magnific-popup/magnific-popup.min.css" />

                {/* Theme CSS */}
                <link rel="stylesheet" href="/css/theme.css" />
                <link rel="stylesheet" href="/css/theme-elements.css" />
                <link rel="stylesheet" href="/css/theme-blog.css" />
                <link rel="stylesheet" href="/css/theme-shop.css" />

                {/* Current Page CSS */}
                <link rel="stylesheet" href="/vendor/rs-plugin/css/settings.css" />
                <link rel="stylesheet" href="/vendor/rs-plugin/css/layers.css" />
                <link rel="stylesheet" href="/vendor/rs-plugin/css/navigation.css" />

                {/* Skin CSS */}
                <link rel="stylesheet" href="/css/skins/skin-corporate-12.css" />

                {/* Theme Custom CSS */}
                <link rel="stylesheet" href="/css/custom.css" />

                {/* Head Libs - loading modernizr early as in original */}
                <Script src="/vendor/modernizr/modernizr.min.js" strategy="beforeInteractive" />
            </head>
            <body suppressHydrationWarning className="loading-overlay-showing" data-plugin-page-transition data-loading-overlay data-plugin-options="{'hideDelay': 500}">
                <LoadingHandler />
                <div className="loading-overlay">
                    <div className="bounce-loader">
                        <div className="bounce1"></div>
                        <div className="bounce2"></div>
                        <div className="bounce3"></div>
                    </div>
                </div>
                <div className="body">
                    {children}
                </div>

                {/* Vendor Scripts - loaded at end of body in original */}
                <Script src="/vendor/jquery/jquery.min.js" strategy="beforeInteractive" />
                <Script src="/vendor/jquery.appear/jquery.appear.min.js" strategy="afterInteractive" />
                <Script src="/vendor/jquery.easing/jquery.easing.min.js" strategy="afterInteractive" />
                <Script src="/vendor/jquery.cookie/jquery.cookie.min.js" strategy="afterInteractive" />
                <Script src="/vendor/popper/umd/popper.min.js" strategy="afterInteractive" />
                <Script src="/vendor/bootstrap/js/bootstrap.min.js" strategy="afterInteractive" />
                <Script src="/vendor/common/common.min.js" strategy="afterInteractive" />
                <Script src="/vendor/jquery.validation/jquery.validate.min.js" strategy="afterInteractive" />
                <Script src="/vendor/jquery.easy-pie-chart/jquery.easypiechart.min.js" strategy="afterInteractive" />
                <Script src="/vendor/jquery.gmap/jquery.gmap.min.js" strategy="afterInteractive" />
                <Script src="/vendor/jquery.lazyload/jquery.lazyload.min.js" strategy="afterInteractive" />
                <Script src="/vendor/isotope/jquery.isotope.min.js" strategy="afterInteractive" />
                <Script src="/vendor/owl.carousel/owl.carousel.min.js" strategy="afterInteractive" />
                <Script src="/vendor/magnific-popup/jquery.magnific-popup.min.js" strategy="afterInteractive" />
                <Script src="/vendor/vide/jquery.vide.min.js" strategy="afterInteractive" />
                <Script src="/vendor/vivus/vivus.min.js" strategy="afterInteractive" />
                <Script src="/vendor/nanoscroller/jquery.nanoscroller.min.js" strategy="afterInteractive" />

                {/* Theme Base, Components and Settings */}
                <Script src="/js/theme.js" strategy="afterInteractive" />

                {/* Current Page Vendor and Views - Revolution Slider */}
                <Script src="/vendor/rs-plugin/js/jquery.themepunch.tools.min.js" strategy="afterInteractive" />
                <Script src="/vendor/rs-plugin/js/jquery.themepunch.revolution.min.js" strategy="afterInteractive" />

                {/* Theme Custom */}
                <Script src="/js/custom.js" strategy="afterInteractive" />

                {/* Theme Initialization Files */}
                <Script src="/js/theme.init.js" strategy="afterInteractive" />
            </body>
        </html>
    );
}
