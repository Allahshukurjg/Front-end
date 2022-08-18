import React from 'react'
import './FooterStyles.css'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'


function Footer() {
    return (
        <div className='footer'>
            <div className="container">
                <div className="top">
                    <h3>AZERBAYCAN.</h3>
                    <div className="social">
                        <FaFacebook className='icon' />
                        <FaInstagram className='icon' />
                        <FaTwitter className='icon' />
                        <FaPinterest className='icon' />
                        <FaYoutube className='icon' />
                    </div>
                </div>
                <div className="bottom">
                    <div className="left">
                        <ul>
                            <li>Haqqında</li>
                            <li>Tərəfdaşlıq </li>
                            <li>Kariyera</li>
                            <li>Xəbərlər </li>
                            <li>Reklam</li>
                        </ul>
                    </div>
                    <div className="right">
                        <ul>
                            <li>Əlaqə</li>
                            <li>Şərtlər</li>
                            <li>Siyasət</li>
                            <li>Gizlilik</li>
                            <li>Qiymətləndirmə</li>
                            <li>Meil</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
