import React from "react"
import "./Games.css"
import GamesData from "./GamesData"
import GameItem from "./GameItem"

export default function Games(){

    const arcadeGames = GamesData.arcade.sort((a,b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    });

    const pinballMachines = GamesData.pinball.sort((a,b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    });

    const arcadeGameList = arcadeGames.map(game => {
        return(<GameItem
        key = {game.id}
        name = {game.name}
        />)
    })

    const pinballMachineList = pinballMachines.map(machine => {
        return(<GameItem
        key = {machine.id}
        name = {machine.name}
        />)
    })

    return(
        <div className = "games">
            <div className ="container">
                <h2 className = "section-title">Games</h2>
                <hr className= "thin-line"></hr>
                    <div className = "games-container">
                        <div className = "arcade-container">
                            <h3 className = "section-title">Current Arcade Games</h3>
                            <div className = "arcade-games">
                                {arcadeGameList}
                            </div>
                        </div>
                        <div className = "pinball-container">
                            <h3 className = "section-title">Current Pinball Machines</h3>
                            <div className = "pinball-machines">
                                {pinballMachineList}
                            </div>
                        </div>
                        <p id = "lineup-note">Arcade & pinball lineup is changed up frequently
                         - please check back again soon!!!</p>
                    </div>
            </div>
        </div>
    )
}