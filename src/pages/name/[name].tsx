import { pokeApi } from "@/api";
import { Layout } from "@/components/layouts";
import { Pokemon, PokemonListResponse } from "@/interfaces";
import { existInFavorites, getPokemonInfo, toggleFavorites } from "@/utils";
import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useState } from "react";
import confetti from "canvas-confetti";

interface PokemonProps {
  pokemon: Pokemon;
}

const PokemonNamePage: NextPage<PokemonProps> = ({ pokemon }) => {
  const { name, sprites } = pokemon;
  const [isInFavorites, setIsInFavorites] = useState(
    existInFavorites(pokemon.id)
  );

  const onToggleFavorite = () => {
    toggleFavorites(pokemon.id);
    setIsInFavorites(!isInFavorites);

    if (isInFavorites) return;

    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: { x: 1, y: 0 },
    });
  };

  return (
    <Layout title={name}>
      <Grid.Container css={{ mt: "5px" }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card isHoverable css={{ p: "30px" }}>
            <Card.Body>
              <Card.Image
                src={
                  sprites.other?.dream_world.front_default || "./no-image.png"
                }
                alt={name}
                width="100%"
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header
              css={{ display: "flex", justifyContent: "space-between" }}
            >
              <Text h1 transform="capitalize">
                {name}
              </Text>
              <Button
                color="gradient"
                ghost={!isInFavorites}
                onClick={onToggleFavorite}
              >
                {isInFavorites ? "En Favoritos" : "Guardar en favoritos"}
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites:</Text>
            </Card.Body>
            <Container display="flex">
              <Image
                src={sprites.front_default}
                alt={name}
                width={100}
                height={100}
              />
              <Image
                src={sprites.back_default}
                alt={name}
                width={100}
                height={100}
              />
              <Image
                src={sprites.front_shiny}
                alt={name}
                width={100}
                height={100}
              />
              <Image
                src={sprites.back_shiny}
                alt={name}
                width={100}
                height={100}
              />
            </Container>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>(`/pokemon?limit=151`);
  const pokemon151: string[] = data.results.map((pokemon) => pokemon.name);

  return {
    paths: pokemon151.map((name) => {
      return { params: { name } };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };

  const pokemon = await getPokemonInfo(name);

  return {
    props: {
      pokemon,
    },
  };
};

export default PokemonNamePage;
