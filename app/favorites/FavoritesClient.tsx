'use client';

import React from 'react';

import { SafeListing, SafeUser } from '../types';
import Container from '../components/Container';
import Heading from '../components/Heading';

interface FavoritesClientProps {
  listings: SafeListing[];
  currentUser: SafeUser | null;
}

const FavoritesClient: React.FC<FavoritesClientProps> = ({
  currentUser,
  listings,
}) => {
  return (
    <Container>
      <Heading title="Favorites" subTitle="Your favorite listings" />
    </Container>
  );
};

export default FavoritesClient;
