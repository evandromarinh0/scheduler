import { styled, Heading, Text } from '@ignite-ui/react'


  export const Container = styled('div', {
    display: 'flex',
    gap: '$20',
    alignItems: 'center',
    marginLeft: 'auto',
    maxWidth: 'calc(100vw - (100vw - 1160px) /2)',
    height: '100vh',
  })

  export const Hero = styled('div', {
    maxWidth: 480,
    padding: '0 $10',

    [`>${Heading}`]: {
      '@media(max-width: 600px)': {
        fontSize: '$6xl'
      }
    },

    [`>${Text}`]: {
      color: '$gray200',
    },
  })
  
  export const Preview = styled('div', {
    paddingRight: '$8',
    overflow: 'hidden',

    '@media(max-width: 600px)': {
      display: 'none'
    }
  })
