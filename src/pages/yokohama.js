import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import BannerLanding from '../components/BannerLanding';
import { SpanBlock } from '../utils/components';

import pic08 from '../assets/images/pic08.jpg';
import pic09 from '../assets/images/pic09.jpg';
import pic10 from '../assets/images/pic10.jpg';
import pic12 from '../assets/images/pic12.jpg';
import pic13 from '../assets/images/pic13.jpg';
import pic14 from '../assets/images/pic14.jpg';

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
          <h4>
            古典的キリンから
            <SpanBlock>ストリート・ジラフへ</SpanBlock>
          </h4>
          <p>
            NVCを学び始めると最初に、僕が「古典的キリン」と呼んでいるものを学ぶだろう。その言葉遣いがつながりを作るのに必ずしも役に立たないことに気づいたんじゃないかな。
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '138px auto',
            }}
          >
            <div>古典的キリン：</div>
            <div>「つながりを必要としていますか？」</div>

            <div>ジャッカル：</div>
            <div>
              「はあ？別に必要なんかないよ、ニーズ、ニーズばかり言うのはよしてくれ！」
            </div>
            <div>古典的キリン：</div>
            <div>「私は苛立ちを感じていて、自由のニーズがあります」</div>

            <div>ジャッカル：</div>
            <div>
              「いつも自分のことばっかり！NVCを始めてから自分勝手になったよね！」
            </div>
            <div>古典的キリン：</div>
            <div>
              「あなたが喜びからそうしたいと感じるなら、お皿を洗って欲しいという望みがある」
            </div>

            <div>ジャッカル：</div>
            <div>「お願いだからロボットみたいな話し方やめてくれない？」</div>
          </div>
          <p>
            <br />
            古典的キリンは自分の内側にしっかりと持つ意識であって、日常生活のことばじゃない。
            <br />
            ストリート・ジラフは、それぞれの人の、それぞれの状況に合った言葉を探している。自分の価値観に忠実でありながら、つながりを生み出すためにはどうすればいいのかを模索していく繊細なアートなんだ。
            <br />
            このワークショップでは、「ストリート・ジラフ」語を話す際の原則と実践に焦点を当て、「ストリート・ジラフ」語を流暢に話すための練習をする。
          </p>
        </div>
      </section>
      <section id="two" className="spotlights">
        <section>
          <Link className="image">
            <img src={pic12} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>誠実さと共感を磨く</h3>
              </header>

              <h4>共感のスキルを磨く</h4>
              <p>
                家庭・職場・子育てなど、あらゆる状況で、様々な状態の人々にどのように共感を届けるか？
                （怒り、憂鬱、距離感...など）
                つながり、協力、創造性と愛を生み出すようなやり方で、自分そして相手の本物さにしっかりと立つには？
              </p>
            </div>
          </div>
        </section>
        <section>
          <Link className="image">
            <img src={pic08} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>頭ではなく、体と心で話す。</h3>
              </header>
              <p>
                「正直さ」はあなたにとって最も壊れやすく、脆い部分かもしれません。それゆえ時に鋭く、刃のように誰かを傷つけてしまうことさえあります。
                <br />
                正直さのスキルを磨くことは、決して理性で刃を隠すことではありません。誰もが抱える美しい「正直さ」をどうやって伝えればよいでしょう？
              </p>
            </div>
          </div>
        </section>
        <section>
          <Link className="image">
            <img src={pic13} alt="ウィリング横浜外観" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>会場・アクセス</h3>
              </header>
              <h4>ウィリング横浜（神奈川県横浜市港南区）</h4>
              <p>時間: 10am ～18pm （途中ランチ休憩含む）</p>
              {/* <ul className="actions">
                <li>
                  <Link
                    to="http://www.yokohamashakyo.jp/willing/index.html"
                    className="button"
                  >
                    公式サイトへ
                  </Link>
                </li>
              </ul> */}
              <p>※会場への直接のお問合せはご遠慮ください。</p>
            </div>
          </div>
        </section>
        <section>
          <Link className="image">
            <img src={pic14} alt="横浜名物" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>費用について</h3>
              </header>
              <h4>オンライン開催の場合、変動する可能性がございます</h4>
              <p>参加費：6万円</p>
              <p>
                早割：？月？日お申込みまで5万5千円
                <br />
                定員：35名
              </p>
            </div>
          </div>
        </section>
      </section>
    </div>
  </Layout>
);

export default Landing;
