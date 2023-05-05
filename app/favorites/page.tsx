import React from 'react';

import EmptyState from '../components/EmptyState';
import ClientOnly from '../components/ClientOnly';
import getCurrentUser from '../actions/getCurrentUser';
import getFavoritesListings from '../actions/getFavoritesListings';
import FavoritesClient from './FavoritesClient';
import ListingCard from '../components/listings/ListingCard';

const FavoritesPage = async () => {
  const currentUser = await getCurrentUser();
  const listings = await getFavoritesListings();
  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No favorites yet"
          subTitle="Click the heart icon on any listing to save it to this page."
        />
      </ClientOnly>
    );
  }
  return (
    <ClientOnly>
      <FavoritesClient listings={listings} currentUser={currentUser} />
      <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {listings.map((listing) => (
          <ListingCard
            key={listing.id}
            currentUser={currentUser}
            data={listing}
          />
        ))}
      </div>
    </ClientOnly>
  );
};

export default FavoritesPage;
