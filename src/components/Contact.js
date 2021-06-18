import React from 'react';
import { COLORS } from '../styles';

const Contact = props => (
  <section id="contact">
    <div className="inner">
      <section>
        {/* <form method="post" action="#">
                    <div className="field half first">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="field half">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" />
                    </div>
                    <div className="field">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" rows="6"></textarea>
                    </div>
                    <ul className="actions">
                        <li><input type="submit" value="Send Message" className="special" /></li>
                        <li><input type="reset" value="Clear" /></li>
                    </ul>
                </form> */}
        <header className="sub">
          <h2>お申し込みの流れ</h2>
          <h3>オンライン開催に伴い変更しました</h3>
        </header>
        <ol>
          <li>
            <span style={{ textDecorationLine: 'underline' }}>
              申込みフォーム送信:
            </span>
            <br />
            送信後、自動返信メールが届きます。この時点ではまだ申し込み確定しておりません。
          </li>
          <br />
          <li>
            <span style={{ textDecorationLine: 'underline' }}>
              ご予約金のお振込み:
            </span>
            <br />
            ご予約金、または参加費全額のお振込み・・・・申し込みフォーム送信後、1週間以内に予約金（アート・オブ・オネスティ：2万円、ストリートジラフ：1万円）
            を指定口座にお振込みいただくか、参加費用全額をお振込みください。ご入金が確認できた順に予約確定となります。
          </li>
          <br />
          <li>
            <span style={{ textDecorationLine: 'underline' }}>
              予約確定メールのお届け:
            </span>
            <br />
            予約確定後、２日以内に予約確定メールを送信いたします。
          </li>
          <br />
          <li>
            <span style={{ textDecorationLine: 'underline' }}>
              残金のお支払い: <br />
            </span>
            両ワークショップ共、お支払い期限（6/15 or
            6/15以降にお支払いの方は7/15）までに、参加費の残額をお振込みいただきます。お支払いが確認できた後、最終予約確認メールを送信いたしますので、それをもって正式なお席の確保といたします。
          </li>
          <br />
          <li>
            <span style={{ textDecorationLine: 'underline' }}>
              サポート:
              <br />
            </span>
            経済的状況が参加の妨げにならないよう、また相互の「受け取り」「与える」経験が豊かなものになるよう、支払いにサポートが必要な方にも参加の道を開きたいと願っています。お問い合わせはこちらまで
            sakonakama☆gmail.com （←☆を＠に変えて）
          </li>
        </ol>
      </section>
      <section className="split">
        <section>
          <div className="contact-method">
            <span className="icon alt fa-check"></span>
            <h3>ストリートジラフ</h3>
            <a
              href="https://docs.google.com/forms/d/1IA5l6iBh8sUcT8LfnMK_72rRvvqFaRXOKLH8K4tdNdc/viewform?ts=600bc826&edit_requested=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              お申し込みフォームはコチラ
            </a>
          </div>
        </section>
        <section>
          <div className="contact-method">
            <span className="icon alt fa-check"></span>
            <h3>アート・オブ・オネスティ</h3>
            <a
              href="https://docs.google.com/forms/d/1_xtAAqH0EcOt7rvVp-VzIw4K0JtKBWeYLeEch6X1Ctc/viewform?ts=600bc83c&edit_requested=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              お申し込みフォームはコチラ
            </a>
          </div>
        </section>
        <section>
          <div className="contact-method">
            <span className="icon alt fa-question"></span>
            <h3>お問い合わせ</h3>
            <a
              href="https://docs.google.com/forms/d/1EGPTNGNE50FSB0XaVHRc2NzBz9HxuTlNUwthtP68Xg4/viewform?edit_requested=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              お問い合わせフォームはコチラ
            </a>
            <br />
            <br />
            <p>
              ＊自動返信・確定メールが届かない場合
              <br />
              email:　sakonakama☆gmail.com （←☆を＠に変えて）
              <br />
              までお問合せください。
            </p>
          </div>
        </section>
      </section>
    </div>
  </section>
);

export default Contact;
