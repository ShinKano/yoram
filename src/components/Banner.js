import React from 'react';
import { SpanBlock } from '../utils/components';

const Banner = props => (
  <section id="banner" className="major">
    <div className="inner">
      <header className="major">
        <h1>The Art of Honesty</h1>
        <h2>
          正直であろうとするときに<SpanBlock>起こるジレンマ</SpanBlock>
        </h2>
      </header>
      <div className="content">
        <p>
          2021 ヨラム・モセンゾン初来日
          <br />
          沖縄リトリート & 東京2daysワークショップ
        </p>
        <ul className="actions">
          <li>
            <a href="#one" className="button next scrolly">
              参加お申し込み
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default Banner;
