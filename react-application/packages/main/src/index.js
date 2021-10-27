/*  Site Layout template

    Logo  menu1 menu2 menu3
    ------------------------------------------
    -submenu |  Page
     +sub2   |
     +sub3   |
             |
*/

import { useState } from "react"
import { render } from 'react-dom'
import { HashRouter as Router, NavLink } from 'react-router-dom'
import { RouterStore, SwitchRoute } from '@uteamjs/react'
import { FiMenu } from 'react-icons/fi'
import { treeMenu } from "./treemenu"
import './css/app.sass'

// 1. Import generated packages
/** insert import */

// 2. Put all imported packages into a array
const modules = [
/** insert module */
]

const mainMenu = modules.map(t => ({
    label: t.name,
    route: '/' + t.routePath + '/' + (t.defaultPath || '')
}))

const LogoMenu = ({ isShow, toggle }) => {
    return <div className={'main-menu'}>
        <div>
            <div className={'hamberger' + (isShow ? ' clicked' : '')}
                onClick={() => toggle(!isShow)}>
                <FiMenu size={25} />
            </div>
            <div>
                <img src='assets/icons/logo.png' />
            </div>
            <div className='items'>
                {mainMenu.map(t =>
                    <NavLink key={'main-' + t.route} to={t.route}>
                        {t.label}
                    </NavLink>)}
            </div>
        </div>
    </div>
}

const content = ({ routePath, menu, route }, isShow, toggle) => () =>
    <>
        <div className={`tree-menu${isShow ? ' show' : ''}`} >
            {treeMenu(menu, () => toggle(false))}
        </div>
        <Router>
            <div className='page'>
                <SwitchRoute prefix={routePath} route={route} />
            </div>
        </Router>
    </>

const App = () => {
    const [isShow, toggle] = useState(false)
    return <RouterStore>

        <div className='content'>
            <Router>
                <SwitchRoute route={
                    modules.reduce((a, t) => {
                        a[t.routePath] = content(t, isShow, toggle)
                        return a
                    }, {})
                } />
            </Router>
        </div>
        <LogoMenu isShow={isShow} toggle={toggle} />


    </RouterStore >
}

render(<App />, document.getElementById('root'))
