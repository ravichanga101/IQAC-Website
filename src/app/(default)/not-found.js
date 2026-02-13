import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function NotFound() {
    return (
        <>
            <Header />
            <div role="main" className="main">
                <section className="page-header page-header-classic">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <ul className="breadcrumb">
                                    <li>
                                        <Link href="/">Home</Link>
                                    </li>
                                    <li className="active">Pages</li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col p-static">
                                <h1 data-title-border>404 - Page Not Found</h1>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container">
                    <section className="http-error">
                        <div className="row justify-content-center py-3">
                            <div className="col-md-7 text-center">
                                <div className="http-error-main">
                                    <h2>404!</h2>
                                    <p>
                                        We're sorry, but the page you were looking for doesn't exist.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4 mt-4 mt-md-0">
                                <h4 className="text-primary">Here are some useful links</h4>
                                <ul className="nav nav-list flex-column">
                                    <li className="nav-item">
                                        <Link className="nav-link" href="/">
                                            Home
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" href="/about">
                                            About Us
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" href="/faq">
                                            FAQ's
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" href="/sitemap">
                                            Sitemap
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" href="/contact">
                                            Contact Us
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </>
    );
}
