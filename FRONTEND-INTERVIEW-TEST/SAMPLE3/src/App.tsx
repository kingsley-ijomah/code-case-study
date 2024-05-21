import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Collections from './pages/Collections';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Collections />
    </QueryClientProvider>
  );
}

export default App;
