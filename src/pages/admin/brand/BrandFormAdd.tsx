import { useState } from "react";
import { createBrand } from "../../../api/brandApi"; // ⚠️ Đảm bảo API này tồn tại
import type { brandType } from "../../../types/brandType";
import slugify from "slugify";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
export default function BrandFormAdd({ onSuccess }: { onSuccess: () => void }) {
  const [form, setForm] = useState<brandType>({
    title: "",
    slug: "",
    logoUrl: "",
    description: "",
  });

  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setForm((prev) => {
      if (name === "title") {
        return {
          ...prev,
          title: value,
          slug: slugify(value, { lower: true, strict: true }), // tự động tạo slug từ title
        };
      }
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setError(null);
      await createBrand(form);
      toast.success("✅ Thêm thương hiệu thành công!");
      setForm({ title: "", slug: "", logoUrl: "", description: "" });
      onSuccess();
    } catch (err: unknown) {
        const axiosError = err as AxiosError
        console.log(axiosError)
      if (axiosError.response?.status === 400) {
        setError(axiosError.response.data?.message || "Dữ liệu không hợp lệ");
      } else {
        setError("❌ Có lỗi xảy ra khi gửi dữ liệu.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 p-4 border rounded bg-white shadow">
      <h2 className="text-xl font-semibold mb-2">Thêm thương hiệu</h2>

      {error && <div className="text-red-600 text-sm mb-2">{error}</div>}

      <input
        type="text"
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Tên thương hiệu"
        className="border p-2 w-full mb-2 rounded"
        required
      />

      <input
        type="text"
        name="slug"
        value={form.slug}
        onChange={handleChange}
        placeholder="Slug (tự tạo từ tiêu đề)"
        className="border p-2 w-full mb-2 rounded bg-gray-100"
        readOnly
      />

      <input
        type="text"
        name="logoUrl"
        value={form.logoUrl}
        onChange={handleChange}
        placeholder="Link logo"
        className="border p-2 w-full mb-2 rounded"
      />

      <textarea
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Mô tả (không bắt buộc)"
        className="border p-2 w-full mb-2 rounded"
        rows={3}
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Thêm thương hiệu
      </button>
    </form>
  );
}
