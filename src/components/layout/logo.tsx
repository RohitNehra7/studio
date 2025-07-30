import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" passHref>
        <span className="text-2xl font-bold text-foreground font-headline">
            The Archithan Architects
        </span>
    </Link>
  );
}
