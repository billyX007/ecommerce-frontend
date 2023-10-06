import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Image from "next/image";

export default function TopBar() {
  return (
    <div className="p-6 grid grid-cols-2 items-center border-b bg-white">
      <div>Acme Inc</div>
      <div className="flex items-center justify-end gap-2">
        <span className="text-sm">Admin</span>
        <Avatar>
          <Image
            src="/placeholders/user.png"
            alt="User Image"
            width={40}
            height={40}
          />
          <AvatarFallback>NA</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
