import React from "react";
import {AppBar, Button, Typography, Toolbar} from "@mui/material";

export const Header = () => {
    return (
            <AppBar position="sticky">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Social Network
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
    )
}