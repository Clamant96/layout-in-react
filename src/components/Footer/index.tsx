import React from 'react';

import { Container } from './style';
import face from '../../assets/iconFace.png';
import twitter from '../../assets/iconTwitter.png';
import insta from '../../assets/iconInstagram.png';

const Footer: React.FC = () => {
    return(
        <Container>
            <header>
                <div>
                    <h1>Try for free!</h1>
                    <p>Get limited 1 week free try our features!</p>

                </div>

                <div>
                    <button id="botao1">Learn more</button>
                    <button id="botao2">Request Demo</button>

                </div>

            </header>

            <section>
                <div>
                    <ul>
                        <li><p>DataWarehouse</p></li>
                        <li>Warehouse Society, 234 Bahagia Ave Street PRBW 29281</li>
                        <li>info@warehouse.project</li>
                        <li>1-232-3434 (Main)</li>

                    </ul>
                </div>

            
                <div>
                    <ul>
                        <li><p>About</p></li>
                        <li>Profile</li>
                        <li>Features</li>
                        <li>Careers</li>
                        <li>DW News</li>

                    </ul>
                
                </div>

            
                <div>
                    <ul>
                        <li><p>Help</p></li>
                        <li>Support</li>
                        <li>Sign up </li>
                        <li>Guide </li>
                        <li>Reports </li>
                        <li>Q&A</li>

                    </ul>

                </div>
            
                <div id="redes">
                    <p>Social Media</p>
                    <img src={face} alt="Face Icon"/>
                    <img src={twitter} alt="Twitter Icon"/>
                    <img src={insta} alt="Instagram Icon"/>

                    
                </div>

            </section>

        </Container>

    )

};

export default Footer;