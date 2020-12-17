import {Card, CardContent, Typography} from '@material-ui/core';
import React from 'react'

function infoBox({title, cases, total}) {
    return (
        <Card>
           <CardContent>
               <Typography className='infoBox__title' color='textSecondary'>
                   {title}
               </Typography>
                    <h2 className='infoBox__cases'>{cases}</h2>
               <Typography  className='infoBox__total' color='textSecondary'>
                   {total} Total
               </Typography>
           </CardContent>
        </Card>
    )
}

export default infoBox
