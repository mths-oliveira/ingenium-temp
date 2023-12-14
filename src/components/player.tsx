import { Box, Center, Flex, Icon, Stack, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { FaEye, FaPlay } from "react-icons/fa"

const videos = [
  { videoId: "PifFEuq-hwk", title: "Sistema de intercomunicação nas prisões" },
  {
    videoId: "3w-DfLdsbgU",
    title: "Sistema de intertravamento de portas em prisões",
  },
  { videoId: "VT9Y-w2NhUc", title: "Integração CCTV na prisão" },
]

export default function () {
  const [currentVideoId, setCurrentVideoId] = useState(videos[0].videoId)
  const [autoplay, setAutoplay] = useState(0)

  const [width, setWidth] = useState(0)
  useEffect(() => {
    const view = document.getElementById("view")
    const { height } = view.getBoundingClientRect()
    setWidth((height / 3) * 4)
  }, [])

  return (
    <Flex marginTop="7.5rem" justifyContent="center" alignItems="center">
      <Box
        id="view"
        width={`${width}px`}
        height="calc(100vh - 15rem)"
        boxShadow="lg"
      >
        <Box
          width="100%"
          height="100%"
          borderRadius="5px"
          as="iframe"
          src={`https://www.youtube.com/embed/${currentVideoId}?autoplay=${autoplay}`}
          allow="accelerometer; encrypted-media; gyroscope; autoplay; picture-in-picture"
          title="Youtube Video Player"
          allowFullScreen={true}
        />
      </Box>

      <Stack marginLeft="1.5rem" spacing="1rem">
        {videos.map(({ videoId, title }) => {
          const isVideoId = videoId === currentVideoId

          return (
            <Flex
              alignItems="center"
              cursor="pointer"
              _hover={{
                ">div>div": {
                  color: "rgba(255,255,255,0.75)",
                },
              }}
              onClick={() => {
                setCurrentVideoId(videoId)
                setAutoplay(1)
              }}
            >
              <Box
                bgImage={`url(http://img.youtube.com/vi/${videoId}/0.jpg)`}
                height="135px"
                width="15rem"
                borderRadius="5px"
                boxShadow="lg"
                overflow="hidden"
              >
                <Center
                  bg="rgba(0,0,0,0.3)"
                  backdropFilter={`blur(${isVideoId ? 3 : 0}px)`}
                  width="100%"
                  height="100%"
                  color={isVideoId ? "rgba(255,255,255,0.75)" : "transparent"}
                  transition="all 0.1s ease"
                >
                  <Icon
                    fontSize={isVideoId ? "2.5rem" : "2rem"}
                    as={isVideoId ? FaEye : FaPlay}
                  />
                </Center>
              </Box>
              <Stack marginLeft="1rem" maxWidth="15rem">
                <Text color="black" fontSize="14px" fontWeight="semibold">
                  {title}
                </Text>
                <Text fontSize="12px">Bosch Security</Text>
              </Stack>
            </Flex>
          )
        })}
      </Stack>
    </Flex>
  )
}
