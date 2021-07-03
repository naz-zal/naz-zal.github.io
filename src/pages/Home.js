import React from 'react';
import Hero from '../components/Hero';
import SelectedProjects from '../components/SelectedProjects';
import Skills from '../components/Skills';

export default function Home() {
  return (
    <div>
      <Hero />
      <SelectedProjects />
      <Skills />
    </div>
  );
}
