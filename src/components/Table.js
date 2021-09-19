import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Table = (props) => {

    const [details, setDetails] = useState('')

    const apiKey = 'ac4c9b0e-ecbc-43c3-a785-a6480df2092f';

    const getData = async () => {
        let response = await axios.get(`https://api.kelvindata.com/rest/v1/search-v2?phone=${props.phoneNumber}&apiKey=${apiKey}`, {
 
        })

        console.log(response.data)

        setDetails(response.data)
    }
    
    
    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">No.</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone No.</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>F</td>
                        <td>marktyler@gmail.com</td>
                        <td>0783939221</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>F</td>
                        <td>marktyler234@yahoo.com</td>
                        <td>0783939221</td>
                    </tr>

                </tbody>
            </table>
     
        </div>
    )
}

export default Table
