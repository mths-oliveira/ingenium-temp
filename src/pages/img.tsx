import { Box, Center, Image } from "@chakra-ui/react"

export default function () {
  return (
    <Center width="100%" height="100vh" bg="#333">
      <Center
        height="270px"
        width="480px"
        overflow="hidden"
        bg="white"
        padding="2.25rem"
      >
        <Image src="/dbn.png" height="calc(100%)" objectFit="contain" />
      </Center>
    </Center>
  )
}
