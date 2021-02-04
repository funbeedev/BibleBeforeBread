import React from "react"

const Form = () => (
  

    <form name="subscribe" method="POST" data-netlify="true">

      <p class="coming-soon"> Daily Bible Inspirations Coming Soon. </p>
      <p class="enter-email"> Enter your email to stay informed. </p>

      <input type="hidden" name="form-name" value="subscribe" />

        <div class="email-field">
          <label>Email: </label>
          <input type="email" name="email" placeholder="example@email.com"/>
          <div class="email-line" />
        </div> 

        <div class="button-field">
          <button class="home-button" type="submit">
            <p class="button-text">Send</p>
            <div class="rectangle" />
            <div button-arrow>
              <img src="../../static/img/arrow.png" />````
            </div>
          </button>
        </div>

    </form>

)

export default Form
