import React, { useState } from 'react';
import './Create.css'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createUser } from '../ReduxToolkit/Slice';
function Create(props) {
    const [log, setLog] = useState({
        name: '',
        city : ""
    })

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const submitHandler = (e) => {
        setLog({ ...log , [e.target.name]: e.target.value })
    }

    const submitForm = (e) => {
        e.preventDefault()
        dispatch(createUser(log))
        setLog({
            name: '',
            city : ""
        })
        navigate('/view')
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4 mt-4 ">
                        <div className="a ">
                            <h2 style={{ textAlign: "center", color: "maroon", fontWeight: 600 }}>Welcome in Create Page</h2>

                            <form onSubmit={submitForm} className='mt-4'>
                                <div className='form-group'>
                                    <label> Enter Name </label>
                                    <input id='one' name='name' value={log.name} onChange={submitHandler} type='text' className='form-control' ></input>
                                </div>
                                <div className='form-group mt-3'>
                                    <label> Enter City </label>
                                    <input name='city' value={log.city} onChange={submitHandler} type='text' className='form-control' ></input>
                                </div>
                                
                                <button type='submit' className='btn btn-success mx-2 mt-3'> Create </button>
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

export default Create;