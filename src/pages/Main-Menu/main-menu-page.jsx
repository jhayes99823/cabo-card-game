import React, { useState } from 'react';
import Helmet from 'react-helmet';
import { Button } from 'react-bootstrap';
import StartGameModal from '../../components/Start-Game-Modal/start-game-modal.component';

import './main-menu-page.styles.css';

export default function MainMenuPage() {
        const [show, setShow] = useState(false);

        return (
            <div className="main-menu">
                <Helmet bodyAttributes={{style: 'background-color: #4a1463'}} />
                <h2 className="h2-alignment">CABO CARD GAME ONLINE</h2>
                <Button onClick={() => setShow(true)} variant="light" size="lg" className="btn-alignment">Start Game</Button>
                <StartGameModal show={show} onHide={() => setShow(false)} />
            </div>
        )
    
}