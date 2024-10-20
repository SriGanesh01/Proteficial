import Header from "../components/Header";
import HeroHome from "../components/HeroHome";
import MottoHome from "../components/MottoHome";
import WhatDoWeDoHome from "../components/WhatDoWeDoHome";
import WhyNeedHome from "../components/WhyNeedHome";
import Quote1 from "../components/Quote1";
import Footer from "../components/Footer";

function Home() {
    return (
        <div>
            <Header />
            <HeroHome />
            <MottoHome />
            <WhatDoWeDoHome />
            <WhyNeedHome />
            <Quote1 />
            <Footer />
        </div>
    );
}

export default Home;