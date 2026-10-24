import Image from "next/image";

const items = {
  contacts: [
    { icon: "/phone.svg", text: "Helpline: +8809660616253, 16253" },
    { icon: "/pabx.svg", text: "PABX Number: +88 02223381614" },
    { icon: "/fax.svg", text: "Fax: 880-2-9564009" },
  ],
  address: [
    { icon: "/mail.svg", text: "Mail: info@pubalibankbd.com" },
    {
      icon: "/location.svg",
      text: "Address: Head Office, 26 Dilkusha Commercial Area, Dhaka 1000, Bangladesh",
    },
  ],
};

function FooterItem({ icon, text }: { icon: string; text: string }) {
  return (
    <div className="footer-item">
      <Image src={icon} alt="" width={14} height={14} aria-hidden />
      <span>{text}</span>
    </div>
  );
}

export default function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line bg-white py-3 text-sm">
      <div className="bs-container px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            {items.contacts.map((item) => (
              <FooterItem key={item.text} {...item} />
            ))}
          </div>

          <div className="md:col-span-1 lg:col-span-7">
            {items.address.map((item) => (
              <FooterItem key={item.text} {...item} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
