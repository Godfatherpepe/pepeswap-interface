import React from "react";
import logo from "../../assets/images/logo.png";
import AppBody from '../AppBody'
import { AutoColumn } from '../../components/Column'

function CoinFlip() {

    return (
        <AppBody>
            <AutoColumn gap="lg" justify="center">
        <div>
            <h1>Pepe Coin Flip</h1>
            <img style={{width: 75, height: 75}} src={logo} />
            <p>Flip your coin, and win more PEPE!</p>
        </div>
        </AutoColumn>
        </AppBody>
    )
}

export default CoinFlip