import { NavLink } from 'react-router-dom'

export const getKeyValue = t => {
    const name = Object.keys(t)[0]
    return [name, t[name]]
}

const toggle = e => {
    const isHide = e.target.nextSibling.style.display === 'none'
    e.target.textContent = e.target.textContent.replace(
        isHide ? /^\+/ : /^\–/, isHide ? '–' : '+')
    e.target.nextSibling.style.display = isHide ? 'block' : 'none'
}

export const treeMenu = (obj, close) => obj.map(t => {
    const [k, v] = getKeyValue(t)
   
    const _link = v ?
        <NavLink to={v} onClick={close}>
            {k}
        </NavLink> : k

    return <div key={'navlink-' + v} >
        {t.child ? <>
            <div className='toggle' onClick={toggle}>+ {_link}</div>
            <div className='sub-menu' style={{ display: 'none' }}>
                {treeMenu(t.child, close)}
            </div>
        </> :
            _link}
    </div>
})