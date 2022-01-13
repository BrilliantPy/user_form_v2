import "./bootstrap.min.css"
import "./StoreData.css"
import Item from "./Item"

const StoreData = (props)=>{
	const {items} = props
	const onEditItem = (editItem)=>{
		props.onEditItem(editItem)
	}
	const onDeleteItem = (deleteItemId)=>{
		props.onDeleteItemId(deleteItemId)
	}
	return (
		<table className="table-striped table bp-margin-top">
			<thead>
				<tr>
					<th>Name</th>
					<th>Age</th>
					<th>NickName</th>
					<th>Action</th>
				</tr>
			</thead>
			<tbody>				
				{items.map(element=>{
					return <Item {...element} key={element.id} onEditItem={onEditItem} onDeleteItem={onDeleteItem}/>					
				})}			
			</tbody>
		</table>
	)
}

export default StoreData