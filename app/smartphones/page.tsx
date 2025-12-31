export default function Smartphones() {
  const tag = "yourid-21"; // Replace with your Amazon tracking ID
  const products = [
    { name: "Redmi Note 13", asin: "B0XXXXXX", price: "₹19,999" },
    { name: "Realme Narzo 60", asin: "B0YYYYYY", price: "₹17,499" },
  ];
  return (
    <main className="mx-auto max-w-5xl p-6">
      <h2 className="text-2xl font-semibold mb-4">Best under ₹20,000</h2>
      <ul className="grid gap-6 sm:grid-cols-2">
        {products.map(p => (
          <li key={p.asin} className="border rounded p-4">
            <div className="font-medium">{p.name}</div>
            <div className="text-sm text-gray-600">{p.price}</div>
            <a
              className="mt-3 inline-block bg-black text-white px-3 py-2 rounded"
              href={`https://www.amazon.in/dp/${p.asin}?tag=${tag}`}
              target="_blank"
              rel="nofollow noopener sponsored"
            >
              Check price on Amazon
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}