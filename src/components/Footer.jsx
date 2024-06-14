import { Link } from "react-router-dom";
import Logo from '../images/logo/logo-no-background.png';
import { FaLinkedin, FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer>
            <div className="container footer__container">
                <article>
                    <Link className="logo" to="/">
                        <img src={Logo} alt="Footer Logo" />
                    </Link>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex id quos enim possimus temporibus nobis!
                    </p>
                    <div className="footer__socials">
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer noopener"><FaLinkedin /></a>
                        <a href="https://facebook.com" target="_blank" rel="noreferrer noopener"><FaFacebookF /></a>
                        <a href="https://twittwr.com" target="_blank" rel="noreferrer noopener"><AiOutlineTwitter /></a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer noopener"><AiFillInstagram /></a>
                    </div>
                </article>
                <article>
                    <h4>Premalinks</h4>
                    <Link to="/about">About</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/gallery">Gallery</Link>
                    <Link to="/contact">Contact</Link>
                </article>
                {/* <article>
                    <h4>Insights</h4>
                    <Link to="/s">Blog</Link>
                    <Link to="/s">Case Studies</Link>
                    <Link to="/s">Events</Link>
                    <Link to="/s">Communities</Link>
                    <Link to="/">FAQs</Link>
                </article> */}
                <article>
                    <h4>Get In Touch</h4>
                    <Link to="/contact">Contact Us</Link>
                    <Link to="/contact">Support</Link>
                </article>
            </div>
            <div className="footer__copyright">
                <small>2023 SGSE Website &copy; All Copyrights </small>
            </div>
        </footer>
    )
}

export default Footer