import { utCreateElement, utform, utReducer } from '@uteamjs/react'
import { Button } from 'react-bootstrap'


const reducer = utReducer('yaml-example/pagepopup', {
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
        const { _, callback } = this.props
        
        return (<>            
            <Field id="name" />
            <ButtonGroup>
                <Button onClick={callback ? callback({
                    name:_.fields.name.value
                }) : null}>
                    Done
                </Button>
            </ButtonGroup>
        </>)
    }
}

export default utCreateElement({ reducer, layout })

