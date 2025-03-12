import type { CSSProperties, FC, PropsWithChildren } from "react";
import { Button } from "@taroify/core";
import { Textarea, View } from "@tarojs/components";
import KeyboardAdaptivePopup from "~/components/KeyboardAdaptivePopup";

interface InputPopupProps {
  open: boolean;
  value: string;
  title: string;
  placeholder?: string;
  buttonText?: string;
  maxLength?: number;
  onClose: () => void;
  onChange: (value: string) => void;
  onSubmit: () => void;
  isLoading?: boolean;
  isDisabled?: boolean;
  className?: string;
  textareaStyle?: CSSProperties;
}

const InputPopup: FC<PropsWithChildren<InputPopupProps>> = ({
  open,
  value,
  title,
  placeholder = "",
  buttonText = "提交",
  maxLength = 2000,
  onClose,
  onChange,
  onSubmit,
  isLoading = false,
  isDisabled = false,
  className = "",
  textareaStyle = {},
}) => {
  return (
    <KeyboardAdaptivePopup
      open={open}
      onClose={onClose}
      placement="bottom"
      rounded
    >
      <View className={`mx-auto max-w-md w-full p-6 ${className}`}>
        <View className="mb-4 flex items-center">
          <View className="text-lg font-semibold">{title}</View>
        </View>
        <Textarea
          className="mb-4 w-full rounded-2xl bg-gray-50 p-2"
          style={textareaStyle}
          placeholder={placeholder}
          value={value}
          maxlength={maxLength}
          adjustPosition={false}
          onInput={e => onChange(e.detail.value)}
        />
        <Button
          className="font-bold"
          color="primary"
          shape="round"
          block
          loading={isLoading}
          disabled={isDisabled || isLoading}
          onClick={onSubmit}
        >
          {buttonText}
        </Button>
      </View>
    </KeyboardAdaptivePopup>
  );
};

export default InputPopup;
