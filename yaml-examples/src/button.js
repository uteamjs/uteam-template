import { utCreateElement, utform, utReducer } from '@uteamjs/react'
import { Button } from 'react-bootstrap'


const reducer = utReducer('yaml-example/button', {
    init: {
        fields: {
            name: {
                label: "Name"
            }
        },
        
    },
      
})

class layout extends utform {
    
    render = () => {
        const { Field, ButtonGroup } = this
        
        return (<>            
            <h4>Buttons Group</h4>
            <Field id="name" />
            <ButtonGroup>
                <Button onClick={() => api('save', _.fields)}>
                    Save
                </Button>
                <Button target="_blank" href="https://u.team">
                    Link
                </Button>
            </ButtonGroup>
            <ButtonGroup left="null">
                <Button>
                    Dummy
                </Button>
                <Button variant="danger" onClick={() => alert('Hello World')}>
                    Alert
                </Button>
            </ButtonGroup>
        </>)
    }
}

export default utCreateElement({ reducer, layout })

