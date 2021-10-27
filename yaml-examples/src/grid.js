import { utCreateElement, utform, utReducer } from '@uteamjs/react'


const reducer = utReducer('yaml-example/grid', {
    init: {
        fields: {},
        columns: [
            {
                field: "orderNo",
                headerName: "Order No.",
                filter: "agTextColumnFilter",
                cellRenderer: "orderNoRoute"
            },
            {
                headerName: "Order Date",
                field: "orderDate"
            },
            {
                headerName: "Order Value",
                field: "orderValue"
            }
        ],
        rows: [
            {
                orderNo: "MO20200100123",
                orderDate: "26Jul2024",
                orderValue: "210"
            },
            {
                orderNo: "MO20210200012",
                orderDate: "11Aug2024",
                orderValue: "350"
            },
            {
                orderNo: "MO20210500031",
                orderDate: "6Feb2026",
                orderValue: "480"
            }
        ],
        
    },
      
})

class layout extends utform {
    onGridReady = grid => {
        this.gridapi = grid.api
        
    }
    renderColumn = link => p => {
        return(
            <a className='link'
                href={'#/' + link + '/' + p.value}>
                {p.value}
            </a>
        )
    }
    
    render = () => {
        const { Grid } = this
        
        return (<>            
            <Grid domLayout="autoHeight" onGridReady={this.onGridReady} frameworkComponents={{
                    'orderNoRoute': this.renderColumn('preview/yamlgriddetail')
                }}
               />
        </>)
    }
}

export default utCreateElement({ reducer, layout })

