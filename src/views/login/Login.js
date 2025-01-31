import React, { Component } from "react";
import { connect } from "react-redux";
import { login, changeValue } from "../../store/actions/auth.action";
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
  login = () => {
    const { credentials } = this.props;
    this.props.login(credentials).then(() => {});
  };

  render() {
    return (
      <div>
        <Container component="main" maxWidth="xs">
          <div className="mt3 mt-md-5 ">
            <div className="text-center">
              <img src="logo.svg" width="120px" alt="C4t Pro" />
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
                value={this.props.credentials.username}
                onChange={(text) =>
                  this.props.changeValue({ username: text.target.value })
                }
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
                value={this.props.credentials.password}
                onChange={(text) =>
                  this.props.changeValue({ password: text.target.value })
                }
              />

              <Button
                type="button"
                variant="contained"
                fullWidth
                color="primary"
                size="large"
                className="mb-3 mb-md-4 mt-4"
                onClick={() => this.login}
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

const mapStateToProps = (state) => ({
  credentials: state.authReducer.credentials,
});

const mapDispatchToProps = (dispatch) => ({
  login: (credentials) => dispatch(login(credentials)),
  changeValue: (value) => dispatch(changeValue(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
