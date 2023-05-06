import getCurrentUser from '../actions/getCurrentUser';
import getFavoritesListings from '../actions/getFavoritesListings';
import ClientOnly from '../components/ClientOnly';
import EmptyState from '../components/EmptyState';
import FavoritesClient from './FavoritesClient';

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
    </ClientOnly>
  );
};

export default FavoritesPage;
