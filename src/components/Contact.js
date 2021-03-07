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
            申し込みフォーム送信後、1週間以内に予約金（沖縄2万円、横浜1万円）を指定口座にお振込みください。
            ご入金が確認できた順に予約確定となります。なお、ご予約金はキャンセルの時期、事由にかかわらず返金されないことをご了承ください。
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
            ゴールデンウイーク後、日本・オランダにおける新型コロナウィルスの動向を鑑みて、現地開催/オンライン開催のいずれかが確定いたします。
            現地/オンライン開催が確定した折に、残金のお支払いについてのご案内をメールにてご連絡いたします。
            こちらで残金のお支払いが確認できた後、最終確認メールの送信をもって正式なお席の確保といたします。
          </li>
        </ol>
      </section>
      <section className="split">
        <section>
          <div className="contact-method">
            <span className="icon alt fa-check"></span>
            <h3>横浜2days WS</h3>
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
            <h3>沖縄リトリート</h3>
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
              email:　sakonakama@gmail.com
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
