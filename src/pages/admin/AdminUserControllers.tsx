import React from "react";
import { useUserList } from "../../hooks/useUserList";
import { Link } from "react-router-dom";
import { Table, Button, Container } from "react-bootstrap";
const AdminUserControllers = () => {
    const { users, loading, } = useUserList();

    if (loading) return <p>Đang tải...</p>;

    return (
        <Container className="mt-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h2>Danh sách sản phẩm</h2>
                <Link to="/admin/products/add" className="btn btn-success">
                    + Thêm mới
                </Link>
            </div>

            {Array.isArray(users) && users.length > 0 ? (
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Tên Người dùng</th>
                            <th>Gmail</th>
                            <th>Password </th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((users) => (
                                <tr key={users.id}>
                                    <td>{users.id}</td>
                                    <td>{users.name}</td>
                                    <td>{users.email}</td>
                                    <td>{users.password}</td>
                                    <td>role...</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            ) : (
                <p>Không có sản phẩm nào.</p>
            )}
        </Container>
    );
};


export default AdminUserControllers;
