import "./header.css";
import {Link, NavLink } from "react-router-dom";

const Header=()=>{
    return (
        <>
        <header class="premium-header">
            <div class="logo">
                <a href="#"><span>Premium</span>Brand</a>
            </div>

            <nav class="navbar">
                <ul class="nav-links">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/books">Books <i class="fas fa-chevron-down"></i></NavLink></li>
                    <li><NavLink to="/login">Login</NavLink></li>
                    <li><NavLink to="/register">Register</NavLink></li>
                    <li><NavLink to="/users">Users</NavLink></li>
                </ul>
            </nav>

            <div class="header-actions">
                <div class="search-box">
                    <input type="text" placeholder="Search..." />
                    <button><i class="fas fa-search"></i></button>
                </div>
                <div class="user-actions">
                    <a href="#"><i class="far fa-heart"></i></a>
                    <a href="#"><i class="fas fa-shopping-cart"></i></a>
                    <a href="#" class="user-profile"><i class="far fa-user"></i></a>
                </div>
                <button class="menu-toggle" id="menu-toggle">
                    <i class="fas fa-bars"></i>
                </button>
            </div>
        </header>
        </>
    );
}
export default Header;