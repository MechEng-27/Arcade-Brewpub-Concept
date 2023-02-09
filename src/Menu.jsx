import React from "react";
import { useState } from "react";
import FoodItem from "./FoodItem.jsx";
import SideItem from "./SideItem.jsx";
import BeerItem from "./BeerItem.jsx";
import "./Menu.css";
import MenuData from "./MenuData.jsx";

export default function Menu(){

    const [menuState, setMenuState] = useState(1);

    const foodData = MenuData.food
    const mainMenu = foodData.map(food => {
        return (<FoodItem
        key = {food.id}
        item = {food.item}
        description = {food.description}
        price = {food.price}
        />)
    });

    const sidesData = MenuData.sides
    const sidesMenu = sidesData.map(side => {
        return (<SideItem
        key = {side.id}
        item = {side.item}
        description = {side.description}
        price = {side.price}
        />)
    });

    const beerData = MenuData.beer
    const beerMenu = beerData.map(beer => {
        return (<BeerItem
        key = {beer.id}
        item = {beer.item}
        description = {beer.description}
        price = {beer.price}
        />)
    });


    const activateTab = (index) => {
        setMenuState(index);
    };

    return(
        <section className = "menu">
            <div className = "container">
                <h2 className = "section-title" id ="menu-title">Menu</h2>
                <hr className= "thin-line"></hr>
                <div className = "menu-tabs">
                    <h3 
                    className = {menuState === 1 ? "active-menu-heading" :
                    "menu-heading"}
                    onClick = {() => activateTab(1)}
                    >Main Menu</h3>
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
                    >{sidesMenu}
                    </div>
                    <div className = {menuState === 3 ? "active-menu-content" :
                    "menu-content"}
                    >{beerMenu}
                    </div>
                </div>
            </div>
        </section>
    );
};