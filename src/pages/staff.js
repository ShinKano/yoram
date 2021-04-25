import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';

import pic01 from '../assets/images/staff1.jpg';
import pic02 from '../assets/images/staff2.jpg';
import pic03 from '../assets/images/staff3.jpg';
import pic04 from '../assets/images/staff4.jpg';
import pic05 from '../assets/images/staff5.jpg';
import pic06 from '../assets/images/staff6.jpg';
import pic07 from '../assets/images/staff7.jpg';
import pic08 from '../assets/images/staff8.png';
import pic09 from '../assets/images/staff10.jpg';
import pic11 from '../assets/images/staff11.jpg';
import pic12 from '../assets/images/staff12.jpg';
import pic13 from '../assets/images/staff13.jpg';
import pic14 from '../assets/images/staff14.jpg';
import pic15 from '../assets/images/staff15.jpg';
import pic16 from '../assets/images/staff16.jpg';

const Elements = props => (
  <Layout>
    <Helmet>
      <title>Staff | Yoram Japan 2021</title>
      <meta name="description" content="Elements Page" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>スタッフ</h1>
          </header>

          <p>
            海外トレーナーの招聘に当たって、1年以上の時間をかけ様々な調整や翻訳を行ってきたスタッフ、通訳とオーガナイザーたちです。
          </p>

          <hr className="major" />
          <h2>通訳</h2>
          <section className="grid-wrapper">
            <section className="col-5">
              <div className="col-3">
                <span className="image fit">
                  <img src={pic08} alt="Yuko Goto" />
                </span>
              </div>
              <div className="col-9">
                <h3>後藤ゆう子 (Yuko Goto)</h3>
                <h4>CNVC認定トレーナー</h4>
                <p>
                  サンディエゴ州立大学卒。2016年に日本人初のNVC認定トレーナーとなる。国内外でNVCを伝えながら、海外トレーナーとのコラボを手がけ、NVC国際集中トレーニングのオーガナイズ、アシスタントトレーナーも務める。NVC大学設立メンバーの1人としての年間プログラムの講師を務める。NVCをベースにした調停でのカップルセッションを提供。
                  最先端の脳科学を融合したファミリーコンステレーション、内的家族システム(IFS)とNVCを融合した深い癒しや統合がテーマのワークショップや個人セッションも提供中。
                </p>
              </div>
            </section>
            <div className="col-2" />
            {/* <br className="col-2" /> */}
            <section className="col-5">
              <div className="col-3">
                <span className="image fit">
                  <img src={pic07} alt="Makiko Imai" />
                </span>
              </div>
              <div className="col-9">
                <h3>今井麻希子 (Makiko Imai)</h3>
                <h4>CNVC認定トレーナー</h4>
                <p>
                  国際基督教大学卒。民間企業で人事やコンサルティングなどに従事したのち独立。NGO活動を続けるなかNVCと出会い、互いに豊かさをもたらす精神的基盤と確信し活動の軸をシフト。2021年にNVC認定トレーナーとなる。NVC大学メンバーとして年間プログラムの講師を務めるほか、複数の海外トレーナーの召喚やコラボレーション企画を展開。Teal組織、SDGsなどの文脈なども踏まえた組織・個人向けプログラムを展開中。Love
                  Smart Cards日本代表。Coaching For Transformation認定コーチ。
                </p>
              </div>
            </section>
          </section>
          <hr className="major" />
          <h2>オーガナイザー・通訳・翻訳</h2>
          <section className="grid-wrapper">
            <div className="col-3">
              <span className="image fit">
                <img src={pic02} alt="Satoko Nakama" />
              </span>
            </div>
            <div className="col-9">
              <h3>仲間聡子 （Sako）</h3>
              <p>
                沖縄・那覇市生まれ　国際基督教大学卒。
                2016年やんばるアースデイに開催されたソーヤー海くんのWSでNVCの共感サークルを経験し衝撃を受ける。
                その後国内・国外の様々なトレーナーの講座で学びを進める中、ヨラムのTEDプレゼンテーションに出会い大きな感銘を受け、
                勢い余ってヨラムに直接コンタクトを取って以来、彼のニュースレターや動画の翻訳を喜びから手掛けている。
              </p>
            </div>
          </section>

          <hr className="major" />
          <h2>オーガナイズ・アシスタント</h2>

          <section className="grid-wrapper">
            <div className="col-3">
              <span className="image fit">
                <img src={pic04} alt="Kah-ei" />
              </span>
            </div>
            <div className="col-9">
              <h3>諸留華英（Kah-eh）</h3>
              <p>
                沖縄生まれ　沖縄育ち　
                <br />
                皆さまとじかに出遭える日を楽しみにしています♪
              </p>
            </div>
          </section>

          <hr className="major" />
          <h2>アシスタント</h2>

          <section className="grid-wrapper">
            <div className="col-3">
              <span className="image fit">
                <img src={pic09} alt="Fumi" />
              </span>
            </div>
            <div className="col-9">
              <h3>ふみ (Fumi)　</h3>
              <p>
                いい時間になるよう、気を配って行けたらと思います。
                <br />
                よろしくお願いいたします。
              </p>
            </div>
          </section>

          <section className="grid-wrapper">
            <div className="col-3">
              <span className="image fit">
                <img src={pic05} alt="Takako" />
              </span>
            </div>
            <div className="col-9">
              <h3>浦上たか子 (Takako)</h3>
              <p>
                埼玉県出身　日々私の中のジャッカルと戯れています。
                <br />
                どうぞよろしく♡
              </p>
            </div>
          </section>

          <section className="grid-wrapper">
            <div className="col-3">
              <span className="image fit">
                <img src={pic06} alt="Rico" />
              </span>
            </div>
            <div className="col-9">
              <h3>市谷理子 (Rico)</h3>
              <p>
                海と猫を愛するミニマリスト。
                <br />
                ジャッカル幼稚園の園長B。
              </p>
            </div>
          </section>

          <section className="grid-wrapper">
            <div className="col-3">
              <span className="image fit">
                <img src={pic12} alt="宮城昌子" />
              </span>
            </div>
            <div className="col-9">
              <h3>宮城昌子（Shoko）</h3>
              <p>
                沖縄出身米国ウィスコンシン在住。CNVC認定トレーナー候補生。昨年のNVCグローバルフェス・グローバルフェスJAPANでヨラムの共感の深さに感動。
                「お茶目なお兄ちゃん」のイメージから一転して、ヨラムの共感の質にふれる機会を楽しみにしてます。
              </p>
            </div>
          </section>

          <section className="grid-wrapper">
            <div className="col-3">
              <span className="image fit">
                <img src={pic16} alt="矢澤実穂" />
              </span>
            </div>
            <div className="col-9">
              <h3>矢澤実穂（Miho）</h3>
              <p>
                東京/国立出身。オーストラリア在住。１０歳の息子の母親。
                ２００７年にNVCに出会いました。現在はダンス（体と動き）とNVCの統合を探求中しながら学びとシェアを続けています。
              </p>
            </div>
          </section>

          <section className="grid-wrapper">
            <div className="col-3">
              <span className="image fit">
                <img src={pic11} alt="都築幸江" />
              </span>
            </div>
            <div className="col-9">
              <h3>都築幸江（Sachie）</h3>
              <p>
                2019年ローマで参加したYoramのワークショップでの包み込むような空気感は今でも忘れません。
                以来、彼のあり方に触れること、ティーチングスタイルが大好きになり、彼のコースを追っかけています。
                どんな時も、まず呼吸して身体の3D感覚を取り戻すことを彼から教わり、多言語でのNVCの実践に楽しくチャレンジしています。
              </p>
            </div>
          </section>

          <section className="grid-wrapper">
            <div className="col-3">
              <span className="image fit">
                <img src={pic13} alt="シルバーマン恵子" />
              </span>
            </div>
            <div className="col-9">
              <h3>シルバーマン恵子（Keiko）</h3>
              <p>
                ハワイ在住。CNVC認定候補生。ヨラムのトレーナー・トレーニングコース、メディエーション・コースに在籍しながら、オンラインコースでのアシスタントを務めています。
              </p>
            </div>
          </section>

          <section className="grid-wrapper">
            <div className="col-3">
              <span className="image fit">
                <img src={pic15} alt="Fumi" />
              </span>
            </div>
            <div className="col-9">
              <h3>後藤剛（Go）</h3>
              <p>
                CNVC認定トレーナー。場に潜む真実を聴き意識化することが得意。個々の光を認め、使命を生きる。
              </p>
            </div>
          </section>

          <section className="grid-wrapper">
            <div className="col-3">
              <span className="image fit">
                <img src={pic14} alt="Fumi" />
              </span>
            </div>
            <div className="col-9">
              <h3>小笠原春野（Haruno）</h3>
              <p>
                CNVC認定トレーナー。みなさんを沖縄にお迎えできないのは残念ですが、
                オンラインの場でご一緒にヨラム・ワールドに飛び込んで、発見や変容を共にできることを楽しみにしています。
              </p>
            </div>
          </section>

          <hr className="major" />
          <h2>テクニカルサポート</h2>

          <section className="grid-wrapper">
            <div className="col-3">
              <span className="image fit">
                <img src={pic03} alt="赤尾航" />
              </span>
            </div>
            <div className="col-9">
              <h3>赤尾航 (Koh)</h3>
              <p>
                海が大好き、人生の探求者。なんか癒されるってよく言われます。笑
                <br />
                皆さんと会えることを楽しみにしています！
              </p>
            </div>
          </section>

          <section className="grid-wrapper">
            <div className="col-3">
              <span className="image fit">
                <img src={pic01} alt="渡久地幸哉" />
              </span>
            </div>
            <div className="col-9">
              <h3>渡久地幸哉（とぐちゆきや/ゆっきー/Yukky）</h3>
              <p>
                沖縄、嘉手納町出身
                「私が笑うからみんなも笑う、私がHappyだからみんなもHappy♪」がモットー。
                <br />
                みなさんに会えること楽しみにしています。ゆたしくうにげーさびら(๑&gt;◡&lt;๑)♪
              </p>
            </div>
          </section>

          {/* <hr className="major" />
          <h2>Web制作/翻訳</h2>
          <section className="grid-wrapper"> */}
          {/* <div className="col-3">
              <span className="image fit">
                <img src={pic03} alt="" />
              </span>
            </div> */}
          {/* <div className="col-9">
              <h3>加納愼之典</h3>
            </div>
          </section> */}
        </div>
      </section>
    </div>
  </Layout>
);

export default Elements;
