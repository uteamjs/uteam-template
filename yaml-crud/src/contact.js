import { utCreateElement, utReducer, merge } from '@uteamjs/react'
import { _layout, _reducer } from './contact_export'
import { findIndex, uniqueId, each } from 'lodash'

const reducer = utReducer('crud/contact',
    merge(_reducer, {
        actions: {
            delete: (_, rows) => {
                const _rows = rows.map(t => t.rowIndex)
                _.rows = _.rows.filter((t, i) => _rows.indexOf(i) < 0)
            },

            add: (_, row) => {
                const _row = {}
                each(row, (v, k) => _row[k] = v.value)

                if(_row.id) {
                    const i = findIndex(_.rows, t => t.id === _row.id)
                    _.rows[i] = _row
                
                } else {
                    _row.id = uniqueId()
                    _.rows.push(_row)
                }
            }
        } 
    })
)

class layout extends _layout {
    render = this.Content
}

export default utCreateElement({ reducer, layout })
