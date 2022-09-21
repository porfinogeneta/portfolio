import './ContactForm.module.scss'
import Button from "./Button";
import {useRef, useState} from "react";
// email js
import emailjs from '@emailjs/browser';
// captcha
import Reaptcha from 'reaptcha';


export default function ContactForm() {

    // form
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [details, setDetails] = useState('')
    const [phone, setPhone] = useState('')
    const [delivery, setDelivery] = useState('')


    const [btnText, setBtnText] = useState("Let's start building")

    // captcha
    const [captchaToken, setCaptchaToken] = useState(null);
    const captchaRef = useRef(null);

    const verifyCaptcha = () =>{
        captchaRef.current.getResponse().then(res => {
            setCaptchaToken(res)
        })

    }


    const handleEmail = (e) => {
        e.preventDefault();
        setBtnText('Sending...')
        const params = {
            name,
            email,
            details,
            phone,
            delivery,
            'g-recaptcha-response': captchaToken
        }

        emailjs.send(
            'service_lne5tpm',
            'template_ogb5084',
            params,
            'EhSiPvTNtV_enKImI',)
          .then((result) => {
              console.log(result.text);
              setBtnText("Let's start building")
          }, (error) => {
              console.log(error.text);
              setBtnText('An Error Occurred, please refresh')
              setTimeout(() => window.location.reload(), 1000)
          });
        setName('')
        setEmail('')
        setPhone('')
        setDetails('')
        setDelivery('')
    };

    return (
        <form onSubmit={handleEmail}>
            <span>
                <label>Your Name</label>
                <input
                    type={"text"}
                    name={"client_name"}
                    required placeholder={'John'}
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
            </span>
            <span>
                <label>Your Email Adres</label>
                <input
                    type={"email"}
                    name={"client_email"}
                    required placeholder={'email@gmail.com'}
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
            </span>
            <span>
                <label>Project Details</label>
                <textarea
                    required name={"details"}
                    onChange={(e) => setDetails(e.target.value)}
                    value={details}
                />
            </span>
            <span>
                <label>Your Phone Number</label>
                <input
                    type={"phone"}
                    name={"client_phone"}
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                />
            </span>
            <span>
                <label>Delivery Time</label>
                <input
                    type={"date"}
                    required name={"delivery"}
                    onChange={(e) => setDelivery(e.target.value)}
                    value={delivery}
                />
            </span>
            <span>
                <Button type={'submit'} text={btnText} icon={"send"}/>
            </span>
            <span>
                <Reaptcha
                    sitekey={process.env.REACT_APP_SITE_KEY}
                    ref={captchaRef}
                    onVerify={verifyCaptcha}

                />
            </span>
        </form>
    )
}
