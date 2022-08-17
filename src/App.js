import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import React from "react";
import Settings from "./pages/Settings"
import FinalScreen from "./pages/FinalScreen"
import Questions from "./pages/Questions"
import { Container, Typography } from '@mui/material'
import { Box } from '@mui/system'

import './App.css';

function App() {
  return (


    <Router>

      <Container maxWidth="sm">
        <Box textAlign="center" mt={6}>
          <Routes>
            <Route path='/' element={<>
              <Typography varient="h1" fontSize={60} fontWeight="bold">Quiz App</Typography>
              <Settings />
            </>} />

            <Route path='/questions' element={<Questions />} />
            <Route path='/score' element={<FinalScreen />} />
          </Routes>
        </Box>
      </Container>
    </Router>


  );
}

export default App;
