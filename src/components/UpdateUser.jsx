import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams,Link } from 'react-router-dom'

const UpdateUser = () => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [gender,setGender] = useState('Male')
    const navigate = useNavigate()
    const {id} = useParams()

    useEffect(() => {
        getDataById()
    }, [])


    const updateUser = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:3001/users/${id}`,{
            name,
            email,
            gender  
            })
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

    const getDataById = async () => {
        const response = await axios.get(`http://localhost:3001/users/${id}`); 
        setName(response.data.name);
        setEmail(response.data.email);
        setGender(response.data.gender);
    }

    return (
        <div className='columns mt-5 is-centered'>
            <div className="column is-half">
                <form onSubmit={updateUser} className='box'>
                    <div className='columns is-centered mt-3'>
                    <h1 className='title '>UPDATE DATA</h1>
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
                                    <option value="">💀Sory No More Bro</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="columns is-centered">
                        <button type='submit' className='button is-success  mt-6 mb-5 mr-3'>Update</button>
                        <Link to='/' className='button is-danger mt-6 mb-5 '>Cancel</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UpdateUser
