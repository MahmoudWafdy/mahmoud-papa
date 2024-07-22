import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AboutSlider from "../components/AboutSlider";

const About = () => {
  return (
    <div className="flex flex-col py-12 gap-8 md:py-24 md:gap-12">
      <div className="text-sm font-normal">
        <Link to="/" className="text-gray-500">
          Home /
        </Link>
        <Link to="/contact" className="">
          About
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <div className="  ">
          <h2 className="font-semibold text-2xl mb-3">Our Story</h2>
          <p className="">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
          </p>
          <p>
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <div className="hidden md:block bg-secondary w-full h-60 "></div>
      </div>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 ">
        <div className="rounded border-2 flex flex-col gap-3 justify-center items-center p-3 hover:text-white hover:bg-secondary hover:shadow-lg hover:transform transition-all duration-200">
          <div>
            <svg
              width="81"
              height="80"
              viewBox="0 0 81 80"
              fill="bg-white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.3"
                d="M80.5 40C80.5 62.0914 62.5914 80 40.5 80C18.4086 80 0.5 62.0914 0.5 40C0.5 17.9086 18.4086 0 40.5 0C62.5914 0 80.5 17.9086 80.5 40ZM11.4071 40C11.4071 56.0675 24.4325 69.0929 40.5 69.0929C56.5675 69.0929 69.5929 56.0675 69.5929 40C69.5929 23.9325 56.5675 10.9071 40.5 10.9071C24.4325 10.9071 11.4071 23.9325 11.4071 40Z"
                fill="#2F2E30"
              />
              <circle className="" cx="40.5" cy="40" r="29" fill="black" />
              <path
                d="M54.6416 25H47.9883L48.8216 33.3333C48.8216 33.3333 50.4883 35 52.9883 35C54.3006 35.0017 55.5684 34.524 56.5533 33.6567C56.6574 33.5594 56.735 33.4372 56.7787 33.3016C56.8224 33.166 56.8309 33.0214 56.8033 32.8817L55.6266 25.8333C55.5873 25.6005 55.4668 25.3891 55.2865 25.2366C55.1062 25.084 54.8778 25.0002 54.6416 25V25Z"
                stroke="white"
                strokeWidth="2"
              />
              <path
                d="M47.9883 25L48.8216 33.3333C48.8216 33.3333 47.1549 35 44.6549 35C42.1549 35 40.4883 33.3333 40.4883 33.3333V25H47.9883Z"
                stroke="#FAFAFA"
                strokeWidth="2"
              />
              <path
                d="M40.4886 25V33.3333C40.4886 33.3333 38.8219 35 36.3219 35C33.8219 35 32.1553 33.3333 32.1553 33.3333L32.9886 25H40.4886Z"
                stroke="#FAFAFA"
                strokeWidth="2"
              />
              <path
                d="M32.9883 25H26.3366C26.0999 24.9999 25.8709 25.0838 25.6902 25.2367C25.5096 25.3896 25.389 25.6016 25.3499 25.835L24.1749 32.8833C24.1475 33.0231 24.156 33.1676 24.1997 33.3032C24.2435 33.4387 24.321 33.5609 24.4249 33.6583C24.9716 34.1417 26.1933 35.0017 27.9883 35.0017C30.4883 35.0017 32.1549 33.335 32.1549 33.335L32.9883 25.0017V25Z"
                stroke="#FAFAFA"
                strokeWidth="2"
              />
              <path
                d="M25.5 35V51.6667C25.5 52.5507 25.8512 53.3986 26.4763 54.0237C27.1014 54.6488 27.9493 55 28.8333 55H52.1667C53.0507 55 53.8986 54.6488 54.5237 54.0237C55.1488 53.3986 55.5 52.5507 55.5 51.6667V35"
                stroke="#FAFAFA"
                strokeWidth="2"
              />
              <path
                d="M45.2217 55V45C45.2217 44.1159 44.8705 43.2681 44.2454 42.6429C43.6202 42.0178 42.7724 41.6666 41.8883 41.6666H38.555C37.671 41.6666 36.8231 42.0178 36.198 42.6429C35.5729 43.2681 35.2217 44.1159 35.2217 45V55"
                stroke="#FAFAFA"
                strokeWidth="2"
                strokeMiterlimit="16"
              />
            </svg>
          </div>
          <p className="font-bold text-2xl">10.5k </p>
          <p className="text-base text-center">Sallers active our site</p>
        </div>
        <div className="rounded border-2 flex flex-col gap-3 justify-center items-center p-3 hover:text-white hover:bg-secondary hover:shadow-lg hover:transform transition-all duration-200">
          <div>
            <svg
              width="81"
              height="80"
              viewBox="0 0 81 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.3"
                d="M80.5 40C80.5 62.0914 62.5914 80 40.5 80C18.4086 80 0.5 62.0914 0.5 40C0.5 17.9086 18.4086 0 40.5 0C62.5914 0 80.5 17.9086 80.5 40ZM11.4071 40C11.4071 56.0675 24.4325 69.0929 40.5 69.0929C56.5675 69.0929 69.5929 56.0675 69.5929 40C69.5929 23.9325 56.5675 10.9071 40.5 10.9071C24.4325 10.9071 11.4071 23.9325 11.4071 40Z"
                fill="#2F2E30"
              />
              <circle cx="40.5" cy="40" r="29" fill="black" />
              <path
                d="M54.6416 25H47.9883L48.8216 33.3333C48.8216 33.3333 50.4883 35 52.9883 35C54.3006 35.0017 55.5684 34.524 56.5533 33.6567C56.6574 33.5594 56.735 33.4372 56.7787 33.3016C56.8224 33.166 56.8309 33.0214 56.8033 32.8817L55.6266 25.8333C55.5873 25.6005 55.4668 25.3891 55.2865 25.2366C55.1062 25.084 54.8778 25.0002 54.6416 25V25Z"
                stroke="white"
                strokeWidth="2"
              />
              <path
                d="M47.9883 25L48.8216 33.3333C48.8216 33.3333 47.1549 35 44.6549 35C42.1549 35 40.4883 33.3333 40.4883 33.3333V25H47.9883Z"
                stroke="#FAFAFA"
                strokeWidth="2"
              />
              <path
                d="M40.4886 25V33.3333C40.4886 33.3333 38.8219 35 36.3219 35C33.8219 35 32.1553 33.3333 32.1553 33.3333L32.9886 25H40.4886Z"
                stroke="#FAFAFA"
                strokeWidth="2"
              />
              <path
                d="M32.9883 25H26.3366C26.0999 24.9999 25.8709 25.0838 25.6902 25.2367C25.5096 25.3896 25.389 25.6016 25.3499 25.835L24.1749 32.8833C24.1475 33.0231 24.156 33.1676 24.1997 33.3032C24.2435 33.4387 24.321 33.5609 24.4249 33.6583C24.9716 34.1417 26.1933 35.0017 27.9883 35.0017C30.4883 35.0017 32.1549 33.335 32.1549 33.335L32.9883 25.0017V25Z"
                stroke="#FAFAFA"
                strokeWidth="2"
              />
              <path
                d="M25.5 35V51.6667C25.5 52.5507 25.8512 53.3986 26.4763 54.0237C27.1014 54.6488 27.9493 55 28.8333 55H52.1667C53.0507 55 53.8986 54.6488 54.5237 54.0237C55.1488 53.3986 55.5 52.5507 55.5 51.6667V35"
                stroke="#FAFAFA"
                strokeWidth="2"
              />
              <path
                d="M45.2217 55V45C45.2217 44.1159 44.8705 43.2681 44.2454 42.6429C43.6202 42.0178 42.7724 41.6666 41.8883 41.6666H38.555C37.671 41.6666 36.8231 42.0178 36.198 42.6429C35.5729 43.2681 35.2217 44.1159 35.2217 45V55"
                stroke="#FAFAFA"
                strokeWidth="2"
                strokeMiterlimit="16"
              />
            </svg>
          </div>
          <p className="font-bold text-2xl">10.5k </p>
          <p className="text-base text-center">Sallers active our site</p>
        </div>
        <div className="rounded border-2 flex flex-col gap-3 justify-center items-center p-3 hover:text-white hover:bg-secondary hover:shadow-lg hover:transform transition-all duration-200">
          <div>
            <svg
              width="81"
              height="80"
              viewBox="0 0 81 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.3"
                d="M80.5 40C80.5 62.0914 62.5914 80 40.5 80C18.4086 80 0.5 62.0914 0.5 40C0.5 17.9086 18.4086 0 40.5 0C62.5914 0 80.5 17.9086 80.5 40ZM11.4071 40C11.4071 56.0675 24.4325 69.0929 40.5 69.0929C56.5675 69.0929 69.5929 56.0675 69.5929 40C69.5929 23.9325 56.5675 10.9071 40.5 10.9071C24.4325 10.9071 11.4071 23.9325 11.4071 40Z"
                fill="#2F2E30"
              />
              <circle cx="40.5" cy="40" r="29" fill="black" />
              <path
                d="M54.6416 25H47.9883L48.8216 33.3333C48.8216 33.3333 50.4883 35 52.9883 35C54.3006 35.0017 55.5684 34.524 56.5533 33.6567C56.6574 33.5594 56.735 33.4372 56.7787 33.3016C56.8224 33.166 56.8309 33.0214 56.8033 32.8817L55.6266 25.8333C55.5873 25.6005 55.4668 25.3891 55.2865 25.2366C55.1062 25.084 54.8778 25.0002 54.6416 25V25Z"
                stroke="white"
                strokeWidth="2"
              />
              <path
                d="M47.9883 25L48.8216 33.3333C48.8216 33.3333 47.1549 35 44.6549 35C42.1549 35 40.4883 33.3333 40.4883 33.3333V25H47.9883Z"
                stroke="#FAFAFA"
                strokeWidth="2"
              />
              <path
                d="M40.4886 25V33.3333C40.4886 33.3333 38.8219 35 36.3219 35C33.8219 35 32.1553 33.3333 32.1553 33.3333L32.9886 25H40.4886Z"
                stroke="#FAFAFA"
                strokeWidth="2"
              />
              <path
                d="M32.9883 25H26.3366C26.0999 24.9999 25.8709 25.0838 25.6902 25.2367C25.5096 25.3896 25.389 25.6016 25.3499 25.835L24.1749 32.8833C24.1475 33.0231 24.156 33.1676 24.1997 33.3032C24.2435 33.4387 24.321 33.5609 24.4249 33.6583C24.9716 34.1417 26.1933 35.0017 27.9883 35.0017C30.4883 35.0017 32.1549 33.335 32.1549 33.335L32.9883 25.0017V25Z"
                stroke="#FAFAFA"
                strokeWidth="2"
              />
              <path
                d="M25.5 35V51.6667C25.5 52.5507 25.8512 53.3986 26.4763 54.0237C27.1014 54.6488 27.9493 55 28.8333 55H52.1667C53.0507 55 53.8986 54.6488 54.5237 54.0237C55.1488 53.3986 55.5 52.5507 55.5 51.6667V35"
                stroke="#FAFAFA"
                strokeWidth="2"
              />
              <path
                d="M45.2217 55V45C45.2217 44.1159 44.8705 43.2681 44.2454 42.6429C43.6202 42.0178 42.7724 41.6666 41.8883 41.6666H38.555C37.671 41.6666 36.8231 42.0178 36.198 42.6429C35.5729 43.2681 35.2217 44.1159 35.2217 45V55"
                stroke="#FAFAFA"
                strokeWidth="2"
                strokeMiterlimit="16"
              />
            </svg>
          </div>
          <p className="font-bold text-2xl">10.5k </p>
          <p className="text-base text-center">Sallers active our site</p>
        </div>
        <div className="rounded border-2 flex flex-col gap-3 justify-center items-center p-3 hover:text-white hover:bg-secondary hover:shadow-lg hover:transform transition-all duration-200">
          <div>
            <svg
              width="81"
              height="80"
              viewBox="0 0 81 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.3"
                d="M80.5 40C80.5 62.0914 62.5914 80 40.5 80C18.4086 80 0.5 62.0914 0.5 40C0.5 17.9086 18.4086 0 40.5 0C62.5914 0 80.5 17.9086 80.5 40ZM11.4071 40C11.4071 56.0675 24.4325 69.0929 40.5 69.0929C56.5675 69.0929 69.5929 56.0675 69.5929 40C69.5929 23.9325 56.5675 10.9071 40.5 10.9071C24.4325 10.9071 11.4071 23.9325 11.4071 40Z"
                fill="#2F2E30"
              />
              <circle cx="40.5" cy="40" r="29" fill="black" />
              <path
                d="M54.6416 25H47.9883L48.8216 33.3333C48.8216 33.3333 50.4883 35 52.9883 35C54.3006 35.0017 55.5684 34.524 56.5533 33.6567C56.6574 33.5594 56.735 33.4372 56.7787 33.3016C56.8224 33.166 56.8309 33.0214 56.8033 32.8817L55.6266 25.8333C55.5873 25.6005 55.4668 25.3891 55.2865 25.2366C55.1062 25.084 54.8778 25.0002 54.6416 25V25Z"
                stroke="white"
                strokeWidth="2"
              />
              <path
                d="M47.9883 25L48.8216 33.3333C48.8216 33.3333 47.1549 35 44.6549 35C42.1549 35 40.4883 33.3333 40.4883 33.3333V25H47.9883Z"
                stroke="#FAFAFA"
                strokeWidth="2"
              />
              <path
                d="M40.4886 25V33.3333C40.4886 33.3333 38.8219 35 36.3219 35C33.8219 35 32.1553 33.3333 32.1553 33.3333L32.9886 25H40.4886Z"
                stroke="#FAFAFA"
                strokeWidth="2"
              />
              <path
                d="M32.9883 25H26.3366C26.0999 24.9999 25.8709 25.0838 25.6902 25.2367C25.5096 25.3896 25.389 25.6016 25.3499 25.835L24.1749 32.8833C24.1475 33.0231 24.156 33.1676 24.1997 33.3032C24.2435 33.4387 24.321 33.5609 24.4249 33.6583C24.9716 34.1417 26.1933 35.0017 27.9883 35.0017C30.4883 35.0017 32.1549 33.335 32.1549 33.335L32.9883 25.0017V25Z"
                stroke="#FAFAFA"
                strokeWidth="2"
              />
              <path
                d="M25.5 35V51.6667C25.5 52.5507 25.8512 53.3986 26.4763 54.0237C27.1014 54.6488 27.9493 55 28.8333 55H52.1667C53.0507 55 53.8986 54.6488 54.5237 54.0237C55.1488 53.3986 55.5 52.5507 55.5 51.6667V35"
                stroke="#FAFAFA"
                strokeWidth="2"
              />
              <path
                d="M45.2217 55V45C45.2217 44.1159 44.8705 43.2681 44.2454 42.6429C43.6202 42.0178 42.7724 41.6666 41.8883 41.6666H38.555C37.671 41.6666 36.8231 42.0178 36.198 42.6429C35.5729 43.2681 35.2217 44.1159 35.2217 45V55"
                stroke="#FAFAFA"
                strokeWidth="2"
                strokeMiterlimit="16"
              />
            </svg>
          </div>
          <p className="font-bold text-2xl">10.5k </p>
          <p className="text-base text-center">Sallers active our site</p>
        </div>
      </div>
      <AboutSlider />
      <div className="services flex flex-col md:flex-row gap-4 md:gap-8 py-10 ">
        <div className="flex flex-col justify-center text-center items-center gap-3">
          <div className="svg">
            <svg
              width="81"
              height="80"
              viewBox="0 0 81 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.3"
                d="M80.5 40C80.5 62.0914 62.5914 80 40.5 80C18.4086 80 0.5 62.0914 0.5 40C0.5 17.9086 18.4086 0 40.5 0C62.5914 0 80.5 17.9086 80.5 40ZM11.4071 40C11.4071 56.0675 24.4325 69.0929 40.5 69.0929C56.5675 69.0929 69.5929 56.0675 69.5929 40C69.5929 23.9325 56.5675 10.9071 40.5 10.9071C24.4325 10.9071 11.4071 23.9325 11.4071 40Z"
                fill="#2F2E30"
              />
              <circle cx="40.5" cy="40" r="29" fill="black" />
              <g clipPath="url(#clip0_6682_3513)">
                <path
                  d="M32.1663 51.6667C34.0073 51.6667 35.4997 50.1743 35.4997 48.3333C35.4997 46.4924 34.0073 45 32.1663 45C30.3254 45 28.833 46.4924 28.833 48.3333C28.833 50.1743 30.3254 51.6667 32.1663 51.6667Z"
                  stroke="#FAFAFA"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M48.8333 51.6667C50.6743 51.6667 52.1667 50.1743 52.1667 48.3333C52.1667 46.4924 50.6743 45 48.8333 45C46.9924 45 45.5 46.4924 45.5 48.3333C45.5 50.1743 46.9924 51.6667 48.8333 51.6667Z"
                  stroke="#FAFAFA"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M28.833 48.3335H27.4997C26.3951 48.3335 25.4997 47.4381 25.4997 46.3335V41.6668M23.833 28.3335H40.1663C41.2709 28.3335 42.1663 29.2289 42.1663 30.3335V48.3335M35.4997 48.3335H45.4997M52.1663 48.3335H53.4997C54.6042 48.3335 55.4997 47.4381 55.4997 46.3335V38.3335M55.4997 38.3335H42.1663M55.4997 38.3335L51.0823 30.9712C50.7208 30.3688 50.0698 30.0002 49.3673 30.0002H42.1663"
                  stroke="#FAFAFA"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M28.5 48H27.1667C26.0621 48 25.1667 47.1046 25.1667 46V41.3333M23.5 28H39.8333C40.9379 28 41.8333 28.8954 41.8333 30V48M35.5 48H45.1667M52.5 48H53.1667C54.2712 48 55.1667 47.1046 55.1667 46V38M55.1667 38H41.8333M55.1667 38L50.7493 30.6377C50.3878 30.0353 49.7368 29.6667 49.0343 29.6667H41.8333"
                  stroke="#FAFAFA"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M25.5 31.8181H32.1667"
                  stroke="#FAFAFA"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22.3184 35.4546H28.985"
                  stroke="#FAFAFA"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M25.5 39.0908H32.1667"
                  stroke="#FAFAFA"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_6682_3513">
                  <rect
                    width="40"
                    height="40"
                    fill="white"
                    transform="translate(20.5 20)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <h2 className="font-semibold text-xl">FREE AND FAST DELIVERY</h2>
          <p className="text-sm">Free delivery for all orders over $140</p>
        </div>
        <div className="flex flex-col justify-center text-center items-center gap-3">
          <div className="svg">
            <svg
              width="81"
              height="80"
              viewBox="0 0 81 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.3"
                d="M80.5 40C80.5 62.0914 62.5914 80 40.5 80C18.4086 80 0.5 62.0914 0.5 40C0.5 17.9086 18.4086 0 40.5 0C62.5914 0 80.5 17.9086 80.5 40ZM11.4071 40C11.4071 56.0675 24.4325 69.0929 40.5 69.0929C56.5675 69.0929 69.5929 56.0675 69.5929 40C69.5929 23.9325 56.5675 10.9071 40.5 10.9071C24.4325 10.9071 11.4071 23.9325 11.4071 40Z"
                fill="#2F2E30"
              />
              <circle cx="40.5" cy="40" r="29" fill="black" />
              <g clipPath="url(#clip0_6682_3513)">
                <path
                  d="M32.1663 51.6667C34.0073 51.6667 35.4997 50.1743 35.4997 48.3333C35.4997 46.4924 34.0073 45 32.1663 45C30.3254 45 28.833 46.4924 28.833 48.3333C28.833 50.1743 30.3254 51.6667 32.1663 51.6667Z"
                  stroke="#FAFAFA"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M48.8333 51.6667C50.6743 51.6667 52.1667 50.1743 52.1667 48.3333C52.1667 46.4924 50.6743 45 48.8333 45C46.9924 45 45.5 46.4924 45.5 48.3333C45.5 50.1743 46.9924 51.6667 48.8333 51.6667Z"
                  stroke="#FAFAFA"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M28.833 48.3335H27.4997C26.3951 48.3335 25.4997 47.4381 25.4997 46.3335V41.6668M23.833 28.3335H40.1663C41.2709 28.3335 42.1663 29.2289 42.1663 30.3335V48.3335M35.4997 48.3335H45.4997M52.1663 48.3335H53.4997C54.6042 48.3335 55.4997 47.4381 55.4997 46.3335V38.3335M55.4997 38.3335H42.1663M55.4997 38.3335L51.0823 30.9712C50.7208 30.3688 50.0698 30.0002 49.3673 30.0002H42.1663"
                  stroke="#FAFAFA"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M28.5 48H27.1667C26.0621 48 25.1667 47.1046 25.1667 46V41.3333M23.5 28H39.8333C40.9379 28 41.8333 28.8954 41.8333 30V48M35.5 48H45.1667M52.5 48H53.1667C54.2712 48 55.1667 47.1046 55.1667 46V38M55.1667 38H41.8333M55.1667 38L50.7493 30.6377C50.3878 30.0353 49.7368 29.6667 49.0343 29.6667H41.8333"
                  stroke="#FAFAFA"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M25.5 31.8181H32.1667"
                  stroke="#FAFAFA"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22.3184 35.4546H28.985"
                  stroke="#FAFAFA"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M25.5 39.0908H32.1667"
                  stroke="#FAFAFA"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_6682_3513">
                  <rect
                    width="40"
                    height="40"
                    fill="white"
                    transform="translate(20.5 20)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <h2 className="font-semibold text-xl">24/7 CUSTOMER SERVICE</h2>
          <p className="text-sm">Friendly 24/7 customer support</p>
        </div>
        <div className="flex flex-col justify-center text-center items-center gap-3">
          <div className="svg">
            <svg
              width="81"
              height="80"
              viewBox="0 0 81 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.3"
                d="M80.5 40C80.5 62.0914 62.5914 80 40.5 80C18.4086 80 0.5 62.0914 0.5 40C0.5 17.9086 18.4086 0 40.5 0C62.5914 0 80.5 17.9086 80.5 40ZM11.4071 40C11.4071 56.0675 24.4325 69.0929 40.5 69.0929C56.5675 69.0929 69.5929 56.0675 69.5929 40C69.5929 23.9325 56.5675 10.9071 40.5 10.9071C24.4325 10.9071 11.4071 23.9325 11.4071 40Z"
                fill="#2F2E30"
              />
              <circle cx="40.5" cy="40" r="29" fill="black" />
              <g clipPath="url(#clip0_6682_3513)">
                <path
                  d="M32.1663 51.6667C34.0073 51.6667 35.4997 50.1743 35.4997 48.3333C35.4997 46.4924 34.0073 45 32.1663 45C30.3254 45 28.833 46.4924 28.833 48.3333C28.833 50.1743 30.3254 51.6667 32.1663 51.6667Z"
                  stroke="#FAFAFA"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M48.8333 51.6667C50.6743 51.6667 52.1667 50.1743 52.1667 48.3333C52.1667 46.4924 50.6743 45 48.8333 45C46.9924 45 45.5 46.4924 45.5 48.3333C45.5 50.1743 46.9924 51.6667 48.8333 51.6667Z"
                  stroke="#FAFAFA"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M28.833 48.3335H27.4997C26.3951 48.3335 25.4997 47.4381 25.4997 46.3335V41.6668M23.833 28.3335H40.1663C41.2709 28.3335 42.1663 29.2289 42.1663 30.3335V48.3335M35.4997 48.3335H45.4997M52.1663 48.3335H53.4997C54.6042 48.3335 55.4997 47.4381 55.4997 46.3335V38.3335M55.4997 38.3335H42.1663M55.4997 38.3335L51.0823 30.9712C50.7208 30.3688 50.0698 30.0002 49.3673 30.0002H42.1663"
                  stroke="#FAFAFA"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M28.5 48H27.1667C26.0621 48 25.1667 47.1046 25.1667 46V41.3333M23.5 28H39.8333C40.9379 28 41.8333 28.8954 41.8333 30V48M35.5 48H45.1667M52.5 48H53.1667C54.2712 48 55.1667 47.1046 55.1667 46V38M55.1667 38H41.8333M55.1667 38L50.7493 30.6377C50.3878 30.0353 49.7368 29.6667 49.0343 29.6667H41.8333"
                  stroke="#FAFAFA"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M25.5 31.8181H32.1667"
                  stroke="#FAFAFA"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22.3184 35.4546H28.985"
                  stroke="#FAFAFA"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M25.5 39.0908H32.1667"
                  stroke="#FAFAFA"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_6682_3513">
                  <rect
                    width="40"
                    height="40"
                    fill="white"
                    transform="translate(20.5 20)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <h2 className="font-semibold text-xl">MONEY BACK GUARANTEE</h2>
          <p className="text-sm">We reurn money within 30 days</p>
        </div>
      </div>
    </div>
  );
};
export default About;
