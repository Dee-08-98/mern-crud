import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUser, getUser } from '../ReduxToolkit/Slice';

function View(props) {

    const [state,setState]=useState([])

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUser())
    }, [])

    const { loading } = useSelector(state => state.app)


    const data = useSelector(state => state.app.crud)

    if (loading) {
        return <h2> Loading...</h2>
    }
    // useEffect(()=>{
    //   if(data){
    //     setState(data)
    //   }
    // },[data])
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-8 mt-4">
                        <h2 style={{ textAlign: "center", color: "maroon", fontWeight: 600 }}>Welcome in View Page</h2>

                        <table border={1} cellPadding={10} cellSpacing={0} className='w-100 mt-4'>
                            <tr style={{ backgroundColor: "blue", color: "white", fontWeight: 600, letterSpacing: "1px" }}>
                                <th> Name</th>
                                <th> City </th>
                                <th> Actions </th>
                            
                            </tr>
                            {
                                data && data.map((item) => {
                                    return (
                                        <>
                                            <tr key={item._id}>
                                                <td> {item.name} </td>
                                                <td> {item.city} </td>
                                                <td>
                                                    <Link to='/'><button className='btn btn-success mx-2'> Create </button></Link>
                                                    <Link to={`/update/${item._id}`}><button className='btn btn-warning mx-2'> Update </button></Link>
                                                    <button className='btn btn-danger mx-2' onClick={()=>dispatch(deleteUser(item._id))}> Delete </button>

                                                </td>

                                            </tr>
                                        </>
                                    )
                                })

                            }


                        </table>
                    </div>
                    <div className="col-lg-2"></div>
                </div>
            </div>
        </>
    );
}

export default View;