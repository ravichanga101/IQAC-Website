"use client";

import SiteFrame from "@/features/site-shell/SiteFrame";

export default function BestPractices() {
    return (
        <SiteFrame>
            <div className="container py-3">
                <div className="row justify-content-center mt-5">
                    <div
                        className="col-12 col-lg-10 appear-animation text-4"
                        data-appear-animation="fadeInUpShorter"
                        data-appear-animation-delay="100"
                    >
                        <h2 className="font-weight-bold mb-4 text-center">
                            University&apos;s Best Practices
                        </h2>
                    </div>
                    <div>
                        <img
                            src="/img/Best_Practices.png"
                            alt="Best Practices"
                            className="img-fluid appear-animation"
                            data-appear-animation="fadeInUpShorter"
                            data-appear-animation-delay="200"
                        />
                    </div>
                </div>
            </div>
        </SiteFrame>
    );
}
