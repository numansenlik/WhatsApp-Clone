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
      width={41}
      height={41}
    />
  );
};
export default UserAvatar;
