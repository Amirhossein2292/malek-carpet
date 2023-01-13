import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Paper, IconButton } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import { NoEncryption } from "@mui/icons-material";

export default function SearchBar() {
  return (
        <IconButton
            type="submit"
            sx={{
                p: '5px',
                color: '#be996d'
            }}
        >
            <SearchIcon />
        </IconButton>

  )
}
