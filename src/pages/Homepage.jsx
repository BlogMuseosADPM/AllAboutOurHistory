import { Grid, Typography, Card, CardMedia, CardContent, CardActions, Button } from "@mui/material"
import { Link } from "react-router-dom";
import fachada from '../../public/fachada.jpg';

export const Homepage = () => {

  return <Grid container component="main" >

    <Grid container justifyContent="center">
    <Typography variant="h2" color="initial" fontWeight={700} textAlign="center">
      Descubre los museos más <span style={{color: "green"}}>interesantes</span> del país
    </Typography>
    </Grid>

    <Grid container padding={15} component="section">
      <Button>
        <Link to={"/museo-arqueologico-gonzalo-rincon-guitierrez"} style={{textDecorationLine: "none"}}>
          <Card sx={{ width: 400 }}>
            <CardMedia
              component="img"
              alt="Fachada del museo arqueologico"
              image={fachada}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div"align="left">
                <span style={{color : "green"}}>Museo Arqueológico</span> Gonzalo Rincón Gutiérrez
              </Typography>
            </CardContent>
          </Card>
        </Link>
      </Button>
    </Grid>

  </Grid>;
};
