import "./EditProfile.css";

import { uploads } from '../../Utils/Config';

// hooks
import { useEffect, useState } from "react";
import { useSelector, useDispatch} from 'react-redux'

// redux
import { profile, resetMessage, updateProfile } from "../../Slices/userSlice";

// Components
import Message from "../../Components/Message/Message";

const EditProfile = () => {
    const dispatch = useDispatch();

    const { user, message, error, loading } = useSelector((state) => state.user);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [profileImage, setProfileImage] = useState("");
    const [bio, setBio] = useState("");
    const [previewImage, setPreviewImage] = useState("");

    // loading user data
    useEffect(() => {
        dispatch(profile());
    }, [dispatch]);

    // fill form with user data
    useEffect(() => {
        if(user) {
            setName(user.name);
            setEmail(user.email);
            setBio(user.bio);
        }
    }, [user])

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Gether user data from states
        const userData = {
            name: name,
        }

        if(profileImage) {
            userData.profileImage = profileImage;
        }

        if(bio) {
            userData.bio = bio;
        }

        if(password) {
            userData.password = password;
        }

        // build formdata
        const formData = new FormData();

        const userFormData = Object.keys(userData).forEach((key) =>
            formData.append(key, userData[key])
        );
        
        formData.append("user", userFormData);

        await dispatch(updateProfile(formData));

        setTimeout(() => {
            dispatch(resetMessage());
        }, 2000);
    }

    const handleFile = (e) => {
        // Image preview
        const image = e.target.files[0];

        setPreviewImage(image);
        
        // update image state
        setProfileImage(image);
    }

    
  return (
    <div id='edit_profile'>
        <h2>Edite seus dados</h2>
        <p className='subtitle'>Adicione uma imagem de perfil e conte mais sobre você...</p>
        {(user.profileImage || previewImage) && (
            <img className="profile_image" src={
                previewImage ? URL.createObjectURL(previewImage) : `${uploads}/users/${user.profileImage}`
            } alt={user.name} />
        )}
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Nome' value={name || ""} onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder='E-mail' value={email || ""} disabled/>
            <label>
                <span>Imagem do perfil:</span>
                <input type="file" onChange={handleFile}/>
            </label>
            <label>
                <span>Bio:</span>
                <input type="text" placeholder='Descrição do perfil' value={bio || ""} onChange={(e) => setBio(e.target.value)} />
            </label>
            <label>
                <span>Quer alterar sua senha ?</span>
                <input type="password" placeholder='Digite sua nova senha' value={password || ""} onChange={(e) => setPassword(e.target.value)} autocomplete="off" />
            </label>
            {!loading && <input type="submit" value="Atualizar"/>}
            {loading && <input type="submit" value="Aguarde..." disabled/> }
            {error && <Message msg={error} type="error"/>}
            {message && <Message msg={message} type="success"/>}
        </form>
    </div>
  )
}

export default EditProfile;