import { utCreateElement, utform, utReducer } from '@uteamjs/react'
import { Col, Row } from 'react-bootstrap'


const reducer = utReducer('yaml-example/fields', {
    init: {
        fields: {
            address: {
                label: "Address",
                value: "Great Russell St, London, WC1B 3DG"
            },
            date: {
                type: "datepicker",
                label: "Date",
                value: "26 July 2024"
            },
            note: {
                type: "textarea",
                label: "Note"
            },
            customer: {
                label: "Customer",
                value: 1234567
            },
            selectDrinks: {
                type: "select",
                list: {
                    milk: "Milk",
                    coffee: "Coffee",
                    orangejuice: "Orange Juice"
                },
                label: "Select Drinks"
            }
        },
        
    },
      
})

class layout extends utform {
    
    render = () => {
        const { Field } = this
        
        return (<>            
            <Field id="address" />
            <Field id="date" />
            <Row>
                <Col>
                    <Field id="note" no={2} />
                </Col>
                <Col>
                    <Field id="customer" readOnly="true" no={2}
               />
                    <Field id="selectDrinks" no={2} />
                </Col>
            </Row>
        </>)
    }
}

export default utCreateElement({ reducer, layout })

