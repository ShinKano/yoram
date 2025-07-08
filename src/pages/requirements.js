import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';

import Layout from '../components/layout';

import yoram02 from '../assets/images/yoram02.webp';
import yoram04 from '../assets/images/yoram04.webp';
import pic16 from '../assets/images/pic16.jpg';


const Requirements = props => (
  <Layout>
    <Helmet>
      <title>Requirements | Yoram Japan 2021</title>
      <meta
        name="Requirements | Yoram Japan 2021"
        content="Requirements | Yoram Japan 2021"
      />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>参加にあたってのお願い</h1>
          </header>
          <span className="image main">
            <img src={yoram02} alt="ヨラム" style={{ borderRadius: '10px' }} />
          </span>
          <p>
            東京及び沖縄基礎編のワークショップでは、特定の知識や経験がなくてもご参加いただけますが、より深くこの場に関わるために、以下のいずれかを事前に体験しておくことをおすすめします。
          </p>

          <ul>
            <li>書籍『NVC 人と人との関係にいのちを吹き込む法』『わかりあえないを越える』を読む。</li>
            <li>
              <a href="https://youtu.be/7mdxyYyk2JU" target="_blank">
                ヨラムのNVC紹介動画
              </a>
              やワークショップ映像を視聴する。
            </li>
            <li>NVCに関連するワークショップ・勉強会・練習会などに参加する。</li>
            <li>NVCの感情・ニーズのリストなどを使って、自分の内面をふりかえるワークをやってみる。</li>
          </ul>
          <p>
            （※これらは必須ではありませんが、ワークショップの学びをより豊かにする助けとなります）
          </p>
          <ul className="actions">
            <li>
              <Link to="/videos" className="button">
                Videosをみる
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <section id="two">
        <div className="inner">
          <span className="image main">
            <img src={yoram04} alt="ヨラム" style={{ borderRadius: '10px' }} />
          </span>
          <p>
            本ワークショップでは、自己理解、人との関係、そして社会的な構造への気づきを深めるために、NVC（非暴力コミュニケーション）の視点や対話のプロセスを活用します。
          </p>
          <p>
            この場は、医療的な支援や心理療法を目的としたものではなく、学び・気づき・関係性の質の変化を目的としています。深い個人的な癒しや過去のトラウマに焦点を当てる場ではないことをご理解ください。

            ご参加にあたって、以下の点へのご協力をお願いいたします。
          </p>

          <ul>
            <li>安全であたたかな学びの場を共につくっていきたいと考えていますが、ご自身の心理的な安心感に配慮し、無理のない範囲でご参加ください。</li>
            <li>必要に応じて個人的なテーマが扱われる場面もありますが、講師・スタッフはいずれも臨床的な支援を行う立場にはありません。</li>
            <li>ご自身の状態に合わせて、自分のペースで関わっていただくことが大切にされます。セルフケアの責任を持ってご参加ください。</li>
            <li>現在、深い癒しや心理的なケアを必要とされている方は、主治医や専門機関とご相談のうえ、ご参加をご検討ください。</li>
            <li>ワークショップ中に心身の不調を感じた場合は、ご自身の判断で専門機関などへのご相談をお願いいたします。</li>
          </ul>
          <p>
            この場が、安心と尊重に根ざした学びの体験となることを願っています。
          </p>

        </div>
      </section>
      <section id="three">
        <div className="inner">
          <header className="major">
            <h1>宿泊施設のご案内</h1>
          </header>
          <span className="image main">
            <img src={pic16} alt="ヨラム" style={{ borderRadius: '10px' }} />
          </span>
          <p>
            東京・沖縄ともに、<strong>通い参加・宿泊参加のいずれも選択可能です。</strong>
          </p>


          <div className="table-wrapper">
            <table>
              <tbody>
                <tr>
                  <td>東京</td>
                  <td>国立オリンピック記念青少年総合センター内 宿泊棟</td>
                </tr>
                <tr>
                  <td>沖縄</td>
                  <td>HAMACHŪ<br />
                    ドミトリー / グループルーム / ツインルーム
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            沖縄の会場は、浜比嘉島の廃校となった中学校を活用した宿泊滞在型の施設です。HAMACHŪ 宿泊をご希望の方にはエントリーシートにてお知らせください。詳細を追ってご連絡いたします。主催者側での手配となります。<br />※部屋数に限りがございます。
          </p>
          <p>
            それ以外の宿泊については各自でのご手配をお願いいたします。浜比嘉島にはホテル、民宿、Airbnbなどの宿泊施設があります。
          </p>
        </div>
      </section>
    </div >
  </Layout >
);

export default Requirements;
