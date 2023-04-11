import { pokeApi } from "@/api";
import { Layout } from "@/components/layouts";
import { PokemonCard } from "@/components/pokemon";
import { PokemonListResponse, SmallPokemon } from "@/interfaces";
import { Grid } from "@nextui-org/react";
import { NextPage, GetStaticProps } from "next";

interface HomePageProps {
  pokemon: SmallPokemon[];
}

const HomePage: NextPage<HomePageProps> = ({ pokemon }) => {
  return (
    <Layout title="Listado de Pokemon">
      <Grid.Container gap={2} justify="flex-start">
        {pokemon.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </Grid.Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");

  const pokemon: SmallPokemon[] = data.results.map((pokemon, id) => {
    return {
      id: id + 1,
      name: pokemon.name,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
        id + 1
      }.svg`,
      url: pokemon.url,
    };
  });

  return {
    props: {
      pokemon,
    },
  };
};

export default HomePage;
