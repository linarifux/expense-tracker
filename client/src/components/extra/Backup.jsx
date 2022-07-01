import React from 'react'

const Backup = ({isError,isFetching, isLoading}) => {
  if(isError){
    return <>Something Went Wrong</>
  }
  else if(isFetching) return <>Data Fetching</>
  else if(isLoading) return <>Data Loading</>
}

export default Backup