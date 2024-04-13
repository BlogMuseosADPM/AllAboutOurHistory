import { Grid, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import {WhatsAppIcon, GitHubIcon, EmailIcon} from "@mui/icons-material";

export const Footer = () => {
  return (
    <footer style={{width: "100vw"}}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignContent="center"
        bgcolor="moccasin"
        marginTop={5}
        paddingTop={3}
      >
        <Typography variant="subtitle1" color="initial">
          Desarrollado por:{" "}
          <a
            href="https://github.com/AlbertoDPM30"
            target="_blank"
            style={{ color: "initial", textDecoration: "none" }}
          >
            <strong>Alberto Pérez </strong>
          </a>
          © 2024. Todos los derechos reservados.
        </Typography>
        <Grid spacing={0} textAlign="center" wrap="wrap">
          <a
            href="https://github.com/AlbertoDPM30"
            target="_blank"
            style={{ color: "#0a0a0a" }}
          >
            <GitHubIcon sx={{ fontSize: "5rem", padding: "15px" }} />
          </a>
          <a
            href="mailto:albertodpm@gmail.com"
            target="_blank"
            style={{ color: "#ab3122" }}
          >
            <EmailIcon sx={{ fontSize: "5rem", padding: "15px" }} />
          </a>
          <a
            href="https://wa.me/5804244275255"
            target="_blank"
            style={{ color: "#11ac77" }}
          >
            <WhatsAppIcon sx={{ fontSize: "5rem", padding: "15px" }} />
          </a>
        </Grid>
      </Grid>
    </footer>
  );
};
