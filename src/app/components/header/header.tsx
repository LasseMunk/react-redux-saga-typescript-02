import './header.css'
const Header = () => {

  const handleOnInputChange = (input: string) => {
    
  }

  return (
		<header className='header-container'>
			<div className='header-headline-container'>
				<h3>Products</h3>
			</div>
			<div className='header-searchbox-container'>
				<input
					className='header-search-box'
					onChange={(event) =>
						handleOnInputChange(event.target.value)
					}
					type='text'
					placeholder='Search For Items'
				></input>
			</div>
			<div className='header-cart-icon-container'>
				<span className='header-cart-text'>0</span>
				<img
          className='header-cart-icon'
					src='https://img.icons8.com/?size=512&id=QVQY51sDgy1I&format=png'
					alt='shopping cart'
				/>
			</div>
		</header>
  );
}
export default Header