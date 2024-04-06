import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../hooks/useGames";
import { Icon, HStack, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    android: FaAndroid,
    web: BsGlobe,
  };

  const iconComponents = platforms.reduce((acc: IconType[], platform) => {
    const iconKey = Object.keys(iconMap).find((key) =>
      platform.slug.includes(key)
    );
    const IconComponent = iconKey ? iconMap[iconKey] : null;

    if (IconComponent && !acc.includes(IconComponent)) {
      acc.push(IconComponent);
    }

    return acc;
  }, []);

  return (
    <HStack marginY={2}>
      {iconComponents.map((IconComponent) => (
        <Icon as={IconComponent} color="gray.500" />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
