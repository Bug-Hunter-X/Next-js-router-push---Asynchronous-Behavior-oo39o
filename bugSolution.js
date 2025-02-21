```javascript
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/my-route');
    router.events.on('routeChangeComplete', () => {
      console.log('Navigation complete');
    });
  };
  return (
    <button onClick={handleClick}>Go to My Route</button>
  );
}
```