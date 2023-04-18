import { NextResponse } from 'next/server';
import prisma from '@/app/libs/prismadb';
import getCurrentUser from '@/app/actions/getCurrentUser';

export async function POST(req: Request) {
  const currentUser = await getCurrentUser();
  if (!currentUser) return NextResponse.error();

  const body = await req.json();
  const {
    category,
    location,
    guestCount,
    roomCount,
    bathroomCount,
    imageSrc,
    price,
    title,
    description,
  } = body;

  Object.keys(body).forEach((key) => {
    if (!body[key]) {
      return NextResponse.error();
    }
  });

  const listings = await prisma.listing.create({
    data: {
      title,
      description,
      price: parseInt(price, 10),
      imageSrc,
      category,
      roomCount,
      bathroomCount,
      guestCount,
      locationValue: location.value,
      userId: currentUser.id,
    },
  });
  return NextResponse.json(listings);
}
