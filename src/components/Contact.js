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
          <h2>お申し込みについて</h2>
        </header>
        <p>
          申し込みの際の注意とか諸々...Nullam et orci eu lorem consequat
          tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed
          nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur
          ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque
          lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt.
          Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc
          rhoncus amet pharetra et feugiat tempus.
        </p>
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
          </div>
        </section>
      </section>
    </div>
  </section>
);

export default Contact;
