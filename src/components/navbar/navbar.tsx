import './navbar.styles.css';
import { useState } from 'react';

export const Navbar = () => {
    const [isChecked, setChecked] = useState(false);
    const [menuImgSrc, setMenuImgSrc] = useState('/bars-solid.svg');
    const burgerCheck = () => {
        setChecked(!isChecked);
        if (isChecked) {
            setMenuImgSrc('/bars-solid.svg');
        } else {
            setMenuImgSrc('/x-solid.svg');
        }
    };
    return (
        <>
            <nav className='navbar'>
                <button
                    type='button'
                    className='hidden'
                    onClick={burgerCheck}>
                    <img
                        src={menuImgSrc}
                        className='bars'
                    />
                </button>
                <ul className='desktop-list'>
                    <li>
                        <a href='/'>Home</a>{' '}
                    </li>
                    <li>
                        <a href='/resume'>Resume</a>
                    </li>
                    <li>
                        <a href='/blog'>Blog</a>
                    </li>
                </ul>
                {isChecked && (
                    <div className='ghost'>
                        <ul className='mobile-list'>
                            <li>
                                <a href='/'>Home</a>
                            </li>
                            <li>
                                <a href='/resume'>Resume</a>
                            </li>
                            <li>
                                <a href='/blog'>Blog</a>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
        </>
    );
};
