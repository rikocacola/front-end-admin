import React from 'react';
import axios from 'axios';

import TableUstadz from '../table-ustadz/table-ustadz.component.jsx'

class ListUstadz extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ustadz: [],
            errorMsg: ''
        }
    }
    
    componentDidMount() {
        axios.get(`http://localhost:3000/getUstadz`)
            .then(response => {
                console.log(response)
                this.setState({
                    ustadz: response.data
                })
            })
            .catch(error => {
                console.log(error)
                this.setState({
                    errorMsg: 'Error retreiving data'
                })
            })
    }

    render() {
        const renderData = this.state.ustadz.map(ustadz => {
            return (
                <TableUstadz ustadz={ustadz} key={ustadz.niyUstadz}/>
            )
        })
        return (
            <div>
                {renderData}
            </div>
        )
    }
}

export default ListUstadz;
