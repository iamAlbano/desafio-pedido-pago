import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';



const SearchBar = () => {

    return(
        <TextField
            fullWidth
            id="outlined"
            label="Pesquisar por"
            type="search"
            color="primary"
            InputLabelProps={{
                shrink: true,
            }}

            InputProps={{
                startAdornment: (
                <InputAdornment position="start">
                    <SearchIcon fontSize="large"/>
                </InputAdornment>
                ),
            }}
            />
    )
}

export default SearchBar;