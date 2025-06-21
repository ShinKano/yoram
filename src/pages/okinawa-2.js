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
      title="NVC Mediation"
      desc1="沖縄・応用編　"
      desc2="自分も相手も、誰も傷つけることなく正直で在り続けるために"
    />

    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>4月21日 (火) 〜 24日 (金)</h2>
          </header>

          <h4>
            【沖縄: 応用編】ミディエーション：対立の中に、つながりの種を見つける
          </h4>
          <p>
            この応用編では、<strong>人と人の間に立ち、対話を育てる“メディエーター（調停者）”の視点とスキル</strong>を学びます。
            家族、職場、グループ、そして自分自身との関係において、葛藤が起きたときに、どうすればそこに共感と明晰さをもたらせるのか。
            NVCを「聞く／伝える」だけでなく、<strong>関係性をつなぎ直すアート（技）として扱う</strong>内容です。
          </p>

          <h4>
            対話の調停術を学ぶ4日間
          </h4>
          <p>
            「話し合えば、わかり合える」<br />
            そう願っても、現実にはすれ違い、怒り、沈黙、諦め…。
            けれど――
          </p>
          <p>
            <strong>対立の渦の中にこそ、人と人がほんとうに出会うチャンスがある。</strong>
            このワークショップでは、ヨラムから非暴力コミュニケーション（NVC）を基盤とした「対話の調停術」を体験的に学びます。
          </p>
          <ul>
            <li>静けさの中で感情の渦を見守る「センタリング」</li>
            <li>対話の構造を紡ぐ「5つの動き（5 Movements）」</li>
            <li>自分と他者の両方に共感を注ぐ深い“在り方”を柱とした「聴く」ことと「介入する」ことの間のアート（技）</li>
          </ul>

          <h4>⚠️ 参加にあたってのお願い</h4>
          <p>
            東京及び沖縄基礎編のワークショップでは、特定の知識や経験がなくてもご参加いただけますが、より深くこの場に関わるために、以下のいずれかを事前に体験しておくことをおすすめします。
          </p>
          <ul>
            <li>書籍『NVC 人と人との関係にいのちを吹き込む法』『わかりあえないを越える』を読む。</li>
            <li>ヨラムのNVC紹介動画やワークショップ映像を視聴する。</li>
            <li>NVCに関連するワークショップ・勉強会・練習会などに参加する。</li>
            <li>NVCの感情・ニーズのリストなどを使って、自分の内面をふりかえるワークをやってみる。</li>
          </ul>

          <p>
            ※これらは必須ではありませんが、ワークショップの学びをより豊かにする助けとなります。
          </p>
        </div>
      </section>
      <section id="two" className="spotlights">
        <section>
          <Link className="image">
            <img src={pic10} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>【沖縄: 応用編】参加要件</h3>
              </header>
              <p>
                以下のいずれかを満たす方を対象としています
              </p>
              <ul>
                <li>CNVC認定トレーナーから、NVCトレーニングを30時間以上受けた経験がある方</li>
                <li>今回の東京ワークショップ または 沖縄基礎編（Radical Honesty）に参加される方</li>
              </ul>
              <p>
                応用編では、NVCの基本的な理解や実践経験を前提に、より深い探求と応用に取り組みます。ご自身が参加要件を満たしているか気がかりのある場合は、どうぞお気軽にご相談ください。あなたの学びの意志を尊重しながら、一緒に最適な参加の形を考えさせていただきます。
              </p>
            </div>
          </div>
        </section>
        <section>
          <Link className="image">
            <img src={okinawa01} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>ワークショップで探求すること</h3>
              </header>
              <ul>
                <li>感情が揺れる場面で、自分をセンターに保つ力</li>
                <li>反応ではなく共感から介入する調停の基本</li>
                <li>争いや誤解を「誰のせいでもない」形で扱う手法</li>
                <li>“NO”が出ても続けられる合意形成の土台</li>
                <li>家族・組織・パートナー・自分自身への応用</li>
              </ul>
              <p>
                「調停」は特別な人の役割ではなく、<strong>すべての人が学ぶことのできる人生のスキル</strong>です。

                あなたの内なる平和と、人と人とのあいだに立つ力をこの学びの場で、ともに育てていきましょう。
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
        </section>
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
