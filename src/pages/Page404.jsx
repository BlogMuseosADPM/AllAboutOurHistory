import {Grid, Typography} from '@mui/material';
import {Link} from 'react-router-dom';

export const Page404 = () => {
    return <Grid container height={"100vh"} direction="column" padding={15} gap={5} component="main">
        <Typography variant='h1' color="initial">
            <span style={{color: "green", fontWeight: "800"}}>404</span> Página no encontrada
        </Typography>

        <Typography variant='h4'>Volver al <Link to={"/"} style={{textDecorationLine: "none"}}>Inicio</Link></Typography>
    </Grid>;
}