import { useState } from 'react'


function App() {
 const[message,setMessage] = useState("");

  return (
    <>
      <form action="/register" method="post">
        <label htmlFor="FirstName">First Name</label>
        <input type="text" placeholder='First Name'/>

        <label htmlFor="LastName">Last Name</label>
        <input type="text" placeholder='Last Name'/>

        <label htmlFor="PhoneNo">Phone No.</label>
        <input type="tel" placeholder='9090090090'/>

        <label htmlFor="Aadhar">Aadhar</label>
        <input type="text" placeholder='Aadhar No.' />

</form>
    </>
  )
}

export default App
