import './navbar.styles.css';
import { useState } from 'react';

export const Navbar = () => {
    const [isChecked, setChecked] = useState(false);
    const burgerCheck = () => {
        setChecked(!isChecked);
    };
    return (
        <>
            <nav className='navbar'>
                <button
                    type='button'
                    className='hidden'
                    onClick={burgerCheck}>
                    <img
                        src='/bars-solid.svg'
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
                        {/* <button
                            type='button'
                            className='hidden'
                            onClick={burgerCheck}>
                            <img
                                src='/bars-solid.svg'
                                className='bars'
                            />
                        </button> */}
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
