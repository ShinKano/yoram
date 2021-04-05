import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import BannerLanding from '../components/BannerLanding';

import okinawa01 from '../assets/images/okinawa01.jpg';
import okinawa02 from '../assets/images/okinawa02.jpg';
import pic12 from '../assets/images/pic12.jpg';
import pic09 from '../assets/images/pic09.jpg';
import pic10 from '../assets/images/pic10.jpg';
import { SpanBlock } from '../utils/components';

const Landing = props => (
  <Layout>
    <Helmet>
      <title>The Art of Honesty | Yoram Japan 2021</title>
      <meta name="The Art of Honesty" content="The Art of Honesty" />
    </Helmet>

    <BannerLanding
      title="The Art of Honesty"
      desc1="アート・オブ・オネスティ"
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
            <img src={pic12} alt="" />
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
        {/* <section>
          <Link className="image">
            <img src={okinawa01} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>スケジュール</h3>
              </header>
            </div>
          </div>
        </section> */}
        {/* <section>
          <Link className="image">
            <img src={pic10} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>費用について</h3>
              </header>
              <p>
                参加費はスライディングスケール料金体系を採用しております。
                <br />
                受講料の選択は、あなたの収入と自由意志によります。スライディングスケールの背景にある考え方は、私たちは皆、現在の経済状況が異なるため、あなたの経済状況と私たちをサポートしたいという個人的な希望に合うように、柔軟に対応したいと考えています
              </p>
              <p>
                早割り:
                <br />
                通常料金: ¥89,000〜¥85,000
              </p>
            </div>
          </div>
        </section> */}
      </section>

      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>費用について</h2>
          </header>
          <p>参加費はスライディングスケール料金体系を採用しております。</p>
          <p>
            受講料の選択は、あなたの収入と自由意志によります。スライディングスケールの背景にある考え方は、私たちは皆、現在の経済状況が異なるため、
            あなたの経済状況と私たちをサポートしたいという個人的な希望に合うように、柔軟に対応したいと考えています。
          </p>
          <p>
            当イベントもConnecting2Lifeの意図をできるだけ反映したいと考え、スライディングスケールを採用しておりますが、
            日本での開催は通訳やその他の配慮が必要となることからスケールの選択を狭めなければならないことを残念に思っています。
          </p>

          <div className="table-wrapper">
            <table>
              <tbody>
                <tr>
                  <td>早割料金</td>
                  <td>¥85,000〜¥80,000</td>
                </tr>
                <tr>
                  <td>通常料金</td>
                  <td>¥89,000〜¥85,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            ※早割対象者は4/1までに申し込みフォームを送信し、予約確定メールを受領した方となります。4/2以降のお申込み分は、通常料金を適用いたします。
          </p>
        </div>
      </section>

      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>定員・スケジュール</h2>
          </header>
          <h4>定員：45名</h4>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>日付</th>
                  <th>時間</th>
                  <th>内容</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>7/22</td>
                  <td>20:00-22:30</td>
                  <td>オリエンテーション、自己紹介など</td>
                </tr>
                <tr>
                  <td>7/23 & 7/24</td>
                  <td>15:30-18:00</td>
                  <td>セッション</td>
                </tr>
                <tr>
                  <td>〃</td>
                  <td>18:00-20:00</td>
                  <td>食事休憩</td>
                </tr>
                <tr>
                  <td>〃</td>
                  <td>20:00-22:30</td>
                  <td>セッション</td>
                </tr>
                <tr>
                  <td>7/25</td>
                  <td>15:30-18:00</td>
                  <td>お祝いと嘆き、統合の時間、クロージング</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  </Layout>
);

export default Landing;
