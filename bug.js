```javascript
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/my-route');
    // Some code that needs to run after navigation
    console.log('Navigation complete');
  };
  return (
    <button onClick={handleClick}>Go to My Route</button>
  );
}
```