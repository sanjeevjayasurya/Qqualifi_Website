import React from "react";

interface QButtonProps {
  label: string;
  onClick?: any;
  styles?: object;
  outlineVariant?: boolean;
}
const QButton = (props: QButtonProps) => {
  const { label, styles, outlineVariant } = props;
  return (
    <button
      className={`"btn_filled px-4 py-1 min-w-max" ${outlineVariant}`}
      style={{
        color: outlineVariant ? "#12B0FF" : "#fff",
        background: outlineVariant ? "#fff" : "#12B0FF",
        border: `${outlineVariant && "1px solid #12B0FF"}`,
        borderRadius: 40,
        fontWeight: 700,
        fontSize: 20,
        ...styles,
      }}
    >
      {label}
    </button>
  );
};

export default QButton;
