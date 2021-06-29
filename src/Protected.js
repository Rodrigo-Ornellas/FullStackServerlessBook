import React from 'react';
import Container from './Container'
import protectedRoute from './protectedRoute'

function Protected() {
    return (
        <Container>
            <h1>Protected route</h1>
            <img src="https://picsum.photos/id/1020/800/600/" alt="alter text" />
        </Container>
    );
}

export default protectedRoute(Protected)