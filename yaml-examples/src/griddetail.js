import { utCreateElement, utform, utReducer } from '@uteamjs/react'


const reducer = utReducer('yaml-example/griddetail', {
    init: {
        fields: {},
        
    },
      
})

class layout extends utform {
    
    render = () => {
        const { _ } = this.props
        
        return (<>            
            <h4>Detail page with id {this.props.match.params.id}</h4>
        </>)
    }
}

export default utCreateElement({ reducer, layout })

