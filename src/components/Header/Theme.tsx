import Image from 'next/image';
import dark from 'public/icons/dark.svg';
import light from 'public/icons/light.svg';
import { useTheme } from 'next-themes';

const Theme = () => {
  const { theme, setTheme } = useTheme();
  const isLightTheme = theme === 'light';

  return (
    <Image
      width={32}
      height={32}
      alt="theme"
      src={isLightTheme ? light : dark}
      style={{ cursor: 'pointer' }}
      onClick={() => setTheme(isLightTheme ? 'dark' : 'light')}
    />
  );
};

export default Theme;
