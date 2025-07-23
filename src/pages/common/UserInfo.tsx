import { useEffect, useState } from "react";

type UserType = {
  _id: string;
  fullName: string;
  email: string;
  avatar: string;
  address: string;
  role: string;
  isActive: boolean;
  isVerifyEmail: boolean;
  isVerifyPhone: boolean;
};

export default function UserProfile() {
  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-[300px] text-red-500 font-semibold">
        Không tìm thấy thông tin người dùng
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Thông tin người dùng</h2>
      <div className="flex flex-col items-center">
        <img
          src={user.avatar}
          alt="avatar"
          className="w-28 h-28 rounded-full mb-4 object-cover border border-gray-300"
        />
      </div>
      <ul className="space-y-3 text-gray-700">
        <li><span className="font-semibold"> Họ tên:</span> {user.fullName}</li>
        <li><span className="font-semibold"> Email:</span> {user.email}</li>
        <li><span className="font-semibold"> Địa chỉ:</span> {user.address || "Chưa cập nhật"}</li>
        <li><span className="font-semibold"> Role:</span> {user.role}</li>
        <li>
          <span className="font-semibold">⚙️ Trạng thái:</span>{" "}
          <span className={user.isActive ? "text-green-600" : "text-red-600"}>
            {user.isActive ? "Đang hoạt động" : "Bị khóa"}
          </span>
        </li>
        <li>
          <span className="font-semibold">📨 Xác thực Email:</span>{" "}
          {user.isVerifyEmail ? "Đã xác thực ✅" : "Chưa xác thực ❌"}
        </li>
        <li>
          <span className="font-semibold">📱 Xác thực SĐT:</span>{" "}
          {user.isVerifyPhone ? "Đã xác thực ✅" : "Chưa xác thực ❌"}
        </li>
      </ul>
    </div>
  );
}
