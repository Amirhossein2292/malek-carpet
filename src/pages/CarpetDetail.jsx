import { Box, Container, Link, Typography } from '@mui/material'
import { Image} from 'antd'
import { useParams } from 'react-router-dom'
import { carpets } from '../datas/data'
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import React from 'react'

export default function CarpetDetail() {

    const {carpetId} = useParams();
    const thisCarpet = carpets.find(prod => prod.id === carpetId)
    
  return (
    <Container sx={{ widht: '900px', marginTop: '4rem'}} dir="rtl">
            <Box sx={{display: 'flex', justifyContent: 'space-between'}} >
                <Box  >
                    <Typography variant="h3" component="h1" sx={{ marginBottom: '3rem'}} >
                        {thisCarpet.title}
                    </Typography>
                    <Typography variant="body2" component="p" sx={{ marginBottom: '0.75rem'}}>
                        وضعیت محصول: موجود
                    </Typography>
                    <Typography variant="body2" component="p" sx={{ marginBottom: '0.75rem'}}>
                        کد محصول: {thisCarpet.description}
                    </Typography>
                    <Typography variant="body2" component="p" sx={{ marginBottom: '0.75rem'}}>
                        طرح : {thisCarpet.title}
                    </Typography>
                    <Typography variant="body2" component="p" sx={{ marginBottom: '0.75rem'}}>
                        سایز : {thisCarpet.size}
                    </Typography>
                    <Typography variant="body2" component="p" sx={{ marginBottom: '0.75rem'}}>
                        اصالت : {thisCarpet.from}
                    </Typography>
                    <Typography variant="body2" component="p" sx={{ marginBottom: '0.75rem'}}>
                        قدمت : {thisCarpet.ghedmat}
                    </Typography>
                    <Typography variant="body2" component="p" sx={{ marginBottom: '0.75rem'}}>
                        مواد : {thisCarpet.material}
                    </Typography>
                    <Typography variant="body2" component="p" sx={{ marginBottom: '0.75rem'}}>
                        رنگ حاشیه : {thisCarpet.colorHashie}
                    </Typography>
                    <Typography variant="body2" component="p" sx={{ marginBottom: '0.75rem'}}>
                        رنگ متن : {thisCarpet.colorMatn}
                    </Typography>

                    <Box sx={{ display: 'flex', marginTop: '1.75rem', alignItems: 'center'}} >
                        <Typography variant="h6" component="p">سفارش</Typography>
                        <Link 
                            sx={{
                                ":hover": {
                                    transform: 'translateY(-2px)'
                                },
                                color: '#cfae78',
                                marginRight: '2rem'
                            }}
                            href="https://google.com"
                        >
                            <InstagramIcon />
                        </Link>
                        <Link 
                            sx={{
                                ":hover": {
                                    transform: 'translateY(-2px)'
                                },
                                color: '#cfae78',
                                marginRight: '2rem'
                            }}
                            href="https://google.com"
                        >
                            <WhatsAppIcon />
                        </Link>
                        <Link 
                            sx={{
                                ":hover": {
                                    transform: 'translateY(-2px)'
                                },
                                color: '#cfae78',
                                marginRight: '2rem'
                            }}
                            href="https://google.com"
                        >
                            <SmartphoneIcon />
                        </Link>
                    </Box>
                    
                </Box>
                <img src={thisCarpet.image} alt={thisCarpet.title} height={440} />

            </Box>
    </Container>
  )
}
