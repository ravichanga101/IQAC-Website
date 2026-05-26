import { Open_Sans, Shadows_Into_Light } from "next/font/google";
import Script from "next/script";
import LoadingHandler from "@/components/LoadingHandler";
import "../globals.css";


// Fonts matching inst_distinct.html
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

export default function CustomLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning className={`${openSans.variable} ${shadowsIntoLight.variable} disable-onload-scroll side-header-overlay-full-screen overflow-hidden`}>
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

                {/* Skin CSS - Using default.css as in inst_distinct.html */}
                <link rel="stylesheet" href="/css/skins/default.css" />

                {/* Theme Custom CSS */}
                <link rel="stylesheet" href="/css/custom.css" />

                {/* Head Libs */}
                <Script src="/vendor/modernizr/modernizr.min.js" strategy="beforeInteractive" />
            </head>
            <body className="loading-overlay-showing" data-loading-overlay data-plugin-section-scroll data-plugin-options="{'targetClass': '.section-scroll', 'dotsClass': 'section-scroll-dots-navigation-style-2 section-scroll-dots-navigation-dark', 'changeHeaderLogo': true, 'headerLogoDark': 'img/logo-default-slim.png', 'headerLogoLight': 'img/logo-default-slim-dark.png'}">
                <LoadingHandler />
                <div className="loading-overlay">
                    <div className="bounce-loader">
                        <div className="bounce1"></div>
                        <div className="bounce2"></div>
                        <div className="bounce3"></div>
                    </div>
                </div>
                <div className="body bg-dark">
                    {children}
                </div>

                {/* Vendor Scripts */}
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

                {/* Theme Base */}
                <Script src="/js/theme.js" strategy="afterInteractive" />

                {/* Current Page Vendor - Revolution Slider */}
                <Script src="/vendor/rs-plugin/js/jquery.themepunch.tools.min.js" strategy="afterInteractive" />
                <Script src="/vendor/rs-plugin/js/jquery.themepunch.revolution.min.js" strategy="afterInteractive" />

                {/* Custom */}
                <Script src="/js/custom.js" strategy="afterInteractive" />

                {/* Init */}
                <Script src="/js/theme.init.js" strategy="afterInteractive" />
            </body>
        </html>
    );
}
