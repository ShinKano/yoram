import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import BannerLanding from '../components/BannerLanding';

import pic08 from '../assets/images/pic08.jpg';
import pic09 from '../assets/images/pic09.jpg';
import pic10 from '../assets/images/pic10.jpg';

const Landing = props => (
  <Layout>
    <Helmet>
      <title>Yokohama | Yoram Japan 2021</title>
      <meta name="description" content="Landing Page" />
    </Helmet>

    <BannerLanding
      title="横浜 2days"
      desc1="The Street Giraffe"
      desc2="誠実さと共感を磨く"
    />

    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>7月31日・8月1日</h2>
          </header>
          <p>
            ２日間を通して、「誠実さと共感を磨く」をテーマに...概要の文章が入ります概要の文章が入ります概要の文章が入ります概要の文章が入ります概要の文章が入ります概要の文章が入ります概要の文章が入ります。
          </p>
        </div>
      </section>
      <section id="two" className="spotlights">
        <section>
          <Link className="image">
            <img src={pic08} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>誠実さと共感を磨く</h3>
              </header>
              <p>
                Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
                magna sed nunc rhoncus condimentum sem. In efficitur ligula tate
                urna. Maecenas massa sed magna lacinia magna pellentesque lorem
                ipsum dolor. Nullam et orci eu lorem consequat tincidunt.
                Vivamus et sagittis tempus.
              </p>
              {/* <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn more
                  </Link>
                </li>
              </ul> */}
            </div>
          </div>
        </section>
        <section>
          <Link className="image">
            <img src={pic09} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>費用・料金</h3>
              </header>
              <p>
                料金についての説明料金についての説明料金についての説明料金についての説明
                <br />
                料金についての説明料金についての説明料金についての説明料金についての説明
              </p>
              <p>２日合計: 〇〇円（税込）</p>
            </div>
          </div>
        </section>
        <section>
          <Link className="image">
            <img src={pic10} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>会場アクセス</h3>
              </header>
              <p>住所: 神奈川県横浜市神奈川県横浜市神奈川県横浜市</p>
              <p>電話番号: 1234-56-7890</p>
              <ul className="actions">
                <li>
                  <Link
                    to="https://goo.gl/maps/GJC15SHBi9CtmP2M6"
                    className="button"
                  >
                    地図をみる
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    </div>
  </Layout>
);

export default Landing;
