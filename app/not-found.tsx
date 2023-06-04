import Link from 'next/link';

export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <p>Halaman yang anda cari gaada kack!</p>
      <p>
        Kembali ke <Link href="/">halaman utama</Link>
      </p>
    </div>
  );
}
