import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import BannerLanding from '../components/BannerLanding';
import { SpanBlock } from '../utils/components';

import pic08 from '../assets/images/pic08.jpg';
import pic12 from '../assets/images/pic12.jpg';
import pic13 from '../assets/images/pic13.jpg';
import pic14 from '../assets/images/pic14.jpg';

const Landing = props => (
  <Layout>
    <Helmet>
      <title>The Street Giraffe | Yoram Japan 2021</title>
      <meta name="The Street Giraffe" content="The Street Giraffe" />
    </Helmet>

    <BannerLanding
      title="The Street Giraffe"
      desc1="ストリートジラフ"
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
            <img src={pic12} alt="共感" />
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
        {/* <section>
          <Link className="image">
            <img src={pic13} alt="ウィリング横浜外観" />
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
            <img src={pic14} alt="横浜名物" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>費用・定員</h3>
              </header>
              <p>
                参加費はスライディングスケール料金体系を採用しております。
                <br />
                受講料の選択は、あなたの収入と自由意志によります。スライディングスケールの背景にある考え方は、私たちは皆、現在の経済状況が異なるため、あなたの経済状況と私たちをサポートしたいという個人的な希望に合うように、柔軟に対応したいと考えています
              </p>
              <p>
                早割り: ¥45,000〜¥40,000
                <br />
                通常料金: ¥50,000〜¥45,000
              </p>
              <p>
                ※早割対象者は4/1までに申し込みフォームを送信し、予約確定メールを受領した方となります。4/2以降のお申込み分は、通常料金を適用いたします。
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
                  <td>¥45,000〜¥40,000</td>
                </tr>
                <tr>
                  <td>通常料金</td>
                  <td>¥50,000〜¥45,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            ※早割対象者は4/1までに申し込みフォームを送信し、予約確定メールを受領した方となります。4/2以降のお申込み分は、通常料金を適用いたします。
          </p>

          <header className="major">
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
                  <td>6/16～7/16</td>
                  <td>（ご予約金・振込み手数料を差し引いた）80% 返金</td>
                </tr>
                <tr>
                  <td>7/17～7/23</td>
                  <td>（　同上　）50% 返金</td>
                </tr>
                <tr>
                  <td>7/24～当日</td>
                  <td>0% 返金</td>
                </tr>
              </tbody>
            </table>
          </div>
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
                  <td>7/31</td>
                  <td>16:00～19:30</td>
                  <td>セッション</td>
                </tr>
                <tr>
                  <td>〃</td>
                  <td>19:30～20:45</td>
                  <td>食事休憩</td>
                </tr>
                <tr>
                  <td>〃</td>
                  <td>20:45～22:30</td>
                  <td>セッション</td>
                </tr>
                <tr>
                  <td>8/1</td>
                  <td>16:00～19:30</td>
                  <td>セッション</td>
                </tr>
                <tr>
                  <td>〃</td>
                  <td>19:30～20:45</td>
                  <td>食事休憩</td>
                </tr>
                <tr>
                  <td>〃</td>
                  <td>20:45～22:30</td>
                  <td>セッション</td>
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
