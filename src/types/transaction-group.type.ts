import TransactionEvent from "./transaction-event";

/**
 * TransactionGroup:
 * 
 * Represents a container of events that are related for a given step in a process, 
 * and therefore may be grouped. In addition to containing granular events, 
 * transaction groups may contain themselves over transaction groups.
 * 
 */
export default interface TransactionGroup{
    name: string,
    transationStart: Date, 
    events: Array<TransactionEvent>,    
    transactionEnd?: Date,
}