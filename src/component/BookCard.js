import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import React from "react";

function BookCard({ book }) {
  const coverId = book.cover_i;
  const coverUrl = coverId
    ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
    : "https://via.placeholder.com/128x193?text=No+Cover";

  return (
    <Card>
      <CardMedia
        component="img"
        height="193"
        image={coverUrl}
        alt={book.title}
      />
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          {book.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {book.author_name ? book.author_name.join(", ") : "Unknown author"}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          First published: {book.first_publish_year || "N/A"}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default BookCard;
