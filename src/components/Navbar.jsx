const Navbar = () => {
  return (
    <nav className='flex justify-between align-center border border-b-black p-4 font-mono'>
      <div className="flex flex-row">
        <a href="/" className="ml-10 mr-5">
          🏠 Home
        </a>
        <a href="/about">
          🙋‍♂️ About me
        </a>
      </div>
    </nav>
  );
}

export default Navbar;