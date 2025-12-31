export default function Home() {
  return (
    <main className="mx-auto max-w-5xl p-6">
      <h1 className="text-3xl font-bold">Welcome to Tech Deals India</h1>
      <p className="text-gray-600 mt-2">
        Explore the best Amazon deals on smartphones, laptops, and accessories.
      </p>
      <a
        href="/smartphones"
        className="mt-6 inline-block bg-blue-600 text-white px-4 py-2 rounded"
      >
        View Smartphones
      </a>
    </main>
  );
}
