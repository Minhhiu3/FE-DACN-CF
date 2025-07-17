import { useEffect, useState } from "react";
import { getSubCategories, deleteSubCategory } from "../../../api/categoryApi";
import type { SubCategoryType } from "../../../types/categoryType";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function AdminSubCategories() {
  const [subCategories, setSubCategories] = useState<SubCategoryType[]>([]);

  const fetchSubCategories = async () => {
    try {
      const res = await getSubCategories(); // hàm API lấy tất cả sub-categories
      setSubCategories(res.data.data);
    } catch (err) {
      console.error("Lỗi tải danh mục con:", err);
    }
  };

  useEffect(() => {
    fetchSubCategories();
  }, []);

  const handleDelete = async (id: string) => {
    if (confirm("Bạn có chắc chắn muốn xóa danh mục con này không?")) {
      try {
        await deleteSubCategory(Number(id));
        toast.success("Xóa danh mục con thành công!");
        fetchSubCategories();
      } catch (err) {
        console.error("Lỗi xóa:", err);
        toast.error("Xóa thất bại!");
      }
    }
  };

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Quản lý danh mục con</h1>
        <Link
          to="/admin/sub-categories/add"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + Thêm danh mục con
        </Link>
      </div>

      {subCategories.length === 0 ? (
        <p>Không có danh mục con nào.</p>
      ) : (
        <table className="w-full table-auto border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">#</th>
              <th className="border p-2 text-left">Tên</th>
              <th className="border p-2 text-left">Slug</th>
              <th className="border p-2 text-left">Mô tả</th>
              <th className="border p-2 text-left">Danh mục cha</th>
              <th className="border p-2">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {subCategories.map((sub, index) => (
              <tr key={sub._id}>
                <td className="border p-2 text-center">{index + 1}</td>
                <td className="border p-2">{sub.title}</td>
                <td className="border p-2">{sub.slug}</td>
                <td className="border p-2">{sub.description || "—"}</td>
                <td className="border p-2">
                  {typeof sub.categoryParrentId === "object"
                    ? sub.categoryParrentId.title
                    : sub.categoryParrentId}
                </td>
                <td className="border p-2 text-center">
                  <div className="flex gap-2 justify-center">
                    <Link
                      to={`/admin/sub-categories/edit/${sub._id}`}
                      className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                    >
                      Sửa
                    </Link>
                    <button
                      onClick={() => handleDelete(sub._id)}
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
