import './ContactForm.module.scss'
import Button from "./Button";
import {useRef, useState} from "react";
// email js
import emailjs from '@emailjs/browser';


export default function ContactForm() {

    const form = useRef('')
    const [btnText, setBtnText] = useState("Let's start building")


    const handleEmail = (e) => {
        e.preventDefault();
        setBtnText('Sending...')

        emailjs.sendForm('service_lne5tpm', 'template_ogb5084', form.current, 'EhSiPvTNtV_enKImI')
          .then((result) => {
              console.log(result.text);
              setBtnText("Let's start building")
          }, (error) => {
              console.log(error.text);
              setBtnText('An Error Occurred, please refresh')
          });
        e.target.reset()
    };

    return (
        <form ref={form} onSubmit={handleEmail}>
            <span>
                <label>Your Name</label>
                <input type={"text"} name={"client_name"} required placeholder={'John'}/>
            </span>
            <span>
                <label>Your Email Adres</label>
                <input type={"email"} name={"client_email"} required placeholder={'email@gmail.com'}/>
            </span>
            <span>
                <label>Project Details</label>
                <textarea required name={"details"} />
            </span>
            <span>
                <label>Your Phone Number</label>
                <input type={"phone"} name={"client_phone"}/>
            </span>
            <span>
                <label>Delivery Time</label>
                <input type={"date"} required name={"delivery"}/>
            </span>
            <span>
                <Button type={'submit'} text={btnText} icon={"send"}/>
            </span>
        </form>
    )
}
