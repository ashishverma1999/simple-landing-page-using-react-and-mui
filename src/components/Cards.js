import React from 'react'
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography, styled, Checkbox } from '@mui/material'

import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { red } from '@mui/material/colors';
import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';

const Cards = () => {

  const StyledBox = styled(Box)({
    display: "flex",
    justifyContent: 'center'

  })
 


  return (
    <StyledBox bgcolor='#EEEEEE' flex={6} sx={{ padding: { xs: 1, sm: 3 } }}>
      <Card sx={{ maxWidth: { xs: '100%', sm: '85%' } }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Explore more Live more!"
          subheader="Breath Pure"
        />
        <CardMedia
          component="img"
          // height="60%"
          image="https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325466/man-walking-dog.jpg"
          alt="Nature picture"
        />
        
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          "Fresh air is as good for the mind as for the body. Nature always seems trying to talk to us as if she had some great secret to tell. And so she has." 
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: red[500] }} />} />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>

        </CardActions>

      </Card>
    </StyledBox >
  )
}

export default Cards