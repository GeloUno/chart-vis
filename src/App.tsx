import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import SystemDataPage from './components/systemData.page';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col h-full items-center justify-center text-white bg-gradient-to-br from-gray-600 via-teal-700 to-gray-800">
        <SystemDataPage />
        <ReactQueryDevtools initialIsOpen={false} position={'bottom-right'} />
      </div>
    </QueryClientProvider>
  );
}

export default App;
