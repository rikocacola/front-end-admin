import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import {Table, Button} from 'react-bootstrap';
import {format, parseISO} from 'date-fns'


function TableUstadz({ ustadz, refresh }) {

    function deleteUstadz() {
        axios.delete(`http://localhost:3000/deleteUstadz/${ustadz.niyUstadz}` )
        return refresh()
    }
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
                        <tr key={ustadz.niyUstadz}>
                            <td>1</td>
                            <td>{ustadz.niyUstadz}</td>
                            <td>{ustadz.namaUstadz}</td>
                            <td>{ustadz.tempatLahirUstadz}</td>
                            <td>{format(parseISO(ustadz.tanggalLahirUstadz), 'dd/MM/yyyy')}</td>
                            <td>{ustadz.pendidikanUstadz}</td>
                            <td>
                                <Link to={'/ustadz/edit/' + ustadz.niyUstadz}>
                                    <Button><i className="fa fa-pencil-square-o" aria-hidden="true"></i></Button>
                                </Link>
                                <Button onClick={deleteUstadz}><i className="fa fa-trash" aria-hidden="true"></i></Button>
                            </td>
                        </tr>
                    </tbody>
            </Table>
        </div>
    )
}

export default TableUstadz;

// const { ustadz, errorMsg } = this.state

// <Table responsive>
//                     <thead>
//                         <tr>
//                             <th>No</th>
//                             <th>No. Induk</th>
//                             <th>Nama</th>
//                             <th>Tempat Lahir</th>
//                             <th>Tanggal Lahir</th>
//                             <th>Pendidikan Terakhir</th>
//                             <th>Aksi</th>
//                         </tr>
//                     </thead>
//                     {
//                         ustadz.length ?
//                             ustadz.map(ustad =>
//                                 <tbody>
//                                     <tr key={ustad.niyUstadz}>
//                                         <td>1</td>
//                                         <td>{ustad.niyUstadz}</td>
//                                         <td>{ustad.namaUstadz}</td>
//                                         <td>{ustad.tempatLahirUstadz}</td>
//                                         <td>{format(parseISO(ustad.tanggalLahirUstadz), 'dd/MM/yyyy')}</td>
//                                         <td>{ustad.pendidikanUstadz}</td>
//                                         <td>
//                                             <Link to={'/ustadz/edit/' + ustad.niyUstadz}>
//                                                 <Button><i className="fa fa-pencil-square-o" aria-hidden="true"></i></Button>
//                                             </Link>
//                                             {/* <Button onClick={deleteConfirm}><i className="fa fa-trash" aria-hidden="true"></i></Button> */}
//                                         </td>
//                                     </tr>
//                                 </tbody>
//                             ) : null}
//                     {
//                         errorMsg ?
//                             <div>{errorMsg}</div> : null
//                     }
//                 </Table>
