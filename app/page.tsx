import ClientOnly from './components/ClientOnly';
import Container from './components/Container';
import EmptyState from './components/EmptyState';

export default function Home() {
  const isEmpty = true;
  if (isEmpty) {
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
          <div>Test</div>
        </div>
      </Container>
    </ClientOnly>
  );
}
