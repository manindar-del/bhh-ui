import { commonTableProps } from '@/interface/commonAll.interfaces';
import { CommomTableWrapper } from '@/styles/StyledComponents/CommonTableWrapper';
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export default function CommonTable({ children, tableHeadRow }: commonTableProps) {
    return (
        <CommomTableWrapper >
            <TableContainer component={Paper} className='commmon_table_wrapper'>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {
                                tableHeadRow?.map((item, index) => (
                                    // eslint-disable-next-line react/no-array-index-key
                                    <TableCell key={index}>
                                        {item.text}
                                    </TableCell>
                                ))
                            }


                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {children}
                    </TableBody>
                </Table>
            </TableContainer>
        </CommomTableWrapper>
    )
}
