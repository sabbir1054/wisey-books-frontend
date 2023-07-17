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

// const useStyles = makeStyles((theme: { spacing: (arg0: number) => any; }) => ({
//   card: {
//     maxWidth: 300,
//     margin: 'auto',
//     padding: theme.spacing(2),
//     textAlign: 'center',
//   },
//   avatar: {
//     width: theme.spacing(7),
//     height: theme.spacing(7),
//     margin: 'auto',
//   },
//   name: {
//     marginTop: theme.spacing(2),
//   },
//   feedback: {
//     marginTop: theme.spacing(1),
//   },
// }));

const ReviewCard: React.FC<ReviewCardProps> = ({
  imageUrl,
  name,
  feedback,
}) => {
  return (
    <Card
      className={styles.card}
      sx={{ display: "flex", justifyContent: "flex-start", alignItems:"start" }}
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
