import React,{useState} from "react";

const Crud = () => {
    const [crud1 , setCrud1]=useState([
            {
                id : 0,
                name : "Ajit"
              },
              {
                id :1,
                name : "Ranjeet"
              },
              {
                id : 2,
                name : "Sneha"
              }
            
    ])

    const [AddData, setAddData] = useState(
        {
            name:' '
        }
    )
    const handleChange=(event) => {
            event.preventDefault();
            const name = event.target.getAttribute('name');
            const value =event.target.value;

            const newAddData ={...AddData};
            newAddData[name] = value;
    
     setAddData(newAddData);
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        const newCrud1={
        id: crud1.length,
        name : AddData.name,
    };
   const  newCrudd1=[...crud1,newCrud1];
   setCrud1(newCrudd1);
}
    const handleDelete=(ind)=>{
        
        let newArr=crud1;
        let newArr2=newArr.filter( Element=>( ind!==Element.id ))
        setCrud1(newArr2);

    };
   
    
    return(
        <div className="Crud">
             <form >
             <table>
    {crud1.map((Element , ind)=>(
       
     <tr key={Element.id}><td>{Element.name}</td>

    <td><button onClick={()=>handleEdit()}>Edit</button></td>
    <td><button onClick={()=>handleDelete(ind)}>Delete</button></td>
    </tr>))}
    </table>
    </form>
     
     <h4>Add Name</h4>
     <form onSubmit={handleSubmit}>
     <input type='text' name="name" required='required' placeholder="Enter a name" onChange={handleChange}/>

    <button type="submit">Add</button>  </form>
        </div>
    )
}
export default Crud;

