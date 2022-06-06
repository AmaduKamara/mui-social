import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import styled from "@emotion/styled";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import { Notifications } from "@mui/icons-material";

const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "#fff",
  padding: "2px 10px",
  borderRadius: "6px",
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "15px",
  alignItems: "center",
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "8px",
  alignItems: "center",
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky">
      <StyledToolBar>
        <Typography variant="h5" sx={{ display: { xs: "none", sm: "block" } }}>
          MUI-Scoials
        </Typography>
        <ConnectWithoutContactIcon
          sx={{ display: { xs: "block", sm: "none" } }}
        />
        <Search>
          <InputBase placeholder="Search" />
        </Search>
        <Icons sx={{ display: { xs: "none", sm: "flex" } }}>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar
            alt="Remy Sharp"
            src="https://scontent.ffna2-1.fna.fbcdn.net/v/t1.6435-9/129078163_3643902815666949_4927983245120263821_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_ohc=I_BDTJ_sp6wAX8fptbv&_nc_ht=scontent.ffna2-1.fna&oh=00_AT-6ztdHgLGhieQAfpYMkw-lPoj-sWj6hMxyfbWjJp-_gg&oe=62C56FE1"
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        <UserBox sx={{ display: { xs: "flex", sm: "none" } }}>
          <Typography variant="span">Amkam</Typography>
          <Avatar
            alt="Remy Sharp"
            src="https://scontent.ffna2-1.fna.fbcdn.net/v/t1.6435-9/129078163_3643902815666949_4927983245120263821_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_ohc=I_BDTJ_sp6wAX8fptbv&_nc_ht=scontent.ffna2-1.fna&oh=00_AT-6ztdHgLGhieQAfpYMkw-lPoj-sWj6hMxyfbWjJp-_gg&oe=62C56FE1"
            onClick={(e) => setOpen(true)}
          />
        </UserBox>
      </StyledToolBar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
