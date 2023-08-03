import React from "react";
import { Typography, Card, CardContent } from "@mui/material";

// Simple card to display the landing page's two cards
export default function BuyCard(props) {
  return (
    <Card
      style={{
        maxWidth: 645,
        background: "-webkit-linear-gradient(45deg, #00C9FF 0%, #92FE9D 100%)",
        margin: "20px",
      }}
    >
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="h1"
          style={{
            fontFamily: "Futura",
            fontWeight: "bold",
            fontSize: "2rem",
            color: "#000",
            cursor: "pointer"
          }}
        >
          {props.kind.title}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          style={{ fontFamily: "Futura", fontSize: "1.1rem", color: "#000" }}
        >
          {props.kind.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
