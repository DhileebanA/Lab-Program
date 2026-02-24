import { useState } from 'react';
import './Registration.css';
export default function Registration() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [submittedData, setSubmittedData] = useState();

    function handleForm() {
        if (!name.trim()) {
            alert("fill the name")
            return
        }
        if (!email.trim()) {
            alert("fill the email")
            return
        }
        if (!password.trim()) {
            alert("fill the password")
            return
        }
        setSubmittedData({ name, email, password })
        setName("")
        setEmail("")
        setPassword("")
    }

    return (
        <div className='bg-white px-6 py-12'>
            <h1>Registration form</h1>
            <div className='flex flex-col'>
                <label className='text-left'> name</label>
                <input type="text" placeholder="enter your name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className='flex flex-col'>
                <label className='text-left'> email</label>
                <input type="text" placeholder="enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className='flex flex-col'>
                <label className='text-left'> password</label>
                <input type="text" placeholder="enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button className='w-full text-white' onClick={handleForm}>submit</button>
            {submittedData && <div className='text-left border-l-6 border-green-600 rounded-2xl my-3 px-5 py-2 bg-green-200'>
                <h3>Submitted Data</h3>
                <p>Name: {submittedData.name}</p>
                <p>Email: {submittedData.email}</p>
                <p>Password: {submittedData.password}</p>
            </div>}
        </div>
    )

}