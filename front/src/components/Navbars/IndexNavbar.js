import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
// reactstrap components
import {
	Button,
	Collapse,
	Container,
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
	Nav,
	Navbar,
	NavbarBrand,
	NavItem,
	UncontrolledDropdown,
	UncontrolledTooltip,
} from 'reactstrap';
import '../../scss/font.scss';
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../utils/member/logout";
import {myInfo} from "../../slice/UserSlice";
import {getMyInfo} from "../../utils/member/getMyInfo";
import {sendRefreshToken} from "../../utils/member/sendRefreshToken";

function IndexNavbar() {
	let navigate = useNavigate();
	let dispatch = useDispatch();

	let myInfo = useSelector((state) => {return state.myInfo} )
	getMyInfo(dispatch);

	const [navbarColor, setNavbarColor] = React.useState('navbar-info');
	const [collapseOpen, setCollapseOpen] = React.useState(false);

	const handleOpenNewTab = url => {
		window.open(url, '_blank', 'width=400,height=600');
	};
	return (
		<>
			{collapseOpen ? (
				<div
					id="bodyClick"
					onClick={() => {
						document.documentElement.classList.toggle('nav-open');
						setCollapseOpen(false);
					}}
				/>
			) : null}
			<Navbar className={'fixed-top navbar-info'} expand="lg" color="info">
				<Container>
					<div className="navbar-translate">
						<NavbarBrand
							onClick={() => {
								navigate('/');
							}}
							target="_blank"
							id="navbar-brand"
							style={{ cursor: 'pointer' }}>
							<img src={`${process.env.PUBLIC_URL}/images/home/main_logo.png`} style={{ width: '22px' }} />{' '}
							<span style={{ fontSize: '19px' }}>Hello World</span>
						</NavbarBrand>
						<UncontrolledTooltip target="#navbar-brand">홈페이지로 이동합니다.</UncontrolledTooltip>
						<button
							className="navbar-toggler navbar-toggler"
							onClick={() => {
								document.documentElement.classList.toggle('nav-open');
								setCollapseOpen(!collapseOpen);
							}}
							aria-expanded={collapseOpen}
							type="button">
							<span className="navbar-toggler-bar top-bar"></span>
							<span className="navbar-toggler-bar middle-bar"></span>
							<span className="navbar-toggler-bar bottom-bar"></span>
						</button>
					</div>
					<Collapse className="justify-content-end" isOpen={collapseOpen} navbar>
						<Nav navbar>
							{/*                            <NavItem>
                                <NavLink
                                    href="#pablo"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        document
                                            .getElementById("download-section")
                                            .scrollIntoView();
                                    }}
                                >
                                    <i className="now-ui-icons arrows-1_cloud-download-93"></i>
                                    <p>Download</p>
                                </NavLink>
                            </NavItem>*/}
							<UncontrolledDropdown nav>
								<DropdownToggle
									caret
									color="default"
									href="#pablo"
									nav
									onClick={e => e.preventDefault()}
									style={{ fontSize: '15px' }}>
									<i className="now-ui-icons business_briefcase-24 mr-1"></i>
									<p>교육</p>
								</DropdownToggle>
								<DropdownMenu>
									<DropdownItem to="/lecture/index" tag={Link}>
										<i className="now-ui-icons arrows-1_minimal-right mr-2"></i>
										교육 홈
									</DropdownItem>
									<DropdownItem to="/lecture/list" tag={Link}>
										<i className="now-ui-icons arrows-1_minimal-right mr-2"></i>
										전체
									</DropdownItem>
									{/*<DropdownItem to="/lecture/list" target="_blank">
										<i className="now-ui-icons arrows-1_minimal-right mr-2"></i>
										추천강의
									</DropdownItem>*/}
								</DropdownMenu>
							</UncontrolledDropdown>
							{/*<UncontrolledDropdown nav>
								<DropdownToggle
									caret
									color="default"
									href="#pablo"
									nav
									style={{ fontSize: '15px' }}
									onClick={e => e.preventDefault()}>
									<i className="now-ui-icons files_single-copy-04 mr-1"></i>
									<p>코딩테스트</p>
								</DropdownToggle>
								<DropdownMenu>
									<DropdownItem to="/codingTest/list" tag={Link}>
										<i className="now-ui-icons arrows-1_minimal-right mr-2"></i>
										전체
									</DropdownItem>
									<DropdownItem to="/codingTest/list" tag={Link}>
										<i className="now-ui-icons arrows-1_minimal-right mr-2"></i>
										단계별 풀기
									</DropdownItem>
									<DropdownItem to="/codingTest/qna" tag={Link}>
										<i className="now-ui-icons arrows-1_minimal-right mr-2"></i>
										Q&A
									</DropdownItem>
								</DropdownMenu>
							</UncontrolledDropdown>
							<UncontrolledDropdown nav>
								<DropdownToggle
									caret
									color="default"
									href="#pablo"
									nav
									style={{ fontSize: '15px' }}
									onClick={e => e.preventDefault()}>
									<i className="now-ui-icons business_badge mr-1"></i>
									<p>채용공고</p>
								</DropdownToggle>
								<DropdownMenu>
									<DropdownItem to="/company/list" tag={Link}>
										<i className="now-ui-icons arrows-1_minimal-right mr-2"></i>
										채용공고
									</DropdownItem>
									<DropdownItem to="/company/apply" tag={Link}>
										<i className="now-ui-icons arrows-1_minimal-right mr-2"></i>
										지원한 공고
									</DropdownItem>
									<DropdownItem to="/company/list" tag={Link}>
										<i className="now-ui-icons arrows-1_minimal-right mr-2"></i>
										관심있는 공고
									</DropdownItem>
									<DropdownItem to="/company/my" tag={Link}>
										<i className="now-ui-icons arrows-1_minimal-right mr-2"></i>
										받은 제안
									</DropdownItem>
								</DropdownMenu>
							</UncontrolledDropdown>*/}
							<UncontrolledDropdown nav>
								<DropdownToggle
									caret
									color="default"
									href="#pablo"
									nav
									style={{ fontSize: '15px' }}
									onClick={e => e.preventDefault()}>
									<i className="now-ui-icons business_globe mr-1"></i>
									<p>커뮤니티</p>
								</DropdownToggle>
								<DropdownMenu>
									<DropdownItem to="/community/list?cateNo=1" tag={Link}>
										<i className="now-ui-icons arrows-1_minimal-right mr-2"></i>
										개발자 라운지
									</DropdownItem>
									<DropdownItem to="/community/list?cateNo=2" tag={Link}>
										<i className="now-ui-icons arrows-1_minimal-right mr-2"></i>
										스터디
									</DropdownItem>
									<DropdownItem to="/community/list?cateNo=3" tag={Link}>
										<i className="now-ui-icons arrows-1_minimal-right mr-2"></i>
										Q&A
									</DropdownItem>
								</DropdownMenu>
							</UncontrolledDropdown>
							<NavItem>
								<div>
									<Link
										to={'/lecture/cart'}
										className="nav-link btn-info"
										style={{
											backgroundColor: 'none',
											width: '50px',
											display: 'flex',
											justifyContent: 'center',
											position: 'relative',
										}}
										id="upgrade-to-pro"
										rel="width= 200px ; height= 400px">
										<i
											className="bi bi-cart"
											style={{
												fontSize: '20px',
												position: 'relative',
											}}>
											<div
												style={{
													position: 'absolute',
													top: -15,
													left: 15,
													backgroundColor: 'rgb(64,196,4)',
													paddingLeft: '5px',
													paddingRight: '5px',
													display: 'flex',
													justifyContent: 'center',
													borderRadius: '7px',
													height: '20px',
													alignItems: 'center',
												}}>
												<span
													style={{
														fontSize: '10px',
														fontWeight: '555',
														fontFamily: 'nanumsquare',
													}}>
													12
												</span>
											</div>
										</i>
									</Link>
								</div>
							</NavItem>
							<NavItem>
								<div>
									<Link
										onClick={()=>handleOpenNewTab('/dm')}
										className="nav-link btn-info"
										style={{
											backgroundColor: 'none',
											width: '50px',
											display: 'flex',
											justifyContent: 'center',
											position: 'relative',
										}}
										id="upgrade-to-pro"
										rel="width= 200px ; height= 400px">
										<i
											className="bi bi-chat-left-dots"
											style={{
												fontSize: '20px',
												position: 'relative',
											}}>
											<div
												style={{
													position: 'absolute',
													top: -15,
													left: 15,
													backgroundColor: 'rgb(255,0,0)',
													paddingLeft: '5px',
													paddingRight: '5px',
													display: 'flex',
													justifyContent: 'center',
													borderRadius: '7px',
													height: '20px',
													alignItems: 'center',
												}}>
												<span
													style={{
														fontSize: '10px',
														fontWeight: '555',
														fontFamily: 'nanumsquare',
													}}>
													12
												</span>
											</div>
										</i>
									</Link>
								</div>
							</NavItem>
							{myInfo.email === '비회원' ?
							<NavItem>
								<Button
									className="nav-link btn-neutral"
									color="info"
									onClick={() => {
										navigate('/member/login');
									}}
									id="upgrade-to-pro"
									target="_blank">
									<p>로그인</p>
								</Button>
							</NavItem> :
							<NavItem>
								<UncontrolledDropdown nav>
									<DropdownToggle className="nav-link btn-neutral" color="info" id="upgrade-to-pro" target="_blank">
										<i className="now-ui-icons users_single-02 mr-1"></i>
										<p>{myInfo.nick}</p>
									</DropdownToggle>
									<DropdownMenu>
										<DropdownItem to="/my/info" tag={Link}>
											<i className="now-ui-icons arrows-1_minimal-right mr-2"></i>
											마이페이지
										</DropdownItem>
										<DropdownItem onClick={() => logout(navigate, dispatch)}>
											<i className="now-ui-icons arrows-1_minimal-right mr-2"></i>
											로그아웃
										</DropdownItem>
									</DropdownMenu>
								</UncontrolledDropdown>
							</NavItem>}
							{/*  <NavItem>

                                <NavLink
                                    href="https://twitter.com/CreativeTim?ref=creativetim"
                                    target="_blank"
                                    id="twitter-tooltip"
                                >
                                    <i className="fab fa-twitter"></i>
                                    <p className="d-lg-none d-xl-none">Twitter</p>
                                </NavLink>
                                <UncontrolledTooltip target="#twitter-tooltip">
                                    Follow us on Twitter
                                </UncontrolledTooltip>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    href="https://www.facebook.com/CreativeTim?ref=creativetim"
                                    target="_blank"
                                    id="facebook-tooltip"
                                >
                                    <i className="fab fa-facebook-square"></i>
                                    <p className="d-lg-none d-xl-none">Facebook</p>
                                </NavLink>
                                <UncontrolledTooltip target="#facebook-tooltip">
                                    Like us on Facebook
                                </UncontrolledTooltip>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
                                    target="_blank"
                                    id="instagram-tooltip"
                                >
                                    <i className="fab fa-instagram"></i>
                                    <p className="d-lg-none d-xl-none">Instagram</p>
                                </NavLink>
                                <UncontrolledTooltip target="#instagram-tooltip">
                                    Follow us on Instagram
                                </UncontrolledTooltip>
                            </NavItem>*/}{' '}
							{/*  <NavItem>
                                <NavLink
                                    href="https://twitter.com/CreativeTim?ref=creativetim"
                                    target="_blank"
                                    id="twitter-tooltip"
                                >
                                    <i className="fab fa-twitter"></i>
                                    <p className="d-lg-none d-xl-none">Twitter</p>
                                </NavLink>
                                <UncontrolledTooltip target="#twitter-tooltip">
                                    Follow us on Twitter
                                </UncontrolledTooltip>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    href="https://www.facebook.com/CreativeTim?ref=creativetim"
                                    target="_blank"
                                    id="facebook-tooltip"
                                >
                                    <i className="fab fa-facebook-square"></i>
                                    <p className="d-lg-none d-xl-none">Facebook</p>
                                </NavLink>
                                <UncontrolledTooltip target="#facebook-tooltip">
                                    Like us on Facebook
                                </UncontrolledTooltip>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
                                    target="_blank"
                                    id="instagram-tooltip"
                                >
                                    <i className="fab fa-instagram"></i>
                                    <p className="d-lg-none d-xl-none">Instagram</p>
                                </NavLink>
                                <UncontrolledTooltip target="#instagram-tooltip">
                                    Follow us on Instagram
                                </UncontrolledTooltip>
                            </NavItem>*/}
						</Nav>
					</Collapse>
				</Container>
			</Navbar>
		</>
	);
}

export default IndexNavbar;
