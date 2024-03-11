"use client";
import { TbCurrencyTaka, TbPasswordFingerprint } from "react-icons/tb";
import { useState } from "react";
import { BiSolidLogIn } from "react-icons/bi";
import LoadingPage from "@/app/loading";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import ReusableInput from "@/components/Forms/ReusableInput";
import { Modal, ModalContent, ModalBody, Button } from "@nextui-org/react";
import FormTitle from "@/components/Forms/FormTitle";
import { useTransferMoneyMutation } from "@/redux/api/transactionApi";
import { GiBleedingEye } from "react-icons/gi";
import { IoEyeOffSharp } from "react-icons/io5";

const TransferFormModal = ({
  isOpen,
  onOpen,
  onOpenChange,
  source,
}: {
  isOpen: boolean;
  onOpen: any;
  onOpenChange: any;
  source: string;
}) => {
  console.log(source);
  const [transferMoney, { isLoading }] = useTransferMoneyMutation();
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();
  const toggleVisibility = () => setIsVisible(!isVisible);

  const [errorMessage, setErrorMessage] = useState("");

  const loginHandler = async (e: any) => {
    e.preventDefault();
    const amount = parseFloat(e?.target?.amount?.value);
    const bankName = e?.target?.bankName?.value;
    const bankAccountNo = e?.target?.bankAccountNo?.value;
    const creditCardName = e?.target?.creditCardName?.value;
    const creditCardNumber = e?.target?.creditCardNumber?.value;
    const atmId = e?.target?.atmId?.value;
    const agentId = e?.target?.agentId?.value;
    const phoneNumber = e?.target?.phoneNumber?.value;
    const bankBranch = e?.target?.bankBranch?.value;
    const cashByCodePIN = e?.target?.cashByCodePIN?.value;
    const receiverName = e?.target?.receiverName?.value;
    const receiverNID = e?.target?.receiverNID?.value;
    // const reference = e?.target?.reference?.value;

    const data = {
      transferSource: source,
      amount,
      bankName,
      bankAccountNo,
      creditCardName,
      creditCardNumber,
      atmId,
      agentId,
      phoneNumber,
      bankBranch,
      cashByCodePIN,
      receiverName,
      receiverNID,
      // reference,
    };

    try {
      const response = await transferMoney(data).unwrap();

      if (response?.data) {
        toast.success(`${response?.message}`);
        if (isLoading) {
          return <LoadingPage />;
        }
        // onClose();
      }
    } catch (error: any) {
      if (error?.data?.message) {
        setErrorMessage(error?.data?.message);
        // toast.error(error?.data?.message);
      }
    }
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top"
        scrollBehavior="inside"
        backdrop="blur"
        radius="none"
        classNames={{}}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <form
                  onSubmit={loginHandler}
                  className="flex flex-col gap-y-2 py-5"
                >
                  <div className=" mb-2">
                    <FormTitle title="Transfer" />
                  </div>
            
                  {/* Amount */}
                  <ReusableInput
                    label="Amount"
                    name="amount"
                    placeholder="15000"
                    type={"number"}
                    startContent={
                      <TbCurrencyTaka className="text-lg text-default-400  flex-shrink-0" />
                    }
                    isRequired={true}
                    isInvalid={errorMessage ? true : false}
                  />
                  {["NPSB", "EFT", "RTGS"].includes(source) && (
                    <ReusableInput
                      label="Bank Name"
                      name="bankName"
                      placeholder="EBL Bank"
                      type={"text"}
                      startContent={
                        <TbCurrencyTaka className="text-lg text-default-400  flex-shrink-0" />
                      }
                      isRequired={true}
                      isInvalid={errorMessage ? true : false}
                    />
                  )}
                  {["NPSB", "EFT", "RTGS"].includes(source) && (
                    <ReusableInput
                      label="Receiver Name"
                      name="receiverName"
                      placeholder="Mr Karim"
                      type={"text"}
                      isRequired={true}
                      isInvalid={errorMessage ? true : false}
                    />
                  )}

                  {["Cholti_to_Cholti", "NPSB", "EFT", "RTGS"].includes(
                    source
                  ) &&
                    source && (
                      <>
                        <ReusableInput
                          label="Bank Account No"
                          name="bankAccountNo"
                          placeholder="1234567890"
                          type={"text"}
                          isRequired={true}
                          isInvalid={errorMessage ? true : false}
                        />
                      </>
                    )}

                  {source === "Prepaid_Card" && (
                    <>
                      {/* CreditCardName */}
                      <ReusableInput
                        label="Credit Card Holder Name"
                        name="creditCardName"
                        placeholder="John Doe"
                        type={"text"}
                        isRequired={true}
                        isInvalid={errorMessage ? true : false}
                      />

                      {/* CreditCardNumber */}
                      <ReusableInput
                        label="Credit Card Number"
                        name="creditCardNumber"
                        placeholder="1234-5678-9012-3456"
                        type={"text"}
                        isRequired={true}
                        isInvalid={errorMessage ? true : false}
                      />
                    </>
                  )}

                  {source === "ATM" && (
                    <>
                      {/* ATM ID */}
                      <ReusableInput
                        label="ATM ID"
                        name="atmId"
                        placeholder="ATM123"
                        type={"text"}
                        isRequired={true}
                        isInvalid={errorMessage ? true : false}
                      />
                    </>
                  )}
                  {source === "Agent" && (
                    <>
                      {/* Agent ID */}
                      <ReusableInput
                        label="Agent ID"
                        name="agentId"
                        placeholder="Agent123"
                        type={"text"}
                        isRequired={true}
                        isInvalid={errorMessage ? true : false}
                      />
                    </>
                  )}
                  {source === "Binimoy" && (
                    <>
                      {/* Agent ID */}
                      <ReusableInput
                        label="Receiver ID"
                        name="receiverId"
                        placeholder="@sujon007"
                        type={"text"}
                        isRequired={true}
                        isInvalid={errorMessage ? true : false}
                      />
                    </>
                  )}
                  {source === "Cash_by_code" && (
                    <>
                      {/* Agent ID */}
                      <ReusableInput
                        label="Receiver NID"
                        name="receiverNID"
                        placeholder="1323027262"
                        type={"text"}
                        isRequired={true}
                        isInvalid={errorMessage ? true : false}
                      />
                    </>
                  )}
                  {["RTGS", "EFT"].includes(source) && (
                    <>
                      {/* Agent ID */}
                      <ReusableInput
                        label="Bank Branch"
                        name="bankBranch"
                        placeholder="Gulshan -1"
                        type={"text"}
                        isRequired={true}
                        isInvalid={errorMessage ? true : false}
                      />
                    </>
                  )}
                  {["BKash", "Nagad"].includes(source) && (
                    <>
                      {/* Agent ID */}
                      <ReusableInput
                        label="Phone Number"
                        name="phoneNumber"
                        placeholder="01623985191"
                        type={"text"}
                        isRequired={true}
                        isInvalid={errorMessage ? true : false}
                      />
                    </>
                  )}
                  {["Cash_by_code", "Binimoy"].includes(source) && (
                    <>
                      {/* Agent ID */}
                      <ReusableInput
                        label="PIN Code"
                        name="cashByCodePIN"
                        placeholder="****"
                        endContent={
                          <button
                            className="focus:outline-none"
                            type="button"
                            onClick={toggleVisibility}
                          >
                            {isVisible ? (
                              <GiBleedingEye className="text-lg text-default-400 " />
                            ) : (
                              <IoEyeOffSharp className="text-lg text-default-400 " />
                            )}
                          </button>
                        }
                        type={isVisible ? "text" : "password"}
                        startContent={
                          <TbPasswordFingerprint className="text-lg text-default-400 " />
                        }
                        isRequired={true}
                        isInvalid={errorMessage ? true : false}
                      />
                    </>
                  )}

                  {/* Reference */}
                  <ReusableInput
                    label="Reference"
                    name="reference"
                    placeholder="Transaction Reference"
                    type={"text"}
                    errorMessage={errorMessage}
                  />
                  {/* Pin */}
                  {/* <ReusableInput
                  label="Pin"
                  name="pin"
                  placeholder="********"
                  endContent={
                    <button
                      className="focus:outline-none"
                      type="button"
                      onClick={toggleVisibility}
                    >
                      {isVisible ? (
                        <GiBleedingEye className="text-lg text-default-400 " />
                      ) : (
                        <IoEyeOffSharp className="text-lg text-default-400 " />
                      )}
                    </button>
                  }
                  type={isVisible ? "text" : "password"}
                  startContent={
                    <TbPasswordFingerprint className="text-lg text-default-400 " />
                  }
                  isRequired={true}
                  isInvalid={errorMessage ? true : false}
                  errorMessage={errorMessage}
                /> */}
                  <Button
                    type="submit"
                    className="text-white w-full"
                    color="secondary"
                    startContent={<BiSolidLogIn className="text-lg " />}
                    fullWidth={true}
                    radius="none"
                  >
                    Submit
                  </Button>
                </form>
              </ModalBody>
              {/* <ModalFooter>
              <Button color="danger" variant="solid" radius="none" onPress={onClose}>
                Close
              </Button>
            </ModalFooter> */}
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default TransferFormModal;
