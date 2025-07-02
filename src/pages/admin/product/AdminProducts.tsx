import { useProductList } from "../../../hooks/useProductList";
import { Link } from "react-router-dom";
import { Table, Button, Container } from "react-bootstrap";
const AdminProducts = () => {
    const { products, loading, removeProduct } = useProductList();

    if (loading) return <p>Đang tải...</p>;

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
                            <th>ID</th>
                            <th>Tên sản phẩm</th>
                            <th>Giá ($)</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((p, index) => (
                            <tr key={p.id}>
                                <td>{index + 1}</td>
                                <td>{p.name}</td>
                                <td>{p.price}</td>
                                <td>
                                    <Button
                                        variant="danger"
                                        size="sm"
                                        className="me-2"
                                        onClick={() => {
                                            if (p.id !== undefined) removeProduct(p.id);
                                        }}
                                    >
                                        Xoá
                                    </Button>
                                    <Link
                                        to={`/admin/products/${p.id}`}
                                        className="btn btn-primary btn-sm"
                                    >
                                        Sửa
                                    </Link>
                                    <Link
                                        to={`/admin/product/${p.id}`}
                                    >Detail</Link>
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
