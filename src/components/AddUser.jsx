import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useNavigate,Link } from 'react-router-dom'

const AddUser = () => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [gender,setGender] = useState('Male')
    const navigate = useNavigate()


    const saveUser = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3001/users',{
            name,
            email,
            gender  
            })
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }
 

    return (
        <div className='columns mt-5 is-centered'>
            <div className="column is-half">
                <form onSubmit={saveUser} className='box'>
                    <div className='columns is-centered mt-3'>
                    <h1 className='title '>ADD DATA</h1>
                    </div>
                    <div className="field ">
                        <label className='label'>Name</label>
                        <div className="control">
                            <input 
                            type="text" 
                            className='input' 
                            placeholder='Name' 
                            value={name}
                            onChange={(e)=> setName(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className='label'>Email</label>
                        <div className="control">
                            <input 
                            type="text" 
                            className='input' 
                            placeholder='Example@gmail.com' 
                            value={email} 
                            onChange={(e)=> setEmail(e.target.value)}/>
                        </div>
                    </div>
                    <div className="field">
                        <label className='label'>Gender</label>
                        <div className="control">
                            <div className="select is-fullwidth is-centered is-justify-content-center ">
                                <select 
                                value={gender}
                                onChange={(e)=> setGender(e.target.value)}>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="🤷‍♂️">💀Sory No More Bro</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="columns is-centered">
                        <button type='submit' className='button is-success  mt-6 mb-5 mr-3'>Submit</button>
                        <Link to={'/'} className='button is-danger mt-6 mb-5 '>Cancel</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddUser
