import React from 'react';

export default function SettingsIcon({ active }) {
  const color = active ? '#3F9B06' : '#666666';
  const side = document.body.offsetWidth * 0.029;
  return (
    <svg
      width={side}
      height={side}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0)">
        <path
          d="M13.3275 25.7736C13.3275 29.7799 16.587 33.039 20.5928 33.039C24.5991 33.039 27.8582 29.7799 27.8582 25.7736C27.8582 21.7678 24.5991 18.5083 20.5928 18.5083C16.587 18.5083 13.3275 21.7678 13.3275 25.7736ZM26.1688 25.7736C26.1688 28.8485 23.6673 31.3496 20.5928 31.3496C17.5184 31.3496 15.0168 28.8485 15.0168 25.7736C15.0168 22.6992 17.5184 20.1981 20.5928 20.1981C23.6673 20.1981 26.1688 22.6992 26.1688 25.7736Z"
          fill={color}
        />
        <path
          d="M42.8986 33.5156C40.242 33.5156 38.0806 35.6771 38.0806 38.3337C38.0806 40.9907 40.242 43.1522 42.8986 43.1522C43.5792 43.1522 44.2376 43.0129 44.8554 42.7382C45.2814 42.5485 45.4732 42.049 45.2839 41.623C45.0942 41.1967 44.5948 41.0053 44.1688 41.1945C43.7689 41.3723 43.3412 41.4628 42.8986 41.4628C41.1734 41.4628 39.7699 40.0589 39.7699 38.3337C39.7699 36.6085 41.1734 35.205 42.8986 35.205C44.6243 35.205 46.0278 36.6085 46.0278 38.3337C46.0278 38.702 45.9645 39.0617 45.8402 39.4039C45.6808 39.8423 45.9068 40.3268 46.3452 40.4861C46.7836 40.6455 47.2681 40.4195 47.4278 39.9811C47.6197 39.4535 47.7171 38.8994 47.7171 38.3337C47.7171 35.6771 45.5557 33.5156 42.8986 33.5156Z"
          fill={color}
        />
        <path
          d="M53.0849 39.2567C53.1126 38.9495 53.1263 38.6406 53.1263 38.3338C53.1263 38.0271 53.1126 37.7182 53.0849 37.411L55.3352 35.3047C56.0495 34.6356 56.2067 33.576 55.7175 32.7284L54.1628 30.0359C53.6732 29.1878 52.6773 28.7943 51.7403 29.0788L48.7868 29.9756C48.2843 29.6206 47.7503 29.3117 47.1923 29.0528L46.4933 26.0496C46.2711 25.096 45.4324 24.4304 44.4536 24.4304H41.3441C40.3649 24.4304 39.5262 25.096 39.3044 26.0496L38.6055 29.0528C38.5157 29.0942 38.4282 29.1391 38.3397 29.1831L36.509 27.4694C36.5688 26.908 36.5987 26.3393 36.5987 25.7736C36.5987 25.2084 36.5688 24.6397 36.509 24.0779L40.2089 20.6142C41.2587 19.6315 41.4898 18.0755 40.7708 16.8301L38.4269 12.7712C37.7078 11.5258 36.2449 10.9482 34.8688 11.366L30.0123 12.8413C29.098 12.1735 28.1157 11.6049 27.0822 11.1447L26.7763 9.82923C26.6703 9.37507 26.2166 9.09223 25.762 9.19819C25.3074 9.30414 25.025 9.75831 25.131 10.2125L25.5339 11.9441C25.5954 12.2098 25.7821 12.429 26.0342 12.5333C27.2121 13.0195 28.3216 13.6621 29.3308 14.4426C29.5474 14.6101 29.8315 14.6622 30.093 14.5828L35.3597 12.9827C35.9805 12.7943 36.6401 13.0549 36.964 13.6163L39.3079 17.6752C39.6321 18.2366 39.5279 18.9381 39.0545 19.3812L35.0422 23.1371C34.8427 23.3238 34.7457 23.5955 34.7825 23.8664C34.8666 24.4949 34.9094 25.1366 34.9094 25.7736C34.9094 26.4119 34.8666 27.0537 34.7825 27.6809C34.7457 27.9517 34.8427 28.2235 35.0422 28.4102L36.5722 29.8427L34.0574 29.0793C33.1205 28.7947 32.1246 29.1882 31.6354 30.0359L30.0802 32.7288C29.591 33.5764 29.7482 34.6356 30.463 35.3047L32.7129 37.4114C32.7026 37.5255 32.6962 37.64 32.6898 37.7545L30.093 36.9658C29.8315 36.8863 29.5474 36.9384 29.3308 37.1059C28.3208 37.8874 27.2117 38.5291 26.035 39.014C25.7825 39.1178 25.5958 39.3374 25.5339 39.6036L24.2876 44.9591C24.1406 45.5906 23.5852 46.032 22.9371 46.032H18.2497C17.6012 46.032 17.0458 45.5906 16.8988 44.9591L15.6529 39.6036C15.591 39.3374 15.4043 39.1178 15.1518 39.014C13.9751 38.5291 12.866 37.8874 11.856 37.1059C11.6394 36.9384 11.3553 36.8863 11.0934 36.9658L5.82669 38.565C5.20676 38.753 4.54666 38.4928 4.22281 37.9314L1.87893 33.873C1.55465 33.3116 1.6589 32.61 2.13186 32.167L6.14456 28.4102C6.34409 28.2235 6.44064 27.9517 6.40433 27.6809C6.31973 27.0537 6.27701 26.4119 6.27701 25.7736C6.27701 25.1366 6.31973 24.4949 6.40433 23.8664C6.44064 23.5955 6.34366 23.3238 6.14413 23.1371L2.13186 19.3812C1.6589 18.9381 1.55465 18.2366 1.8785 17.6752L4.22238 13.6163C4.54666 13.0549 5.20633 12.7943 5.82669 12.9827L11.0934 14.5828C11.3548 14.6622 11.639 14.6101 11.8556 14.4426C12.8651 13.6621 13.9743 13.0195 15.1522 12.5333C15.4043 12.429 15.5906 12.2098 15.6525 11.9441L16.8988 6.59027C17.0458 5.9588 17.6012 5.51746 18.2493 5.51746H22.9371C23.5852 5.51746 24.1406 5.9588 24.2876 6.59027L24.4213 7.16449C24.5273 7.61866 24.981 7.90149 25.4356 7.79554C25.8902 7.69001 26.1726 7.23584 26.0666 6.78168L25.9329 6.20703C25.6069 4.80652 24.3752 3.82812 22.9371 3.82812H18.2493C16.8112 3.82812 15.5794 4.80652 15.2535 6.20703L14.1042 11.1447C13.0707 11.6049 12.0884 12.174 11.1741 12.8413L6.3176 11.366C4.94186 10.9482 3.47854 11.5258 2.75949 12.7712L0.41604 16.8305C-0.303016 18.0755 -0.0723024 19.6315 0.977869 20.6142L4.6774 24.0779C4.61801 24.6397 4.58768 25.2084 4.58768 25.7736C4.58768 26.3393 4.61801 26.908 4.6774 27.4694L0.977442 30.9335C-0.0723025 31.9162 -0.303016 33.4726 0.41604 34.7176L2.75991 38.776C3.47854 40.021 4.94186 40.5991 6.3176 40.1813L11.1741 38.7068C12.0893 39.375 13.0715 39.9433 14.1042 40.4026L15.2535 45.342C15.5794 46.7429 16.8116 47.7209 18.2497 47.7209H22.9371C24.3752 47.7209 25.6073 46.7425 25.9333 45.342L27.0826 40.4026C28.1153 39.9433 29.0975 39.3746 30.0127 38.7064L32.495 39.4605L30.463 41.363C29.7482 42.0321 29.591 43.0912 30.0802 43.9393L31.6354 46.6322C32.1246 47.4799 33.1205 47.8734 34.0574 47.5889L37.011 46.6921C37.5134 47.0471 38.0475 47.356 38.6055 47.6149L39.3044 50.6189C39.5266 51.5725 40.3653 52.2386 41.3441 52.2386H44.4536C45.4329 52.2386 46.2716 51.5725 46.4933 50.6189L47.1923 47.6149C47.7503 47.356 48.2843 47.0471 48.7868 46.6921L51.7403 47.5889C52.6773 47.8734 53.6732 47.4799 54.1628 46.6322L55.7175 43.9393C56.2067 43.0917 56.0495 42.0321 55.3352 41.3634L53.0849 39.2567ZM54.2542 43.0946L52.6995 45.7876C52.6051 45.9512 52.4124 46.0273 52.2312 45.9726L48.8718 44.9523C48.6099 44.8724 48.3258 44.925 48.1096 45.0924C47.508 45.5577 46.8462 45.9405 46.1438 46.2306C45.8913 46.3345 45.705 46.5541 45.6431 46.8198L44.848 50.2361C44.8052 50.4202 44.6429 50.5488 44.4536 50.5488H41.3441C41.1549 50.5488 40.9929 50.4202 40.9498 50.2361L40.1551 46.8198C40.0931 46.5541 39.9064 46.3345 39.6544 46.2302C38.9515 45.9405 38.2902 45.5577 37.6882 45.092C37.5386 44.9762 37.3562 44.9156 37.1716 44.9156C37.0892 44.9156 37.0067 44.9275 36.926 44.9523L33.5665 45.9721C33.3854 46.0273 33.1927 45.9512 33.0983 45.7872L31.5435 43.0946C31.4487 42.9306 31.479 42.7259 31.6174 42.5965L34.1766 40.2005C34.3757 40.0142 34.4727 39.7425 34.4364 39.472C34.386 39.0956 34.3608 38.7124 34.3608 38.3338C34.3608 37.9553 34.386 37.5721 34.4364 37.1957C34.4727 36.9252 34.3757 36.6535 34.1766 36.4672L31.6174 34.0712C31.479 33.9422 31.4487 33.7371 31.5431 33.573L33.0983 30.8805C33.1927 30.7165 33.3854 30.6408 33.5661 30.6955L36.926 31.7158C37.1879 31.7953 37.472 31.7431 37.6882 31.5757C38.2902 31.11 38.9515 30.7271 39.6544 30.437C39.9064 30.3332 40.0931 30.1136 40.1547 29.8479L40.9498 26.4329C40.9925 26.2483 41.1549 26.1197 41.3441 26.1197H44.4536C44.6429 26.1197 44.8052 26.2483 44.848 26.4329L45.6431 29.8479C45.7046 30.1136 45.8913 30.3332 46.1434 30.437C46.8462 30.7271 47.5076 31.11 48.1096 31.5757C48.3258 31.7431 48.6099 31.7953 48.8718 31.7158L52.2312 30.6955C52.4124 30.6404 52.6051 30.7165 52.6995 30.8805L54.2542 33.5735C54.3491 33.7371 54.3187 33.9422 54.1803 34.0712L51.6211 36.4672C51.4216 36.6539 51.325 36.9252 51.3613 37.1957C51.4113 37.5725 51.437 37.9553 51.437 38.3338C51.437 38.7124 51.4113 39.0956 51.3613 39.472C51.325 39.7425 51.4216 40.0142 51.6211 40.2005L54.1803 42.5965C54.3187 42.7259 54.3491 42.9306 54.2542 43.0946Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="56" height="56" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}