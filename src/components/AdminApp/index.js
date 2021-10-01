import React, { useState, useEffect } from 'react'
import UserSearch from '../UserSearch'
import UsersTable from '../UsersTable'
import './index.css'

function AdminApp() {
	const [userData, setUserData] = useState([])
	const [pages, setPages] = useState([])
	const [loading, setLoading] = useState(true)
	const [currentPage, setCurrentPage] = useState(1)

	const [usersPerPage] = useState(10)

	const fetchUsersData = async () => {
		setLoading(true)
		const usersList = await fetch(
			'https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json'
		)

		const response = await usersList.json()
		setUserData(response)
		setLoading(false)
	}

	useEffect(() => {
		fetchUsersData()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [UsersTable])

	const onSearch = async (search) => {
		// console.log(search)
		if (search !== '') {
			const filteredUsersList = userData.filter((item) => {
				if (item.name.includes(search)) {
					return item
				} else if (item.email.includes(search)) {
					return item
				} else if (item.role.includes(search)) {
					return item
				} else {
					return null
				}
			})
			setUserData(filteredUsersList)
		
		} else {
			fetchUsersData()
		}

		const pagesLength = await Math.ceil(userData.length / 10)
		
		const pagesList = []

		for (let i = 1; i < pagesLength + 1; i++) {
			pagesList.push(i)
		}

		// console.log('pagesList', pagesList)
		setPages(pagesList)
		
	}

	const indexOfLastUser = currentPage * usersPerPage
	const indexOfFirstUser = indexOfLastUser - usersPerPage
	const currentUsers = userData.slice(indexOfFirstUser, indexOfLastUser)
	 //console.log(indexOfLastUser)
	 //console.log(currentUsers)

	const paginate = (pageNumber) => setCurrentPage(pageNumber)

	const onDeleteUser = (id) => {
		const updatedUserData = userData.filter((each) => each.id !== id)
		setUserData(updatedUserData)
	}

	return (
		<div className='admin-wrapper'>
			<UserSearch onSearch={onSearch} />
			<UsersTable
				userData={currentUsers}
				pages={pages}
				loading={loading}
				usersPerPage={usersPerPage}
				totalUsers={userData.length}
				paginate={paginate}
				onDeleteUser={onDeleteUser}
			/>
		</div>
	)
}

export default AdminApp
