import React from 'react';
import {format, parseISO} from 'date-fns';
import {Link} from 'react-router-dom';

import { Button, Table } from 'react-bootstrap';

class ListUstadz extends React.Component{

    constructor(){
        super();
        
        this.state = {
            ustadz : [],
            response : {},
            error : null
        }
    }
    componentDidMount(){
        fetch("http://localhost:3000/getUstadz")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    ustadz:result
                });
            },
            (error) => {
                this.setState({
                    error
                });
            }
        )
    }

    deleteUstadz(niyUstadz){
        const { ustadz } = this.state;

        const apiUrl = "http://localhost:3000/deleteUstadz/";
        const formData = new FormData();
        formData.append('niyUstadz', niyUstadz);

        const options = {
            method: 'DELETE',
            body: formData
        }

        fetch((apiUrl + niyUstadz), options)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    response : result,
                    ustadz : ustadz.filter(ustad => ustad.niyUstadz !== niyUstadz)
                });
            },
            (error) => {
                this.setState({
                    error
                });
            }
            )
    }

    render(){
        const { error, ustadz} = this.state;

        if (error) {
            return(
                <div>
                    Error : {error.message}
                </div>
            )
        } else {
            return(
            <div>
                <Table responsive>
                    <thead>
                        <tr>
                        <th>#ID</th>
                        <th>Nama</th>
                        <th>No. Induk Yayasan</th>
                        <th>Alamat</th>
                        <th>No. HP</th>
                        <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ustadz.map(ustad => (
                        <tr key={ustad.niyUstadz}>
                        <td>{ustad.tempatLahir}</td>
                        <td>{ustad.namaUstadz}</td>
                        <td>{ustad.nikUstadz}</td>
                        <td>{ustad.pendidikanUstadz}</td>
                        <td>{format(parseISO(ustad.tanggalLahirUstadz), 'dd/MM/yyyy')}</td>
                        <td>
                            <Button variant='info'>
                                <Link to={`/ustadz/edit/${ustad.niyUstadz}`}>Edit</Link>
                            </Button>
                            <Button variant='danger' onClick={() => this.deleteUstadz(ustad.niyUstadz)}>
                                Delete
                            </Button>
                        </td>
                        </tr>   
                        ))}
                    </tbody>
                </Table>
            </div>
            )
        }
    }
}

export default ListUstadz;