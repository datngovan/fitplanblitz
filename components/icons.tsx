import {
  LucideProps,
  Moon,
  SunMedium,
  Twitter,
  type Icon as LucideIcon,
} from "lucide-react"

export type Icon = LucideIcon

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  twitter: Twitter,
  logo: (props: LucideProps) => (
    <svg
      width={props.width || "100%"}
      height={props.height || "auto"}
      viewBox="0 0 272 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_2022_19"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="6"
        y="0"
        width="265"
        height="100"
      >
        <path
          d="M47 1.73205C48.8564 0.660253 51.1436 0.660254 53 1.73205L90.3013 23.268C92.1577 24.3397 93.3013 26.3205 93.3013 28.4641V71.5359C93.3013 73.6795 92.1577 75.6603 90.3013 76.7321L53 98.268C51.1436 99.3397 48.8564 99.3397 47 98.2679L9.69873 76.732C7.84232 75.6603 6.69873 73.6795 6.69873 71.5359V28.4641C6.69873 26.3205 7.84232 24.3397 9.69873 23.2679L47 1.73205Z"
          fill="#12C2E9"
        />
        <path
          d="M102.528 66V36.9091H114.006C116.212 36.9091 118.092 37.3305 119.645 38.1733C121.198 39.0066 122.382 40.1667 123.196 41.6534C124.02 43.1307 124.432 44.8352 124.432 46.767C124.432 48.6989 124.015 50.4034 123.182 51.8807C122.348 53.358 121.141 54.5085 119.56 55.3324C117.988 56.1562 116.084 56.5682 113.849 56.5682H106.534V51.6392H112.855C114.039 51.6392 115.014 51.4356 115.781 51.0284C116.558 50.6117 117.135 50.0388 117.514 49.3097C117.902 48.571 118.097 47.7235 118.097 46.767C118.097 45.8011 117.902 44.9583 117.514 44.2386C117.135 43.5095 116.558 42.946 115.781 42.5483C115.005 42.1411 114.02 41.9375 112.827 41.9375H108.679V66H102.528ZM134.364 36.9091V66H128.313V36.9091H134.364ZM145.433 66.4119C144.041 66.4119 142.801 66.1705 141.712 65.6875C140.623 65.1951 139.761 64.4706 139.126 63.5142C138.501 62.5483 138.189 61.3456 138.189 59.9062C138.189 58.6941 138.411 57.6761 138.857 56.8523C139.302 56.0284 139.908 55.3655 140.675 54.8636C141.442 54.3617 142.313 53.983 143.288 53.7273C144.273 53.4716 145.305 53.2917 146.385 53.1875C147.654 53.0549 148.677 52.9318 149.453 52.8182C150.23 52.6951 150.793 52.5152 151.143 52.2784C151.494 52.0417 151.669 51.6913 151.669 51.2273V51.142C151.669 50.2424 151.385 49.5464 150.817 49.054C150.258 48.5616 149.463 48.3153 148.43 48.3153C147.341 48.3153 146.475 48.5568 145.831 49.0398C145.187 49.5133 144.761 50.1098 144.553 50.8295L138.956 50.375C139.24 49.0492 139.799 47.9034 140.632 46.9375C141.465 45.9621 142.54 45.214 143.857 44.6932C145.182 44.1629 146.716 43.8977 148.459 43.8977C149.671 43.8977 150.831 44.0398 151.939 44.3239C153.056 44.608 154.046 45.0483 154.908 45.6449C155.779 46.2415 156.465 47.0085 156.967 47.946C157.469 48.8741 157.72 49.9867 157.72 51.2841V66H151.982V62.9744H151.811C151.461 63.6562 150.992 64.2576 150.405 64.7784C149.818 65.2898 149.112 65.6922 148.288 65.9858C147.464 66.2699 146.513 66.4119 145.433 66.4119ZM147.166 62.2358C148.056 62.2358 148.842 62.0606 149.524 61.7102C150.206 61.3504 150.741 60.8674 151.129 60.2614C151.518 59.6553 151.712 58.9687 151.712 58.2017V55.8864C151.522 56.0095 151.262 56.1231 150.93 56.2273C150.608 56.322 150.244 56.4119 149.837 56.4972C149.429 56.5729 149.022 56.6439 148.615 56.7102C148.208 56.767 147.839 56.8191 147.507 56.8665C146.797 56.9706 146.177 57.1364 145.646 57.3636C145.116 57.5909 144.704 57.8987 144.411 58.2869C144.117 58.6657 143.97 59.1392 143.97 59.7074C143.97 60.5312 144.268 61.161 144.865 61.5966C145.471 62.0227 146.238 62.2358 147.166 62.2358ZM168.466 53.3864V66H162.415V44.1818H168.182V48.0312H168.438C168.92 46.7623 169.73 45.7585 170.866 45.0199C172.003 44.2718 173.381 43.8977 175 43.8977C176.515 43.8977 177.836 44.2292 178.963 44.892C180.09 45.5549 180.966 46.5019 181.591 47.733C182.216 48.9545 182.528 50.4129 182.528 52.108V66H176.477V53.1875C176.487 51.8523 176.146 50.8106 175.455 50.0625C174.763 49.3049 173.812 48.9261 172.599 48.9261C171.785 48.9261 171.065 49.1013 170.44 49.4517C169.825 49.8021 169.342 50.3134 168.991 50.9858C168.651 51.6487 168.475 52.4489 168.466 53.3864ZM187.411 66V36.9091H199.059C201.199 36.9091 202.984 37.2263 204.414 37.8608C205.844 38.4953 206.919 39.3759 207.638 40.5028C208.358 41.6203 208.718 42.9081 208.718 44.3665C208.718 45.5028 208.491 46.5019 208.036 47.3636C207.582 48.2159 206.957 48.9167 206.161 49.4659C205.375 50.0057 204.476 50.3892 203.462 50.6165V50.9006C204.57 50.9479 205.607 51.2604 206.573 51.8381C207.549 52.4157 208.339 53.2254 208.945 54.267C209.551 55.2992 209.854 56.5303 209.854 57.9602C209.854 59.5038 209.471 60.8816 208.704 62.0938C207.946 63.2964 206.824 64.2481 205.337 64.9489C203.851 65.6496 202.018 66 199.84 66H187.411ZM193.562 60.9716H198.576C200.29 60.9716 201.54 60.6449 202.326 59.9915C203.112 59.3286 203.505 58.4479 203.505 57.3494C203.505 56.5445 203.311 55.8343 202.923 55.2188C202.534 54.6032 201.98 54.1203 201.261 53.7699C200.55 53.4195 199.703 53.2443 198.718 53.2443H193.562V60.9716ZM193.562 49.0824H198.121C198.964 49.0824 199.712 48.9356 200.366 48.642C201.029 48.339 201.549 47.9129 201.928 47.3636C202.317 46.8144 202.511 46.1562 202.511 45.3892C202.511 44.3381 202.137 43.4905 201.388 42.8466C200.65 42.2027 199.599 41.8807 198.235 41.8807H193.562V49.0824ZM219.794 36.9091V66H213.743V36.9091H219.794ZM224.641 66V44.1818H230.692V66H224.641ZM227.681 41.3693C226.781 41.3693 226.01 41.071 225.366 40.4744C224.731 39.8684 224.414 39.1439 224.414 38.3011C224.414 37.4678 224.731 36.7528 225.366 36.1562C226.01 35.5502 226.781 35.2472 227.681 35.2472C228.581 35.2472 229.348 35.5502 229.982 36.1562C230.626 36.7528 230.948 37.4678 230.948 38.3011C230.948 39.1439 230.626 39.8684 229.982 40.4744C229.348 41.071 228.581 41.3693 227.681 41.3693ZM235.426 66V62.392L246.108 49.1676V49.0114H235.795V44.1818H253.395V48.1165L243.366 61.0142V61.1705H253.764V66H235.426ZM269.996 44.1818V48.7273H256.857V44.1818H269.996ZM259.84 38.9545H265.891V59.2955C265.891 59.8542 265.977 60.2898 266.147 60.6023C266.317 60.9053 266.554 61.1184 266.857 61.2415C267.17 61.3646 267.53 61.4261 267.937 61.4261C268.221 61.4261 268.505 61.4025 268.789 61.3551C269.073 61.2983 269.291 61.2557 269.442 61.2273L270.394 65.7301C270.091 65.8248 269.665 65.9337 269.116 66.0568C268.567 66.1894 267.899 66.2699 267.113 66.2983C265.655 66.3551 264.376 66.161 263.278 65.7159C262.189 65.2708 261.341 64.5795 260.735 63.642C260.129 62.7045 259.831 61.5208 259.84 60.0909V38.9545Z"
          fill="#12C2E9"
        />
      </mask>
      <g mask="url(#mask0_2022_19)">
        <rect
          y="-2"
          width="275"
          height="105"
          fill="url(#paint0_linear_2022_19)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_2022_19"
          x1="0"
          y1="50.5"
          x2="275"
          y2="50.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00C9FF" />
          <stop offset="1" stopColor="#92FE9D" />
        </linearGradient>
      </defs>
    </svg>
  ),
  gitHub: (props: LucideProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
}
