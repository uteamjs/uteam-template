import { utform } from '@uteamjs/react'
import { Button } from 'react-bootstrap'


export const _reducer = {
    init: {
        fields: {
            id: {
                label: "Id"
            },
            name: {
                label: "Name"
            },
            email: {
                label: "Email"
            },
            gender: {
                type: "radio",
                list: {
                    male: "Male",
                    female: "Female"
                },
                label: "Gender"
            }
        },
        
    },
      
}

export class _layout extends utform {
    
    Content = () => {
        const { Field, ButtonGroup } = this
        const { call, _ } = this.props
        
        return (<>            
            <Field id="name" />
            <Field id="email" />
            <Field id="gender" />
            <ButtonGroup>
                <Button onClick={() => this.props.history.goBack()
}>
                    Cancel
                </Button>
                <Button onClick={() => {
  call('yaml-tutorial/contact/add', _.fields)
  this.props.history.goBack()
}
}>
                    Save
                </Button>
            </ButtonGroup>
        </>)
    }
}


