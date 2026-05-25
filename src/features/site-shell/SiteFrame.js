"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SiteFrame({ children }) {
    return (
        <>
            <Header />
            <div role="main" className="main">
                {children}
            </div>
            <Footer />
        </>
    );
}