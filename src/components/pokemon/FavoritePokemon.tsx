import { Grid } from "@nextui-org/react";
import { NextPage } from "next";
import { FavoriteCardPokemon } from "./";

interface FavoritePokemonProps {
  favoritePokemon: number[];
}

export const FavoritePokemon: NextPage<FavoritePokemonProps> = ({
  favoritePokemon,
}) => {
  return (
    <Grid.Container gap={2}>
      {favoritePokemon.map((id) => (
        <FavoriteCardPokemon key={id} id={id} />
      ))}
    </Grid.Container>
  );
};
