import { useSelector } from "react-redux";
import EditProfile from "./EditProfile";

const Profile = () => {
    const profileData = useSelector((store) => store.user)
    return (
        <>
            <EditProfile user={profileData}/>
        </>
    );
}

export default Profile;