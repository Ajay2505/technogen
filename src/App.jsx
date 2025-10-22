import "./App.css";
import CaseStudies from "./components/CaseStudies";
import MainCard from "./components/MainCard";

export default function App() {
    return (
        <div className="site-wrap min-h-screen bg-gray-50">
            <main>
                <section className="about-banner overflow-x-hidden s-banner mainSpacer lg:min-h-screen text-white bg-gradient-to-b from-primary-blue to-white from-[70%] to-[70%]">
                    <div className="container">
                        <div className="flex pt-5 mb-4 justify-start items-center gap-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-grid-1x2-fill text-green-500" viewBox="0 0 16 16">
                                <path d="M0 1a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm9 0a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1zm0 9a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1z" />
                            </svg>
                            <h1 className="m-0">About Us</h1>
                        </div>
                        <div className="img_wrapper w-full relative flex justify-center items-center">
                            <div className="overflow-hidden  rounded-lg max-h-[65vh]">
                                <img src="/images/banner.jpg" alt="Banner Image" />
                            </div>
                            <div className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/2 w-16 lg:w-32 lg:h-32 h-16 rounded-full overflow-hidden z-1">
                                <div className="absolute rounded-full inset-0 bg-gradient-to-tr from-red-600/20 to-red-600/80"></div>
                                <div className="absolute rounded-full inset-2 lg:inset-4 bg-white/60"></div>
                                <div className="absolute rounded-full inset-4 lg:inset-9 bg-green-600/70"></div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="s-weare mainSpacer bg-primary-blue text-white">
                    <div className="container">
                        <div className="grid grid-cols-12 gap-y-10">
                            <div className="col-span-full lg:col-span-6 flex items-center">
                                <div className="">
                                    <h1>WE ARE TECHNOGEN</h1>
                                    <div className="w-1/2  border-t border-white/50"></div>
                                    <div className="content pt-4 text-gray-300">
                                        <p>Technogen, Inc., headquartered in Chantilly, Virginia, is a CMMI Level 3 and ISO-certified global IT services and consulting company. Founded in 2003 as a Minority & Women-Owned Small Business, we deliver end-to-end IT solutions to public and private sector clients worldwide.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-1"></div>
                            <div className="col-span-full lg:col-span-5">
                                <div className="img_wrapper shadow-lg rounded-lg relative overflow-hidden -scale-x-100">
                                    <img src="/images/globe.jpg" alt="Globe" />
                                    <div className="icon_wrapper absolute top-4 right-4 w-20">
                                        <img src="/icons/shape.png" alt="Shape" loading="lazy" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="s-vision mainSpacer bg-white">
                    <div className="container">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <MainCard title="Our Vision" icon={"/icons/target.png"}>
                                <p>We are Curious for Tomorrow, committed to delivering innovative technology solutions that exceed expectations through creativity and forward-thinking.</p>
                            </MainCard>
                            <MainCard title="Our Mission" icon={"/icons/target.png"}>
                                <p>To lead in IT solutions and staffing services, powered by technology, problem-solving, innovation, and integrity</p>
                            </MainCard>
                            <MainCard title="Our Values" icon={"/icons/target.png"}>
                                <p>Technology | Problem-Solving | Innovation | Integrity - these guide every solution we create and every partnership we build.</p>
                            </MainCard>
                        </div>
                    </div>
                </section>

                <section className="s-sustainability mainSpacer">
                    <div className="container">
                        <MainCard leftIcon={true} icon={"/icons/target.png"}>
                            <h1>SUSTAINABILITY AT TECHNOGEN</h1>
                            <div className="border-t border-gray-300 pt-4 mt-3">
                                <p>Sustainability is integral to our business. We act ethically, transparently, and responsibly, embedding sustainability across our global operations and supply chain. As an Accrediting Body (AB) for the Supply Chain Security Standard (SCS-9001), we work with the American National Standards Institute (ANSI) to ensure trusted, sustainable ICT supply chains, protecting infrastructure and creating long-term value</p>
                            </div>
                        </MainCard>
                    </div>
                </section>

                <CaseStudies />

            </main>
        </div>
    );
}