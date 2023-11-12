import { FC } from "react";
import { Card } from "./card";
import Link from "next/link";

export const EnsoPopover: FC = () => {
  return (
    <Card className="fixed bottom-3 left-3 right-3 flex items-center shadow-2xl drop-shadow-lg dark:bg-blue-700">
      <Link
        href="https://streaklinks.com/Bu6rayef3-dPs_08Nw1DzHyC/https%3A%2F%2Ftestflight.apple.com%2Fjoin%2FoujIujmH"
        className="w-56"
        rel="noopener noreferrer"
        target="_blank"
      >
        <svg
          viewBox="0 0 574 170"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-blue-700 dark:fill-white"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M41 0.140114H467.67V0.120117H532.91H532.913C534.442 0.120117 535.991 0.120117 537.51 0.130112C538.381 0.136861 539.27 0.152724 540.152 0.168472C540.577 0.176057 541.001 0.183616 541.42 0.190117C544.26 0.220117 547.09 0.470117 549.9 0.940117C552.71 1.42012 555.44 2.31011 557.99 3.60011C563.09 6.22011 567.24 10.3801 569.86 15.4801C571.14 18.0201 572.03 20.7401 572.49 23.5501C572.97 26.3601 573.23 29.2001 573.28 32.0401C573.3 33.3461 573.3 34.6422 573.3 35.9383V35.9501C573.33 37.4901 573.33 39.0301 573.33 40.5801V129.34C573.33 130.91 573.33 132.44 573.3 133.98C573.3 135.3 573.3 136.57 573.28 137.89C573.22 140.74 572.96 143.57 572.49 146.38C572.03 149.19 571.14 151.92 569.86 154.46C568.56 156.98 566.87 159.3 564.85 161.3C562.85 163.32 560.53 165.01 557.99 166.3C555.44 167.59 552.72 168.5 549.9 168.98C547.1 169.45 544.26 169.7 541.42 169.73C540.13 169.76 538.8 169.78 537.51 169.78C535.98 169.79 534.43 169.79 532.91 169.79H40.9901C39.4401 169.79 37.9001 169.79 36.3501 169.78C35.0501 169.78 33.76 169.77 32.45 169.74C29.6 169.7 26.76 169.45 23.95 168.99C21.15 168.5 18.43 167.6 15.89 166.31C13.35 165.02 11.04 163.33 9.03004 161.31C7.00004 159.32 5.32004 157 4.03004 154.47C2.74004 151.93 1.85005 149.2 1.38005 146.39C0.910051 143.58 0.650041 140.74 0.620041 137.9C0.589697 136.899 0.576622 135.926 0.563346 134.939C0.559122 134.625 0.554877 134.309 0.550049 133.99V35.9601C0.555 35.6358 0.559339 35.3121 0.563671 34.9888C0.576836 34.0064 0.589944 33.0283 0.620041 32.0501C0.650041 29.2001 0.910051 26.3701 1.38005 23.5601C1.85005 20.7501 2.74004 18.0301 4.03004 15.4901C5.32004 12.9401 7.01004 10.6201 9.03004 8.61012C11.05 6.60011 13.36 4.91012 15.9 3.61012C18.44 2.32012 21.1501 1.43011 23.9601 0.950111C26.7701 0.480111 29.6101 0.230111 32.4601 0.200111L32.5732 0.198383C33.8444 0.178968 35.0975 0.159828 36.36 0.150116C37.91 0.140116 39.44 0.140114 41 0.140114ZM32.6023 166.041C33.8643 166.061 35.1076 166.08 36.38 166.08L532.91 166.11L537.51 166.1C538.78 166.1 540.08 166.08 541.32 166.05C543.98 166.02 546.63 165.78 549.25 165.36C551.71 164.95 554.09 164.16 556.32 163.03C558.52 161.91 560.53 160.44 562.26 158.69C564 156.97 565.45 154.98 566.57 152.81C567.69 150.58 568.47 148.19 568.86 145.73C569.29 143.13 569.53 140.5 569.58 137.87C569.6 136.574 569.6 135.318 569.6 133.943V133.93C569.63 132.41 569.63 130.91 569.63 129.37V40.6101C569.63 39.0801 569.63 37.5701 569.6 35.9801V35.9568C569.6 34.6746 569.6 33.3929 569.59 32.2001C569.54 29.5201 569.29 26.8501 568.85 24.2001C568.45 21.7701 567.68 19.4201 566.58 17.2101C564.32 12.8101 560.74 9.22011 556.34 6.95011C554.1 5.82011 551.71 5.04012 549.25 4.62012C546.65 4.19012 544.01 3.96011 541.37 3.93011L537.5 3.87012H36.39L32.56 3.92011C29.9 3.95011 27.24 4.19012 24.61 4.62012C22.17 5.03012 19.81 5.81011 17.6 6.92011C15.41 8.05011 13.4 9.51012 11.66 11.2601C9.91002 12.9901 8.46002 14.9901 7.35002 17.1901C6.22002 19.4101 5.44001 21.7901 5.04001 24.2401C4.61001 26.8601 4.37001 29.5201 4.34001 32.1801C4.31001 33.0301 4.27002 35.9701 4.27002 35.9701V133.94C4.27002 133.94 4.31001 136.92 4.34001 137.81C4.37001 140.47 4.61001 143.13 5.04001 145.76C5.44001 148.21 6.22001 150.58 7.34001 152.79C8.45001 154.98 9.91001 156.98 11.67 158.71C13.4 160.46 15.4 161.91 17.59 163.02C19.81 164.14 22.17 164.93 24.62 165.35C27.24 165.77 29.89 166 32.55 166.04L32.6023 166.041Z"
          />
          <path d="M139.2 84.5002C139.3 77.0202 143.22 70.1102 149.59 66.1902C145.55 60.4202 139.03 56.8902 131.99 56.6702C124.58 55.8902 117.41 61.1002 113.63 61.1002C109.78 61.1002 103.97 56.7402 97.7201 56.8702C89.4901 57.1402 82.0001 61.7102 77.9901 68.9002C69.4601 83.6702 75.8201 105.37 83.9901 117.31C88.0801 123.16 92.8601 129.68 99.1101 129.45C105.23 129.2 107.51 125.55 114.9 125.55C122.21 125.55 124.36 129.45 130.74 129.3C137.3 129.2 141.44 123.43 145.38 117.53C148.32 113.36 150.58 108.76 152.08 103.89C144.28 100.6 139.21 92.9602 139.2 84.5002ZM127.16 48.8202C130.74 44.5202 132.5 39.0002 132.08 33.4202C126.61 33.9902 121.56 36.6102 117.93 40.7402C114.35 44.8202 112.53 50.1502 112.89 55.5602C118.42 55.6202 123.68 53.1302 127.16 48.8202Z" />
          <path d="M212.6 115.25H192.53L187.7 129.48H179.2L198.21 76.8102H207.04L226.06 129.48H217.41L212.6 115.25ZM194.6 108.68H210.51L202.66 85.5802H202.44C202.45 85.5802 194.6 108.68 194.6 108.68ZM267.13 110.28C267.13 122.21 260.74 129.88 251.1 129.88C246.12 130.14 241.43 127.53 239.02 123.16H238.84V142.18H230.96V91.0802H238.59V97.4702H238.73C241.24 93.1302 245.94 90.5202 250.96 90.6802C260.71 90.6902 267.13 98.3902 267.13 110.28ZM259.03 110.28C259.03 102.51 255.01 97.4002 248.88 97.4002C242.86 97.4002 238.81 102.62 238.81 110.29C238.81 118.03 242.86 123.21 248.88 123.21C255.01 123.21 259.03 118.13 259.03 110.28ZM309.39 110.28C309.39 122.21 303 129.88 293.36 129.88C288.38 130.14 283.69 127.53 281.28 123.16H281.1V142.18H273.22V91.0802H280.85V97.4702H280.99C283.51 93.1302 288.2 90.5202 293.22 90.6802C302.97 90.6902 309.39 98.3902 309.39 110.28ZM301.29 110.28C301.29 102.51 297.27 97.4002 291.14 97.4002C285.12 97.4002 281.07 102.62 281.07 110.29C281.07 118.03 285.12 123.21 291.14 123.21C297.27 123.21 301.29 118.13 301.29 110.28ZM337.32 114.81C337.91 120.03 342.98 123.46 349.91 123.46C356.55 123.46 361.33 120.03 361.33 115.32C361.33 111.23 358.45 108.79 351.62 107.11L344.79 105.47C335.12 103.13 330.63 98.6102 330.63 91.2702C330.63 82.1802 338.55 75.9402 349.79 75.9402C360.92 75.9402 368.55 82.1802 368.81 91.2702H360.85C360.37 86.0102 356.03 82.8402 349.68 82.8402C343.33 82.8402 338.99 86.0502 338.99 90.7202C338.99 94.4502 341.77 96.6302 348.56 98.3102L354.36 99.7402C365.17 102.29 369.65 106.64 369.65 114.34C369.65 124.19 361.8 130.37 349.32 130.37C337.64 130.37 329.75 124.34 329.24 114.82C329.25 114.81 337.32 114.81 337.32 114.81ZM386.68 82.0002V91.0902H393.98V97.3302H386.68V118.5C386.68 121.79 388.14 123.32 391.35 123.32C392.22 123.3 393.08 123.24 393.94 123.14V129.34C392.49 129.61 391.03 129.73 389.56 129.71C381.79 129.71 378.75 126.79 378.75 119.35V97.3402H373.16V91.1002H378.75V82.0002H386.68ZM398.2 110.28C398.2 98.2002 405.32 90.6102 416.41 90.6102C427.54 90.6102 434.63 98.2002 434.63 110.28C434.63 122.4 427.58 129.95 416.41 129.95C405.25 129.96 398.2 122.4 398.2 110.28ZM426.6 110.28C426.6 101.99 422.8 97.1002 416.41 97.1002C410.03 97.1002 406.23 102.03 406.23 110.28C406.23 118.6 410.03 123.45 416.41 123.45C422.8 123.46 426.6 118.61 426.6 110.28ZM441.13 91.0802H448.65V97.6102H448.83C449.88 93.4002 453.73 90.5102 458.06 90.6702C458.97 90.6702 459.88 90.7702 460.76 90.9602V98.3302C459.61 97.9802 458.42 97.8202 457.22 97.8502C454.9 97.7602 452.66 98.6802 451.08 100.38C449.5 102.08 448.74 104.38 449.01 106.69V129.46H441.12V91.0802H441.13ZM497.11 118.2C496.05 125.17 489.26 129.95 480.58 129.95C469.41 129.95 462.48 122.47 462.48 110.46C462.48 98.4202 469.45 90.6002 480.25 90.6002C490.87 90.6002 497.55 97.9002 497.55 109.54V112.24H470.43V112.72C470.18 115.58 471.16 118.41 473.14 120.49C475.12 122.57 477.89 123.7 480.76 123.6C484.59 123.96 488.19 121.76 489.63 118.2H497.11ZM470.46 106.74H489.66C489.8 104.17 488.87 101.66 487.08 99.8102C485.29 97.9602 482.81 96.9402 480.24 96.9902C477.65 96.9702 475.16 97.9902 473.32 99.8302C471.49 101.66 470.45 104.15 470.46 106.74Z" />
          <path d="M193.62 37.1702C196.97 36.9302 200.24 38.2002 202.55 40.6402C204.86 43.0702 205.95 46.4102 205.53 49.7402C205.53 57.8302 201.16 62.4702 193.62 62.4702H184.48V37.1602H193.62V37.1702ZM188.41 58.9002H193.18C195.57 59.0402 197.9 58.1002 199.52 56.3402C201.14 54.5802 201.88 52.1702 201.53 49.8002C201.85 47.4402 201.11 45.0602 199.49 43.3102C197.87 41.5602 195.56 40.6202 193.18 40.7502H188.41V58.9002ZM209.96 52.9202C209.63 49.4902 211.27 46.1802 214.19 44.3702C217.11 42.5502 220.81 42.5502 223.73 44.3702C226.65 46.1802 228.29 49.4902 227.96 52.9202C228.29 56.3502 226.66 59.6602 223.73 61.4802C220.81 63.3002 217.11 63.3002 214.18 61.4802C211.27 59.6702 209.63 56.3502 209.96 52.9202ZM224.1 52.9202C224.1 48.7802 222.24 46.3602 218.98 46.3602C215.7 46.3602 213.86 48.7802 213.86 52.9202C213.86 57.1002 215.7 59.5002 218.98 59.5002C222.24 59.5002 224.1 57.0802 224.1 52.9202ZM251.92 62.4802H248.01L244.06 48.4202H243.76L239.83 62.4802H235.96L230.69 43.3802H234.51L237.93 57.9502H238.21L242.13 43.3802H245.75L249.67 57.9502H249.97L253.37 43.3802H257.14L251.92 62.4802ZM261.59 43.3802H265.22V46.4102H265.5C266.48 44.1802 268.77 42.8102 271.2 43.0102C273.08 42.8702 274.93 43.5902 276.21 44.9702C277.5 46.3502 278.09 48.2402 277.81 50.1102V62.4702H274.04V51.0502C274.04 47.9802 272.71 46.4602 269.92 46.4602C268.64 46.4002 267.4 46.9002 266.53 47.8302C265.65 48.7602 265.23 50.0302 265.36 51.3002V62.4702H261.59V43.3802ZM283.82 35.9202H287.59V62.4702H283.82V35.9202ZM292.82 52.9202C292.49 49.4902 294.13 46.1802 297.06 44.3702C299.98 42.5502 303.68 42.5502 306.6 44.3702C309.52 46.1802 311.17 49.4902 310.84 52.9202C311.17 56.3502 309.54 59.6602 306.61 61.4802C303.68 63.3002 299.98 63.3002 297.06 61.4802C294.13 59.6702 292.49 56.3502 292.82 52.9202ZM306.96 52.9202C306.96 48.7802 305.1 46.3602 301.84 46.3602C298.56 46.3602 296.72 48.7802 296.72 52.9202C296.72 57.1002 298.56 59.5002 301.84 59.5002C305.1 59.5002 306.96 57.0802 306.96 52.9202ZM314.81 57.0802C314.81 53.6402 317.37 51.6602 321.91 51.3802L327.08 51.0802V49.4302C327.08 47.4102 325.75 46.2802 323.17 46.2802C321.07 46.2802 319.61 47.0502 319.19 48.4002H315.54C315.92 45.1202 319.01 43.0202 323.34 43.0202C328.13 43.0202 330.83 45.4002 330.83 49.4402V62.4902H327.2V59.8002H326.9C325.67 61.7602 323.47 62.9102 321.16 62.8002C319.54 62.9702 317.92 62.4402 316.71 61.3502C315.51 60.2602 314.81 58.7102 314.81 57.0802ZM327.08 55.4502V53.8502L322.41 54.1502C319.78 54.3302 318.59 55.2202 318.59 56.9102C318.59 58.6302 320.08 59.6302 322.13 59.6302C323.34 59.7502 324.56 59.3802 325.49 58.5902C326.43 57.7902 327 56.6602 327.08 55.4502ZM335.79 52.9202C335.79 46.8802 338.89 43.0602 343.72 43.0602C346.15 42.9502 348.44 44.2502 349.58 46.4102H349.86V35.9202H353.63V62.4802H350.02V59.4602H349.72C348.5 61.6002 346.18 62.8902 343.72 62.7902C338.86 62.7902 335.79 58.9702 335.79 52.9202ZM339.68 52.9202C339.68 56.9702 341.59 59.4102 344.78 59.4102C347.96 59.4102 349.92 56.9402 349.92 52.9402C349.92 48.9602 347.93 46.4502 344.78 46.4502C341.62 46.4502 339.68 48.9002 339.68 52.9202ZM369.22 52.9202C368.89 49.4902 370.53 46.1802 373.45 44.3702C376.37 42.5502 380.07 42.5502 382.99 44.3702C385.91 46.1802 387.55 49.4902 387.22 52.9202C387.55 56.3502 385.92 59.6602 382.99 61.4802C380.07 63.3002 376.37 63.3002 373.44 61.4802C370.52 59.6702 368.88 56.3502 369.22 52.9202ZM383.36 52.9202C383.36 48.7802 381.5 46.3602 378.24 46.3602C374.96 46.3602 373.12 48.7802 373.12 52.9202C373.12 57.1002 374.96 59.5002 378.24 59.5002C381.5 59.5002 383.36 57.0802 383.36 52.9202ZM392.29 43.3802H395.92V46.4102H396.2C397.18 44.1802 399.47 42.8102 401.9 43.0102C403.78 42.8702 405.63 43.5902 406.91 44.9702C408.2 46.3502 408.78 48.2402 408.51 50.1102V62.4702H404.74V51.0502C404.74 47.9802 403.41 46.4602 400.62 46.4602C399.34 46.4002 398.11 46.9002 397.23 47.8302C396.36 48.7602 395.93 50.0302 396.07 51.3002V62.4702H392.3V43.3802H392.29ZM429.81 38.6302V43.4702H433.95V46.6402H429.81V56.4602C429.81 58.4602 430.63 59.3402 432.51 59.3402C432.99 59.3402 433.47 59.3102 433.95 59.2502V62.3902C433.27 62.5102 432.59 62.5802 431.9 62.5902C427.71 62.5902 426.04 61.1102 426.04 57.4302V46.6402H423V43.4702H426.03V38.6302C426.03 38.6302 429.81 38.6302 429.81 38.6302ZM439.09 35.9202H442.83V46.4402H443.13C444.15 44.1902 446.48 42.8202 448.95 43.0202C450.82 42.9202 452.64 43.6602 453.92 45.0302C455.19 46.4102 455.78 48.2802 455.53 50.1402V62.4702H451.76V51.0602C451.76 48.0102 450.34 46.4602 447.68 46.4602C446.37 46.3502 445.08 46.8302 444.15 47.7702C443.22 48.7002 442.76 50.0002 442.87 51.3102V62.4702H439.1V35.9202H439.09ZM477.5 57.3202C476.44 60.9202 472.96 63.2502 469.22 62.8402C466.68 62.9102 464.23 61.8502 462.53 59.9502C460.83 58.0502 460.05 55.5002 460.4 52.9802C460.06 50.4502 460.84 47.8902 462.53 45.9802C464.22 44.0602 466.65 42.9802 469.21 43.0002C474.52 43.0002 477.73 46.6302 477.73 52.6302V53.9402H464.25V54.1502C464.13 55.5702 464.62 56.9702 465.58 58.0102C466.55 59.0502 467.91 59.6402 469.33 59.6202C471.18 59.8402 472.97 58.9302 473.88 57.3002L477.5 57.3202ZM464.25 51.1702H473.9C473.99 49.8702 473.54 48.6002 472.64 47.6602C471.75 46.7102 470.49 46.2002 469.19 46.2202C467.87 46.2002 466.6 46.7202 465.67 47.6602C464.74 48.5802 464.23 49.8502 464.25 51.1702Z" />
        </svg>
      </Link>
      <p className="ml-4 text-lg text-blue-700 dark:text-white">
        View ensō leaderboard
      </p>
    </Card>
  );
};
