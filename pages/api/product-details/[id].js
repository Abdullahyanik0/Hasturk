export default async function handler(req, res) {
  const query = req.query;
  const id = Number(query.id);

  try {
    const data = await fetch('http://localhost:3000/api/product');
    const response = await data.json();
    const product = response?.data.filter((product) => product.id === id);

    return res.status(200).json({ product });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      error: 'There was an error'
    });
  }
}
