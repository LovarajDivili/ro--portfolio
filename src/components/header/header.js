import Logo from '../../images/logo.svg'
import SunImg from '../../images/sun.png'
import MoonImg from '../../images/moon.png'

import './header.css'
import { useEffect } from 'react'
import { useState } from 'react'

const Header = ({ UserData }) => {


    function toggle_Menus() {


        let Toggle_Container = document.querySelector('.portfolio-header-toggle-container')
        let block_background = document.querySelector('.block-background')

        Toggle_Container.classList.toggle('toggle-container-open')
        block_background.classList.toggle('display-none')

    }


    function ChangeTheme(e) {

        if (e.target.checked) {
            document.documentElement.style.setProperty('--primary-bg-color', '#fff');
            document.documentElement.style.setProperty('--secondary-bg-color', '#fff');

            document.documentElement.style.setProperty('--primary-text-color', '#0D1117');
            document.documentElement.style.setProperty('--primary-hover-text-color', '#0D1117');
        } else {
            document.documentElement.style.setProperty('--primary-bg-color', '#0D1117');
            document.documentElement.style.setProperty('--secondary-bg-color', 'rgb(22 27 34)');

            document.documentElement.style.setProperty('--primary-text-color', 'rgb(150 155 165');
            document.documentElement.style.setProperty('--primary-hover-text-color', '#fff');
        }
    }

    const ThemeChanger = () => {
        let Btn = document.getElementById('theme-changer-btn')
        let Btn_2 = document.getElementById('theme-changer-btn-2')
        let Toggle_menus = document.getElementById('toggle-menu-btn')

        Btn.addEventListener('input', ChangeTheme)
        Btn_2.addEventListener('input', ChangeTheme)

        let open = false


        function Togggle_Menu_Event(e) {
            let Toggle_Container = document.querySelector('.portfolio-header-toggle-container')
            let Toggle_Items = Toggle_Container.querySelectorAll('.portfolio-header-menus-item')

            Toggle_Items = [...Toggle_Items]

            if (e.path[0] == Toggle_menus) {
                toggle_Menus()
                open = true
            }

            else if (open && !(Toggle_Items.includes(e.path[0]) || e.path[0] == Toggle_Container)) {
                toggle_Menus()
                open = false
            }

        }

        window.addEventListener('click', Togggle_Menu_Event)
        window.addEventListener('wheel', Togggle_Menu_Event)
    }

    useEffect(() => {
        ThemeChanger()
    })



    return (
        <div className="portfolio-header-main">
            <a href="#">
                <div className="portfolio-header-logo">
                    <img src={UserData.photo} width={50} height={50} alt="portfolio-logo" title='Home' />
                </div>
            </a>
            <div className="portfolio-header-menus">
                <div className="portfolio-header-menus-item">
                    <label className="portfolio-themeChanger">
                        <input type="checkbox" id='theme-changer-btn' />
                        <span className="portfolio-themeChanger-slider">
                            <span className="portfolio-themeChanger-slider-bg">
                                <img src={MoonImg} alt="darkMode" />
                                <img src={SunImg} alt="lightMode" />
                            </span>
                        </span>
                    </label>
                </div>

                <a href='#about'><div className="portfolio-header-menus-item" >About</div>  </a>
                <a href='#skillset'><div className="portfolio-header-menus-item">Skill Sets</div></a>
                <a href='#projects'><div className="portfolio-header-menus-item">Projects</div></a>
                <a href='#expireance'><div className="portfolio-header-menus-item">Expireance</div></a>
                <a href='#contact'><div className="portfolio-header-menus-item">Contact</div></a>


                <div className="portfolio-header-menus-item">
                    <a href={UserData.resume} download={true}>
                        <div className="portfolio-header-menus-item-download-cv">Dowload CV</div>
                    </a>
                </div>
            </div>
            <div className="portfolio-header-menus-mobile">
                <div className="portfolio-header-menus-item">
                    <label className="portfolio-themeChanger">
                        <input type="checkbox" id='theme-changer-btn-2' />
                        <span className="portfolio-themeChanger-slider">
                            <span className="portfolio-themeChanger-slider-bg">
                                <img src={MoonImg} alt="darkMode" />
                                <img src={SunImg} alt="lightMode" />
                            </span>
                        </span>
                    </label>
                </div>

                <div className="portfolio-header-menus-item">
                    <div className="portfolio-header-menus-item-download-cv" id='toggle-menu-btn'>Menus</div>
                </div>

                <div className='block-background'></div>
                <div className="portfolio-header-toggle-container">

                    <button onClick={(e) => toggle_Menus()} className="portfolio-header-menus-item toggle-container-close-btn">CLOSE</button>
                    <a onClick={(e) => toggle_Menus()} href='#'><div className="portfolio-header-menus-item" >Into</div>  </a>
                    <a onClick={(e) => toggle_Menus()} href='#about'><div className="portfolio-header-menus-item" >About</div>  </a>
                    <a onClick={(e) => toggle_Menus()} href='#skillset'><div className="portfolio-header-menus-item">Skill Sets</div></a>
                    <a onClick={(e) => toggle_Menus()} href='#projects'><div className="portfolio-header-menus-item">Projects</div></a>
                    <a onClick={(e) => toggle_Menus()} href='#expireance'><div className="portfolio-header-menus-item">Expireance</div></a>
                    <a onClick={(e) => toggle_Menus()} href='#contact'><div className="portfolio-header-menus-item">Contact</div></a>
                    <a href={UserData.resume} download={true}>
                        <div className="portfolio-header-menus-item-download-cv">Dowload CV</div>
                    </a>

                </div>
            </div>
        </div>
    );
}
export default Header;
