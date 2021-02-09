import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import Banner from '../components/Banner';

import pic01 from '../assets/images/pic01.jpg';
import pic02 from '../assets/images/pic02.jpg';
import pic03 from '../assets/images/pic03.jpg';
import pic04 from '../assets/images/pic04.jpg';
import pic05 from '../assets/images/pic05.jpg';
import pic06 from '../assets/images/pic06.jpg';
import { SpanBlock } from '../utils/components';
import { COLORS } from '../styles';

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="Yoram Japan 2021"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        ></Helmet>

        <Banner />

        <div id="main">
          <section id="two">
            <div className="inner">
              <header className="major">
                <h2>
                  <span style={{ fontSize: '16px' }}>CNVCトレーナー </span>
                  ヨラムが初来日！
                </h2>
              </header>
              <p>
                NVCグローバルフェスでも大きな話題となったアムステルダム在住CNVCトレーナーのヨラム・モセンゾンが初来日します。
                Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
                libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
                Pellentesque condimentum sem. In efficitur ligula tate urna.
                Maecenas laoreet massa vel lacinia pellentesque lorem ipsum
                dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et
                sagittis libero. Mauris aliquet magna magna sed nunc rhoncus
                amet pharetra et feugiat tempus.
              </p>
              {/* <ul className="actions">
                <li>
                  <Link to="/landing" className="button next">
                    Get Started
                  </Link>
                </li>
              </ul> */}
            </div>
          </section>
          <section id="one" className="tiles">
            <article style={{ backgroundImage: `url(${pic01})` }}>
              <header className="major">
                <h3>横浜 2days</h3>
                <h4>7月31日・8月1日</h4>
                <p>The Street Giraffe</p>
                <p>誠実さと共感を磨く</p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${pic02})` }}>
              <header className="major">
                <h3>沖縄リトリート</h3>
                <h4>7月22日 ~ 7月25日</h4>
                <p>The Art of Honesty</p>
                <p>
                  正直であろうとするときに<SpanBlock>起こるジレンマ</SpanBlock>
                </p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${pic03})` }}>
              <header className="major">
                <h3>日本チームの想い</h3>
                <p>コロナ禍・ヨラム招聘の意味</p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${pic04})` }}>
              <header className="major">
                <h3>Videos</h3>
                <p>ヨラムのWS動画（日本語約付）</p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${pic05})` }}>
              <header className="major">
                <h3>準備中...</h3>
                <p>Ipsum dolor sit amet</p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${pic06})` }}>
              <header className="major">
                <h3>準備中...</h3>
                <p>Feugiat amet tempus</p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>
          </section>
        </div>
      </Layout>
    );
  }
}

export default HomeIndex;
