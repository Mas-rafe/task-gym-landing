
import Image from "next/image";
import Navbar from "../layout/Navbar";
import Sidebar from "../sections/Sidebar";


const Hero = () => {
    return (
        <section className="relative h-svw w-full  top-5 text-white overflow-hidden ">

            {/* Navbar */}
            <Navbar />

            {/* Left Sidebar */}
            <div className="absolute left-0 top-90 h-full z-20">
                <Sidebar />
            </div>

            {/* Main Content */}
            <div className="relative h-full">

                {/* Text Content */}
                <div className=" absolute left-150 top-2/5 -translate-y-1/2 w-full px-10 z-30">
                    <h1 className="text-[70px] md:text-[130px] font-extrabold leading-[0.85] tracking-tight text-white/50">
                        POWER YOUR <br /> <span className="tracking-wide">PONTETIALE</span>
                    </h1>

                    <div className="mt-6 flex gap-4">
                        <button className="border px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
                            SHOP NOW →
                        </button>

                        <button className="border p-3 rounded-lg">
                            📍
                        </button>
                    </div>
                </div>

                {/* Right Image */}
                <div className="absolute right-12 top-30 z-20">
                    <Image
                        src="/hero.png" // 👉 replace with your image
                        alt="gym"
                        width={1000}
                        height={1000}
                        className="object-contain"
                    />
                </div>
            </div>

            {/* Background SVG Shape */}
            <div className="absolute inset-0 z-0   ml-4  " >
                <svg  width="1700" height="1088" viewBox="0 0 1700 1088" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1306.56 64C1306.56 99.3462 1335.22 128 1370.56 128H1622C1665.08 128 1700 162.922 1700 206V1010C1700 1053.08 1665.08 1088 1622 1088H495C451.922 1088 417 1053.08 417 1010V534.255C417 503.125 398.489 474.975 369.907 462.64L47.0931 323.324C18.5108 310.989 0 282.839 0 251.708V215.801C0 176.146 32.1464 144 71.8011 144C107.743 144 138.148 117.424 142.957 81.8047L144.879 67.565C150.103 28.8706 183.132 0 222.178 0H1242.56C1277.91 0 1306.56 28.6538 1306.56 64Z" fill="black" />
                </svg>

            </div>

        </section>
    );
};

export default Hero;