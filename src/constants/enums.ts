export enum UserRole {
  user = 'user',
  admin = 'admin',
  loan_officer = 'loan_officer',
  customer_service_representative = 'customer_service_representative',
}

export enum AccountStatus {
  active = 'active',
  inActive = 'inActive',
}

export enum TransactionTypeEnum {
  Deposit = 'Deposit',
  Withdrawal = 'Withdrawal',
  Transfer = 'Transfer',
  Mobile_Recharge = 'Mobile_Recharge',
}

export enum DepositSourceEnum {
  bank_transfer = 'bank_transfer',
  credit_card = 'credit_card',
  atm = 'atm',
  agent = 'agent',
}

export enum WithdrawSourceEnum {
  agent = 'agent',
  atm = 'atm',
}

export enum TransferSourceEnum {
  Cholti_to_Cholti = 'Cholti_to_Cholti',
  NPSB = 'NPSB',
  EFT = 'EFT',
  RTGS = 'RTGS',
  Cash_by_code = 'Cash_by_code',
  BKash = 'BKash',
  Nagad = 'Nagad',
  Prepaid_Card = 'Prepaid_Card',
  Binimoy = 'Binimoy',
}

export enum SimTypeEnum {
  Prepaid = 'Prepaid',
  Postpaid = 'Postpaid',
}

export enum MobileOperatorEnum {
  Grameenphone = 'Grameenphone',
  Robi = 'Robi',
  Banglalink = 'Banglalink',
  Airtel = 'Airtel',
  Teletalk = 'Teletalk',
}

export enum LoanStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  ACTIVE = 'ACTIVE',
  CLOSED = 'CLOSED',
}
