import React from "react";

interface QButtonProps {
  label: string;
  onClick?: any;
  styles?: object;
  outlineVariant?: boolean;
  disabled?: boolean;
  className?: any;
}
const QButton = (props: QButtonProps) => {
  const { label, styles, outlineVariant, className } = props;
  return (
    <button
      className={`"btn_filled px-4 py-1 min-w-max md:text-[20px] xs:text-[16px] ${className}" ${outlineVariant}`}
      style={{
        color: outlineVariant ? "#12B0FF" : "#fff",
        background: outlineVariant ? "#fff" : "#12B0FF",
        border: `${outlineVariant && "1px solid #12B0FF"}`,
        borderRadius: 40,
        fontWeight: 700,
        // fontSize: 20,
        ...styles,
      }}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {label}
    </button>
  );
};

export default QButton;
