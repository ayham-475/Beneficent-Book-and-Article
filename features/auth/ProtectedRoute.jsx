import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./auther";

const ProtectedRoute = ({ children ,allowedRoles}) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  // 1. إذا كان الكونتكت لا يزال يفحص الذاكرة، لا تفعل شيئاً (انتظر)
  if (loading) {
    return (
      <div className="min-h-screen bg-[#0d0d0f] flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin" />
      </div>
    );
  }

  // 2. إذا لم يجد مستخدماً مسجلاً، انقله لصفحة اللوجن
  if (allowedRoles && !allowedRoles.includes(user.profile.type)) {
    // نستخدم state لحفظ المكان الذي كان يحاول المستخدم دخوله لنعيده إليه بعد التسجيل
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // 3. إذا كان مسجلاً، اسمح له برؤية المحتوى (الداشبورد مثلاً)
  return children;
};

export default ProtectedRoute;