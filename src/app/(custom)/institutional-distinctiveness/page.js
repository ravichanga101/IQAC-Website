"use client";

import Link from "next/link";

export default function InstitutionalDistinctiveness() {
    // Ensure the body allows scrolling if the user navigates away, 
    // though the layout handles the class on mount.
    // This page is unique. 

    return (
        <>
            <div
                className="sticky-wrapper sticky-wrapper-transparent sticky-wrapper-border-bottom bg-transparent"
                data-plugin-sticky
                data-plugin-options="{'minWidth': 0, 'stickyStartEffectAt': 1, 'padding': {'top': 0}}"
            >
                <div className="sticky-body">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-9">
                                <div className="py-4">
                                    <Link href="/">
                                        <img
                                            alt="IQAC"
                                            width="82"
                                            height="40"
                                            src="/img/iqac/IQAC_logo.png"
                                            className="img-fluid"
                                        />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-3 text-right">
                                <button
                                    className="hamburguer-btn hamburguer-btn-dark"
                                    data-set-active="false"
                                >
                                    <span className="hamburguer">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <header
                id="header"
                className="side-header-overlay-full-screen side-header-hide pt-0"
                data-plugin-options="{'stickyEnabled': false}"
            >
                <button
                    className="hamburguer-btn hamburguer-btn-dark hamburguer-btn-side-header hamburguer-btn-side-header-overlay active"
                    data-set-active="false"
                >
                    <span className="close">
                        <span></span>
                        <span></span>
                    </span>
                </button>

                <div className="header-body d-flex h-100">
                    <div className="header-column flex-row flex-lg-column justify-content-center h-100">
                        <div className="header-container container d-flex h-100">
                            <div className="header-row header-row-side-header flex-row h-100">
                                <div
                                    className="side-header-scrollable scrollable colored-slider h-50 mt-5"
                                    data-plugin-scrollable
                                >
                                    <div className="scrollable-content">
                                        <div className="header-nav header-nav-light-text header-nav-links header-nav-links-side-header header-nav-links-vertical header-nav-click-to-open align-self-start">
                                            <div className="header-nav-main header-nav-main-square header-nav-main-dropdown-no-borders header-nav-main-effect-4 header-nav-main-sub-effect-1">
                                                <nav>
                                                    <ul className="nav nav-pills" id="mainNav">
                                                        <li>
                                                            <Link className="dropdown-item dropdown-toggle" href="/">
                                                                Home
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div role="main" className="main">
                <section
                    className="section section-scroll bg-light border-0 p-0 m-0"
                    data-section-scroll-title="1"
                    data-section-scroll-header-color="light"
                >
                    <div
                        className="position-absolute w-100 h-100 top-0 left-0 appear-animation"
                        data-appear-animation="fadeIn"
                        data-appear-animation-delay="0"
                        style={{
                            backgroundImage: "url(/img/iqac/ID/Slide1-min.JPG)",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    ></div>
                </section>

                <section
                    className="section section-scroll section-background border-0 m-0"
                    data-section-scroll-title="2"
                    data-section-scroll-header-color="light"
                    style={{
                        backgroundImage: "url(/img/iqac/ID/Slide2-min.JPG)",
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                ></section>

                <section
                    className="section section-scroll section-background border-0 m-0"
                    data-section-scroll-title="3"
                    data-section-scroll-header-color="light"
                    style={{
                        backgroundImage: "url(/img/iqac/ID/Slide3-min.JPG)",
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                ></section>

                <section
                    className="section section-scroll section-background border-0 m-0"
                    data-section-scroll-title="4"
                    data-section-scroll-header-color="light"
                    style={{
                        backgroundImage: "url(/img/iqac/ID/Slide4-min.JPG)",
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                ></section>

                <section
                    className="section section-scroll section-background border-0 m-0"
                    data-section-scroll-title="5"
                    data-section-scroll-header-color="light"
                    style={{
                        backgroundImage: "url(/img/iqac/ID/Slide5-min.JPG)",
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                ></section>

                <section
                    className="section section-scroll section-background border-0 m-0"
                    data-section-scroll-title="6"
                    data-section-scroll-header-color="light"
                    style={{
                        backgroundImage: "url(/img/iqac/ID/Slide6-min.JPG)",
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                ></section>

                <section
                    className="section section-scroll section-background border-0 m-0"
                    data-section-scroll-title="7"
                    data-section-scroll-header-color="light"
                    style={{
                        backgroundImage: "url(/img/iqac/ID/Slide7-min.JPG)",
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                ></section>

                <section
                    className="section section-scroll section-background border-0 m-0"
                    data-section-scroll-title="8"
                    data-section-scroll-header-color="light"
                    style={{
                        backgroundImage: "url(/img/iqac/ID/Slide8-min.JPG)",
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                ></section>

                <section
                    className="section section-scroll section-background border-0 m-0"
                    data-section-scroll-title="9"
                    data-section-scroll-header-color="light"
                    style={{
                        backgroundImage: "url(/img/iqac/ID/Slide9-min.JPG)",
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                ></section>
            </div>
        </>
    );
}
