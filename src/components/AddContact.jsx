import React,{ useState } from 'react'
import { Button,Container,Form } from 'react-bootstrap';

const AddContact = (props) => {
const [name,setName]=useState("");
const [email,setEmail]=useState("");

const handleSubmit=(e)=>{
e.preventDefault();
console.log("handleClicked")
console.log(name,email)
if(name==="" || email===""){
    alert("plz fill the credentials!")
    return;
}
else {

    props.addContact(name,email);
    setName('');
    setEmail('');
}
}

  return (
    <div>
        <Container>
            <h3> Add Contact</h3>
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 " >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name here"
        value={name} onChange={(e)=>{setName(e.target.value)}}/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" 
        value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
      </Form.Group>
      <Button type="submit">Add</Button>
            
        </Form>
        </Container>
    </div>
  )
}

export default AddContact
