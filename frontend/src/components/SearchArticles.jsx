import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Input,
  Flex,
  FormErrorMessage,
} from "@chakra-ui/react";
import axios from "axios";

const SearchArticles = ({ setArticles }) => {
  const [topic, setTopic] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!topic.trim()) {
      setError("Please enter a topic");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const response = await axios.post(
        "https://medium-article-scraper-and-viewer-v6p7.onrender.com/scrape",
        {
          topic,
        }
      );
      setArticles(response.data.articles);
    } catch (error) {
      setError("Failed to fetch articles!");
    }
    setLoading(false);
  };

  return (
    <Box maxW={"450px"} margin={"auto"} p={4}>
      <FormControl isInvalid={!!error}>
        <Flex>
          <Input
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Enter topic"
            isInvalid={!!error}
            flex="1"
            mr={2}
            color={"white"}
          />
          <Button colorScheme="teal" onClick={handleSearch} isLoading={loading}>
            Search
          </Button>
        </Flex>
        {error && <FormErrorMessage my={2}>{error}</FormErrorMessage>}
      </FormControl>
    </Box>
  );
};

export default SearchArticles;
