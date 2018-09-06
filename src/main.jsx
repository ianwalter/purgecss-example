import { h, render } from 'preact'
import Router from 'preact-router'

import '@/main.scss';

import Nav from '@/Nav'
import Home from '@/Home'
import About from '@/About'

render((
  <div className="container pt-5">

    <Nav />

    <Router>
      <Home path="/" />
      <About path="/about" />
    </Router>

  </div>
), document.body)
