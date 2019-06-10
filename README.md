# useWhy

Watch React hook dependencies and report which dependency caused the hook to fire.

## Usage

```js
import useWhy from 'usewhy';

function YourComponent(props) {
  const [name, setName] = useState("");
  useEffect(
    () => {
      console.log('hello world!', name);
    },
    useWhy([name])
  );

  return (
    <input type="text" onChange={(e) => setState(e.target.value);} />
  )
}

```
