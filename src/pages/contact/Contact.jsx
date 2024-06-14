import './contact.css';
import Header from '../../components/Header';
import HeaderImage from '../../images/contact_header_image.jpg'
import { MdEmail } from 'react-icons/md'
import { BsMessenger } from 'react-icons/bs'
import { IoLogoWhatsapp } from 'react-icons/io'
import { useState } from 'react';

const Contact = () => {

  const [user, setUser] = useState({
    fName: "",
    lName: "",
    email: "",
    mobile: "",
    desc: ""
  })

  const handleSubmit = ((event) => {
    console.log(user);

    setUser({
      fName: "",
      lName: "",
      email: "",
      mobile: "",
      desc: ""
    })
    event.preventDefault();
  })

  const changeHandler = ((event) => {
    const { value, name } = event.target;

    setUser({ ...user, [name]: value });
  });

  return (
    <>
      <Header title="Get In Touch" image={HeaderImage}>
        No. 551/A 3rd Floor 1st B Cross <br /> 3rd Stage 4th Block Near Post Office Basaveshwaranagar <br /> Bengaluru-560079
      </Header>
      <section className="contact">
        <div className="contact__container">
          <div className="container contact__container_left">
            <form className='contact__form' onSubmit={handleSubmit}>
              <label>
                First Name:
                <input type="text" className='field_input' name='fName' value={user.fName} onChange={changeHandler} />
              </label>
              <label>
                Last Name:
                <input type="text" className='field_input' name='lName' value={user.lName} onChange={changeHandler} />
              </label>
              <label>
                Email:
                <input type="email" className='field_input' name='email' value={user.email} onChange={changeHandler} />
              </label>
              <label>
                Mobile Number:
                <input type="text" className='field_input' name='mobile' value={user.mobile} onChange={changeHandler} />
              </label>
              <label>
                Description:
                <textarea name='desc' value={user.desc} onChange={changeHandler} />
              </label>
              <input type="submit" />
            </form>
          </div>
          <div className="container contact__container_right">
            <div className="contact__wrapper">
              <a href="mailto:siddagangasreeeng555@gmail.com" target='_blank' rel='noreferrer noopener'><MdEmail /></a>
              <a href="http://m.me/100064067893128" target='_blank' rel='noreferrer noopener'><BsMessenger /></a>
              <a href="https://wa.me/+919880513268" target='_blank' rel='noreferrer noopener'><IoLogoWhatsapp /></a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact