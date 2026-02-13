"use client";

export default function Footer() {
    return (
        <footer id="footer">
            <div className="container">
                <div className="footer-ribbon">
                    <span>Get in Touch</span>
                </div>
                <div className="row py-5 my-4">

                    <div className="col-sm-6 mb-4 mb-md-0">
                        <h5 className="text-3 mb-3">IQAC invites feedback/suggestions from all the stakeholders.</h5>

                        <p className="text-4">
                            We value your feedback. Please reach out to us directly via email.
                        </p>
                        <p className="text-4">
                            <a href="mailto:coordinator.iqac@charusat.ac.in" className="btn btn-primary btn-modern">
                                Send Feedback
                            </a>
                        </p>
                    </div>

                    <div className="col-sm-6 mb-4 mb-md-0">
                        <h3 className="text-3 mb-3">CONTACT US</h3>
                        <ul className="list list-icons list-icons-lg">
                            <h4><li className="mb-1"><i className="far fa-dot-circle text-color-primary"></i><p className="m-0">&nbsp;&nbsp;Dr. Mayur Sutaria</p></li></h4>
                            <h4><li className="mb-1"><i className="fa fa-phone text-color-primary"></i><p className="m-0"><a href="tel:+91-2697-265037">&nbsp;&nbsp;+91-2697-265292</a></p></li></h4>
                            <h4><li className="mb-1"><i className="far fa-envelope text-color-primary"></i><p className="m-0"><a href="mailto:coordinator.iqac@charusat.ac.in">&nbsp;&nbsp;coordinator.iqac@charusat.ac.in</a></p></li></h4>
                        </ul>
                    </div>

                </div>
            </div>
        </footer>
    );
}
