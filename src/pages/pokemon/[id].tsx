import { pokeApi } from "@/api";
import { Layout } from "@/components/layouts";
import { Pokemon } from "@/interfaces";
import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

interface PokemonProps {
  pokemon: Pokemon;
}

const PokemonPage: NextPage<PokemonProps> = ({ pokemon }) => {
  const { name, sprites } = pokemon;

  return (
    <Layout title="Pokemon">
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
              <Button color="gradient" ghost>
                Guardar en favoritos
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
  const pokemon151 = [...Array(151)].map((value, index) => `${index + 1}`);

  return {
    paths: pokemon151.map((id) => {
      return { params: { id } };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };
  const { data } = await pokeApi.get<Pokemon>(`pokemon/${id}`);

  return {
    props: {
      pokemon: data,
    },
  };
};

export default PokemonPage;
