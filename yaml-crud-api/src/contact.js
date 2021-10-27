import { utCreateElement, utReducer, merge } from '@uteamjs/react'
import { _layout, _reducer } from './contact_export'

const reducer = utReducer('crud-api/contact',
    merge(_reducer, {
        actions: {
            delete: (_, rows) => _.rows = _.rows.filter(t =>
                rows.toString().indexOf(t.id) < 0),

            load: (_, payload) => _.rows = payload.rows
        }
    })
)

class layout extends _layout {
    constructor(props) {
        super(props)
        props.api('load', {})
    }

    
    render = () => {
        console.log('reander...')
        return this.Content()
    }
}

export default utCreateElement({ reducer, layout })
