import React from "react";
import { Store } from "./Store";
import { IEpisodeListProps } from "./interfaces";
import { fetchDataAction, toggleFavAction } from "./Action";

const EpisodeList = React.lazy<any>(() => import("./EpisodeList"));

export default function HomePage() {
  const { state, dispatch } = React.useContext(Store);

  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction(dispatch);
  }, [state, dispatch]);

  const props: IEpisodeListProps = {
    episodes: state.episodes,
    store: { state, dispatch },
    favourites: state.favourites,
    toggleFavAction,
  };

  return (
    <section className="episode-layout">
      <React.Suspense fallback={<div>Loading...</div>}>
        <EpisodeList {...props} />
      </React.Suspense>
    </section>
  );
}
