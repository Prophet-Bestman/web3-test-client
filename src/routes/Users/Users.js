import axios from 'axios'
import React, {useState, useEffect} from 'react'
import './Users.css'

const Users = () => {
    const [users, setUsers] = useState(null)
    const [loading, setLoading ] = useState(false)
    const [error, setError] = useState(false)
    useEffect(() => {
            setLoading(true)
            setError(false)
            try {
                axios.get('https://my-json-server.typicode.com/Prophet-Bestman/Web3-test-server/users')
            .   then((res) => {
                    const data = res.data
                    console.log(data)
                    return data
                }).then(data =>  {
                    setUsers(data.reverse())
                    setError(false)
                    setLoading(false)
                    console.log(data.reverse())               

                })
            } catch (error) {
                setError(true)
                setLoading(false)
                console.log(error)
            }
            
    },[])
    return (
        <div>
            <h1 className="users-title">
                Users
            </h1>

            {loading && <h5 className="text-center">Loading...</h5>}
            {error && <h5 className="text-danger text-center" >Couldn't Load Users</h5>}

            <div className='users'>
                {users && users.map((user) => (
                <div className='user sec' key={user.id}>
                    <div><span>{user.firstName}</span> <span>{user.lastName}</span></div>
                    <h4>{user.email}</h4>
                </div>))}
            </div>
        </div>
    )
}

export default Users
