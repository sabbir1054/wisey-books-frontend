/* eslint-disable @typescript-eslint/no-explicit-any */

import { Avatar, Card, CardContent, Typography } from "@mui/material";
// import { makeStyles } from '@mui/styles';
import React from "react";
import styles from "./ReviewCard.module.css";
interface ReviewCardProps {
  imageUrl: string;
  name: string;
  feedback: string;
}



const ReviewCard: React.FC<ReviewCardProps> = ({
  imageUrl,
  name,
  feedback,
}) => {
  return (
    <Card
      className={styles.card}
      sx={{ display: "flex", justifyContent: "flex-start", alignItems:"start",marginY:2 }}
    >
      <Avatar alt={name} src={imageUrl} className={styles.avatar} />
      <CardContent>
        <Typography variant="h6" component="h2" className={styles.name}>
          {name}
        </Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          className={styles.feedback}
        >
          {feedback}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
