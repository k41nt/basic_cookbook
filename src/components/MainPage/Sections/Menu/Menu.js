import React from 'react';
import "./Menu.css";
const Menu = () => {
  return (
    <div className="menu" id="menu">
      <div className="welcome">
        <h1 className ="intro">The possiblities are endless!</h1>
      </div>
      <div className="grid">
        <div className="pic1 projects--medium">
          <div className="menu-card">
            <h1>Vegetarian Dishes</h1>
            <div className="menu-name">
              <p>Salads</p>
            </div>
          </div>
        </div>
        <div className="pic2 projects--medium">
          <div className="menu-card">
            <h1>Italian Dishes</h1>
            <div className="menu-name">
              <p>Pizzas</p>
            </div>
          </div>
        </div>
        <div className="pic3 projects--medium">
          <div className="menu-card">
            <h1>Texas BBQ</h1>
            <div className="menu-name">
              <p>Steaks</p>
            </div>
          </div>
        </div>
        <div className="pic4 projects--medium">
          <div className="menu-card">
            <h1>Chinese</h1>
            <div className="menu-name">
              <p>Dumplings</p>
            </div>
          </div>
        </div>
        <div className="pic5 projects--medium">
          <div className="menu-card">
            <h1>Stir-Fried Rice Cake</h1>
            <div className="menu-name">
              <p>Chinese</p>
            </div>
          </div>
        </div>
        <div className="pic6 projects--medium">
          <div className="menu-card">
            <h1>Breakfast</h1>
            <div className="menu-name">
              <p>Pancakes</p>
            </div>
          </div>
        </div>
        <div className="pic8 projects--medium">
          <div className="menu-card">
            <h1>Homestyle Burger</h1>
            <div className="menu-name">
              <p>Burgers</p>
            </div>
          </div>
        </div>
        <div className="pic7 projects--medium">
          <div className="menu-card">
            <h1>Southern Asian</h1>
            <div className="menu-name">
              <p>Chicken Masala </p>
            </div>
          </div>
        </div>
        <div className="pic9 projects--medium">
          <div className="menu-card">
            <h1>Dishes your whole family will love!</h1>
            <div className="menu-name">
              <p>Family</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
