import TransactionGroup from "./transaction-group.type";

/**
 * Transaction:
 * 
 * Top level grouping of activity. Transactions are meant to contain all related 
 * activity under a high level use case. For example, an application for a loan
 * would require mutliple steps including validation the applicants basic 
 * information, performing various risk related checks, and then calculating 
 * loan terms and determining if the loan is actually approved.
 * 
 * name: a user friendly label for the instance
 * transactionStart:
 * transactionSteps:
 * transactionEnd:
 * 
 */
export default interface Transaction{
    name: string,
    transationStart: Date, 
    transactionSteps: Array<TransactionGroup>,
    transactionEnd?: Date,
}