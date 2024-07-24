import React from "react";
import { Box, Heading, Link, Stack, Text } from "@chakra-ui/react";

const ArticleCard = ({ title, desc, author, date, url }) => {
  return (
    <Box
      border={"1px"}
      borderColor={"gray.700"}
      padding={4}
      borderRadius={"lg"}
    >
      <Stack>
        <Heading color={"white"} fontSize={"lg"} fontFamily={"body"}>
          {title}
        </Heading>
        <Text color={"gray.500"} fontSize={"sm"}>
          {desc ||
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nulla facilisi. Curabitur in libero eu libero ornare tempor."}
        </Text>
      </Stack>
      <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
        <Stack direction={"column"} spacing={0} fontSize={"sm"}>
          <Text fontWeight={600}>{author}</Text>
          <Text color={"gray.500"}>{date}</Text>
        </Stack>
      </Stack>
      <Link href={url} color={"teal.500"} textAlign={"center"} isExternal>
        Read more
      </Link>
    </Box>
  );
};

export default ArticleCard;
