import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import BannerLanding from '../components/BannerLanding';

import pic08 from '../assets/images/pic08.jpg';
import pic09 from '../assets/images/pic09.jpg';
import pic10 from '../assets/images/pic10.jpg';
import { SpanBlock } from '../utils/components';

const Landing = props => (
  <Layout>
    <Helmet>
      <title>Okinawa | Yoram Japan 2021</title>
      <meta name="description" content="Landing Page" />
    </Helmet>

    <BannerLanding
      title="沖縄リトリート"
      desc1="The Art of Honesty"
      desc2="正直であろうとするときに起こるジレンマ"
    />

    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>7月22日 ~ 7月25日</h2>
          </header>
          <h4>リトリートで僕たちが練習するのは：</h4>
          <ul>
            <li>
              遠ざける代わりにつながりを生みだすようなやり方で、フルに正直/誠実でいる。相手と共に在ると同時に自分自身の本物さにつながる方法。
            </li>
            <li>
              「話されていないことを話し」始めるには。そしてチャレンジを要する、言うのが恐ろしい、正直な対話をナビゲートしていく。
            </li>
            <li>
              「親密な関係」の中での正直/誠実さ：起こってくる痛みをどのように扱うのか。フルに正直でない時に生じる代償とは何か。セックスに関してどのように正直でいられるのか。
            </li>
            <li>
              欲しいものを求める方法：小さくまとまるのではなく「ビッグ」に行こう。
            </li>
            <li>
              対立をいかに楽しむか（あらゆる方法で避けようとする代わりに）
            </li>
            <li>どんな表現であっても、相手の真の意図（正直さ）を聴く方法。</li>
            <li>
              「誰が正しい/間違っている」から、「お互いがまるごとの自分でいて、その違いを楽しむ」方法
            </li>
            <li>
              退屈で分断された会話に、どのようにしていのちを吹き込むか。お互いにとって関係性を有意義なものにするには。
            </li>
            <li>
              自分自身のスピリチュアリティ/誠実さと自由から行動する。そしてマーシャル・ローゼンバーグが言った「退屈で死んだ良い人たち」が住む世界を後にする。
            </li>
          </ul>
        </div>
      </section>
      <section id="two" className="spotlights">
        <section>
          <Link className="image">
            <img src={pic08} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              {/* <header className="major"> */}
              <h3>正直であろうとする時に起きるジレンマ</h3>
              {/* </header> */}
              <p>
                人間関係の中でこう考えることがよくあるんだ。
                <br />
                「これを言うべきだろうか、それとも言わずにいるべきか」
                <br />
                「正直であるべきなのか、控えるべきか」
                <br />
                <br />
                このようなジレンマは次の核となるチャレンジを表している：
                どうすれば人々とフルに共にいられるだろうか。もし自分の全部をさらけ出してしまったら、ものすごい対立と痛みが生じてくるだろう。
                そしてもし自分の中のいくつものパーツを隠してしまったら、本当にそこにいることにはならないだろう。
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
              {/* <header className="major"> */}
              <h3>
                つながりを危険にさらす方を選ぶのか、
                <SpanBlock>それともつながりから消えてしまおうか？</SpanBlock>
                <SpanBlock>どっちも嫌だ！</SpanBlock>
              </h3>
              {/* </header> */}
              <h4></h4>
              <p>
                じゃあどうすれば、今ある関係性を大事にしながら、フルに根底から正直でいられるのだろうか。
                この問いが、僕をNVCに惹きつけたものの中心にあった。
                <br />
                NVCは日常の本当に沢山のシチュエーションの中で、
                この核心的ジレンマをナビゲートするためのクリアで実践的なやり方を僕に示してくれた。
              </p>
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
                <h3>会場・アクセス</h3>
              </header>
              <h4>ネイチャーみらい館</h4>
              <p>
                住所: 沖縄県国頭郡金武町金武11818-2
                <br />
                定員: 30名
              </p>
              <p>
                ※7/22に那覇空港から会場まで送迎バスがご利用できます。
                <br />
                （事前申込み必要 / 詳細は「費用について」をご覧ください）
              </p>
              <ul className="actions">
                <li>
                  <Link to="https://www.nature-kin.com/" className="button">
                    公式サイトへ
                  </Link>
                </li>
              </ul>
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
                <h3>費用について</h3>
              </header>
              <p>
                参加費：16万5千円（講座料金・通訳料・宿泊費・食費*込み）
                <br />
                *食費（1日目夕食、2日目.3日目:朝昼夕食、4日目:朝昼食）
              </p>
              <p>早割：？月？日お申込みまで15万5千円</p>

              <p>
                那覇空港 → 会場送迎バス: 1000円/片道
                <br />
                （定員30名 / 当日那覇空港12時出発 / 事前申込み必要）
              </p>
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
                <h3>田んぼ泥んこ体験</h3>
              </header>
              <p>
                2日目または3日目に「田んぼ泥んこ体験」を開催予定！田植えはしませんが（笑）
                <br />
                泥んこまみれで童心に返って遊びましょう！参加希望者は捨てても構わない服とタオル、ゴーグルのご用意を！
              </p>
              <p>参加：自由</p>
              <p>費用：700円（現地払い）</p>
            </div>
          </div>
        </section>
      </section>
    </div>
  </Layout>
);

export default Landing;
