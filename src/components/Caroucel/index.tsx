import React from 'react';

import { Container } from './style';

const Caroucel: React.FC = () => {
    return(
        <Container>
            <h1>Testimonials</h1>
            <div>
                <div>
                    <h1>John Fang</h1>
                    <h2>wordfaang.com</h2>

                    <p>Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.</p>

                </div>

                <div>
                    <h1>Jeny Doe</h1>
                    <h2>UX Engineer</h2>

                    <p>Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor</p>

                </div>

                <div>
                    <h1>William</h1>
                    <h2>Web Designer</h2>

                    <p>Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor</p>

                </div>

                <div>
                    <h1>Kevin Alec</h1>
                    <h2>Front-End</h2>

                    <p>Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis.</p>

                </div>

            </div>

        </Container>

    )
};

export default Caroucel;