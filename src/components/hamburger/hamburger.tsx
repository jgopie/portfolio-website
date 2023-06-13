import './hamburger.styles.css';
import { Navbar } from '../navbar/navbar';
export const Hamburger = () => {
    return (
        <>
            <label className='hamburger-menu'>
                <input type='checkbox'/>
            </label>
            <aside className="sidebar">
                <div>
                    <Navbar/>
                </div>
            </aside>
        </>
    )
}