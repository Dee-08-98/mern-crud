import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { updateUser } from '../ReduxToolkit/Slice';

function Edit(props) {

    const [getdata, setData] = useState()

    const navigate = useNavigate()
    const { id } = useParams()
    const dispatch = useDispatch()
    const result = useSelector(state => state.app)

    console.log(getdata);

    useEffect(() => {
        if (id) {
            const getresult = result.crud.filter((item) => item._id === id)
            setData(getresult[0])
        }
    }, [])

    const submitHandler = (e) => {
        setData({ ...getdata, [e.target.name]: e.target.value })
    }

    const submitForm = (e) => {
        e.preventDefault()
        dispatch(updateUser(getdata))
        navigate('/view')

    }
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4 mt-4">
                        <div className="a">
                            <h2 style={{ textAlign: "center", color: "maroon", fontWeight: 600 }}>Welcome in Edit Page</h2>
                            <form onSubmit={submitForm} className='mt-4'>
                                <div className='form-group mt-4'>
                                    <label> Edit Name </label>
                                    <input id='one' name='name' value={getdata && getdata.name} onChange={submitHandler} type='text' className='form-control' ></input>
                                </div>
                                <div className='form-group mt-3'>
                                    <label> Edit City </label>
                                    <input name='city' value={getdata && getdata.city} onChange={submitHandler} type='text' className='form-control' ></input>
                                </div>
                                

                                <button type='submit' className='btn btn-success mx-2 mt-3'> Save </button>
                                <Link to='/view' className='btn btn-primary mx-2 mt-3'> View </Link>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-4"></div>

                </div>
            </div>
        </>
    );
}

export default Edit;