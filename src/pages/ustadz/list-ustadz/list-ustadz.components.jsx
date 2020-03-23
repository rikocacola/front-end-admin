import React from 'react';
import axios from 'axios';

import { format, parseISO } from 'date-fns';
import { Link } from 'react-router-dom';

import { Button, Table, Modal } from 'react-bootstrap';

class ListUstadz extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ustadz: [],
            errorMsg: '',
            showModal: false
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

    deleteUstadz(niyUstadz) {
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
                        response: result,
                        ustadz: ustadz.filter(ustad => ustad.niyUstadz !== niyUstadz),
                        showModal:false
                    });
                },
                (error) => {
                    this.setState({
                        error
                    });
                }
            )
    }

    openModal = () => {
        this.setState({
            showModal: true
        })
    }

    closeModal = () => {
        this.setState({
            showModal: false
        })
    }

    render() {
        const { error, ustadz } = this.state;

        if (error) {
            return (
                <div>
                    Error : {error.message}
                </div>
            )
        } else {
            return (
                <div>
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
                            {ustadz.map(ustad => (
                                <tr key={ustad.niyUstadz}>
                                    <td>1</td>
                                    <td>{ustad.niyUstadz}</td>
                                    <td>{ustad.namaUstadz}</td>
                                    <td>{ustad.tempatLahirUstadz}</td>
                                    <td>{format(parseISO(ustad.tanggalLahirUstadz), 'dd/MM/yyyy')}</td>
                                    <td>{ustad.pendidikanUstadz}</td>
                                    <td>
                                        <Button variant='info'>
                                            <Link to={`/ustadz/edit/${ustad.niyUstadz}`}>
                                                <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                            </Link>
                                        </Button>
                                        <Button variant='danger' onClick={this.openModal}>
                                            <i className="fa fa-trash" aria-hidden="true"></i>
                                        </Button>
                                        <Modal show={this.state.showModal} onHide={this.closeModal}>
                                            <Modal.Header closeButton>
                                                <Modal.Title>Menghapus Data Ustadz</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                Apakah anda Yakin?
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button onClick={() => this.deleteUstadz(ustad.niyUstadz)}>Iya</Button>
                                                <Button onClick={this.closeModal}>Tidak</Button>
                                            </Modal.Footer>
                                        </Modal>
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