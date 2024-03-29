import { Typography } from "@material-ui/core";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from "@mui/material";
import { useEffect, useState } from "react";
import agent from "../../app/api/agent";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { Order } from "../../app/models/orders";
import { currencyFormat } from "../../app/util/util";
import OrderDetails from "./OrderDetailts";

export default function Orders() {
  const [orders, setOrders] = useState<Order[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState<Order | undefined>(undefined);

  useEffect(() => {
    setLoading(true);
    agent.Orders.list()
      .then((o) => setOrders(o))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <LoadingComponent message="Loading orders..." />;

  return (
    <div>
      {!order ? (
        <>
          {" "}
          <Typography gutterBottom variant="h4">
            {" "}
            Orders
          </Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Order nubmer</TableCell>
                  <TableCell align="right">Total</TableCell>
                  <TableCell align="right">Order Date</TableCell>
                  <TableCell align="right">Order Status</TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders?.map((order) => (
                  <TableRow
                    key={order.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {order.id}
                    </TableCell>
                    <TableCell align="right">
                      {currencyFormat(order.total)}
                    </TableCell>
                    <TableCell align="right">
                      {order.orderDate.split("T")[0]}
                    </TableCell>
                    <TableCell align="right">{order.orderStatus}</TableCell>
                    <TableCell align="right">
                      <Button
                        onClick={() => {
                          setOrder(order);
                        }}
                      >
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      ) : (
        <OrderDetails
          backToOrders={() => setOrder(undefined)}
          order={order}
        ></OrderDetails>
      )}
    </div>
  );
}
