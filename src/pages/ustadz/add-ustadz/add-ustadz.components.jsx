import React from 'react';
import axios from 'axios';
import {format, parseISO} from 'date-fns'

import { Row , Form, Col, Button, Container } from 'react-bootstrap';
import Select from 'react-select'
import DatePicker from 'react-date-picker'


const optionsAgama = [
    {value: "Islam", label: "Islam"},
    {value: "Protestan", label: "Kristen Protestan"},
    {value: "Katholik", label: "Kristen Katholik"},
    {value: "Buddha", label: "Buddha"},
    {value: "Hindu", label: "Hindu"},
    {value: "Konghucu", label: "Konghucu"},
];

const optionsKewarganegaraan = [
    {value: "WNI", label: "Warga Negara Indonesia"},
    {value: "WNA", label: "Warga Negara Asing"}
];

const optionsJenisKelamin = [
    {value: "L", label: "Laki-Laki"},
    {value: "P", label: "Perempuan"}
];

const optionsPendidikan = [
    {value: "SD", label: "SD/MI"},
    {value: "SMP", label: "SMP/MTS"},
    {value: "SMA", label: "SMA/MA/SMK"},
    {value: "D1", label: "Diploma 1"},
    {value: "D2", label: "Diploma 2"},
    {value: "D3", label: "Diploma 3"},
    {value: "D4", label: "Diploma 4"},
    {value: "S1", label: "Sarjana"},
    {value: "S2", label: "Magister"},
    {value: "S3", label: "Doktor"},
];

const optionsStatusAktif = [
    {value: "A", label: "Aktif"},
    {value: "TA", label: "Tidak Aktif"}
];


