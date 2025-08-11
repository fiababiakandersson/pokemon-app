import { useQuery } from "@apollo/client";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
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
    <div
      style={{
        backgroundColor: "#dc4151",
        position: "relative",
        height: 200,
      }}
    >
      <img
        src="../public/logo.png"
        alt="Pokemon logo"
        style={{
          width: 250,
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          maxWidth: "50rem",
          bottom: 20,
          left: 30,
        }}
      >
        <div
          style={{
            margin: "0 0 5px 10px",
            alignItems: "center",
            display: "flex",
            color: "white",
            fontSize: 15,
            gap: 5,
          }}
        >
          <p> Filter</p>

          <FilterAltOutlinedIcon
            sx={{
              fontSize: 21,
            }}
          />
        </div>
        <FormControl
          sx={{
            m: 1,
            width: 140,
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                border: "white 1px solid",
              },
              "&.Mui-focused fieldset": {
                border: "white 1px solid",
              },
              "&:hover fieldset": {
                border: "white 1px solid",
              },
            },
          }}
          size="small"
        >
          <InputLabel
            id="demo-select-small-label"
            sx={{
              color: "white",
              "&.Mui-focused": {
                color: "white",
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
            sx={{
              color: "white",
              "& .MuiSvgIcon-root": {
                color: "white",
              },
            }}
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
    </div>
  );
}
