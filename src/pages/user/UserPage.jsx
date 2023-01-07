import { LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from "@mui/icons-material";
import "./userPage.css";
import { Link } from "react-router-dom";

export const UserPage = () => {
  return (
    <div className="userPage">
        <div className="userTitleContainer">
            <h1 className="userPageTitle">Edit User</h1>
            <Link to="/newUser">
                <button className="userPageAdd">Create</button>
            </Link>
        </div>
        <div className="userPageContainer">
            <div className="userShow">
                <div className="userShowTop">
                    <img 
                        src="https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-260nw-1714666150.jpg" 
                        alt=""
                        className="userShowImg" />
                    <div className="userShowTopTitle">
                        <span className="userShowUsername">Anna Becker</span>
                        <span className="userShowUserTitle">Software Engineer</span>
                    </div>
                </div>
                <div className="userShowButton">
                    <span className="userShowTitle">Account Details</span>
                    <div className="userShowInfo">
                        <PermIdentity className="userShowIcon" />
                        <span className="userShowInfoTitle">annabeck99</span>
                    </div>
                    <span className="userShowTitle">Contact Details</span>
                    <div className="userShowInfo">
                        <PhoneAndroid className="userShowIcon" />
                        <span className="userShowInfoTitle">+1 123 456 7891</span>
                    </div>
                    <div className="userShowInfo">
                        <MailOutline className="userShowIcon" />
                        <span className="userShowInfoTitle">annabeck@email.com</span>
                    </div>
                    <div className="userShowInfo">
                        <LocationSearching className="userShowIcon" />
                        <span className="userShowInfoTitle">Casa Grande Az</span>
                    </div>
                </div>
            </div>
            <div className="userUpdate">
                <span className="userUpdateTitle">Edit</span>
                <form className="userUpdateForm">
                    <div className="userUpdateLeft">
                        <div className="userUpdateItem">
                            <label>Username</label>
                            <input 
                            type="text" 
                            placeholder="annabeck99" 
                            className="userUpdateInput" 
                            />
                        </div>
                        <div className="userUpdateItem">
                            <label>Full Name</label>
                            <input 
                            type="text" 
                            placeholder="Anna Becker" 
                            className="userUpdateInput" 
                            />
                        </div>
                        <div className="userUpdateItem">
                            <label>Phone</label>
                            <input 
                            type="text" 
                            placeholder="+1 123 456 7891" 
                            className="userUpdateInput" 
                            />
                        </div>
                        <div className="userUpdateItem">
                            <label>Email</label>
                            <input 
                            type="text" 
                            placeholder="annabeck@email.com" 
                            className="userUpdateInput" 
                            />
                        </div>
                        <div className="userUpdateItem">
                            <label>Address</label>
                            <input 
                            type="text" 
                            placeholder="Casa Grande Az" 
                            className="userUpdateInput" 
                            />
                        </div>
                    </div>
                    <div className="userUpdateRight">
                        <div className="userUpdatetoUpload">
                           <img
                           className="userUpdateImg"
                           src="https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-260nw-1714666150.jpg"
                           alt=""
                           />
                           <label htmlFor="file"><Publish className="userUpdateIcon" /></label>
                           <input type="file" id="file" style={{display: "none"}} /> 
                        </div>
                        <button className="userUpdateButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