class AddUstadz extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            niyUstadz : '',
            namaUstadz : '',
            nikUstadz : '',
            tempatLahirUstadz : '',
            tanggalLahirUstadz : '',
            agamaUstadz : '',
            kewarganegaraan : '',
            jenisKelamin : '',
            alamatUstadz : '',
            noHP : '',
            email : '',
            pendidikanUstadz : '',
            statusAktif : '',
            selectedOptAgama : null,
            selectedOptKwn: null,
            selectedOptJK : null,
            selectedOptPend : null,
            selectedOptStatus : null
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSelectAgama = selectedOptAgama => {
        this.setState({
            selectedOptAgama,
            agamaUstadz : selectedOptAgama.value
        })
    }

    handleSelectKwn = selectedOptKwn => {
        this.setState({
            selectedOptKwn,
            kewarganegaraan : selectedOptKwn.value
        })
    }

    handleSelectJK = selectedOptJK => {
        this.setState({
            selectedOptJK,
            jenisKelamin : selectedOptJK.value
        })
    }

    handleSelectPend = selectedOptPend => {
        this.setState({
            selectedOptPend,
            pendidikanUstadz : selectedOptPend.value
        })
    }

    handleSelectStatus = selectedOptStatus => {
        this.setState({
            selectedOptStatus,
            statusAktif : selectedOptStatus.value
        })
    }

    handleDate = date => {
        this.setState({
            tanggalLahirUstadz : date
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post(`http://localhost:3000/postUstadz`,
        {
            niyUstadz: this.state.niyUstadz,
            namaUstadz: this.state.namaUstadz,
            nikUstadz: this.state.nikUstadz,
            tempatLahirUstadz: this.state.tempatLahirUstadz,
            tanggalLahirUstadz: format(this.state.tanggalLahirUstadz, 'yyyy-MM-dd'),
            agamaUstadz: this.state.agamaUstadz,
            kewarganegaraan : this.state.kewarganegaraan,
            jenisKelamin: this.state.jenisKelamin,
            alamatUstadz: this.state.alamatUstadz,
            noHP: this.state.noHP,
            email: this.state.email,
            pendidikanUstadz: this.state.pendidikanUstadz,
            statusAktif: this.state.statusAktif
        })
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }
    

    render(){
        const {
            niyUstadz, namaUstadz, nikUstadz, tempatLahirUstadz, tanggalLahirUstadz, alamatUstadz, noHP, email, selectedOptAgama, selectedOptJK,
            selectedOptKwn, selectedOptPend, selectedOptStatus
        } = this.state
        return(
            <div>
                <Container>
                    <div>
                        <h2>Add Ustadz</h2>
                    </div>
                    <Row>
                        <Col sm='8'>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group controlId="niyUstadz">
                                    <Form.Label>NIY Ustadz</Form.Label>
                                    <Form.Control
                                    type="text"
                                    name="niyUstadz"
                                    value={niyUstadz}
                                    onChange={this.handleChange}
                                    placeholder="NIY Ustadz"
                                    />
                                </Form.Group>
                                <Form.Group controlId="namaUstadz">
                                    <Form.Label>Nama Ustadz</Form.Label>
                                    <Form.Control
                                    type="text"
                                    name="namaUstadz"
                                    value={namaUstadz}
                                    onChange={this.handleChange}
                                    placeholder="Nama Ustadz"
                                    />
                                </Form.Group>
                                <Form.Group controlId="nikUstadz">
                                    <Form.Label>NIK Ustadz</Form.Label>
                                    <Form.Control
                                    type="text"
                                    name="nikUstadz"
                                    value={nikUstadz}
                                    onChange={this.handleChange}
                                    placeholder="NIK Ustadz"
                                    />
                                </Form.Group>
                                <Form.Group controlId="tempatLahirUstadz">
                                    <Form.Label>Tempat Lahir Ustadz</Form.Label>
                                    <Form.Control
                                    type="text"
                                    name="tempatLahirUstadz"
                                    value={tempatLahirUstadz}
                                    onChange={this.handleChange}
                                    placeholder="Tempat Lahir Ustadz"
                                    />
                                </Form.Group>
                                <Form.Group controlId="tanggalLahirUstadz">
                                    <Form.Label>Tanggal Lahir Ustadz</Form.Label><br/>
                                    <DatePicker 
                                    value={tanggalLahirUstadz}
                                    onChange={this.handleDate}
                                    name="tanggalLahirUstadz"
                                    />
                                </Form.Group>
                                <Form.Group controlId="agamaUstadz">
                                    <Form.Label>Agama Ustadz</Form.Label>
                                    <Select
                                    value={selectedOptAgama}
                                    onChange={this.handleSelectAgama}
                                    options={optionsAgama}
                                    placeholder="Agama"
                                    />
                                </Form.Group>
                                <Form.Group controlId="kewarganegaraan">
                                    <Form.Label>Kewarganegaraan</Form.Label>
                                    <Select
                                    value={selectedOptKwn}
                                    onChange={this.handleSelectKwn}
                                    options={optionsKewarganegaraan}
                                    placeholder="Kewarganegaraan"
                                    />
                                </Form.Group>
                                <Form.Group controlId="jenisKelamin">
                                    <Form.Label>Jenis Kelamin</Form.Label>
                                    <Select
                                    value={selectedOptJK}
                                    onChange={this.handleSelectJK}
                                    options={optionsJenisKelamin}
                                    placeholder="Jenis Kelamin"
                                    />
                                </Form.Group>
                                <Form.Group controlId="alamatUstadz">
                                    <Form.Label>Alamat Ustadz</Form.Label>
                                    <Form.Control
                                    type="text"
                                    name="alamatUstadz"
                                    value={alamatUstadz}
                                    onChange={this.handleChange}
                                    placeholder="Alamat Ustadz"
                                    />
                                </Form.Group>
                                <Form.Group controlId="noHP">
                                    <Form.Label>Nomer Handphone</Form.Label>
                                    <Form.Control
                                    type="text"
                                    name="noHP"
                                    value={noHP}
                                    onChange={this.handleChange}
                                    placeholder="Nomer Handphone"
                                    />
                                </Form.Group>
                                <Form.Group controlId="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                    type="text"
                                    name="email"
                                    value={email}
                                    onChange={this.handleChange}
                                    placeholder="Email"
                                    />
                                </Form.Group>
                                <Form.Group controlId="pendidikanUstadz">
                                    <Form.Label>Pendidikan Ustadz</Form.Label>
                                    <Select
                                    value={selectedOptPend}
                                    onChange={this.handleSelectPend}
                                    options={optionsPendidikan}
                                    placeholder="Pendidikan Terakhir"
                                    />
                                </Form.Group>
                                <Form.Group controlId="statusAktif">
                                    <Form.Label>Status Aktif Ustadz</Form.Label>
                                    <Select
                                    value={selectedOptStatus}
                                    onChange={this.handleSelectStatus}
                                    options={optionsStatusAktif}
                                    placeholder="Status Aktif"
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Button variant='success' type='submit'>Tambah</Button>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default AddUstadz;