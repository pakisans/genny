import { memo } from "react";

const Logo = ({ width, height, color, styles }) => {
  return (
    <svg
      version="1.0"
      className={styles}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 300.000000 300.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
        fill={color}
        stroke="none"
      >
        <path
          d="M1124 2600 c-53 -17 -254 -136 -450 -266 -73 -48 -140 -123 -169
   -190 -37 -83 -30 -88 10 -6 55 110 157 195 389 326 28 16 53 32 56 35 16 19
   147 83 205 100 29 9 133 11 365 9 l325 -3 60 -28 c33 -15 88 -46 123 -69 34
   -22 65 -38 68 -35 10 10 -162 108 -225 127 -57 18 -92 20 -380 19 -284 0 -322
   -2 -377 -19z"
        />
        <path
          d="M1737 2489 c-18 -13 -27 -30 -27 -48 0 -43 46 -79 274 -216 106 -63
   134 -76 162 -73 30 3 34 1 39 -24 18 -81 138 -72 138 10 0 45 -37 76 -83 68
   -32 -5 -37 -3 -49 25 -8 19 -36 45 -70 67 -31 19 -57 39 -59 44 -2 4 -8 8 -13
   8 -5 0 -62 33 -127 74 -142 89 -151 93 -185 65z m220 -120 c207 -130 213 -135
   213 -165 0 -52 -33 -40 -235 88 -107 67 -197 129 -200 136 -7 18 12 52 29 52
   8 0 94 -50 193 -111z m341 -227 c4 -25 -32 -52 -59 -45 -31 8 -36 53 -9 75 20
   16 25 17 44 5 12 -8 22 -23 24 -35z"
        />
        <path
          d="M1346 2394 c-132 -81 -166 -93 -166 -60 0 23 -41 56 -69 56 -14 0
   -37 -12 -52 -26 -26 -25 -29 -25 -50 -10 -30 20 -98 21 -127 0 -12 -8 -31 -33
   -42 -54 -15 -29 -44 -55 -106 -96 -130 -87 -145 -120 -80 -169 l27 -20 57 30
   c31 16 77 43 102 60 47 31 70 40 70 28 0 -9 -65 -53 -77 -53 -5 0 -29 -20 -55
   -44 l-48 -44 -1 -268 c-1 -148 0 -341 1 -429 1 -159 2 -160 28 -187 28 -28
   690 -430 727 -442 25 -7 60 11 233 118 70 43 135 89 146 103 15 20 18 41 17
   99 -2 73 -2 73 30 90 18 9 50 29 72 45 22 16 43 26 48 23 5 -3 9 2 9 10 0 9 3
   16 8 16 4 0 6 -20 4 -44 -2 -24 1 -53 7 -64 6 -12 7 -23 2 -26 -4 -3 -11 -35
   -14 -71 -8 -110 -35 -141 -216 -258 -162 -103 -193 -114 -199 -66 -3 24 10 34
   138 114 77 48 149 98 159 111 21 27 36 117 23 140 -6 12 -11 0 -15 -39 -3 -30
   -13 -66 -22 -80 -9 -14 -75 -62 -146 -107 -146 -92 -169 -117 -149 -156 23
   -42 73 -39 135 9 5 4 61 41 122 80 130 84 170 129 179 203 10 87 10 87 75 119
   34 16 80 46 103 66 l41 37 2 198 c2 110 0 213 -2 230 -7 38 -61 79 -120 90
   -39 7 -76 25 -103 51 -7 7 -43 29 -80 49 -37 21 -69 39 -71 40 -2 2 6 15 18
   30 28 35 27 45 -9 79 -16 16 -28 30 -26 32 2 2 31 -12 65 -32 41 -24 63 -44
   67 -61 8 -31 78 -91 120 -103 35 -10 82 -4 103 13 11 8 16 6 25 -9 6 -11 27
   -36 48 -55 l36 -35 -19 -24 c-25 -31 -24 -59 3 -88 l21 -23 -21 -23 c-12 -13
   -22 -33 -22 -45 0 -27 37 -62 67 -62 49 0 83 71 48 100 -15 13 -21 50 -7 50 4
   0 13 9 20 21 11 17 11 27 2 50 -7 16 -16 29 -21 29 -18 0 -8 29 16 48 52 41
   55 109 7 154 -40 37 -77 43 -119 18 -20 -11 -37 -19 -40 -17 -2 2 -5 36 -7 76
   -2 40 -10 81 -19 94 -8 13 -51 45 -96 72 -88 54 -147 90 -236 145 -31 19 -65
   39 -76 45 -10 5 -19 13 -19 17 0 5 -4 8 -9 8 -5 0 -62 33 -128 73 -117 72
   -183 107 -200 107 -5 0 -72 -39 -147 -86z m509 -165 c196 -121 363 -223 371
   -226 11 -4 14 -29 14 -109 0 -92 -2 -104 -19 -114 -32 -17 -79 -11 -132 16
   -46 23 -50 28 -45 52 6 26 -3 33 -231 175 -131 81 -256 158 -278 171 l-40 23
   -171 -107 -171 -107 4 116 c3 72 9 119 16 123 63 40 322 207 323 207 1 1 163
   -98 359 -220z m-724 131 c12 -7 19 -21 19 -40 0 -23 -5 -31 -25 -36 -47 -12
   -73 36 -39 70 18 19 20 19 45 6z m-147 -31 c13 -7 30 -25 37 -41 10 -24 9 -35
   -4 -63 -18 -37 -49 -51 -94 -42 -20 4 -50 -11 -134 -65 -90 -58 -112 -68 -124
   -58 -32 26 -16 47 90 114 76 49 105 73 105 88 0 26 53 78 79 78 11 0 31 -5 45
   -11z m136 -194 c6 -116 13 -145 36 -145 8 0 14 -7 14 -15 0 -8 -7 -15 -16 -15
   -20 0 -46 -64 -38 -95 3 -14 2 -37 -2 -52 -7 -22 -10 -7 -14 62 -3 50 -3 108
   0 129 10 78 0 151 -25 180 -30 35 -23 68 14 64 26 -3 26 -3 31 -113z m380 30
   c0 -18 -4 -23 -15 -19 -25 10 -19 33 13 43 1 1 2 -10 2 -24z m-423 -431 c7
   -12 27 -34 45 -49 l33 -28 3 134 3 134 152 93 c84 51 159 98 167 104 13 8 57
   -15 210 -109 107 -66 205 -125 218 -132 12 -6 22 -15 22 -19 0 -4 -43 -31 -96
   -60 l-95 -54 -120 72 -119 71 -75 -46 c-74 -46 -75 -48 -75 -89 l-1 -41 -24
   28 c-43 48 -31 80 47 127 29 18 70 46 91 62 l37 30 0 -24 c0 -17 3 -20 9 -9 7
   11 30 2 113 -47 58 -34 113 -62 123 -62 29 0 105 40 105 56 0 10 -13 7 -50
   -14 l-50 -27 -49 27 c-27 15 -81 48 -120 73 -71 45 -71 45 -65 83 3 20 1 48
   -5 62 -8 21 -10 15 -10 -36 l-1 -61 -112 -70 -113 -70 -3 -49 -3 -49 105 -62
   c75 -45 114 -63 139 -63 26 0 73 -22 184 -89 l148 -88 3 -74 3 -74 -63 -41
   c-118 -76 -243 -153 -260 -159 -15 -6 -15 -3 -6 30 10 30 9 38 -5 52 -16 16
   -17 12 -17 -70 0 -48 -2 -87 -5 -87 -2 0 -19 10 -37 22 -19 13 -135 84 -260
   158 l-226 135 -4 75 c-2 41 -3 76 -2 77 0 2 109 -62 241 -142 166 -100 250
   -145 270 -145 18 0 54 16 89 38 32 21 81 51 107 66 l48 28 -3 -42 c-2 -28 2
   -44 10 -47 9 -3 12 11 12 51 l0 55 -93 56 c-64 38 -103 55 -127 55 -26 0 -74
   24 -191 95 -151 92 -196 113 -169 80 14 -17 245 -165 258 -165 5 0 18 -11 31
   -24 l22 -23 -26 -17 c-14 -9 -25 -24 -25 -32 0 -12 7 -10 31 10 34 29 47 31
   83 15 56 -26 55 -112 -1 -138 -43 -20 -103 12 -103 54 0 18 -33 42 -172 126
   -295 179 -287 168 -288 387 0 78 -2 142 -5 142 -3 0 -23 -12 -45 -26 l-40 -27
   2 -350 3 -350 305 -184 c168 -100 308 -183 313 -183 6 0 244 145 320 194 l28
   19 -3 -78 -3 -78 -169 -103 c-93 -57 -172 -104 -177 -104 -5 0 -122 69 -261
   153 -139 85 -302 183 -361 219 l-108 66 -2 424 -2 425 145 94 145 95 5 -211
   c3 -139 9 -217 17 -231z m-140 62 c1 -62 7 -111 17 -137 23 -58 21 -144 -5
   -177 -17 -22 -20 -35 -15 -86 4 -33 11 -65 17 -72 12 -15 30 -26 294 -187 246
   -150 234 -145 271 -113 16 14 94 66 174 115 l145 90 3 -41 c2 -22 0 -44 -5
   -49 -4 -4 -81 -52 -171 -108 l-163 -100 -267 161 c-376 227 -344 205 -332 229
   7 13 11 118 10 300 0 223 2 280 12 277 9 -3 13 -33 15 -102z m1484 26 c33 -27
   30 -78 -6 -109 -47 -41 -115 -9 -115 54 0 64 70 96 121 55z m-866 -37 c33 -32
   31 -60 -5 -97 -25 -24 -36 -29 -58 -24 -36 9 -62 41 -62 77 0 64 78 92 125 44z
   m-151 -23 c-7 -33 -24 -44 -24 -16 0 18 20 58 26 51 2 -2 1 -18 -2 -35z m577
   -48 c71 -42 132 -80 135 -85 3 -5 14 -9 24 -9 11 0 38 -7 60 -16 l40 -16 0
   -223 0 -223 -74 -46 c-40 -25 -76 -46 -80 -46 -3 0 -6 33 -6 73 0 69 2 75 25
   85 l25 12 0 194 c0 127 -4 197 -11 201 -6 4 -13 -2 -16 -14 -3 -12 -9 -21 -13
   -21 -4 0 -5 -21 -3 -47 3 -43 2 -46 -10 -30 -10 11 -13 32 -10 61 3 24 0 52
   -6 62 -8 15 -10 8 -11 -38 0 -32 -2 -58 -4 -58 -16 0 -291 179 -294 191 -3 15
   68 68 92 69 4 0 66 -34 137 -76z m-127 -91 l190 -118 0 -125 c1 -160 -10 -185
   -108 -252 -38 -27 -72 -48 -75 -48 -3 0 -5 36 -3 81 3 77 5 81 38 112 23 21
   37 44 40 68 9 53 -29 90 -198 192 -196 119 -185 109 -158 145 18 24 21 38 16
   67 l-7 36 38 -20 c21 -11 123 -73 227 -138z m550 -9 c19 -18 19 -20 6 -45 -18
   -33 -70 -18 -70 21 0 19 19 40 36 40 7 0 20 -7 28 -16z m-1294 -118 c58 -36
   123 -76 145 -89 22 -14 60 -35 83 -47 41 -21 73 -62 59 -76 -3 -3 -95 48 -204
   114 -146 88 -199 125 -201 141 -2 11 0 21 5 21 4 0 55 -29 113 -64z m1295 -41
   c0 -27 -3 -30 -30 -30 -21 0 -31 5 -33 18 -5 25 17 49 42 45 16 -2 21 -10 21
   -33z m-764 -95 l24 -20 -25 -21 -25 -21 -6 23 c-17 61 -7 73 32 39z m199 -270
   c0 -5 -7 -10 -15 -10 -9 0 -29 -7 -45 -15 -40 -21 -38 -10 3 15 35 22 57 26
   57 10z m-120 -57 c0 -11 -71 -56 -77 -50 -2 3 13 17 34 31 42 29 43 29 43 19z
   m-170 -111 c0 -5 -11 -14 -25 -20 -20 -9 -25 -9 -25 2 0 7 3 16 7 19 9 10 43
   9 43 -1z"
        />
        <path
          d="M1470 2287 c-8 -8 -71 -48 -140 -90 -161 -99 -154 -93 -143 -100 9
   -6 128 63 252 144 25 16 52 29 60 28 9 0 75 -38 146 -85 72 -46 146 -93 165
   -104 19 -11 89 -55 155 -98 l120 -77 14 -58 c7 -31 17 -57 22 -57 5 0 9 28 9
   63 l-1 62 -313 193 c-173 105 -318 192 -323 192 -5 0 -15 -6 -23 -13z"
        />
        <path
          d="M920 2285 c-26 -31 13 -82 44 -56 19 16 21 42 4 59 -16 16 -33 15
   -48 -3z"
        />
        <path
          d="M1935 1498 c-3 -13 -1 -36 4 -53 8 -27 9 -25 10 23 1 55 -5 67 -14
   30z"
        />
        <path
          d="M2120 2463 c0 -5 15 -17 33 -27 17 -10 76 -48 130 -84 136 -90 188
   -152 239 -287 16 -42 18 -44 13 -15 -8 50 -57 148 -101 198 -20 24 -93 80
   -163 126 -152 100 -151 99 -151 89z"
        />
        <path
          d="M461 2010 c-7 -32 -11 -210 -11 -483 0 -468 3 -502 56 -613 38 -81
   104 -139 280 -251 88 -55 166 -103 174 -107 24 -12 -25 27 -61 49 -57 34 -98
   60 -116 72 -10 7 -52 34 -93 61 -91 59 -140 113 -178 195 -50 106 -54 160 -50
   642 2 335 6 445 16 463 7 12 8 22 3 22 -5 0 -14 -23 -20 -50z"
        />
        <path d="M2543 1935 c0 -44 2 -61 4 -37 2 23 2 59 0 80 -2 20 -4 1 -4 -43z" />
        <path d="M2544 1735 c0 -60 1 -84 3 -52 2 32 2 81 0 110 -2 29 -3 3 -3 -58z" />
        <path d="M2540 1415 c0 -54 3 -96 6 -93 7 7 7 179 -1 186 -3 3 -5 -39 -5 -93z" />
        <path
          d="M2533 1053 c-7 -32 -15 -69 -18 -83 -5 -18 -4 -21 3 -10 13 20 36
   124 31 139 -3 7 -10 -14 -16 -46z"
        />
        <path
          d="M640 1072 c-63 -63 -38 -98 152 -211 84 -49 160 -96 169 -103 9 -7
   40 -26 70 -42 30 -16 61 -35 70 -42 8 -8 18 -14 21 -14 3 0 32 -16 64 -35 32
   -19 69 -35 84 -35 60 0 97 65 65 114 -9 13 -64 55 -123 92 -339 213 -480 297
   -509 301 -26 5 -38 0 -63 -25z m124 -39 c355 -213 525 -319 543 -339 27 -30
   19 -64 -19 -78 -22 -8 -56 10 -259 136 -129 79 -267 164 -307 189 -83 50 -100
   80 -62 111 30 24 33 24 104 -19z"
        />
        <path
          d="M2240 969 c-111 -70 -142 -113 -108 -147 24 -24 70 -12 154 40 95 60
   119 95 89 128 -27 30 -63 24 -135 -21z m114 25 c9 -3 16 -17 16 -29 0 -19 -19
   -37 -92 -84 -97 -63 -118 -70 -137 -47 -20 24 0 46 93 107 97 63 96 62 120 53z"
        />
        <path
          d="M2476 896 c-14 -24 -44 -62 -66 -85 -50 -50 -53 -68 -4 -20 38 36 86
   102 97 132 11 30 0 19 -27 -27z"
        />
        <path
          d="M2187 655 c-87 -56 -186 -118 -220 -136 l-62 -34 -190 -6 -190 -6
   190 1 c189 1 190 1 244 30 80 41 401 244 401 252 0 10 -26 -5 -173 -101z"
        />
        <path
          d="M986 541 c18 -18 133 -61 176 -65 l43 -5 -45 12 c-57 15 -142 48
   -154 59 -14 11 -33 11 -20 -1z"
        />
        <path d="M1288 473 c46 -2 118 -2 160 0 42 1 5 3 -83 3 -88 0 -123 -2 -77 -3z" />
      </g>
    </svg>
  );
};

export default memo(Logo);