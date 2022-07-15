import logo from '../../assets/img/logo.svg'
import './styles.css'

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMETA"/>
                    <h1>DSMETA</h1>
                    <p>Developed by 
                        <a href="https://github.com/karolinebrito"> Karoline Brito</a>
                    </p>
            </div>
        </header>
    )
}

export default Header