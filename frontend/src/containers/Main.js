import React from 'react';

import Header from '../components/header/Header';
import Greeting from './greeting/Greeting';
import Skills from './skills/Skills';
import Projects from '../components/githubRepoCard/GithubRepoCard';
import Contact from './contact/Contact';
import Footer from '../components/footer/Footer';
import Top from './topButton/Top';

export default function Main() {
  return (
    <>
      <Header />
      <Greeting />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <Top />
    </>
  );
}
