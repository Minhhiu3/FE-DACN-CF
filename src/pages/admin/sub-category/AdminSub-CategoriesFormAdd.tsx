import { useState, useEffect } from "react";
import { getCategory, createSubCategory } from "../../../api/categoryApi";
import type { SubCategoryType } from "../../../types/categoryType";
import slugify from "slugify";
import { toast } from "react-toastify";

export default function SubCategoryFormAdd({ onSuccess }: { onSuccess: () => void }) {
  const [form, setForm] = useState<Partial<SubCategoryType>>({
    title: "",
    slug: "",
    description: "",
    categoryParrentId: ""
  });

  const [categories, setCategories] = useState<{ _id: string; title: string }[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await getCategory(); // Lấy danh mục cha
        setCategories(res.data.data);
      } catch (err) {
        toast.error("Không thể tải danh mục cha");
        console.log("Lỗi tải danh mục cha:", err);
      }
    };
    fetchCategories();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    setForm((prev) => {
      if (name === "title") {
        return {
          ...prev,
          title: value,
          slug: slugify(value, { lower: true, strict: true })
        };
      }
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setError(null);
      await createSubCategory(form);
      toast.success("✅ Thêm danh mục con thành công!");
      setForm({ title: "", slug: "", description: "", categoryParrentId: "" });
      onSuccess();
    } catch (err: any) {
      if (err.response?.status === 400) {
        setError(err.response.data?.message || "Dữ liệu không hợp lệ");
      } else {
        setError("❌ Có lỗi xảy ra khi gửi dữ liệu.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 p-4 border rounded bg-white shadow">
      <h2 className="text-xl font-semibold mb-2">Thêm danh mục con</h2>

      {error && <div className="text-red-600 text-sm mb-2">{error}</div>}

      <input
        type="text"
        name="title"
        value={form.title || ""}
        onChange={handleChange}
        placeholder="Tên danh mục con"
        className="border p-2 w-full mb-2 rounded"
        required
      />

      <input
        type="text"
        name="slug"
        value={form.slug || ""}
        onChange={handleChange}
        placeholder="Slug (tạo tự động)"
        className="border p-2 w-full mb-2 rounded bg-gray-100"
        readOnly
      />

      <textarea
        name="description"
        value={form.description || ""}
        onChange={handleChange}
        placeholder="Mô tả (không bắt buộc)"
        className="border p-2 w-full mb-2 rounded"
        rows={3}
      />

      <select
        name="categoryParrentId"
        value={form.categoryParrentId || ""}
        onChange={handleChange}
        className="border p-2 w-full mb-4 rounded"
        required
      >
        <option value="">-- Chọn danh mục cha --</option>
        {categories.map((cat) => (
          <option key={cat._id} value={cat._id}>
            {cat.title}
          </option>
        ))}
      </select>

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Thêm danh mục con
      </button>
    </form>
  );
}
