import React from "react"
import { useState } from "react";
import FoodItem from "./FoodItem.jsx"
import "./Menu.css"
import MenuData from "./MenuData.jsx"

export default function Menu(){

    const [menuState, setMenuState] = useState(1);

    const foodData = MenuData.food
    const mainMenu = foodData.map(food => {
        return (<FoodItem
        item = {food.item}
        description = {food.description}
        price = {food.price}
        />)
    })

    const activateTab = (index) => {
        setMenuState(index)
    };

    return(
        <div className = "menu">
            <div className = "container">
                <hr className= "solid"></hr>
                <div className = "menu-tabs">
                    <h3 
                    className = {menuState === 1 ? "active-menu-heading" :
                    "menu-heading"}
                    onClick = {() => activateTab(1)}
                    >Menu</h3>
                    <h3 
                    className = {menuState === 2 ? "active-menu-heading" :
                    "menu-heading"}
                    onClick = {() => activateTab(2)}
                    >Sides</h3>
                    <h3 
                    className = {menuState === 3 ? "active-menu-heading" :
                    "menu-heading"}
                    onClick = {() => activateTab(3)}
                    >Beer</h3>
                </div>
                <div className = "menu-contents">
                    <div 
                    className = {menuState === 1 ? "active-menu-content" :
                    "menu-content"}
                    >{mainMenu}
                    </div>
                    <div 
                    className = {menuState === 2 ? "active-menu-content" :
                    "menu-content"}
                    ><p>Test 2</p>
                    </div>
                    <div className = {menuState === 3 ? "active-menu-content" :
                    "menu-content"}
                    ><p>Test 3</p>
                    </div>
                </div>
            </div>
        </div>
    )
}