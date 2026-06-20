const DashboardPage = () => {
  const admin =
    JSON.parse(
      localStorage.getItem(
        "admin"
      )
    );

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold">
        Admin Dashboard
      </h1>

      <p className="mt-4">
        Welcome,
        {" "}
        {admin?.username}
      </p>

      <p>
        Role:
        {" "}
        {admin?.role}
      </p>
    </div>
  );
};

export default DashboardPage;