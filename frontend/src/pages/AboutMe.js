import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Avatar,
  Divider,
  Box,
  Paper,
  Card,
  CardContent,
  CardMedia,
  LinearProgress,
} from '@mui/material';
import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball';
import SnowboardingIcon from '@mui/icons-material/Snowboarding';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const AboutMe = () => {
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
          Food Enjoyer | Person who plays Sports | Cosmere Nerd
        </Typography>
      </Box>
      <Divider sx={{ my: 2 }} />

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
                <strong>10/10 Fries:</strong> Which were still crispy and crunchy after being soaked in gravy for like 15 mins. How? <br />
                <strong>10/10 Gravy:</strong> Very meaty and flavorful, could turn any dish into a 10/10 <br />
                <strong>08/10 Cheese Curds:</strong> My dude, I loved the curds, I don't know why this isn't 10/10 <br /> 
                <strong>10/10 Chicken:</strong> If they sold just the chicken this meal would've still been 10/10 <br /> <br />
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
            <Grid item xs={12} sm={4} sx={{ display: 'flex', flexDirection: 'column' }}>
              <Card sx={{ height: '100%' }}>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://cloudfront-us-east-1.images.arcpublishing.com/pmn/WQS5BGVCHZATLDQOQ6XOKTGLAM.jpg"
                  alt="Korean BBQ"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6">2. Korean BBQ</Typography>
                  <Typography variant="body2" color="text.secondary">
                    KBBQ (AYCEKBBQ) is about friends and family. It's an experience and more fun with the people you love around you. Also bonus points to Gaja for having a cool robot that delivers the meat to your table!
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            {/* California Burrito */}
            <Grid item xs={12} sm={4} sx={{ display: 'flex', flexDirection: 'column' }}>
              <Card sx={{ height: '100%' }}>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://sliceofjess.com/wp-content/uploads/2022/01/IMG_7177.jpg"
                  alt="California Burrito"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6">3. California Burrito</Typography>
                  <Typography variant="body2" color="text.secondary">
                    The burrito has fries inside of it.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            {/* Sushi */}
            <Grid item xs={12} sm={4} sx={{ display: 'flex', flexDirection: 'column' }}>
              <Card sx={{ height: '100%' }}>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://fox5sandiego.com/wp-content/uploads/sites/15/2019/07/sushi.jpg?w=1280"
                  alt="Sushi"
                />
                <CardContent sx={{ flexGrow: 1 }}>
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

      {/* Athletic Pursuits Section */}
      <Typography variant="h5" gutterBottom>
        Athletic Endeavors
      </Typography>
      <Grid container spacing={4} sx={{ mb: 4 }}>
        {/* Volleyball */}
        <Grid item xs={12} sm={6}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardMedia
              component="img"
              height="200"
              image="https://media.istockphoto.com/id/1318409220/vector/volleyball-player-serving-ball-isolated-vector-silhouette-side-view.jpg?s=612x612&w=0&k=20&c=rdiQcdOvoKnbDeWkfXlYLW7eqvK7C-6RqydN0IsrPoQ="
              alt="Volleyball"
            />
            <CardContent sx={{ flexGrow: 1 }}>
              {/* Header with Icon and Sport Name */}
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <SportsVolleyballIcon color="secondary" sx={{ mr: 1 }} />
                <Typography variant="h6">Beach Volleyball</Typography>
              </Box>
              <Divider sx={{ mb: 1.5 }} />

              <Typography variant="subtitle1" gutterBottom>
                Prestiege: 2nd Place @ Volo Doubles Tournament
              </Typography>

              {/* Skills */}
              <Divider sx={{ mb: 1.5 }} />
              <Box sx={{ mb: 1 }}>
                <Typography variant="body2">Setting</Typography>
                <LinearProgress
                  variant="determinate"
                  value={70}
                  color="secondary" // Use the theme's secondary color
                  sx={{ height: 10, borderRadius: 5 }}
                />
              </Box>
              <Box sx={{ mb: 1 }}>
                <Typography variant="body2">Serving</Typography>
                <LinearProgress
                  variant="determinate"
                  value={80}
                  color="secondary"
                  sx={{ height: 10, borderRadius: 5 }}
                />
              </Box>
              <Box sx={{ mb: 1 }}>
                <Typography variant="body2">Spiking</Typography>
                <LinearProgress
                  variant="determinate"
                  value={60}
                  color="secondary"
                  sx={{ height: 10, borderRadius: 5 }}
                />
              </Box>
              <Box sx={{ mb: 1 }}>
                <Typography variant="body2">Blocking</Typography>
                <LinearProgress
                  variant="determinate"
                  value={80}
                  color="secondary"
                  sx={{ height: 10, borderRadius: 5 }}
                />
              </Box>
              <Box sx={{ mb: 1 }}>
                <Typography variant="body2">Receiving</Typography>
                <LinearProgress
                  variant="determinate"
                  value={50}
                  color="secondary"
                  sx={{ height: 10, borderRadius: 5 }}
                />
              </Box>
              <Box sx={{ mb: 1 }}>
                <Typography variant="body2">Throwing myself after the ball when all hope is lost</Typography>
                <LinearProgress
                  variant="determinate"
                  value={95}
                  color="secondary"
                  sx={{ height: 10, borderRadius: 5 }}
                />
              </Box>

              {/* Best Play */}
              <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                Locations: <br />
                <strong style={{ textDecoration: 'underline' }}>West Coast:</strong> Ocean Beach, Harry West Gym
                <br />
                <strong style={{ textDecoration: 'underline' }}>East Coast:</strong> Revolutions Bowling
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Snowboarding */}
        <Grid item xs={12} sm={6}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardMedia
              component="img"
              height="200"
              image="https://t3.ftcdn.net/jpg/01/81/24/80/360_F_181248077_4XDBOplAeSlKlCM7CPcr5D27t6HrGFkA.jpg"
              alt="Snowboarding"
            />
            <CardContent sx={{ flexGrow: 1 }}>
              {/* Header with Icon and Sport Name */}
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <SnowboardingIcon color="secondary" sx={{ mr: 1 }} />
                <Typography variant="h6">Snowboarding</Typography>
              </Box>
              <Divider sx={{ mb: 1.5 }} />

              <Typography variant="subtitle1" gutterBottom>
                Prestiege: I once did a big jump and didn't die
              </Typography>
              <Divider sx={{ mb: 1.5 }} />

              <Box sx={{ mb: 1 }}>
                <Typography variant="body2">Speed</Typography>
                <LinearProgress
                  variant="determinate"
                  value={70}
                  color="secondary" // Use the theme's secondary color
                  sx={{ height: 10, borderRadius: 5 }}
                />
              </Box>
              <Box sx={{ mb: 1 }}>
                <Typography variant="body2">Jumps</Typography>
                <LinearProgress
                  variant="determinate"
                  value={60}
                  color="secondary"
                  sx={{ height: 10, borderRadius: 5 }}
                />
              </Box>
              <Box sx={{ mb: 1 }}>
                <Typography variant="body2">Tricks</Typography>
                <LinearProgress
                  variant="determinate"
                  value={15}
                  color="secondary"
                  sx={{ height: 10, borderRadius: 5 }}
                />
              </Box>
              <Box sx={{ mb: 1 }}>
                <Typography variant="body2">Carving</Typography>
                <LinearProgress
                  variant="determinate"
                  value={75}
                  color="secondary"
                  sx={{ height: 10, borderRadius: 5 }}
                />
              </Box>
              <Box sx={{ mb: 1 }}>
                <Typography variant="body2">Endurance</Typography>
                <LinearProgress
                  variant="determinate"
                  value={85}
                  color="secondary"
                  sx={{ height: 10, borderRadius: 5 }}
                />
              </Box>
              <Box sx={{ mb: 1 }}>
                <Typography variant="body2">Waking up at 4AM to be on the first chair</Typography>
                <LinearProgress
                  variant="determinate"
                  value={95}
                  color="secondary"
                  sx={{ height: 10, borderRadius: 5 }}
                />
              </Box>

              {/* Signature Trick */}
              <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                Locations:
                <br />
                <strong style={{ textDecoration: 'underline' }}>West Coast / Western U.S. & Canada:</strong> Whistler Blackcomb, Mammoth Mountain, Big Bear, Snow Valley, Snow Summit, Stevens Pass
                <br />
                <strong style={{ textDecoration: 'underline' }}>Rocky Mountains / Colorado:</strong> Breckenridge, Vail, Keystone
                <br />
                <strong style={{ textDecoration: 'underline' }}>Northeast U.S.:</strong> Stowe, Mount Snow, Okemo, Hunter Mountain, Crotched Mountain
                <br />
                <strong style={{ textDecoration: 'underline' }}>Southern New England (Connecticut):</strong> Mount Southington, Ski Sundown, Mohawk Mountain
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Divider sx={{ my: 4 }} />

      {/* Favorite Quotes Section */}
      <Typography variant="h5" gutterBottom>
        Words to live by! (Some more out of context than others)
      </Typography>
      <Grid container spacing={2} sx={{ mb: 4 }}>
        {[
          {
            text: 'Success is not final, failure is not fatal: It is the courage to continue that counts.',
            author: 'Winston Churchill',
          },
          {
            text: "The most important step a man can take is the next one.",
            author: 'Dalinar Kholin',
          },
          {
            text: "We don't need the memories.",
            author: 'Inarizaki Team Banner',
          },
          {
            text: "A thing isn't beautiful because it lasts.",
            author: 'Vision',
          },
        ].map((quote, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                position: 'relative',
                height: '100%',
              }}
            >
              <FormatQuoteIcon
                sx={{
                  fontSize: 40,
                  opacity: 0.1,
                  position: 'absolute',
                  top: 8,
                  left: 8,
                }}
              />
              <Typography variant="h6" sx={{ fontStyle: 'italic', mt: 2 }}>
                "{quote.text}"
              </Typography>
              <Typography variant="subtitle1" align="right" sx={{ mt: 2 }}>
                - {quote.author}
              </Typography>
            </Paper>
          </Grid>
        ))}
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