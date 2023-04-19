import getCurrentUser from './actions/getCurrentUser';
import getListings from './actions/getListings';
import ClientOnly from './components/ClientOnly';
import Container from './components/Container';
import EmptyState from './components/EmptyState';
import ListingCard from './components/listings/ListingCard';

export default async function Home() {
  const listings = await getListings();
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <Container>
        <div className="sm:grid-flow-cols-2 md:grid-flow-cols-3 lg:grid-flow-cols-4 grid grid-cols-1 gap-8 pt-24 xl:grid-cols-5 2xl:grid-cols-6">
          {listings.map((listing: any) => (
            <ListingCard
              key={listing.id}
              data={listing}
              currentUser={currentUser}
            />
          ))}
        </div>
      </Container>
    </ClientOnly>
  );
}
