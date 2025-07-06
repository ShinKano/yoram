import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import BannerLanding from '../components/BannerLanding';
import { SpanBlock } from '../utils/components';

import pic08 from '../assets/images/pic08.jpg';
import pic12 from '../assets/images/pic12.jpg';

const Landing = props => (
  <Layout>
    <Helmet>
      <title>Connecting in Conflict | Yoram Japan 2026</title>
      <meta name="Connecting in Conflict" content="Connecting in Conflict" />
    </Helmet>

    <BannerLanding
      title="Connecting in Conflict"
      desc1="対立がつながりに変わるとき"
      desc2=""
    />

    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>4月11日 (金)・12日 (土)</h2>
          </header>
          <h4>
            対立は苦手ですか？
          </h4>

          <p>
            学校では、教科書の知識はたくさん学びましたが、人とどう関わるかというスキルは、ほとんど学ぶことがありませんでした。この週末は、「対話の技術」を学ぶことにフォーカスします。
          </p>

          <p>
            対立の解決やコミュニケーションの力を育み、人間関係をより深めるためのスキルを身につけていきましょう。
            そして何より大切なのは、対立を楽しむ方法を学ぶこと。それは、自分自身と相手をもっと深く知り、信頼を築き、癒し合い、共に生き、愛することを学ぶ、最も意味のある瞬間になるかもしれません。
          </p>

          <h4>― 対立をつながりに変える、NVCの深い実践へ ―</h4>
          <p>
            私はこれまで多くの国を旅し、何千人もの人々に出会ってきました。

            その中で私たち全員に共通していることがひとつあります。

            それは、<strong>誰もが何らかの「対立」を抱えている</strong>ということです。

            ある人はその対立を巧みに隠し、ある人は大きな声で表現します。

            けれど、私が出会ったすべての人が、誰かとの関係の中で何らかのチャレンジを経験しているのです。

            家族、子ども、パートナー、友人、ご近所、同僚との間で、

            私たちは誰しも、苛立ち、失望、傷つき、不安、葛藤、そしてコミュニケーションの難しさに直面します。
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
                <li>対立の中でつながり、信頼を深めるプロセスへと変容する方法</li>
                <li>誤解や意見の違いへの対処法</li>
                <li>「共感」の力と、それが状況や関係性をどう変容させるか</li>
                <li>自分に正直でいながら、相手を裁かない伝え方</li>
                <li>自分の内側にある葛藤（心の中の異なる声どうしの対立）への向き合い方</li>
                <li>自分の願いを明確に伝え、受け取ってもらう力</li>
                <li>その他、さまざまなことを扱います</li>
              </ul>
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
                <h3>学びのスタイル</h3>
              </header>
              <p>
                このワークショップでは、<strong>安全でインタラクティブな学びの場</strong>の中で、
                あなた自身の実際の人生の事例を使って探究していきます。
                デモンストレーション、ロールプレイ、エクササイズなどを通して、
                NVCの価値観や言葉を<strong>日常生活の中で自然に使えるように統合していくこと</strong>を目指します。
              </p>
              <p>
                私たちの提供スタイルは：

                理論30％、実践・デモ・いまここで起きていることからの学びが70％です。
                そして何より、NVCを「体現すること」に焦点を当てています。
                深く飛び込む準備をして、ぜひご参加ください。
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
                  <td>早割（10月31日までのお振込）</td>
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
          <div className="table-wrapper">
            <p>
              この場をともに育む<strong>すべての支えが</strong>、しなやかに、創造性をもって、与え合い・受け取り合うよろこびに満たされることを、私たちは心から願っています。
              <br />
              もし、参加費のご用意が難しく、このワークショップへの参加を諦めようと考えている方がいらっしゃいましたら――
              <br />
              手放す前に、どうか私たちにご相談ください。
              <br />
              <br />
              現時点では、スカラシップ（奨学金）としての明確な準備金はございませんが、可能性を閉じることなく、<strong>一緒に創造的な方法を探っていけたら</strong>と願っています。
            </p>
          </div>

          <header className="major">
            <h3>キャンセルポリシー</h3>
          </header>
          <div className="table-wrapper">
            <p>
              参加が確定された方は、10月31日（金）までにご入金をお願いいたします。
              ご入金後のキャンセルにつきましては、原則としてご返金ができかねますことを、あらかじめご了承ください。なお、早割でのお申し込みをご希望の方も、入金期限は10月31日（金）となります。
            </p>

            <p>
              今回のワークショップは、海外から講師をお迎えするため、講師側の提示する条件に基づき、早い段階で参加人数を確定する必要があります。
              この見通しが、講師の渡航準備やスケジュール調整にも影響するため、参加をご検討の際は、ご自身のスケジュールや体調などを十分にご確認いただき、「参加できる」と確信を持たれたタイミングでのご入金をお願いいたします。
            </p>

            <p>
              やむを得ない事情が発生した場合には、個別にご相談を承り、できる限りの対応を検討させていただきます。
              ただし、個人的なご都合によるキャンセルについては、誠に申し訳ありませんが、ご返金をお断りさせていただく場合があることをご理解いただけますと幸いです。
            </p>
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
