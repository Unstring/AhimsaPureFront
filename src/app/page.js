"use client";
import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import path from "path";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";

import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
const products = [
  {
    id: "cowghee250",
    name: "A2 Bilona Cow Ghee",
    imageSrc:
      "https://res.cloudinary.com/doocmwds7/image/upload/v1750265150/20250520_1541_Magical_Ahimsa_Jar_remix_01jvpjr524fvbvb0hw4r2bewj5_jtqarq.png",
    imageAlt: "Cow Ghee.",
    price: "₹599", //2299
    color: "250ML",
  },
  {
    id: "cowghee500",
    name: "A2 Bilona Cow Ghee",
    imageSrc:
      "https://res.cloudinary.com/doocmwds7/image/upload/v1750265150/20250519_1500_Ahimsa_Pure_Ghee_Label_remix_01jvky12chfq4v1f0x6z0je8d3_yj3hl8.png",
    imageAlt: "Cow Ghee.",
    price: "₹1099",
    color: "500ML",
  },
  {
    id: "cowghee1000",
    name: "A2 Bilona Cow Ghee",
    imageSrc:
      "https://res.cloudinary.com/doocmwds7/image/upload/v1750265150/20250519_1500_Ahimsa_Pure_Ghee_Label_remix_01jvky12cme68r75366n8xy62d_hxeis0.png",
    imageAlt: "Cow Ghee.",
    price: "₹1899",
    color: "1000ML",
  },
];
const features = [
  { name: "Origin", description: "Designed by Good Goods, Inc." },
  {
    name: "Material",
    description:
      "Solid walnut base with rare earth magnets and powder coated steel card cover",
  },
  { name: "Dimensions", description: '6.25" x 3.55" x 1.15"' },
  { name: "Finish", description: "Hand sanded and finished with natural oil" },
  { name: "Includes", description: "Wood card tray and 3 refill packs" },
  {
    name: "Considerations",
    description:
      "Made from natural materials. Grain and color vary with each item.",
  },
];
export default function Home() {
  const router = useRouter();
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Products
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div  
                  key={product.id}
              
              className="flex flex-col gap-2">
                <div
                  key={product.id}
                  className="group relative"
                  onClick={() => router.push(`/detail/${product.id}`)}
                >
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                      alt={product.imageAlt}
                      src={product.imageSrc}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <a>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {product.name}
                        </a>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {product.color}
                      </p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      {product.price}
                    </p>
                  </div>
                </div>
                <div>
                <button
                  className="bg-gray-400 text-white font-semibold py-1 px-4 rounded cursor-not-allowed w-full opacity-60"
                  disabled
                >
                  Add to Cart
                </button></div>
                </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 pt-0 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Contact us
            </h2>
            <p className="mt-4 text-gray-500">
              Contact us : <b>contact@ahimsapure.com</b>
            </p>
          </div>
          {/* <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
            className="rounded-lg bg-gray-100"
          />
          <img
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
            className="rounded-lg bg-gray-100"
          />
          <img
            alt="Side of walnut card tray with card groove and recessed card area."
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
            className="rounded-lg bg-gray-100"
          />
          <img
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
            className="rounded-lg bg-gray-100"
          />
        </div> */}
        </div>
      </div>

      <div className="relative overflow-hidden bg-white hidden">
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Summer styles are finally here
              </h1>
              <p className="mt-4 text-xl text-gray-500">
                This year, our new summer collection will shelter you from the
                harsh elements of a world that doesn't care if you live or die.
              </p>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            alt=""
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
                >
                  Shop Collection
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
