import React, { useState } from 'react'
import './index.css'

function UserSearch(props) {
	const [search, setSearch] = useState('')
	const onSubmitSearch = (e) => {
		e.preventDefault()
		props.onSearch(search)
	}
	return (
		<form className='user-search-form-container' onSubmit={onSubmitSearch}>
			<input
				type='search'
				id='userSearch'
				placeholder='Search by name, email or role'
				onChange={(e) => setSearch(e.target.value)}
				className='user-search'
			/>
			<div className='search-icon' onClick={onSubmitSearch}>
				<i className='fas fa-search'></i>
			</div>
		</form>
	)
}

export default UserSearch
