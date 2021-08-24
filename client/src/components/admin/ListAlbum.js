import React ,{useState,useEffect} from 'react';
import axios from 'axios';
import {albumURL} from '../../constant';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const ListAlbum = ()=>{
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);
    const [data,setData] = useState([]);

    useEffect(()=>{
        setLoading(true);
        axios
            .get(albumURL)
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
                <StyledTableCell>Album Name</StyledTableCell>
                <StyledTableCell >Album ID</StyledTableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((row) => (
                <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                    {row.name}
                    </StyledTableCell>
                    <StyledTableCell >{row.albumId}</StyledTableCell>
                </StyledTableRow>
                ))}
            </TableBody>
            </Table>
        </TableContainer>
    </div>
    )
}

export default ListAlbum