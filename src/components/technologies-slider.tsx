import { Swiper, SwiperSlide } from "swiper/react";
import {
  Html5Plain,
  Css3Plain,
  JavascriptPlain,
  WordpressPlain,
  TypescriptPlain,
  LessPlainWordmark,
  NextjsPlain,
  JqueryPlain,
} from "devicons-react";

import "swiper/css";

// import required modules
import { Autoplay } from "swiper/modules";

export function TechnologiesSlider() {
  return (
    <Swiper
      scrollbar={{
        hide: true,
      }}
      modules={[Autoplay]}
      slidesPerView={6}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: true,
      }}
    >
      <SwiperSlide>
        <a className="flex flex-col items-center justify-center" href="/">
          <Html5Plain size={80} color="currentColor" />
          <span>HTML</span>
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a className="flex flex-col items-center justify-center" href="/">
          <Css3Plain size={80} color="currentColor" />
          <span>CSS</span>
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a className="flex flex-col items-center justify-center" href="/">
          <JavascriptPlain size={80} color="currentColor" />
          <span>JAVASCRIPT</span>
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a className="flex flex-col items-center justify-center" href="/">
          <WordpressPlain size={80} color="currentColor" />
          <span>WORDPRESS</span>
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a className="flex flex-col items-center justify-center" href="/">
          <svg
            fill="currentColor"
            width="5rem"
            height="5rem"
            viewBox="0 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>react</title>
            <path d="M14.313 22.211c0.55 0.025 1.112 0.043 1.681 0.043 0.575 0 1.143-0.012 1.7-0.043-0.557 0.72-1.107 1.357-1.689 1.964l0.008-0.008c-0.579-0.6-1.135-1.238-1.659-1.902l-0.041-0.054zM8.615 21.411c1.083 0.275 2.404 0.509 3.752 0.653l0.131 0.011c0.825 1.133 1.659 2.13 2.554 3.068l-0.011-0.012c-1.311 1.463-3.080 2.491-5.081 2.86l-0.055 0.008c-0.004 0-0.008 0-0.012 0-0.248 0-0.482-0.061-0.687-0.169l0.008 0.004c-0.832-0.475-1.193-2.292-0.912-4.627 0.067-0.575 0.177-1.18 0.312-1.797zM23.398 21.398c0.118 0.474 0.229 1.078 0.308 1.692l0.009 0.086c0.287 2.334-0.067 4.149-0.892 4.634-0.184 0.102-0.404 0.162-0.638 0.162-0.023 0-0.046-0.001-0.069-0.002l0.003 0c-2.053-0.375-3.821-1.396-5.129-2.841l-0.007-0.008c0.879-0.923 1.707-1.918 2.466-2.965l0.058-0.084c1.476-0.154 2.799-0.392 4.088-0.717l-0.197 0.042zM9.784 17.666c0.25 0.49 0.512 0.978 0.8 1.468q0.431 0.731 0.881 1.428c-0.868-0.127-1.706-0.287-2.507-0.482 0.225-0.787 0.507-1.602 0.825-2.416zM22.212 17.641c0.331 0.821 0.612 1.64 0.845 2.434-0.8 0.196-1.645 0.362-2.519 0.487 0.3-0.469 0.6-0.952 0.881-1.447 0.281-0.487 0.544-0.985 0.795-1.475zM7.619 12.292c0.436 1.478 0.904 2.714 1.449 3.906l-0.075-0.182c-0.466 1.005-0.927 2.234-1.305 3.499l-0.052 0.205c-0.706-0.217-1.274-0.43-1.827-0.669l0.115 0.044c-2.164-0.921-3.564-2.132-3.564-3.092s1.4-2.177 3.564-3.094c0.525-0.225 1.1-0.428 1.694-0.617zM24.358 12.287c0.605 0.187 1.18 0.396 1.718 0.622 2.164 0.925 3.564 2.134 3.564 3.094-0.006 0.96-1.406 2.174-3.57 3.093-0.525 0.225-1.1 0.427-1.693 0.616-0.44-1.483-0.908-2.718-1.451-3.912l0.076 0.188c0.464-1.004 0.926-2.233 1.303-3.498l0.053-0.206zM20.53 11.444c0.869 0.129 1.706 0.287 2.507 0.484-0.225 0.79-0.506 1.602-0.825 2.416-0.25-0.487-0.512-0.978-0.8-1.467-0.281-0.49-0.581-0.967-0.881-1.432zM11.458 11.444c-0.3 0.471-0.6 0.953-0.88 1.45-0.281 0.487-0.544 0.977-0.794 1.467-0.331-0.82-0.612-1.637-0.845-2.433 0.8-0.187 1.643-0.354 2.518-0.482zM16 11.126c0.925 0 1.846 0.042 2.752 0.116q0.761 1.091 1.478 2.324 0.697 1.2 1.272 2.432c-0.385 0.819-0.807 1.637-1.266 2.437-0.475 0.825-0.966 1.61-1.475 2.337-0.91 0.079-1.832 0.122-2.762 0.122-0.925 0-1.846-0.044-2.752-0.116-0.507-0.727-1.002-1.505-1.478-2.324q-0.697-1.2-1.272-2.432c0.379-0.821 0.807-1.641 1.266-2.442 0.475-0.825 0.966-1.607 1.475-2.334 0.91-0.080 1.832-0.122 2.762-0.122zM15.981 7.845c0.58 0.6 1.136 1.237 1.659 1.901l0.040 0.053c-0.55-0.025-1.112-0.042-1.681-0.042-0.575 0-1.143 0.012-1.7 0.042 0.556-0.72 1.106-1.357 1.689-1.964l-0.008 0.008zM9.88 4.033c2.053 0.376 3.82 1.397 5.129 2.841l0.007 0.008c-0.879 0.924-1.707 1.919-2.466 2.968l-0.058 0.084c-1.475 0.153-2.798 0.389-4.086 0.714l0.196-0.042c-0.14-0.612-0.244-1.205-0.317-1.774-0.287-2.334 0.067-4.149 0.892-4.632 0.206-0.097 0.447-0.157 0.701-0.165l0.003-0zM22.090 4.008v0.008c0.013-0 0.028-0.001 0.044-0.001 0.239 0 0.464 0.059 0.662 0.163l-0.008-0.004c0.832 0.477 1.193 2.293 0.912 4.629-0.067 0.575-0.177 1.181-0.312 1.799-1.085-0.278-2.406-0.513-3.754-0.656l-0.128-0.011c-0.826-1.134-1.66-2.131-2.555-3.070l0.012 0.012c1.311-1.46 3.077-2.488 5.074-2.859l0.056-0.009zM22.096 2.646c-2.442 0.371-4.556 1.557-6.1 3.268l-0.008 0.009c-1.555-1.71-3.669-2.888-6.051-3.245l-0.056-0.007c-0.013-0-0.029-0-0.045-0-0.491 0-0.952 0.129-1.351 0.355l0.014-0.007c-1.718 0.991-2.103 4.079-1.216 7.954-3.804 1.175-6.278 3.053-6.278 5.032 0 1.987 2.487 3.87 6.302 5.036-0.88 3.89-0.487 6.983 1.235 7.973 0.378 0.217 0.832 0.344 1.315 0.344 0.022 0 0.044-0 0.065-0.001l-0.003 0c2.442-0.371 4.556-1.558 6.1-3.27l0.008-0.009c1.555 1.711 3.669 2.889 6.051 3.246l0.056 0.007c0.015 0 0.034 0 0.052 0 0.488 0 0.947-0.128 1.344-0.351l-0.014 0.007c1.717-0.99 2.103-4.078 1.216-7.954 3.79-1.165 6.264-3.047 6.264-5.029 0-1.987-2.487-3.87-6.302-5.039 0.88-3.886 0.487-6.982-1.235-7.973-0.382-0.219-0.84-0.348-1.328-0.348-0.013 0-0.026 0-0.039 0l0.002-0zM18.787 16.005c0 1.543-1.251 2.794-2.794 2.794s-2.794-1.251-2.794-2.794c0-1.543 1.251-2.794 2.794-2.794 0.772 0 1.47 0.313 1.976 0.818v0c0.506 0.506 0.818 1.204 0.818 1.976 0 0 0 0 0 0v0z"></path>
          </svg>
          <span>REACT</span>
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a className="flex flex-col items-center justify-center" href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="225"
            height="80"
            viewBox="0 0 118 42"
            fill="none"
          >
            <path
              d="M84.8938 16.0511H80.8608V29.8032C80.8605 29.9285 80.8104 30.0486 80.7213 30.1372C80.6323 30.2258 80.5116 30.2757 80.3856 30.2759H77.2753C77.1494 30.2757 77.0287 30.2258 76.9396 30.1372C76.8506 30.0486 76.8004 29.9285 76.8002 29.8032V16.0511H72.7435C72.6824 16.0536 72.6214 16.0439 72.5642 16.0225C72.507 16.0011 72.4546 15.9685 72.4103 15.9266C72.366 15.8847 72.3306 15.8344 72.3062 15.7786C72.2818 15.7228 72.2689 15.6627 72.2683 15.6019V13.1695C72.2689 13.1086 72.2818 13.0486 72.3062 12.9928C72.3306 12.937 72.366 12.8867 72.4103 12.8448C72.4546 12.8029 72.507 12.7703 72.5642 12.7489C72.6214 12.7275 72.6824 12.7177 72.7435 12.7202H84.8928C85.0188 12.7144 85.1419 12.7583 85.2354 12.8425C85.3288 12.9267 85.385 13.0442 85.3916 13.1695V15.6029C85.3848 15.7278 85.3286 15.8449 85.2354 15.9289C85.1422 16.0128 85.0194 16.0567 84.8938 16.0511Z"
              fill="currentColor"
            />
            <path
              d="M97.8407 30.1769C97.0097 30.2946 95.6118 30.4839 93.0476 30.4839C89.9847 30.4839 87.2786 29.7041 87.2786 25.4052V17.5586C87.2786 13.2597 90.0093 12.5035 93.0713 12.5035C95.6345 12.5035 97.0097 12.6928 97.8407 12.8105C98.173 12.8576 98.3159 12.9762 98.3159 13.2832V15.4832C98.3157 15.6085 98.2655 15.7286 98.1765 15.8172C98.0874 15.9058 97.9667 15.9557 97.8407 15.956H92.8347C91.7187 15.956 91.3155 16.3336 91.3155 17.5625V19.7125H97.6515C97.7774 19.7128 97.8981 19.7627 97.9872 19.8513C98.0762 19.9399 98.1264 20.06 98.1266 20.1853V22.4294C98.1264 22.5547 98.0762 22.6748 97.9872 22.7634C97.8981 22.852 97.7774 22.9019 97.6515 22.9021H91.3155V25.4062C91.3155 26.6341 91.7187 27.0127 92.8347 27.0127H97.8407C97.9667 27.013 98.0874 27.0629 98.1765 27.1515C98.2655 27.2401 98.3157 27.3602 98.3159 27.4855V29.6825C98.3159 29.9876 98.173 30.1298 97.8407 30.1769Z"
              fill="currentColor"
            />
            <path
              d="M115.754 30.271H111.979C111.671 30.271 111.528 30.173 111.362 29.917L108.089 24.7471L105.124 29.8032C104.957 30.0866 104.792 30.2759 104.532 30.2759H101.019C100.781 30.2759 100.663 30.1337 100.663 29.9689C100.668 29.9111 100.684 29.8548 100.71 29.8032L105.853 21.2701L100.657 13.1675C100.631 13.1243 100.615 13.0756 100.61 13.0253C100.618 12.9385 100.66 12.8583 100.726 12.8012C100.792 12.744 100.878 12.7144 100.966 12.7183H104.788C105.049 12.7183 105.239 12.9547 105.379 13.1675L108.417 17.9392L111.356 13.1675C111.475 12.9547 111.689 12.7183 111.948 12.7183H115.461C115.549 12.7144 115.635 12.744 115.701 12.8012C115.767 12.8583 115.809 12.9385 115.817 13.0253C115.812 13.0756 115.796 13.1243 115.77 13.1675L110.599 21.3201L115.992 29.8032C116.034 29.8753 116.058 29.9563 116.063 30.0396C116.064 30.1769 115.944 30.271 115.754 30.271Z"
              fill="currentColor"
            />
            <path
              d="M66.5781 12.7673C66.4933 12.7676 66.4112 12.797 66.3458 12.8507C66.2804 12.9043 66.2357 12.9788 66.2193 13.0616L62.7728 25.7524C62.7255 26.0123 62.6545 26.1065 62.4406 26.1065C62.2266 26.1065 62.1557 26.0084 62.1083 25.7524L58.6579 13.0586C58.6415 12.9759 58.5968 12.9014 58.5314 12.8477C58.466 12.7941 58.3839 12.7646 58.2991 12.7644H54.9069C54.8517 12.7645 54.7973 12.7769 54.7476 12.8008C54.6979 12.8247 54.6543 12.8594 54.62 12.9024C54.5857 12.9454 54.5616 12.9955 54.5495 13.0491C54.5374 13.1026 54.5375 13.1582 54.55 13.2117C54.55 13.2117 58.7595 27.766 58.8058 27.9092C59.3677 29.6433 60.7311 30.4721 62.4662 30.4721C64.1185 30.4721 65.5607 29.6041 66.1246 27.9141C66.1916 27.718 70.3075 13.2107 70.3075 13.2107C70.3198 13.1573 70.3198 13.1018 70.3076 13.0484C70.2954 12.995 70.2713 12.945 70.237 12.9021C70.2027 12.8592 70.1592 12.8246 70.1096 12.8008C70.06 12.7769 70.0057 12.7645 69.9506 12.7644L66.5781 12.7673Z"
              fill="currentColor"
            />
            <path
              d="M45.6776 0H8.80763C5.94872 0 4.11804 3.02386 5.45581 5.5377L9.1438 12.4858H2.45791C2.0345 12.4859 1.6183 12.5949 1.24962 12.802C0.880939 13.0092 0.572279 13.3075 0.353533 13.6682C0.134787 14.0289 0.0133699 14.4397 0.00104248 14.8608C-0.0112849 15.2818 0.0858942 15.699 0.283168 16.0717L12.1456 38.4098C12.3548 38.8027 12.6675 39.1314 13.0504 39.3607C13.4332 39.59 13.8716 39.7112 14.3184 39.7112C14.7652 39.7112 15.2036 39.59 15.5864 39.3607C15.9693 39.1314 16.2821 38.8027 16.4912 38.4098L19.7129 32.3758L23.7548 39.9889C25.1773 42.6666 29.0309 42.6715 30.4584 39.9968L48.9387 5.39744C50.245 2.9503 48.4626 0 45.6776 0ZM29.1157 14.7829L21.1472 29.7051C21.008 29.9663 20.7998 30.1849 20.5451 30.3374C20.2904 30.4898 19.9988 30.5703 19.7015 30.5703C19.4043 30.5703 19.1127 30.4898 18.858 30.3374C18.6032 30.1849 18.3951 29.9663 18.2558 29.7051L10.3643 14.8457C10.2324 14.5979 10.167 14.3205 10.1745 14.0402C10.182 13.76 10.2621 13.4864 10.4071 13.246C10.552 13.0056 10.7569 12.8065 11.0019 12.668C11.2469 12.5295 11.5237 12.4562 11.8055 12.4554H27.7099C27.9846 12.4554 28.2547 12.5262 28.4938 12.6608C28.733 12.7954 28.933 12.9892 29.0745 13.2235C29.216 13.4578 29.2942 13.7246 29.3014 13.9978C29.3086 14.2711 29.2446 14.5415 29.1157 14.7829Z"
              fill="currentColor"
            />
          </svg>
          <span>VTEX</span>
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a className="flex flex-col items-center justify-center" href="/">
          <TypescriptPlain size={80} color="currentColor" />
          <span>TYPESCRIPT</span>
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a className="flex flex-col items-center justify-center" href="/">
          <svg
            width="5rem"
            height="5rem"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>file_type_tailwind</title>
            <path
              d="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z"
              fill="currentColor"
            />
          </svg>
          <span>TAILWIND</span>
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a className="flex flex-col items-center justify-center" href="/">
          <svg
            fill="currentColor"
            width="5rem"
            height="5rem"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15.092 22.146c-0.015 0.030-0.030 0.054 0 0zM27.548 17.796c-1.006-0-1.998 0.23-2.9 0.675-0.295-0.595-0.6-1.115-0.65-1.505-0.060-0.455-0.125-0.725-0.055-1.265s0.385-1.305 0.38-1.36c-0.005-0.055-0.070-0.33-0.715-0.335s-1.2 0.125-1.265 0.295c-0.114 0.311-0.203 0.63-0.265 0.955-0.115 0.585-1.289 2.675-1.954 3.765-0.22-0.425-0.405-0.8-0.445-1.1-0.060-0.455-0.125-0.725-0.055-1.265s0.385-1.305 0.38-1.36c-0.005-0.055-0.070-0.33-0.714-0.335s-1.2 0.125-1.265 0.295c-0.065 0.17-0.135 0.57-0.265 0.955s-1.695 3.865-2.104 4.77c-0.21 0.46-0.39 0.83-0.52 1.080-0.020 0.040-0.035 0.065-0.045 0.085 0.015-0.025 0.025-0.050 0.025-0.040-0.11 0.215-0.175 0.335-0.175 0.335v0.005c-0.085 0.16-0.18 0.305-0.225 0.305-0.030 0-0.095-0.42 0.015-0.995 0.235-1.21 0.79-3.090 0.785-3.155-0.005-0.035 0.105-0.36-0.365-0.535-0.455-0.165-0.62 0.11-0.66 0.11s-0.070 0.1-0.070 0.1c0 0 0.505-2.12-0.97-2.12-0.92 0-2.2 1.010-2.829 1.925-0.395 0.215-1.25 0.68-2.15 1.175-0.345 0.19-0.7 0.385-1.035 0.57-0.025-0.025-0.045-0.050-0.070-0.075-1.79-1.91-5.094-3.26-4.954-5.825 0.050-0.935 0.375-3.39 6.354-6.37 4.9-2.44 8.817-1.77 9.492-0.28 0.97 2.125-2.095 6.080-7.183 6.65-1.94 0.215-2.959-0.535-3.214-0.815-0.265-0.295-0.305-0.31-0.405-0.255-0.165 0.090-0.060 0.35 0 0.505 0.15 0.395 0.775 1.095 1.84 1.445 0.935 0.305 3.209 0.475 5.958-0.59 3.089-1.19 5.494-4.505 4.788-7.28-0.718-2.82-5.394-3.745-9.815-2.175-2.635 0.935-5.484 2.405-7.533 4.32-2.435 2.28-2.824 4.265-2.664 5.095 0.57 2.945 4.629 4.865 6.253 6.285-0.080 0.045-0.155 0.085-0.225 0.125-0.815 0.405-3.909 2.025-4.684 3.735-0.875 1.94 0.145 3.33 0.814 3.52 2.090 0.58 4.229-0.465 5.379-2.18s1.010-3.955 0.48-4.975c-0.005-0.015-0.015-0.025-0.020-0.040 0.21-0.125 0.425-0.25 0.64-0.375 0.415-0.245 0.82-0.47 1.175-0.665-0.2 0.54-0.345 1.19-0.42 2.13-0.090 1.1 0.365 2.525 0.955 3.085 0.26 0.245 0.574 0.25 0.77 0.25 0.69 0 1-0.57 1.345-1.25 0.425-0.83 0.8-1.795 0.8-1.795s-0.47 2.61 0.815 2.61c0.47 0 0.94-0.605 1.15-0.915v0.005c0 0 0.010-0.020 0.035-0.060 0.050-0.075 0.075-0.12 0.075-0.12v-0.015c0.19-0.325 0.605-1.070 1.23-2.3 0.81-1.59 1.584-3.575 1.584-3.575 0.075 0.436 0.179 0.867 0.31 1.29 0.14 0.475 0.435 0.995 0.67 1.5-0.19 0.26-0.305 0.41-0.305 0.41 0 0.004 0.002 0.007 0.005 0.010-0.15 0.2-0.32 0.415-0.495 0.625-0.639 0.76-1.4 1.63-1.5 1.88-0.12 0.295-0.090 0.515 0.14 0.685 0.17 0.13 0.47 0.15 0.785 0.125 0.575-0.040 0.98-0.18 1.175-0.27 0.36-0.129 0.699-0.307 1.010-0.53 0.625-0.46 1.005-1.12 0.97-1.99-0.020-0.48-0.175-0.96-0.365-1.41 0.055-0.080 0.115-0.165 0.17-0.25 0.989-1.445 1.755-3.031 1.755-3.031 0.075 0.436 0.178 0.867 0.31 1.29 0.12 0.405 0.355 0.85 0.57 1.285-0.93 0.755-1.505 1.63-1.704 2.205-0.37 1.065-0.080 1.545 0.465 1.655 0.245 0.050 0.595-0.065 0.855-0.175 0.386-0.129 0.75-0.316 1.079-0.555 0.625-0.46 1.23-1.105 1.189-1.98-0.015-0.395-0.125-0.79-0.27-1.17 0.785-0.33 1.805-0.51 3.105-0.36 2.784 0.325 3.329 2.065 3.224 2.79s-0.69 1.13-0.885 1.25c-0.195 0.12-0.255 0.165-0.24 0.255 0.025 0.13 0.115 0.125 0.28 0.095 0.23-0.040 1.46-0.59 1.515-1.935 0.080-1.7-1.555-3.57-4.45-3.555zM6.089 25.031c-0.92 1.005-2.209 1.385-2.764 1.065-0.595-0.346-0.36-1.825 0.774-2.896 0.69-0.65 1.58-1.25 2.17-1.62 0.135-0.080 0.33-0.2 0.57-0.345 0.040-0.025 0.060-0.035 0.060-0.035 0.045-0.030 0.095-0.055 0.145-0.085 0.414 1.52 0.015 2.86-0.955 3.915zM12.807 20.461c-0.32 0.785-0.994 2.785-1.405 2.68-0.35-0.090-0.565-1.615-0.070-3.115 0.25-0.755 0.78-1.655 1.095-2.005 0.505-0.565 1.060-0.745 1.19-0.52 0.175 0.295-0.61 2.47-0.81 2.96zM18.357 23.111c-0.135 0.070-0.26 0.115-0.32 0.080-0.045-0.025 0.055-0.12 0.055-0.12s0.695-0.745 0.97-1.085c0.16-0.2 0.345-0.435 0.545-0.695 0 0.025 0.005 0.050 0.005 0.080-0.006 0.895-0.866 1.5-1.256 1.74zM22.637 22.136c-0.1-0.070-0.085-0.305 0.25-1.035 0.13-0.285 0.43-0.765 0.95-1.225 0.059 0.174 0.091 0.356 0.095 0.54-0.005 1.125-0.81 1.545-1.295 1.72z" />
          </svg>
          <span>SASS</span>
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a className="flex flex-col items-center justify-center" href="/">
          <LessPlainWordmark size={80} color="currentColor" />
          <span>LESS</span>
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a className="flex flex-col items-center justify-center" href="/">
          <NextjsPlain size={80} color="currentColor" />
          <span>Next</span>
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a className="flex flex-col items-center justify-center" href="/">
          <JqueryPlain size={80} color="currentColor" />
          <span>Jquery</span>
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a className="flex flex-col items-center justify-center" href="/">
          <svg
            fill="currentColor"
            width="5rem"
            height="5rem"
            viewBox="0 0 24 24"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>styled-components icon</title>
            <path d="M16.214 6.762l-.075.391c-.116.741-.074.953.244 1.228l.307.254-.318 1.418c-.19.846-.423 1.555-.571 1.788-.127.201-.275.497-.307.656-.053.19-.233.381-.508.55-.243.138-.72.508-1.058.805-.27.243-.456.392-.557.456l-.33.261c-.106.17-.166.307-.189.411-.023.107-.01.178.024.23.033.05.09.085.168.107a.954.954 0 00.282.023 3 3 0 00.632-.112c.07-.019.125-.037.173-.053.074-.091.245-.263.548-.562.804-.793 1.111-1.227.794-1.11-.117.042-.064-.064.137-.276.424-.413.667-1.037 1.175-2.994.402-1.545.402-1.567.698-1.567.139 0 .532.024.532.024V6.762h-.902zm3.839 3.165c-.064 0-.17.096-.233.202-.116.19.021.306 1.767 1.396 1.037.657 1.873 1.217 1.852 1.26-.021.031-.868.582-1.883 1.217-1.842 1.142-1.852 1.153-1.683 1.386.212.275 0 .37 2.391-1.122L24 13.155v-.836l-1.937-1.196c-1.047-.656-1.957-1.185-2.01-1.196zm-16.085.117c-.053 0-.963.54-2.01 1.185L0 12.425v.836l1.947 1.217c1.08.666 1.99 1.217 2.032 1.217.042 0 .127-.096.212-.212.127-.201.02-.286-1.768-1.418C.72 12.996.54 12.848.71 12.732c.106-.074.91-.572 1.778-1.111 1.979-1.217 1.873-1.133 1.714-1.387-.063-.105-.17-.2-.233-.19zm8.684.023c-.292-.002-.92.443-2.8 1.978-.081.193-.088.326-.051.412.024.059.068.1.129.13.06.03.138.048.224.055.171.015.373-.012.536-.044l.11-.025a.386.386 0 01.144-.118c.116-.064.603-.508 1.09-.984.857-.868 1.058-1.26.709-1.387a.24.24 0 00-.09-.017zm2.196.603c-.257.007-.72.305-1.513.938-.398.323-.65.497-.785.533l-.524.414c-.197.36-.226.583-.174.706a.25.25 0 00.138.134.644.644 0 00.24.045 2.18 2.18 0 00.58-.085 3.466 3.466 0 00.291-.092l.029-.012.053-.028c.1-.129.33-.372.618-.652.91-.878 1.375-1.502 1.28-1.735-.043-.113-.117-.17-.233-.166zm-2.424 1.08c-.074.008-.24.136-.539.398-.432.382-.903.602-1.066.504a3.97 3.97 0 01-.114.024c-.166.033-.373.06-.558.045a.708.708 0 01-.252-.063.337.337 0 01-.168-.17c-.037-.09-.037-.202.005-.345l-.65.534-1.471 1.217V15.867l4.82-3.797a.41.41 0 01.016-.123c.037-.134.035-.202-.023-.196zm2.074.639c-.073 0-.195.103-.39.31-.265.283-.682.557-.903.613l-.034.018a2.191 2.191 0 01-.11.042c-.06.02-.138.044-.228.068-.18.049-.404.094-.604.089a.732.732 0 01-.275-.054.344.344 0 01-.184-.18c-.058-.139-.035-.334.092-.611L7.61 16.033v1.205h1.868l3.962-3.112c.103-.114.258-.27.467-.465.56-.519.687-.698.687-.963 0-.206-.023-.31-.096-.31zm.943 1.95l-.339.338c-.19.18-.529.402-.761.497l-.046.02-.003.005-.01.01c-.009.007-.013.008-.02.011a3.432 3.432 0 01-.282.093 3.058 3.058 0 01-.65.115 1.035 1.035 0 01-.31-.027.364.364 0 01-.218-.144c-.048-.074-.062-.173-.035-.295a1.11 1.11 0 01.095-.25l-3.197 2.526h4.252l.508-.582c.698-.814 1.016-1.396 1.016-1.894z" />
          </svg>
          <span>Styled Components</span>
        </a>
      </SwiperSlide>
    </Swiper>
  );
}