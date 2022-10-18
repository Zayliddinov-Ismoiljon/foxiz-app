import React from 'react';

import './Header.css';

export default function Header() {
	return (
		<header className='header'>
			<nav className='navbar navbar-expand-lg'>
				<div className='container'>
					<img
						className='logo'
						src='https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/12/logo.svg'
						alt='logo'
					/>
					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarScroll'
						aria-controls='navbarScroll'
						aria-expanded='false'
						aria-label='Toggle navigation'>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div className='collapse navbar-collapse' id='navbarScroll'>
						<ul className='navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll'>
							<li className='nav-item'>
								<a
									className='nav-link active dropdown-toggle'
									aria-current='page'
									href='#'>
									Home
								</a>
							</li>
							<li className='nav-item'>
								<a className='nav-link dropdown-toggle' href='#'>
									Politics
								</a>
							</li>
							<li className='nav-item'>
								<a className='nav-link dropdown-toggle' href='#'>
									Technology
								</a>
							</li>
							<li className='nav-item dropdown'>
								<a
									className='nav-link dropdown-toggle'
									href='#'
									role='button'
									data-bs-toggle='dropdown'
									aria-expanded='false'>
									Posts
								</a>
								<ul className='dropdown-menu'>
									<li>
										<a className='dropdown-item' href='#'>
											Action
										</a>
									</li>
									<li>
										<a className='dropdown-item' href='#'>
											Another action
										</a>
									</li>
									<li>
										<hr className='dropdown-divider' />
									</li>
									<li>
										<a className='dropdown-item' href='#'>
											Something else here
										</a>
									</li>
								</ul>
							</li>
							<li className='nav-item'>
								<a className='nav-link dropdown-toggle'>Bookmarks</a>
							</li>
							<li className='nav-item'>
								<a className='nav-link dropdown-toggle'>Pages</a>
							</li>
						</ul>
						<form className='d-flex' role='search'>
							{/* <input
									className='form-control me-2'
									type='search'
									placeholder='Search'
									aria-label='Search'
								/> */}
							<button className='btn btn-danger sign__btn' type='button'>
								Sign In
							</button>
							<button className='btn'>
								<img
									className='notification__icon'
									src='https://cdn-icons-png.flaticon.com/512/3602/3602145.png'
									alt='notification icon'
								/>
							</button>
							<button className='btn' type='submit'>
								<img
									className='search__icon'
									src='https://cdn-icons-png.flaticon.com/512/54/54481.png'
									alt='search icon'
								/>
							</button>
						</form>
					</div>
				</div>
			</nav>

			<div className='container'>
				<div className='header__inner bg-light py-3'>
					<div className="header__innerinfo">
					<span className='header__innerspan'>Hot News</span>
					<div
						id='carouselExampleCaptions'
						class='carousel slide'
						data-bs-ride='false'>
						<div class='carousel-indicators'>
							<button
								type='button'
								data-bs-target='#carouselExampleCaptions'
								data-bs-slide-to='0'
								class='active'
								aria-current='true'
								aria-label='Slide 1'></button>
							<button
								type='button'
								data-bs-target='#carouselExampleCaptions'
								data-bs-slide-to='1'
								aria-label='Slide 2'></button>
							<button
								type='button'
								data-bs-target='#carouselExampleCaptions'
								data-bs-slide-to='2'
								aria-label='Slide 3'></button>
						</div>
						<div class='carousel-inner'>
							<div class='carousel-item active'>
								<h5>First slide label</h5>
							</div>
							<div class='carousel-item'>
								<h5>Second slide label</h5>
							</div>
							<div class='carousel-item'>
								<h5>Third slide label</h5>
							</div>
						</div>
						<button
							class='carousel-control-prev'
							type='button'
							data-bs-target='#carouselExampleCaptions'
							data-bs-slide='prev'>
							<span
								class='carousel-control-prev-icon'
								aria-hidden='true'></span>
							<span class='visually-hidden'>Previous</span>
						</button>
						<button
							class='carousel-control-next'
							type='button'
							data-bs-target='#carouselExampleCaptions'
							data-bs-slide='next'>
							<span
								class='carousel-control-next-icon'
								aria-hidden='true'></span>
							<span class='visually-hidden'>Next</span>
						</button>
					</div>
					</div>
					<ul class='list-group list-group-horizontal d-flex justify-content-space-betwen'>
						<li class='list-group-item disabled header__inneritem'>
							Quick links
						</li>
						<li class='list-group-item header__inneritem'>Technologys</li>
						<li class='list-group-item header__inneritem'>Business</li>
						<li class='list-group-item header__inneritem'>Science</li>
						<li class='list-group-item header__inneritem'>
							Covid 19 Statistics
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
}
