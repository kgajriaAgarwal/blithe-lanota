import { Box, Typography } from '@mui/material';
import react, { useEffect, useState } from 'react';
import { showErrorToast } from '../../Helpers/Common/Utils';
import { getUserProfile } from '../../Helpers/Services/actions';

const User = () => {

    const [ profileData , setProfileData] = useState({});

    useEffect(() => {
        getUserProfile()
          .then((res) => {
            if (res.status === 200 || res.status === 201) {
              setProfileData(res.data.user);
            } else {
              if(authData){
                showErrorToast("Unexpected error.Please try again later.")
              }else{
                showErrorToast("Kindly login first !!")
              }
            }
          })
          .catch((error) => {
            showErrorToast("Unexpected error.Please try again later.")
          });
      }, []);

    return(
        <Box>
            <Typography variant="h6" sx={{ color: "secondary" }} mt={2}>
              My profile
            </Typography>
        </Box>
    );
}

export default User;