import classNames from "classnames";
import { useAccounts } from "../../../../../store/auth/hooks";

export default function More() {
  const currentAccount = useAccounts();
  const accounts = useAccounts();

  return (
    <div>
      {accounts.map((account) => (
        <button
          key={account.fullName}
          className={classNames(
            "py-3 px-4 flex text-left w-full transition-colors",
            { "hover:bg-[#eff3f41a]": currentAccount.id !== accounts.id }
          )}
        >
          <img
            src={account.avatar}
            className="w-10 flex-shrink-0 h-10 rounded-full"
            alt=""
          />
          <div className="mx-3">
            <h6 className="font-bold leading-[1.25rem]">{account.fullName}</h6>
            <div className="text-[color:var(--color-base-secondary)]">
              @{account.username}
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}
