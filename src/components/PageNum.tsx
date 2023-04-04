import { Pagination, Stack } from "@mui/material";

export const PageNum = () => {
  return (
    <Stack spacing={2}>
      <Pagination count={10} siblingCount={1} boundaryCount={1} shape="rounded" color='secondary' showFirstButton showLastButton />
    </Stack>
  );
};
