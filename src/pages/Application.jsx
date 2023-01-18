import React from 'react';
import Nav from '../components/nav/nav';
import Hero from '../components/hero/hero';
import Container from '../components/container/container';
import Listings from '../components/listings/listings';
import Cookie from '../components/cookie/cookie';
import Footer from '../components/footer/footer';

export default function Application() {
  return (
    <>
      <section>
        <Nav />
        <Hero />
        <Container>
          <Listings/>
        </Container>
        <Cookie />
      </section>
      <Footer />
    </>
  );
}
