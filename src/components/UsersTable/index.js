import React, { useState } from 'react'
import './index.css'
import User from '../User'
import Pagination from '../pagination'

function UsersTable(props) {
	const [selectAll, setSelectAll] = useState(false)
	// console.log(props.totalUsers)
	return (
		<>
			{props.loading ? (
				<h1>Loading....</h1>
			) : props.userData.length > 0 ? (
				<div className='user-table-container'>
					<table>
						<tr>
							<th>
								<input
									type='checkbox'
									onClick={() => setSelectAll(!selectAll)}
								/>
							</th>
							<th>Name</th>
							<th>Email</th>
							<th>Role</th>
							<th>Actions</th>
						</tr>
						{props.userData.map((eachUser) => (
							<User
								key={eachUser.id}
								userData={eachUser}
								selectAll={selectAll}
								onDeleteUser={props.onDeleteUser}
								setUsersToDeleteList={props.setUsersToDeleteList}
							/>
						))}
					</table>
					<Pagination
						pages={props.pages}
						usersPerPage={props.usersPerPage}
						totalUsers={props.totalUsers}
						paginate={props.paginate}
						onDeleteSelectedUsers={props.onDeleteSelectedUsers}
						setUsersToDeleteList={props.setUsersToDeleteList}
					/>
				</div>
			) : (
				<h1>No Data to Display</h1>
			)}
		</>
	)
}

export default UsersTable
