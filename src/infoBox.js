import {Card, CardContent, Typography} from '@material-ui/core';
import React from 'react'

function infoBox({title, cases, total}) {
    return (
        <Card>
           <CardContent>
               {/* title */}
               <Typography className='infoBox__title' className='textSecondary'>
                   {title}
               </Typography>
               {/* number of cases */}
                    <h2 className='infoBox__cases'>{cases}</h2>
               {/* total */}
               <Typography  className='infoBox__total' className='textSecondary'>
                   {total} Total
               </Typography>
           </CardContent>
        </Card>
    )
}

export default infoBox
