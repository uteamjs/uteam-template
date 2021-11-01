import { utCreateElement, utReducer, merge, store } from '@uteamjs/react'
import { _layout, _reducer } from './detail_export'
import { each } from 'lodash'


const reducer = utReducer('crud/detail',
    merge(_reducer, {
        actions: {
            load: (_, data) => {
                each(_.fields, (v, k) => {
                    v.value = k === 'gender' ?  data[k].toLowerCase() : data[k]
                })
            }
        }
    })
)
class layout extends _layout {
    constructor(props) {
        super(props)
        const { _, match } = props
        const { id } = match.params
        
        if (id) {
            const data = store.getState()['crud/contact']
            const row = data?._.rows.find(t => t.id === id)
            if(row)
                props.call('load', row)
        
        } else 
            each(_.fields, t => t.value = '')   
    }

    render = this.Content
}

export default utCreateElement({ reducer, layout })
