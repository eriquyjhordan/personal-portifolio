import { Inter, Poppins } from '@next/font/google'

export const inter = Inter({
  variable: '--inter',
  subsets: ['latin']
});

export const poppins = Poppins({
  variable: '--poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
});
