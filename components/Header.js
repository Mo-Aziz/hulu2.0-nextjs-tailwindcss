import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  LightningIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <header className="flex flex-col sm:flex-row  justify-between items-center h-auto">
      {/* left section "icons" */}
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>

      {/* right section "logo" */}
      <div>
        <Image
          className="object-contain mt-2"
          src="https://www.hulu.com/static/hitch/s3/attachments/cktuo6pxqmxfp1v7c1norzsop-hulu-padding.png"
          height={300}
          width={300}
        />
      </div>

      {/* main logo for banner */}
      {/* <Image
        className="object-contain"
        src="https://www.hulu.com/static/hitch/s3/attachments/ckdz36xqi7zz019ym0b2seyqk-dplus-logo-0-1-2-0.full.png"
        width={300}
        height={400}
      /> */}
    </header>
  );
}

export default Header;
