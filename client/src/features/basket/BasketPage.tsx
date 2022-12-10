import { Grid, Button, Typography, Paper } from "@mui/material";
import { useHistory } from "react-router-dom";
import { useAppSelector } from "../../app/store/configureStore";
import BasketSummary from "./BasketSummary";
import BasketTable from "./BasketTable";

export default function BasketPage() {
  const { basket } = useAppSelector((state) => state.basket);
  const history = useHistory();

  if (!basket)
    return (
      <>
        <Paper sx={{px: 3, pt: 3, pb: 3}}>
          <Typography variant="h3"> Your basket is empty</Typography>
        </Paper>
      </>
    );

  return (
    <>
      <BasketTable items={basket.items} />
      <Grid container>
        <Grid item xs={6} />
        <Grid item xs={6}>
          <BasketSummary />
          <Button onClick={() => history.push("/checkout")}>Checkout</Button>
        </Grid>
      </Grid>
    </>
  );
}
