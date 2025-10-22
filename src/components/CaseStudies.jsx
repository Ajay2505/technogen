import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import { Navigation } from 'swiper/modules';


const caseStudies = [
    {
        id: 1,
        title: "Cloud Migration",
        desc: "It is a long established fact that a reader will be distracted by the readable content of a page.",
        img: "/images/case-study.jpg",
    },
    {
        id: 2,
        title: "Cloud Migration",
        desc: "It is a long established fact that a reader will be distracted by the readable content of a page.",
        img: "/images/case-study.jpg",
    },
    {
        id: 3,
        title: "Cloud Migration",
        desc: "It is a long established fact that a reader will be distracted by the readable content of a page.",
        img: "/images/case-study.jpg",
    },
    {
        id: 4,
        title: "Cloud Migration",
        desc: "It is a long established fact that a reader will be distracted by the readable content of a page.",
        img: "/images/case-study.jpg",
    },
    {
        id: 5,
        title: "Cloud Migration",
        desc: "It is a long established fact that a reader will be distracted by the readable content of a page.",
        img: "/images/case-study.jpg",
    },
    {
        id: 6,
        title: "Cloud Migration",
        desc: "It is a long established fact that a reader will be distracted by the readable content of a page.",
        img: "/images/case-study.jpg",
    },
    {
        id: 7,
        title: "Cloud Migration",
        desc: "It is a long established fact that a reader will be distracted by the readable content of a page.",
        img: "/images/case-study.jpg",
    },
];

export default function CaseStudies() {
    return <section className="s-casestudy mainSpacer bg-primary-blue text-white">
        <div className="container">
            <div className="grid grid-cols-12 gap-10">
                <div className="col-span-full md:col-span-9 lg:col-span-8">
                    <h1>CASE STUDY</h1>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has</p>
                </div>
                <div className="col-span-full md:col-span-3 lg:col-span-4">
                    <div className="flex gap-3 justify-end items-end h-full">
                        <button
                            className="swiper-button-prev bg-[#e33c84] hover:bg-[#ff4f9e] transition-colors text-white p-3 rounded-md"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                            </svg>
                        </button>
                        <button
                            className="swiper-button-next bg-[#e33c84] hover:bg-[#ff4f9e] transition-colors text-white p-3 rounded-md"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="mt-8">
                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    }}
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1280: { slidesPerView: 4 },
                    }}
                >
                    {caseStudies.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="bg-[#4b4b7d] rounded-2xl p-3 pb-8 overflow-hidden border border-gray-600/40 hover:shadow-lg transition">
                                <div className="h-48 overflow-hidden rounded-2xl">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        width={500}
                                        height={300}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <div className="mt-4 p-3 border border-white/40 rounded-2xl">
                                    <h3 className="font-semibold border-b border-white/50 mb-3 pb-2 text-lg">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-gray-300 mb-4">
                                        {item.desc}
                                    </p>
                                    <a
                                        href="#"
                                        className="text-white font-semibold flex items-center gap-2 hover:text-primary-pink transition-colors w-fit"
                                    >
                                        Learn more
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    </section>
}