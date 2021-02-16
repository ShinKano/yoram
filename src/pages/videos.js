import React from 'react';
import { Link } from 'gatsby';

import Helmet from 'react-helmet';
import Layout from '../components/layout';

import video01 from '../assets/images/video01.png';
import video02 from '../assets/images/video02.png';
import video03 from '../assets/images/video03.png';
import video04 from '../assets/images/video04.png';

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
          <h3>
            ヨラム・モセンゾンがこれまでに行ったワークショップや講演の動画集です。
          </h3>
          <p>全て日本語字幕付きです。YouTubeの設定からご利用ください。</p>

          <section>
            <a
              href="https://youtu.be/7mdxyYyk2JU"
              target="_blank"
              className="image main"
            >
              <img
                src={video03}
                alt="Short Introduction to Nonviolent Communication (NVC), by Yoram Mosenzon"
              />
            </a>
            <h3>
              Short Introduction to Nonviolent Communication (NVC), by Yoram
              Mosenzon
            </h3>
            <p>
              ヨラムによるNVCの紹介動画です。短いですがエッセンスがぎゅっと詰まっていてわかりやすい！
            </p>
          </section>

          <section>
            <a
              href="https://www.youtube.com/watch?app=desktop&v=KX_tgRM84RA&feature=share"
              target="_blank"
              className="image main"
            >
              <img
                src={video01}
                alt="Nonviolent Communication (NVC): Yoram Mosenzon full workshop: 'Connecting in Conflict'"
              />
            </a>
            <h3>
              Nonviolent Communication (NVC): Yoram Mosenzon full workshop:
              'Connecting in Conflict'
            </h3>
            <p>
              トルコ・イスタンブールで行われたワークショップです。2時間半の動画ですが全編日本語字幕が利用できます。
            </p>
          </section>

          <section>
            <a
              href="https://www.youtube.com/watch?v=LSGfqyhleUA&feature=youtu.be"
              target="_blank"
              className="image main"
            >
              <img
                src={video02}
                alt="Vulnerable honesty | Yoram Mosenzon | TEDxAmsterdamED"
              />
            </a>
            <h3>Vulnerable honesty | Yoram Mosenzon | TEDxAmsterdamED</h3>
            <p>
              アムステルダムで行われたTEDxでの講演です。簡潔にNVCのコンセプトを説明しています。
            </p>
          </section>

          <section>
            <a
              href="https://www.youtube.com/watch?v=AJ-ctpWQkZA&feature=share"
              target="_blank"
              className="image main"
            >
              <img
                src={video04}
                alt="Nonviolent Communication (NVC): Yoram Mosenzon workshop: 'Ask for the Moon'"
              />
            </a>
            <h3>
              Nonviolent Communication (NVC): Yoram Mosenzon workshop: 'Ask for
              the Moon'
            </h3>
            <p>
              アイルランドで行われたワークショップです。リクエストについて深掘りしています。
            </p>
          </section>
        </div>
      </section>
    </div>
  </Layout>
);

export default Videos;
