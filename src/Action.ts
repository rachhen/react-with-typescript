import { IState, IEpisode, IAction } from "./interfaces";

export const fetchDataAction = async (dispatch: any) => {
  const URL =
    "http://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes";
  const data = await fetch(URL);
  const dataJson = await data.json();
  return dispatch({
    type: "FETCH_DATA",
    payload: dataJson._embedded.episodes,
  });
};

export const toggleFavAction = (
  state: IState,
  dispatch: any,
  episode: IEpisode
): IAction => {
  const episodeInFav = state.favourites.includes(episode);

  let dispatchObj: IAction = {
    type: "ADD_FAV",
    payload: episode,
  };

  if (episodeInFav) {
    const favWithoutEpisode = state.favourites.filter(
      (fav: IEpisode) => fav.id !== episode.id
    );
    dispatchObj = {
      type: "REMOVE_FAV",
      payload: favWithoutEpisode,
    };
  }

  return dispatch(dispatchObj);
};
