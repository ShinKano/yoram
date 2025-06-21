import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../../components/layout';

import pic01 from '../../assets/images/pic01.jpg';
import pic02 from '../../assets/images/pic02.jpg';
import pic03 from '../../assets/images/pic03.jpg';
import pic04 from '../../assets/images/pic04.jpg';
import pic05 from '../../assets/images/pic05.jpg';
import pic17 from '../../assets/images/pic17.jpg';
import { SpanBlock } from '../../utils/components';

class ArchiveIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="Yoram Japan 2021 - アーカイブ"
          meta={[
            { name: 'description', content: 'Yoram Japan 2021年イベントのアーカイブページ' },
            { name: 'keywords', content: 'NVC, ヨラム, アーカイブ, 2021' },
          ]}
        ></Helmet>

        <div id="main">
          <section id="banner" className="major">
            <div className="inner">
              <header className="major">
                <h1>Yoram Japan 2021 アーカイブ</h1>
                <p>2021年に開催されたヨラムのワークショップ情報</p>
                <Link to="/" className="button">最新情報へ戻る</Link>
              </header>
            </div>
          </section>
          
          <section id="two">
            <div className="inner">
              <div className="covid-19">
                このイベントはオンライン開催で実施されました。
              </div>
              <header className="major">
                <h2>
                  <span style={{ fontSize: '16px' }}>CNVCトレーナー</span>
                  ヨラムが初来日！
                </h2>
              </header>
              <p>
                NVCグローバルフェスでも大きな話題となったアムステルダム在住CNVCトレーナーのヨラム・モセンゾンが初来日します。
                <br />
                イスラエル生まれ、オランダ・アムステルダム在住で元ダンサー・パフォーマー・振付師という経歴をもつ彼は、
                約20年前にNVCと出逢ってからその学びと共有に情熱を注いできました。
                <br />
                <br />
                2008年に全ての芸術活動を辞め、NVCをシェアし体現することに専念。
                ヨラムが目指しているのは、彼自身を含めた個々人が、選択と内なる明晰さから行動できるようになることです。
                ヨーロッパ各地で英語、フランス語、ヘブライ語のワークショップを開催し、非暴力コミュニケーション国際センター（CNVC）のミッションをサポートしています。
                アムステルダムでは0歳～21歳までの子供・若者を対象にしているNVCを土台にした学校LIFE！発起人の1人として現在も活躍中です。
              </p>
              <h4>リトリート・ワークショップで実践すること</h4>
              <p>
                インタラクティブで安全な環境のなか、参加者は自分自身の生活の中で起こるシチュエーションをワークの中で取り組むよう誘われます。
                WSではデモやロールプレイング、数々エクササイズを通して、NVCの価値観と表現方法を実際の暮らしの中に融合できるよう練習します。
              </p>
            </div>
          </section>
          <section id="one" className="tiles">
            <article style={{ backgroundImage: `url(${pic01})` }}>
              <header className="major">
                <h3>The Street Giraffe</h3>
                <h4>7月31日・8月1日（2021年）</h4>
                <p>ストリートジラフ</p>
                <p>誠実さと共感を磨く</p>
              </header>
              <Link to="/archive/yokohama" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${pic02})` }}>
              <header className="major">
                <h3>The Art of Honesty</h3>
                <h4>7月22日 ~ 7月25日（2021年）</h4>
                <p>アート・オブ・オネスティ</p>
                <p>
                  正直であろうとするときに<SpanBlock>起こるジレンマ</SpanBlock>
                </p>
              </header>
              <Link to="/archive/okinawa" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${pic03})` }}>
              <header className="major">
                <h3>お誘いに代えて</h3>
              </header>
              <Link to="/archive/invitation" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${pic04})` }}>
              <header className="major">
                <h3>動画リンク集</h3>
                <p>ヨラムのWS動画（日本語約付）</p>
              </header>
              <Link to="/archive/videos" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${pic17})` }}>
              <header className="major">
                <h3>参加要件</h3>
                <p>より学びを深めるために</p>
              </header>
              <Link to="/archive/requirements" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${pic05})` }}>
              <header className="major">
                <h3>スタッフ</h3>
                <p>ヨラム招聘チームの紹介</p>
              </header>
              <Link to="/archive/staff" className="link primary"></Link>
            </article>
          </section>
        </div>
      </Layout>
    );
  }
}

export default ArchiveIndex;