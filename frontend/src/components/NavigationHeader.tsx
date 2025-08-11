import { useQuery } from "@apollo/client";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { type SelectChangeEvent } from "@mui/material/Select";
import * as React from "react";
import { GET_TYPES } from "../graphql/queries";

interface Props {
  typeFilter: string;
  setTypeFilter: React.Dispatch<React.SetStateAction<string>>;
}

export default function NavigationHeader(props: Props) {
  const { data, loading, error } = useQuery(GET_TYPES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  const handleChange = (event: SelectChangeEvent) => {
    props.setTypeFilter(event.target.value);
  };

  return (
    <div style={{ backgroundColor: "#dc4151", height: 200 }}>
      <h4>Filter</h4>
      <FormControl
        sx={{
          m: 1,
          minWidth: 120,
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              border: "lightGrey 1px solid",
            },
            "&.Mui-focused fieldset": {
              border: "lightGrey 1px solid",
            },
            "&:hover fieldset": {
              border: "lightGrey 1px solid",
            },
          },
        }}
        size="small"
      >
        <InputLabel
          id="demo-select-small-label"
          sx={{
            "&.Mui-focused": {
              color: "grey",
            },
          }}
        >
          Type
        </InputLabel>

        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={props.typeFilter}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>All types</em>
          </MenuItem>
          {data.types?.map((type: string, i: number) => (
            <MenuItem key={i} value={type}>
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
