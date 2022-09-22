import './ContactForm.module.scss'
import Button from "./Button";
import {useRef, useState} from "react";
// email js
import emailjs from '@emailjs/browser';
// captcha
import Reaptcha from 'reaptcha';
import {useTranslation} from "react-i18next";
import cookies from "js-cookie";


export default function ContactForm() {

    // form
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [details, setDetails] = useState('')
    const [phone, setPhone] = useState('')
    const [delivery, setDelivery] = useState('')

    const { t } =useTranslation()
    const currentLanguageCode = cookies.get('i18next') || 'en' // get currently selected language

    const [btnText, setBtnText] = useState(currentLanguageCode === 'en' ? "Let's start building" : 'Stwórzmy stronę')

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
        setBtnText( currentLanguageCode === 'en' ? 'Sending...' : 'Wysyłanie...')
        const params = {
            name,
            email,
            details,
            phone,
            delivery,
            'g-recaptcha-response': captchaToken
        }

        emailjs.send(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            params,
            process.env.REACT_APP_PUBLIC_KEY,)
          .then((result) => {
              console.log(result.text);
              setBtnText(currentLanguageCode === 'en' ? "Let's start building" : 'Stwórzmy stronę')
          }, (error) => {
              console.log(error.text);
              setBtnText(currentLanguageCode === 'en' ? 'Error, please refresh' : "Ups, odśwież stronę")
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
                <label>{t('name')}</label>
                <input
                    type={"text"}
                    name={"client_name"}
                    required placeholder={'John'}
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
            </span>
            <span>
                <label>{t('email')}</label>
                <input
                    type={"email"}
                    name={"client_email"}
                    required placeholder={'email@gmail.com'}
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
            </span>
            <span>
                <label>{t('details')}</label>
                <textarea
                    required name={"details"}
                    onChange={(e) => setDetails(e.target.value)}
                    value={details}
                />
            </span>
            <span>
                <label>{t('number')}</label>
                <input
                    type={"phone"}
                    name={"client_phone"}
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                />
            </span>
            <span>
                <label>{t('delivery')}</label>
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
