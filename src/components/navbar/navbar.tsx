import './navbar.styles.css';

export const Navbar = () => {
    return (
        <>
            <nav className='navbar'>
                <a href="/">Home</a>
                <a href="/resume">Resume</a>
                <a href="/blog">Blog</a>
            </nav>
        </>
    );
}