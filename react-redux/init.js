import { utCreateElement, utReducer, merge } from '@uteamjs/react'
import { _layout, _reducer } from '/*export*/'

const reducer = utReducer('/*module*///*component*/',
    merge(_reducer, {
        init: {
        },
    })
)

class layout extends _layout {
    render = () => {
        
        return this.Content()
    }
}

export default utCreateElement({ reducer, layout })
