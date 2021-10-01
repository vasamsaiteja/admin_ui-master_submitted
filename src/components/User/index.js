import React, { useState } from 'react'
import './index.css'

function User(props) {
	const { id, email, name, role } = props.userData
	const [selected, setSelected] = useState(props.selectAll)

	const deleteUser = () => {
		props.onDeleteUser(id)
	}

	return (
		<tr className={selected ? 'selected-row' : 'not-selected'}>
			<td>
				<input
					type='checkbox'
					value={id}
					onClick={(e) => {
						// console.log(e.target.value)
						setSelected(!selected)
					}}
				/>
			</td>
			<td>{name}</td>
			<td>{email}</td>
			<td>{role}</td>
			<td className='actions-container'>
				<i className='far fa-edit edit-icon'></i>
				<i className='far fa-trash-alt trash-icon' onClick={deleteUser}></i>
			</td>
		</tr>
	)
}

export default User
