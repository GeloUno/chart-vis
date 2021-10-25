import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import SystemDataPage from './components/systemData.page';
import SystemDataPageExampleDate from './components/systemDataExampleData.page';
import { dataExample1 } from './exampleData/example1';
import { dataExample2 } from './exampleData/example2';
import { dataExample3 } from './exampleData/example3';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div
        className="flex flex-col  items-start justify-start text-white p-0 sm:p-5"
        style={{
          background:
            'linear-gradient(0deg,hsla(225,57%,8%,100%),hsla(175,12%,44%,100%)) no-repeat',
        }}
      >
        <SystemDataPage />
        <SystemDataPageExampleDate data={dataExample1} />
        <SystemDataPageExampleDate data={dataExample2} />
        <SystemDataPageExampleDate data={dataExample3} />
        <ReactQueryDevtools initialIsOpen={false} position={'bottom-right'} />
      </div>
    </QueryClientProvider>
  );
}

export default App;
