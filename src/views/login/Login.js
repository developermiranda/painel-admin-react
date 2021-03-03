import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { green } from "@material-ui/core/colors";

const ColorButton = withStyles((theme) => ({
  root: {
    color: "#fff",
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700],
    },
  },
}))(Button);

export class Login extends Component {
  render() {
    return (
      <div>
        <Container component="main" maxWidth="xs">
          <div className="mt3 mt-md-5 ">
            <div className="text-center">
              <img src="logo.svg" Width="120px" alt="C4t Pro" />
              <Typography
                className="mt-3 font-weight-light"
                component="h1"
                variant="h6"
              >
                Criando uma Aplicação com React e Laravel
              </Typography>
            </div>
            <div className="mt-4">
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="E-mail"
                name="username"
                type="email"
              />

              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="password"
                label="Senha"
                name="password"
                type="password"
              />

              <Button
                type="button"
                variant="contained"
                fullWidth
                color="primary"
                size="large"
                className="mb-3 mb-md-4 mt-4"
              >
                Entrar
              </Button>

              <Link href="/register">
                <ColorButton
                  type="button"
                  variant="contained"
                  fullWidth
                  color="primary"
                  size="large"
                  className="mb-3 mb-md-4 mt-4"
                >
                  Cadastrar
                </ColorButton>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
