import { useState } from 'react';

// eslint-disable-next-line no-console
export default function useWhy(deps, id = undefined, logger = console.log) {
  const [prevDeps, setPrevDeps] = useState(deps);
  let changed = false;
  deps.forEach((d, i) => {
    if (d !== prevDeps[i]) {
      changed = true;
      logger(`Why ${id}: dep ${i} has changed from ${prevDeps[i]} to ${d}`);
    }
  });
  if (changed) setPrevDeps(deps);
  return deps;
}
