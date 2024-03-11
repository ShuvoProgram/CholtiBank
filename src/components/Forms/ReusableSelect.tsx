import { Select, SelectItem } from "@nextui-org/react";

const ReusableSelect = ({
  items,
  label,
  placeholder,
  value,
  setValue,
}: {
  items: any;
  label: string;
  placeholder: string;
  value:any
  setValue:any
}) => {
  const handleSelectionChange = (e:any) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <Select
        items={items}
        label={label}
        placeholder={placeholder}
        className="max-w-xs"
        size="sm"
        color="secondary"
        radius="none"
        selectedKeys={[value]}
        onChange={handleSelectionChange}
      >
        {(source: any) => (
          <SelectItem key={source.value}>{source.label}</SelectItem>
        )}
      </Select>
    </div>
  );
};

export default ReusableSelect;
