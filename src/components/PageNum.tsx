import { Pagination, Stack } from "@mui/material";

export const PageNum = (prop: any) => {
  const handleChange = async (event: React.ChangeEvent<unknown>, value: number) => {
    prop.pageChangeHandler(value);
  };
  return (
    <Stack spacing={ 2 }>
      <Pagination count={ Math.ceil(prop.totalCourse / 3) } siblingCount={ 1 } boundaryCount={ 1 } shape="rounded" color='secondary' showFirstButton showLastButton onChange={ handleChange } />
    </Stack>
  );
};
