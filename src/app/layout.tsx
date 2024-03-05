import { useRouter } from 'next/router';
import { Blog } from '../components/blog/Blog';
import { config } from '../config';

export default function App() {
  const router = useRouter();

  return (
      <>

          <main>
              <Blog config={config} />
          </main>
          
      </>
  );
}