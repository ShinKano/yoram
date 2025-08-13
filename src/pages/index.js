import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import Banner from '../components/Banner';

import pic01 from '../assets/images/pic01.jpg';
import pic02 from '../assets/images/pic02.jpg';
import pic03 from '../assets/images/pic03.jpg';
import pic04 from '../assets/images/pic04.jpg';
import pic05 from '../assets/images/pic05.jpg';
import pic17 from '../assets/images/pic17.jpg';
import pic16 from '../assets/images/pic16.jpg';
import yoramProfile from '../assets/images/profile01.png';
import { SpanBlock } from '../utils/components';

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="Yoram Japan 2026"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        ></Helmet>

        <Banner />

        <div id="main">
          <section id="two">
            <div className="inner">
              <div className="covid-19">
                2026年4月 待望のワークショップ＆リトリートを開催予定です！（通訳付き）
              </div>
              <header className="major">
                <h2>
                  <span style={{ fontSize: '16px' }}>CNVC認定トレーナー </span>
                  <br className="mobile-break" />
                  ヨラム・モセンゾン <br className="mobile-break" />ついに日本初来日！
                </h2>
              </header>
              <p>
                2021年に予定されていた来日がコロナのパンデミックにより、急遽オンライン開催になったことを覚えておいでの方も多くいらっしゃるかと思います。そのときの世話役代表を務められた仲間聡子さんは、「世界11ヶ国から参加があり、大変貴重な場となったものの、日本人のためのWSという目的が果たせなかったのが心残り」だったそうです。私たちも同じ思いでした。
              </p>
              <p>
                だからこそ、「いつかきっと日本でヨラムのNVCを体験したい！」という思いを温め続けてこれたのだと思います。
              </p>
              <p>
                そしてついに、2026年。その願いが現実になります！
              </p>


            </div>
          </section>

          <section id="profile" className="profile-section">
            <div className="inner">
              <header className="major">
                <h3>講師プロフィール</h3>
              </header>
              <div className="profile-content">
                <div className="profile-image">
                  <img src={yoramProfile} alt="ヨラム・モセンゾン" />
                  <h3 className='profile-name'>ヨラム・モセンゾン</h3>
                  <p className="profile-name">CNVC認定トレーナー<br />イスラエル生まれ<br />アムステルダム在住</p>
                </div>
                <div className="profile-text">
                  <div className="profile-highlights">
                    <p>元ダンサーとして身体性を土台に、NVCをただ「話し方のスキル」としてではなく、在り方のトレーニングとして深く体現する独自のアプローチで知られています。</p>

                    <p>25年前にＮＶＣに出会い、情熱的に学び続け、2008年、すべての芸術活動を手放し、人生をNVCの実践と分かち合いに捧げる決意をします。</p>

                    <p>「自分自身を含むすべての人が、内なる明晰さと選択から行動できるようになること」</p>

                    <p>ヨーロッパ各地で英語・フランス語・ヘブライ語によるワークショップを展開し、非暴力コミュニケーション国際センター（CNVC）のミッションにも深く貢献しています。</p>

                    <p>4歳〜18歳の子どもたちが<strong>自分らしい学び方で育つ</strong>ことを大切にする、民主的な学びの場<strong>デモクラティッシュスクール・アムステルダム</strong>の創設メンバーでもあります。</p>
                  </div>


                </div>

              </div>
              <div className="profile-message">
                <p>ヨラムの在り方とNVCの本質に触れるトータルの9日間は、ただNVCを「学ぶ」だけでなく、<strong>「対立を通して人とつながる」ことの本質にふれる旅</strong>となることでしょう。</p>
                <p><strong>皆さんのご参加を、心よりお待ちしています。</strong></p>
              </div>
            </div>
          </section>

          <section id="one" className="tiles">
            <article style={{ backgroundImage: `url(${pic01})` }}>
              <header className="major">
                <h3>Connecting in Conflict</h3>
                <h4>4月11日・12日（2026年）</h4>
                <p>対立がつながりに変わるとき</p>
                <p></p>
              </header>
              <Link to="/tokyo" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${pic02})` }}>
              <header className="major">
                <h3>Radical Honesty</h3>
                <h4>4月17日 ~ 19日（2026年）</h4>
                <p>基礎編・沖縄</p>
                <p>
                  自分も相手も、誰も傷つけることなく<SpanBlock>正直で在り続けるために</SpanBlock>
                </p>
              </header>
              <Link to="/okinawa" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${pic17})` }}>
              <header className="major">
                <h3>NVC Mediation</h3>
                <h4>4月21日 ~ 24日（2026年）</h4>
                <p>応用編・沖縄</p>
                <p>
                  ミディエーション：対立の中に、<SpanBlock>つながりの種を見つける</SpanBlock>
                </p>
              </header>
              <Link to="/okinawa-2" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${pic03})` }}>
              <header className="major">
                <h3>オーガナイザーチームから</h3>
                <p>皆様へのメッセージ</p>
              </header>
              <Link to="/invitation" className="link primary"></Link>
            </article>

            <article style={{ backgroundImage: `url(${pic16})` }}>
              <header className="major">
                <h3>参加にあたってのお願い</h3>
                <p>より学びを深めるために</p>
              </header>
              <Link to="/requirements" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${pic05})` }}>
              <header className="major">
                <h3>NVCについて</h3>
                <p>非暴力コミュニケーションとは</p>
              </header>
              <Link to="/nvc" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${pic04})` }}>
              <header className="major">
                <h3>動画リンク集</h3>
                <p>ヨラムのWS動画（日本語訳付）</p>
              </header>
              <Link to="/videos" className="link primary"></Link>
            </article>
            <article style={{ backgroundColor: '#f7f7f7', border: '2px solid #666' }}>
              <header className="major">
                <h3 style={{ color: '#666' }}>2021年アーカイブ</h3>
                <p style={{ color: '#666' }}>過去のイベント情報</p>
              </header>
              <Link to="/archive" className="link primary"></Link>
            </article>
          </section>
        </div>
      </Layout>
    );
  }
}

export default HomeIndex;
