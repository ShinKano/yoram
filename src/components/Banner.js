import React from 'react';
import { SpanBlock } from '../utils/components';

const Banner = props => (
  <section id="banner" className="major">
    <div className="inner">
      <header className="major">
        <h1>The Art of Onesty</h1>
        <h2>
          正直にあろうとするときに<SpanBlock>起こるジレンマ</SpanBlock>
        </h2>
      </header>
      <div className="content">
        <p>
          A responsive site template designed by HTML5 UP
          <br />
          and released under the Creative Commons.
        </p>
        <ul className="actions">
          <li>
            <a href="#one" className="button next scrolly">
              Get Started
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default Banner;
