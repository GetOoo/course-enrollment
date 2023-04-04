import { Box, Paper } from '@mui/material'
import { CourseCard } from './CourseCard'
import { PageNum } from './PageNum'

export const PaperContainer = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '80vh',
        backgroundColor: 'yellowgreen',
        alignItems: 'center'
      }}
    >
      <Paper 
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '5vh',
          marginBottom: '2vh',
          width: '0.9',
          height: '0.8',
          borderRadius: '30px',
        }}
        elevation={20} 
      >
        
        <CourseCard />
      </Paper>
      <PageNum />
    </Box>
  )
}
