import { utCreateElement, utform, utReducer } from '@uteamjs/react'
import { lazy } from 'react'
import { Button } from 'react-bootstrap'

const Pagepopup = lazy(() => import('./pagepopup'))

const reducer = utReducer('yaml-example/modal', {
    init: {
        fields: {},
        
    },
    actions: {
        popupReturn: (_, obj) => {
            if (obj.id === 'pagepopup') {
                _.inputname = obj.name
            }
        }
    }  
})

class layout extends utform {
    
    render = () => {
        const { call, _ } = this.props
        const { popupClose, Popup, popup, ButtonGroup } = this
        
        return (<>            
            <h4>Popup Up/Modal with init and return value</h4>
            <ButtonGroup>
                <Button onClick={popup(
                () => <Pagepopup callback={obj => () =>
                    call('popupReturn', { ...obj, id: 'pagepopup' }, popupClose)}/>,
                {title: 'Call by parent Modal'})}>
                    Enter Name
                </Button>
            </ButtonGroup>
            <p>Your name is {_.inputname}</p>
            <Popup />
        </>)
    }
}

export default utCreateElement({ reducer, layout })

