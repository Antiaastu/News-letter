import React from "react"
import Testimonials from "./Testimonials"
import Hero from "./Hero"
import RecentPosts from "../Posts/RecentPosts"
import Footer from "../../../components/Footer/Footer"
const Landing = () => {
    return(
        <>
            <Hero />
            <RecentPosts />
            <Testimonials />
            <Footer />
        </>
    )
}
export default Landing