import { AllUsers } from "@/types";

// Kullanıcı verilerini almak için bir API'den veri çeken fonksiyon
export const getUsers = async () => {
  // API'den veri çekme işlemi
  const dynamicData = await fetch("https://dummyjson.com/users", {
    cache: "no-store", // Tarayıcı önbelleğini devre dışı bırakma
  });

  // API'den alınan JSON verisini AllUsers türündeki bir nesneye dönüştürme
  const userData: AllUsers = await dynamicData.json();

  // Elde edilen kullanıcı verilerini döndürme
  return userData;
};
