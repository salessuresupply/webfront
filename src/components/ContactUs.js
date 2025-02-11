import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Grid, Paper, Container } from '@mui/material';
// import Footer from './Footer';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    mobile: '', // Add mobile number field here
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  // const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(formData);
  //   setSubmitted(true);
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const response = await fetch('https://suretechnology.in/api/mail/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send the message. Please try again later.');
      }

      setSubmitted(true);
    } catch (err) {
      setError(err.message || 'An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Box sx={{ minHeight: '100vh', padding: '20px' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            {/* Tagline Section */}
            <Grid item xs={12} md={6}>
              <Box sx={{ padding: '50px', color: '#3f51b5' }}>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 'bold',
                    fontSize: { xs: '24px', sm: '30px', md: '42px' },
                    lineHeight: '1.3',
                    textAlign: 'left',
                    color: '#3f51b5',
                    fontFamily: 'Roboto, sans-serif',
                    letterSpacing: '0.5px',
                    marginBottom: '20px',
                  }}
                >
                  Get in touch with us today to optimize your business!
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 'bold',
                    fontSize: { xs: '18px', sm: '20px', md: '24px' },
                    lineHeight: '1.4',
                    color: '#2c3e50',
                    marginBottom: '15px',
                    fontFamily: 'Roboto, sans-serif',
                    fontStyle: 'italic',
                  }}
                >
                  Unlock tailored supply chain solutions designed for your success.
                </Typography>

                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 'bold',
                    fontSize: { xs: '18px', sm: '20px', md: '24px' },
                    lineHeight: '1.2',
                    color: '#007BFF',
                    fontFamily: 'Roboto, sans-serif',
                    fontStyle: 'italic',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                  }}
                >
                  <a href="mailto:sales@suresupply.in" style={{ color: '#007BFF', textDecoration: 'none' }}>
                    sales@suresupply.in
                  </a>
                  <a href="tel:+918780952559" style={{ color: '#007BFF', textDecoration: 'none' }}>
                    +91-8780952559
                  </a>
                </Typography>
              </Box>
            </Grid>

            {/* Form Section */}
            <Grid item xs={12} md={6}>
              <Paper
                elevation={3}
                sx={{
                  padding: '30px',
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  borderRadius: '8px',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <Typography variant="h4" gutterBottom>
                  Contact Us
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: '20px' }}>
                  Fill out the form below and we’ll get back to you as soon as possible.
                </Typography>
                {submitted ? (
                  <Typography variant="h6" color="green">
                    Thank you for reaching out! We’ll get back to you soon.
                  </Typography>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Your Name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          variant="outlined"
                          sx={{ backgroundColor: '#fff' }}
                        />
                      </Grid>
                      {/* email */} 
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Your mobile"
                          name="mobile"
                          type="mobile"
                          value={formData.mobile}
                          onChange={handleChange}
                          required
                          variant="outlined"
                          sx={{ backgroundColor: '#fff' }}
                        />
                      </Grid>
                      {/* email */} 

                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Company Name"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          variant="outlined"
                          sx={{ backgroundColor: '#fff' }}
                        />
                      </Grid>

                {/* Mobile Number Field */}
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Your Email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          variant="outlined"
                          sx={{ backgroundColor: '#fff' }}
                        />
                      </Grid>
                {/* Mobile Number Field */}

                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          multiline
                          rows={4}
                          variant="outlined"
                          sx={{ backgroundColor: '#fff' }}
                        />
                      </Grid>

                      

                      <Grid item xs={12} align="center">
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                          sx={{ padding: '10px 20px' }}
                        >
                          Submit
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                )}
                {error && (
                  <Typography variant="body2" color="red" sx={{ marginTop: '10px' }}>
                    {error}
                  </Typography>
                )}
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export default ContactUs;
