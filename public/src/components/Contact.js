import React from 'react';
import '../styles/contactpage.css'

export default (props) => (
    <div class="contact">
        <div class="contact_title">Contact Us</div>
        <div class="contact_msg">If you have any questions or concerns and wish to contact us, you can do so by:<br/>
            <br/>
            Email: lustr@lustr.com<br/>
            Phone: 111-111-1111
        </div>

        <form class="contact_form">
            <div class="contact_form_name">
                <label for="contact_form_name">Full Name:</label>
                <input type="text" id="contact_form_name" placeholder="Full Name"/>
            </div>
            <div class="contact_form_email">
                <label for="contact_form_email">Email:</label>
                <input type="email" id="contact_form_email" placeholder="Email"/>
            </div>
            <div class="contact_form_message">
                <label for="contact_form_message">Message:</label>
                <textarea id="contact_form_message" name="contact_form_message" placeholder="Message"></textarea>
            </div>
            <div>
                <input type="submit" id="contact_form_submit"/>
            </div>
        </form>
    </div>
)