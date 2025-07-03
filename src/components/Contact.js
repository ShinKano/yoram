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



        <h3>
          エントリーから参加確定までの流れ
        </h3>
        <p>
          参加をご希望の方は、エントリーシートにご記入のうえ、お申し込みください。
          締め切りは、2025年8月31日（土）です。
        </p>
        <p>
          締め切り後、1週間ほどを目安に参加の可否をご連絡いたします。定員を超えた場合は、キャンセル待ちとしてご案内いたします。定員に満たなかった場合は、8月31日以降も先着順で受付を継続し、順次お支払い方法をご案内します（定員に達し次第、キャンセル待ちとなります）。
        </p>
        <p>
          参加が確定した方は、2025年10月31日（金）までにご入金をお願いいたします。
          期日までにご入金が確認できない場合は、キャンセル扱いとなりますので、あらかじめご了承ください。
        </p>

        {/* <ol>
          <li>
            <span style={{ textDecorationLine: 'underline' }}>
              お申込みフォーム送信:
            </span>
            <br />
            送信後、自動返信メールが届きます。この時点ではまだ申し込み確定しておりません。
          </li>
          <br />
          <li>
            <span style={{ textDecorationLine: 'underline' }}>
              ご参加の確定:
            </span>
            <br />
            8月31日（日）までに定員を超えるお申し込みがあった場合、エントリーシートの内容をもとに選考を行い、9月10日（水）までに、参加の可否をメールにてご連絡いたします。
          </li>
          <br />
          <li>
            <span style={{ textDecorationLine: 'underline' }}>
              参加費のお支払い:
            </span>
            <br />
            参加が確定された方には、お支払い方法の詳細をご案内いたします。
            また、定員を越えた場合にはキャンセル待ちとしてご案内させていただきます。
          </li>

        </ol>
        <p>
          8月31日（日）の時点で定員に満たない場合は、先着順にて受付を継続し、順次お支払い方法をご案内いたします。
          <br />
          <li>
            <span style={{ textDecorationLine: 'underline' }}>
              残金のお支払い: <br />
            </span>
            両ワークショップ共、お支払い期限（6/15 or
            6/15以降にお支払いの方は7/15）までに、参加費の残額をお振込みいただきます。お支払いが確認できた後、最終予約確認メールを送信いたしますので、それをもって正式なお席の確保といたします。
          </li>

        </ol> */}
        <p>
          8月31日（日）の時点で定員に満たない場合は、先着順にて受付を継続し、順次お支払い方法をご案内いたします。
        </p>
      </section>
      <section className="split">
        <section>
          <div className="contact-method">
            <span className="icon alt fa-check"></span>
            <h3>エントリーシート</h3>
            <a
              href="https://gaiacompass.net/yoram-in-japan-2026/"
              target="_blank"
              rel="noopener noreferrer"
            >
              エントリーはこちら 👈
            </a>
            <br />
            <br />
            <p>
              ※定員に達し次第、以降はキャンセル待ちとなります。
            </p>
          </div>


        </section>

        <section>
          <div className="contact-method">
            <span className="icon alt fa-question"></span>
            <h3>お問い合わせ</h3>


            <p>
              ✉️ yoram26.nvc.japan☆gmail.com
              <br />

              ☆を＠に変えてお問合せください。
            </p>
          </div>
        </section>
      </section>
    </div>
  </section>
);

export default Contact;
