import fachada from '../../public/fachada.jpg'
import img1 from '../../public/1.jpg'
import img2 from '../../public/2.jpg'
import img3 from '../../public/3.jpg'
import img4 from '../../public/4.jpg'
import img5 from '../../public/5.jpg'
import img6 from '../../public/6.jpg'
import img7 from '../../public/7.jpg'
import img8 from '../../public/8.jpg'
import { Grid, Typography, Card, CardMedia, CardContent, CardActions, Button } from "@mui/material";
export const GonzaloRinconGutierrez = () => {
  return (
    <>
      <Grid
        container
        spacing={0}
        direction="row"
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        wrap="wrap"
        component="header"
      >
        <Typography variant="h2" color="initial" fontWeight={800} paddingY={5}>
          Museo Arqueológico Gonzalo Rincón Gutiérrez
        </Typography>
      </Grid>

      <Typography variant='h5' color="initial" paddingY={5} paddingX={18}>
        Adéntrate en el Pasado: Un Viaje al Museo Arqueológico Gonzalo Rincón Gutiérrez.
      </Typography>

      <Grid container justifyContent="center" component="section">
        <Card sx={{ width: "80vw" }}>
          <CardMedia
            component="img"
            alt="Fachada del museo arqueologico"
            image={fachada}
          />
          <CardContent>
            <Typography gutterBottom variant="caption" component="div">
              Museo Arqueologico Gonzalo Rincón Gutiérrez
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid container paddingY={5} paddingX={15} gap={5}>

        <Typography variant='body1' color="initial">
          En el corazón de la Universidad de Los Andes, en Mérida, Venezuela, se encuentra un tesoro invaluable: el Museo Arqueológico Gonzalo Rincón Gutiérrez. Un espacio que te invita a emprender un fascinante viaje a través del tiempo, a través de las huellas dejadas por las culturas que habitaron nuestro territorio desde el Paleoindio hasta el contacto europeo.
        </Typography>

        <Typography variant='h5' color="green">
          Un Homenaje a la Historia:
        </Typography>

        <Typography variant='body1' color="initial">
          El museo, fundado en 1986 y nombrado en honor al destacado arqueólogo venezolano Gonzalo Rincón Gutiérrez, alberga una colección de más de 15.000 piezas arqueológicas. Un legado tangible que nos permite conocer las formas de vida, las creencias y las expresiones artísticas de nuestros ancestros.
        </Typography>

      </Grid>

      <Grid container justifyContent="center" direction="row" wrap='wrap' gap={10} paddingX={5} component="section">

        <Card sx={{ width: 500 }}>
          <CardMedia
            component="img"
            alt="Exposición en vitrina de objetos indigenas"
            image={img1}
          />
        </Card>

        <Card sx={{ width: 500 }}>
          <CardMedia
            component="img"
            alt="Exposición en vitrina de objetos indigenas"
            image={img3}
          />
        </Card>

        <Card sx={{ width: 500 }}>
          <CardMedia
            component="img"
            alt="Armas antiguas"
            image={img5}
          />
        </Card>

      </Grid>

      <Grid container paddingY={5} paddingX={15} gap={5}>

        <Typography variant='h5' color="green">
          Un Recorrido por el Pasado Andino:
        </Typography>

        <Typography variant='body1' color="initial">
          La exposición permanente, "Arqueología de la Región Andina Venezolana", te guía en un recorrido cronológico por las diferentes culturas que poblaron esta región. Desde las primeras herramientas líticas hasta las elaboradas piezas de cerámica y metalurgia, cada objeto narra una historia, revela una técnica y nos acerca a la cosmovisión de aquellos que nos precedieron.
        </Typography>

      </Grid>

      <Grid container justifyContent="center" direction="row" wrap='wrap' gap={10} paddingX={5} component="section">

        <Card sx={{ width: 500 }}>
          <CardMedia
            component="img"
            alt="Escultura indigena"
            image={img2}
          />
        </Card>

        <Card sx={{ width: 500 }}>
          <CardMedia
            component="img"
            alt="momia"
            image={img4}
          />
        </Card>

        <Card sx={{ width: 500 }}>
          <CardMedia
            component="img"
            alt="esculturas indigenas gemelas"
            image={img7}
          />
        </Card>

      </Grid>

      <Grid container paddingY={5} paddingX={15} gap={5}>

        <Typography variant='h5' color="green">
          Más allá de las Vitrinas:
        </Typography>

        <Typography variant='body1' color="initial">
          El Museo Arqueológico Gonzalo Rincón Gutiérrez no se limita a ser un repositorio de objetos. Es un espacio dinámico que fomenta la investigación, la educación y la divulgación del conocimiento arqueológico.
        </Typography>

        <Typography variant='h5' color="green">
          Un Centro de Investigación:
        </Typography>

        <Typography variant='body1' color="initial">
          Las líneas de investigación del museo abarcan desde la arqueología prehispánica hasta la etnoarqueología, pasando por la arqueobotánica y la zooarqueología. Los investigadores del museo desarrollan proyectos que amplían nuestro conocimiento sobre el pasado y contribuyen a la comprensión de la historia regional y nacional.
        </Typography>

        <Typography variant='h5' color="green">
          Un Aula Abierta:
        </Typography>

        <Typography variant='body1' color="initial">
          El museo ofrece una amplia gama de programas educativos para niños, jóvenes y adultos. Talleres, visitas guiadas, cursos, conferencias y material educativo en línea son algunas de las iniciativas que buscan acercar el fascinante mundo de la arqueología al público en general.
        </Typography>

      </Grid>

      <Grid container justifyContent="center" component="section">

        <Card sx={{ width: "80vw" }}>
          <CardMedia
            component="img"
            alt="Aula"
            image={img6}
          />
        </Card>

      </Grid>

      <Grid container paddingY={5} paddingX={15} gap={5}>

        <Typography variant='h5' color="green">
          Una Voz en el Mundo Académico:
        </Typography>

        <Typography variant='body1' color="initial">
          La Revista Venezolana de Antropología, publicación científica bianual del museo, difunde investigaciones originales sobre arqueología, antropología y disciplinas afines. Además, se publican libros y artículos que dan a conocer los resultados de las investigaciones realizadas por los investigadores del museo.
        </Typography>

        <Typography variant='h5' color="green">
          Un Encuentro con la Historia:
        </Typography>

        <Typography variant='body1' color="initial">
          El Museo Arqueológico Gonzalo Rincón Gutiérrez abre sus puertas de martes a viernes, de 8:30 a.m. a 12:30 p.m. y de 2:00 p.m. a 5:30 p.m. Te invitamos a visitarlo y embarcarte en un viaje al pasado que te llenará de conocimiento y te conectará con las raíces de nuestra historia.
        </Typography>

      </Grid>

      <Grid container justifyContent="center" component="section">

        <Card sx={{ width: "80vw" }}>
          <CardMedia
            component="img"
            alt="Museo desde otra perspectiva"
            image={img8}
          />
        </Card>

      </Grid>
    </>
  );
};
