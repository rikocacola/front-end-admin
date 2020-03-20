import React from 'react';
import {Link} from 'react-router-dom';

import {Button, Container} from 'react-bootstrap';

import ListUstadz from '../list-ustadz/list-ustadz.components'
// import AddUstadz from '../add-ustadz-page/add-ustadz-page.component';

class UstadzPage extends React.Component{
    render(){
        return(
            <div>
                <Container>
                    <div>

                        <h2>Data Ustadz</h2>
                        <div>
                            <Button>
                                <Link to='/ustadz/tambah'>
                                    Tambah Data
                                </Link>
                            </Button>
                        </div>
                    </div>
                    <div className='ustadz-page'>
                            <ListUstadz/>
                    </div>
                </Container>
            </div>
        )
    }
}
export default UstadzPage;