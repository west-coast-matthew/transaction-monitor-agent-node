/**
 * TransactionEvent:
 * 
 * The lowest level of reporting activity for a process.
 * 
 * name: a user friendly label for the instance
 * eventTimestamp: the time at which the event was reported.
 * attributes: a collection of meta data for the event. 
 * 
 */
export default interface TransactionEvent{
    name: string,
    eventTimestamp: Date,  
    attributes: Map<string, string>, 
}