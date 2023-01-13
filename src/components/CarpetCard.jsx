import { Grid, Typography, Tab } from '@mui/material'
import { Card, Image } from 'antd'
import React from 'react'
import { carpets } from '../datas/data'
import { createTheme, ThemeProvider } from '@mui/material'
import { Link } from 'react-router-dom'

const theme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: 'body3'
                    },
                    style: {
                        fontSize: 11,
                    }
                }
            ]
        }
    }
})
const { Meta } = Card;

export default function CarpetCard() {
  return (
    <div>
        <ThemeProvider theme={theme}>
        <Grid container spacing={{ xs: 2, md: 3}}>
            {carpets.map((carpet, index) => (
                <Grid item xs={6} md={3} key={index} dir="rtl">
                    <Card
                        hoverable
                        cover={<Image src={carpet.image} width={150} />}
                    >
                        <Tab label={carpet.title} component={Link} to={`/کلکسیون-فرش/${carpet.id}`} sx={{ fontSize: '1.5rem'}} />
                        <Typography variant='body2' component="p" marginTop={2}>
                            ابعاد: {carpet.size}
                        </Typography>
                        <Typography variant="body2" component="p" marginTop={2}>
                            کدمحصول: {carpet.description}
                        </Typography>
                    </Card>
                </Grid>
            ))}
        </Grid>
        </ThemeProvider>
    </div>
  )
}
