import { Typography, TextField, Button, Grid } from "@mui/material";
import Box from "@mui/material/Box";

import React from "react";
const Addlink = () => {
  var [Blogs, setBlogs] = React.useState({
    name: "",
    description: "",
    author: "",
  });
  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setBlogs({ ...Blogs, [name]: value });
  };

  const handleSubmit = async (e) => {
    console.log(
      `Name : ${Blogs.name} Description : ${Blogs.description} Author : ${Blogs.author}`
    );
    alert(`Blog Added Successfully`);
  };
  return (
    <Grid item>
      <br />
      <br />
      <Box
        sx={{
          my: 4,
          mx: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          {"ADD A BLOG"}
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Blog Name"
            name="name"
            autoComplete="name"
            onChange={handleOnchange}
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="description"
            label="Description"
            type="text"
            id="description"
            autoComplete="current-description"
            onChange={handleOnchange}
          ></TextField>
          <TextField
            margin="normal"
            required
            fullWidth
            name="author"
            label="Author"
            type="text"
            id="author"
            autoComplete="current-author"
            onChange={handleOnchange}
          ></TextField>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSubmit}
          >
            ADD
          </Button>
        </Box>
      </Box>
    </Grid>
  );
};

export default Addlink;
