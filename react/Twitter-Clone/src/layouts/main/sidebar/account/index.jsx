import { Popover } from "@headlessui/react";
import { useAccount } from "../../../../store/auth/hooks";
import More from "./more";

export default function Account() {
  const account = useAccount();

  return (
    <div className="mt-auto">
      <Popover className="relative">
				<Popover.Button
					className="my-3 p-3 rounded-full hover:bg-[color:var(--background-third)] w-full flex text-left items-center transition-colors outline-none"
				>
					<img src={account.avatar} className="w-10 flex-shrink-0 h-10 rounded-full" alt=""/>
					<div className="mx-3">
						<h6 className="font-bold leading-[1.25rem]">{account.fullName}</h6>
						<div className="text-[color:var(--color-base-secondary)]">
							@{account.username}
						</div>
          </div>
        </Popover.Button>
        <Popover.Panel className="absolute bottom-[80px] -translate-y-2 py-3 w-[300px] z-[1] left-1/2 -translate-x-1/2 bg-[color:var(--background-primary)] shadow-box rounded-2xl">
          <More/    >
        </Popover.Panel>
      </Popover>
    </div>
  );
}
