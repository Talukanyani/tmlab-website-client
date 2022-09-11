import React, { useState, useEffect, useRef } from 'react';
import styles from './body.module.css'
import { useNavigate } from 'react-router-dom';

import ContModal from './ContModal';

import Button from '../elements/Button';
import SmallHeading from '../elements/SmallHeading';

import twitter from './assets/icon-twitter.svg'
import instagram from './assets/icon-instagram.svg'

function Body() {
    const [isContModal, setIsContModal] = useState(false)

    let navigate = useNavigate()

    const goToApps = () => {
        window.scrollTo(0, 0)
        setTimeout(() => navigate('/apps'), 500)
    }

    useEffect(() => {
        if (isContModal) {
            document.body.style.overflowY = 'hidden'
        } else {
            document.body.style.overflowY = 'visible'
        }
    }, [isContModal])

    return (
        <div className={styles.body_overlay}>
            <div className={styles.body}>
                <div className={styles.container_apps}>
                    <SmallHeading text='Apps' />
                    <h2>Explore apps engineered and developed for you.</h2>
                    <Button
                        text='Show all apps'
                        onClick={goToApps}
                    />
                </div>
                <div className={styles.container_contact}>
                    <SmallHeading text='Contact us' />
                    <p>Get in touch with related information.</p>
                    <Button
                        text='Contact us'
                        onClick={() => setIsContModal(true)}
                    />
                </div>
                <ContModal
                    isContModal={isContModal}
                    close={() => setIsContModal(false)}
                />
                <div className={styles.container_connect}>
                    <SmallHeading text='Connect with us' />
                    <p>Never miss updates, subscribe to our newsletter or follow us in our social media.</p>
                    <section>
                        <form>
                            <input
                                type='email'
                                placeholder='Email'
                                required
                                id='subsInput'
                            />
                            <input
                                type='submit'
                                value='Subscribe'
                            />
                        </form>
                        <ul>
                            <li>
                                <a
                                    target='_blank'
                                    href='https://twitter.com/tmlab_dot_app'
                                >
                                    <img
                                        src={twitter}
                                        alt="twitter icon" />
                                </a>
                            </li>
                            <li>
                                <a
                                    target='_blank'
                                    href='https://instagram.com/tmlab.app'
                                >
                                    <img
                                        src={instagram}
                                        alt="instagram icon"
                                    />
                                </a>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Body;