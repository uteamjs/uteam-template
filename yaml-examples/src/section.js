import { utCreateElement, utform, utReducer } from '@uteamjs/react'
import { FcCustomerSupport } from 'react-icons/fc'
import { Col, Row } from 'react-bootstrap'


const reducer = utReducer('yaml-example/section', {
    init: {
        fields: {
            customerDetails: {
                type: "group",
                child: {
                    lastName: {
                        label: "Last Name",
                        value: "Thomson"
                    },
                    firstName: {
                        label: "First Name",
                        value: "John"
                    },
                    birtday: {
                        label: "Birtday"
                    },
                    custemerNo: {
                        label: "Custemer No"
                    }
                }
            },
            preference: {
                type: "checkbox",
                list: {
                    nosugar: "No sugar",
                    noice: "No ice",
                    nostraw: "No straw"
                },
                label: "Preference"
            },
            report: {
                type: "group",
                child: {
                    note: {
                        label: "Note"
                    }
                },
                isEdit: true
            }
        },
        
    },
      
})

class layout extends utform {
    
    render = () => {
        const { Field, Section } = this
        
        return (<>            
            <h4>Section Example</h4>
            <Section title="Customer Details" id="customerDetails" Icon={FcCustomerSupport}
              >
                <Row>
                    <Col>
                        <Field id="lastName" no={2} />
                        <Field id="firstName" no={2} />
                    </Col>
                    <Col>
                        <Field id="birtday" no={2} />
                        <Field id="custemerNo" no={2} />
                    </Col>
                </Row>
            </Section>
            <p>Fields outside sections</p>
            <Field id="preference" />
            <Section title="Report" isCollapse={false} isSave={false}
               backgroundColor="white" id="report"
              >
                <Field id="note" />
                <p>Note - Section without Icon, Save & Collapse</p>
            </Section>
        </>)
    }
}

export default utCreateElement({ reducer, layout })

