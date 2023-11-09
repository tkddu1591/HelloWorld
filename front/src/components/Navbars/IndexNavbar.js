import React from "react";
import { Link, useNavigate } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";
import '../../scss/font.scss'
function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-info");
  const [collapseOpen, setCollapseOpen] = React.useState(false);

  let navigate = useNavigate();
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top navbar-info"} expand="lg" color="info">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              onClick={() => {
                navigate("/");
              }}
              target="_blank"
              id="navbar-brand"
              style={{ cursor: "pointer" }}
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/home/main_logo.png`}
                style={{ width: "20px" }}
              />{" "}
              Hello World
            </NavbarBrand>
            <UncontrolledTooltip target="#navbar-brand">
              홈페이지로 이동합니다.
            </UncontrolledTooltip>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
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
                  onClick={(e) => e.preventDefault()}
                  style={{ fontSize: "15px" }}
                >
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
                  <DropdownItem to="/lecture/list" target="_blank">
                    <i className="now-ui-icons arrows-1_minimal-right mr-2"></i>
                    추천강의
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="#pablo"
                  nav
                  style={{ fontSize: "15px" }}
                  onClick={(e) => e.preventDefault()}
                >
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
                  style={{ fontSize: "15px" }}
                  onClick={(e) => e.preventDefault()}
                >
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
                  <DropdownItem to="/company/bookmark" tag={Link}>
                    <i className="now-ui-icons arrows-1_minimal-right mr-2"></i>
                    관심있는 공고
                  </DropdownItem>
                  <DropdownItem to="/company/my" tag={Link}>
                    <i className="now-ui-icons arrows-1_minimal-right mr-2"></i>
                    받은 제안
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="#pablo"
                  nav
                  style={{ fontSize: "15px" }}
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="now-ui-icons business_globe mr-1"></i>
                  <p>커뮤니티</p>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem to="/community/list" tag={Link}>
                    <i className="now-ui-icons arrows-1_minimal-right mr-2"></i>
                    개발자 라운지
                  </DropdownItem>
                  <DropdownItem to="/community/list" tag={Link}>
                    <i className="now-ui-icons arrows-1_minimal-right mr-2"></i>
                    스터디
                  </DropdownItem>
                  <DropdownItem to="/community/list" tag={Link}>
                    <i className="now-ui-icons arrows-1_minimal-right mr-2"></i>
                    Q&A
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <Button
                  className="nav-link btn-neutral"
                  color="info"
                  onClick={() => {
                    navigate("/member/login");
                  }}
                  id="upgrade-to-pro"
                  target="_blank"
                >
                  <p>로그인</p>
                </Button>
              </NavItem>
              <NavItem>
                <UncontrolledDropdown nav>
                  <DropdownToggle
                    className="nav-link btn-neutral"
                    color="info"
                    id="upgrade-to-pro"
                    target="_blank"
                  >
                    <i className="now-ui-icons users_single-02 mr-1"></i>
                    <p>여덟글자입니다마</p>
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem to="/profile-page" tag={Link}>
                      <i className="now-ui-icons arrows-1_minimal-right mr-2"></i>
                      마이페이지
                    </DropdownItem>
                    <DropdownItem to="/index" tag={Link}>
                      <i className="now-ui-icons arrows-1_minimal-right mr-2"></i>
                      로그아웃
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </NavItem>
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
                            </NavItem>*/}{" "}
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
