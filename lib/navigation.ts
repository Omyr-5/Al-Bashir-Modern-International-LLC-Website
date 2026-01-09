import Link from 'next/link';
import { usePathname, useRouter, redirect } from 'next/navigation';

export const locales = ['en', 'ar'] as const;
export const defaultLocale = 'en';

export { Link, usePathname, useRouter, redirect };
