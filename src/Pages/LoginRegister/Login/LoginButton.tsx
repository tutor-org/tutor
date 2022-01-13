import { Key } from "@mui/icons-material";
import AppleIcon from "@mui/icons-material/Apple";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React from "react";
import useAuth from '../../../Hooks/useAuth';

const LoginButton = () => {
  const { setUsingEmail } = useAuth();

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          "& > *": {
            mt: 3,
          },
        }}
      >
        <Box
          sx={{
              display: "inline-flex",
              flexDirection:"column",
              gap:"1rem",
          }}
        >
          <Button
            key="google"
            startIcon={<GoogleIcon sx={{fontSize:40}} />}
            color="error"
            variant="outlined"
            sx={{fontSize:"1.2rem"}}
          >
            {" "}
            Login with Google
          </Button>
          <Button
            key="facebook"
            startIcon={<FacebookIcon sx={{fontSize:40}} />}
            color="info"
            variant="outlined"
            sx={{fontSize:"1.2rem"}}
          >
            {" "}
            Login with FaceBook
          </Button>
          <Button
            key="apple"
            startIcon={<AppleIcon sx={{fontSize:40}} />}
            color="inherit"
            variant="outlined"
            sx={{fontSize:"1.2rem"}}
          >
            {" "}
            Login with Apple
          </Button>
          <Button
            key="email"
            startIcon={<Key sx={{fontSize:40}} />}
            color="inherit"
            variant="outlined"
            sx={{fontSize:"1.2rem"}}
            onClick={()=>setUsingEmail(true)}
          >
            {" "}
            Login with Email
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default LoginButton;
