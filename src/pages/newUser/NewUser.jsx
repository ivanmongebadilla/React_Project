import "./newUser.css";


export const NewUser = () => {
  return (
    <div className="newUser">
        <h1 className="newUserTitle">New User</h1>
        <form className="newUserForm">
            <div className="newUserItem">
                <label>Username</label>
                <input type="text" placeholder="john" />
            </div>
            <div className="newUserItem">
                <label>Full Name</label>
                <input type="text" placeholder="John Becker" />
            </div>
            <div className="newUserItem">
                <label>Email</label>
                <input type="email" placeholder="johnbecker@email.com" />
            </div>
            <div className="newUserItem">
                <label>Password</label>
                <input type="password" placeholder="password" />
            </div>
            <div className="newUserItem">
                <label>Phone</label>
                <input type="text" placeholder="+1 123 456 7890" />
            </div>
            <div className="newUserItem">
                <label>Location</label>
                <input type="text" placeholder="Phoenix Az" />
            </div>
            <button className="newUserButton">Create</button>
        </form>
    </div>
  )
}


