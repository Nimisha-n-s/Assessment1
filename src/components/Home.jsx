import {
  Button,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import React , { useEffect } from 'react'

const Home = () => {
  var [blog, setBlog] = React.useState([]);
  useEffect(() => {
    document.title = "Dashboard";
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setBlog(json));
  }, []);
  return (
    <>
    <br/>
    <br/>
    <br/>
    <br/>
      <Typography align="center" variant="h4">
        {" Blog "}
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell> Id</TableCell>
            <TableCell> Title </TableCell>
            <TableCell> Description </TableCell>
          </TableRow>
        </TableHead>
        {blog.map((value, index) => {
          return (
            <TableRow>
              <TableCell> {value.id} </TableCell>
              <TableCell> {value.title}</TableCell>
              <TableCell> {value.body}</TableCell>
            </TableRow>
          );
        })}

        <TableBody></TableBody>
        <Button></Button>
      </Table>
    </>
  );
}

export default Home
