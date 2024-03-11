"use client";

import React, { useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  Spinner,
  getKeyValue,
  useDisclosure,
} from "@nextui-org/react";

import LoadingPage from "@/app/loading";
import { useAllTransactionsQuery } from "@/redux/api/adminApi";
import TransactionModel from "@/components/common/Modal/TransactionModel";

export default function AllTransactions() {
  const [page, setPage] = React.useState(1);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const { data, isLoading } = useAllTransactionsQuery(undefined);
  const allData = data?.data;
  const rowsPerPage = 8;

  const pages = Math.ceil(data?.data?.length / rowsPerPage) ?? 0;
  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    if (isLoading) {
      return <LoadingPage />;
    }
    return allData.slice(start, end);
  }, [page, allData, isLoading]);

  // console.log("items:", items);
  if (isLoading || !items) {
    return <LoadingPage />;
  }

  const loadingState =
    isLoading || data?.data?.length === 0 ? "loading" : "idle";

  const handleDetailsClick = (transaction: any) => {
    setSelectedTransaction(transaction);
    onOpen();
  };
  return (
    <>
      <TransactionModel
        isOpen={isOpen}
        onOpen={onOpen}
        onOpenChange={onOpenChange}
        data={selectedTransaction}
      />
      <Table
        aria-label="Example table with client async pagination"
        classNames={{
          base: " rounded-none border-none  shadow-none",
          thead: " rounded-none ",
          table: " rounded-none border-none  shadow-none",
          th: "bg-gradient-to-b  from-primary-500 to-primary-800 dark:from-primary-300 dark:to-primary-100 text-white font-bold rounded-none",
          wrapper: "rounded-none border-none  shadow-none",
          tr: "border-b rounded-none",
          td: "border rounded-none",
        }}
        bottomContent={
          pages > 0 ? (
            <div className="flex w-full justify-center rounded-none">
              <Pagination
                classNames={{
                  wrapper:
                    "gap-0 overflow-visible h-8 rounded border border-divider rounded-none",
                  item: "w-8 h-8 text-small rounded-none bg-transparent ",
                  cursor:
                    "bg-gradient-to-b  from-primary-500 to-primary-800 dark:from-primary-300 dark:to-primary-100 text-white font-bold rounded-none",
                }}
                isCompact
                showControls
                showShadow
                color="secondary"
                page={page}
                total={pages}
                onChange={(page) => setPage(page)}
              />
            </div>
          ) : null
        }
      >
        <TableHeader className="bg-secondary">
          <TableColumn key={"transactionId"}>TransactionId</TableColumn>
          <TableColumn key={"transactionType"}>Type</TableColumn>
          <TableColumn key={"deposit"}>Amount</TableColumn>
          <TableColumn key={""}>Actions</TableColumn>
        </TableHeader>
        <TableBody
          items={items ?? []}
          loadingContent={<Spinner />}
          loadingState={loadingState}
        >
          {(item: any) => (
            <TableRow key={item.transactionId}>
              {(columnKey) => (
                <TableCell>
                  {columnKey === "withdrawal" ||
                  columnKey === "deposit" ||
                  columnKey === "transfer" ||
                  columnKey === "mobileRecharge"
                    ? [
                        item?.withdrawal?.amount,
                        item?.deposit?.amount,
                        item?.transfer?.amount,
                        item?.mobileRecharge?.amount,
                      ]
                        .filter((amount) => amount !== undefined)
                        .reduce((total, amount) => total + amount, 0)
                    : item[columnKey]}

                  {columnKey === "" && (
                    <button
                      onClick={() => handleDetailsClick(item)}
                      className="text-blue-500 hover:underline focus:outline-none"
                    >
                      Details
                    </button>
                  )}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
}
