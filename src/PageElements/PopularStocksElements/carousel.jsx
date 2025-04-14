import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Carousel() {
    const carouselData = [
        {
            icon: 'https://images.unsplash.com/photo-1614850523011-8f49ffc73908?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ymx1ZSUyMGNvbG91cnxlbnwwfHwwfHx8MA%3D%3D',
            name: "adaro ace adaro energy indone",
            rp: 2400,
            profitLoss: -123
        },
        {
            icon: 'https://images.unsplash.com/photo-1614850523011-8f49ffc73908?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ymx1ZSUyMGNvbG91cnxlbnwwfHwwfHx8MA%3D%3D',
            name: "aces ace hardware indone policy",
            rp: 810,
            profitLoss: +125
        },
        {
            icon: 'https://images.unsplash.com/photo-1614850523011-8f49ffc73908?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ymx1ZSUyMGNvbG91cnxlbnwwfHwwfHx8MA%3D%3D',
            name: "arto goto bank jago tbkcoc abcedef ",
            rp: 310,
            profitLoss: +429
        },
        {
            icon: 'https://images.unsplash.com/photo-1614850523011-8f49ffc73908?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ymx1ZSUyMGNvbG91cnxlbnwwfHwwfHx8MA%3D%3D',
            name: "arto goto bank jago tbkcoc abcedef ",
            rp: 310,
            profitLoss: +429
        },
    ];

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    const truncate = (str, len) => {
        return (str.length > len ? str.slice(0, len) + "..." : str).toUpperCase();
    };

    return (
        <>
        <div className="mx-auto mt-20" style={{
            // backgroundColor:"red",s
            height: "20rem"
        }}>
            <Slider {...settings}>
                {carouselData.map((d, index) => (
                    <div key={index} className="p-4">
                        <div className="w-48 h-[200px] rounded-xl flex flex-col justify-center items-center gap-4 p-3 bg-white" style={{
                            // backgroundColor:"blue",
                            height: "15rem",
                            width: "28rem",
                            border: "2px solid #cce",
                            borderRadius: "15px",
                            boxShadow: "-7px 7px 20px 0px #d0cdcd"
                        }}>
                            <div className="d-flex items-center gap-2 w-full mt-4">
                                <img
                                    src={d.icon}
                                    alt="icon"
                                    className="rounded-full"
                                    style={{
                                        height: "3rem",
                                        width: "3rem",
                                        borderRadius: "50%"
                                    }}
                                />
                                <h5 className="font-semibold text-sm ms-3" style={{
                                    fontSize: "1.5rem"
                                }}>
                                    {truncate(d.name, 30)}
                                </h5>
                            </div>

                            {/* Bottom: Price and Profit */}
                            <div className="d-flex justify-content-around w-full" style={{
                                marginTop: "3rem"
                            }}>
                                <p className="font-bold" style={{
                                    fontSize: "2rem"
                                }}>Rp. {d.rp}</p>
                                <p className={d.profitLoss >= 0 ? "text-green-600" : "text-red-600"} style={{
                                    fontSize: "1.5rem",
                                    backgroundColor: "#75ece1",
                                    borderRadius: "10px",
                                    width: "7rem",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}>
                                    {d.profitLoss >= 0 ? '+' : ''}{d.profitLoss}%
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
        <style
                dangerouslySetInnerHTML={{
                    __html: `
                        .slick-prev:before, .slick-next:before {
                            color: black;
                            font-size: 24px;
                        }
                    `
                }}
            />
        </>
    );
}
