import Link from "next/link";
import ImageView from "./next-cloudinary/ImageView";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";

export default function NavigationBar() {
  const navigationLinks = [
    {
      id: 1,
      title: "Home",
      hrefLink: "/",
    },
    {
      id: 2,
      title: "About Us",
      hrefLink: "/about-us",
    },
    {
      id: 3,
      title: "Services",
      hrefLink: "/services",
    },
    {
      id: 4,
      title: "Products",
      hrefLink: "/products",
    },
    {
      id: 5,
      title: "Contact Us",
      hrefLink: "/contact-us",
    },
  ];
  return (
    <>
      <NavigationMenu className="">
        <NavigationMenuList className="w-screen  bg-teal-100 flex  justify-between items-center px-16 ">
          <div className="w-full p-2">
            <NavigationMenuItem >
                <Link href={`/`} className="flex items-center">
                <ImageView
                    imageSrc="level_services_logo_bg-transparent_ellvje"
                    height={400}
                    width={400}
                    alt=""
                    classNames="object-contain size-20"
                />
                <p className="font-semibold">Levels Services Logistics</p>
                </Link>
            </NavigationMenuItem>
          </div>
          <div className=" flex gap-x-2 justify-end w-full">
            {navigationLinks.map((nav) => (
              <NavigationMenuItem key={nav.id}>
                <Link href={nav.hrefLink}>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {nav.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}
