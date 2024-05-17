import { ThemeProvider } from '@providers/ThemeProvider';
import Entry from './src/Entry';

// Initialize Reactotron
if (__DEV__) {
  require('./ReactotronConfig');
}

export default function App() {
  return (
    <ThemeProvider>
      <Entry />
    </ThemeProvider>
  );
}
