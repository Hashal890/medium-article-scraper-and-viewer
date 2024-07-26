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
        <Heading color={"white"} fontSize={"lg"} fontFamily={"body"} mb={0}>
          {title}
        </Heading>
        <Stack direction={"column"} spacing={2} fontSize={"sm"} mt={2}>
          <Text fontWeight={600} color={"gray.500"}>
            Author: {author}
          </Text>
          <Text color={"gray.500"}>Date of publication: {date}</Text>
        </Stack>
        <Text color={"gray.500"} fontSize={"sm"} mb={4}>
          {desc ||
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nulla facilisi. Curabitur in libero eu libero ornare tempor."}
        </Text>
      </Stack>
      <Link
        href={url}
        color={"teal.500"}
        textAlign={"center"}
        isExternal
      >
        Read more
      </Link>
    </Box>
  );
};

export default ArticleCard;
