import { useEffect, useState } from "react";
import { getCategory, deleteCategory } from "../../../api/categoryApi";
import type { CategoryType } from "../../../types/categoryType";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function AdminCategories() {
  const [categories, setCategories] = useState<CategoryType[]>([]);

  const fetchCategories = async () => {
    try {
      const res = await getCategory();
      setCategories(res.data.data); // đảm bảo response đúng cấu trúc
    } catch (err) {
      console.error("Lỗi tải danh mục:", err);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleDelete = async (id: string) => {
    if (confirm("Bạn có chắc chắn muốn xóa danh mục này không?")) {
      try {
        await deleteCategory(Number(id));
        toast.success("Xóa danh mục thành công!");
        fetchCategories(); // reload lại sau khi xóa
      } catch (err) {
        console.error("Lỗi xóa danh mục:", err);
        toast.error("Xóa thất bại!");
      }
    }
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Quản lý danh mục</h1>
        <Link to="/admin/categories/add" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          + Thêm danh mục
        </Link>
      </div>

      {categories.length === 0 ? (
        <p>Không có danh mục nào.</p>
      ) : (
        <table className="w-full table-auto border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">#</th>
              <th className="border p-2 text-left">Tên</th>
              <th className="border p-2 text-left">Slug</th>
              <th className="border p-2 text-left">Mô tả</th>
              <th className="border p-2">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((cat, index) => (
              <tr key={cat._id}>
                <td className="border p-2 text-center">{index + 1}</td>
                <td className="border p-2">{cat.title}</td>
                <td className="border p-2">{cat.slug}</td>
                <td className="border p-2">{cat.description || "—"}</td>
                <td className="border p-2 text-center">
                  <div className="flex gap-2 justify-center">
                    <Link
                      to={`/admin/categories/edit/${cat._id}`}
                      className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                    >
                      Sửa
                    </Link>
                    <button
                      onClick={() => handleDelete(String(cat._id))}
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
