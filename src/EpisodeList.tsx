import React from "react";
import { IEpisode, IEpisodeListProps } from "./interfaces";

export default function EpisodeList(props: IEpisodeListProps) {
  const { episodes, toggleFavAction, favourites, store } = props;
  const { state, dispatch } = store;
  return episodes.map((episode: IEpisode) => {
    return (
      <section key={episode.id} className="episode-box">
        <img src={episode.image.medium} alt={`Rick and Mort ${episode.name}`} />
        <section style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            Seasion: {episode.season} Number: {episode.number}
          </div>
          <button
            type="button"
            onClick={() => toggleFavAction(state, dispatch, episode)}
          >
            {favourites.find((fav: IEpisode) => fav.id === episode.id)
              ? "Unfav"
              : "Fav"}
          </button>
        </section>
      </section>
    );
  });
}
