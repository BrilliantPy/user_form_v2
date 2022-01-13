import { useEffect, useState } from "react"
import "./bootstrap.min.css"
import "../App.css"
import "./Item.css"
import "./InsertData.css"
import { v4 as uuidv4 } from 'uuid';

const InsertData = (props)=>{
	const [showAddRowItem, setShowAddRowItem] = useState(false)

	const AddRowItem = () => {
		const [userName,setUserName] = useState("")
		const [age,setAge] = useState("")
		const [nickName,setNickName] = useState("")
		const [formInvalid,setFormInvalid] = useState(false)
	
		const defaultStateInput = ()=>{
			setUserName("")
			setAge("")
			setNickName("")
		}
	
		const inputName = (event)=>{
			setUserName(event.target.value)
		}
		const inputAge = (event)=>{
			setAge(event.target.value)
		}
		const inputNickName = (event)=>{
			setNickName(event.target.value)
		}
		const saveItem = (event)=>{
			event.preventDefault()
			const itemData = {
				id:uuidv4(),
				userName:userName,
				age:age,
				nickName:nickName
			}
			props.onAddItem(itemData)

			defaultStateInput()
		}
		const cancelAddItem = ()=>{
			defaultStateInput()
			setShowAddRowItem(false)
		}
		useEffect(()=>{
			const checkData =  ((userName.trim().length<=0 || userName == "" )|| 
			(age<=0 || age == "") || 
			(nickName.trim().length<=0 || nickName == ""))
			
			setFormInvalid(checkData)
		},[userName,age,nickName])
	
		return (
			<div className="bp-margin-bottom">
				<form onSubmit={saveItem}>
					<div className="form-control-add">
						<input type="text" placeholder="Enter your name..." onChange={inputName} value={userName} required ></input>
					</div>
		
					<div className="form-control-add">
						<input type="number" placeholder="Enter your age..." onChange={inputAge} value={age} required></input>
					</div>
		
					<div className="form-control-add">
						<input type="text" placeholder="Enter your nickname..." onChange={inputNickName} value={nickName} required></input>
					</div>
		
					<div className="form-control-add">
						<div className="btn-group">
							<button type="submit" className="btn btn-primary" disabled={formInvalid}>Save</button>
							<button onClick={cancelAddItem} className="btn btn-danger">Cancel</button>
						</div>
					</div>
				</form>	
			</div>
		)
	}

	const addItem = ()=>{
		setShowAddRowItem(true)
	}

	return (	
		<div className="bp-margin-top">
				{ showAddRowItem && <AddRowItem /> }
			<div className="add-container">
				<input className="btn-add btn btn-primary " type="submit" value="Add" onClick={addItem}/>
			</div>
		</div>	
	)
}

export default InsertData