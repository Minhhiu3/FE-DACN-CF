import { useEffect, useState } from "react";
import { getBrand, deleteBrand } from "../../../api/brandApi"; // 👈 bạn cần tạo brandApi tương tự như categoryApi
import type { brandType } from "../../../types/brandType";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function AdminBrands() {
  const [brands, setBrands] = useState<brandType[]>([]);

  const fetchBrands = async () => {
    try {
      const res = await getBrand();
      setBrands(res.data.data); // response chuẩn { data: [...] }
    } catch (err) {
      console.error("Lỗi tải thương hiệu:", err);
    }
  };

  useEffect(() => {
    fetchBrands();
  }, []);

  const handleDelete = async (id: number) => {
    if (confirm("Bạn có chắc chắn muốn xóa thương hiệu này không?")) {
      try {
        await deleteBrand(id);
        toast.success("Xóa thương hiệu thành công!");
        fetchBrands(); // reload lại sau khi xóa
      } catch (err) {
        console.error("Lỗi xóa thương hiệu:", err);
        toast.error("Xóa thất bại!");
      }
    }
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Quản lý thương hiệu</h1>
        <Link to="/admin/brands/add" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          + Thêm thương hiệu
        </Link>
      </div>

      {brands.length === 0 ? (
        <p>Không có thương hiệu nào.</p>
      ) : (
        <table className="w-full table-auto border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">#</th>
              <th className="border p-2 text-left">Tên</th>
              <th className="border p-2 text-left">Slug</th>
              <th className="border p-2 text-left">Mô tả</th>
              <th className="border p-2">Logo</th>
              <th className="border p-2">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {brands.map((brand, index) => (
              <tr key={brand._id}>
                <td className="border p-2 text-center">{index + 1}</td>
                <td className="border p-2">{brand.title}</td>
                <td className="border p-2">{brand.slug}</td>
                <td className="border p-2">{brand.description || "—"}</td>
                <td className="border p-2 text-center">
                  {brand.logoUrl ? (
                    <img src={brand.logoUrl} alt={brand.title} className="w-12 h-12 object-contain mx-auto" />
                  ) : (
                    "Không có"
                  )}
                </td>
                <td className="border p-2 text-center">
                  <div className="flex gap-2 justify-center">
                    <Link
                      to={`/admin/brands/edit/${brand._id}`}
                      className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                    >
                      Sửa
                    </Link>
                    <button
                      onClick={() => handleDelete(Number(brand._id))}
                      className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
                    >
                      Xóa
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
