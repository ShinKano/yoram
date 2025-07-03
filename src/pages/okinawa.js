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

          <h4>
            【沖縄: 基礎編】NVCの土台となる「自己への誠実さと対話への信頼」を育てる
          </h4>
          <h4>
            正直さ（Honesty）
          </h4>
          <p>
            私たちの中に感情が動いているとき（たとえば、苛立ちやイライラ、会話中の退屈さなど）、私たちはしばしば、ふたつの（どちらもつらい）選択肢のあいだで引き裂かれるような感覚を抱きます。
            <br />
            「言うべきか、それとも言わないべきか？」
          </p>
          <p>
            言えば、相手を傷つけたり、つながりを損なうかもしれない。
            でも言わなければ、自分の本当の気持ちを押し隠すことになり、自分自身とのつながりが切れてしまう。

            このように「どちらかしかない」と考えると、どちらを選んでも何かを失ってしまう結果になります。どちらの場合でも、大切なつながりの一部を失うリスクがあるのです。私はこれを「正直さのジレンマ」と呼んでいます。

            <strong>自分を大切にしながら、率直に関わり、つながりを深めるにはどうしたらいいのでしょうか？</strong>
          </p>

          <h4>つながりを絶つ？それともガマンする？ーどちらも選びたくない！</h4>
          <p>
            では、どうすれば、正直であることと、人との関係を大切にすることを両立できるのでしょうか？

            この問いこそが、私を「非暴力コミュニケーション（NVC）」へと導きました。
            NVCは、私たちが日々直面する無数の場面で、このジレンマを乗り越えるための、明確で実践的な道筋を示してくれます。
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
              <header className="major">
                <h3>学びのスタイル</h3>
              </header>
              <p>
                このワークショップでは、安全でインタラクティブな学びの場のなかで、参加者それぞれの実生活の事例をもとに探究していきます。
                NVCの価値観や言葉を、日常生活の中にしっかりと根づかせていくために、デモンストレーション、ロールプレイ、練習などを行います。
              </p>
              <p>
                私たちの学びのスタイルは、理論30％、実践・デモ・いまここで起きている生の状況から学ぶ体験が70％です。
                特に、非暴力コミュニケーションを「体現すること（Embodiment）」に力を注いでいます。どうぞ、飛び込む準備をしてご参加ください。
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
                  <td><s>早割料金</s></td>
                  <td><s>¥85,000〜¥80,000</s></td>
                </tr>
                <tr>
                  <td>通常料金</td>
                  <td>¥89,000〜¥85,000</td>
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
                  <td>4/17（木）</td>
                  <td>13:30</td>
                  <td>集合</td>
                </tr>
                <tr>
                  <td>〃</td>
                  <td>14:00</td>
                  <td>開始</td>
                </tr>
                <tr>
                  <td>4/18（金）</td>
                  <td>13:30</td>
                  <td>集合</td>
                </tr>
                <tr>
                  <td>〃</td>
                  <td>14:00</td>
                  <td>開始</td>
                </tr>
                <tr>
                  <td>4/19（土）</td>
                  <td>13:30</td>
                  <td>集合</td>
                </tr>
                <tr>
                  <td>〃</td>
                  <td>14:00</td>
                  <td>開始</td>
                </tr>
                <tr>
                  <td>〃</td>
                  <td>16:00</td>
                  <td>解散</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  </Layout>
);
