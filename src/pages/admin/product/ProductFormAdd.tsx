import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { productSchema } from "../../../validations/productSchema";
import * as api from "../../../api/productApi";
import { useNavigate, useParams } from "react-router-dom";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import type { productType } from "../../../types/productType";


const ProductFormAdd = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const isEdit = !!id;
    const categories = [
        'Laptop',
        'dien thoai',
        'linh kien'
    ]

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(productSchema),
        defaultValues: { name: "", price: 0, description: "", category: "" }
    });

    useEffect(() => {
        if (isEdit) {
            api.getProductById(+id!).then((res) => reset(res.data));
        }
    }, [id]);

    const onSubmit = async (data: productType) => {
        if (isEdit) {
            await api.updateProduct(+id!, data);
        } else {
            await api.createProduct(data);
        }
        navigate("/admin/products");
    };

    return (
        <Container className="mt-4">
            <Row className="justify-content-center">
                <Col md={8}>
                    <h3>{isEdit ? "Cập nhật sản phẩm" : "Thêm sản phẩm mới"}</h3>
                    <Form onSubmit={handleSubmit(onSubmit)}>

                        <Form.Group className="mb-3">
                            <Form.Label>Tên sản phẩm</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Nhập tên sản phẩm"
                                {...register("name")}
                                isInvalid={!!errors.name}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.name?.message}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Giá</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Nhập giá"
                                {...register("price", { valueAsNumber: true })}
                                isInvalid={!!errors.price}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.price?.message}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Danh mục</Form.Label>
                            <Form.Select {...register("category")}>
                                {categories.map((c) => (
                                    <option key={c} value={c}>{c}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Mô tả</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Mô tả sản phẩm"
                                {...register("description")}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            {isEdit ? "Cập nhật" : "Thêm mới"}
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductFormAdd;
