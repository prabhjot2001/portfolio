import React, { useState } from "react";
import ReactDOM from "react-dom";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

const Card = ({ title, desc, preview, img, link }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
        document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = "auto";
    };

    const modalContent = isModalOpen ? (
        <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[9999]"
            style={{ position: "fixed" }}
        >
            <div className="relative w-[90vw] max-w-4xl bg-white rounded-lg p-4">
                {/* Close Button */}
                <button
                    onClick={closeModal}
                    className="z-50 absolute top-4 right-4 bg-black text-white rounded-full w-8 h-8 flex items-center justify-center font-bold cursor-pointer"
                >
                    ✕
                </button>

                {/* Custom Carousel */}
                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    loop={true}
                    className="w-full h-[60vh]"
                >
                    {preview.map((image, index) => (
                        <SwiperSlide key={index}>
                            <img
                                src={image}
                                alt={`Preview ${index + 1}`}
                                className="object-contain w-full h-full rounded-lg"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    ) : null;

    return (
        <>
            {/* Card Component */}
            <div className="flex gap-4 flex-col justify-evenly p-2 sm:pl- border-2 border-black text-[#222222] h-[400px] sm:h-[450px] w-[99%] sm:w-[550px] relative">
                <div className="relative bg-white h-full w-full overflow-hidden bg-cover bg-no-repeat">
                    <img
                        width={1000}
                        height={1000}
                        src={img}
                        className="object-contain filter h-full w-full transition duration-300 ease-in-out hover:scale-110 cursor-pointer"
                        alt=""
                        onClick={openModal}
                    />
                </div>

                <div>
                    <p className="text-sm">{desc}</p>
                </div>

                <div className="flex flex-col gap-4 items-center justify-center sm:flex sm:flex-row sm:justify-between">
                    <h2 className="uppercase font-semibold text-xl">{title}</h2>
                    <Link
                        className="uppercase px-2 py-1 sm:px-4 sm:py-2 rounded-full border-2 border-black font-semibold"
                        href={link}
                        target="_blank"
                    >
                        Visit Github
                    </Link>
                </div>
            </div>

            {/* Modal here */}
            {isModalOpen && ReactDOM.createPortal(modalContent, document.body)}
        </>
    );
};

export default Card;
