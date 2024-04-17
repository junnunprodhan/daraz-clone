import AdminLogin from "@/source/form/adminLogin";

function Auth() {
  return (
    <div className="bg-gray-200">
      <div className="container h-screen flex justify-center items-center">
        {/* Form */}
        <AdminLogin />
      </div>
    </div>
  );
}

export default Auth;
