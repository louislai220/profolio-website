import "./Profile.css";
import { AiFillTwitterCircle, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Profile = () => {
    return (
        <div className="section">
            <div className="bio">
                <p className="no-margin small-text"> Hello</p>
                <p className="no-margin name-text">
                    I'm <span className="highlight-text">{import.meta.env.VITE_PROFILE_NAME}</span>
                </p>
                <p className="no-margin small-text">software engineer
                </p>
                <div className="icons">
                    <a href={import.meta.env.VITE_GITHUB_URL}>
                        <AiFillGithub color="orange" size={30}/>
                    </a>
                    <a href={import.meta.env.VITE_LINKEDIN_URL}>
                        <AiFillLinkedin color="orange" size={30}/>
                    </a>
                </div>
            </div>
            <div className="photo">
                <img src={`images/${import.meta.env.VITE_PROFILE_PIC}`} className="profile-image" alt="m"/>
            </div>
        </div>

    );
};

export default Profile;
