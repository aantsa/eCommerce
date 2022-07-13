import { debounce } from "@material-ui/core";
import { TextField } from "@mui/material";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { setProductParams } from "./catalogSlice";

export default function ProductSearch() {
  const { productParams } = useAppSelector((state) => state.catalog);
  const [search, setSearch] = useState(productParams.search);
  const dispatch = useAppDispatch();

  const debouncedSearch = debounce((e: any) => {
    dispatch(setProductParams({ search: e.target.value }));
  }, 1000);

  return (
    <TextField
      label="Search products"
      variant="outlined"
      fullWidth
      value={search || ""}
      onChange={(e: any) => {
        setSearch(e.target.value);
        debouncedSearch(e);
      }}
    />
  );
}
