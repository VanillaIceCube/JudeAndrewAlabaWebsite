import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Paper,
  Card,
  CardContent,
  CardMedia,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Tabs,
  Tab,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball';
import SnowboardingIcon from '@mui/icons-material/Snowboarding';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';

const AboutMe = () => {
  const [hobbyTab, setHobbyTab] = React.useState(0);

  const handleHobbyTabChange = (event, newValue) => {
    setHobbyTab(newValue);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      {/* Header Section */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Avatar
          alt="Jude Andrew"
          src="https://media.licdn.com/dms/image/v2/D5603AQHQ4u6GR83ZSA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1706633212465?e=1732752000&v=beta&t=KerGkY1QnTTCtGJ4ZTVsqmPyzm2j7WVBd1d5pXrMsNU" // Placeholder
          sx={{ width: 180, height: 180, margin: '0 auto' }}
        />
        <Typography variant="h4" sx={{ mt: 2 }}>
          Jude or Andrew
        </Typography>
        <Typography variant="subtitle2" color="text.secondary">
          or whatever you'd like to call me idk
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" sx={{ mt: 2 }}>
          Food Enjoyer | Aspiring Volleyballer | Cosmere Fanatic
        </Typography>
      </Box>
      <Divider sx={{ my: 4 }} />

      {/* Favorite Foods Section */}
      <Typography variant="h5" gutterBottom>
        Favorite Foods
      </Typography>
      <Grid container spacing={2} sx={{ mb: 4 }}>
        {/* #1 Favorite Food - Poutine */}
        <Grid item xs={12}>
          <Card sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardMedia
              component="img"
              height="300"
              image="https://www.tasteatlas.com/images/dishrestaurants/6082b1ae391f46348cd7b401a2cf5e66.jpg?mw=1300"
              alt="Poutine"
            />
            <CardContent>
              <Typography variant="h4">1. Poutine</Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                Portuguese Chicken Poutine from Ma Poule Mouillée, Montreal <br />
                Hands down, the best thing I've ever put into my mouth dear god <br /><br />
                10/10 Fries which were still crispy and crunchy after being soaked in gravy for like 15 mins. How? <br />
                10/10 Gravy, very meaty and flavorful, could turn any dish into a 10/10 <br />
                08/10 Cheese Curds, my dude, I loved the curds, I don't know why this isn't 10/10 <br /> 
                10/10 Chicken, If they sold just the chicken this meal would've still been 10/10 <br />
                I would kill a man to have some, please go and treat yourself <br />
              </Typography>
              {/* Google Maps Location */}
              <Box sx={{ mt: 2 }}>
                <Typography variant="subtitle1">Favorite Restaurant of all time:</Typography>
                <iframe
                  title="Favorite Poutine Restaurant"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.2503925127485!2d-73.5778308219005!3d45.52516657107503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91bcf7243787d%3A0xceb4fd14df745a86!2sMa%20Poule%20Mouill%C3%A9e!5e0!3m2!1sen!2sus!4v1727392029053!5m2!1sen!2sus" // Replace with your Google Maps embed URL
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Other Favorite Foods */}
        <Grid item xs={12}>
          <Grid container spacing={2}>
            {/* KBBQ */}
            <Grid item xs={12} sm={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://cloudfront-us-east-1.images.arcpublishing.com/pmn/WQS5BGVCHZATLDQOQ6XOKTGLAM.jpg"
                  alt="Korean BBQ"
                />
                <CardContent>
                  <Typography variant="h6">2. Korean BBQ</Typography>
                  <Typography variant="body2" color="text.secondary">
                    KBBQ (AYCEKBBQ) is about friends and family. It's an experience and more fun with the people you love around you. Also bonus points to Gaja for having a cool robot that delivers the meat to your table!
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            {/* California Burrito */}
            <Grid item xs={12} sm={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://sliceofjess.com/wp-content/uploads/2022/01/IMG_7177.jpg"
                  alt="California Burrito"
                />
                <CardContent>
                  <Typography variant="h6">3. California Burrito</Typography>
                  <Typography variant="body2" color="text.secondary">
                    The burrito has fries inside of it.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            {/* Sushi */}
            <Grid item xs={12} sm={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://fox5sandiego.com/wp-content/uploads/sites/15/2019/07/sushi.jpg?w=1280"
                  alt="Sushi"
                />
                <CardContent>
                  <Typography variant="h6">4. Sushi</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Jesus Christ I love a good roll. My fav basic rolls include salmon skin, otherwise I love eel.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Divider sx={{ my: 4 }} />

      {/* Footer */}
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} Jude or Andrew's Personal Website
        </Typography>
      </Box>
    </Container>
  );
};

export default AboutMe;