import React from 'react';
import './ContactUs.scss';

export default function ContactUs() {
    return (
        <div className='ContactUs'>
            <div className='ContactUs-Wrapper'>

                <div className='ContactUs-TitleBlock'>
                    <p className='ContactUs-Title'>Contact Us</p>
                </div>

                <div className='ContactUs-Content'>

                    <div className='ContactUs-TextBox'>
                        <p className='ContactUs-Text'>We would love to hear from you! Use this form to contact us for sales requests, career information, investor relations, corporate information, or general questions.</p>
                        <p className='ContactUs-Text'>For warranty information, or to purchase replacement parts/keys, please contact a local authorized dealer.</p>
                        <p className='ContactUs-Text'>Sales questions? Call us at 888.STARCK</p>
                    </div>

                    <form action='post' className='ContactUs-Form'>

                        <div className='ContactUs-Form-Row'>
                            <div className='ContactUs-InputWrap'>
                                <label for='ContactReason' className='ContactUs-Label'>I AM CONTACTING YOU ABOUT:*</label>
                                <select name='ContactReason' className='ContactUs-Input'>
                                    <option value=''> -- Please Select -- </option>
                                    <option value='I Have A Project'>I Have A Project</option>
                                    <option value='Career Information'>Career Information</option>
                                    <option value='Investor Relations'>Investor Relations</option>
                                    <option value='A General Question'>A General Question</option>
                                    <option value='Technical Support'>Technical Support</option>
                                    <option value='Im Interested In Becoming A Dealer'>Im Interested In Becoming A Dealer</option>
                                </select>
                            </div>
                        </div>

                        <div className='ContactUs-Form-Row'>
                            <div className='ContactUs-InputWrap'>
                                <label for='FirstName' className='ContactUs-Label'>First Name:</label>
                                <input id='FirstName' className='ContactUs-Input'></input>
                            </div>
                            <div className='ContactUs-InputWrap'>
                                <label for='LastName' className='ContactUs-Label'>Last Name:</label>
                                <input id='LastName' className='ContactUs-Input'></input>
                            </div>
                        </div>
                        
                        <div className='ContactUs-Form-Row'>
                            <div className='ContactUs-InputWrap'>
                                <label for='Email' className='ContactUs-Label'>Email:*</label>
                                <input id='Email' className='ContactUs-Input'></input>
                            </div>
                            <div className='ContactUs-InputWrap'>
                                <label for='PhoneNumber' className='ContactUs-Label'>Phone Number:*</label>
                                <input id='PhoneNumber' className='ContactUs-Input'></input>
                            </div>
                        </div>
                        <div className='ContactUs-Form-Row'>
                            <div className='ContactUs-InputWrap ContactUs-Company'>
                                <label for='Company' className='ContactUs-Label'>Company:</label>
                                <input id='Company' className='ContactUs-Input ContactUs-Company'></input>
                            </div>
                        </div>
                        
                        <div className='ContactUs-Form-Row'>
                            <div className='ContactUs-InputWrap'>
                                <label for='ContactReason' className='ContactUs-Label'>Country:*</label>
                                <select name='ContactReason' className='ContactUs-Input'>
                                    <option value=''> -- Please Select -- </option>
                                    <option value='Canada'>Canada</option>
                                    <option value='Mexico'>Mexico</option>
                                    <option value='United States'>United States</option>
                                </select>
                            </div>
                            <div className='ContactUs-InputWrap'>
                                    <label for='City' className='ContactUs-Label'>City:*</label>
                                    <input id='City' className='ContactUs-Input'></input>
                            </div>
                        </div>
                        

                        <div className='ContactUs-Form-Row ContactUs-Closing'>
                            <p className='ContactUs-Form-Text'>*Required Fields</p>
                            <button type='reset' action='post' className='ContactUs-Button'>
                                Submit
                            </button>
                        </div>
                    </form>


                    <div className='ContactUs-SubmitModal'>
                        <div className='ContactUs-SubmitModal-Wrapper'>
                            <p className='ContactUs-SubmitModal-Title'>Form Submitted!</p>
                            <p className='ContactUs-SubmitModal-Text'>Thank you for contacting us! The appropriate Starck representative will reach out to you through the email you provided within 48 hours. Have a great day!</p>
                        </div>
                    </div>

                </div>

                




            </div>
        </div>
    )
}
