import "./header.css"
const Header=()=>{
    return (
        <>
        <header class="premium-header">
            <div class="logo">
                <a href="#"><span>Premium</span>Brand</a>
            </div>

            <nav class="navbar">
                <ul class="nav-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/products">Products <i class="fas fa-chevron-down"></i></a></li>
                    <li><a href="/login">Login</a></li>
                    <li><a href="/register">Register</a></li>
                    <li><a href="#">Contact</a></li>
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