import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

type LatestUpdateCardProps = {
  header: string;
  content: string | number;
  footer?: string;
};

export const LatestUpdateCard = ({
  header,
  content,
  footer,
}: LatestUpdateCardProps) => {
  return (
    <Box
      sx={{
        display: "flex",
      }}
      marginRight={4}
      marginBottom={4}
    >
      <Paper elevation={3}>
        <Card sx={{ minWidth: 300, maxWidth: 300 }}>
          <CardContent>
            <Typography
              gutterBottom
              sx={{ color: "text.secondary", fontSize: 14 }}
            >
              {header}
            </Typography>
            <Typography variant="h4" component="div" gutterBottom>
              {content}
            </Typography>
            <Typography sx={{ color: "text.secondary", fontSize: 12 }}>
              {footer}
            </Typography>
          </CardContent>
        </Card>
      </Paper>
    </Box>
  );
};
