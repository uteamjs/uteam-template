import { utCreateElement, utform, utReducer } from '@uteamjs/react'


const reducer = utReducer('yaml-example/html', {
    init: {
        fields: {
            create: {
                label: "Create"
            }
        },
        
    },
      
})

class layout extends utform {
    
    render = () => {
        const { Field } = this
        
        return (<>            
            <a href='/'>Hello</a>
            <hr/>
            <a href='/'>World</a>
            <div className="doom">
                <a>PPP</a>
                <Field id="create" />
            </div>
        </>)
    }
}

export default utCreateElement({ reducer, layout })

