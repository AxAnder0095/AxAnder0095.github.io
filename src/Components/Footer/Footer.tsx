import './FooterStyles.css'

function Footer() {
    return (
        <footer className='footer container-fluid'>
            <div className='row'>
                <div className='col-4'></div>
                <div className='col-4 d-flex justify-content-center pt-2 pb-2'>
                    <span className='contact'>
                        <h5 style={{margin: 0}}>Contact</h5>
                        balexander130@yahoo.com <br/>
                        630-870-5787
                    </span>

                </div>
                <div className='col-4'></div>
            </div>
        </footer>
    )
}

export default Footer;