import React from 'react'
import User from '../User'

function Table(props) {
	return (
		<table>
			<tr>
				<th>check</th>
				<th>Name</th>
				<th>Email</th>
				<th>Role</th>
				<th>Actions</th>
			</tr>
			{props.userData.map((eachUser) => (
				<User key={eachUser.id} userData={eachUser} />
			))}
		</table>
	)
}

export default Table
