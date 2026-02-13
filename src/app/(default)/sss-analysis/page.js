"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SSSAnalysis() {
    return (
        <>
            <Header />
            <div role="main" className="main">
                <div className="container py-3">
                    <div className="flex-container justify-content-center">
                        <div
                            className="col text-center appear-animation"
                            data-appear-animation="fadeInUpShorter"
                            data-appear-animation-delay="100"
                        >
                            <h2 className="font-weight-bold mb-3">
                                Student Satisfaction Survey Report
                            </h2>
                            <br />
                        </div>
                        <br />
                        <div className="d-flex flex-row flex-wrap justify-content-center">
                            <div className="p-2">
                                <a href="https://iqac.charusat.ac.in/files/SSS_Analysis_2020-21.pdf">
                                    <button type="button" className="btn btn-primary mb-2">
                                        <h3 className="font-weight-bold mb-2">2020-21</h3>
                                    </button>
                                </a>
                            </div>
                            <div className="p-2">
                                <a href="https://iqac.charusat.ac.in/files/SSS_AQAR_2021-22.pdf">
                                    <button type="button" className="btn btn-primary mb-2">
                                        <h3 className="font-weight-bold mb-2">2021-22</h3>
                                    </button>
                                </a>
                            </div>
                            <div className="p-2">
                                <a href="https://iqac.charusat.ac.in/files/SSS_AQAR_2022-23_S.pdf">
                                    <button type="button" className="btn btn-primary mb-2">
                                        <h3 className="font-weight-bold mb-2">2022-23</h3>
                                    </button>
                                </a>
                            </div>
                            <div className="p-2">
                                <a href="https://iqac.charusat.ac.in/files/SSS_Analysis_2023-24.pdf">
                                    <button type="button" className="btn btn-primary mb-2">
                                        <h3 className="font-weight-bold mb-2">2023-24</h3>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
