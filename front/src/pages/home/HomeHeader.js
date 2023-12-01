import { Carousel, CarouselIndicators, CarouselItem, Col, Container, Nav, NavItem, NavLink, Row } from 'reactstrap';
import React, { createRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const items = [
	{
		src: require('assets/img/banner/banner1.jpg'),
		altText: 'Nature, United States',
		caption: 'Nature, United States',
	},
	{
		src: require('assets/img/banner/banner2.jpg'),
		altText: 'Somewhere Beyond, United States',
		caption: 'Somewhere Beyond, United States',
	},
	{
		src: require('assets/img/banner/banner3.jpg'),
		altText: 'Yellowstone National Park, United States',
		caption: 'Yellowstone National Park, United States',
	},
];

function HomeHeader() {
	const [pills, setPills] = useState('0');
	let pageHeader = createRef();

	useEffect(() => {
		if (window.innerWidth > 991) {
			const updateScroll = () => {
				let windowScrollTop = window.pageYOffset / 3;
				pageHeader.current.style.transform = 'translate3d(0,' + windowScrollTop + 'px,0)';
			};
			window.addEventListener('scroll', updateScroll);
			return function cleanup() {
				window.removeEventListener('scroll', updateScroll);
			};
		}
	});
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
	const goToIndex = newIndex => {
		if (animating) return;
		setActiveIndex(newIndex);
	};

	let navigate = useNavigate();
	return (
		<>
			<div className="clear-filter page-header" style={{ minHeight: '30vh', maxHeight: '600px', height: 'auto' }}>
				<div className="page-header-image" ref={pageHeader}></div>
				<Container style={{ paddingLeft: 0, paddingRight: 0 }}>
					{/*<section style={{width:'100%', border:'1px solid black'}} filter-color="blue" className="clear-filter">
                        <div className="shape shape-style-1 shape-default">
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                        </div>
                        <Container className="py-md">
                            <Row className="justify-content-between align-items-center">
                                <Col className="mb-5 mb-lg-0" lg="5">
                                    <h1 className="text-white font-weight-light">
                                        Bootstrap carousel
                                    </h1>
                                    <p className="lead text-white mt-4">
                                        Argon Design System comes with four pre-built pages to help
                                        you get started faster. You can change the text and images and
                                        you're good to go.
                                    </p>
                                    <Button
                                        className="btn-white mt-4"
                                        color="default"
                                        href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/alerts?ref=adsr-landing-page"
                                    >
                                        See all components
                                    </Button>
                                </Col>
                                <Col className="mb-lg-auto" lg="6" style={{marginTop:'30px'}}>
                                    <div className="rounded shadow-lg overflow-hidden transform-perspective-right">
                                        <UncontrolledCarousel items={items} />
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                         SVG separator
                        <div className="separator separator-bottom separator-skew">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                preserveAspectRatio="none"
                                version="1.1"
                                viewBox="0 0 2560 100"
                                x="0"
                                y="0"
                            >
                                <polygon className="fill-white" />
                            </svg>
                        </div>
                    </section>*/}
					<Row className="justify-content-center">
						<Col>
							<Carousel activeIndex={activeIndex} next={next} previous={previous}>
								<CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
								{items.map(item => {
									return (
										<CarouselItem onExiting={onExiting} onExited={onExited} key={item.src}>
											<img
												src={item.src}
												alt={item.altText}
												style={{
													width: '100%',
													height: '100%',
													objectFit: 'cover',
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
									onClick={e => {
										e.preventDefault();
										previous();
									}}
									role="button">
									<i className="now-ui-icons arrows-1_minimal-left"></i>
								</a>
								<a
									className="carousel-control-next"
									data-slide="next"
									href="#pablo"
									onClick={e => {
										e.preventDefault();
										next();
									}}
									role="button">
									<i className="now-ui-icons arrows-1_minimal-right"></i>
								</a>
							</Carousel>
						</Col>
					</Row>

					<div className="content brand" style={{ marginTop: '50px' }}>
						<h1 className="h1-seo" style={{ color: 'black', fontSize: '30px' }}>
							<img
								src={`${process.env.PUBLIC_URL}/images/home/main_logo.png`}
								style={{ width: '30px', marginBottom: '5px' }}
							/>
							Hello World
						</h1>
					</div>
				</Container>
			</div>
			<div style={{marginTop: '20px'}}>
				<Nav className="nav-pills-info nav-pills-just-icons d-flex justify-content-center" pills role="tablist">
					<NavItem className="mr-2">
						<NavLink
							className={pills === '1' ? 'active' : ''}
							href="#pablo"
							onClick={e => {
								e.preventDefault();
								navigate('/lecture/index');
							}}>
							<i className="now-ui-icons business_briefcase-24"></i>
							<span className="far" style={{ fontFamily: '한컴 말랑말랑', fontSize: '16px', marginTop: '5px' }}>
								교육
							</span>
						</NavLink>
					</NavItem>
					{/*<NavItem className="mr-2">
						<NavLink
							className={pills === '2' ? 'active' : ''}
							href="#pablo"
							onClick={e => {
								e.preventDefault();
								navigate('/codingTest/list');
							}}>
							<i className="now-ui-icons files_single-copy-04"></i>
							<span className="far" style={{ fontFamily: '한컴 말랑말랑', fontSize: '16px', marginTop: '5px' }}>
								코딩테스트
							</span>
						</NavLink>
					</NavItem>
					<NavItem className="mr-2">
						<NavLink
							className={pills === '3' ? 'active' : ''}
							href="#pablo"
							onClick={e => {
								e.preventDefault();
								navigate('/company/list');
							}}>
							<i className="now-ui-icons business_badge"></i>
							<span className="far" style={{ fontFamily: '한컴 말랑말랑', fontSize: '16px', marginTop: '5px' }}>
								채용공고
							</span>
						</NavLink>
					</NavItem>*/}
					<NavItem className="mr-2">
						<NavLink
							className={pills === '4' ? 'active' : ''}
							href="#pablo"
							onClick={e => {
								e.preventDefault();
								navigate('/community/list');
							}}>
							<i className="now-ui-icons business_globe"></i>
							<span className="far" style={{ fontFamily: '한컴 말랑말랑', fontSize: '16px', marginTop: '5px' }}>
								커뮤니티
							</span>
						</NavLink>
					</NavItem>
					<NavItem className="mr-2">
						<NavLink
							className={pills === '1' ? 'active' : ''}
							href="#pablo"
							onClick={e => {
								e.preventDefault();
								navigate('/community/list?cateNo=1');
							}}>
							<i className="now-ui-icons transportation_air-baloon"></i>
							<span className="far" style={{ fontFamily: '한컴 말랑말랑', fontSize: '15px', marginTop: '5px' }}>
								개발자라운지
							</span>
						</NavLink>
					</NavItem>
				</Nav>
				<br></br>
				<br></br>
			</div>
		</>
	);
}

export default HomeHeader;