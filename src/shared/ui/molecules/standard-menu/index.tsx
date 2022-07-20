import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {IStandardMenu} from "./types";
import MenuIcon from "@mui/icons-material/Menu";
import {IconButton} from "@mui/material";
import styled from "styled-components";

export const StandardMenu: React.FC<IStandardMenu> = () => {
    const [open, setOpen] = React.useState<boolean>(false)
    return (
        <StandardMenuWrap>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{mr: 2}}
                onClick={() => setOpen(!open)}
            >
                <MenuIcon/>
            </IconButton>
            <Menu
                id="basic-menu"
                open={open}
                onClose={() => setOpen(false)}
            >
                <MenuItem>Профиль</MenuItem>
                <MenuItem>Сообщения</MenuItem>
            </Menu>
        </StandardMenuWrap>
    );
}

const StandardMenuWrap = styled.div`
`