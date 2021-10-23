import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import SystemDataPage from './components/systemData.page';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div
        className="flex flex-col h-full items-start justify-start text-white p-0 sm:p-5"
        style={{
          background:
            'linear-gradient(0deg,hsla(225,57%,8%,100%),hsla(175,12%,44%,100%)) no-repeat',
        }}
      >
        <SystemDataPage />
        <ReactQueryDevtools initialIsOpen={false} position={'bottom-right'} />
      </div>
    </QueryClientProvider>
  );
}

export default App;
