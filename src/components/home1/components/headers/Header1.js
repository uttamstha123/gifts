import Button from "react-bootstrap/Button";
import { Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../../../../assests/home/images/logo.png";
import { useState } from "react";
import {
  BsTruck,
  BsHeadset,
  BsCartCheck,
  BsSearch,
  BsList,
} from "react-icons/bs";
import DottedBorder from "../dottedBorder/DottedBorder";
import "./header.css";
import { NavLink } from "react-router-dom";
import DropDownMenu from "../dropdownMenu/DropDownMenu";
function OffcanvasExample() {
  let location = "Kingston Ave, Queensbury";
  let languages = ["English", "Italino"];
  const [language, setLanguage] = useState(languages[0]);
  return (
    <>
      <Navbar key={"lg"} expand={"lg"} className=" header">
        <Container fluid className="d-flex flex-column">
          <Row className="d-flex align-items-center w-100">
            <Col
              md="6"
              className="d-flex align-items-center gap-2 header__topLeft py-lg-4 py-md-3"
            >
              <div className="header__topLeftLinks">
                <Nav.Item className="header__secondaryText">
                  {location ? location : ""}
                </Nav.Item>
                <NavDropdown className="language" title={language}>
                  {languages.map((lang, index) => (
                    <NavDropdown.Item
                      className="header__secondaryText language"
                      key={index}
                      onClick={(e) => setLanguage(e.target.textContent)}
                    >
                      {lang}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
              </div>
            </Col>
            <Col md="6" aria-controls={`offcanvasNavbar-'lg'-${"lg"}`}>
              <div className="header__topRight">
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link className="header__topRightLink" href="#action1">
                    Sign In/Register
                  </Nav.Link>
                  <Nav.Link className="header__topRightLink" href="#action2">
                    About Us
                  </Nav.Link>
                  <Nav.Link className="header__topRightLink" href="#action2">
                    Track Orders
                  </Nav.Link>
                  <Nav.Link className="header__topRightLink" href="#action2">
                    FAQs
                  </Nav.Link>
                </Nav>
              </div>
            </Col>
          </Row>
          <div className="header__solidDivider"></div>
          <Row className="w-100">
            <Col className="d-flex align-items-center header__middle">
              <div className="header__middleLogo">
                <Navbar.Brand href="/">
                  <img src={logo} alt="logo" />
                </Navbar.Brand>
              </div>
              <div
                aria-controls={`offcanvasNavbar-'lg'-${"lg"}`}
                className="header__middleBanner"
              >
                <div className="header__middleBannerLogo">
                  <span>
                    <Navbar.Brand href="#">
                      <BsTruck />
                    </Navbar.Brand>
                  </span>
                </div>
                <div className="header__middleBannerDetails">
                  <p className="header__secondaryText">
                    Free standard shipping
                  </p>
                  <p className="header__primaryText">on all orders over ₹999</p>
                </div>
              </div>
              <div className="header__dottedVerticalDivider"></div>
              <div className="header__middleBanner">
                <div className="header__middleBannerLogo">
                  <span>
                    <Navbar.Brand href="#">
                      <BsHeadset />
                    </Navbar.Brand>
                  </span>
                </div>
                <div className="header__middleBannerDetails">
                  <p className="header__secondaryText">support@example.com</p>
                  <p className="header__primaryText">012 - 345 - 6789</p>
                </div>
              </div>
              <div className="header__dottedVerticalDivider"></div>
              <div className="header__middleBanner">
                <div className="header__middleBannerLogo">
                  <Navbar.Brand href="#" className="">
                    <BsCartCheck />
                  </Navbar.Brand>
                </div>
                <div className="header__middleBannerDetails">
                  <p className="header__tertiaryText">Cart: 0 items</p>
                  <p className="header__primaryText">₹0</p>
                </div>
              </div>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-'lg'-${"lg"}`} />
            </Col>
          </Row>
          <DottedBorder direction="bottom" />
          <Row className="w-100">
            <div className="header__bottom">
              <div className="header__bottomNavbarContainer">
                <ul className="header__bottomNavbarItems">
                  <li className="header__bottomNavItem ">
                    <NavLink exact to="/">
                      Home
                      <span>
                        <i className="fa-solid fa-chevron-down"></i>
                      </span>
                    </NavLink>
                    <DropDownMenu
                      items={[
                        {
                          menu: "Home2",
                          link: "home2",
                        },
                        {
                          menu: "Home3",
                          link: "home3",
                        },
                        {
                          menu: "Home4",
                          link: "home4",
                        },
                        {
                          menu: "Home5",
                          link: "home5",
                        },
                      ]}
                    />
                  </li>
                  <li className="header__bottomNavItem">
                    <NavLink to="/shop">
                      Shop
                      <span>
                        <i className="fa-solid fa-chevron-down"></i>
                      </span>
                    </NavLink>
                    <DropDownMenu
                      items={[
                        // "Left Sidebar",
                        // "Horizontal Thumbnail",
                        // "Simple Product",
                        // "Variable Product",
                        {
                          menu: "Left Sidebar",
                          link: "shop",
                        },
                        {
                          menu: "Horizontal Thumbnail",
                          link: "/:id",
                        },
                        {
                          menu: "Simple Product",
                          link: "/:id",
                        },
                        {
                          menu: "Variable Product",
                          link: "/:id",
                        },
                      ]}
                    />
                  </li>
                  <li className="header__bottomNavItem">
                    <NavLink to="#">
                      Pages
                      <span>
                        <i className="fa-solid fa-chevron-down"></i>
                      </span>
                    </NavLink>
                    <DropDownMenu items={["Our Team", "About Us", "FAQ"]} />
                  </li>
                  <li className="header__bottomNavItem">
                    <NavLink to="#">Our Story</NavLink>
                  </li>
                  <li className="header__bottomNavItem">
                    <NavLink to="#">
                      Blog
                      <span>
                        <i className="fa-solid fa-chevron-down"></i>
                      </span>
                    </NavLink>
                    <DropDownMenu items={["Single Blog"]} />
                  </li>
                  <li className="header__bottomNavItem">
                    <NavLink to="#">Contact</NavLink>
                  </li>
                </ul>
                <div className="header__bottomSearch">
                  <span>
                    <BsSearch />
                  </span>
                  <input type="text" placeholder="Search..." />
                </div>
              </div>
            </div>
          </Row>
          <Row className="d-lg-none">
            <Navbar.Offcanvas
              id={`offcanvasNavbar-'lg'-${"lg"}`}
              aria-labelledby={`offcanvasNavbarLabel-'lg'-${"lg"}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-'lg'-${"lg"}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Col>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="#action1">Home</Nav.Link>
                    <Nav.Link href="#action2">Link</Nav.Link>
                    <NavDropdown
                      title="Dropdown"
                      id={`offcanvasNavbarDropdown-'lg'-${"lg"}`}
                    >
                      <NavDropdown.Item href="#action3">
                        Action
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action4">
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5">
                        Something else here
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Offcanvas.Body>
              </Col>
              <Col>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Col>
            </Navbar.Offcanvas>
          </Row>
        </Container>
      </Navbar>
    </>
  );
}

export default OffcanvasExample;
