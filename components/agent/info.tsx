
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function Info( { cpf, phone, date}:Props ){

return (
    <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>

                        <Grid item xs={4}>
                        <FormControl fullWidth sx={{ m: 1 }}>      
                            <InputLabel htmlFor="outlined-adornment">CPF</InputLabel>
                            <OutlinedInput
                                readOnly
                                id="outlined-adornment"
                                value={ cpf }              
                                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                label="CPF"
                            />
                            </FormControl>
                        </Grid>

                        <Grid item xs={4}>
                        <FormControl fullWidth sx={{ m: 1 }}>      
                            <InputLabel htmlFor="outlined-adornment">Telefone</InputLabel>
                            <OutlinedInput
                                readOnly
                                id="outlined-adornment"
                                value={ phone }              
                                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                label="Telefone"
                            />
                            </FormControl>
                        </Grid>

                        <Grid item xs={4}>
                        <FormControl fullWidth sx={{ m: 1 }}>      
                            <InputLabel htmlFor="outlined-adornment">Nascimento</InputLabel>
                            <OutlinedInput
                                readOnly
                                id="outlined-adornment"
                                value={ date }              
                                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                label="Nascimento"
                            />
                            </FormControl>
                        </Grid>


                    </Grid>
    </Box>
)
}