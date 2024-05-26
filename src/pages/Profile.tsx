import { useParams } from "react-router-dom"

const Profile =()=>{
    const {username} = useParams()
    return(
        <div>
            <h1>This is Profile page of {username}</h1>
        </div>
    )
}

export default Profile