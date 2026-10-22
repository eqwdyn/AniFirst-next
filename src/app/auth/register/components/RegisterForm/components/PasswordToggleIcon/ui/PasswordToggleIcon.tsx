import cl from "./PasswordToggleIcon.module.css";

export const PasswordToggleIcon = ({ isVisible }: { isVisible: boolean }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cl.eyeIcon}
  >
    <g clipPath="url(#clip0_201_1098)">
      <path
        d="M8.04971 3.80693C9.79673 3.59872 11.5639 3.96806 13.0813 4.85855C14.5987 5.74905 15.783 7.11175 16.4533 8.73858C16.5158 8.90698 16.5158 9.09222 16.4533 9.26062C16.1777 9.92892 15.8135 10.5571 15.3704 11.1283"
        stroke="#94A3B8"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M10.5627 10.6186C10.1384 11.0285 9.57003 11.2553 8.9801 11.2502C8.39017 11.2451 7.82584 11.0084 7.40868 10.5912C6.99152 10.174 6.75489 9.60964 6.74977 9.01965C6.74464 8.42966 6.97142 7.86126 7.38127 7.43688"
        stroke="#94A3B8"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M13.1085 13.1244C12.1136 13.7138 11.0036 14.0822 9.85381 14.2048C8.704 14.3273 7.54128 14.2011 6.44456 13.8346C5.34783 13.4682 4.34276 12.8701 3.49753 12.0809C2.65231 11.2917 1.98671 10.33 1.5459 9.26085C1.4834 9.09245 1.4834 8.90721 1.5459 8.73881C2.21087 7.12607 3.38088 5.77251 4.88035 4.88125"
        stroke="#94A3B8"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M1.49976 1.49939L16.4995 16.5006"
        stroke="#94A3B8"
        strokeWidth="1.5"
        strokeLinecap="round"
        className={isVisible ? cl.strikeLineVisible : cl.strikeLineHidden}
      />
    </g>
    <defs>
      <clipPath id="clip0_201_1098">
        <rect width="18" height="18" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
