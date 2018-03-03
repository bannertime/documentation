import React from 'react';
import Link from '../Link/Link';
import Container from '../Container/Container';
import Icon from '../../assets/icon-square-small.svg';
import './Footer.scss';

const Footer = () => (
  <footer className="footer">
    <Container className="footer__inner">
      <section className="footer__left">
        <Link className="footer__link" to="/guides/installation">Installation</Link>
        <Link className="footer__link" to="/guides/getting-started">Getting Started</Link>
        <Link className="footer__link" to="/documentation">Documentation</Link>
      </section>

      <section className="footer__middle">
        <Link to="/" className="footer__icon">
          <img src={ Icon } alt="Bannertime icon" />
        </Link>
      </section>

      <section className="footer__right">
        <Link className="footer__link" to="/guides/contributing">Contributing</Link>
        <Link className="footer__link" to="//bannertime.herokuapp.com/">Slack</Link>
        <Link className="footer__link" to="/license">License</Link>
      </section>
    </Container>
  </footer>
);

export default Footer;
