import React from 'react';
import axios from 'axios';
import {format, parseISO} from 'date-fns';

import {Button, Table} from 'react-bootstrap';

class ListUstadz extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            ustadz : [],
            errorMsg : ''
        }
    }

    componentDidMount(){
        axios.get(`http://localhost:3000/getUstadz`)
        .then(response => {
            console.log(response)
            this.setState({
                ustadz : response.data
            })
        })
        .catch(error => {
            console.log(error)
            this.setState({
                errorMsg : 'Error retreiving data'
            })
        })
    }

    render() {
        const {ustadz, errorMsg} = this.state
        return(
            <div>
                {
                ustadz.length ?
                ustadz.map(ustad => 
                        <Table responsive>
                            <thead>
                                <tr>
                                <th>No</th>
                                <th>No. Induk</th>
                                <th>Nama</th>
                                <th>Tempat Lahir</th>
                                <th>Tanggal Lahir</th>
                                <th>Pendidikan Terakhir</th>
                                <th>Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr key={ustad.niyUstadz}>
                                <td>1</td>
                                <td>{ustad.niyUstadz}</td>
                                <td>{ustad.namaUstadz}</td>
                                <td>{ustad.tempatLahirUstadz}</td>
                                <td>{format(parseISO(ustad.tanggalLahirUstadz),'dd/MM/yyyy')}</td>
                                <td>{ustad.pendidikanUstadz}</td>
                                <td><Button><span className='glyphicon glyphicon-trash' aria-hidden='true'></span></Button></td>
                                </tr>
                            </tbody>
                        </Table>
                ) : null }
                {
                    errorMsg ? 
                    <div>{errorMsg}</div> : null
                }
            </div>
        )
    }
}

export default ListUstadz;
