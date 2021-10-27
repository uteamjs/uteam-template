import { utCreateElement, utform, utReducer } from '@uteamjs/react'


const reducer = utReducer('yaml-example/helloworld', {
    init: {
        fields: {
            age: {
                label: "Age"
            },
            name: {
                label: "Name Please",
                value: "Peter"
            }
        },
        
    },
      
})

class layout extends utform {
    
    render = () => {
        const { Field } = this
        const { _ } = this.props
        
        return (<>            
            <h1>Hello World</h1>
            <Field id="age" />
            <Field id="name" />
            <div>You name is {_.fields.name.value}</div>
        </>)
    }
}

export default utCreateElement({ reducer, layout })

