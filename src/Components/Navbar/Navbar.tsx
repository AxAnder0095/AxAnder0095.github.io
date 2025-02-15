import './NavbarStyles.css'
import {Icons} from "../../Objects/Icons.tsx";
import {Link as ScrollLink} from 'react-scroll'


function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg my-nav-bar">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <span className='title-name'>balexander310@yahoo.com</span>
                    </a>
                    <button className="navbar-toggler" type="button"
                            data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                {/*<a className="header-links nav-link" href="/">Home</a>*/}
                                <ScrollLink
                                    to={"/"}
                                    className='header-links nav-link'
                                >
                                    Home
                                </ScrollLink>
                            </li>
                            <li className="nav-item">
                                {/*<a className="header-links nav-link" href="/">About</a>*/}
                                {/*<ScrollLink to={"header-name"} spy={true} smooth={true} offset={50} duration={500}>About</ScrollLink>*/}
                                <ScrollLink
                                    to={"header-name"}
                                    spy={true}
                                    smooth={true}
                                    offset={-150}
                                    duration={500}
                                    className='header-links nav-link'
                                >
                                    About
                                </ScrollLink>
                            </li>
                            <li className="nav-item">
                                {/*<a className="header-links nav-link" href="/">Skills</a>*/}
                                {/*<ScrollLink to={"skill-ID"} spy={true} smooth={true} offset={50} duration={500}>Skills</ScrollLink>*/}
                                <ScrollLink
                                    to={"skill-ID"}
                                    spy={true}
                                    smooth={true}
                                    offset={-170}
                                    duration={500}
                                    className='header-links nav-link'
                                >
                                    Skills
                                </ScrollLink>
                            </li>
                            <li className="nav-item">
                                {/*<a className="header-links nav-link" href="/">Education</a>*/}
                                <ScrollLink
                                    to={"education-ID"}
                                    spy={true}
                                    smooth={true}
                                    offset={-170}
                                    duration={500}
                                    className='header-links nav-link'
                                >
                                    Education
                                </ScrollLink>
                            </li>
                        </ul>
                        <div className='icon-container'>
                            <a className="icon nav-link" href="https://github.com/AxAnder0095">
                                <svg xmlns={Icons.github.path} width="22" height="22" fill="black"
                                     className="bi bi-github" viewBox="0 0 16 16">
                                    <path
                                        d={Icons.github.dlink}/>
                                </svg>
                            </a>
                            <a className="icon nav-link" href={'https://www.linkedin.com'}>
                                <svg xmlns={Icons.linkedin.path} width="22" height="22" fill="black"
                                     className="bi bi-linkedin" viewBox="0 0 16 16">
                                    <path
                                        d={Icons.linkedin.dlink}/>
                                </svg>
                            </a>

                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;