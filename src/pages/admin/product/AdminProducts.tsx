import { useProductList } from "../../../hooks/useProductList";
import { Link } from "react-router-dom";
import { Table, Button, Container } from "react-bootstrap";
const AdminProducts = () => {
    const { products, loading, removeProduct } = useProductList();

    if (loading) return <p>Đang tải...</p>;
    console.log("Products:", products);

    return (
        <Container className="mt-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h2>Danh sách sản phẩm</h2>
                <Link to="/admin/products/add" className="btn btn-success">
                    + Thêm mới
                </Link>
            </div>

            {Array.isArray(products) && products.length > 0 ? (
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Tên sản phẩm</th>
                            <th>Giá (VNĐ)</th>
                            <th>Thương hiệu</th>
                            <th>Danh mục con</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((p, index) => (
                            <tr key={p._id}>
                                <td>{index + 1}</td>
                                <td>{p.title}</td>
                                <td>{p.priceDefault?.toLocaleString()}</td>
                                <td>{p.brand?.title || "Không rõ"}</td>
                                <td>{p.subCategory?.title || "Không rõ"}</td>
                                <td>
                                    <Button
                                        variant="danger"
                                        size="sm"
                                        className="me-2"
                                        onClick={() => {
                                            if (p._id) removeProduct(p._id);
                                        }}
                                    >
                                        Xoá
                                    </Button>
                                    <Link
                                        to={`/admin/products/${p._id}`}
                                        className="btn btn-primary btn-sm me-2"
                                    >
                                        Sửa
                                    </Link>
                                    <Link
                                        to={`/admin/product/${p._id}`}
                                        className="btn btn-secondary btn-sm"
                                    >
                                        Chi tiết
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            ) : (
                <p>Không có sản phẩm nào.</p>
            )}
        </Container>
    );
};

export default AdminProducts;
