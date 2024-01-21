import { AllUsers } from "@/types";

export const getUsers = async () => {
  const dynamicData = await fetch("https://dummyjson.com/users", {
    cache: "no-store",
  });
  const userData: AllUsers = await dynamicData.json();
  return userData;
};
