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
          ※定員に達し次第、以降はキャンセル待ちとなります。
        </p>
      </section>
      <section className="split">
        <section>
          <div className="contact-method">
            <span className="icon alt fa-check"></span>
            <h3>東京・基礎編</h3>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              🚧 準備中です
            </a>
          </div>
        </section>
        <section>
          <div className="contact-method">
            <span className="icon alt fa-check"></span>
            <h3>沖縄・基礎編</h3>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              🚧 準備中です
            </a>
          </div>
        </section>
        <section>
          <div className="contact-method">
            <span className="icon alt fa-check"></span>
            <h3>沖縄・応用編</h3>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              🚧 準備中です
            </a>

          </div>
        </section>
        <section>
          <div className="contact-method">
            <span className="icon alt fa-question"></span>
            <h3>お問い合わせ</h3>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              🚧 準備中です
            </a>

            <p>
              ※自動返信・確定メールが届かない場合
              <br />
              ✉️ nvcgaia☆gmail.com （←☆を＠に変えて）
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
