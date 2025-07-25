import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../../components/layout';
import { Link } from 'gatsby';

import pic11 from '../../assets/images/pic11.jpg';
import pic03 from '../../assets/images/pic03.jpg';
import pic15 from '../../assets/images/pic15.jpg';

const Invitation = props => (
  <Layout>
    <Helmet>
      <title>Invitation 2021 アーカイブ | Yoram Japan</title>
      <meta name="description" content="Generic Page" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>お誘いに代えて (2021 アーカイブ)</h1>
          </header>
          <div style={{ marginBottom: '2rem', padding: '1rem', backgroundColor: '#f8f9fa', borderLeft: '4px solid #007acc' }}>
            <p style={{ margin: 0 }}>
              <Link to="/archive" style={{ color: '#007acc' }}>← アーカイブ一覧に戻る</Link> |
              <Link to="/" style={{ color: '#007acc', marginLeft: '1rem' }}>現在のサイトはこちら</Link>
            </p>
          </div>
          <span className="image main">
            <img src={pic15} alt="沖縄の道" />
          </span>
          <p>
            ヨラムの沖縄リトリート及び横浜２daysワークショップにご関心をお持ちの、この文章を読んでいただいている皆さま、ようこそ！御覧いただき有難うございます。
          </p>
          <p>
            事の始まりは2019年春。ヨラムのニュースレターや動画をこつこつ翻訳するのを喜びとしていた私にヨラムから、ものっすごく気軽な調子で「日本でワークショップをしたいんだけど☺」というメッセージが突然舞い込んだのです（ひえ～！）。それからこれまでの間に、予期せぬウィルスが出現し、私たちを取り巻くこの世界の様相が激動の変化にみまわれ、おそらく今後も様々に波及して、私たちのものの見方や人々との接し方に多大なる影響を及ぼし続けるものと思われます。
          </p>
          <div className="grid-wrapper">
            <div className="col-6">
              <p>
                2019年の時点では日本でのヨラムの認知度は今ほど高くなく、私はひそかに抱いていた『ヨラムをいつか日本に呼ぶ』という野望が思ったより数倍早く向こうから飛び込んできてしまったことに「オエ～！」（←過度の緊張と自信の無さからくる吐き気）となっていました。
              </p>
              <p>
                ヨラムの多忙なスケジュールと日本での2020年オリンピック開催を考慮して「2021年に決定ね！」となり、「さあ、これからヨラムを日本のみんなにプロモートし、オーガナイズチームも立ち上げるぞ！」と今後の計画を立て始めたところに、まさかの新型コロナウィルス出現、そしてオリンピック開催延期に…嘆き…
              </p>
            </div>
            <div className="col-6">
              <span className="image fit">
                <img src={pic03} alt="" />
              </span>
            </div>
          </div>
          <p>
            しかし！コロナがあったからこそ新しいムーブメントが世界中のNVCコミュニティで起こり、おそらくここにいる皆さまの多くも参加されたであろう「NVCグローバルフェス」および「NVCグローバルフェスJAPAN」が開催されることとなり、それをきっかけに日本でもヨラム人気が爆発的に広がることとなりました。YAY!
            お祝い！！！
          </p>
          <p>
            今回、リアルな生身の存在を持ち寄ってエンパシーを体感するはずのイヴェントですが、現在の状況をみるとオンライン開催に切り替える必要が濃厚となって参りました。
            これまでこのイヴェントを実現させるために、アシスタントスタッフやサポートメンバーたちは日程の調整やいくつもの会場の下見、予算の試算や当ウェブサイトの制作など、皆さんの目には触れない水面下でのこまごまとした仕事をサポートしてくれています。
            更に、このウェブを公開してお申込み受付けが始まった後、今度はオンライン開催に変更となった場合に伴うプログラム練り直し等の作業が待っています。
          </p>
          <p>
            スタッフは皆、それぞれの本業も多忙な中、持てるリソースを割いての取り組みです。また私にとっては海外トレーナー招聘のイヴェントオーガナイズは初の挑戦につき、ご参加下さる皆さまへの対応に至らない点が多々あるかもしれません。
            既に私の中でいくつものパーツやジャッカルたちが大騒ぎしていますが、スタッフ一人ひとりからの「ひとりじゃないよ～！」という声、寄り添ってくれるあたたかみ、
            そして現実的な種々の協力に囲まれて、このチームでヨラムを迎えられることを、大変嬉しく頼もしく、誇らしく、ありがたく感じています。
          </p>
          <p>
            そしてそんな我々チームがホールドする場に集まってくれる皆さまが、きっと何度も「恋に落ちる」ことを、スタッフ一同、心より願っております✨
          </p>
          <p style={{ textAlign: 'right' }}>オーガナイザー: 仲間聡子（さこ）</p>
        </div>
      </section>
    </div>
  </Layout>
);

export default Invitation;
