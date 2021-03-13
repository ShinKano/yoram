import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';

import Layout from '../components/layout';

import pic16 from '../assets/images/pic16.jpg';

const Requirements = props => (
  <Layout>
    <Helmet>
      <title>Requirements | Yoram Japan 2021</title>
      <meta
        name="Requirements | Yoram Japan 2021"
        content="Requirements | Yoram Japan 2021"
      />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>参加要件</h1>
          </header>
          <span className="image main">
            <img src={pic16} alt="沖縄の海" />
          </span>
          <p>
            当ワークショップ・リトリート参加に際し、以下の要件のうちいずれか（全部でなくて構いません）を満たし、
            NVCについて基本的理解を得ていることを要件といたしております。
          </p>
          <ul>
            <li>書籍「NVC人と人との関係にいのちを吹き込む法」を読んだ</li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=LSGfqyhleUA&feature=youtu.be"
                target="_blank"
              >
                ヨラムのTEDプレゼンテーション動画
              </a>
              を見た{' '}
              <a href="https://youtu.be/7mdxyYyk2JU" target="_blank">
                ヨラムのNVC紹介動画
              </a>
              を見た
            </li>
            <li>今までに30時間以上のNVCのトレーニングを受けている</li>
          </ul>
          <p>
            ヨラムの動画（日本語字幕つき）は当サイト内「Videos」にありますので是非ご覧ください！
          </p>
          <ul className="actions">
            <li>
              <Link to="/videos" className="button">
                Videosをみる
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
);

export default Requirements;
