import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { GameObjects } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageURL from "../services/image-url";

interface Props {
  game: GameObjects;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card width="400px" borderRadius={10} overflow="hidden">
      <Image src={getCroppedImageURL(game.background_image)} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList platforms={game.platforms.map((p) => p.platform)} />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
