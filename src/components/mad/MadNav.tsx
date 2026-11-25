export const MAD_NAV = [
  { href: "/", label: "Releases" },
  { href: "#artists", label: "Artists" },
  { href: "#contact", label: "Contact" },
];

export function LoginButton() {
  return (
    <a
      href="#login"
      className="rounded-[4px] border border-white px-3 py-2 text-[16px] leading-none text-[#e0e0e0] transition-colors hover:bg-white hover:text-black"
    >
      Login
    </a>
  );
}
