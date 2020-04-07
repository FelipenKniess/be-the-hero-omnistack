import React from 'react';
import {FiLogIn} from 'react-icons/fi';

import './styles.css';
import imgLogo from '../../assets/logo.jpg';
import imgBanner from '../../assets/banner.png';

export default function logon(){
    return(
        <div className="logon-container">
            <section className="form">
                <img src={imgLogo} alt="Be The Hero"/>
                <form>
                    <h1>Faça seu logon</h1>
                    <input placeholder="Sua ID"/>

                    <a href="/register">
                        <FiLogIn size={16} color="#E02041"/>
                        não tenho cadastro
                    </a>
                </form>
            </section>

            <img src={imgBanner} alt="Heroes"/>
        </div>   
    );
}