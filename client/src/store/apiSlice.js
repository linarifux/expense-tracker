import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const baseURI = 'http://localhost:8080'

export const apiSLice = createApi({
    baseQuery: fetchBaseQuery({baseUrl: baseURI}),
    endpoints: builder => ({
        getCategories: builder.query({
            // get to the baseURI/....
            query: () => '/api/categories',
            providesTags: ['categories']
        }),
        // get labels
        getLabels: builder.query({
            query: () => '/api/labels',
            providesTags: ['transaction']
        }),

        // add new transaction
        addTransaction: builder.mutation({
            query: (initialTransaction) => ({
                url: '/api/transaction',
                method: 'POST',
                body: initialTransaction
            }),
            invalidatesTags: ['transaction']
        }),

        // delete record
        deleteTransaction: builder.mutation({
            query: recordId => ({
                url: `/api/transaction/${recordId}`,
                method: 'DELETE',
                boyd: recordId
            }),
            invalidatesTags: ['transaction']
        })
    })
})


export default apiSLice