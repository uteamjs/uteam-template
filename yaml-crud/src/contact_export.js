import { utform } from '@uteamjs/react'
import { Button, Col, Row } from 'react-bootstrap'


export const _reducer = {
    init: {
        fields: {
            search: {
                label: "Search"
            }
        },
        columns: [
            {
                field: "id",
                headerName: "id",
                hide: true
            },
            {
                field: "name",
                headerName: "Name",
                cellRenderer: "nameRoute"
            },
            {
                headerName: "Email",
                field: "email"
            },
            {
                headerName: "Gender",
                field: "gender"
            }
        ],
        rows: [
            {
                id: "12345",
                name: "Peter",
                email: "peter@gmail.com",
                gender: "Male"
            },
            {
                id: "23454",
                name: "Kate",
                email: "kate@yahoo.com",
                gender: "Female"
            }
        ],
        
    },
      
}

export class _layout extends utform {
    isFirstColumn = params => {
        const displayedColumns = params.columnApi.getAllDisplayedColumns();
        return displayedColumns[0] === params.column;
    }
    onGridReady = grid => {
        this.gridapi = grid.api
        grid.api.sizeColumnsToFit()
    }
    renderColumn = link => p => {
        return(
            <a className='link'
                href={'#/' + link + '/' + p.data.id}>
                {p.value}
            </a>
        )
    }
    
    Content = () => {
        const { Field, ButtonGroup, isFirstColumn, Grid } = this
        const { call } = this.props
        
        return (<>            
            <Row>
                <Col>
                    <Field id="search" labelPosition="top" onChange={params => e =>  {
    this.gridapi.setQuickFilter(e.target.value)
    this.onChange(params)(e)
}
}
               no={2} />
                </Col>
                <Col>
                    <ButtonGroup>
                        <Button href="#/preview/yamldetail">
                            Create
                        </Button>
                        <Button variant="danger" onClick={() => call('delete', this.gridapi.getSelectedNodes())
}>
                            Delete
                        </Button>
                    </ButtonGroup>
                </Col>
            </Row>
            <Grid domLayout="autoHeight" defaultColDef={{
                headerCheckboxSelection: isFirstColumn,
                checkboxSelection: isFirstColumn,
                resizable: true,
            }} rowSelection="multiple"
               onGridReady={this.onGridReady} frameworkComponents={{
                    'nameRoute': this.renderColumn('preview/yamldetail')
                }}
               />
        </>)
    }
}


