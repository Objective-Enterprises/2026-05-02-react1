import "./Header.css"

function Header({ onNavigate }) {
  const isAuthenticated = false;

   // Dummy authentication variable. Will be eventually replaced with actual authentication logic.
   // Todo: define respective functions

  const buttons = isAuthenticated
    ? <button>Logout</button>
    : <><button>Register</button><button>Login</button></>

  return (
    <header className="header">
      <h1 className="title">Threadhive</h1>
      <div className="header-right">
        {buttons}
      </div>
    </header>
  );
}

export default Header;