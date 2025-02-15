import "./headerStyles.css"

function Header(){
    return (
        <header>
            {/*
                navbar-expand-md: when we are below medium-sized screens, we will
                show the toggle button with the id "main-nav". when we reach
                medium-sized screen and above (desktops), we will show the full nav bar
                instead of the toggle button.

            */}
            <nav className='my-nav-bar navbar navbar-expand-lg'>
                <div className='container'>
                    <a className='navbar-brand text-light' href='#'><h2>Alexander Brown</h2></a>
                    <button className='navbar-toggler' type='button' data-bs-toggle='collapse'
                            date-bs-target='#navBarNav'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id='navBarNav'>
                        <div className='navbar-nav bg-light rounded-3 ms-3'>
                            <a className='header-links nav-link text-dark' href='#'>Home</a>
                            <a className='header-links nav-link text-dark' href='#'>About</a>
                            <a className='header-links nav-link text-dark' href='#'>Skills</a>
                            <a className='header-links nav-link text-dark' href='#'>Education</a>
                            <a className='header-links nav-link text-dark' href='#'>GitHub</a>
                        </div>
                    </div>
                </div>
            </nav>

        </header>
    )
}

export default Header;