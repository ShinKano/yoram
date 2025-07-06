import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import { Link } from 'gatsby';


import yoram01 from '../assets/images/yoram01.webp';

const Elements = props => (
  <Layout>
    <Helmet>
      <title>Staff | Yoram Japan 2021</title>
      <meta name="description" content="Elements Page" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>NVCについて</h1>
          </header>

          <span className="image main">
            <img src={yoram01} alt="Yoram" style={{ borderRadius: '10px' }} />
          </span>

          <p>
            NVC（非暴力コミュニケーション）は、マーシャル・ローゼンバーグ博士によって体系化された、

            <strong>自分自身とも他者とも、誠実でありながら深く共感的な関係性を築くための実践的なコミュニケーション手法</strong>です。
          </p>
          <p>
            NVCは、対立を<strong>愛と明晰さ</strong>へと変容させる力をもっています。
          </p>

          <p>
            また、NVCは、瞑想の座布団の上だけでなく、現実の暮らしのなかで、
            あなたの大切にしている価値観を<strong>実際の人間関係や日々のあらゆる場面で生きることを助けてくれます</strong>。
          </p>
          <p>
            NVCは、自分自身との対話にも深い慈しみをもたらしてくれるのです。
          </p>

        </div>
      </section>
    </div>
  </Layout>
);

export default Elements;
