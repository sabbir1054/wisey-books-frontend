/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import Pagination from "@mui/material/Pagination";
interface IProps {
  totalPages: number;
  currentPage: number;
  onPageChange: Function;
}

const CustomPagination = ({
  totalPages,
  currentPage,
  onPageChange,
}: IProps) => {
  const handlePageChange = (event: any, newPage: number) => {
    onPageChange(newPage);
  };

  return (
    <Pagination
      count={totalPages}
      page={currentPage}
      onChange={handlePageChange}
      color="primary"
    />
  );
};

export default CustomPagination;
