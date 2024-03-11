"use client";

import DetailsProfilePage from "@/components/Dashboard/Profile/Profile";
import { useGetMyProfileQuery } from "@/redux/api/userApi";
import LoadingPage from "@/app/loading";
const ProfilePage = () => {
  const { data, isLoading } = useGetMyProfileQuery(undefined);

  if (isLoading) return <LoadingPage />;

  return (
    <div className="min-h-svh p-4 lg:p-6">
      <DetailsProfilePage user={data?.data} />
    </div>
  );
};

export default ProfilePage;
