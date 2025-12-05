import { useState } from "react"
import { useNavigate } from "react-router-dom"

function EditProduct({products,updateProduct}) {

    const [thumbnail, setThumbnail] = useState(products.thumbnail)
    const [title, setTitle] = useState(products.title)
    const [price, setPrice] = useState(products.price)
    const [rating, setRating] = useState(products.rating)
    const [stock, setStock] = useState(products.stock)

    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedProduct = {
            ...products,
            thumbnail,
            title,
            price: Number(price),
            rating,
            stock,
        };

        updateProduct(updatedProduct);
        navigate("/")
    };
    return (
        <section className="form">
            <form onSubmit={handleSubmit}>
                <label >
                    Product Image:
                    <input
                        type="url"
                        name="images"
                        placeholder="https://...."
                        value={thumbnail}
                        onChange={(e) => { setThumbnail(e.target.value) }}
                    />
                </label>
                <label >
                    Product Name:
                    <input
                        type="text"
                        required
                        name="title"
                        placeholder="Lanzagranadas"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </label>
                <label >
                    Price:
                    <input
                        type="number"
                        name="price"
                        placeholder="€"
                        value={price}
                        required
                        onChange={(e) => { setPrice(e.target.value) }}
                    />
                    </label>
                    <label >
                        Ratings:
                        <input
                            type="number"
                            name="rating"
                            placeholder="ratings"
                            value={rating}
                            onChange={(e) => { setRating(e.target.value) }}
                        />
                        </label>
                        <label >
                        Stock:
                        <input
                            type="number"
                            name="stock"
                            placeholder="stock"
                            value={stock}
                            onChange={(e) => { setStock(e.target.value) }}
                        />
                        </label>
                        <button>Edit Product</button>
                    </form>
                </section>
                )
}
export default EditProduct