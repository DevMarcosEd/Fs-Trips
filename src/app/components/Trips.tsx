import { prisma } from '@/lib/Prisma'
import React, { useState } from 'react'

const getTrips = async () => {
  const trips = await prisma.trip.findMany({});

  return trips;
}

const Trips = async () => {

  const response = await fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json())

  return (
    <>
      {response.map((i: any) =>
        <p key={i.id}>{i.title}</p>
      )}
    </>
  )
}

export default Trips