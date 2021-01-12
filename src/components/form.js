import React from "react"

const Form = () => (
  
  <div class="home-form">
    <h2>Daily Bible Inspirations Coming Soon. Enter your email to stay informed.</h2>

    <form name="subscribe" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="subscribe" />
      <div>
        <label>Email*: </label>
        <input type="email" name="email" />
        <button class="myButton" type="submit">Send</button>
      </div>
    </form>
  </div>

)

export default Form
