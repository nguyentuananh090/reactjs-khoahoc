import "./footer.css"
const Footer=()=>{
    return (
        <>
        <footer>
            <div class="content">
                <h2 class="logo">LOGO</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos consectetur, nisi nulla quis rerum reprehenderit eligendi. Similique veniam quae quidem magni, labore minima consequatur laudantium dolore eos excepturi, quos officia.</p>
                <ul class="sm">
                <li><a href="#"><i class="lab la-youtube"></i></a></li>
                <li><a href="#"><i class="lab la-facebook"></i></a></li>
                <li><a href="#"><i class="lab la-instagram"></i></a></li>
                <li><a href="#"><i class="lab la-twitter"></i></a></li>
                <li><a href="#"><i class="lab la-github"></i></a></li>
                </ul>
                <ul class="links">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <p class="copyright">
                &copy; <span id="year"></span> ArsenTech | All Rights Reserved
            </p>
            </footer>
        </>
    );
}
export default Footer