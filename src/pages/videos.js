import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';

import pic11 from '../assets/images/pic11.jpg';

const Videos = props => (
  <Layout>
    <Helmet>
      <title>Videos | Yoram Japan 2021</title>
      <meta name="description" content="Generic Page" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Videos</h1>
          </header>
          <span className="image main">
            <img src={pic11} alt="" />
          </span>
          <h3>
            ヨラム・モセンゾンがこれまでに行ったワークショップや講演の動画集です。
          </h3>
          <p>
            何か説明があればここにかく。何か説明があればここにかく。何か説明があればここにかく。何か説明があればここにかく。何か説明があればここにかく。
          </p>
        </div>
      </section>
    </div>
  </Layout>
);

export default Videos;
