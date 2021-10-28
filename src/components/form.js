import React from "react"
import arrow from "../../static/img/arrow.png"

const Form = () => (
  

    <form name="subscribe" method="POST" data-netlify="true">

      <p className="coming-soon"> Daily Bible Inspirations Coming Soon. </p>
      <p className="enter-email"> Enter your email to stay informed. </p>

      <input type="hidden" name="form-name" value="subscribe" />

      <div className="fields">
        <div className="email-field">
          <input type="email" name="email" id="email" placeholder="example@email.com"/>
          <label for="email" htmlFor="email">Your Email </label>
        </div> 

        <button className="home-button" type="submit">
          <span className="button-text">Send</span>
          <img src={arrow} className="button-arrow" alt="Arrow" />
        </button>
      </div>
    </form>

)

export default Form
