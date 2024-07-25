import React, { useEffect, useState } from "react";
import { Box, Heading, Spinner, Text } from "@chakra-ui/react";
import axios from "axios";
import SearchArticles from "./components/SearchArticles";
import ArticlesList from "./components/ArticlesList";

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getRecentArticles = () => {
    setLoading(true);
    setError("");
    axios
      .get(
        "https://medium-article-scraper-and-viewer-v6p7.onrender.com/articles"
      )
      .then((res) => {
        setArticles(res.data.articles);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch articles");
        setLoading(false);
      });
  };

  useEffect(() => {
    getRecentArticles();
  }, []);

  return (
    <Box bg={"#1A202C"} minH={"100vh"} fontFamily={"cursive"}>
      <Heading
        textAlign={"center"}
        fontSize={"24px"}
        p={8}
        fontFamily={"cursive"}
        color={"white"}
        bg={"#1A202C"}
      >
        Medium Article Scraper and Viewer
      </Heading>
      <SearchArticles setArticles={setArticles} />
      {loading ? (
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          minH={"100px"}
        >
          <Spinner size="xl" color="teal.500" />
        </Box>
      ) : error ? (
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          minH={"100px"}
        >
          <Text color="red.500">{error}</Text>
        </Box>
      ) : (
        <ArticlesList articles={articles} />
      )}
    </Box>
  );
}

export default App;
