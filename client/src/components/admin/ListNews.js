import React ,{useState,useEffect} from 'react';
import axios from 'axios';
import {newsListURL} from '../../constant';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';


const ListNews = ()=>{
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);
    const [data,setData] = useState([]);

    useEffect(()=>{
        setLoading(true);
        axios
            .get(newsListURL)
            .then(res=>{
                setData(res.data);
                setLoading(false);
            })
            .catch(err=>{
                setError(err);
                setLoading(false);
            });
        },[]);
    const StyledTableCell = withStyles((theme) => ({
        head: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        body: {
            fontSize: 14,
        },
        }))(TableCell);

    const StyledTableRow = withStyles((theme) => ({
        root: {
            '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
            },
        },
    }))(TableRow);
    return (
    <div className="container">
        <TableContainer component={Paper}>
            <Table  aria-label="customized table">
            <TableHead>
                <TableRow>
                <StyledTableCell>News title</StyledTableCell>
                <StyledTableCell align="center">Body</StyledTableCell>
                <StyledTableCell align="right">Creator</StyledTableCell>
                <StyledTableCell align="right">Source</StyledTableCell>
                <StyledTableCell align="right">Image</StyledTableCell>
                <StyledTableCell ></StyledTableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((row) => (
                <StyledTableRow key={row.title}>
                    <StyledTableCell component="th" scope="row">
                    {row.title}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.body}</StyledTableCell>
                    <StyledTableCell align="right">{row.creator}</StyledTableCell>
                    <StyledTableCell align="right">{row.source}</StyledTableCell>
                    <StyledTableCell align="right">{row.image}</StyledTableCell>
                    <StyledTableCell align="right"><DeleteIcon/></StyledTableCell>
                </StyledTableRow>
                ))}
            </TableBody>
            </Table>
        </TableContainer>
    </div>
  );
}

export default ListNews;