import InsertData from "./components/InsertData"
import StoreData from "./components/StoreData"
import { useEffect, useState } from 'react';
import data from "./datas/data.json"
import "./components/bootstrap.min.css"
import './App.css';

function App() {
  const [items,setItems] = useState(data)
  const [reportCount,setReportCount] = useState(0)
  const onAddNewItem = (newItem)=>{
    setItems((prevItem)=>{
      return [...prevItem,newItem]
    })
  }
  const onEditItem = (editItem)=>{
    const curItem = items.map(element=>element)
    const indexEditItem = curItem.findIndex(element=>element.id==editItem.id)
    curItem.splice(indexEditItem,1,editItem)
    setItems(curItem)
  }
  const onDeleteItemId = (deleteItemId)=>{
    const curItem = items.map(element=>element)
    const indexDeleteItem = curItem.findIndex(element=>element.id==deleteItemId)
    curItem.splice(indexDeleteItem,1)
    setItems(curItem)
  }
  useEffect(()=>{
    setReportCount(items.length)
  },[items,reportCount])

  return (
    <div className='container bp-margin-top'>
      <div className='header-name'>        
        <h1><span>User record data</span>
        <button type="button" className="btn btn-primary position-relative">
        <i className="fa fa-user fa-fw"></i><span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{reportCount}</span></button></h1>
      </div>
      
      <StoreData items={items} onDeleteItemId={onDeleteItemId} onEditItem={onEditItem}/>
      <InsertData onAddItem={onAddNewItem}/>
    </div>
  );
}

export default App;
