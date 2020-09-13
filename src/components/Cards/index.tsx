import React from 'react';

import { Container, Div1, Card } from './style';
import search from '../../assets/search-Data.png';
import print from '../../assets/print-Out.png';
import hours from '../../assets/24-Hours-Access.png';
import security from '../../assets/security-Code.png';

const Cards: React.FC = () => {
    return(
        <Container>
            <Div1>
                <Card>
                    <img src={search} alt="Search Data"/>

                    <div id="green">
                        <h1>Search Data</h1>
                        <p>Don’t worry if your data is very large, the Data Warehoue provides a search engine, which is useful for making it easier to find data effectively saving time.</p>

                        <button>Learn more</button>

                    </div>

                </Card>

                <Card>
                    <img src={print} alt="Print Out"/>

                    <div id="pink">
                        <h1>Print Out</h1>
                        <p>Print out service gives you convenience if someday you need print data, just edit it all and just print it.</p>

                        <button>Learn more</button>

                    </div>

                </Card>

            </Div1>

            <Div1>
                <Card>
                    <img src={hours} alt="24 Hours Access"/>

                    <div id="purple">
                        <h1>24 Hours Access</h1>
                        <p>Access is given 24 hours a full morning to night and meet again in the morning, giving you comfort when you need data when urgent.</p>

                        <button>Learn more</button>

                    </div>

                </Card>

                <Card>
                    <img src={security} alt="Search Data"/>

                    <div id="blue">
                        <h1>Security Code</h1>
                        <p>Data Security is one of our best facilities. Allows for your files to be safer. The file can be secured with a code or password that you created, so only you can open the file.</p>

                        <button>Learn more</button>

                    </div>

                </Card>

            </Div1>

        </Container>

    )
};

export default Cards;