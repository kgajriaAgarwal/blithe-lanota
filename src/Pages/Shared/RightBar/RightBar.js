import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Radio,
  RadioGroup,
  styled,
  Typography,
} from "@mui/material";
import react, { useReducer, useState } from "react";
import { useReducerContext } from "../../../Helpers/Context";
import "./RightBar.css";

const RightBarBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.down("sm")]: {
    backgroundColor: theme.palette.text.tertiary,
    zIndex: 2,
    position: "relative",
    width: "80%",
    marginLeft: "auto",
  },
}));

export const RightBar = () => {
  const [checked, setChecked] = useState([0]);
  const [sortByDate, setSortByDate] = useState("");
  const { dispatch, labels, loading, priority, timeSort } = useReducerContext();

  const handleToggle = (value, category) => () => {
    dispatch({
      type: category === "priority" ? "PRIORITY_FILTER" : "LABEL_FILTER",
      filterType: category,
      filter: value,
    });
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  const handleRadioChange = (event) => {
    dispatch({
      type: event.target.value.toUpperCase(),
    });
    setSortByDate(event.target.value);
  };

  const handleReset = () => {
    setChecked([]);
    setSortByDate(null);
    dispatch({
      type: "RESET",
    });
  };

  return (
    <RightBarBox flex={1}>
      <Divider sx={{ color: "secondary", paddingTop: " 10%" }}>
        Sort by Priority:
      </Divider>

      <List sx={{ width: "100%", maxWidth: 360 }} dense>
        {["Low", "Medium", "High"].map((value) => {
          const labelId = `checkbox-list-label-${value}`;
          return (
            <ListItem key={value} disablePadding>
              <ListItemButton
                role={undefined}
                onClick={handleToggle(value, "priority")}
                dense
              >
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={checked.indexOf(value) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={value} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>

      <Divider sx={{ color: "secondary" }}>Sort by Date:</Divider>
      <FormControl ml={1}>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          sx={{ "& .MuiFormControlLabel-root": { marginLeft: 0 } }}
          value={sortByDate}
          onChange={handleRadioChange}
        >
          <FormControlLabel value="Latest" control={<Radio />} label="Latest" />
          <FormControlLabel value="Old" control={<Radio />} label="Old" />
        </RadioGroup>
      </FormControl>

      <Divider sx={{ color: "secondary" }}>Sort by Labels:</Divider>
      <List sx={{ width: "100%", maxWidth: 360 }} dense>
        {[
          "Home",
          "Work",
          "Personal",
          "Exercise",
          "Chores",
          "Health",
          "Surgery",
          "Paitents",
          "Meetings",
        ].map((value) => {
          const labelId = `checkbox-list-label-${value}`;
          return (
            <ListItem key={value} disablePadding>
              <ListItemButton
                role={undefined}
                onClick={handleToggle(value, "labels")}
                dense
              >
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={checked.indexOf(value) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={value} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      <Button onClick={() => handleReset()}>RESET ALL FILTERS</Button>
    </RightBarBox>
  );
};
