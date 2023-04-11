import { Card, Grid } from "@nextui-org/react";
import { NextPage } from "next";
import { useRouter } from "next/router";

interface Props {
  id: number;
}

export const FavoriteCardPokemon: NextPage<Props> = ({ id }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/pokemon/${id}`);
  };

  return (
    <Grid key={id} xs={6} sm={3} md={2} lg={1}>
      <Card isHoverable isPressable css={{ p: 10 }} onClick={handleClick}>
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          alt="Pokemon"
          width="100%"
          height={140}
        />
      </Card>
    </Grid>
  );
};
