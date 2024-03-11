"use client";
import SourceCard from "@/components/Dashboard/UIElements/SourceCard";
import DepositFormModal from "@/components/common/Modal/DepositFormModal";
import { depositTransactionTypes } from "@/constants/transactionTypes";
import { useDisclosure } from "@nextui-org/react";
import { useState } from "react";

const DepositMoney = () => {
  const [source, setSource] = useState("");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="p-4 lg:p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {depositTransactionTypes.map((type) => (
          <SourceCard
            key={type.id}
            data={type}
            source={source}
            setSource={setSource}
            onOpen={onOpen}
          />
        ))}
      </div>
      <DepositFormModal
        isOpen={isOpen}
        onOpen={onOpen}
        onOpenChange={onOpenChange}
        source={source}
      />
    </div>
  );
};

export default DepositMoney;
