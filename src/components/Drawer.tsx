import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  SwipeableDrawer,
  ListItemText,
  DialogTitle,
} from "@mui/material";
import { atom, useAtom } from "jotai";
export const drawerAtom = atom(false);
export default function Drawer() {
  const [isVisible, setVisible] = useAtom(drawerAtom);
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setVisible(open);
    };
  return (
    <SwipeableDrawer
      anchor="right"
      open={isVisible}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
    >
      <Box
        sx={{ width: 300 }}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <List>
          <DialogTitle>Where does my data go?</DialogTitle>
          {["Home", "개인정보수집", "쿠키", "정보유출", "프로젝트"].map(
            (text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>
      </Box>
    </SwipeableDrawer>
  );
}
