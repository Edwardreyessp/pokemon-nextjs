import { SmallPokemon } from "@/interfaces";
import { Card, Grid, Row, Text } from "@nextui-org/react";
import { NextPage } from "next";
import { useRouter } from "next/router";

interface PokemonCardProps {
  pokemon: SmallPokemon;
}

export const PokemonCard: NextPage<PokemonCardProps> = ({ pokemon }) => {
  const { name, image, id } = pokemon;
  const router = useRouter();

  const handleClick = () => {
    router.push(`/pokemon/${id}`);
  };

  return (
    <Grid key={id} xs={6} sm={3} md={2} xl={1}>
      <Card isHoverable isPressable onClick={handleClick}>
        <Card.Body css={{ p: 1 }}>
          <Card.Image src={image} width="100%" height={140} />
        </Card.Body>
        <Card.Footer>
          <Row justify="space-between">
            <Text transform="capitalize">{name}</Text>
            <Text>{id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
