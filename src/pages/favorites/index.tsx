import { Layout } from "@/components/layouts";
import { FavoritePokemon } from "@/components/pokemon";
import { NoFavorites } from "@/components/ui";
import { pokemon } from "@/utils";
import { useEffect, useState } from "react";

const FavoritePage = () => {
  const [favoritePokemon, setFavoritePokemon] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemon(pokemon());
  }, []);

  return (
    <Layout title="Pokemon - Favoritos">
      {favoritePokemon.length == 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemon favoritePokemon={favoritePokemon} />
      )}
    </Layout>
  );
};

export default FavoritePage;
