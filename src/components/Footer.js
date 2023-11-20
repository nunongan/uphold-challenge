import React from 'react';
import {
  Container,
  Row,
  Col,
  Image,
  FormSelect,
} from 'react-bootstrap';
import './styles.css';

const Footer = () => {
  return (
    <Container fluid className="footer mt-5">
      <Container className="my-4">
        <Row className="mt-3 mt-lg-2">
          <Col xs={12} lg={2}>
            <div className="d-flex justify-content-center">
              <a href="https://uphold.com/en-eu">
                <Image src="assets/small-logo.svg" />
              </a>
            </div>
          </Col>
          <Col xs={6} lg={2} className="my-2 footerLinks">
            <div className="d-flex justify-content-center">
              <h6 className="fw-bold">Partners</h6>
            </div>
            <div className="">
              <div className="d-flex justify-content-center">
                <a href="https://uphold.com/en-gb/get-started/developer">
                  Developers
                </a>
              </div>
              <div className="d-flex justify-content-center">
                <a href="https://uphold.com/en-gb/products/affiliate">
                  Affiliate
                </a>
              </div>
            </div>
          </Col>
          <Col xs={6} lg={2} className="my-2 footerLinks">
            <div className="d-flex justify-content-center">
              <h6 className="fw-bold">Company</h6>
            </div>
            <div className="d-flex justify-content-center">
              <a href="https://uphold.com/en-eu/resources/about">
                About
              </a>
            </div>
            <div className="d-flex justify-content-center">
              <a href="https://uphold.com/en-eu/resources/careers">
                Carreers
              </a>
            </div>
            <div className="d-flex justify-content-center">
              <a href="https://uphold.com/en-eu/resources/press-media">
                Press
              </a>
            </div>
            <div className="d-flex justify-content-center">
              <a href="https://uphold.com/en-eu/blog">
                Blog
              </a>
            </div>
          </Col>
          <Col
            xs={6}
            lg={2}
            className="my-3 my-lg-2 footerLinks"
          >
            <div className="d-flex justify-content-center">
              <h6 className="fw-bold">Help</h6>
            </div>
            <div className="d-flex justify-content-center">
              <a href="https://support.uphold.com/hc/en-us">
                FAQ & Support
              </a>
            </div>
            <div className="d-flex justify-content-center">
              <a href="https://status.uphold.com/">
                Platform Status
              </a>
            </div>
            <div className="d-flex justify-content-center">
              <a href="https://uphold.com/en-eu/resources/cryptionary">
                Criptionary
              </a>
            </div>
            <div className="d-flex justify-content-center">
              <a href="https://uphold.com/en-eu/get-started/service-fees">
                Pricing
              </a>
            </div>
            <div className="d-flex justify-content-center">
              <a href="https://uphold.com/en-eu/legal/accessibility">
                Legal
              </a>
            </div>
          </Col>
          <Col
            xs={6}
            lg={2}
            className="my-3 my-lg-2 footerLinks"
          >
            <div className="d-flex">
              <h6 className="fw-bold">Social</h6>
            </div>
            <div className="d-flex">
              <a href="https://www.facebook.com/people/UpholdInc/100064896991810/">
                Facebook
              </a>
            </div>
            <div className="d-flex">
              <a href="https://twitter.com/UpholdInc">
                Twitter
              </a>
            </div>
            <div className="d-flex">
              <a href="https://www.instagram.com/upholdinc/">
                Instagram
              </a>
            </div>
            <div className="d-flex">
              <a href="https://www.linkedin.com/company/upholdinc/">
                LinkedIn
              </a>
            </div>
          </Col>
          <Col xs={12} lg={2} className="">
            <div className="d-flex justify-content-center justify-content-lg-end">
              <a href="https://apps.apple.com/us/app/uphold-buy-btc-eth-and-260/id1101145849">
                <Image
                  className="me-5"
                  src="assets/appstore.svg"
                />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.uphold.wallet&hl=en_US&pli=1">
                <Image src="assets/playstore.svg" />
              </a>
            </div>
            <div className="d-flex justify-content-center justify-content-lg-end my-3">
              <FormSelect id="languageSelection">
                <option>English</option>
              </FormSelect>
            </div>
          </Col>
        </Row>
        <Row className="my-5">
          <Col xs={12} sm={12} lg={10} className="">
            <div className="d-flex">
              <small className="text-muted">
                Uphold Europe Limited, Red No. 09281410,
                Registered Office: Interchange Triangle,
                Chalk Farm Road, London, England, NW1 8 AB
              </small>
            </div>
            <div className="d-flex">
              <small className="d-md-flex text-muted">
                <span>&copy; </span>Uphold, Inc. 2018. All
                Rights Reserved.
                <div
                  id="footerPrivacyLinks"
                  className="d-inline-flex ms-4"
                >
                  <a
                    href="https://uphold.com/en-eu/legal/membership-agreement/united-kingdom"
                    className=""
                  >
                    Agreements
                  </a>
                  <a
                    href="https://uphold.com/en-eu/legal/privacy-policy"
                    className="mx-2"
                  >
                    Privacy & Data Policy
                  </a>
                  <a href="https://uphold.com/en-eu/legal/cookie-policy">
                    Cookie Policy
                  </a>
                </div>
              </small>
            </div>
          </Col>
          <Col xs={12} lg={2}>
            <div className="my-2 d-flex justify-content-center justify-content-end ">
              <Image src="assets/qr-code.svg" />
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Footer;
