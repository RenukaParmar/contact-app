import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import AddContact from './components/AddContact'
import ContactList from './components/ContactList'
import { useState,useEffect } from 'react';
function App() {
  // const contactList=[
  //   {
  //     id:1,
  //     name:"renuka",
  //     email:"renu@gmail.com"
  //   },
  //   {
  //     id:2,
  //     name:"pankaj",
  //     email:"p@gmail.com"
  //   }
  // ]
  
  const local_storage_key="lists";
  const[lists,setLists]=useState([]);
  
  const addContact=(name,email)=>{
    const myList={
      name:name,
      email:email,
    }
    setLists([...lists,myList]);
  }
  useEffect(()=>{
   const retrieveList=JSON.parse(localStorage.getItem(local_storage_key));
   if(retrieveList){ 
     setLists(retrieveList)
   }
      },[]);

  useEffect(()=>{
localStorage.setItem(local_storage_key,JSON.stringify(lists))
  },[lists])
  return (
    <div >
    <Header/>
<AddContact addContact={addContact}/>
<ContactList contactList={lists} />
  </div>
  );
}

export default App;
