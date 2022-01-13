import { useEffect, useState } from "react"
import "./Item.css"

const Item = (element)=>{
	const {userName,age,nickName,id} = element
	const [mode, setMode] = useState("view")
	const [isReadOnly,setIsReadOnly] = useState(true)
	const [formInvalid,setFormInvalid] = useState(false)
	
	const [editUserName,setEditUserName] = useState(userName)
	const [editAge,setEditAge] = useState(age)
	const [editNickName,setEditNickName] = useState(nickName)

	const valueUserName = mode=="view" ? userName:editUserName
	const valueAge = mode=="view" ? age:editAge
	const valueNickName = mode=="view" ? nickName:editNickName

	const editInputUserName = (event)=>{
		setEditUserName(event.target.value)
	}
	const editInputAge = (event)=>{
		setEditAge(event.target.value)
	}
	const editInputNickName = (event)=>{
		setEditNickName(event.target.value)
	}

	const editItem = (event)=>{
		if(mode=="view"){
			setMode("edit")
			setIsReadOnly(false)
		} else {
			event.preventDefault()
			if (editUserName != "" && editAge != "" && editNickName != ""){
				const editItemData = {
					id:id,
					userName:editUserName,
					age:editAge,
					nickName:editNickName
				}
				element.onEditItem(editItemData)
				setMode("view")
				setIsReadOnly(true)
			}
		}
	}
	const deleteItem = ()=>{
		element.onDeleteItem(id)
	}
	useEffect(()=>{
		const checkData = ((mode == "edit") && 
		((editUserName.trim().length<=0 || editUserName == "" )|| 
		(editAge<=0 || editAge == "") || 
		(editNickName.trim().length<=0 || editNickName == "")))
		
		setFormInvalid(checkData)
	},[editUserName,editAge,editNickName])

	return (
		<tr>
			<td>
				<input className={mode} type="text" value={valueUserName} readOnly={isReadOnly} onChange={editInputUserName} required placeholder="Enter your name..."></input></td>
			<td>
				<input className={mode} type="number" value={valueAge} readOnly={isReadOnly} onChange={editInputAge} required placeholder="Enter your age..."></input></td>
			<td>
				<input className={mode} type="text" value={valueNickName} readOnly={isReadOnly} onChange={editInputNickName} required placeholder="Enter your nickname..."></input></td>
			<td>
				<div className="btn-group">
					<button className="btn btn-primary" onClick={editItem} disabled={formInvalid}>Edit</button>
					<button className="btn btn-danger" onClick={deleteItem}>Delete</button>
				</div>
			</td>
		</tr>
	)
}

export default Item