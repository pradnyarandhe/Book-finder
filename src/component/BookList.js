import { Container, Grid } from "@mui/material";
import React from "react";
import BookCard from "./BookCard";

function BookList({ books }) {
  if (!books.length) {
    return <p>No results found.</p>;
  }

  return (
    <Container>
      <Grid container spacing={3}>
        {books.map((book) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={book.key}>
            <BookCard book={book} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default BookList;
