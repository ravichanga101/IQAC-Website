"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();

    // Helper to determine active state
    const isActive = (path) => pathname === path ? "active" : "";

    return (
        <header id="header" className="side-header d-flex">
            <div className="header-body">
                <div className="header-container container d-flex h-100">
                    <div className="header-column flex-row flex-lg-column justify-content-center h-100">
                        <div className="header-row flex-row justify-content-start justify-content-lg-center py-lg-5">
                            <div className="header-logo">
                                <Link href="/">
                                    <img alt="iqac" width="100%" height="50%" src="/img/iqac/IQAC Logo-min.jpg" />
                                </Link>
                            </div>
                        </div>
                        <div className="header-row header-row-side-header flex-row h-100 pb-lg-5">
                            <div className="side-header-scrollable scrollable colored-slider" data-plugin-scrollable>
                                <div className="scrollable-content">
                                    <div className="header-nav header-nav-links header-nav-links-side-header header-nav-links-vertical header-nav-links-vertical-expand header-nav-click-to-open align-self-start">
                                        <div className="header-nav-main header-nav-main-square header-nav-main-dropdown-no-borders header-nav-main-effect-4 header-nav-main-sub-effect-1">
                                            <nav className="collapse">
                                                <ul className="nav nav-pills" id="mainNav">
                                                    <li className="dropdown">
                                                        <a className="dropdown-item dropdown-toggle" href="#">
                                                            Academic Calendars
                                                        </a>
                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <a className="dropdown-item" href="/files/Academic-Calendar-2025-26.pdf">2025-26</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="/files/Academic-Calender-2024-25.pdf">2024-25</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="/files/Academic-Calendar-2023-24.pdf">2023-24</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="/files/Academic-Calender-2022-23.pdf">2022-23</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="/files/Academic-Calendar-2021-22.pdf">2021-22</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="/files/Academic-Calendar-2020-21.pdf">2020-21</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="/files/Academic-Calendar-2019-20.pdf">2019-20</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="dropdown dropdown-mega">
                                                        <a className="dropdown-item dropdown-toggle" href="#">
                                                            Academic & Administrative <br />Audit
                                                        </a>
                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <a className="dropdown-item" href="/files/AAA_Process.pdf">AAA Process</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="dropdown">
                                                        <a className="dropdown-item dropdown-toggle" href="#">
                                                            Meetings
                                                        </a>
                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <a className="dropdown-item" href="/files/Draft_MoM_21st-IQAC-Meeting.pdf">Draft 21st IQAC Meeting Minutes</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="/files/20th-IQAC-Meeting-Minutes.pdf">20th IQAC Meeting Minutes</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="/files/19th-IQAC-Meeting-Minutes.pdf">19th IQAC Meeting Minutes</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="/files/18th-IQAC-Meeting-Minutes.pdf">18th IQAC Meeting Minutes</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="/files/17th-Meeting.pdf">17th IQAC Meeting Minutes</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="/files/16th-Meeting.pdf">16th IQAC Meeting Minutes</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="/files/15th-Meeting.pdf">15th IQAC Meeting Minutes</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="/files/14th-Meeting.pdf">14th IQAC Meeting Minutes</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="/files/13th-Meeting.pdf">13th IQAC Meeting Minutes</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="/files/12th-Meeting.pdf">12th IQAC Meeting Minutes</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="/files/11th-Meeting.pdf">11th IQAC Meeting Minutes</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="/files/10th-Meeting.pdf">10th IQAC Meeting Minutes</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="/files/9th-Meeting.pdf">9th IQAC Meeting Minutes</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="/files/8th-Meeting.pdf">8th IQAC Meeting Minutes</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item" href="https://charusat.ac.in/accreditation-and-ranking">
                                                            Accreditation & Ranking
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <Link className={`dropdown-item ${isActive('/best-practices')}`} href="/best-practices">
                                                            Best Practices
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link className={`dropdown-item dropdown-toggle ${isActive('/institutional-distinctiveness')}`} href="/institutional-distinctiveness">
                                                            Institutional Distinctiveness
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link className={`dropdown-item dropdown-toggle ${isActive('/feedback')}`} href="/feedback">
                                                            Feedback On Curriculum
                                                        </Link>
                                                    </li>
                                                    <li className="dropdown">
                                                        <a className="dropdown-item dropdown-toggle" href="#">
                                                            Student Satisfaction <br />Survey
                                                        </a>
                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <a className="dropdown-item" href="https://charusat.ac.in/files/studentCorner/Student-Satisfaction-Survey-SSS%20Poster.pdf">SSS Poster</a>
                                                            </li>
                                                            <li><Link className={`dropdown-item ${isActive('/sss-analysis')}`} href="/sss-analysis">SSS Analysis</Link></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="header-row justify-content-end pb-lg-3">
                            <img alt="CHARUSAT" width="80%" height="40%" src="/img/iqac/CHARUSAT_RGTD_LOGO.webp" />
                            <p className="d-none d-lg-block text-1 pt-3">© 2023 CHARUSAT</p>
                            <button className="btn header-btn-collapse-nav" data-toggle="collapse" data-target=".header-nav-main nav">
                                <i className="fas fa-bars"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
