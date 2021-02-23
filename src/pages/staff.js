import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';

import pic03 from '../assets/images/pic03.jpg';

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
            <h1>スタッフ</h1>
          </header>

          <p>
            海外トレーナーの招聘に当たって、1年以上の時間をかけ様々な調整や翻訳を行ってきたスタッフ、通訳とオーガナイザーたちです。
          </p>

          <hr className="major" />
          <h2>オーガナイザー</h2>
          <section className="grid-wrapper">
            <div className="col-3">
              <span className="image fit">
                <img src={pic03} alt="" />
              </span>
            </div>
            <div className="col-9">
              <h3>後藤ゆうこ</h3>
              <p>
                In arcu accumsan arcu adipiscing accumsan orci ac. Felis id enim
                aliquet. Accumsan ac integer lobortis commodo ornare aliquet
                accumsan erat tempus amet porttitor. Ante commodo blandit
                adipiscing integer semper orci eget. Faucibus commodo adipiscing
                mi eu nullam accumsan morbi arcu ornare odio mi adipiscing
                nascetur lacus ac interdum morbi accumsan vis mi accumsan ac
                praesent.
              </p>
            </div>
          </section>

          <hr className="major" />
          <h2>通訳</h2>

          <section className="grid-wrapper">
            <div className="col-9">
              <h3>ゆうこ後藤</h3>
              <p>
                In arcu accumsan arcu adipiscing accumsan orci ac. Felis id enim
                aliquet. Accumsan ac integer lobortis commodo ornare aliquet
                accumsan erat tempus amet porttitor. Ante commodo blandit
                adipiscing integer semper orci eget. Faucibus commodo adipiscing
                mi eu nullam accumsan morbi arcu ornare odio mi adipiscing
                nascetur lacus ac interdum morbi accumsan vis mi accumsan ac
                praesent.
              </p>
            </div>
            <div className="col-3">
              <span className="image fit">
                <img src={pic03} alt="" />
              </span>
            </div>
          </section>

          <hr className="major" />
          <h2>スタッフ</h2>

          <section className="grid-wrapper">
            <div className="col-3">
              <span className="image fit">
                <img src={pic03} alt="" />
              </span>
            </div>
            <div className="col-9">
              <h3>後藤ごう</h3>
              <p>
                In arcu accumsan arcu adipiscing accumsan orci ac. Felis id enim
                aliquet. Accumsan ac integer lobortis commodo ornare aliquet
                accumsan erat tempus amet porttitor. Ante commodo blandit
                adipiscing integer semper orci eget. Faucibus commodo adipiscing
                mi eu nullam accumsan morbi arcu ornare odio mi adipiscing
                nascetur lacus ac interdum morbi accumsan vis mi accumsan ac
                praesent.
              </p>
            </div>
          </section>

          <section className="grid-wrapper">
            <div className="col-3">
              <span className="image fit">
                <img src={pic03} alt="" />
              </span>
            </div>
            <div className="col-9">
              <h3>後藤ごう</h3>
              <p>
                In arcu accumsan arcu adipiscing accumsan orci ac. Felis id enim
                aliquet. Accumsan ac integer lobortis commodo ornare aliquet
                accumsan erat tempus amet porttitor. Ante commodo blandit
                adipiscing integer semper orci eget. Faucibus commodo adipiscing
                mi eu nullam accumsan morbi arcu ornare odio mi adipiscing
                nascetur lacus ac interdum morbi accumsan vis mi accumsan ac
                praesent.
              </p>
            </div>
          </section>

          <section className="grid-wrapper">
            <div className="col-3">
              <span className="image fit">
                <img src={pic03} alt="" />
              </span>
            </div>
            <div className="col-9">
              <h3>後藤ごう</h3>
              <p>
                In arcu accumsan arcu adipiscing accumsan orci ac. Felis id enim
                aliquet. Accumsan ac integer lobortis commodo ornare aliquet
                accumsan erat tempus amet porttitor. Ante commodo blandit
                adipiscing integer semper orci eget. Faucibus commodo adipiscing
                mi eu nullam accumsan morbi arcu ornare odio mi adipiscing
                nascetur lacus ac interdum morbi accumsan vis mi accumsan ac
                praesent.
              </p>
            </div>
          </section>
        </div>
      </section>
    </div>
  </Layout>
);

export default Elements;
