import "./Search.css";

// Hooks
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useResetComponentMessage } from "../../Hooks/useResetComponentMessage";
import { useQuery } from "../../Hooks/useQuery";

// Components
import LikeContainer from "../../Components/LikeContainer/LikeContainer";
import PhotoItem from "../../Components/PhotoItem/PhotoItem";
import { Link } from "react-router-dom";

// redux
import { searchPhotos, like } from "../../Slices/photoSlice";

const Search = () => {
  const query = useQuery();
  const search = query.get("q");

  const dispatch = useDispatch();
  const resetMessage = useResetComponentMessage(dispatch);

  const { user } = useSelector((state) => state.auth);
  const { photos, loading } = useSelector((state) => state.photo);

  // Load photos
  useEffect(() => {
    dispatch(searchPhotos(search));
  }, [dispatch, search]);

  const handleLike = (photo) => {
    dispatch(like(photo._id));

    resetMessage();
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div id="search">
      <h2>Você está buscando por: {search}</h2>
      {photos &&
        photos.map((photo) => (
          <div key={photo._id}>
            <PhotoItem photo={photo} />
            <LikeContainer
              photo={photo}
              user={user}
              handleLike={() => handleLike(photo)}
            />
            <Link className="btn" to={`/photos/${photo._id}`}>
              Ver mais
            </Link>
          </div>
        ))}
      {photos && photos.length === 0 && (
        <>
          <h2 className="no_photos">
            Não foram encontrados resultados para sua busca...
          </h2>
          </>
      )}
    </div>
  );
};

export default Search;
