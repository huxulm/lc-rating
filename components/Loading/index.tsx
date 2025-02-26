export default function () {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 vw-100 bg-black">
      <svg
        version="1.1"
        x="0px"
        y="0px"
        height={144}
        width={280}
        viewBox="0 0 560 288"
        enableBackground={"new 0 0 560 288"}
      >
        <style type="text/css">
          {`.st0{fill:none;stroke:#FFF;stroke-miterlimit:10;stroke-dasharray:12.2685,12.2685;}
                .st1{fill:#555;}
                .st2{fill:#FFF;}`}
        </style>
        <g>
          <circle className="st0" cx="280" cy="144" r="82">
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="0 280 144"
              to="360 280 144"
              dur="5s"
              repeatCount="indefinite"
            />
          </circle>
        </g>

        <circle className="st1" cx="280" cy="144" r="58.4" />

        <path
          className="st2"
          d="M263.5,156.8L263.5,156.8c-2.4,0-4.5-2-4.5-4.5V132c0-2.4,2-4.5,4.5-4.5l0,0c2.4,0,4.5,2,4.5,4.5v20.4
	C268,154.8,266,156.8,263.5,156.8z"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="translate"
            dur="1s"
            values="0,10;0,-10;0,10"
            repeatCount="indefinite"
          />
        </path>

        <path
          className="st2"
          d="M280,156.8L280,156.8c-2.4,0-4.5-2-4.5-4.5V132c0-2.4,2-4.5,4.5-4.5l0,0c2.4,0,4.5,2,4.5,4.5v20.4
	C284.5,154.8,282.5,156.8,280,156.8z"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="translate"
            dur="1s"
            values="0,10;0,-10;0,10"
            repeatCount="indefinite"
            begin="0.1s"
          />
        </path>

        <path
          className="st2"
          d="M296.8,156.8L296.8,156.8c-2.4,0-4.5-2-4.5-4.5V132c0-2.4,2-4.5,4.5-4.5h0c2.4,0,4.5,2,4.5,4.5v20.4
	C301.2,154.8,299.2,156.8,296.8,156.8z"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="translate"
            dur="1s"
            values="0,10;0,-10;0,10"
            repeatCount="indefinite"
            begin=".2s"
          />
        </path>
      </svg>
    </div>
  );
}
