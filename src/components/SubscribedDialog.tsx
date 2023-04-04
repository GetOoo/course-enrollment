import { Button, Dialog, DialogActions, DialogTitle, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";

export const SubscribedDialog = (props: any) => {

  const {onClose, open, data} = props;

  return (
    <Dialog open={open} onClose={onClose} >
      <DialogTitle>Payment</DialogTitle>
      <Table sx={{ width: 600}}>
        <TableHead>
          <TableRow>
            <TableCell>Course</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row: any) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align='right'>
                <Button>
                  delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button autoFocus onClick={onClose}>Submit</Button>
      </DialogActions>
    </Dialog>
  )
}
