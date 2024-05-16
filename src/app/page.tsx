export default function Home() {
  console.log(process.env.DOMAIN);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2>Hello World</h2>
    </main>
  );
}
