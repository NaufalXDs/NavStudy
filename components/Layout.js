import Navbar from "./Navbar"
import Footer from "./Footer"
import Link from "next/link"
import Head from "next/head";
import { React, ReactNode } from "react";
import('preline')

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <meta name="description" content="" />
            </Head>
            <div className="bg-[#101110] min-h-screen text-gray-700">
                <Navbar />
                {children}
                <Footer />
            </div>
        </>
    )
}