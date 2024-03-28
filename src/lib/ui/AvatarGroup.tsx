import { Avatar, AvatarFallback } from "@/lib/ui/avatar";
import { User } from "lucide-react";

const AvatarGroup = () => {
  const avatars = [
    { src: "avatar1.jpg", alt: "Avatar 1" },
    { src: "avatar2.jpg", alt: "Avatar 2" },
    { src: "avatar3.jpg", alt: "Avatar 3" },
    { src: "avatar4.jpg", alt: "Avatar 4" },
    { src: "avatar5.jpg", alt: "Avatar 5" },
    { src: "avatar6.jpg", alt: "Avatar 6" },
  ];
  const showAvatars = avatars.length > 5 ? avatars.slice(0, 5) : avatars;

  return (
    <div className="flex">
      <div className="flex -space-x-2">
        {showAvatars.map((avatar) => (
          <Avatar key={avatar.src} size="xs">
            <AvatarFallback>
              <User />
            </AvatarFallback>
          </Avatar>
        ))}
        {avatars.length > 5 && (
          <div className="relative flex items-center justify-center border border-black bg-white text-black rounded-full w-5 h-5 text-xs">
            +{avatars.length - 4}
          </div>
        )}
      </div>
    </div>
  );
};

export default AvatarGroup;
