import { Container, Image, Text } from "@nextui-org/react";

export const NoFavorites = () => {
  return (
    <Container
      css={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "calc(100vh - 70px)",
      }}
    >
      <Text h1>No hay Favoritos</Text>
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
        alt="Empty"
        width={300}
        height={300}
      />
    </Container>
  );
};
