import React from 'react'
import './index.css'

function Pagination({ usersPerPage, totalUsers, paginate }) {
	// eslint-disable-next-line no-unused-vars
	const pageNumbers = []

	for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
		pageNumbers.push(i)
	}
	// console.log(pageNumbers)

	return (
		<div className='pagination-container'>
			<button className='delete-selected'>Delete Selected</button>

			<div className='pagination-items'>
				<div className='panel'>
					<i className='fas fa-fast-backward'></i>
					<i className='fas fa-step-backward'></i>
				</div>

				<ul className='pagination'>
					{pageNumbers.map((number) => (
						<li key={number} className='page-item'>
							<a
								onClick={() => paginate(number)}
								href='!#'
								className='page-link'>
								{number}
							</a>
						</li>
					))}
				</ul>
				<div className='panel'>
					<i className='fas fa-fast-forward'></i>
					<i className='fas fa-step-forward'></i>
				</div>
			</div>
		</div>
	)
}

export default Pagination
