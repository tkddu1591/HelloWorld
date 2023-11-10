import {
    Button, Carousel, CarouselIndicators, CarouselItem,
    Col,
    Container,
    Nav,
    NavItem,
    NavLink, Row, UncontrolledCarousel,
} from "reactstrap";
import React, {createRef, useEffect, useState} from "react";

const items = [
    {
        src: require("../../../assets/img/banner/banner1.jpg"),
        altText: "Nature, United States",
        caption: "Nature, United States"
    },
    {
        src: require("../../../assets/img/banner/banner2.jpg"),
        altText: "Somewhere Beyond, United States",
        caption: "Somewhere Beyond, United States"
    },
    {
        src: require("../../../assets/img/banner/banner3.jpg"),
        altText: "Yellowstone National Park, United States",
        caption: "Yellowstone National Park, United States"
    }
];

function CodingTestHeader() {
    const [pills, setPills] = useState("0");
    let pageHeader = createRef();
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const onExiting = () => {
        setAnimating(true);
    };
    const onExited = () => {
        setAnimating(false);
    };
    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };
    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };
    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    return (
        <>
            <Row className="justify-content-center" style={{maxHeight:'10vh', minHeight:'400px'}}>
                <Col>
                    <Carousel
                        activeIndex={activeIndex}
                        next={next}
                        previous={previous}

                    >
                        <CarouselIndicators
                            items={items}
                            activeIndex={activeIndex}
                            onClickHandler={goToIndex}
                        />
                        {items.map((item) => {
                            return (
                                <CarouselItem

                                    onExiting={onExiting}
                                    onExited={onExited}
                                    key={item.src}
                                >
                                    <img src={item.src} alt={item.altText}
                                         style={{
                                             width: '100%', height: '300px'
                                             , objectFit: 'cover'
                                         }}
                                    />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>{item.caption}</h5>
                                    </div>
                                </CarouselItem>
                            );
                        })}
                        <a
                            className="carousel-control-prev"
                            data-slide="prev"
                            href="#pablo"
                            onClick={(e) => {
                                e.preventDefault();
                                previous();
                            }}
                            role="button"
                        >
                            <i className="now-ui-icons arrows-1_minimal-left"></i>
                        </a>
                        <a
                            className="carousel-control-next"
                            data-slide="next"
                            href="#pablo"
                            onClick={(e) => {
                                e.preventDefault();
                                next();
                            }}
                            role="button"
                        >
                            <i className="now-ui-icons arrows-1_minimal-right"></i>
                        </a>
                    </Carousel>
                </Col>
            </Row>



        </>
    );

}

export default CodingTestHeader;