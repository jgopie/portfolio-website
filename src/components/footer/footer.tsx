import './footer.styles.css';

export const Footer = () => {
    const date = new Date();
    return (
        <div className='footer'>
            <div className='svgCard'>
                <p><a href="https://github.com/jgopie"><img src="/github.svg"/></a></p>
                <p><a href="https://www.linkedin.com/in/jordan-gopie-429904239/"><img src="/linkedin.svg"/></a></p>
            </div>
            <p>© Jordan Gopie {date.getFullYear()}</p>
        </div>
    );
}