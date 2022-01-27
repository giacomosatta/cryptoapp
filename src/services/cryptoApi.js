import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '929fc66e1dmshdc7c7acf7797329p1d759bjsn5d83e38f6636'

}

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) =>({url,headers:cryptoApiHeaders})
 
export const cryptoApi = createApi({
    reducerPath:'creyptoApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder) => ({
        getCryptos: builder.query({
            query:(count) => createRequest(`/coins?limit=${count}`)
        })
    })
});

export const {
    useGetCryptosQuery,
} = cryptoApi;