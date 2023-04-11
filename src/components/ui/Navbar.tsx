import { Spacer, Text, useTheme } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        padding: "0 20px",
        backgroundColor: theme?.colors.gray100.value,
      }}
    >
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        alt="Ditto"
        width={70}
        height={70}
      />
      <Link href="/">
        <div style={{ display: "flex", alignItems: "center" }}>
          <Text color="white" h2>
            P
          </Text>
          <Text color="white" h3>
            okémon
          </Text>
        </div>
      </Link>
      <Spacer css={{ flexGrow: 1 }} />
      <Link href="/favorites" passHref>
        <Text color="white">Favoritos</Text>
      </Link>
    </div>
  );
};
