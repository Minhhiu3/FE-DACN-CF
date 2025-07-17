import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getBrand } from "../../../api/brandApi";
import { getSubCategories } from "../../../api/categoryApi";
import { createProduct } from "../../../api/productApi";
import type { ProductType } from "../../../types/productType";
import { Form, Button } from "react-bootstrap";
import type { brandType } from "../../../types/brandType";
import type { SubCategoryType } from "../../../types/categoryType";
import slugify from "slugify";
import { toast } from "react-toastify";

export default function ProductFormAdd() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ProductType>();

  const [brands, setBrands] = useState<brandType[]>([]);
  const [subCategories, setSubCategories] = useState<SubCategoryType[]>([]);
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const brandRes = await getBrand();
        const subRes = await getSubCategories();

        setBrands(Array.isArray(brandRes.data?.data) ? brandRes.data.data : []);
        setSubCategories(Array.isArray(subRes.data?.data) ? subRes.data.data : []);
      } catch (err) {
  toast.error("Tạo sản phẩm thất bại");
        console.error("Lỗi khi lấy brand hoặc subCategory:", err , err.response);
      }
    };

    fetchData();
  }, []);

  // Cập nhật slug mỗi khi title thay đổi
  useEffect(() => {
    const generatedSlug = slugify(title, { lower: true, strict: true });
    setSlug(generatedSlug);
    setValue("slug", generatedSlug); // cập nhật vào form
    setValue("title", title, { shouldValidate: true });
  }, [title, setValue]);

  const onSubmit = async (data: any) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("shortDescription", data.shortDescription || "");
    formData.append("slug", data.slug);
    formData.append("priceDefault", data.priceDefault);
    formData.append("brand", data.brand);
    formData.append("subCategory", data.subCategory);
    formData.append("seoTitle", data.seoTitle || "");
    formData.append("seoDescription", data.seoDescription || "");
    formData.append("tags", JSON.stringify(data.tags || []));
    formData.append("specifications", JSON.stringify(data.specifications || {}));
    formData.append("variants", JSON.stringify(data.variants || []));

    if (data.thumbnail && data.thumbnail[0]) {
      formData.append("thumbnail", data.thumbnail[0]);
    }

    try {
      await createProduct(formData);
      navigate("/admin/products");
    } catch (err) {
      console.error("Lỗi khi tạo sản phẩm:", err);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
      <Form.Group className="mb-3">
        <Form.Label>Tên sản phẩm</Form.Label>

        <Form.Control
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            setValue("title", e.target.value, { shouldValidate: true });
          }}
        />
        {errors.title && <Form.Text className="text-danger">{errors.title.message}</Form.Text>}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Slug</Form.Label>
        <Form.Control
          value={slug}
          {...register("slug", { required: "Slug là bắt buộc" })}
          readOnly
          placeholder="Slug sẽ được tạo tự động từ tiêu đề"
        />
        {errors.slug && <p className="text-danger">{errors.slug.message}</p>}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Mô tả ngắn</Form.Label>
        <Form.Control as="textarea" {...register("shortDescription")} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Mô tả đầy đủ</Form.Label>
        <Form.Control as="textarea" rows={5} {...register("description")} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Giá</Form.Label>
        <Form.Control type="number" {...register("priceDefault", { required: true })} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Ảnh thumbnail</Form.Label>
        <Form.Control type="file" accept="image/*" {...register("thumbnail", { required: true })} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Thương hiệu</Form.Label>
        <Form.Select {...register("brand", { required: true })}>
          <option value="">-- Chọn thương hiệu --</option>
          {brands.map((b: any) => (
            <option key={b._id} value={b._id}>
              {b.title}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Danh mục con</Form.Label>
        <Form.Select {...register("subCategory", { required: true })}>
          <option value="">-- Chọn danh mục con --</option>
          {subCategories.map((s: any) => (
            <option key={s._id} value={s._id}>
              {s.title}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>SEO Title</Form.Label>
        <Form.Control {...register("seoTitle")} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>SEO Description</Form.Label>
        <Form.Control as="textarea" {...register("seoDescription")} />
      </Form.Group>

      <Button type="submit">Tạo sản phẩm</Button>
    </Form>
  );
}
