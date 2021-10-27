import { utCreateElement, utform, utReducer } from '@uteamjs/react'
import { Tab, Tabs } from 'react-bootstrap'


const reducer = utReducer('yaml-example/tab', {
    init: {
        fields: {
            work: {
                label: "Work"
            },
            mobile: {
                label: "Mobile"
            },
            telephone: {
                label: "Telephone"
            }
        },
        
    },
      
})

class layout extends utform {
    
    render = () => {
        const { Field } = this
        
        return (<>            
            <Tabs defaultActiveKey="key-address" id="tab-Tabs">
                <Tab eventKey="key-address" title="Address">
                    <Field id="work" />
                </Tab>
                <Tab eventKey="key-contact" title="Contact">
                    <Field id="mobile" />
                    <Field id="telephone" />
                </Tab>
            </Tabs>
        </>)
    }
}

export default utCreateElement({ reducer, layout })

