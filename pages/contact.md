---
layout: default
title: Contact
permalink: /contact
---

<h1>Contact me</h1>

<form
  action="https://formspree.io/f/mkgdbnba"
  method="POST"
  class="contact-form"
>
  <label>
    Title
    <input type="text" name="title" required>
  </label>

  <label>
    Your email
    <input type="email" name="_replyto" required>
  </label>

  <label>
    Message
    <textarea name="message" rows="5" required></textarea>
  </label>

  <div style="display:none;">
    <label>
      Your favorite videogame is:
      <input type="text" name="_gotcha">
    </label>
  </div>

  <input type="hidden" name="_subject" value="New message from portfolio site">

  <button type="submit">Send</button>
</form>
