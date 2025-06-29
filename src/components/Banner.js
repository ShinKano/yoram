import React from 'react';
import { SpanBlock } from '../utils/components';

const Banner = props => (
  <section id="banner" className="major">
    <div className="inner">
      <header className="major">
        <h1>
          2026<span style={{ color: 'tomato' }}>.</span> Yoram Mosenzon{' '}
        </h1>
        <h2>NVC ワークショップ in JAPAN</h2>
      </header>
      <div className="content">
        <p>
          2026 ヨラム・モセンゾン日本初
          <br />
          <SpanBlock>ワークショップ&リトリート</SpanBlock>
        </p>
        <ul className="actions">
          <li>
            <a href="#contact" className="button next scrolly">
              参加お申し込み
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default Banner;
