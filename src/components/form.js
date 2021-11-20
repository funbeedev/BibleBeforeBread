import React from "react"
import arrow from "../../static/img/arrow.png"

const Form = () => (
  

    <form name="subscribe" method="POST" data-netlify="true">

      <p class="coming-soon"> Daily Bible Inspirations Coming Soon. </p>
      <p class="enter-email"> Enter your email to stay informed. </p>

      <input type="hidden" name="form-name" value="subscribe" />

      <div class="fields">
        <div class="email-field">
          <input type="email" name="email" id="email" placeholder="example@email.com"/>
          <label for="email" htmlFor="email">Your Email </label>
        </div> 

        <button class="home-button" type="submit">
          <span class="button-text">Send</span>
          <img src={arrow} className="button-arrow" alt="Arrow" />
        </button>
      </div>
    </form>

)

export default Form
