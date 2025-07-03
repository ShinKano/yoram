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

          <h4>
            メディエーター（仲介者）
          </h4>
          <p>
            「メディエーター」は、ひとつの職業の名称であると同時に、人生や社会の中で果たす重要な役割でもあります。
            私の願いは、この地球上のすべての人が、メディエーション（対立の仲介）のスキルを身につけることです。

            このコースは、メディエーションを人生のスキルとして学びたい方、または職業として身につけたいと考えている方を対象にデザインされています。
          </p>


          <h4>メディエーションを、基本的な社会的スキルへ</h4>
          <p>
            あなたが子どもたち、友人、同僚と過ごしたり、会議や集まりに参加したりする機会があるなら、

            すでにある程度のメディエーションスキルを使っていることでしょう。

            「対立」とは、必ずしも複数の人が声を荒げて言い合うことを意味するわけではありません。

            人と人が協力しようとするとき、そこには大小さまざまな課題、誤解、緊張、言葉にされないフラストレーションが生じるものです。
          </p>

          <h4>日常生活におけるメディエーション</h4>
          <p>
            日常生活におけるメディエーションの実践は、「当事者2人だけで向き合うには限界がある」という理解を土台にしています。

            感情が高ぶっているとき、2人のあいだには共感や、相手の美しさを見ようとする余裕が生まれにくくなります。

            そこでメディエーターは、感情的に巻き込まれていない第三者として登場し、お互いのニーズを見つけ出し、つながりや協力、創造性を引き出すサポートをします。
          </p>

          <div className="profile-message">
            <p>
              もしメディエーションが、3歳から学校で教えられる基本的なライフスキルだったら…と願っています。私は、人間すべてがメディエーションのスキルを身につけ、対立や誤解、意見の相違が生じたときに、理解・協力・つながりを育むことができる世界を夢見ています。
            </p>
            {/* 右寄せにする */}
            <div className="right">
              <p>
                ── ヨラム・モセンゾン
              </p>
            </div>
          </div>


          <br />


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

          <p>
            本ワークショップでは、自己理解、人との関係、そして社会的な構造への気づきを深めるために、NVC（非暴力コミュニケーション）の視点や対話のプロセスを活用します。<br />
            この場は、医療的な支援や心理療法を目的としたものではなく、学び・気づき・関係性の質の変化を目的としています。深い個人的な癒しや過去のトラウマに焦点を当てる場ではないことをご理解ください。
          </p>

          <p>
            ご参加にあたって、以下の点へのご協力をお願いいたします。
          </p>
          <ul>
            <li>安全であたたかな学びの場を共につくっていきたいと考えていますが、ご自身の心理的な安心感に配慮し、無理のない範囲でご参加ください。</li>
            <li>必要に応じて個人的なテーマが扱われる場面もありますが、講師・スタッフはいずれも臨床的な支援を行う立場にはありません。</li>
            <li>ご自身の状態に合わせて、自分のペースで関わっていただくことが大切にされます。セルフケアの責任を持ってご参加ください。</li>
            <li>現在、深い癒しや心理的なケアを必要とされている方は、主治医や専門機関とご相談のうえ、ご参加をご検討ください。</li>
            <li>ワークショップ中に心身の不調を感じた場合は、ご自身の判断で専門機関などへのご相談をお願いいたします。</li>
          </ul>

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
                <li>今回の東京ワークショップ または 沖縄基礎編（Radical Honesty）に参加される方</li>
                <li>CNVC認定トレーナーから、NVCトレーニングを30時間以上受けた経験がある方</li>
              </ul>
              <p>
                ご自身が参加要件を満たしているか気がかりのある場合は、どうぞお気軽にご相談ください。あなたの学びの意志を尊重しながら、一緒に最適な参加の形を考えさせていただきます。
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
                <h3>学びのスタイル</h3>
              </header>
              <p>
                このコースでは、参加者それぞれが自分の実生活の具体的な場面を扱いながら、
                安全でインタラクティブな学びの場で共に探究していきます。
                NVC（非暴力コミュニケーション）の価値観と言葉を、日常により深く根づかせていくために、デモンストレーション、ロールプレイ、エクササイズなどを行います。
              </p>
              <p>
                私たちの指導スタイルは、理論30％、実践・デモ・いまここで実際に起きていることからの学びが70％です。
                とくに、非暴力コミュニケーションを「体現すること」に重点を置いています。
                どうぞ、深く飛び込む準備をしてご参加ください。
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
                  <td>早割（10月31日までのお振込）</td>
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
                  <td>早割（10月31日までのお振込）</td>
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
                  <td>早割（10月31日までのお振込）</td>
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
            {/* <table>
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
            </table> */}
          </div>

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
                  <td>4/21（火）</td>
                  <td>13:30</td>
                  <td>集合</td>
                </tr>
                <tr>
                  <td>〃</td>
                  <td>14:00</td>
                  <td>開始</td>
                </tr>
                <tr>
                  <td>4/22（水）</td>
                  <td>13:30</td>
                  <td>集合</td>
                </tr>
                <tr>
                  <td>〃</td>
                  <td>14:00</td>
                  <td>開始</td>
                </tr>
                <tr>
                  <td>4/23（木）</td>
                  <td>13:30</td>
                  <td>集合</td>
                </tr>
                <tr>
                  <td>〃</td>
                  <td>14:00</td>
                  <td>開始</td>
                </tr>
                <tr>
                  <td>4/24（金）</td>
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
