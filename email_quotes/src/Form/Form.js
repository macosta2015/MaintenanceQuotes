import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "400px",
    margin: "0 auto",
    padding: theme.spacing(2),
    backgroundColor: "#f5f5f5",
    borderRadius: "4px",
  },
  input: {
    marginBottom: theme.spacing(2),
  },
  submitButton: {
    alignSelf: "flex-end",
  },
}));

export default function Multiple() {
  const classes = useStyles();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`
    );
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit} style={{ marginTop: '2%' }}>
      <TextField
        className={classes.input}
        label="Name"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      <TextField
        className={classes.input}
        label="Email"
        id="email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
      />

      <TextField
        className={classes.input}
        label="Message"
        id="message"
        name="message"
        multiline
        rows={4}
        value={formData.message}
        onChange={handleChange}
      />

      <Button
        className={classes.submitButton}
        variant="contained"
        color="primary"
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
}
