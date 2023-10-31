import React from 'react'
import axios from 'axios'
import {payload} from '@/app/modals/ModalContactUs'

/*const Subscription = async (content, event) => {

  const apiKey =  process.env.API_KEY;
  const listId =  process.env.LIST_ID;


  try {


    const { data } = await axios.post(`https://us6.api.mailchimp.com/3.0/lists/${listId}/members`, `${payload}`, {
            headers: {
                Authorization: `Basic ${apiKey}`,
            }
        });

        return {
          statusCode: 200,
          body: JSON.stringify(data),
      }
      
} catch (error) {
    console.log(error);
    return {
        statusCode: 500,
        body: JSON.stringify(error),
    }
}
};*/

export  default    Subscription 
