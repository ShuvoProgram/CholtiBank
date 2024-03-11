"use client";

import TransactionDetails from "@/components/Transaction/TransactionDetails";
import { Modal, ModalContent, ModalBody, Button } from "@nextui-org/react";
const TransactionModel = ({
    isOpen,
    onOpen,
    onOpenChange,
    data,
  }: {
    isOpen: boolean;
    onOpen: any;
    onOpenChange: any;
    data: any;
  }) => {



    return (
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
              <TransactionDetails transaction={data}/>
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
    );
};

export default TransactionModel;