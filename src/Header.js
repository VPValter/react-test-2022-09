const Header = () => {
  return (
    <header>
      <div className='container'>
        <span className='link home-link'>My Blog</span>
        <input type='search' placeholder="Search" />
        <nav>
          <ul>
            <li>
              <span className='link'>Link 1</span>
            </li>
            <li>
              <span className='link'>Link 2</span>
            </li>
            <li>
              <span className='link'>Link 3</span>
            </li>
            <li>
              <span className='link'>My profile</span>
            </li>
            <li>
              <span className='link'>Logout</span>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
