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
      <title>Connecting in Conflict | Yoram Japan 2026</title>
      <meta name="Connecting in Conflict" content="Connecting in Conflict" />
    </Helmet>

    <BannerLanding
      title="Connecting in Conflict"
      desc1="対立がつながりに変わるとき"
      desc2="共感と正直さが交わる場で"
    />

    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>4月11日 (金)・12日 (土)</h2>
          </header>
          <p>
            "対立"を避けるのではなく、その中にある「つながりの可能性」に目を向けていく2日間。
            共感と正直さが交わる場で、NVCのエッセンスを体験的に探求します。
          </p>

          <h4>― 対立をつながりに変える、NVCの深い実践へ ―</h4>
          <p>
            衝突やすれ違いが起きたとき、私たちはつい、防御したり、黙り込んだり、誰かを責めてしまったりします。でも、本当は―― その"対立"の奥にこそ、<strong>信頼やつながりの芽</strong>があることを、私たちはどこかで知っているのかもしれません。
          </p>

          <p>
            <strong>「Connecting in Conflict（対立の中でつながる）」</strong>は、葛藤の場面でこそ現れる"生きたNVC"を体験的に探求するワークショップです。
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
                <h3>ワークショップで探求すること</h3>
              </header>

              <ul>
                <li>対立が生じたときの「反応」から「選択」へシフトする練習</li>
                <li>怒り・怖れ・混乱に対して、避けることなく耳を澄ます方法</li>
                <li>「自分の声」と「相手への共感」を両方大切にする表現のあり方</li>
                <li>内なる葛藤との出会い方（自分の中の"複数の声"にどう向き合うか）</li>
                <li>ヨラムのガイドによるライブ・デモやロールプレイ、実践的な対話練習</li>
              </ul>
              <p>
                NVCの根幹にふれる体験が、あなた自身のからだ・こころ・声を通してじっくりと開かれていきます。
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
                <h3>このような方におすすめ</h3>
              </header>
              <ul>
                <li>NVCをある程度学び、さらに深めたい方</li>
                <li>対立や緊張に「避けずに向き合う力」を育てたい方</li>
                <li>「自分の声」と「相手への共感」を両方大切にする表現のあり方</li>
                <li>自分の「正直さ」と他者との「つながり」を両立させたい方</li>
                <li>ファシリテーター・カウンセラー・親・教育関係者など、人と深く関わる方</li>
              </ul>
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

          <div className="table-wrapper">
            <table>
              <tbody>
                <tr>
                  <td>早割（10月30日までのお振込）</td>
                  <td>96,000円（税込）</td>
                </tr>
                <tr>
                  <td>通常価格（自己選択式）</td>
                  <td>120,000円 〜 160,000円（税込）</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            ※ご自身の経済状況と応援のお気持ちに合わせてお選びください。
          </p>
          <br />
          <header className="major">
            <h3>スカラシップ（参加費への支援）</h3>
          </header>
          <p>
            この場をともに育む<strong>すべての支えが</strong>、
            しなやかに、創造性をもって、与え合い・受け取り合うよろこびに満たされることを、私たちは心から願っています。
            もし、参加費のご用意が難しく、このワークショップへの参加を諦めようと考えている方がいらっしゃいましたら――
          </p>
          <p>
            手放す前に、どうか私たちにご相談ください。
            現時点では、スカラシップ（奨学金）としての明確な準備金はございませんが、
            可能性を閉じることなく、<strong>一緒に創造的な方法を探っていけたら</strong>と願っています。
          </p>

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
                  <td>6/16～7/16</td>
                  <td>（ご予約金・振込み手数料を差し引いた）75% 返金</td>
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
          </div> */}
        </div>
      </section>

      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>開催概要</h2>
          </header>
          <h4>会場：国立オリンピック記念青少年総合センター</h4>
          <h4>住所：〒151-0052 東京都渋谷区代々木神園町３−１</h4>
          <h4>定員：50名</h4>
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
                  <td>4/11（金）</td>
                  <td>10:00～12:00</td>
                  <td>セッション</td>
                </tr>
                <tr>
                  <td>〃</td>
                  <td>10:00～13:15</td>
                  <td>食事休憩</td>
                </tr>
                <tr>
                  <td>〃</td>
                  <td>13:15～18:00</td>
                  <td>セッション</td>
                </tr>
                <tr>
                  <td>4/12（土）</td>
                  <td>10:00～12:00</td>
                  <td>セッション</td>
                </tr>
                <tr>
                  <td>〃</td>
                  <td>10:00～13:15</td>
                  <td>食事休憩</td>
                </tr>
                <tr>
                  <td>〃</td>
                  <td>13:15～18:00</td>
                  <td>セッション</td>
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
