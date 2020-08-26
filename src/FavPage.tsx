import React from "react";
import { Store } from "./Store";
import { IEpisodeListProps } from "./interfaces";
import { toggleFavAction } from "./Action";

const EpisodeList = React.lazy<any>(() => import("./EpisodeList"));

export default function FavPage() {
  const { state, dispatch } = React.useContext(Store);

  const props: IEpisodeListProps = {
    episodes: state.favourites,
    store: { state, dispatch },
    favourites: state.favourites,
    toggleFavAction,
  };

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <div className="episode-layout">
        <EpisodeList {...props} />
      </div>
    </React.Suspense>
  );
}
