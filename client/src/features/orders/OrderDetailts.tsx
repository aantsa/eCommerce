import { Grid, Button, Typography } from "@mui/material";
import { BasketItem } from "../../app/models/basket";
import { Order } from "../../app/models/orders";
import BasketSummary from "../basket/BasketSummary";
import BasketTable from "../basket/BasketTable";

interface Props {
  order: Order;
  backToOrders?: any;
};

export default function OrderDetails(props: Props) {
  return (
    <div>
      <Grid container>
        <Grid item xs={10}>
          {" "}
          <Typography gutterBottom variant="h4">
            Order #{props.order.id} - {props.order.orderStatus}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography gutterBottom variant="h4">
            <Button color="primary" size="large" variant="contained" onClick={props.backToOrders}>
              BACK TO ORDERS
            </Button>
          </Typography>
        </Grid>
      </Grid>
      <BasketTable
        items={props.order.orderItems as BasketItem[]}
        isBasket={false}
      />
      <Grid container>
        <Grid item xs={6} />
        <Grid item xs={6}>
          <BasketSummary />
        </Grid>
      </Grid>
    </div>
  );
}
