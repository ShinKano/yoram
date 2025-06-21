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
      <title>Radical Honesty | Yoram Japan 2026</title>
      <meta name="Radical Honesty" content="Radical Honesty" />
    </Helmet>

    <BannerLanding
      title="Radical Honesty"
      desc1="沖縄・基礎編　"
      desc2="自分も相手も、誰も傷つけることなく正直で在り続けるために"
    />

    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>4月17日 (木) 〜 19日 (土)</h2>
          </header>

          <h4>
            【沖縄: 基礎編】NVCの土台となる「自己への誠実さと対話への信頼」を育てる
          </h4>
          <p>
            本音を語るとは何か。どうすれば、相手を責めることなく自分の真実を表現できるのか。ヨラム独自の身体的で実践的なアプローチで、<strong>「率直さ」と「つながり」が両立する場の在り方</strong>を深めていきます。
          </p>

          <h4>「正直でいたい」――でも、それが誰かを傷つけてしまうのではないかと怖くなるとき、ありませんか？</h4>
          <ul>
            <li>本当のことを言えば、関係が壊れてしまうのでは？</li>
            <li>率直な気持ちを伝えることで、自分が拒絶されるのでは？</li>
          </ul>
          <p>
            このワークショップは、そんな「正直さとつながりのジレンマ」を、NVC（非暴力コミュニケーション）とRadical Honesty（徹底した正直さ）の実践を通して、優しく、力強くほどいていくための学びの場です。
          </p>

          <p>
            ヨラムは語ります：<br />
            「正直に在るとは、誰かに"ぶつける"ことではない。自分の内なる真実を大切にしながら、相手とのつながりを守る行為です。」
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
                <h3>ワークショップで探求すること</h3>
              </header>
              <ul>
                <li>自分の本音を、責めず・抑えず・投げつけずに表現する</li>
                <li>「NO」と言っても関係を壊さない伝え方</li>
                <li>相手の反応に引きずられず、自分の明晰さを保つ</li>
                <li>傷つけずに、境界線を引く勇気</li>
                <li>共感と率直さを同時に育てる対話の練習</li>
                <li>正直さが信頼と親密さを育むプロセス  ...など</li>
              </ul>
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
                <h3>正直で在り続けるために</h3>
              </header>
              <p>
                正直でありたい。でも、つながりも大切にしたい。
                この両方を同時に大切にできる道が、ここにあります。
              </p>
              <p>
                あなたの声を、あなたのまなざしを、この場に届けてください。
              </p>
              <p>
                <strong>だれも傷つけることなく、正直で在り続けるために。</strong>
                あなたのご参加を、心よりお待ちしています。
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
            <h2>参加費について</h2>
          </header>
          <p>
            このワークショップでは、スライディングスケール制（自己選択式の参加費）を採用しています。参加費は、あなたの<strong>現在の経済状況</strong>と、私たちの活動を<strong>どのように応援したいと感じてくださるか</strong>というお気持ちに基づいて、自由にお選びいただけます。
          </p>
          <p>
            この仕組みには、
          </p>
          <ul>
            <li>「人それぞれ、置かれている経済状況が異なること」</li>
            <li>「それでも、誰もがこの学びに触れられる場でありたいという願い」</li>
          </ul>
          <p>
            が込められています。どうぞ、<strong>ご自身の状況と心にしっくりくる金額</strong>をお選びください。
          </p>
          <h3>🌴 全日程参加（沖縄1＋沖縄2 通し参加）</h3>
          <div className="table-wrapper">
            <table>
              <tbody>
                <tr>
                  <td>早割（10月30日までのお振込）</td>
                  <td>107,520円</td>
                </tr>
                <tr>
                  <td>通常</td>
                  <td>134,000円</td>
                </tr>
                <tr>
                  <td>沖縄在住または29歳以下</td>
                  <td>80,640円</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>🌺 沖縄・基礎編 のみ参加（前半）</h3>
          <div className="table-wrapper">
            <table>
              <tbody>
                <tr>
                  <td>早割（10月30日までのお振込）</td>
                  <td>57,600円</td>
                </tr>
                <tr>
                  <td>通常</td>
                  <td>72,000円</td>
                </tr>
                <tr>
                  <td>沖縄在住または29歳以下</td>
                  <td>43,200円</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>🌊 沖縄2 のみ参加（後半）</h3>
          <div className="table-wrapper">
            <table>
              <tbody>
                <tr>
                  <td>早割（10月30日までのお振込）</td>
                  <td>76,800円</td>
                </tr>
                <tr>
                  <td>通常</td>
                  <td>96,000円</td>
                </tr>
                <tr>
                  <td>沖縄在住または29歳以下</td>
                  <td>57,600円</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* <header className="major">
            <h3>キャンセルポリシー</h3>
          </header>
          <div className="table-wrapper">
            <table>
              <tbody>
                <tr>
                  <td>6/15まで</td>
                  <td>ご予約金・振込み手数料を差し引いた残額 返金</td>
                </tr>
                <tr>
                  <td>6/16～6/22</td>
                  <td>（ご予約金・振込み手数料を差し引いた）80% 返金</td>
                </tr>
                <tr>
                  <td>6/23～7/11</td>
                  <td>（　同上　）50% 返金</td>
                </tr>
                <tr>
                  <td>7/12～当日</td>
                  <td>0% 返金</td>
                </tr>
              </tbody>
            </table>
          </div> */}

        </div>
      </section>

      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>開催概要</h2>
          </header>
          <h4>会場：うるま市浜比嘉島地域交流拠点施設 HAMACHŪ</h4>
          <h4>住所：〒904-2315　沖縄県うるま市勝連浜19番地</h4>
          <h4>定員：30名</h4>
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
                  <td>4/17（木）</td>
                  <td>15:00-18:00</td>
                  <td>オープニングセッション</td>
                </tr>
                <tr>
                  <td>4/18（金）</td>
                  <td>10:00-12:00</td>
                  <td>セッション</td>
                </tr>
                <tr>
                  <td>〃</td>
                  <td>13:00-18:00</td>
                  <td>セッション（昼食休憩含む）</td>
                </tr>
                <tr>
                  <td>4/19（土）</td>
                  <td>10:00-12:00</td>
                  <td>セッション</td>
                </tr>
                <tr>
                  <td>〃</td>
                  <td>13:00-16:00</td>
                  <td>統合・クロージングセッション</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            <strong>※通訳付き</strong><br />
            日本語通訳が入りますので、英語に不安がある方もご安心ください。
          </p>
        </div>
      </section>
    </div>
  </Layout>
);

export default Landing;
