import Image from "next/image";
import React from "react";
interface UserAvatarProps {
  image: string | null;
  alt: string | null;
}
const UserAvatar: React.FC<UserAvatarProps> = ({ image, alt }) => {
  return (
    <Image
      className="rounded-full"
      src={image ? image : ""}
      alt={alt ? alt : ""}
      width={50}
      height={50}
    />
  );
};
export default UserAvatar;
