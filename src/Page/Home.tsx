import './homeStyles.css'
import HTML from './imgs/html.png'
import CSS from './imgs/css-3.png'
import JS from './imgs/java-script.png'
import CSHARP from './imgs/c-sharp.png'
import JAVA from './imgs/java.png'
import PY from './imgs/python.png'
import CPP from './imgs/c-.png'
import BOOTSTRAP from './imgs/bootstrap.png'
import TYPESC from './imgs/typescript.png'
import REACTIMG from './imgs/physics.png'
import SQLIMG from './imgs/sql.png'
import MYSQLIMG from './imgs/mysql-database.png'
import RELATIONIMG from './imgs/relational.png'
import COMPUTERIMG from './imgs/coding (1).png'
import BOOKS from './imgs/stack-of-books.png'
import GRAD from './imgs/graduated.png'
import {Icons} from "../Objects/Icons.tsx";


function Home() {
    return (
        <>
            <div className='container home-container'>

                {/*introduction row*/}
                <div className='row intro-row'>
                    <div className='col-lg-1 d-flex justify-content-center align-items-center'>
                        {/*<div className='text-center'>*/}
                        {/*    <svg xmlns={Icons.penguin.path} id={Icons.penguin.iconID} viewBox="0 0 512 512" width="400" height="400">*/}
                        {/*        <path d={Icons.penguin.d}></path><circle cx="272" cy="64" r="8"></circle></svg>*/}
                        {/*</div>*/}
                    </div>
                    <div className='col-lg-11 d-flex justify-content-center align-items-center'>
                        <div className='row'>
                            <h3 className='text-dark'>Hi! i'm</h3>
                            <h1 className='name' id='header-name'>Alexander Brown </h1>
                            <p className='about-me-desc'>and I'm a recent graduate from the amazing Aurora University.
                                I am extremely passionate about web and software development and are always on the move
                                to learn new technologies and strengthen my skill set as a future software developer.
                                Starting at a young age, I would play a lot of video games and always ask the question
                                "how are these games made"? eventually of many years of playing games led me to pursuing a
                                degree in computer science. I always had a vivid imagination and wanted to
                                learn programming so I could eventually make cool projects of my own.
                                Being in this space has made me thankful as a person for pushing me to be a
                                critical thinker and a great problem solver. My favorite things to do on
                                the side are weight training, video games and cooking. Thanks for checking out my
                                website!
                            </p>
                        </div>
                    </div>
                </div>


                <div className='container mb-5 border border-dark'></div>

                {/*skill row title*/}
                <div className='text-center text-dark' id='skill-ID'>
                    <img src={COMPUTERIMG} alt={'computer image'}
                         style={{ width: '150px', height: '150px' }}
                        className='mb-3'/>
                    <h1 className=''>Skills</h1>
                    <div className=' mb-5'>Skills I have obtained though many years of academic work
                        and personal journey throughout the years</div>
                </div>

                {/*skill row*/}
                <div className='row skill-row d-flex justify-content-center gap-2'>
                    <div className='col-lg-3 sk'>
                        <div className='skill-box'>
                            <div className='skill-box-title'>
                                {/*<p>hello</p>*/}
                                <div>
                                    <svg xmlns={Icons.codeSlash.path} width="40" height="40" fill="currentColor"
                                         className={Icons.codeSlash.iconClassName + ' asdf'}
                                         viewBox="0 0 16 16">
                                        <path
                                            d={Icons.codeSlash.d}/>
                                    </svg>
                                </div>
                                <div className='ms-2'>Web Development</div>
                            </div>
                            <div className='skill-box-description '>
                                <ul style={{ listStyleType: 'none' }}>
                                    <li>
                                        <img className='me-1 mb-1 icons'
                                             src={HTML}
                                             alt={'html-image'}

                                        />
                                        <span>HTML</span>
                                    </li>
                                    <li>
                                        <img className='me-1 mb-1 icons'
                                             src={CSS}
                                             alt={'css-image'}
                                        />
                                        <span>CSS</span>
                                    </li>
                                    <li>
                                        <img className='me-1 mb-1 icons'
                                             src={BOOTSTRAP}
                                             alt={'bootstrap image'}
                                        />
                                        <span>Bootstrap</span>
                                    </li>
                                    <li>
                                        <img className='me-1 mb-1 icons'
                                             src={TYPESC}
                                             alt={'typescript image'}
                                        />
                                        <span>Typescript</span>
                                    </li>
                                    <li>
                                        <img className='me-1 mb-1 icons'
                                             src={JS}
                                             alt={'javascript image'}
                                        />
                                        <span>Javascript</span>
                                    </li>
                                    <li>
                                        <img className='me-1 mb-1 icons'
                                             src={REACTIMG}
                                             alt={'react image'}
                                        />
                                        <span>React</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 sk'>
                        <div className='skill-box'>
                            <div className='skill-box-title'>
                                <svg xmlns={Icons.braces.path} width="40" height="40" fill="currentColor"
                                     className={Icons.braces.iconClassName}
                                     viewBox="0 0 16 16">
                                    <path
                                        d={Icons.braces.d}/>
                                </svg>
                                <div className='ms-2'>Programming</div>
                            </div>
                            <div className='skill-box-description'>
                                <ul style={{ listStyleType: 'none' }}>
                                    <li>
                                        <img className='me-1 mb-1 icons'
                                             src={JAVA}
                                             alt={'JAVA-image'}
                                        />
                                        <span>Java</span>
                                    </li>
                                    <li>
                                        <img className='me-1 mb-1 icons'
                                             src={PY}
                                             alt={'PY image'}
                                        />
                                        <span>Python</span>
                                    </li>
                                    <li>
                                        <img className='me-1 mb-1 icons'
                                             src={CSHARP}
                                             alt={'C# image'}
                                        />
                                        <span>C#</span>
                                    </li>
                                    <li>
                                        <img className='me-1 mb-1 icons'
                                             src={CPP}
                                             alt={'c++ image'}
                                        />
                                        <span>C++</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 sk'>
                        <div className='skill-box'>
                            <div className='skill-box-title'>
                                <svg xmlns={Icons.database.path} width="40" height="40" fill="currentColor"
                                     className={Icons.database.iconClassName}
                                     viewBox="0 0 16 16">
                                    <path
                                        d={Icons.database.d}/>
                                </svg>
                                <div className='ms-2'>Databases</div>
                            </div>
                            <div className='skill-box-description'>
                                <ul style={{ listStyleType: 'none' }}>
                                    <li>
                                        <img className='me-1 mb-1 icons'
                                             src={SQLIMG}
                                             alt={'sql image'}
                                        />
                                        <span>SQL</span>
                                    </li>
                                    <li>
                                        <img className='me-1 mb-1 icons'
                                             src={MYSQLIMG}
                                             alt={'mysql image'}
                                        />
                                        <span>MySQL</span>
                                    </li>
                                    <li>
                                        <img className='me-1 mb-1 icons'
                                             src={RELATIONIMG}
                                             alt={'relational database image'}
                                        />
                                        <span>Relational Databases</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='container mt-5 mb-5 border border-dark'>{/* spacer */}</div>

                {/*education title*/}
                <div className='text-center text-dark' id='education-ID'>
                    <img src={BOOKS} alt={'books image'}
                         style={{ width: '150px', height: '150px' }}
                         className='mb-3'/>
                    <h1 className=''>Education</h1>
                    <div className=' mb-5'>Colleges and Universities I attended during the duration of my
                    academic life</div>
                </div>

                {/*education row*/}
                <div className='row '>
                    <div className='col-lg-2'>{/* spacer */}</div>
                    <div className='col-lg-5'>
                        <div className='school-container mb-4'>
                            <div className='school'>
                                <div className='text-center'>
                                    <b>Aurora University</b>
                                </div>
                            </div>
                            <div className='school-desc'>
                                <span>
                                    Bachelors of Computer Science
                                </span>
                            </div>
                        </div>
                        <div className='school-container'>
                            <div className='school'>
                                <div className='text-center'>
                                    <b>Waubonsee Community College</b>
                                </div>
                            </div>
                            <div className='school-desc'>
                                <span>
                                    Associates of Applied Sciences
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-1'>{/* spacer */}</div>
                    <div className='col-lg-4 d-flex justify-content-center align-items-center'>
                        <img src={GRAD} alt='orange'
                            style={{ width: '350px', height: '350px' }} id='grad-image'/>
                    </div>
                </div>
            </div>
            <div className='container mt-5 '></div>
            {/*<Footer/>*/}
        </>
    )
}

export default Home;