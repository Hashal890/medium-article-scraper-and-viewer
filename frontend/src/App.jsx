import React, { useEffect, useState } from "react";
import { Box, Heading } from "@chakra-ui/react";
import axios from "axios";
import SearchArticles from "./components/SearchArticles";
import ArticlesList from "./components/ArticlesList";

function App() {
  const [articles, setArticles] = useState([]);

  const getRecentArticles = () => {
    axios
      .get(
        "https://medium-article-scraper-and-viewer-v6p7.onrender.com/articles"
      )
      .then((res) => setArticles(res.data.articles))
      .catch((err) => console.log(err));
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
      <ArticlesList articles={articles} />
    </Box>
  );
}

export default App;
