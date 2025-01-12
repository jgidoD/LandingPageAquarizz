import {
  Box,
  Heading,
  Flex,
  Image,
  Text,
  Button,
  Center,
  isStyleProp,
} from "@chakra-ui/react";
import "./First.css";
import { Lottie } from "lottie-react";
import animationData from "../../assets/question.json";
const First = () => {
  const raleway = `"Raleway", serif`;
  return (
    <>
      <Box h="100vh">
        <Flex p="30px 0px 0 5%">
          <Box>
            <Image src="/logo2.png" />
          </Box>
        </Flex>
        <Box>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <g transform="translate(0, -60)">
              <path
                fill="#FFC947"
                fill-opacity="1"
                d="M0,256L80,245.3C160,235,320,213,480,181.3C640,149,800,107,960,106.7C1120,107,1280,149,1360,170.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
              ></path>
              <rect x="0" y="250" width="1440" height="320" fill="#FFC947" />
            </g>
          </svg>
        </Box>

        <Flex bg="#FFC947" className="title-wrapper" color="#1D1616" p="0 5%">
          <Box w="50%">
            <Heading fontSize="3.65em">
              Connecting for the Love of Healthy Fish
            </Heading>
            <Text as="i" fontSize="2xl">
              A Social media community to connect and sell your items.
            </Text>
            <Box>
              <Button>Join the Community</Button>
            </Box>
          </Box>

          <Box
            className="image-fish"
            position="absolute" // Position the Box relative to its closest positioned ancestor
            top="200" // Aligns the Box to the top of the container
            right="0" // Aligns the Box to the left side of the container
            width="50%" // Makes the Box take 50% of the width
            overflow="hidden"
            w="50%"
          >
            <Image src={require("../../assets/fish swimming(1).png")} />
          </Box>
        </Flex>
        <Box h="50vh" bg="#FFC947"></Box>
        <Flex className="textItems" justify="center" p="46px 250px" gap={20}>
          <Box className="marker" w="50%">
            <Heading size="lg">Are you a fish enthusiast?</Heading>
            <Box>
              <Text fontSize="1.2em">
                🐠✨ Whether you have a small tank or a huge reef setup, we’ve
                created the perfect place for you to showcase your fish
                collection, share tips, and connect with fellow hobbyists! 🌊💙
              </Text>
            </Box>
          </Box>
          <Box className="marker" w="50%">
            <Heading size="lg">Ready to showcase your fish collection?</Heading>
            <Box>
              <Text fontSize="1.2em">
                🚤🐟 Swipe up to join our community of fish lovers, share your
                aquarium setups, and get expert tips on care! #FishFamily
              </Text>
            </Box>
          </Box>
          <Box className="marker" w="50%">
            <Heading size="lg">Calling all fish enthusiasts!</Heading>
            <Box>
              <Text fontSize="1.2em">
                🌟🐠 Want to connect with others, share your fish collection,
                and get awesome tips? Check out our new fish hobby platform! 🌊
              </Text>
            </Box>
          </Box>
        </Flex>
        <Flex
          flexDirection="column"
          p="12em 0 2em"
          justify="center"
          align="center"
        >
          <Heading size="xl">
            Reel in Your Passion: Showcase Your Fish Collection with Ease!
          </Heading>
        </Flex>
        <Flex flexDirection="column" p="32px 0" justify="center" align="center">
          <Button className="joinBtn" size="lg" bg="#FFC947">
            JOIN THE COMMUNITY NOW!
          </Button>
        </Flex>

        <Flex justify="space-evenly">
          <Box>
            <Heading>Find</Heading>
            <Image src={require("../../assets/discoverMoving.gif")} />
          </Box>
          <Box>
            <Heading>Shop</Heading>
            <Image src={require("../../assets/marketMoving.gif")} />
          </Box>
          <Box>
            <Heading>Sell</Heading>
            <Image src={require("../../assets/shoppingMoving.gif")} />
          </Box>
        </Flex>
      </Box>
    </>
  );
};
export default First;
