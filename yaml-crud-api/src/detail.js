import { utCreateElement, utReducer, merge, store } from '@uteamjs/react'
import { _layout, _reducer } from './detail_export'
import { each } from 'lodash'

const reducer = utReducer('crud-api/detail',
    merge(_reducer, {
        actions: {
            load: (_, payload) => 
                each(_.fields, (v, k) => v.value = payload.data[k])
        }
    })
)
class layout extends _layout {
    constructor(props) {
        super(props)
        const { _, match, api } = props
        const { id } = match.params

        if (id)
            api('load', { id })

        else
            each(_.fields, t => t.value = '')
    }

    render = this.Content
}

export default utCreateElement({ reducer, layout })
