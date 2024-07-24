import React from "react";
import { Box, Grid } from "@chakra-ui/react";
import ArticleCard from "./ArticleCard";

const ArticlesList = ({ articles }) => {
  return (
    <Box maxW={"800px"} margin={"auto"} p={4}>
      <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={4}>
        {articles.map((article, index) => (
          <ArticleCard key={article._id} {...article} />
        ))}
      </Grid>
    </Box>
  );
};

export default ArticlesList;
